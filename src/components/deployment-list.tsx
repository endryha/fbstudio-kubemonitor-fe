"use client";

import type { DeploymentAggregate } from '@/types/deployment';
import { DeploymentCard, DeploymentCardSkeleton } from '@/components/deployment-card';
import { FileQuestion } from 'lucide-react';

interface DeploymentListProps {
  deployments: DeploymentAggregate[];
  isLoading: boolean;
  onCardClick: (deployment: DeploymentAggregate) => void;
}

export function DeploymentList({ deployments, isLoading, onCardClick }: DeploymentListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <DeploymentCardSkeleton key={index} />
        ))}
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
      {deployments.map(deployment => (
        <DeploymentCard
          key={deployment.id}
          deployment={deployment}
          onClick={() => onCardClick(deployment)}
        />
      ))}
    </div>
  );
}
