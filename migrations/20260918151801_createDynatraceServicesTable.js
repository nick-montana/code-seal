/**
 * Migration: create the dynatrace_entities table
 * Matches the DynatraceEntity interface.
 *
 * Nested single objects (icon, properties) are flattened into their own
 * columns so they stay queryable/filterable. Nested arrays/collections
 * (managementZones, tags, fromRelationships, toRelationships) are stored
 * as jsonb, since their shape is a list of sub-objects that doesn't
 * flatten cleanly into columns.
 */

exports.up = function (knex) {
    return knex.schema.createTable('dynatrace_entities', (table) => {
        table.string('entity_id').primary();
        table.string('display_name').notNullable();
        table.string('type').notNullable(); // e.g. "HOST"
        table.bigInteger('first_seen_tms').notNullable();
        table.bigInteger('last_seen_tms').notNullable();

        // Icon
        table.string('icon_custom_icon_path').nullable();
        table.string('icon_primary_icon_type').nullable();
        table.string('icon_secondary_icon_type').nullable();

        // Properties
        table.integer('properties_bitness').nullable();
        table.integer('properties_cpu_cores').nullable();
        table.string('properties_monitoring_mode').nullable(); // e.g. "FULL_STACK"
        table.string('properties_network_zone_id').nullable();
        table.string('properties_os_architecture').nullable(); // e.g. "X86"
        table.string('properties_os_type').nullable(); // e.g. "LINUX"

        // Collections stored as jsonb: ManagementZone[], Tag[],
        // FromRelationships, ToRelationships
        table.jsonb('management_zones').notNullable().defaultTo('[]');
        table.jsonb('tags').notNullable().defaultTo('[]');
        table.jsonb('from_relationships').notNullable().defaultTo('{}');
        table.jsonb('to_relationships').notNullable().defaultTo('{}');

        table.index('type');
        table.index('display_name');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('dynatrace_entities');
};