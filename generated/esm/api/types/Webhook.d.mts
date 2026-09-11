export interface Webhook {
    id: string;
    applicationId?: string | undefined;
    url?: string | undefined;
    events?: string[] | undefined;
    status: Webhook.Status;
    secretPrefix?: string | undefined;
    lastDeliveredAt?: (string | null) | undefined;
    lastFailureAt?: (string | null) | undefined;
    failureCount?: number | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}
export declare namespace Webhook {
    const Status: {
        readonly Active: "ACTIVE";
        readonly Revoked: "REVOKED";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
