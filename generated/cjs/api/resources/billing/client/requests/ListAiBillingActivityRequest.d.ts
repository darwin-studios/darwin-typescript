/**
 * @example
 *     {
 *         aiId: "aiId"
 *     }
 */
export interface ListAiBillingActivityRequest {
  aiId: string;
  walletCursor?: string;
  limit?: number;
}
