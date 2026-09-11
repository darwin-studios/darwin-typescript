/**
 * @example
 *     {}
 */
export interface GetSelectedAiConversationRequest {
  /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
  aiId?: string;
  limit?: number;
  cursor?: string;
}
