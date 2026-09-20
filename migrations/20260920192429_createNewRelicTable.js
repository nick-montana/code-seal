/**
 * Migration: create the newrelic_entities table
 * Matches the NewRelicEntity interface.
 *
 * entityType, domain, and alertSeverity are enforced as enums since they're
 * string literal unions in the interface. tags, goldenMetrics, and
 * recentAlertViolations are stored as jsonb, since each is a list/nested
 * object whose shape doesn't flatten cleanly into fixed columns.
 */

exports.up = function (knex) {
    return knex.schema.createTable('newrelic_entities', (table) => {
        table.string('guid').primary();
        table.string('name').notNullable();
        table
            .enu('entity_type', [
                'APM_APPLICATION_ENTITY',
                'INFRASTRUCTURE_HOST_ENTITY',
                'BROWSER_APPLICATION_ENTITY',
                'SYNTHETIC_MONITOR_ENTITY',
                'MOBILE_APPLICATION_ENTITY',
            ])
            .notNullable();
        table
            .enu('domain', ['APM', 'INFRA', 'BROWSER', 'SYNTH', 'MOBILE'])
            .notNullable();
        table.integer('account_id').notNullable();
        table.boolean('reporting').notNullable();
        table
            .enu('alert_severity', [
                'NOT_ALERTING',
                'WARNING',
                'CRITICAL',
                'NOT_CONFIGURED',
            ])
            .notNullable();
        table.string('type').notNullable();

        // NewRelicTag[]
        table.jsonb('tags').notNullable().defaultTo('[]');
        // NewRelicGoldenMetrics ({ metrics: NewRelicMetric[] })
        table.jsonb('golden_metrics').notNullable().defaultTo('{"metrics":[]}');
        // NewRelicAlertViolation[]
        table.jsonb('recent_alert_violations').notNullable().defaultTo('[]');

        table.index('entity_type');
        table.index('domain');
        table.index('alert_severity');
        table.index('account_id');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('newrelic_entities');
};