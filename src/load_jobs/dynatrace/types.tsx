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

interface DynatraceEntity {

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