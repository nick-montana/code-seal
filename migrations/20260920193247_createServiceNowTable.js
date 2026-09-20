/**
 * Migration: create the cmdb_ci_services table
 * Matches the CmdbCiService interface.
 *
 * This interface has no arrays, so unlike the GitHub/Dynatrace/New Relic
 * versions there's no need for jsonb columns. The four ServiceNowReference
 * fields (owned_by, support_group, managed_by_group, location) are each
 * flattened into a _link/_value column pair.
 */

exports.up = function (knex) {
    return knex.schema.createTable('cmdb_ci_services', (table) => {
        table.string('sys_id').primary();
        table.string('name').notNullable();
        table.string('sys_class_name').notNullable();
        table.text('short_description').nullable();
        table.string('operational_status').notNullable();
        table.string('business_criticality').notNullable();
        table.string('service_classification').notNullable();
        table.string('install_status').notNullable();

        // owned_by: ServiceNowReference
        table.string('owned_by_link').nullable();
        table.string('owned_by_value').nullable();

        // support_group: ServiceNowReference
        table.string('support_group_link').nullable();
        table.string('support_group_value').nullable();

        // managed_by_group: ServiceNowReference
        table.string('managed_by_group_link').nullable();
        table.string('managed_by_group_value').nullable();

        // location: ServiceNowReference
        table.string('location_link').nullable();
        table.string('location_value').nullable();

        table.string('environment').notNullable();
        table.timestamp('sys_created_on').notNullable();
        table.timestamp('sys_updated_on').notNullable();
        table.string('sys_updated_by').notNullable();
        table.string('u_alert_correlation_enabled').notNullable();
        table.string('u_neubird_monitored').notNullable();

        table.index('sys_class_name');
        table.index('operational_status');
        table.index('support_group_value');
        table.index('owned_by_value');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('cmdb_ci_services');
};