/**
 * Seed: dynatrace_entities
 * Loads sample Dynatrace HOST entity records for local/testing use,
 * matching the DynatraceEntity interface and dynatrace_entities table.
 */

exports.seed = async function (knex) {
    // Clear existing rows before reseeding
    await knex('dynatrace_entities').del();

    await knex('dynatrace_entities').insert([
        {
            entity_id: 'HOST-A1B2C3D4E5F6G7H8',
            display_name: 'order-payment-service-host-01',
            type: 'HOST',
            first_seen_tms: 1700000000000,
            last_seen_tms: 1789600000000,

            icon_custom_icon_path: null,
            icon_primary_icon_type: 'HOST',
            icon_secondary_icon_type: 'LINUX',

            properties_bitness: 64,
            properties_cpu_cores: 8,
            properties_monitoring_mode: 'FULL_STACK',
            properties_network_zone_id: 'default',
            properties_os_architecture: 'X86',
            properties_os_type: 'LINUX',

            management_zones: JSON.stringify([
                { id: '1234567890123456', name: 'Production' },
            ]),
            tags: JSON.stringify([
                {
                    context: 'CONTEXTLESS',
                    key: 'environment',
                    stringRepresentation: 'environment:production',
                    value: 'production',
                },
                {
                    context: 'CONTEXTLESS',
                    key: 'team',
                    stringRepresentation: 'team:payments',
                    value: 'payments',
                },
            ]),
            from_relationships: JSON.stringify({
                isInstanceOf: [{ id: 'PROCESS_GROUP-9F8E7D6C5B4A3210', type: 'PROCESS_GROUP' }],
            }),
            to_relationships: JSON.stringify({
                isDiskOf: [{ id: 'DISK-1122334455667788', type: 'DISK' }],
            }),
        },
        {
            entity_id: 'HOST-B2C3D4E5F6G7H8I9',
            display_name: 'circuitbreaker-backendA-host-01',
            type: 'HOST',
            first_seen_tms: 1701500000000,
            last_seen_tms: 1789600000000,

            icon_custom_icon_path: null,
            icon_primary_icon_type: 'HOST',
            icon_secondary_icon_type: 'LINUX',

            properties_bitness: 64,
            properties_cpu_cores: 4,
            properties_monitoring_mode: 'FULL_STACK',
            properties_network_zone_id: 'default',
            properties_os_architecture: 'X86',
            properties_os_type: 'LINUX',

            management_zones: JSON.stringify([
                { id: '1234567890123456', name: 'Production' },
            ]),
            tags: JSON.stringify([
                {
                    context: 'CONTEXTLESS',
                    key: 'environment',
                    stringRepresentation: 'environment:production',
                    value: 'production',
                },
                {
                    context: 'CONTEXTLESS',
                    key: 'team',
                    stringRepresentation: 'team:platform',
                    value: 'platform',
                },
            ]),
            from_relationships: JSON.stringify({
                isInstanceOf: [{ id: 'PROCESS_GROUP-1A2B3C4D5E6F7081', type: 'PROCESS_GROUP' }],
            }),
            to_relationships: JSON.stringify({
                isDiskOf: [{ id: 'DISK-2233445566778899', type: 'DISK' }],
            }),
        },
        {
            entity_id: 'HOST-C3D4E5F6G7H8I9J0',
            display_name: 'servicenow-notification-gateway-host-01',
            type: 'HOST',
            first_seen_tms: 1695000000000,
            last_seen_tms: 1789599000000,

            icon_custom_icon_path: null,
            icon_primary_icon_type: 'HOST',
            icon_secondary_icon_type: 'WINDOWS',

            properties_bitness: 64,
            properties_cpu_cores: 4,
            properties_monitoring_mode: 'FULL_STACK',
            properties_network_zone_id: 'dmz',
            properties_os_architecture: 'X86',
            properties_os_type: 'WINDOWS',

            management_zones: JSON.stringify([
                { id: '1234567890123456', name: 'Production' },
            ]),
            tags: JSON.stringify([
                {
                    context: 'CONTEXTLESS',
                    key: 'environment',
                    stringRepresentation: 'environment:production',
                    value: 'production',
                },
                {
                    context: 'CONTEXTLESS',
                    key: 'integration',
                    stringRepresentation: 'integration:servicenow',
                    value: 'servicenow',
                },
            ]),
            from_relationships: JSON.stringify({
                isInstanceOf: [{ id: 'PROCESS_GROUP-8877665544332211', type: 'PROCESS_GROUP' }],
            }),
            to_relationships: JSON.stringify({
                isDiskOf: [{ id: 'DISK-3344556677889900', type: 'DISK' }],
            }),
        },
    ]);
};