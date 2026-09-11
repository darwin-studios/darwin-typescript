/**
 * @example
 *     {
 *         transactionId: "transactionId"
 *     }
 */
export interface GetTransactionAccountRequirementRequest {
  transactionId: string;
  /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
  aiId?: string;
}
