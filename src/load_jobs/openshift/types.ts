interface NamespaceMetadata {
    name: string;
    uid: string;
    resourceVersion: string;
    creationTimestamp: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
}

interface NamespaceSpec {
    finalizers: string[];
}

type NamespacePhase = "Active" | "Terminating";

interface NamespaceStatus {
    phase: NamespacePhase;
}

export interface KubernetesNamespace {
    metadata: NamespaceMetadata;
    spec: NamespaceSpec;
    status: NamespaceStatus;
}

interface NamespaceListMetadata {
    resourceVersion: string;
    continue?: string;
}

export interface NamespaceListResponse {
    kind: "NamespaceList";
    apiVersion: string;
    metadata: NamespaceListMetadata;
    items: KubernetesNamespace[];
}