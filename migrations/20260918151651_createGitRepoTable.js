/**
 * Migration: create the github_repositories table
 * Matches the GitHubRepository interface fields.
 */

exports.up = function (knex) {
    return knex.schema.createTable('git_repos', (table) => {
        table.integer('id').primary();
        table.string('node_id').notNullable().unique();
        table.string('name').notNullable();
        table.string('full_name').notNullable().unique();
        table.boolean('private').notNullable();
        table.string('html_url').notNullable();
        table.text('description').nullable();
        table.boolean('fork').notNullable();
        table.string('url').notNullable();
        table.timestamp('created_at').notNullable();
        table.timestamp('updated_at').notNullable();
        table.timestamp('pushed_at').notNullable();
        table.string('git_url').notNullable();
        table.string('ssh_url').notNullable();
        table.string('clone_url').notNullable();
        table.string('homepage').nullable();
        table.integer('size').notNullable();
        table.integer('stargazers_count').notNullable();
        table.integer('watchers_count').notNullable();
        table.string('language').nullable();
        table.integer('forks_count').notNullable();
        table.boolean('archived').notNullable();
        table.boolean('disabled').notNullable();
        table.integer('open_issues_count').notNullable();
        table
            .enu('visibility', ['public', 'private', 'internal'])
            .notNullable();
        table.string('default_branch').notNullable();
        // topics is a string[] in the interface; jsonb keeps this portable
        // across Postgres/MySQL/SQLite (use specificType('text[]') if you're
        // committed to Postgres and want a native array column instead).
        table.jsonb('topics').notNullable().defaultTo('[]');
        table.boolean('allow_squash_merge').notNullable();
        table.boolean('allow_merge_commit').notNullable();
        table.boolean('allow_rebase_merge').notNullable();
        table.boolean('delete_branch_on_merge').notNullable();

        table.index('full_name');
        table.index('visibility');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('git_repos');
};
