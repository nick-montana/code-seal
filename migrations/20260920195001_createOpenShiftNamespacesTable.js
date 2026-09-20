/**
 * Migration: create the namespace_metadata table
 * Matches the NamespaceMetadata interface.
 *
 * labels and annotations are open-ended key/value maps (Record<string,
 * string>), so they're stored as jsonb rather than flattened into columns.
 */

exports.up = function (knex) {
    return knex.schema.createTable('namespace_metadata', (table) => {
        table.string('uid').primary();
        table.string('name').notNullable();
        table.string('resource_version').notNullable();
        table.timestamp('creation_timestamp').notNullable();

        // labels?: Record<string, string>
        table.jsonb('labels').nullable();
        // annotations?: Record<string, string>
        table.jsonb('annotations').nullable();

        table.index('name');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('namespace_metadata');
};