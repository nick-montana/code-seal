/**
 * Seed: namespace_metadata
 * Loads sample OpenShift namespace records for local/testing use,
 * matching the mocked GET /api/v1/namespaces response.
 */

exports.seed = async function (knex) {
  // Clear existing rows before reseeding
  await knex('namespace_metadata').del();

  await knex('namespace_metadata').insert([
    {
      uid: 'a1b2c3d4-5e6f-7081-92a3-b4c5d6e7f809',
      name: 'intelliplatforms-production',
      resource_version: '48210221',
      creation_timestamp: '2023-06-14T09:12:03Z',
      labels: JSON.stringify({
        'kubernetes.io/metadata.name': 'intelliplatforms-production',
        'pod-security.kubernetes.io/enforce': 'restricted',
        team: 'platform',
        environment: 'production',
      }),
      annotations: JSON.stringify({
        'openshift.io/description':
            'Production workloads for the IntelliPlatforms order/payment services',
        'openshift.io/display-name': 'IntelliPlatforms Production',
        'openshift.io/requester': 'svc-platform-admin',
        'openshift.io/sa.scc.mcs': 's0:c26,c15',
        'openshift.io/sa.scc.supplemental-groups': '1000630000/10000',
        'openshift.io/sa.scc.uid-range': '1000630000/10000',
      }),
    },
    {
      uid: 'b2c3d4e5-6f70-8192-a3b4-c5d6e7f80912',
      name: 'neubird-ai',
      resource_version: '48211558',
      creation_timestamp: '2023-09-19T16:40:03Z',
      labels: JSON.stringify({
        'kubernetes.io/metadata.name': 'neubird-ai',
        'pod-security.kubernetes.io/enforce': 'restricted',
        team: 'ml-platform',
        environment: 'production',
      }),
      annotations: JSON.stringify({
        'openshift.io/description':
            'NeuBird ML pipeline and alert classification services',
        'openshift.io/display-name': 'NeuBird AI',
        'openshift.io/requester': 'svc-neubird-deploy',
        'openshift.io/sa.scc.mcs': 's0:c30,c5',
        'openshift.io/sa.scc.supplemental-groups': '1000670000/10000',
        'openshift.io/sa.scc.uid-range': '1000670000/10000',
      }),
    },
    {
      uid: 'c3d4e5f6-7081-92a3-b4c5-d6e7f8091223',
      name: 'integrations',
      resource_version: '48209884',
      creation_timestamp: '2023-09-19T16:41:17Z',
      labels: JSON.stringify({
        'kubernetes.io/metadata.name': 'integrations',
        'pod-security.kubernetes.io/enforce': 'restricted',
        team: 'platform',
        environment: 'production',
      }),
      annotations: JSON.stringify({
        'openshift.io/description':
            'ServiceNow and third-party integration gateways',
        'openshift.io/display-name': 'Integrations',
        'openshift.io/requester': 'svc-platform-admin',
        'openshift.io/sa.scc.mcs': 's0:c34,c9',
        'openshift.io/sa.scc.supplemental-groups': '1000690000/10000',
        'openshift.io/sa.scc.uid-range': '1000690000/10000',
      }),
    },
    {
      uid: 'd4e5f607-8192-a3b4-c5d6-e7f809122334',
      name: 'monitoring',
      resource_version: '48198012',
      creation_timestamp: '2022-11-03T08:00:00Z',
      labels: JSON.stringify({
        'kubernetes.io/metadata.name': 'monitoring',
        'pod-security.kubernetes.io/enforce': 'privileged',
        team: 'sre',
      }),
      annotations: JSON.stringify({
        'openshift.io/description':
            'Dynatrace OneAgent, Prometheus, and cluster observability tooling',
        'openshift.io/display-name': 'Monitoring',
        'openshift.io/sa.scc.mcs': 's0:c10,c0',
        'openshift.io/sa.scc.supplemental-groups': '1000010000/10000',
        'openshift.io/sa.scc.uid-range': '1000010000/10000',
      }),
    },
    {
      uid: 'e5f60718-92a3-b4c5-d6e7-f80912233445',
      name: 'intelliplatforms-staging',
      resource_version: '48176533',
      creation_timestamp: '2023-06-14T09:15:41Z',
      labels: JSON.stringify({
        'kubernetes.io/metadata.name': 'intelliplatforms-staging',
        'pod-security.kubernetes.io/enforce': 'restricted',
        team: 'platform',
        environment: 'staging',
      }),
      annotations: JSON.stringify({
        'openshift.io/description':
            'Staging environment mirroring production topology',
        'openshift.io/display-name': 'IntelliPlatforms Staging',
        'openshift.io/requester': 'svc-platform-admin',
        'openshift.io/sa.scc.mcs': 's0:c22,c11',
        'openshift.io/sa.scc.supplemental-groups': '1000610000/10000',
        'openshift.io/sa.scc.uid-range': '1000610000/10000',
      }),
    },
    {
      uid: 'f6071829-a3b4-c5d6-e7f8-091223344556',
      name: 'legacy-billing-decomm',
      resource_version: '40021145',
      creation_timestamp: '2021-02-18T13:30:12Z',
      labels: JSON.stringify({
        'kubernetes.io/metadata.name': 'legacy-billing-decomm',
        team: 'platform',
      }),
      annotations: JSON.stringify({
        'openshift.io/description':
            'Deprecated billing service, pending full teardown',
        'openshift.io/display-name': 'Legacy Billing (Decommissioning)',
      }),
    },
  ]);
};