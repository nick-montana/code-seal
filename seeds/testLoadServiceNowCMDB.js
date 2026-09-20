
/**
 * Seed: cmdb_ci_services
 * Loads sample ServiceNow cmdb_ci_service records for local/testing use,
 * matching the CmdbCiService interface and cmdb_ci_services table.
 */

exports.seed = async function (knex) {
    // Clear existing rows before reseeding
    await knex('cmdb_ci_services').del();

    await knex('cmdb_ci_services').insert([
        {
            sys_id: '8a3f1b2c4d5e6f708192a3b4c5d6e7f8',
            name: 'Order Payment Service',
            sys_class_name: 'cmdb_ci_service',
            short_description:
                'Handles payment authorization and settlement for the order pipeline.',
            operational_status: '1',
            business_criticality: '1 - most critical',
            service_classification: 'Business Service',
            install_status: '1',

            owned_by_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user/6d4c3b2a1908f7e6d5c4b3a291807f6e',
            owned_by_value: '6d4c3b2a1908f7e6d5c4b3a291807f6e',

            support_group_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user_group/1a2b3c4d5e6f708192a3b4c5d6e7f809',
            support_group_value: '1a2b3c4d5e6f708192a3b4c5d6e7f809',

            managed_by_group_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user_group/1a2b3c4d5e6f708192a3b4c5d6e7f809',
            managed_by_group_value: '1a2b3c4d5e6f708192a3b4c5d6e7f809',

            location_link:
                'https://intelliplatforms.service-now.com/api/now/table/cmn_location/9988776655443322',
            location_value: '9988776655443322',

            environment: 'Production',
            sys_created_on: '2022-03-14 18:22:10',
            sys_updated_on: '2026-09-15 09:41:03',
            sys_updated_by: 'integration.neubird',
            u_alert_correlation_enabled: 'true',
            u_neubird_monitored: 'true',
        },
        {
            sys_id: 'b1c2d3e4f5061728394a5b6c7d8e9f01',
            name: 'Circuit Breaker Backend A',
            sys_class_name: 'cmdb_ci_service',
            short_description:
                'Resilience4j-managed circuit breaker fronting backendA order processing.',
            operational_status: '1',
            business_criticality: '2 - somewhat critical',
            service_classification: 'Technical Service',
            install_status: '1',

            owned_by_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user/2b3c4d5e6f708192a3b4c5d6e7f80912',
            owned_by_value: '2b3c4d5e6f708192a3b4c5d6e7f80912',

            support_group_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user_group/3c4d5e6f708192a3b4c5d6e7f8091223',
            support_group_value: '3c4d5e6f708192a3b4c5d6e7f8091223',

            managed_by_group_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user_group/3c4d5e6f708192a3b4c5d6e7f8091223',
            managed_by_group_value: '3c4d5e6f708192a3b4c5d6e7f8091223',

            location_link:
                'https://intelliplatforms.service-now.com/api/now/table/cmn_location/9988776655443322',
            location_value: '9988776655443322',

            environment: 'Production',
            sys_created_on: '2023-07-02 11:05:41',
            sys_updated_on: '2026-09-16 21:07:44',
            sys_updated_by: 'integration.neubird',
            u_alert_correlation_enabled: 'true',
            u_neubird_monitored: 'true',
        },
        {
            sys_id: 'c2d3e4f506172839495a6b7c8d9e0f12',
            name: 'ServiceNow Notification Gateway',
            sys_class_name: 'cmdb_ci_service',
            short_description:
                'Outbound gateway routing NeuBird alert classifications back into ServiceNow ITSM.',
            operational_status: '1',
            business_criticality: '3 - less critical',
            service_classification: 'Technical Service',
            install_status: '1',

            owned_by_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user/4d5e6f708192a3b4c5d6e7f809122334',
            owned_by_value: '4d5e6f708192a3b4c5d6e7f809122334',

            support_group_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user_group/5e6f708192a3b4c5d6e7f8091223344a',
            support_group_value: '5e6f708192a3b4c5d6e7f8091223344a',

            managed_by_group_link:
                'https://intelliplatforms.service-now.com/api/now/table/sys_user_group/5e6f708192a3b4c5d6e7f8091223344a',
            managed_by_group_value: '5e6f708192a3b4c5d6e7f8091223344a',

            location_link:
                'https://intelliplatforms.service-now.com/api/now/table/cmn_location/9988776655443322',
            location_value: '9988776655443322',

            environment: 'Production',
            sys_created_on: '2023-09-19 16:40:03',
            sys_updated_on: '2026-09-17 07:22:48',
            sys_updated_by: 'integration.neubird',
            u_alert_correlation_enabled: 'true',
            u_neubird_monitored: 'false',
        },
    ]);
};