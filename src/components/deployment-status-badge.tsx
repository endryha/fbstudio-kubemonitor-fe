"use client";

import { AlertTriangle, CheckCircle2, Hourglass } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { DeploymentStatus } from '@/types/deployment';
import { cn } from '@/lib/utils';

interface DeploymentStatusBadgeProps {
  status: DeploymentStatus;
  className?: string;
}

const statusConfig = {
  DEPLOYED: {
    label: 'Deployed',
    icon: <CheckCircle2 className="h-3 w-3" />,
    className: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-200 dark:border-green-700/60',
  },
  PENDING_DEPLOYMENT: {
    label: 'Pending',
    icon: <Hourglass className="h-3 w-3" />,
    className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700/60',
  },
  FAILED: {
    label: 'Failed',
    icon: <AlertTriangle className="h-3 w-3" />,
    className: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400 border-red-200 dark:border-red-700/60',
  },
};

export function DeploymentStatusBadge({ status, className }: DeploymentStatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.PENDING_DEPLOYMENT;

  return (
    <Badge
      variant="outline"
      className={cn(
        'flex items-center gap-1.5 capitalize text-xs font-medium py-0.5',
        config.className,
        className
      )}
    >
      {config.icon}
      {config.label}
    </Badge>
  );
}
