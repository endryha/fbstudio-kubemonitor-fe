"use client";

import { formatDistanceToNow } from 'date-fns';
import { GitBranch, Layers, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { DeploymentStatusBadge } from '@/components/deployment-status-badge';
import type { DeploymentAggregate } from '@/types/deployment';
import { cn } from '@/lib/utils';

interface DeploymentCardProps {
  deployment: DeploymentAggregate;
  onClick: () => void;
}

export function DeploymentCard({ deployment, onClick }: DeploymentCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-col h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
        {
          'border-destructive/40 hover:border-destructive/80':
            deployment.status === 'FAILED',
        }
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 font-headline">
          <span className="truncate">{deployment.manifest.name}</span>
          <DeploymentStatusBadge status={deployment.status} />
        </CardTitle>
        <CardDescription className="h-10 text-ellipsis overflow-hidden">
          {deployment.helm.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Tag className="h-4 w-4 text-primary/80" />
          <span>
            App: <span className="font-semibold text-foreground">{deployment.manifest.appVersion}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Layers className="h-4 w-4 text-primary/80" />
          <span>
            Chart: <span className="font-semibold text-foreground">{deployment.manifest.chartVersion}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <GitBranch className="h-4 w-4 text-primary/80" />
          <span>
            Namespace: <span className="font-semibold text-foreground">{deployment.helm.k8sResource.namespace}</span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">
          {formatDistanceToNow(new Date(deployment.helm.lastDeployed), {
            addSuffix: true,
          })}
        </span>
        <Button variant="outline" size="sm" onClick={onClick}>
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export function DeploymentCardSkeleton() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <Skeleton className="h-6 w-3/5" />
          <Skeleton className="h-6 w-1/4" />
        </CardTitle>
        <Skeleton className="h-4 w-full mt-1" />
        <Skeleton className="h-4 w-4/5" />
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-8 w-20" />
      </CardFooter>
    </Card>
  );
}
