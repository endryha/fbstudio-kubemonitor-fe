
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { KubeMonLogo } from './icons';
import { ThemeToggle } from './theme-toggle';
import { fetchCurrentNamespace } from '@/lib/api';
import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Globe, LayoutDashboard, RefreshCw } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from '@/hooks/use-toast';

const REFRESH_INTERVALS = {
  '10s': 10000,
  '30s': 30000,
  '1m': 60000,
  '5m': 300000,
  '10m': 600000,
  Off: 0,
};

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [currentNamespace, setCurrentNamespace] = useState<string | null>(
    null
  );
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [refreshInterval, setRefreshInterval] = useState<number>(30000);
  const { toast } = useToast();

  const fetchData = useCallback(
    async (isManualRefresh = false) => {
      if (isManualRefresh) {
        setIsRefreshing(true);
      }
      try {
        const namespace = await fetchCurrentNamespace();
        setCurrentNamespace(namespace);
        setLastUpdated(new Date());
      } catch (e: any) {
        toast({
          variant: 'destructive',
          title: 'Failed to fetch namespace',
          description: e.message,
        });
      } finally {
        setIsRefreshing(false);
      }
    },
    [toast]
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (refreshInterval > 0) {
      const intervalId = setInterval(() => fetchData(true), refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [refreshInterval, fetchData]);

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <KubeMonLogo className="h-8 w-8 text-primary" />
            <span className="text-lg font-bold font-headline tracking-tight">
              KubeMon
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <LayoutDashboard />
                Deployments
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
             <div className="hidden md:flex items-center gap-2">
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
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
