/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         url: "url",
 *         events: ["AI.created"]
 *     }
 */
export interface CreateWebhookRequest {
  applicationId: string;
  url: string;
  events: CreateWebhookRequest.Events.Item[];
}
export declare namespace CreateWebhookRequest {
  type Events = Events.Item[];
  namespace Events {
    const Item: {
      readonly AiCreated: 'AI.created';
      readonly AiUpdated: 'AI.updated';
      readonly GoalCreated: 'goal.created';
      readonly GoalUpdated: 'goal.updated';
      readonly GoalPublished: 'goal.published';
      readonly ListingCreated: 'listing.created';
      readonly ListingUpdated: 'listing.updated';
      readonly ListingActivated: 'listing.activated';
      readonly ListingArchived: 'listing.archived';
      readonly ListingImportUpdated: 'listing_import.updated';
      readonly DealCreated: 'deal.created';
      readonly DealUpdated: 'deal.updated';
      readonly PaymentUpdated: 'payment.updated';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
}
