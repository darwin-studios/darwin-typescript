/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         webhookId: "webhookId",
 *         deliveryId: "deliveryId"
 *     }
 */
export interface RetryWebhookDeliveryRequest {
  applicationId: string;
  webhookId: string;
  deliveryId: string;
}
