import { mockDeployments } from '@/data/mock-deployments';
import type { DeploymentAggregate } from '@/types/deployment';

export async function fetchDeployments(): Promise<DeploymentAggregate[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

  // In a real app, this would be an API call:
  // const response = await fetch('http://localhost:39000/deployment-manager/api/v1/deployments');
  // if (!response.ok) {
  //   throw new Error('Failed to fetch deployments');
  // }
  // return response.json();

  // Simulate potential API errors
  if (Math.random() < 0.05) { // 5% chance of failure
    throw new Error('An unexpected error occurred while fetching data.');
  }

  return JSON.parse(JSON.stringify(mockDeployments));
}
