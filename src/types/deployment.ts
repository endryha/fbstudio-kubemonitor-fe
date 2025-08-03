export type DeploymentStatus = 'PENDING_DEPLOYMENT' | 'DEPLOYED' | 'FAILED';
export type DeploymentCategory = 'SERVICE' | 'INFRASTRUCTURE';

export interface DeploymentAggregate {
  id: string;
  status: DeploymentStatus;
  category: DeploymentCategory;
  manifest: {
    name: string;
    appVersion: string;
    chartVersion: string;
    chartRepository: string;
  };
  helm: {
    name: string;
    description: string;
    chartName: string;
    chartVersion: string;
    appVersion: string;
    status: string;
    firstDeployed: string;
    lastDeployed: string;
    k8sResource: {
      namespace: string;
      resourceName: string;
      resourceVersion: string;
      resourceUID: string;
      resourceType: string;
      creationTimestamp: string;
    };
  };
}
