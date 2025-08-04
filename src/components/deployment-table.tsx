"use client";

import { formatDistanceToNow } from 'date-fns';
import { ArrowDown, ArrowUp, FileQuestion } from 'lucide-react';

import type { DeploymentAggregate } from '@/types/deployment';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { DeploymentStatusBadge } from './deployment-status-badge';
import { SortDirection, SortKey } from './dashboard';
import { cn } from '@/lib/utils';

interface DeploymentTableProps {
  deployments: DeploymentAggregate[];
  isLoading: boolean;
  onRowClick: (deployment: DeploymentAggregate) => void;
  onSort: (key: SortKey) => void;
  sortBy: SortKey;
  sortDirection: SortDirection;
}

export function DeploymentTable({
  deployments,
  isLoading,
  onRowClick,
  onSort,
  sortBy,
  sortDirection,
}: DeploymentTableProps) {
  if (isLoading) {
    return (
      <div className="border rounded-lg mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              {Array.from({ length: 5 }).map((_, i) => (
                <TableHead key={i}>
                  <Skeleton className="h-5 w-24" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <TableCell key={j}>
                    <Skeleton className="h-5 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (deployments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 text-muted-foreground bg-card rounded-lg mt-4">
        <FileQuestion className="h-12 w-12 mb-4" />
        <h3 className="text-xl font-semibold">No Deployments Found</h3>
        <p className="mt-2 text-sm">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  const SortableHeader = ({
    sortKey,
    children,
    className,
  }: {
    sortKey: SortKey;
    children: React.ReactNode;
    className?: string;
  }) => {
    const isSorted = sortBy === sortKey;
    return (
      <TableHead className={cn("cursor-pointer hover:bg-muted/50", className)} onClick={() => onSort(sortKey)}>
        <div className="flex items-center gap-2">
          {children}
          {isSorted && (
            sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
          )}
        </div>
      </TableHead>
    );
  };

  return (
    <div className="border rounded-lg mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <SortableHeader sortKey="name">Name</SortableHeader>
            <SortableHeader sortKey="status">Status</SortableHeader>
            <SortableHeader sortKey="chartVersion">Version</SortableHeader>
            <SortableHeader sortKey="lastDeployed">Last deployed</SortableHeader>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deployments.map(d => (
            <TableRow key={d.id} onClick={() => onRowClick(d)} className="cursor-pointer">
              <TableCell className="font-medium">{d.manifest.name}</TableCell>
              <TableCell>
                <DeploymentStatusBadge status={d.status} />
              </TableCell>
              <TableCell>{d.manifest.chartVersion}</TableCell>
              <TableCell>
                {formatDistanceToNow(new Date(d.helm.lastDeployed), {
                  addSuffix: true,
                })}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
