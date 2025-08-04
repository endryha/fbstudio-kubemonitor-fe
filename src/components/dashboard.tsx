"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  LayoutGrid,
  List,
  RefreshCw,
  Search,
  Server,
  X,
  Globe,
  Filter,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

import { fetchDeployments, fetchCurrentNamespace } from '@/lib/api';
import type { DeploymentAggregate, DeploymentStatus } from '@/types/deployment';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KubeMonLogo } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { DeploymentList } from '@/components/deployment-list';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group';
import { DeploymentDetail } from '@/components/deployment-detail';
import { useToast } from '@/hooks/use-toast';
import { DeploymentTable } from '@/components/deployment-table';
import { Skeleton } from '@/components/ui/skeleton';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

const REFRESH_INTERVALS = {
  '10s': 10000,
  '30s': 30000,
  '1m': 60000,
  '5m': 300000,
  '10m': 60000,
  Off: 0,
};

type SortKey = 'lastDeployed' | 'name' | 'chartVersion' | 'status';
type SortDirection = 'asc' | 'desc';
type ViewMode = 'list' | 'card';

export default function Dashboard() {
  const [allDeployments, setAllDeployments] = useState<DeploymentAggregate[]>([]);
  const [currentNamespace, setCurrentNamespace] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<DeploymentStatus[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>('lastDeployed');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [refreshInterval, setRefreshInterval] = useState<number>(30000);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [selectedDeployment, setSelectedDeployment] = useState<DeploymentAggregate | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const { toast } = useToast();

  const fetchData = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) {
      setIsRefreshing(true);
    } else if(!allDeployments.length) {
      setIsLoading(true);
    }
    setError(null);
    try {
      const [data, namespace] = await Promise.all([
        fetchDeployments(),
        fetchCurrentNamespace(),
      ]);
      setAllDeployments(data);
      setCurrentNamespace(namespace);
      setLastUpdated(new Date());
    } catch (e: any) {
      setError(e.message || 'An unknown error occurred.');
      toast({
        variant: 'destructive',
        title: 'Failed to fetch data',
        description: e.message,
      });
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [toast, allDeployments.length]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (refreshInterval > 0) {
      const intervalId = setInterval(() => fetchData(true), refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [refreshInterval, fetchData]);

  const deployments = useMemo(() => {
    return allDeployments.filter(d => d.helm.k8sResource.namespace === currentNamespace);
  }, [allDeployments, currentNamespace]);

  const filteredDeployments = useMemo(() => {
    return [...deployments]
      .filter(d => {
        const search = searchTerm.toLowerCase();
        return (
          d.manifest.name.toLowerCase().includes(search) ||
          d.helm.description.toLowerCase().includes(search) ||
          d.manifest.chartVersion.toLowerCase().includes(search)
        );
      })
      .filter(d => statusFilter.length === 0 || statusFilter.includes(d.status))
      .sort((a, b) => {
        const aVal = a.helm.lastDeployed;
        const bVal = b.helm.lastDeployed;
        let comparison = 0;
        switch (sortBy) {
          case 'lastDeployed':
            comparison = new Date(aVal).getTime() - new Date(bVal).getTime();
            break;
          case 'name':
            comparison = a.manifest.name.localeCompare(b.manifest.name);
            break;
          case 'chartVersion':
            comparison = a.manifest.chartVersion.localeCompare(b.manifest.chartVersion);
            break;
          case 'status':
            comparison = a.status.localeCompare(b.status);
            break;
        }
        return sortDirection === 'desc' ? -comparison : comparison;
      });
  }, [deployments, searchTerm, statusFilter, sortBy, sortDirection]);

  const serviceDeployments = useMemo(
    () => filteredDeployments.filter(d => d.category === 'SERVICE'),
    [filteredDeployments]
  );
  const infraDeployments = useMemo(
    () => filteredDeployments.filter(d => d.category === 'INFRASTRUCTURE'),
    [filteredDeployments]
  );
  
  const toggleSortDirection = () => {
    setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const renderHeader = () => (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <KubeMonLogo className="h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            KubeMon
          </h1>
          <div className="hidden md:flex items-center gap-2 border-l pl-4 ml-2">
            <Globe className="h-5 w-5 text-accent" />
            {currentNamespace ? (
              <span className="text-lg font-medium text-muted-foreground font-code">{currentNamespace}</span>
            ) : (
              <Skeleton className="h-6 w-32" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {lastUpdated && (
            <span className="text-sm text-muted-foreground hidden md:inline">
              Last updated: {formatDistanceToNow(lastUpdated, { addSuffix: true })}
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => fetchData(true)}
            disabled={isRefreshing}
          >
            <RefreshCw className={isRefreshing ? 'animate-spin' : ''} />
          </Button>
          <Select
            defaultValue="30s"
            onValueChange={value =>
              setRefreshInterval(REFRESH_INTERVALS[value as keyof typeof REFRESH_INTERVALS])
            }
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Refresh" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(REFRESH_INTERVALS).map(interval => (
                <SelectItem key={interval} value={interval}>
                  {interval}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by name, description, version..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
              onClick={() => setSearchTerm('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ToggleGroup
              type="multiple"
              variant="outline"
              value={statusFilter}
              onValueChange={(value: DeploymentStatus[]) => setStatusFilter(value)}
              aria-label="Filter by status"
              className="hidden sm:flex"
            >
              <ToggleGroupItem value="DEPLOYED" aria-label="Deployed">Deployed</ToggleGroupItem>
              <ToggleGroupItem value="PENDING_DEPLOYMENT" aria-label="Pending">Pending</ToggleGroupItem>
              <ToggleGroupItem value="FAILED" aria-label="Failed">Failed</ToggleGroupItem>
            </ToggleGroup>
             <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="sm:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Status
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                 <ToggleGroup
                  type="multiple"
                  variant="outline"
                  value={statusFilter}
                  onValueChange={(value: DeploymentStatus[]) => setStatusFilter(value)}
                  aria-label="Filter by status"
                  className="flex-col"
                >
                  <ToggleGroupItem value="DEPLOYED" aria-label="Deployed" className="w-full justify-start">Deployed</ToggleGroupItem>
                  <ToggleGroupItem value="PENDING_DEPLOYMENT" aria-label="Pending" className="w-full justify-start">Pending</ToggleGroupItem>
                  <ToggleGroupItem value="FAILED" aria-label="Failed" className="w-full justify-start">Failed</ToggleGroupItem>
                </ToggleGroup>
              </PopoverContent>
            </Popover>
          </div>
          <Separator orientation="vertical" className="h-8 hidden sm:block"/>
          <div className="flex items-center gap-2">
             <ToggleGroup
              type="single"
              variant="outline"
              value={viewMode}
              onValueChange={(value: ViewMode) => value && setViewMode(value)}
              aria-label="View mode"
            >
              <ToggleGroupItem value="card" aria-label="Card view">
                <LayoutGrid className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                <List className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>

            <div className="flex items-center gap-1">
              <Select value={sortBy} onValueChange={(v: SortKey) => setSortBy(v)}>
                <SelectTrigger id="sort-by" className="w-auto md:w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lastDeployed">Deployment time</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="chartVersion">Version</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" onClick={toggleSortDirection} className="h-10 w-10">
                {sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (error) {
      return (
        <Alert variant="destructive" className="mt-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      );
    }
    
    const ViewComponent = viewMode === 'list' ? DeploymentTable : DeploymentList;

    return (
      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="services">
            <Server className="mr-2 h-4 w-4" /> Services ({serviceDeployments.length})
          </TabsTrigger>
          <TabsTrigger value="infrastructure">
            <Server className="mr-2 h-4 w-4" /> Infrastructure ({infraDeployments.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          <ViewComponent
            deployments={serviceDeployments}
            isLoading={isLoading}
            onRowClick={setSelectedDeployment}
          />
        </TabsContent>
        <TabsContent value="infrastructure">
          <ViewComponent
            deployments={infraDeployments}
            isLoading={isLoading}
            onRowClick={setSelectedDeployment}
          />
        </TabsContent>
      </Tabs>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderContent()}
      <DeploymentDetail
        deployment={selectedDeployment}
        isOpen={!!selectedDeployment}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedDeployment(null);
        }}
      />
    </>
  );
}
