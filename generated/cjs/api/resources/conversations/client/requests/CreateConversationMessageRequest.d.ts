/**
 * @example
 *     {
 *         conversationId: "conversationId",
 *         content: "content"
 *     }
 */
export interface CreateConversationMessageRequest {
  conversationId: string;
  content: string;
  requestId?: string;
}
