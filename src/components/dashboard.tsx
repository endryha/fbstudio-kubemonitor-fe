"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ChevronDown,
  LayoutGrid,
  List,
  ListFilter,
  RefreshCw,
  Search,
  Server,
  X,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

import { fetchDeployments } from '@/lib/api';
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group';
import { DeploymentDetail } from '@/components/deployment-detail';
import { useToast } from '@/hooks/use-toast';
import { DeploymentTable } from '@/components/deployment-table';

const REFRESH_INTERVALS = {
  '10s': 10000,
  '30s': 30000,
  '1m': 60000,
  '5m': 300000,
  '10m': 600000,
  Off: 0,
};

type SortKey = 'lastDeployed' | 'name' | 'appVersion' | 'status';
type ViewMode = 'card' | 'list';

export default function Dashboard() {
  const [deployments, setDeployments] = useState<DeploymentAggregate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<DeploymentStatus[]>([]);
  const [namespaceFilter, setNamespaceFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortKey>('lastDeployed');
  const [refreshInterval, setRefreshInterval] = useState<number>(30000);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [selectedDeployment, setSelectedDeployment] = useState<DeploymentAggregate | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const { toast } = useToast();

  const namespaces = useMemo(() => {
    const all = new Set(deployments.map(d => d.helm.k8sResource.namespace));
    return ['all', ...Array.from(all)];
  }, [deployments]);

  const fetchData = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    setError(null);
    try {
      const data = await fetchDeployments();
      setDeployments(data);
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
  }, [toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (refreshInterval > 0) {
      const intervalId = setInterval(() => fetchData(true), refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [refreshInterval, fetchData]);

  const filteredDeployments = useMemo(() => {
    return deployments
      .filter(d => {
        const search = searchTerm.toLowerCase();
        return (
          d.manifest.name.toLowerCase().includes(search) ||
          d.helm.description.toLowerCase().includes(search) ||
          d.manifest.appVersion.toLowerCase().includes(search)
        );
      })
      .filter(d => statusFilter.length === 0 || statusFilter.includes(d.status))
      .filter(
        d =>
          namespaceFilter === 'all' ||
          d.helm.k8sResource.namespace === namespaceFilter
      )
      .sort((a, b) => {
        if (sortBy === 'lastDeployed') {
          return (
            new Date(b.helm.lastDeployed).getTime() -
            new Date(a.helm.lastDeployed).getTime()
          );
        }
        if (sortBy === 'name') {
          return a.manifest.name.localeCompare(b.manifest.name);
        }
        return a[sortBy].localeCompare(b[sortBy]);
      });
  }, [deployments, searchTerm, statusFilter, namespaceFilter, sortBy]);

  const serviceDeployments = useMemo(
    () => filteredDeployments.filter(d => d.category === 'SERVICE'),
    [filteredDeployments]
  );
  const infraDeployments = useMemo(
    () => filteredDeployments.filter(d => d.category === 'INFRASTRUCTURE'),
    [filteredDeployments]
  );
  
  const renderHeader = () => (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <KubeMonLogo className="h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            KubeMon
          </h1>
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
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search by name, description, version..."
          className="pl-10"
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
      <div className="flex flex-wrap gap-2 items-center">
        <ToggleGroup
          type="multiple"
          variant="outline"
          value={statusFilter}
          onValueChange={(value: DeploymentStatus[]) => setStatusFilter(value)}
          aria-label="Filter by status"
        >
          <ToggleGroupItem value="DEPLOYED" aria-label="Deployed">Deployed</ToggleGroupItem>
          <ToggleGroupItem value="PENDING_DEPLOYMENT" aria-label="Pending">Pending</ToggleGroupItem>
          <ToggleGroupItem value="FAILED" aria-label="Failed">Failed</ToggleGroupItem>
        </ToggleGroup>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-1">
              <ListFilter className="h-4 w-4" />
              Advanced
              <ChevronDown className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Advanced Filters</h4>
                <p className="text-sm text-muted-foreground">
                  Fine-tune your view.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="namespace">Namespace</Label>
                  <Select
                    value={namespaceFilter}
                    onValueChange={setNamespaceFilter}
                  >
                    <SelectTrigger id="namespace" className="col-span-2 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {namespaces.map(ns => (
                        <SelectItem key={ns} value={ns}>
                          {ns === 'all' ? 'All Namespaces' : ns}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex-grow" />
        
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

        <div className="flex items-center gap-2">
          <Label htmlFor="sort-by" className="text-sm">Sort by:</Label>
          <Select value={sortBy} onValueChange={(v: SortKey) => setSortBy(v)}>
            <SelectTrigger id="sort-by" className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lastDeployed">Last Deployed</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="appVersion">App Version</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
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

    