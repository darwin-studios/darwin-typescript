/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         webhookId: "webhookId"
 *     }
 */
export interface ListWebhookDeliveriesRequest {
    applicationId: string;
    webhookId: string;
    limit?: number;
}
