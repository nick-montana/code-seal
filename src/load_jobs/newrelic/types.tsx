interface NewRelicTag {
    key: string;
    values: string[];
}

interface NewRelicMetric {
    name: string;
    value: number;
    unit: string;
}

interface NewRelicGoldenMetrics {
    metrics: NewRelicMetric[];
}

interface NewRelicAlertViolation {
    violationId: number;
    label: string;
    priority: "WARNING" | "CRITICAL";
    openedAt: number;
    closedAt: number | null;
}

type NewRelicEntityDomain = "APM" | "INFRA" | "BROWSER" | "SYNTH" | "MOBILE";

type NewRelicEntityType =
    | "APM_APPLICATION_ENTITY"
    | "INFRASTRUCTURE_HOST_ENTITY"
    | "BROWSER_APPLICATION_ENTITY"
    | "SYNTHETIC_MONITOR_ENTITY"
    | "MOBILE_APPLICATION_ENTITY";

type NewRelicAlertSeverity =
    | "NOT_ALERTING"
    | "WARNING"
    | "CRITICAL"
    | "NOT_CONFIGURED";

export interface NewRelicEntity {
    guid: string;
    name: string;
    entityType: NewRelicEntityType;
    domain: NewRelicEntityDomain;
    type: string;
    accountId: number;
    reporting: boolean;
    alertSeverity: NewRelicAlertSeverity;
    tags: NewRelicTag[];
    goldenMetrics: NewRelicGoldenMetrics;
    recentAlertViolations: NewRelicAlertViolation[];
}

interface NewRelicEntitySearchResults {
    entities: NewRelicEntity[];
    nextCursor: string | null;
}

interface NewRelicEntitySearch {
    count: number;
    results: NewRelicEntitySearchResults;
}

interface NewRelicActor {
    entitySearch: NewRelicEntitySearch;
}

export interface NewRelicEntitySearchResponse {
    data: {
        actor: NewRelicActor;
    };
}