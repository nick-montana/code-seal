/**
 * Seed: newrelic_entities
 * Loads sample New Relic entity records for local/testing use,
 * matching the NewRelicEntity interface and newrelic_entities table.
 */

exports.seed = async function (knex) {
    // Clear existing rows before reseeding
    await knex('newrelic_entities').del();

    await knex('newrelic_entities').insert([
        {
            guid: 'MzkxMjc4NHxBUE18QVBQTElDQVRJT058MjE0NzQ4MzY0OA',
            name: 'neubird-ml-pipeline',
            entity_type: 'APM_APPLICATION_ENTITY',
            domain: 'APM',
            account_id: 3912784,
            reporting: true,
            alert_severity: 'NOT_ALERTING',
            type: 'APPLICATION',
            tags: JSON.stringify([
                { key: 'language', values: ['python'] },
                { key: 'environment', values: ['production'] },
            ]),
            golden_metrics: JSON.stringify({
                metrics: [
                    { name: 'throughput', value: 142.7, unit: 'REQUESTS_PER_MINUTE' },
                    { name: 'responseTimeMs', value: 88.3, unit: 'MS' },
                    { name: 'errorRate', value: 0.4, unit: 'PERCENTAGE' },
                ],
            }),
            recent_alert_violations: JSON.stringify([]),
        },
        {
            guid: 'MzkxMjc4NHxJTkZSQXxOQXwxMjIzMzQ0NTU2',
            name: 'servicenow-connector-host-01',
            entity_type: 'INFRASTRUCTURE_HOST_ENTITY',
            domain: 'INFRA',
            account_id: 3912784,
            reporting: true,
            alert_severity: 'WARNING',
            type: 'HOST',
            tags: JSON.stringify([
                { key: 'os', values: ['linux'] },
                { key: 'environment', values: ['production'] },
            ]),
            golden_metrics: JSON.stringify({
                metrics: [
                    { name: 'cpuPercent', value: 76.2, unit: 'PERCENTAGE' },
                    { name: 'memoryUsedPercent', value: 81.5, unit: 'PERCENTAGE' },
                    { name: 'diskUsedPercent', value: 54.0, unit: 'PERCENTAGE' },
                ],
            }),
            recent_alert_violations: JSON.stringify([
                {
                    violationId: 998877,
                    label: 'High CPU usage',
                    priority: 'WARNING',
                    openedAt: 1789580000000,
                    closedAt: null,
                },
            ]),
        },
        {
            guid: 'MzkxMjc4NHxCUk9XU0VSfEFQUExJQ0FUSU9OfDk5ODg3NzY2NTU',
            name: 'IntelliPlatforms Dashboard',
            entity_type: 'BROWSER_APPLICATION_ENTITY',
            domain: 'BROWSER',
            account_id: 3912784,
            reporting: true,
            alert_severity: 'NOT_ALERTING',
            type: 'APPLICATION',
            tags: JSON.stringify([{ key: 'environment', values: ['production'] }]),
            golden_metrics: JSON.stringify({
                metrics: [
                    { name: 'pageLoadTimeMs', value: 1240.5, unit: 'MS' },
                    { name: 'jsErrorRate', value: 0.12, unit: 'PERCENTAGE' },
                ],
            }),
            recent_alert_violations: JSON.stringify([]),
        },
        {
            guid: 'MzkxMjc4NHxTWU5USHxNT05JVE9SfDU1NTQ0NDMzMjI',
            name: 'ServiceNow Sync Uptime Check',
            entity_type: 'SYNTHETIC_MONITOR_ENTITY',
            domain: 'SYNTH',
            account_id: 3912784,
            reporting: true,
            alert_severity: 'CRITICAL',
            type: 'MONITOR',
            tags: JSON.stringify([{ key: 'monitorType', values: ['SIMPLE'] }]),
            golden_metrics: JSON.stringify({
                metrics: [
                    { name: 'successPercentage', value: 92.1, unit: 'PERCENTAGE' },
                    { name: 'responseTimeMs', value: 3400.0, unit: 'MS' },
                ],
            }),
            recent_alert_violations: JSON.stringify([
                {
                    violationId: 998812,
                    label: 'Synthetic check failing',
                    priority: 'CRITICAL',
                    openedAt: 1789590000000,
                    closedAt: null,
                },
            ]),
        },
    ]);
};