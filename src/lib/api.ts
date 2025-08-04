import { mockDeployments } from '@/data/mock-deployments';
import type { DeploymentAggregate } from '@/types/deployment';

export async function fetchDeployments(): Promise<DeploymentAggregate[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

  // In a real app, this would be an API call:
  // const response = await fetch('http://localhost:39000/deployment-manager/api/v1/deployments');
  // if (!response.ok) {
  //   const error = await response.json();
  //   throw new Error(error.message || 'Failed to fetch deployments');
  // }
  // const data = await response.json();
  // const allDeployments = [
  //   ...data.deploymentsByCategory.SERVICE,
  //   ...data.deploymentsByCategory.INFRASTRUCTURE,
  // ];
  // return allDeployments.map((d, index) => ({...d, id: `${d.helm.name}-${index}`}));

  // Deep copy to prevent mutation of mock data across fetches
  return JSON.parse(JSON.stringify(mockDeployments));
}

export async function fetchCurrentNamespace(): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));

  // In a real app, this would be an API call:
  // const response = await fetch('http://localhost:39000/deployment-manager/api/v1/k8s/namespaces/current');
  // if (!response.ok) {
  //   throw new Error('Failed to fetch current namespace');
  // }
  // const data = await response.json();
  // return data.namespace;
  
  // Return a consistent namespace from the mock data for demonstration
  return "tvg-us-apps-deploy";
}
