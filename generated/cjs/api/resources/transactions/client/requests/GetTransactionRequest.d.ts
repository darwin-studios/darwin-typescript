/**
 * @example
 *     {
 *         transactionId: "transactionId"
 *     }
 */
export interface GetTransactionRequest {
  transactionId: string;
  /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
  aiId?: string;
}
