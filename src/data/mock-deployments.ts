import type { DeploymentAggregate } from '@/types/deployment';

const rawData = {
  "deploymentsByCategory": {
    "SERVICE": [
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "d2hp-v1-config",
          "appVersion": "c0b6b328d54feaabfbdcff0930c42bbfbb6b502d",
          "chartVersion": "2.1160.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/d2hp-v1-config",
          "deploymentIndex": "0"
        },
        "helm": {
          "name": "d2hp-v1-config",
          "description": "spring cloud config server",
          "chartName": "d2hp-v1-config",
          "chartVersion": "2.1160.0",
          "appVersion": "c0b6b328d54feaabfbdcff0930c42bbfbb6b502d",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:33:41.383609096Z",
          "lastDeployed": "2025-08-03T16:52:49.150061941Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.d2hp-v1-config.v1095",
            "resourceVersion": "451977891",
            "resourceUID": "21594204-8d46-4569-9df0-b086603df0d4",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-03T16:52:49Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "schema-manager-kc",
          "appVersion": "994e4bb2d0248ac854d59f1efde4bbac769f07cc",
          "chartVersion": "5.7.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/data/schema-manager",
          "deploymentIndex": "1"
        },
        "helm": {
          "name": "schema-manager-kc",
          "description": "schema manager app for managing schema",
          "chartName": "schema-manager",
          "chartVersion": "5.7.2",
          "appVersion": "994e4bb2d0248ac854d59f1efde4bbac769f07cc",
          "status": "deployed",
          "firstDeployed": "2024-03-07T11:33:04.439877029Z",
          "lastDeployed": "2025-08-01T13:13:31.595180414Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.schema-manager-kc.v446",
            "resourceVersion": "450292602",
            "resourceUID": "ab354195-3a6d-4efe-aa88-71ed1765bb7b",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:13:31Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "schema-manager-hana",
          "appVersion": "994e4bb2d0248ac854d59f1efde4bbac769f07cc",
          "chartVersion": "5.7.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/data/schema-manager",
          "deploymentIndex": "2"
        },
        "helm": {
          "name": "schema-manager-hana",
          "description": "schema manager app for managing schema",
          "chartName": "schema-manager",
          "chartVersion": "5.7.2",
          "appVersion": "994e4bb2d0248ac854d59f1efde4bbac769f07cc",
          "status": "deployed",
          "firstDeployed": "2024-07-30T12:41:38.510949561Z",
          "lastDeployed": "2025-08-01T13:14:18.572195211Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.schema-manager-hana.v2184",
            "resourceVersion": "450293046",
            "resourceUID": "71d8a9ee-a2d4-40fe-a787-b3fb0c1421c7",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:14:18Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-goals-bff",
          "appVersion": "a14242948c22a9a92bfc7725260667e18f0a16ef",
          "chartVersion": "8.33.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-goals-bff"
        },
        "helm": {
          "name": "hs-goals-bff",
          "description": "health solutions goals bff chart",
          "chartName": "hs-goals-bff",
          "chartVersion": "8.33.3",
          "appVersion": "a14242948c22a9a92bfc7725260667e18f0a16ef",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:29.092603147Z",
          "lastDeployed": "2025-08-01T22:00:31.059881882Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-goals-bff.v32",
            "resourceVersion": "450579989",
            "resourceUID": "678c2b6e-c367-41f2-b5df-c5da1ba8d9a0",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T22:00:31Z"
          }
        }
      },
      {
        "status": "FAILED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-points-calculator",
          "appVersion": "e81cc554d6c168792dc12f4d60737413497472c9",
          "chartVersion": "8.7.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-points-calculator"
        },
        "helm": {
          "name": "hs-points-calculator",
          "description": "health solutions points calculator chart",
          "chartName": "hs-points-calculator",
          "chartVersion": "8.7.2",
          "appVersion": "e81cc554d6c168792dc12f4d60737413497472c9",
          "status": "failed",
          "firstDeployed": "2024-03-07T08:16:06.35542357Z",
          "lastDeployed": "2025-07-02T10:32:07.221398027Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-points-calculator.v31",
            "resourceVersion": "426540761",
            "resourceUID": "afdbd30b-489e-468c-bc82-c5b3b57340d1",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:07Z"
          }
        }
      },
      {
        "status": "PENDING_DEPLOYMENT",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-activity-bff",
          "appVersion": "c85523163343ecc8f23ec428e483647dda135b53",
          "chartVersion": "8.67.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-activity-bff"
        },
        "helm": {
          "name": "hs-activity-bff",
          "description": "health solutions activity backend for frontend",
          "chartName": "hs-activity-bff",
          "chartVersion": "8.67.1",
          "appVersion": "c85523163343ecc8f23ec428e483647dda135b53",
          "status": "pending-upgrade",
          "firstDeployed": "2024-03-07T08:10:23.056487713Z",
          "lastDeployed": "2025-07-02T10:32:08.09195585Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-activity-bff.v115",
            "resourceVersion": "426542255",
            "resourceUID": "c8706fe4-be83-4934-9746-8a228864bc54",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:08Z"
          }
        }
      }
    ],
    "INFRASTRUCTURE": [
       {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "postgres-db",
          "appVersion": "bc00d4f0c9a94beee4a0ba49fca58f3dd3170f00",
          "chartVersion": "2.0.7",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/postgres-db"
        },
        "helm": {
          "name": "postgres-db",
          "description": "postgres db chart",
          "chartName": "postgres-db",
          "chartVersion": "2.0.7",
          "appVersion": "bc00d4f0c9a94beee4a0ba49fca58f3dd3170f00-d2hp-v1",
          "status": "deployed",
          "firstDeployed": "2024-02-19T14:55:00.974905474Z",
          "lastDeployed": "2024-02-19T14:55:00.974905474Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.postgres-db.v1",
            "resourceVersion": "12765060",
            "resourceUID": "bebe7732-cdc7-4ea6-a9f6-0e22e4400b5e",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-02-19T14:55:02Z"
          }
        }
      },
      {
        "status": "FAILED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "keycloak",
          "appVersion": "21.0.2-tvg-3fceae09a2612fb4df6ac497f34fcfa0d069de23",
          "chartVersion": "3.7.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/keycloak"
        },
        "helm": {
          "name": "keycloak",
          "description": "keycloak chart",
          "chartName": "keycloak",
          "chartVersion": "3.7.0",
          "appVersion": null,
          "status": "failed",
          "firstDeployed": "2024-03-12T11:17:21.48283339Z",
          "lastDeployed": "2025-02-28T11:26:02.429481585Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.keycloak.v20",
            "resourceVersion": "322871480",
            "resourceUID": "ccfd07d5-1453-4f84-828c-d2392218a708",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-02-28T11:26:02Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "kafka",
          "appVersion": "latest",
          "chartVersion": "5.2.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/kafka"
        },
        "helm": {
          "name": "kafka",
          "description": "Kafka Helm Chart containing kafka-broker, zookeeper, kafka-connect, kafdrop, schema-registry, schema-registry-ui and kafka-manager",
          "chartName": "kafka",
          "chartVersion": "5.2.3",
          "appVersion": null,
          "status": "deployed",
          "firstDeployed": "2024-04-16T13:32:07.607694415Z",
          "lastDeployed": "2024-04-16T13:32:07.607694415Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.kafka.v1",
            "resourceVersion": "51490554",
            "resourceUID": "e002fa4f-772a-459f-b225-009b36de96c9",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-04-16T13:32:09Z"
          }
        }
      }
    ]
  }
};

const allDeployments = [
  ...rawData.deploymentsByCategory.SERVICE,
  ...rawData.deploymentsByCategory.INFRASTRUCTURE,
];

export const mockDeployments: DeploymentAggregate[] = allDeployments.map(
  (d, index) => ({
    ...d,
    id: d.helm.name + '-' + index, // a "safer" unique ID
  })
) as DeploymentAggregate[];
