export interface WebhookDelivery {
    id: string;
    eventId: string;
    eventType: string;
    status: WebhookDelivery.Status;
    attempts: number;
    availableAt: string;
    responseStatus?: (number | null) | undefined;
    responseBody?: (string | null) | undefined;
    lastError?: (string | null) | undefined;
    deliveredAt?: (string | null) | undefined;
    createdAt?: string | undefined;
    updatedAt: string;
}
export declare namespace WebhookDelivery {
    const Status: {
        readonly Pending: "PENDING";
        readonly Delivering: "DELIVERING";
        readonly Delivered: "DELIVERED";
        readonly Failed: "FAILED";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
