"use client";

import { formatDistanceToNow } from 'date-fns';
import { FileQuestion } from 'lucide-react';

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

interface DeploymentTableProps {
  deployments: DeploymentAggregate[];
  isLoading: boolean;
  onRowClick: (deployment: DeploymentAggregate) => void;
}

export function DeploymentTable({
  deployments,
  isLoading,
  onRowClick,
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

  return (
    <div className="border rounded-lg mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Last Deployed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deployments.map(d => (
            <TableRow key={d.id}>
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
                  onClick={() => onRowClick(d)}
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
