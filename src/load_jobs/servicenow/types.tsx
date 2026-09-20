interface ServiceNowReference {
    link: string;
    value: string;
}

export interface CmdbCiService {
    sys_id: string;
    name: string;
    sys_class_name: string;
    short_description: string;
    operational_status: string;
    business_criticality: string;
    service_classification: string;
    install_status: string;
    owned_by: ServiceNowReference;
    support_group: ServiceNowReference;
    managed_by_group: ServiceNowReference;
    location: ServiceNowReference;
    environment: string;
    sys_created_on: string;
    sys_updated_on: string;
    sys_updated_by: string;
    u_alert_correlation_enabled: string;
    u_neubird_monitored: string;
}

export interface CmdbCiServiceListResponse {
    result: CmdbCiService[];
}