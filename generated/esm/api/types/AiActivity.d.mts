export interface AiActivity {
    id: string;
    kind: string;
    summary: string;
    entityType?: (string | null) | undefined;
    entityId?: (string | null) | undefined;
    status: string;
    metadata?: Record<string, unknown> | undefined;
    traceId?: (string | null) | undefined;
    createdAt: string;
}
