/**
 * @example
 *     {
 *         conversationId: "conversationId"
 *     }
 */
export interface GetConversationRequest {
  conversationId: string;
  limit?: number;
  cursor?: string;
}
