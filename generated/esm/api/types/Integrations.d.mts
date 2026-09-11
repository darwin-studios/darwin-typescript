export interface Integrations {
    catalog: Integrations.Catalog;
    connections: Record<string, unknown>[];
    skills: Record<string, unknown>[];
}
export declare namespace Integrations {
    interface Catalog {
        enabled: boolean;
        toolkits: Record<string, unknown>[];
    }
}
