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
        "status": "DEPLOYED",
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
          "status": "deployed",
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
        "status": "DEPLOYED",
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
          "status": "deployed",
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
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-analytics-manager",
          "appVersion": "ae071e5b2117cdb181eb5c0506e775bf72f7440d",
          "chartVersion": "11.24.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-analytics-manager"
        },
        "helm": {
          "name": "hs-analytics-manager",
          "description": "health solutions analytics manager chart",
          "chartName": "hs-analytics-manager",
          "chartVersion": "11.24.2",
          "appVersion": "ae071e5b2117cdb181eb5c0506e775bf72f7440d",
          "status": "deployed",
          "firstDeployed": "2024-09-04T09:08:02.299418953Z",
          "lastDeployed": "2025-07-10T23:12:33.625939971Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-analytics-manager.v132",
            "resourceVersion": "433396773",
            "resourceUID": "a3f428a0-0510-4619-a4e8-6ebb606656b4",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-10T23:12:34Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-analytics-exporter",
          "appVersion": "ae071e5b2117cdb181eb5c0506e775bf72f7440d",
          "chartVersion": "9.23.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-analytics-exporter"
        },
        "helm": {
          "name": "hs-analytics-exporter",
          "description": "health solutions analytics exporter chart",
          "chartName": "hs-analytics-exporter",
          "chartVersion": "9.23.1",
          "appVersion": "ae071e5b2117cdb181eb5c0506e775bf72f7440d",
          "status": "deployed",
          "firstDeployed": "2024-03-11T10:04:43.583209961Z",
          "lastDeployed": "2025-07-02T10:32:09.485109037Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-analytics-exporter.v52",
            "resourceVersion": "426542248",
            "resourceUID": "b5167de1-9f15-460c-9a2f-7f8d4a8b5652",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:09Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-branding",
          "appVersion": "ced46a44baeb746c26cfd8fe30cda7a7fedc4275",
          "chartVersion": "7.21.4",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-branding"
        },
        "helm": {
          "name": "hs-branding",
          "description": "health solutions branding management chart",
          "chartName": "hs-branding",
          "chartVersion": "7.21.4",
          "appVersion": "ced46a44baeb746c26cfd8fe30cda7a7fedc4275",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:39:48.278606986Z",
          "lastDeployed": "2025-07-29T10:52:43.728071327Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-branding.v17",
            "resourceVersion": "447852598",
            "resourceUID": "08cfe991-f38d-43c1-b6f7-f9cfbdce029d",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-29T10:52:44Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-data-attribute-service",
          "appVersion": "565c772f540075c17e10058d080ce116ad2732cf",
          "chartVersion": "10.16.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-data-attribute-service"
        },
        "helm": {
          "name": "hs-data-attribute-service",
          "description": "health solutions data attribute service chart",
          "chartName": "hs-data-attribute-service",
          "chartVersion": "10.16.3",
          "appVersion": "565c772f540075c17e10058d080ce116ad2732cf",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:23.858120666Z",
          "lastDeployed": "2025-07-21T14:32:49.459128316Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-data-attribute-service.v327",
            "resourceVersion": "441727889",
            "resourceUID": "43910977-d31c-4f63-9bc0-87e27ed0ff5c",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-21T14:32:50Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-homepage",
          "appVersion": "3517215f3d5ab3420ac9d1dfef9dd2a219525c21",
          "chartVersion": "8.85.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-homepage"
        },
        "helm": {
          "name": "hs-homepage",
          "description": "health solutions homepage chart",
          "chartName": "hs-homepage",
          "chartVersion": "8.85.3",
          "appVersion": "3517215f3d5ab3420ac9d1dfef9dd2a219525c21",
          "status": "deployed",
          "firstDeployed": "2024-03-06T11:19:55.477769791Z",
          "lastDeployed": "2025-07-30T11:07:46.110496918Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-homepage.v146",
            "resourceVersion": "448662618",
            "resourceUID": "a7c90528-5443-4868-93d4-c2b96d168359",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-30T11:07:46Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-loop-assessments-bridge",
          "appVersion": "41f3588949f1200a0b59624bdcc08e9d5df488f3",
          "chartVersion": "9.43.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-loop-assessments-bridge"
        },
        "helm": {
          "name": "hs-loop-assessments-bridge",
          "description": "health solutions loop assessments bridge chart",
          "chartName": "hs-loop-assessments-bridge",
          "chartVersion": "9.43.1",
          "appVersion": "41f3588949f1200a0b59624bdcc08e9d5df488f3",
          "status": "deployed",
          "firstDeployed": "2025-01-16T17:21:35.638072209Z",
          "lastDeployed": "2025-07-16T19:52:55.039951114Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-loop-assessments-bridge.v23",
            "resourceVersion": "438008564",
            "resourceUID": "1f13e945-4c62-464e-8c1d-b09d92b3d96d",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-16T19:52:55Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-pac-man",
          "appVersion": "c9c76dfd5aa7c7ea60e61709c9dd536bade77902",
          "chartVersion": "14.133.41",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-pac-man"
        },
        "helm": {
          "name": "hs-pac-man",
          "description": "health solutions program and condition management chart",
          "chartName": "hs-pac-man",
          "chartVersion": "14.133.41",
          "appVersion": "c9c76dfd5aa7c7ea60e61709c9dd536bade77902",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:28.480010821Z",
          "lastDeployed": "2025-08-01T13:20:00.45973856Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-pac-man.v941",
            "resourceVersion": "450297154",
            "resourceUID": "42aefa08-e536-4505-a24b-e52acd26a37e",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:01Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-pac-man-processor",
          "appVersion": "c9c76dfd5aa7c7ea60e61709c9dd536bade77902",
          "chartVersion": "14.133.41",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-pac-man"
        },
        "helm": {
          "name": "hs-pac-man-processor",
          "description": "health solutions program and condition management chart",
          "chartName": "hs-pac-man",
          "chartVersion": "14.133.41",
          "appVersion": "c9c76dfd5aa7c7ea60e61709c9dd536bade77902",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:30.07447914Z",
          "lastDeployed": "2025-08-01T13:20:26.559872386Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-pac-man-processor.v750",
            "resourceVersion": "450297622",
            "resourceUID": "f9ebd4b4-f72e-477d-8920-d37df53a5388",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:27Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-derived-calculator",
          "appVersion": "9309ee42601f67f50e05aa878385d648647216bf",
          "chartVersion": "9.6.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-derived-calculator"
        },
        "helm": {
          "name": "hs-derived-calculator",
          "description": "Derived Calculator for Tobacco RAS",
          "chartName": "hs-derived-calculator",
          "chartVersion": "9.6.2",
          "appVersion": "9309ee42601f67f50e05aa878385d648647216bf",
          "status": "deployed",
          "firstDeployed": "2024-04-04T14:37:45.657047944Z",
          "lastDeployed": "2025-07-02T10:32:06.075536364Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-derived-calculator.v823",
            "resourceVersion": "426541717",
            "resourceUID": "4d618e9a-f0e3-447d-a483-a33a5b52686a",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:06Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-crm-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "4.552.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-crm-fe"
        },
        "helm": {
          "name": "hs-crm-fe",
          "description": "health solutions crm front-end",
          "chartName": "hs-crm-fe",
          "chartVersion": "4.552.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T08:50:52.179934776Z",
          "lastDeployed": "2025-08-01T13:20:26.752563624Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-crm-fe.v920",
            "resourceVersion": "450296827",
            "resourceUID": "cf69055e-d911-4eeb-9ef9-e40cda8ac704",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:27Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-gateway-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "4.593.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-gateway-fe"
        },
        "helm": {
          "name": "hs-gateway-fe",
          "description": "health solutions gateway front-end",
          "chartName": "hs-gateway-fe",
          "chartVersion": "4.593.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T09:16:10.283880727Z",
          "lastDeployed": "2025-08-01T13:20:01.704092719Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-gateway-fe.v987",
            "resourceVersion": "450296311",
            "resourceUID": "e6988106-fe15-4462-a5bb-0cb0648b31ef",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:02Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-employee-portal-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "5.1074.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-employee-portal-fe"
        },
        "helm": {
          "name": "hs-employee-portal-fe",
          "description": "health solutions employee-portal",
          "chartName": "hs-employee-portal-fe",
          "chartVersion": "5.1074.2",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T08:23:07.880750842Z",
          "lastDeployed": "2025-08-01T13:19:58.862941782Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-employee-portal-fe.v1890",
            "resourceVersion": "450296348",
            "resourceUID": "c65f77f3-4438-47d2-a084-298eefc8b146",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:19:59Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-employer-portal-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "5.743.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-employer-portal-fe"
        },
        "helm": {
          "name": "hs-employer-portal-fe",
          "description": "health solutions employer-portal",
          "chartName": "hs-employer-portal-fe",
          "chartVersion": "5.743.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T08:28:12.478353235Z",
          "lastDeployed": "2025-08-01T13:20:26.140688334Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-employer-portal-fe.v1331",
            "resourceVersion": "450296782",
            "resourceUID": "9d259f4d-2430-4312-8310-d15c793dc86f",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:26Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-journey-fe",
          "appVersion": "2f4c6ff26d62a1fbe69d1045adda9a0d1042e8fa",
          "chartVersion": "0.0.32",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-journey-fe"
        },
        "helm": {
          "name": "hs-journey-fe",
          "description": "health solutions journey",
          "chartName": "hs-journey-fe",
          "chartVersion": "0.0.32",
          "appVersion": "2f4c6ff26d62a1fbe69d1045adda9a0d1042e8fa",
          "status": "deployed",
          "firstDeployed": "2025-05-28T13:12:48.30498241Z",
          "lastDeployed": "2025-08-01T13:20:23.409925113Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-journey-fe.v31",
            "resourceVersion": "450296730",
            "resourceUID": "c0bd5125-a3c3-42f7-98c3-e5682846571c",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:23Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-login-portal-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "5.518.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-login-portal-fe"
        },
        "helm": {
          "name": "hs-login-portal-fe",
          "description": "health solutions login-portal",
          "chartName": "hs-login-portal-fe",
          "chartVersion": "5.518.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T09:06:03.479809033Z",
          "lastDeployed": "2025-08-01T13:21:02.167178149Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-login-portal-fe.v790",
            "resourceVersion": "450297459",
            "resourceUID": "a67797c5-0b16-4327-8c8c-a0df885b08cd",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:21:03Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-connected-care-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "4.710.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-connected-care-fe"
        },
        "helm": {
          "name": "hs-connected-care-fe",
          "description": "Connected Care Frontend",
          "chartName": "hs-connected-care-fe",
          "chartVersion": "4.710.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T08:34:56.100060093Z",
          "lastDeployed": "2025-08-01T13:20:00.26590488Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-connected-care-fe.v1146",
            "resourceVersion": "450296425",
            "resourceUID": "b4582eca-b4d0-4c68-bf47-05c3e3d6d447",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:01Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-communications-fe",
          "appVersion": "48c0d9961f458871886f67f2455933a1c93d9000",
          "chartVersion": "0.22.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-communications-fe"
        },
        "helm": {
          "name": "hs-communications-fe",
          "description": "Azure Communications Frontend",
          "chartName": "hs-communications-fe",
          "chartVersion": "0.22.0",
          "appVersion": "48c0d9961f458871886f67f2455933a1c93d9000",
          "status": "deployed",
          "firstDeployed": "2025-02-24T12:48:00.008492034Z",
          "lastDeployed": "2025-07-24T15:53:01.326422681Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-communications-fe.v21",
            "resourceVersion": "444106956",
            "resourceUID": "5e73d0ba-02ab-4ad4-86df-07df3f78be16",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-24T15:53:02Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-care-enablement-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "1.897.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-care-enablement-fe"
        },
        "helm": {
          "name": "hs-care-enablement-fe",
          "description": "health solutions care-enablement-fe chart",
          "chartName": "hs-care-enablement-fe",
          "chartVersion": "1.897.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T08:55:55.778686365Z",
          "lastDeployed": "2025-08-01T13:21:02.264484324Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-care-enablement-fe.v1503",
            "resourceVersion": "450297513",
            "resourceUID": "8566e13d-1bfb-44dc-b6e9-50dde7db5445",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:21:03Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-pac-man-admin-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "5.813.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-pac-man-admin-fe"
        },
        "helm": {
          "name": "hs-pac-man-admin-fe",
          "description": "health solutions program and condition management admin panel",
          "chartName": "hs-pac-man-admin-fe",
          "chartVersion": "5.813.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T08:23:08.180785414Z",
          "lastDeployed": "2025-08-01T13:21:02.055031023Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-pac-man-admin-fe.v1192",
            "resourceVersion": "450297460",
            "resourceUID": "f6fb186d-d8f9-4607-9224-ca5426f9a730",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:21:03Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-survey-runner-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "6.609.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-survey-runner-fe"
        },
        "helm": {
          "name": "hs-survey-runner-fe",
          "description": "health solutions survey-runner",
          "chartName": "hs-survey-runner-fe",
          "chartVersion": "6.609.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-02-20T08:50:51.079057477Z",
          "lastDeployed": "2025-08-01T13:20:00.94552717Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-survey-runner-fe.v1079",
            "resourceVersion": "450296825",
            "resourceUID": "2cd3fc44-bd8f-4591-b3ef-d8ebc1bb7fd1",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:01Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-servicing-fe",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "chartVersion": "0.168.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-servicing-fe"
        },
        "helm": {
          "name": "hs-servicing-fe",
          "description": "health solutions servicing",
          "chartName": "hs-servicing-fe",
          "chartVersion": "0.168.1",
          "appVersion": "9d0047d663140c688ee967a4a32b80d6516a90cc",
          "status": "deployed",
          "firstDeployed": "2024-12-10T11:17:14.054003Z",
          "lastDeployed": "2025-08-01T13:19:58.75187673Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-servicing-fe.v253",
            "resourceVersion": "450296131",
            "resourceUID": "18b7cb67-4d74-494d-85d7-2cc06d92e925",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:19:59Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-recommendation",
          "appVersion": "8f3df1394b6cbb9fcd2a69d75bee10fbc3ba33a5",
          "chartVersion": "9.0.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-recommendation"
        },
        "helm": {
          "name": "hs-recommendation",
          "description": "health solutions recommendation management chart",
          "chartName": "hs-recommendation",
          "chartVersion": "9.0.2",
          "appVersion": "8f3df1394b6cbb9fcd2a69d75bee10fbc3ba33a5",
          "status": "deployed",
          "firstDeployed": "2025-01-16T17:21:36.808962525Z",
          "lastDeployed": "2025-07-28T08:17:32.413874238Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-recommendation.v32",
            "resourceVersion": "446982767",
            "resourceUID": "bb572d6a-4fc3-418a-b784-8ec99045a1ec",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T08:17:33Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-rewards",
          "appVersion": "e9a0153190a3a20efc3f57bc68136f4207e8fd47",
          "chartVersion": "7.34.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-rewards"
        },
        "helm": {
          "name": "hs-rewards",
          "description": "health solutions rewards chart",
          "chartName": "hs-rewards",
          "chartVersion": "7.34.2",
          "appVersion": "e9a0153190a3a20efc3f57bc68136f4207e8fd47",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:16:07.274889382Z",
          "lastDeployed": "2025-08-03T16:58:19.951239897Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-rewards.v54",
            "resourceVersion": "451980217",
            "resourceUID": "6109e8bf-2b6f-4e2e-88f2-39c490690708",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-03T16:58:21Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-survey-bff",
          "appVersion": "58285774be7d43f7986eab2a3abd6c5e2af6f5df",
          "chartVersion": "7.65.4",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-survey-bff"
        },
        "helm": {
          "name": "hs-survey-bff",
          "description": "health solutions survey backend for frontend",
          "chartName": "hs-survey-bff",
          "chartVersion": "7.65.4",
          "appVersion": "58285774be7d43f7986eab2a3abd6c5e2af6f5df",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:16:08.58428761Z",
          "lastDeployed": "2025-08-01T13:21:01.358507748Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-survey-bff.v58",
            "resourceVersion": "450297839",
            "resourceUID": "cef58743-ccfb-468c-b06c-88c46cc021e3",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:21:02Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-survey-management",
          "appVersion": "f562ea7f4fce7436b7960db2eca40942687434a9",
          "chartVersion": "8.43.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-survey-management"
        },
        "helm": {
          "name": "hs-survey-management",
          "description": "health solutions survey management chart",
          "chartName": "hs-survey-management",
          "chartVersion": "8.43.1",
          "appVersion": "f562ea7f4fce7436b7960db2eca40942687434a9",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:39.578724518Z",
          "lastDeployed": "2025-07-31T13:33:26.958692113Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-survey-management.v97",
            "resourceVersion": "449528583",
            "resourceUID": "b6005471-426a-4d5f-aa62-68ae86ed1d51",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-31T13:33:28Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "crm",
          "appVersion": "ce8c1b5-03414cbf",
          "chartVersion": "8.29.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/crm"
        },
        "helm": {
          "name": "crm",
          "description": "crm service chart",
          "chartName": "crm",
          "chartVersion": "8.29.0",
          "appVersion": "ce8c1b5-03414cbf",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:33:47.684673689Z",
          "lastDeployed": "2025-07-07T10:13:15.249020011Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.crm.v63",
            "resourceVersion": "430527909",
            "resourceUID": "2a68fac6-7050-47b6-96a9-0ee67e6f1ef0",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-07T10:13:15Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "api-gateway",
          "appVersion": "78576c8",
          "chartVersion": "9.9.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/api-gateway"
        },
        "helm": {
          "name": "api-gateway",
          "description": "api gateway chart",
          "chartName": "api-gateway",
          "chartVersion": "9.9.1",
          "appVersion": "78576c8",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:30.874986787Z",
          "lastDeployed": "2025-07-16T13:52:59.50968222Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.api-gateway.v80",
            "resourceVersion": "437815492",
            "resourceUID": "5aa06566-1654-4602-8810-5e197f0478a1",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-16T13:52:59Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-cta",
          "appVersion": "e233d9012c3a31ad3d394789ded6e1a57a41f3a1",
          "chartVersion": "10.11.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-cta"
        },
        "helm": {
          "name": "hs-cta",
          "description": "health solutions cta management chart",
          "chartName": "hs-cta",
          "chartVersion": "10.11.2",
          "appVersion": "e233d9012c3a31ad3d394789ded6e1a57a41f3a1",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:32.324195371Z",
          "lastDeployed": "2025-07-08T13:42:09.515900752Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-cta.v30",
            "resourceVersion": "431462736",
            "resourceUID": "42e34a4b-1e18-4fec-9724-3e02afabee37",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-08T13:42:09Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "challenges-user-processing",
          "appVersion": "develop-bee41c1",
          "chartVersion": "4.1.0",
          "chartRepository": "harbor.dhna.corp/tvg-local/charts/challenges-user-processing"
        },
        "helm": {
          "name": "challenges-user-processing",
          "description": "challenges-user-processing service chart",
          "chartName": "challenges-user-processing",
          "chartVersion": "4.1.0",
          "appVersion": "latest",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:36:57.674169Z",
          "lastDeployed": "2025-02-26T17:12:30.521543539Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.challenges-user-processing.v16",
            "resourceVersion": "321357409",
            "resourceUID": "abae141a-622e-4fde-bc6e-2ea44022195e",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-02-26T17:12:30Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "challenges-event-processing",
          "appVersion": "develop-a41a495",
          "chartVersion": "5.1.0",
          "chartRepository": "harbor.dhna.corp/tvg-local/charts/challenges-event-processing"
        },
        "helm": {
          "name": "challenges-event-processing",
          "description": "challenges-event-processing service chart",
          "chartName": "challenges-event-processing",
          "chartVersion": "5.1.0",
          "appVersion": "latest",
          "status": "deployed",
          "firstDeployed": "2024-03-11T14:01:45.868128Z",
          "lastDeployed": "2025-07-10T15:12:57.762391774Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.challenges-event-processing.v21",
            "resourceVersion": "433122263",
            "resourceUID": "1ed47a02-309f-49ee-8efc-e08f3b157787",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-10T15:12:58Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "challenges-admin-api",
          "appVersion": "develop-3cba6cb",
          "chartVersion": "7.0.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/challenges-admin-api"
        },
        "helm": {
          "name": "challenges-admin-api",
          "description": "challenges-admin-api service chart",
          "chartName": "challenges-admin-api",
          "chartVersion": "7.0.0",
          "appVersion": "latest",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:42:48.10729Z",
          "lastDeployed": "2025-07-28T14:12:52.366271354Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.challenges-admin-api.v943",
            "resourceVersion": "447177983",
            "resourceUID": "87f84b48-13c1-4fcb-8be3-e046562a28c5",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T14:12:52Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "api-vitality-portal",
          "appVersion": "develop-215d48b",
          "chartVersion": "7.0.1",
          "chartRepository": "harbor.dhna.corp/tvg-local/charts/api-vitality-portal"
        },
        "helm": {
          "name": "api-vitality-portal",
          "description": "vitality portal service chart",
          "chartName": "api-vitality-portal",
          "chartVersion": "7.0.1",
          "appVersion": "latest",
          "status": "deployed",
          "firstDeployed": "2025-05-09T04:18:16.204484981Z",
          "lastDeployed": "2025-07-29T17:18:12.246266131Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.api-vitality-portal.v27",
            "resourceVersion": "448075703",
            "resourceUID": "37548553-69bf-4b0e-8869-03e132164366",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-29T17:18:12Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "api-client-portal",
          "appVersion": "develop-3f8fc5c",
          "chartVersion": "2.1.0",
          "chartRepository": "harbor.dhna.corp/tvg-local/charts/api-client-portal"
        },
        "helm": {
          "name": "api-client-portal",
          "description": "client portal service chart",
          "chartName": "api-client-portal",
          "chartVersion": "2.1.0",
          "appVersion": "latest",
          "status": "deployed",
          "firstDeployed": "2024-03-11T14:39:54.595706062Z",
          "lastDeployed": "2025-07-25T09:52:56.61535935Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.api-client-portal.v199",
            "resourceVersion": "444694423",
            "resourceUID": "cb2105b0-d263-4d1d-8054-7790922f4c6d",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-25T09:52:57Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "vitality-mobile",
          "appVersion": "latest",
          "chartVersion": "8.0.1",
          "chartRepository": "harbor.dhna.corp/tvg-local/charts/vitality-mobile"
        },
        "helm": {
          "name": "vitality-mobile",
          "description": "vitality-mobile service chart",
          "chartName": "vitality-mobile",
          "chartVersion": "8.0.1",
          "appVersion": "latest",
          "status": "deployed",
          "firstDeployed": "2024-12-12T08:13:10.699093978Z",
          "lastDeployed": "2025-01-12T00:52:49.404254113Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.vitality-mobile.v6",
            "resourceVersion": "283019931",
            "resourceUID": "6f0b0718-0af5-4545-835b-414743f8935c",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-01-12T00:52:50Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "legacy-data-bridge",
          "appVersion": "9c481d2bdf73c237f1248a1c48baff02ab9ae5f5",
          "chartVersion": "6.7.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/legacy-data-bridge"
        },
        "helm": {
          "name": "legacy-data-bridge",
          "description": "legacy data bridge chart",
          "chartName": "legacy-data-bridge",
          "chartVersion": "6.7.3",
          "appVersion": "9c481d2bdf73c237f1248a1c48baff02ab9ae5f5",
          "status": "deployed",
          "firstDeployed": "2024-03-14T13:47:00.450308352Z",
          "lastDeployed": "2025-02-27T10:32:43.514989438Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.legacy-data-bridge.v33",
            "resourceVersion": "321974960",
            "resourceUID": "72accde2-c677-44e6-9e86-85b02b5b1769",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-02-27T10:32:44Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "tour-guide",
          "appVersion": "6a02ca8fa4102190141a1ce4a375714f6dbc027a",
          "chartVersion": "7.3.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/tour-guide"
        },
        "helm": {
          "name": "tour-guide",
          "description": "Tour guide service chart",
          "chartName": "tour-guide",
          "chartVersion": "7.3.1",
          "appVersion": "6a02ca8fa4102190141a1ce4a375714f6dbc027a",
          "status": "deployed",
          "firstDeployed": "2024-03-06T11:19:53.280483975Z",
          "lastDeployed": "2025-07-02T10:31:58.721214026Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.tour-guide.v7",
            "resourceVersion": "426539970",
            "resourceUID": "917bafd1-1ee0-438c-b463-a38febd6c7a3",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:31:59Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-features",
          "appVersion": "246838755725b53ad494a0c977a405d726c13ec5",
          "chartVersion": "7.15.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-features"
        },
        "helm": {
          "name": "hs-features",
          "description": "health solutions features chart",
          "chartName": "hs-features",
          "chartVersion": "7.15.2",
          "appVersion": "246838755725b53ad494a0c977a405d726c13ec5",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:39:29.68119165Z",
          "lastDeployed": "2024-12-16T22:25:20.324222433Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-features.v9",
            "resourceVersion": "261148306",
            "resourceUID": "547f468b-c101-4dea-baf8-7c00d4454aea",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-12-16T22:25:20Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-access-data",
          "appVersion": "f767a00e5781ec241ec5c93f17ad68f6ae5bbe33",
          "chartVersion": "8.25.6",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-access-data"
        },
        "helm": {
          "name": "hs-access-data",
          "description": "health solutions access-data chart",
          "chartName": "hs-access-data",
          "chartVersion": "8.25.6",
          "appVersion": "f767a00e5781ec241ec5c93f17ad68f6ae5bbe33",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:12:27.282240626Z",
          "lastDeployed": "2025-07-10T12:12:45.56981647Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-access-data.v50",
            "resourceVersion": "433023146",
            "resourceUID": "f5b2c9b1-4b47-4306-97ee-e9f23ca5c169",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-10T12:12:46Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "wiremock",
          "appVersion": "6ca980c6f1284ab9b4559a285ce1331ca8b75a30",
          "chartVersion": "1.36.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/v3/support/wiremock"
        },
        "helm": {
          "name": "wiremock",
          "description": "A Helm chart for V3 Wiremock service",
          "chartName": "wiremock",
          "chartVersion": "1.36.0",
          "appVersion": "6ca980c6f1284ab9b4559a285ce1331ca8b75a30",
          "status": "deployed",
          "firstDeployed": "2024-02-20T09:26:18.508628898Z",
          "lastDeployed": "2024-02-20T09:26:18.508628898Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.wiremock.v1",
            "resourceVersion": "13201713",
            "resourceUID": "4178d62e-1c35-42b9-8c10-67bc7822eb71",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-02-20T09:26:18Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-mayo-clinic-gateway",
          "appVersion": "332f7124b4ca7e1dc44b0108447dcd590278ffed",
          "chartVersion": "8.19.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-mayo-clinic-gateway"
        },
        "helm": {
          "name": "hs-mayo-clinic-gateway",
          "description": "hs-mayo-clinic-gateway service chart",
          "chartName": "hs-mayo-clinic-gateway",
          "chartVersion": "8.19.1",
          "appVersion": "332f7124b4ca7e1dc44b0108447dcd590278ffed",
          "status": "deployed",
          "firstDeployed": "2024-02-20T09:16:10.675734922Z",
          "lastDeployed": "2025-05-15T00:52:44.130751856Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-mayo-clinic-gateway.v28",
            "resourceVersion": "387094359",
            "resourceUID": "2f762410-a673-4e95-a227-28932521401e",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-05-15T00:52:44Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-consent-management",
          "appVersion": "3622ffdef055101f6875c961b8aa7ce4c368ed6b",
          "chartVersion": "8.17.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-consent-management"
        },
        "helm": {
          "name": "hs-consent-management",
          "description": "hs-consent-management service chart",
          "chartName": "hs-consent-management",
          "chartVersion": "8.17.1",
          "appVersion": "3622ffdef055101f6875c961b8aa7ce4c368ed6b",
          "status": "deployed",
          "firstDeployed": "2024-03-06T11:19:59.179495178Z",
          "lastDeployed": "2025-07-02T10:31:58.898958447Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-consent-management.v22",
            "resourceVersion": "426540635",
            "resourceUID": "d4123ddf-5891-4638-a7b0-7b226f724070",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:31:59Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "bastion",
          "appVersion": "v3-bionic",
          "chartVersion": "0.0.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/bastion"
        },
        "helm": {
          "name": "bastion",
          "description": "bastion chart",
          "chartName": "bastion",
          "chartVersion": "0.0.1",
          "appVersion": "v3-bionic",
          "status": "deployed",
          "firstDeployed": "2024-02-20T08:28:11.783179184Z",
          "lastDeployed": "2025-07-10T16:08:24.04661Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.bastion.v3",
            "resourceVersion": "433152179",
            "resourceUID": "231cd77f-d471-4e76-a8bc-df288fb60386",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-10T16:08:24Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-entity-data-service",
          "appVersion": "90c2b2723051dae641fd930b076567c40c579ba2",
          "chartVersion": "6.35.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-entity-data-service"
        },
        "helm": {
          "name": "hs-entity-data-service",
          "description": "hs-entity-data-service service chart",
          "chartName": "hs-entity-data-service",
          "chartVersion": "6.35.3",
          "appVersion": "90c2b2723051dae641fd930b076567c40c579ba2",
          "status": "deployed",
          "firstDeployed": "2024-03-07T09:09:00.224204Z",
          "lastDeployed": "2025-07-29T00:12:50.604621388Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-entity-data-service.v41",
            "resourceVersion": "447504478",
            "resourceUID": "11ec3c18-3b44-4286-a74b-80e9c8e2541e",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-29T00:12:51Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-aggregated-content-api",
          "appVersion": "c594797197922c52b78417cadc038409ee8dc1ed",
          "chartVersion": "8.18.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-aggregated-content-api"
        },
        "helm": {
          "name": "hs-aggregated-content-api",
          "description": "hs-aggregated-content-api service chart",
          "chartName": "hs-aggregated-content-api",
          "chartVersion": "8.18.1",
          "appVersion": "c594797197922c52b78417cadc038409ee8dc1ed",
          "status": "deployed",
          "firstDeployed": "2024-02-20T09:46:32.277083088Z",
          "lastDeployed": "2025-05-14T14:52:56.707601957Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-aggregated-content-api.v5",
            "resourceVersion": "386747127",
            "resourceUID": "b2be991e-a64c-4d13-9c2e-350a16635a8c",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-05-14T14:52:57Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-member-info",
          "appVersion": "784a370f60bb34801dda7c6f20eeb1e1ed4b80b5",
          "chartVersion": "8.29.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-member-info"
        },
        "helm": {
          "name": "hs-member-info",
          "description": "hs-member-info service chart",
          "chartName": "hs-member-info",
          "chartVersion": "8.29.1",
          "appVersion": "784a370f60bb34801dda7c6f20eeb1e1ed4b80b5",
          "status": "deployed",
          "firstDeployed": "2024-03-11T09:28:44.496098211Z",
          "lastDeployed": "2025-07-02T10:39:54.384889984Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-member-info.v46",
            "resourceVersion": "426547432",
            "resourceUID": "956ee400-e31e-493d-a4f4-f8a6b9dfccd0",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:39:54Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-booking-service",
          "appVersion": "a0d668226d294cc59e8b12b54de81d7ab40e6a53",
          "chartVersion": "1.67.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-booking-service"
        },
        "helm": {
          "name": "hs-booking-service",
          "description": "health solutions booking-service chart",
          "chartName": "hs-booking-service",
          "chartVersion": "1.67.2",
          "appVersion": "a0d668226d294cc59e8b12b54de81d7ab40e6a53",
          "status": "deployed",
          "firstDeployed": "2025-02-28T12:19:06.705802Z",
          "lastDeployed": "2025-07-25T14:32:55.413944929Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-booking-service.v54",
            "resourceVersion": "444847041",
            "resourceUID": "ca832ae5-61c8-41ec-a5d2-9a4906e0d147",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-25T14:32:56Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-consult-management",
          "appVersion": "d3abd6be8e757946cdf23f28945b5a261938da60",
          "chartVersion": "2.38.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-consult-management"
        },
        "helm": {
          "name": "hs-consult-management",
          "description": "health solutions consult-management chart",
          "chartName": "hs-consult-management",
          "chartVersion": "2.38.3",
          "appVersion": "d3abd6be8e757946cdf23f28945b5a261938da60",
          "status": "deployed",
          "firstDeployed": "2024-03-11T09:28:43.90069095Z",
          "lastDeployed": "2025-07-31T07:53:07.040318773Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-consult-management.v71",
            "resourceVersion": "449341891",
            "resourceUID": "d16d48d2-a4fd-4ee2-96b5-34c062b2880b",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-31T07:53:07Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-secure-communications",
          "appVersion": "a97b9e9552608c8e089f55d6368dac34edfacf0c",
          "chartVersion": "1.29.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-secure-communications"
        },
        "helm": {
          "name": "hs-secure-communications",
          "description": "health solutions secure-communications chart",
          "chartName": "hs-secure-communications",
          "chartVersion": "1.29.3",
          "appVersion": "a97b9e9552608c8e089f55d6368dac34edfacf0c",
          "status": "deployed",
          "firstDeployed": "2025-02-24T12:44:57.012182818Z",
          "lastDeployed": "2025-07-02T10:32:06.708786734Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-secure-communications.v12",
            "resourceVersion": "426542186",
            "resourceUID": "935aef57-85fa-4d58-af4f-d6a92d280d44",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:06Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-personal-coaching-bff",
          "appVersion": "3165c5a8083c42ea79d095e397a1ad62412a9ef7",
          "chartVersion": "1.48.7",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-personal-coaching-bff"
        },
        "helm": {
          "name": "hs-personal-coaching-bff",
          "description": "health solutions personal-coaching-bff chart",
          "chartName": "hs-personal-coaching-bff",
          "chartVersion": "1.48.7",
          "appVersion": "3165c5a8083c42ea79d095e397a1ad62412a9ef7",
          "status": "deployed",
          "firstDeployed": "2025-05-15T11:59:51.06042Z",
          "lastDeployed": "2025-07-28T08:17:34.712397449Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-personal-coaching-bff.v27",
            "resourceVersion": "446982825",
            "resourceUID": "e845db55-874c-4d7a-989a-4c9272f15ff5",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T08:17:35Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-provider-data-service",
          "appVersion": "107ea59588052ff8d5f5d015d1acdc6708c59829",
          "chartVersion": "8.33.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-provider-data-service"
        },
        "helm": {
          "name": "hs-provider-data-service",
          "description": "hs-provider-data-service service chart",
          "chartName": "hs-provider-data-service",
          "chartVersion": "8.33.1",
          "appVersion": "107ea59588052ff8d5f5d015d1acdc6708c59829",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:33.287441975Z",
          "lastDeployed": "2025-07-02T10:32:04.978714689Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-provider-data-service.v67",
            "resourceVersion": "426541426",
            "resourceUID": "92c77b5f-539d-4305-9989-cc211931e172",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:05Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-separate-adult-service",
          "appVersion": "e8d4199724a24270c1a6053d964b64cf062e7fa4",
          "chartVersion": "6.131.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-separate-adult-service"
        },
        "helm": {
          "name": "hs-separate-adult-service",
          "description": "separate adult service",
          "chartName": "hs-separate-adult-service",
          "chartVersion": "6.131.1",
          "appVersion": "e8d4199724a24270c1a6053d964b64cf062e7fa4",
          "status": "deployed",
          "firstDeployed": "2025-07-10T13:55:25.858555152Z",
          "lastDeployed": "2025-08-01T13:19:59.752824091Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-separate-adult-service.v40",
            "resourceVersion": "450296946",
            "resourceUID": "e01f3cd3-1675-4d66-a872-206dcf6983c3",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:00Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-pathfinder",
          "appVersion": "d9fbdf6fac8ba15726a4535aa109ddf54312006a",
          "chartVersion": "3.70.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-pathfinder"
        },
        "helm": {
          "name": "hs-pathfinder",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-pathfinder",
          "chartVersion": "3.70.3",
          "appVersion": "d9fbdf6fac8ba15726a4535aa109ddf54312006a",
          "status": "deployed",
          "firstDeployed": "2024-04-01T09:53:13.678505923Z",
          "lastDeployed": "2025-07-25T14:13:15.474729848Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-pathfinder.v609",
            "resourceVersion": "444836231",
            "resourceUID": "a068a428-01b2-4f28-b970-150a75082fb0",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-25T14:13:16Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-profile-service",
          "appVersion": "09baf2a75be0c8bb3817368144246a1993b7c6cd",
          "chartVersion": "7.40.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-profile-service"
        },
        "helm": {
          "name": "hs-profile-service",
          "description": "health solutions profile chart",
          "chartName": "hs-profile-service",
          "chartVersion": "7.40.1",
          "appVersion": "09baf2a75be0c8bb3817368144246a1993b7c6cd",
          "status": "deployed",
          "firstDeployed": "2024-08-01T12:56:56.826954979Z",
          "lastDeployed": "2025-07-02T10:32:10.06237043Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-profile-service.v28",
            "resourceVersion": "426542800",
            "resourceUID": "a356c42b-916f-4896-8c00-fb264f1cb9c4",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:10Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-custom-content-service",
          "appVersion": "e73faf1c973f74ebba243df02df525d9942baa6f",
          "chartVersion": "4.9.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-custom-content-service"
        },
        "helm": {
          "name": "hs-custom-content-service",
          "description": "health solutions custom content chart",
          "chartName": "hs-custom-content-service",
          "chartVersion": "4.9.2",
          "appVersion": "e73faf1c973f74ebba243df02df525d9942baa6f",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:33:38.482862524Z",
          "lastDeployed": "2025-06-10T09:32:50.933425929Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-custom-content-service.v15",
            "resourceVersion": "408532347",
            "resourceUID": "0b4e253b-0d38-4f77-a955-1187a594c39d",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-06-10T09:32:51Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-vitality-age-calculator-service",
          "appVersion": "610a631ba854ce97f11cdc282ff55f9a35d38358",
          "chartVersion": "6.38.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-vitality-age-calculator-service"
        },
        "helm": {
          "name": "hs-vitality-age-calculator-service",
          "description": "vitality age calculator service",
          "chartName": "hs-vitality-age-calculator-service",
          "chartVersion": "6.38.2",
          "appVersion": "610a631ba854ce97f11cdc282ff55f9a35d38358",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:33.479970416Z",
          "lastDeployed": "2025-07-28T23:55:40.246185102Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-vitality-age-calculator-service.v59",
            "resourceVersion": "447494523",
            "resourceUID": "808de0e3-2d7a-4163-a8c8-0f0fcec25547",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:40Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "cp-bff-service",
          "appVersion": "57db26bf163909216b8a6df0b5e63dd9581a8861",
          "chartVersion": "4.40.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/cp-bff-service"
        },
        "helm": {
          "name": "cp-bff-service",
          "description": "health solutions access-data chart",
          "chartName": "cp-bff-service",
          "chartVersion": "4.40.1",
          "appVersion": "57db26bf163909216b8a6df0b5e63dd9581a8861",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:39:32.073313465Z",
          "lastDeployed": "2025-07-23T11:08:01.565579466Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.cp-bff-service.v183",
            "resourceVersion": "443175677",
            "resourceUID": "2c07eb86-f68b-40db-9e4d-1bbe555f5230",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-23T11:08:01Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-policy-client",
          "appVersion": "819bab836f38eab9a5ebaf1ea7ad45dbcda77157",
          "chartVersion": "7.26.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-policy-client"
        },
        "helm": {
          "name": "hs-policy-client",
          "description": "health solutions policy-client management chart",
          "chartName": "hs-policy-client",
          "chartVersion": "7.26.2",
          "appVersion": "819bab836f38eab9a5ebaf1ea7ad45dbcda77157",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:49:29.678712886Z",
          "lastDeployed": "2025-08-01T21:53:12.757515504Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-policy-client.v20",
            "resourceVersion": "450575817",
            "resourceUID": "f783ec97-6e72-434f-8ca5-188927e49613",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T21:53:13Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-survey-feedback",
          "appVersion": "dd6297f770d1cf6961f8c4cfd476a9b3aa3f85a7",
          "chartVersion": "5.20.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-survey-feedback"
        },
        "helm": {
          "name": "hs-survey-feedback",
          "description": "survey feedback service",
          "chartName": "hs-survey-feedback",
          "chartVersion": "5.20.2",
          "appVersion": "dd6297f770d1cf6961f8c4cfd476a9b3aa3f85a7",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:33.286024206Z",
          "lastDeployed": "2025-07-02T10:39:55.484871518Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-survey-feedback.v11",
            "resourceVersion": "426547446",
            "resourceUID": "5d4f2414-7e08-4e51-a318-722c67cd2a33",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:39:56Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-babelfish-communications",
          "appVersion": "92fc8c83f0eb45938b0f839950adf23dc725c5f0",
          "chartVersion": "9.22.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-babelfish-communications"
        },
        "helm": {
          "name": "hs-babelfish-communications",
          "description": "babelfish communications for vitality v3 chart",
          "chartName": "hs-babelfish-communications",
          "chartVersion": "9.22.1",
          "appVersion": "92fc8c83f0eb45938b0f839950adf23dc725c5f0",
          "status": "deployed",
          "firstDeployed": "2024-03-07T09:12:15.37651Z",
          "lastDeployed": "2025-07-10T16:52:38.863708766Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-babelfish-communications.v4426",
            "resourceVersion": "433178653",
            "resourceUID": "5080e44d-bde9-45ba-8c52-faf91eb6774a",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-10T16:52:39Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-cms-service",
          "appVersion": "873e1b254b0fe193edf6a2a9389d33ea13e87bfd",
          "chartVersion": "10.5.4",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-cms-service"
        },
        "helm": {
          "name": "hs-cms-service",
          "description": "health solutions cms service chart",
          "chartName": "hs-cms-service",
          "chartVersion": "10.5.4",
          "appVersion": "873e1b254b0fe193edf6a2a9389d33ea13e87bfd",
          "status": "deployed",
          "firstDeployed": "2024-03-07T09:14:56.17941Z",
          "lastDeployed": "2025-07-28T23:55:35.470886484Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-cms-service.v155",
            "resourceVersion": "447494463",
            "resourceUID": "d43d8191-cc70-44dc-a8d7-60dce1e3f871",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:36Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-notification-manager",
          "appVersion": "38dfedb5e42f0b166d9f63cc116c89138f46aa26",
          "chartVersion": "8.27.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-notification-manager"
        },
        "helm": {
          "name": "hs-notification-manager",
          "description": "hs-notification-manager service chart",
          "chartName": "hs-notification-manager",
          "chartVersion": "8.27.1",
          "appVersion": "38dfedb5e42f0b166d9f63cc116c89138f46aa26",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:36.351127015Z",
          "lastDeployed": "2025-07-28T23:55:35.441899141Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-notification-manager.v50",
            "resourceVersion": "447494466",
            "resourceUID": "2788cddf-201c-41a4-baff-49f5d2db8dd6",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:36Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-rosetta",
          "appVersion": "e06b9be12182dafe9d0103d62843acd9b7cf68a1",
          "chartVersion": "7.41.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-rosetta"
        },
        "helm": {
          "name": "hs-rosetta",
          "description": "health solutions rosetta management chart",
          "chartName": "hs-rosetta",
          "chartVersion": "7.41.1",
          "appVersion": "e06b9be12182dafe9d0103d62843acd9b7cf68a1",
          "status": "deployed",
          "firstDeployed": "2024-03-07T09:17:17.154449Z",
          "lastDeployed": "2025-07-28T23:55:45.544968995Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-rosetta.v69",
            "resourceVersion": "447494621",
            "resourceUID": "01548cf5-8d13-4599-b7e6-3e739a9eadbc",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:46Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-bonus-bucks",
          "appVersion": "63230a26946b48010e4d9fd7424bf81d0da989b7",
          "chartVersion": "5.2.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-bonus-bucks"
        },
        "helm": {
          "name": "hs-bonus-bucks",
          "description": "separate adult program bonus bucks",
          "chartName": "hs-bonus-bucks",
          "chartVersion": "5.2.3",
          "appVersion": "63230a26946b48010e4d9fd7424bf81d0da989b7",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:33.683016796Z",
          "lastDeployed": "2025-07-28T23:55:46.473386964Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-bonus-bucks.v29",
            "resourceVersion": "447494633",
            "resourceUID": "834380d2-4d9f-4a32-afd3-00cbaf4db2d9",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:47Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-rebates",
          "appVersion": "c1e10b5b87fe9e226009af618cc7d66845db252c",
          "chartVersion": "4.17.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-rebates"
        },
        "helm": {
          "name": "hs-rebates",
          "description": "health solutions rebates chart",
          "chartName": "hs-rebates",
          "chartVersion": "4.17.2",
          "appVersion": "c1e10b5b87fe9e226009af618cc7d66845db252c",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:39:32.375367187Z",
          "lastDeployed": "2025-04-24T16:55:42.300528451Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-rebates.v30",
            "resourceVersion": "370479290",
            "resourceUID": "67e0445c-0e21-413b-aedc-52101698c9fd",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-04-24T16:55:42Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-program-builder",
          "appVersion": "8367fb445509dbbd424a64fd4b934b415e64a683",
          "chartVersion": "4.100.6",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-program-builder"
        },
        "helm": {
          "name": "hs-program-builder",
          "description": "health solutions program builder chart",
          "chartName": "hs-program-builder",
          "chartVersion": "4.100.6",
          "appVersion": "8367fb445509dbbd424a64fd4b934b415e64a683",
          "status": "deployed",
          "firstDeployed": "2024-12-10T13:03:12.959751Z",
          "lastDeployed": "2025-07-31T12:32:42.241820726Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-program-builder.v52",
            "resourceVersion": "449495025",
            "resourceUID": "85a0ad17-3529-4835-bc7a-462d885ec5c0",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-31T12:32:43Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-user-role-service",
          "appVersion": "38f77b17e5ca17e19f26c76a8817708ce80d6ad6",
          "chartVersion": "3.17.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-user-role-service"
        },
        "helm": {
          "name": "hs-user-role-service",
          "description": "health solutions user-role-service chart",
          "chartName": "hs-user-role-service",
          "chartVersion": "3.17.2",
          "appVersion": "38f77b17e5ca17e19f26c76a8817708ce80d6ad6",
          "status": "deployed",
          "firstDeployed": "2024-03-07T09:20:01.234958Z",
          "lastDeployed": "2025-07-28T23:55:46.945073785Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-user-role-service.v12",
            "resourceVersion": "447494639",
            "resourceUID": "7602cbb6-af50-4285-8a04-7bf81ece3869",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:47Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-intercluster-cache-manager",
          "appVersion": "27edd174c7379dfd0b4609f22879a89cbcebd319",
          "chartVersion": "4.20.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-intercluster-cache-manager"
        },
        "helm": {
          "name": "hs-intercluster-cache-manager",
          "description": "health solutions intercluster-cache-manager chart",
          "chartName": "hs-intercluster-cache-manager",
          "chartVersion": "4.20.2",
          "appVersion": "27edd174c7379dfd0b4609f22879a89cbcebd319",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:33:35.155569837Z",
          "lastDeployed": "2025-07-28T23:55:32.313661858Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-intercluster-cache-manager.v17",
            "resourceVersion": "447494422",
            "resourceUID": "f260c7e9-3c84-4390-8fc5-191e8883550a",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:32Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-health-results-bff",
          "appVersion": "6b7709f229911e388ed4b2e721606c829d5eb6ce",
          "chartVersion": "1.28.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-health-results-bff"
        },
        "helm": {
          "name": "hs-health-results-bff",
          "description": "health solutions health-results-bff chart",
          "chartName": "hs-health-results-bff",
          "chartVersion": "1.28.1",
          "appVersion": "6b7709f229911e388ed4b2e721606c829d5eb6ce",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:33:41.483448173Z",
          "lastDeployed": "2025-07-28T23:55:41.0975502Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-health-results-bff.v72",
            "resourceVersion": "447494539",
            "resourceUID": "bc8953e0-be9a-4e90-871a-667238a2d63e",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:41Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-discussion",
          "appVersion": "a3042a91d94fdceddb645bec5265298e7df85e7e",
          "chartVersion": "7.26.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-discussion"
        },
        "helm": {
          "name": "hs-discussion",
          "description": "health solutions discussion chart",
          "chartName": "hs-discussion",
          "chartVersion": "7.26.2",
          "appVersion": "a3042a91d94fdceddb645bec5265298e7df85e7e",
          "status": "deployed",
          "firstDeployed": "2024-03-07T08:10:26.681641336Z",
          "lastDeployed": "2025-07-28T23:55:39.044008389Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-discussion.v64",
            "resourceVersion": "447494497",
            "resourceUID": "6affd152-7242-4e72-98d7-7b809ae05f94",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-28T23:55:39Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "login",
          "appVersion": "99ee33a-a1b28ef2a5",
          "chartVersion": "1.86.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/login"
        },
        "helm": {
          "name": "login",
          "description": "login chart",
          "chartName": "login",
          "chartVersion": "1.86.0",
          "appVersion": "99ee33a-a1b28ef2a5",
          "status": "deployed",
          "firstDeployed": "2024-03-06T09:33:35.255127567Z",
          "lastDeployed": "2025-02-11T11:52:50.581924878Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.login.v3",
            "resourceVersion": "308272372",
            "resourceUID": "df2feac3-7cda-429a-8c68-5874ae1e0cfd",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-02-11T11:52:51Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-tutorial-bff",
          "appVersion": "420d33ef7084ad5f1873f02e15f10b584d7b5f6e",
          "chartVersion": "1.41.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-tutorial-bff"
        },
        "helm": {
          "name": "hs-tutorial-bff",
          "description": "health solutions tutorial-bff chart",
          "chartName": "hs-tutorial-bff",
          "chartVersion": "1.41.1",
          "appVersion": "420d33ef7084ad5f1873f02e15f10b584d7b5f6e",
          "status": "deployed",
          "firstDeployed": "2024-03-11T13:49:26.283299249Z",
          "lastDeployed": "2025-07-02T10:32:12.694061648Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-tutorial-bff.v169",
            "resourceVersion": "426542870",
            "resourceUID": "96bad01f-8468-49e6-ac98-e989d02f3a14",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:13Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-pathfinder-bff",
          "appVersion": "7606569fb6e09a98958850e416058290b9c5a49a",
          "chartVersion": "1.48.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-pathfinder-bff"
        },
        "helm": {
          "name": "hs-pathfinder-bff",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-pathfinder-bff",
          "chartVersion": "1.48.2",
          "appVersion": "7606569fb6e09a98958850e416058290b9c5a49a",
          "status": "deployed",
          "firstDeployed": "2024-04-01T09:52:54.988961323Z",
          "lastDeployed": "2025-07-31T22:04:05.974323652Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-pathfinder-bff.v609",
            "resourceVersion": "449804335",
            "resourceUID": "15751beb-9679-4dd6-acde-0d08a1f2b324",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-31T22:04:06Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-fhir-gateway",
          "appVersion": "b1d656cb97918fc33cd30d0a329dbd6dff198352",
          "chartVersion": "1.16.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-fhir-gateway"
        },
        "helm": {
          "name": "hs-fhir-gateway",
          "description": "fhir gateway service",
          "chartName": "hs-fhir-gateway",
          "chartVersion": "1.16.1",
          "appVersion": "b1d656cb97918fc33cd30d0a329dbd6dff198352",
          "status": "pending-upgrade",
          "firstDeployed": "2024-04-01T09:52:54.997497449Z",
          "lastDeployed": "2025-08-04T03:33:36.294841855Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-fhir-gateway.v4167",
            "resourceVersion": "452326345",
            "resourceUID": "f48aeade-6d4c-4e28-91c5-53db7ae42036",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-04T03:33:36Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-recommender-exchange",
          "appVersion": "01030ea7b6c1e63d0eaf38c5714597de30cff62a",
          "chartVersion": "0.13.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-recommender-exchange"
        },
        "helm": {
          "name": "hs-recommender-exchange",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-recommender-exchange",
          "chartVersion": "0.13.2",
          "appVersion": "01030ea7b6c1e63d0eaf38c5714597de30cff62a",
          "status": "deployed",
          "firstDeployed": "2024-06-24T12:35:29.078243129Z",
          "lastDeployed": "2025-07-02T13:52:50.098547515Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-recommender-exchange.v396",
            "resourceVersion": "426655376",
            "resourceUID": "7aed3dce-71e0-44e4-a181-5e0c6e90e0c8",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T13:52:51Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-prioritizer-orchestrator",
          "appVersion": "6c92d5b9e9677d73a337978e6b1f7fa3de822b9d",
          "chartVersion": "1.26.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-prioritizer-orchestrator"
        },
        "helm": {
          "name": "hs-prioritizer-orchestrator",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-prioritizer-orchestrator",
          "chartVersion": "1.26.2",
          "appVersion": "6c92d5b9e9677d73a337978e6b1f7fa3de822b9d",
          "status": "deployed",
          "firstDeployed": "2024-07-10T14:16:31.02639475Z",
          "lastDeployed": "2025-07-31T11:32:48.466683694Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-prioritizer-orchestrator.v607",
            "resourceVersion": "449461801",
            "resourceUID": "46d00e53-6c7e-43b7-9063-5ad4f429f752",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-31T11:32:49Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-tequila-api-gateway",
          "appVersion": "2f2afd58ccaf03c77df367cff1be5b564a550bfd",
          "chartVersion": "0.40.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-tequila-api-gateway"
        },
        "helm": {
          "name": "hs-tequila-api-gateway",
          "description": "health solutions tequila api gateway",
          "chartName": "hs-tequila-api-gateway",
          "chartVersion": "0.40.1",
          "appVersion": "2f2afd58ccaf03c77df367cff1be5b564a550bfd",
          "status": "deployed",
          "firstDeployed": "2024-12-10T12:04:45.686391Z",
          "lastDeployed": "2025-06-18T08:32:29.45920916Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-tequila-api-gateway.v3",
            "resourceVersion": "414983961",
            "resourceUID": "2b3fc2a6-a040-47a1-9328-1c81ccc998bd",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-06-18T08:32:30Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-fhir-dispatcher",
          "appVersion": "1671c4beb59e154cfbd494db35fcebbca2f98c05",
          "chartVersion": "1.20.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-fhir-dispatcher"
        },
        "helm": {
          "name": "hs-fhir-dispatcher",
          "description": "health solutions fhir-dispatcher chart",
          "chartName": "hs-fhir-dispatcher",
          "chartVersion": "1.20.2",
          "appVersion": "1671c4beb59e154cfbd494db35fcebbca2f98c05",
          "status": "deployed",
          "firstDeployed": "2024-06-03T09:35:28.786364821Z",
          "lastDeployed": "2025-07-02T10:32:18.909174213Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-fhir-dispatcher.v60",
            "resourceVersion": "426543526",
            "resourceUID": "a1962757-ae95-4be8-870d-a5bd102b4c07",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:19Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-instant-rewards",
          "appVersion": "88b710d83997610a80647576fab0a92368c6eff5",
          "chartVersion": "1.48.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-instant-rewards"
        },
        "helm": {
          "name": "hs-instant-rewards",
          "description": "health solutions instant-rewards chart",
          "chartName": "hs-instant-rewards",
          "chartVersion": "1.48.1",
          "appVersion": "88b710d83997610a80647576fab0a92368c6eff5",
          "status": "deployed",
          "firstDeployed": "2024-06-10T11:15:40.388797049Z",
          "lastDeployed": "2025-07-16T09:16:56.08685613Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-instant-rewards.v101",
            "resourceVersion": "437661039",
            "resourceUID": "d6d509fe-efb6-47be-97a1-c07fe9f04889",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-16T09:16:56Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-audit-cleaner",
          "appVersion": "feb3114728af0af940c1edec881eee927f4cb440",
          "chartVersion": "2.5.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-audit-cleaner"
        },
        "helm": {
          "name": "hs-audit-cleaner",
          "description": "Service for periodic deletion of entries in audit tables",
          "chartName": "hs-audit-cleaner",
          "chartVersion": "2.5.1",
          "appVersion": "feb3114728af0af940c1edec881eee927f4cb440",
          "status": "deployed",
          "firstDeployed": "2024-06-18T08:30:38.21020049Z",
          "lastDeployed": "2025-07-02T10:39:51.482721373Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-audit-cleaner.v475",
            "resourceVersion": "426547392",
            "resourceUID": "8c3b55fd-6b74-4a4e-8b5c-6dad54825fd1",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:39:51Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-help-center-bff",
          "appVersion": "e6160d6045af555ee873b0c3da32a02d6d3bc4db",
          "chartVersion": "0.19.10",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-help-center-bff"
        },
        "helm": {
          "name": "hs-help-center-bff",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-help-center-bff",
          "chartVersion": "0.19.10",
          "appVersion": "e6160d6045af555ee873b0c3da32a02d6d3bc4db",
          "status": "deployed",
          "firstDeployed": "2024-07-04T07:35:55.925730248Z",
          "lastDeployed": "2025-07-18T21:51:39.862221294Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-help-center-bff.v644",
            "resourceVersion": "439629932",
            "resourceUID": "3971a8c7-4fe4-47a5-9ba0-cbe01ef274fb",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-18T21:51:40Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-control-center",
          "appVersion": "e242703d699560fd88b5f94788a1e467dcab7593",
          "chartVersion": "0.15.8",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-control-center"
        },
        "helm": {
          "name": "hs-control-center",
          "description": "health solutions control-center chart",
          "chartName": "hs-control-center",
          "chartVersion": "0.15.8",
          "appVersion": "e242703d699560fd88b5f94788a1e467dcab7593",
          "status": "deployed",
          "firstDeployed": "2024-07-22T14:18:53.289634Z",
          "lastDeployed": "2025-07-24T11:53:08.417478044Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-control-center.v283",
            "resourceVersion": "443977134",
            "resourceUID": "57aaae94-bd54-476d-98e1-9df4f63cca55",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-24T11:53:09Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-virtual-consult-manager",
          "appVersion": "48e60b4c1c646c5fe3deaadf184f0c47adfa5cf8",
          "chartVersion": "0.14.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-virtual-consult-manager"
        },
        "helm": {
          "name": "hs-virtual-consult-manager",
          "description": "health solutions virtual-consult-manager chart",
          "chartName": "hs-virtual-consult-manager",
          "chartVersion": "0.14.2",
          "appVersion": "48e60b4c1c646c5fe3deaadf184f0c47adfa5cf8",
          "status": "deployed",
          "firstDeployed": "2025-05-15T11:57:11.40248Z",
          "lastDeployed": "2025-07-25T10:33:00.495716378Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-virtual-consult-manager.v29",
            "resourceVersion": "444715231",
            "resourceUID": "f92d7946-2aef-43ca-88ed-4602976c458d",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-25T10:33:00Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-subscription-manager",
          "appVersion": "acb0e29ea9056ec919fb21a3df11d9820e5457a6",
          "chartVersion": "0.13.5",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-subscription-manager"
        },
        "helm": {
          "name": "hs-subscription-manager",
          "description": "health solutions subscription-manager chart",
          "chartName": "hs-subscription-manager",
          "chartVersion": "0.13.5",
          "appVersion": "acb0e29ea9056ec919fb21a3df11d9820e5457a6",
          "status": "deployed",
          "firstDeployed": "2024-08-15T12:16:57.408948699Z",
          "lastDeployed": "2025-07-29T11:12:53.02024422Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-subscription-manager.v50",
            "resourceVersion": "447863792",
            "resourceUID": "90e5cbd7-8cf5-4856-a993-cf4b730111c6",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-29T11:12:53Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "b2b-api-gateway",
          "appVersion": "b021a0838d3748ff697e23ff0e38e8daf5671b5c",
          "chartVersion": "1.6.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/b2b-api-gateway"
        },
        "helm": {
          "name": "b2b-api-gateway",
          "description": "b2b api gateway helm chart",
          "chartName": "b2b-api-gateway",
          "chartVersion": "1.6.1",
          "appVersion": "b021a0838d3748ff697e23ff0e38e8daf5671b5c",
          "status": "deployed",
          "firstDeployed": "2024-08-21T17:15:19.972366827Z",
          "lastDeployed": "2025-06-10T09:32:35.634063578Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.b2b-api-gateway.v57",
            "resourceVersion": "408532174",
            "resourceUID": "05a93a6a-2558-4214-9233-809678f9cede",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-06-10T09:32:36Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-reward-processor",
          "appVersion": "a8b5516ab82125e7b9ea9de3a7c628edceab7df1",
          "chartVersion": "0.13.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-reward-processor"
        },
        "helm": {
          "name": "hs-reward-processor",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-reward-processor",
          "chartVersion": "0.13.1",
          "appVersion": "a8b5516ab82125e7b9ea9de3a7c628edceab7df1",
          "status": "deployed",
          "firstDeployed": "2024-08-13T08:57:00.029294733Z",
          "lastDeployed": "2025-07-02T10:32:25.610104919Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-reward-processor.v460",
            "resourceVersion": "426543320",
            "resourceUID": "fb24c6bd-2a9c-4195-9b8f-e0c1b73a0916",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:25Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-registration-orchestrator",
          "appVersion": "3f5179331861ee218663eea7b10a54f8d34ef472",
          "chartVersion": "0.10.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-registration-orchestrator"
        },
        "helm": {
          "name": "hs-registration-orchestrator",
          "description": "health solutions registration-orchestrator chart",
          "chartName": "hs-registration-orchestrator",
          "chartVersion": "0.10.1",
          "appVersion": "3f5179331861ee218663eea7b10a54f8d34ef472",
          "status": "deployed",
          "firstDeployed": "2024-09-02T10:31:59.911071051Z",
          "lastDeployed": "2025-07-03T09:53:04.452627829Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-registration-orchestrator.v19",
            "resourceVersion": "427319372",
            "resourceUID": "90aa5ffc-6698-4500-b2e8-da6d1e18e6ab",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-03T09:53:04Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "e2e-php-test",
          "appVersion": "5eb2b0f379a98e361e88134f888c30da4df01512",
          "chartVersion": "0.5.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/e2e-php-test"
        },
        "helm": {
          "name": "e2e-php-test",
          "description": "A Helm chart for php test application",
          "chartName": "e2e-php-test",
          "chartVersion": "0.5.1",
          "appVersion": "5eb2b0f379a98e361e88134f888c30da4df01512",
          "status": "deployed",
          "firstDeployed": "2024-08-21T11:36:28.506203786Z",
          "lastDeployed": "2025-07-02T10:39:46.098841786Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.e2e-php-test.v15",
            "resourceVersion": "426547311",
            "resourceUID": "41706b3b-5d72-44a5-bc15-3eaee85fcc13",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:39:46Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-points-manager-core",
          "appVersion": "c75637c972ce2ae1757043a8ae28387a8700c1e0",
          "chartVersion": "5.16.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-points-manager-core"
        },
        "helm": {
          "name": "hs-points-manager-core",
          "description": "Core Points Manager",
          "chartName": "hs-points-manager-core",
          "chartVersion": "5.16.2",
          "appVersion": "c75637c972ce2ae1757043a8ae28387a8700c1e0",
          "status": "deployed",
          "firstDeployed": "2024-09-11T14:52:35.80615229Z",
          "lastDeployed": "2025-06-24T09:12:29.998365357Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-points-manager-core.v23",
            "resourceVersion": "419960835",
            "resourceUID": "1f78ec32-0115-4aac-984a-28dcd7825c18",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-06-24T09:12:30Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-reward-fulfilment",
          "appVersion": "79f6838a797ae5410fc822a75767f338e4133d01",
          "chartVersion": "0.5.8",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-reward-fulfilment"
        },
        "helm": {
          "name": "hs-reward-fulfilment",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-reward-fulfilment",
          "chartVersion": "0.5.8",
          "appVersion": "79f6838a797ae5410fc822a75767f338e4133d01",
          "status": "deployed",
          "firstDeployed": "2024-09-05T10:40:23.795655718Z",
          "lastDeployed": "2025-07-02T10:35:29.901553876Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-reward-fulfilment.v421",
            "resourceVersion": "426545807",
            "resourceUID": "ef573201-9a93-4c4c-85c0-bce8129c4138",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:35:30Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-incomm-partner",
          "appVersion": "5a69f350196aa4e5866f1dd7ed38dbd1046cb431",
          "chartVersion": "6.14.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-incomm-partner"
        },
        "helm": {
          "name": "hs-incomm-partner",
          "description": "health solutions incomm-partner chart",
          "chartName": "hs-incomm-partner",
          "chartVersion": "6.14.1",
          "appVersion": "5a69f350196aa4e5866f1dd7ed38dbd1046cb431",
          "status": "deployed",
          "firstDeployed": "2024-12-10T07:48:26.90913Z",
          "lastDeployed": "2025-07-16T09:16:57.773888819Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-incomm-partner.v53",
            "resourceVersion": "437661162",
            "resourceUID": "5a1ac234-bef7-46e5-b1cd-d9e51f43fa02",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-16T09:16:58Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-sms-manager",
          "appVersion": "1b9ca05e2a17684b9b8426c1d7b185f25a90c804",
          "chartVersion": "0.9.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-sms-manager"
        },
        "helm": {
          "name": "hs-sms-manager",
          "description": "health solutions sms-manager chart",
          "chartName": "hs-sms-manager",
          "chartVersion": "0.9.1",
          "appVersion": "1b9ca05e2a17684b9b8426c1d7b185f25a90c804",
          "status": "deployed",
          "firstDeployed": "2025-01-29T08:52:40.673215742Z",
          "lastDeployed": "2025-06-09T14:32:43.837011868Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-sms-manager.v11",
            "resourceVersion": "407883329",
            "resourceUID": "4fa28fb7-8b0d-4606-ace1-24e7242b7e75",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-06-09T14:32:44Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-user-settings",
          "appVersion": "e22045b8cfd42f6785589f881bbd7e6acf5f2346",
          "chartVersion": "0.1.4",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-user-settings"
        },
        "helm": {
          "name": "hs-user-settings",
          "description": "health solutions user-settings chart",
          "chartName": "hs-user-settings",
          "chartVersion": "0.1.4",
          "appVersion": "e22045b8cfd42f6785589f881bbd7e6acf5f2346",
          "status": "deployed",
          "firstDeployed": "2024-10-09T12:46:36.673877821Z",
          "lastDeployed": "2025-07-02T10:35:27.141371304Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-user-settings.v8",
            "resourceVersion": "426545162",
            "resourceUID": "eef53e47-175e-4ea9-ad0a-2158c09ba133",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:35:27Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-calendar-integration",
          "appVersion": "5df17289886eee2b748cc59f9fd4ae435ecacf74",
          "chartVersion": "1.24.3",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-calendar-integration"
        },
        "helm": {
          "name": "hs-calendar-integration",
          "description": "health solutions calendar-integration chart",
          "chartName": "hs-calendar-integration",
          "chartVersion": "1.24.3",
          "appVersion": "5df17289886eee2b748cc59f9fd4ae435ecacf74",
          "status": "deployed",
          "firstDeployed": "2024-10-17T15:37:39.294740776Z",
          "lastDeployed": "2025-07-31T14:38:50.445815733Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-calendar-integration.v54",
            "resourceVersion": "449563773",
            "resourceUID": "0001e0b2-7449-4d6b-9a28-c497100ec344",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-31T14:38:50Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-master-patient-index",
          "appVersion": "d39d53a8d495cbdbb29b7d815bed377891031297",
          "chartVersion": "1.35.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-master-patient-index"
        },
        "helm": {
          "name": "hs-master-patient-index",
          "description": "health solutions master-patient-index chart",
          "chartName": "hs-master-patient-index",
          "chartVersion": "1.35.1",
          "appVersion": "d39d53a8d495cbdbb29b7d815bed377891031297",
          "status": "pending-upgrade",
          "firstDeployed": "2024-10-29T13:40:22.212624369Z",
          "lastDeployed": "2025-08-04T03:33:33.944800119Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-master-patient-index.v2092",
            "resourceVersion": "452326289",
            "resourceUID": "863cd78b-c0cb-4bcf-84d3-1d418ddb028f",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-04T03:33:34Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-appointment-planner",
          "appVersion": "5b42cb109ff52a52000ce9258c3d660ffba00294",
          "chartVersion": "0.4.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-appointment-planner"
        },
        "helm": {
          "name": "hs-appointment-planner",
          "description": "health solutions appointment-planner chart",
          "chartName": "hs-appointment-planner",
          "chartVersion": "0.4.1",
          "appVersion": "5b42cb109ff52a52000ce9258c3d660ffba00294",
          "status": "deployed",
          "firstDeployed": "2024-11-01T13:39:07.03318Z",
          "lastDeployed": "2025-07-02T10:32:23.270080121Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-appointment-planner.v17",
            "resourceVersion": "426541523",
            "resourceUID": "0db03c40-511e-4395-81e5-a209a4bed497",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:23Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-group-coaching-manager",
          "appVersion": "e6fee60137f225d7534d65a62f1689ae0d0efbfa",
          "chartVersion": "0.9.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-group-coaching-manager"
        },
        "helm": {
          "name": "hs-group-coaching-manager",
          "description": "health solutions group-coaching-manager chart",
          "chartName": "hs-group-coaching-manager",
          "chartVersion": "0.9.2",
          "appVersion": "e6fee60137f225d7534d65a62f1689ae0d0efbfa",
          "status": "deployed",
          "firstDeployed": "2024-12-26T10:18:24.749028Z",
          "lastDeployed": "2025-08-01T13:20:04.218134043Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-group-coaching-manager.v161",
            "resourceVersion": "450297034",
            "resourceUID": "ef20f4d2-7cc4-4265-893c-70f29a6cdd18",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:05Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-wellspark-orchestrator",
          "appVersion": "9c03b43ade926f26fa9b8fd2841250740363ff92",
          "chartVersion": "1.15.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-wellspark-orchestrator"
        },
        "helm": {
          "name": "hs-wellspark-orchestrator",
          "description": "health solutions wellspark-orchestrator chart",
          "chartName": "hs-wellspark-orchestrator",
          "chartVersion": "1.15.2",
          "appVersion": "9c03b43ade926f26fa9b8fd2841250740363ff92",
          "status": "deployed",
          "firstDeployed": "2025-01-16T17:21:37.341329919Z",
          "lastDeployed": "2025-07-02T10:32:21.588903754Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-wellspark-orchestrator.v25",
            "resourceVersion": "426541547",
            "resourceUID": "c022a30e-1090-4e5f-bf72-29cce25c6bf5",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-02T10:32:22Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-claim-engine",
          "appVersion": "80e6762b06c56f6e28dee7f9c36b1a3d40ebc10c",
          "chartVersion": "0.1.9",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-claim-engine"
        },
        "helm": {
          "name": "hs-claim-engine",
          "description": "health solutions claim-engine chart",
          "chartName": "hs-claim-engine",
          "chartVersion": "0.1.9",
          "appVersion": "80e6762b06c56f6e28dee7f9c36b1a3d40ebc10c",
          "status": "deployed",
          "firstDeployed": "2025-02-04T23:58:36.79948173Z",
          "lastDeployed": "2025-04-24T16:55:42.656021651Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-claim-engine.v4",
            "resourceVersion": "370479700",
            "resourceUID": "cab449b6-9ad2-4239-b66d-de7471719718",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-04-24T16:55:43Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-payment-gateway",
          "appVersion": "ae928a292122978f5828d407f1e5f437432ca79e",
          "chartVersion": "3.2.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-payment-gateway"
        },
        "helm": {
          "name": "hs-payment-gateway",
          "description": "health solutions payment-gateway chart",
          "chartName": "hs-payment-gateway",
          "chartVersion": "3.2.2",
          "appVersion": "ae928a292122978f5828d407f1e5f437432ca79e",
          "status": "deployed",
          "firstDeployed": "2025-01-31T07:58:04.245481101Z",
          "lastDeployed": "2025-07-14T22:16:55.789495059Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-payment-gateway.v175",
            "resourceVersion": "436521293",
            "resourceUID": "dd8232c2-6870-4399-a84a-4359820886a5",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-14T22:16:56Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-claims-processor",
          "appVersion": "e1b69c92c754f65a1bfc36c4694f0b7ef93a5749",
          "chartVersion": "0.30.19",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-claims-processor"
        },
        "helm": {
          "name": "hs-claims-processor",
          "description": "health solutions claims-processor chart",
          "chartName": "hs-claims-processor",
          "chartVersion": "0.30.19",
          "appVersion": "e1b69c92c754f65a1bfc36c4694f0b7ef93a5749",
          "status": "deployed",
          "firstDeployed": "2025-03-07T19:18:17.340138662Z",
          "lastDeployed": "2025-07-24T00:01:00.907135497Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-claims-processor.v1451",
            "resourceVersion": "443594093",
            "resourceUID": "274f9ec1-ea70-4f01-b78c-89934f6046e2",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-24T00:01:01Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-personal-journey",
          "appVersion": "9a2a192d8a042623d9cd76e66fac298725b6aa01",
          "chartVersion": "3.49.6",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-personal-journey"
        },
        "helm": {
          "name": "hs-personal-journey",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-personal-journey",
          "chartVersion": "3.49.6",
          "appVersion": "9a2a192d8a042623d9cd76e66fac298725b6aa01",
          "status": "deployed",
          "firstDeployed": "2025-06-24T11:46:57.313127965Z",
          "lastDeployed": "2025-08-01T23:12:47.446733207Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-personal-journey.v58",
            "resourceVersion": "450619064",
            "resourceUID": "35d8a304-13ee-4fbb-9b84-c0bcab64bfc8",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T23:12:48Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-config-flag-aggregator",
          "appVersion": "89a6d44e9a06473d79e1c2ce3d65152e70db2f9a",
          "chartVersion": "0.0.7",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-config-flag-aggregator"
        },
        "helm": {
          "name": "hs-config-flag-aggregator",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-config-flag-aggregator",
          "chartVersion": "0.0.7",
          "appVersion": "89a6d44e9a06473d79e1c2ce3d65152e70db2f9a",
          "status": "deployed",
          "firstDeployed": "2025-07-18T19:10:30.124588543Z",
          "lastDeployed": "2025-07-30T16:33:39.510813928Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-config-flag-aggregator.v5",
            "resourceVersion": "448843497",
            "resourceUID": "a0754f00-00af-4dfb-bde5-be0d48fc363a",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-30T16:33:40Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-journey-bulider",
          "appVersion": "29e92652ed28171b62aae73ad1540bb9205dc99f",
          "chartVersion": "3.43.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-journey-bulider"
        },
        "helm": {
          "name": "hs-journey-bulider",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-journey-bulider",
          "chartVersion": "3.43.1",
          "appVersion": "29e92652ed28171b62aae73ad1540bb9205dc99f",
          "status": "deployed",
          "firstDeployed": "2025-05-27T19:25:50.063081357Z",
          "lastDeployed": "2025-07-30T16:33:23.136024475Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-journey-bulider.v14",
            "resourceVersion": "448843286",
            "resourceUID": "82462034-60ea-4793-9898-ed5564b269fc",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-30T16:33:23Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-file-mapper",
          "appVersion": "f7f64358a6781c1c081b7a62111c1f364980d27e",
          "chartVersion": "0.53.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-file-mapper"
        },
        "helm": {
          "name": "hs-file-mapper",
          "description": "health solutions file-mapper chart",
          "chartName": "hs-file-mapper",
          "chartVersion": "0.53.1",
          "appVersion": "f7f64358a6781c1c081b7a62111c1f364980d27e",
          "status": "deployed",
          "firstDeployed": "2025-03-05T01:52:50.62146665Z",
          "lastDeployed": "2025-07-31T13:33:27.448729833Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-file-mapper.v654",
            "resourceVersion": "449528322",
            "resourceUID": "14a4e586-78f8-4dac-9651-5a7a6c443ba5",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-31T13:33:28Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-graphql-proxy-poc",
          "appVersion": "ffce155d3da81e06366478820eea65b5407ddbf1",
          "chartVersion": "0.15.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-graphql-proxy-poc"
        },
        "helm": {
          "name": "hs-graphql-proxy-poc",
          "description": "Graphql Proxy",
          "chartName": "hs-graphql-proxy-poc",
          "chartVersion": "0.15.2",
          "appVersion": "ffce155d3da81e06366478820eea65b5407ddbf1",
          "status": "deployed",
          "firstDeployed": "2025-02-28T12:50:29.661481684Z",
          "lastDeployed": "2025-06-10T11:32:48.771673729Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-graphql-proxy-poc.v141",
            "resourceVersion": "408601226",
            "resourceUID": "e6a2b104-a5ff-4730-9add-ba84493770d5",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-06-10T11:32:49Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-continuation-card-record",
          "appVersion": "0eae018dba7b9ccc1255f38f2764b16ef2ede18b",
          "chartVersion": "0.7.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-continuation-card-record"
        },
        "helm": {
          "name": "hs-continuation-card-record",
          "description": "health solutions continuation-card-record chart",
          "chartName": "hs-continuation-card-record",
          "chartVersion": "0.7.1",
          "appVersion": "0eae018dba7b9ccc1255f38f2764b16ef2ede18b",
          "status": "deployed",
          "firstDeployed": "2025-06-13T10:33:42.634316Z",
          "lastDeployed": "2025-07-10T09:16:53.950110527Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-continuation-card-record.v21",
            "resourceVersion": "432924854",
            "resourceUID": "cc4ebbd3-0cd8-4e72-8127-5dff127e0c90",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-10T09:16:54Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "loop-api-gateway",
          "appVersion": "52ba7de78b88fea6f0670cbd122c5a96dbc5aa1c",
          "chartVersion": "1.0.16",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/foundation/loop-api-gateway"
        },
        "helm": {
          "name": "loop-api-gateway",
          "description": "loop api gateway helm chart",
          "chartName": "loop-api-gateway",
          "chartVersion": "1.0.16",
          "appVersion": "52ba7de78b88fea6f0670cbd122c5a96dbc5aa1c",
          "status": "deployed",
          "firstDeployed": "2025-03-28T12:40:23.506277036Z",
          "lastDeployed": "2025-06-16T13:52:24.372490145Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.loop-api-gateway.v104",
            "resourceVersion": "413577234",
            "resourceUID": "558fea4e-ff72-459a-8881-826fb9840111",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-06-16T13:52:24Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-pbm-integration",
          "appVersion": "ce3601ff8c7c0b8bcbf30eedf68f3537c7266308",
          "chartVersion": "1.0.36",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-pbm-integration"
        },
        "helm": {
          "name": "hs-pbm-integration",
          "description": "A Helm chart for Kubernetes",
          "chartName": "hs-pbm-integration",
          "chartVersion": "1.0.36",
          "appVersion": "ce3601ff8c7c0b8bcbf30eedf68f3537c7266308",
          "status": "deployed",
          "firstDeployed": "2025-07-03T12:58:22.864781202Z",
          "lastDeployed": "2025-08-01T13:20:05.008968525Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-pbm-integration.v141",
            "resourceVersion": "450297195",
            "resourceUID": "c8434a48-6a72-4352-9818-8638b18fd322",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:05Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-glp1-tracking-api",
          "appVersion": "4bf2ef68d8029647ab8dabae777234852743c177",
          "chartVersion": "0.2.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-glp1-tracking-api"
        },
        "helm": {
          "name": "hs-glp1-tracking-api",
          "description": "health solutions glp1-tracking-api chart",
          "chartName": "hs-glp1-tracking-api",
          "chartVersion": "0.2.1",
          "appVersion": "4bf2ef68d8029647ab8dabae777234852743c177",
          "status": "deployed",
          "firstDeployed": "2025-06-24T09:07:42.991002Z",
          "lastDeployed": "2025-07-11T14:32:27.559915743Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-glp1-tracking-api.v18",
            "resourceVersion": "433921798",
            "resourceUID": "54c613cd-450e-4740-a918-d2b255a50a33",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-07-11T14:32:27Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-ai-mail-orchestrator",
          "appVersion": "828b8ba2ade41da4ea6d74d2b1812ddd360e2311",
          "chartVersion": "0.19.10",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-ai-mail-orchestrator"
        },
        "helm": {
          "name": "hs-ai-mail-orchestrator",
          "description": "Hs AI Mail Orchestrator`",
          "chartName": "hs-ai-mail-orchestrator",
          "chartVersion": "0.19.10",
          "appVersion": "828b8ba2ade41da4ea6d74d2b1812ddd360e2311",
          "status": "deployed",
          "firstDeployed": "2025-07-11T08:57:40.025501934Z",
          "lastDeployed": "2025-08-01T13:20:09.171601023Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-ai-mail-orchestrator.v13",
            "resourceVersion": "450297091",
            "resourceUID": "9b0ea1df-e7a5-4370-8d9b-2f85882caa00",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:09Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-ai-ivr-orchestrator",
          "appVersion": "828b8ba2ade41da4ea6d74d2b1812ddd360e2311",
          "chartVersion": "0.21.7",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-ai-ivr-orchestrator"
        },
        "helm": {
          "name": "hs-ai-ivr-orchestrator",
          "description": "Hs AI IVR Orchestrator",
          "chartName": "hs-ai-ivr-orchestrator",
          "chartVersion": "0.21.7",
          "appVersion": "828b8ba2ade41da4ea6d74d2b1812ddd360e2311",
          "status": "deployed",
          "firstDeployed": "2025-07-11T08:57:39.273493523Z",
          "lastDeployed": "2025-08-01T13:20:03.71286183Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-ai-ivr-orchestrator.v12",
            "resourceVersion": "450297026",
            "resourceUID": "f724686d-7042-4bbc-92db-1f9d6fdf3c58",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-01T13:20:04Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "SERVICE",
        "manifest": {
          "name": "hs-ai-form-generator",
          "appVersion": "828b8ba2ade41da4ea6d74d2b1812ddd360e2311",
          "chartVersion": "0.21.7",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/subsystem/hs-ai-form-generator"
        },
        "helm": {
          "name": "hs-ai-form-generator",
          "description": "Hs AI Form Generator",
          "chartName": "hs-ai-form-generator",
          "chartVersion": "0.21.7",
          "appVersion": "828b8ba2ade41da4ea6d74d2b1812ddd360e2311",
          "status": "pending-upgrade",
          "firstDeployed": "2025-07-11T09:52:21.095738369Z",
          "lastDeployed": "2025-08-04T03:33:32.052779447Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.hs-ai-form-generator.v922",
            "resourceVersion": "452326254",
            "resourceUID": "aa1d5890-c5e0-42e9-b9cd-685e182e31b7",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-08-04T03:33:32Z"
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
        "status": "DEPLOYED",
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
          "status": "deployed",
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
      },
      {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "kafka-ui",
          "appVersion": "latest",
          "chartVersion": "2.1.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/kafka-ui"
        },
        "helm": {
          "name": "kafka-ui",
          "description": "Kafka-ui Helm Chart",
          "chartName": "kafka-ui",
          "chartVersion": "2.1.0",
          "appVersion": null,
          "status": "deployed",
          "firstDeployed": "2024-04-12T12:28:37.081336298Z",
          "lastDeployed": "2024-11-11T09:26:55.665316Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.kafka-ui.v21",
            "resourceVersion": "230500269",
            "resourceUID": "ff695ba1-a724-4d55-98d4-8ae91bbc82b5",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-11-11T09:26:57Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "redis",
          "appVersion": "6.0-persistent",
          "chartVersion": "1.1.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/redis"
        },
        "helm": {
          "name": "redis",
          "description": "redis chart",
          "chartName": "redis",
          "chartVersion": "1.1.0",
          "appVersion": "6.0-persistent",
          "status": "deployed",
          "firstDeployed": "2024-02-19T14:55:17.278769084Z",
          "lastDeployed": "2024-02-19T14:55:17.278769084Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.redis.v1",
            "resourceVersion": "12765277",
            "resourceUID": "8452ac87-7e50-4df2-b67d-f4c8885c4131",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-02-19T14:55:17Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "redis-sentinel",
          "appVersion": "7.2.3",
          "chartVersion": "18.6.2",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/3rd-party/bitnami/redis"
        },
        "helm": {
          "name": "redis-sentinel",
          "description": "Redis(R) is an open source, advanced key-value store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets and sorted sets.",
          "chartName": "redis",
          "chartVersion": "18.6.2",
          "appVersion": "7.2.3",
          "status": "deployed",
          "firstDeployed": "2024-02-19T14:49:58.27733068Z",
          "lastDeployed": "2025-03-13T11:28:04.555567797Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.redis-sentinel.v40",
            "resourceVersion": "334256260",
            "resourceUID": "e6c6c0cb-558c-4221-a46f-f7082c572131",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-03-13T11:28:05Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "eck-elasticsearch-coaching",
          "appVersion": "7.17.7",
          "chartVersion": "1.0.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/infrastructure/eck-elasticsearch"
        },
        "helm": {
          "name": "eck-elasticsearch-coaching",
          "description": "A Helm chart for deploying Elasticsearch cluster using ECK Operator",
          "chartName": "eck-elasticsearch",
          "chartVersion": "1.0.1",
          "appVersion": "7.17.7",
          "status": "deployed",
          "firstDeployed": "2024-11-19T14:27:26.715919Z",
          "lastDeployed": "2024-11-19T14:27:26.715919Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.eck-elasticsearch-coaching.v1",
            "resourceVersion": "237583995",
            "resourceUID": "adac308d-60a6-4582-b1f4-aa04ec284e7c",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-11-19T14:27:28Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "eck-elasticsearch-php",
          "appVersion": "7.17.7",
          "chartVersion": "1.0.1",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/infrastructure/eck-elasticsearch"
        },
        "helm": {
          "name": "eck-elasticsearch-php",
          "description": "A Helm chart for deploying Elasticsearch cluster using ECK Operator",
          "chartName": "eck-elasticsearch",
          "chartVersion": "1.0.1",
          "appVersion": "7.17.7",
          "status": "deployed",
          "firstDeployed": "2024-09-18T12:34:14.783413995Z",
          "lastDeployed": "2024-09-19T08:06:34.996332Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.eck-elasticsearch-php.v2",
            "resourceVersion": "183051687",
            "resourceUID": "7f8dd9fc-dbb9-4a71-8e1d-7746db854a70",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-09-19T08:06:36Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "rabbitmq",
          "appVersion": "latest",
          "chartVersion": "0.1.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/d2hp-v1/integration/rabbitmq"
        },
        "helm": {
          "name": "rabbitmq",
          "description": "rabbitmq chart",
          "chartName": "rabbitmq",
          "chartVersion": "0.1.0",
          "appVersion": "latest",
          "status": "deployed",
          "firstDeployed": "2024-02-19T14:55:16.673980082Z",
          "lastDeployed": "2024-02-19T14:55:16.673980082Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.rabbitmq.v1",
            "resourceVersion": "12765225",
            "resourceUID": "63363c30-769a-4851-8242-283efa7b0435",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2024-02-19T14:55:16Z"
          }
        }
      },
      {
        "status": "DEPLOYED",
        "category": "INFRASTRUCTURE",
        "manifest": {
          "name": "rabbitmq-coaching",
          "appVersion": "3.12.2",
          "chartVersion": "1.1.0",
          "chartRepository": "harbor.dhna.corp/amazon-ecr/infrastructure/rabbitmq"
        },
        "helm": {
          "name": "rabbitmq-coaching",
          "description": "A Helm chart for deploying RabbitMQ cluster using Operator",
          "chartName": "rabbitmq",
          "chartVersion": "1.1.0",
          "appVersion": "3.12.2",
          "status": "deployed",
          "firstDeployed": "2025-04-01T14:41:11.878752Z",
          "lastDeployed": "2025-04-03T14:39:09.246896Z",
          "k8sResource": {
            "namespace": "tvg-us-apps-deploy",
            "resourceName": "sh.helm.release.v1.rabbitmq-coaching.v9",
            "resourceVersion": "353042629",
            "resourceUID": "fed67ef8-7b42-4b5f-ba66-915ca6d5840b",
            "resourceType": "helm.sh/release.v1",
            "creationTimestamp": "2025-04-03T14:39:13Z"
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
