interface RelationshipRef {
    id: string;
    type: string;
}

interface FromRelationships {
    isInstanceOf: RelationshipRef[];
}

interface ToRelationships {
    isDiskOf: RelationshipRef[];
}

interface Icon {
    customIconPath: string;
    primaryIconType: string;
    secondaryIconType: string;
}

interface ManagementZone {
    id: string;
    name: string;
}

interface EntityProperties {
    bitness: number;
    cpuCores: number;
    monitoringMode: string; // e.g. "FULL_STACK"
    networkZoneId: string;
    osArchitecture: string; // e.g. "X86"
    osType: string; // e.g. "LINUX"
}

type TagContext = "CONTEXTLESS" | "ENVIRONMENT" | string;

interface Tag {
    context: TagContext;
    key: string;
    stringRepresentation: string;
    value: string;
}

export interface DynatraceEntity {

    displayName: string;
    entityId: string;
    firstSeenTms: number;
    fromRelationships: FromRelationships;
    icon: Icon;
    lastSeenTms: number;
    managementZones: ManagementZone[];
    properties: EntityProperties;
    tags: Tag[];
    toRelationships: ToRelationships;
    type: string; // e.g. "HOST"
}

interface ServiceRelationshipRef {
    id: string;
}

interface ServiceFromRelationships {
    runsOn: ServiceRelationshipRef[];
    calls: ServiceRelationshipRef[];
}

interface ServiceToRelationships {
    calledBy: ServiceRelationshipRef[];
}

interface ServiceTechnology {
    type: string; // e.g. "JAVA", "SPRING_BOOT"
    edition: string | null;
    version: string;
}

interface ServiceProperties {
    serviceType: string; // e.g. "WEB_REQUEST_SERVICE"
    webServerName: string; // e.g. "embedded-tomcat"
    webApplicationType: string; // e.g. "BACKEND"
    technologies: ServiceTechnology[];
    detectedName: string;
    publicDomainName: string | null;
    ipAddress: string[];
    port: number;
}

interface ServiceTag {
    context: TagContext;
    key: string;
    value: string;
}

export interface DynatraceEntityService {

    displayName: string;
    entityId: string;
    firstSeenTms: number;
    fromRelationships: ServiceFromRelationships;
    lastSeenTms: number;
    managementZones: ManagementZone[];
    properties: ServiceProperties;
    tags: ServiceTag[];
    toRelationships: ServiceToRelationships;
    type: string; // e.g. "SERVICE"
}