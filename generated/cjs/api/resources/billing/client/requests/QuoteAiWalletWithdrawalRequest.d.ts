import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         aiId: "aiId",
 *         body: {
 *             amountMinor: 1
 *         }
 *     }
 */
export interface QuoteAiWalletWithdrawalRequest {
  aiId: string;
  body: Darwin.WithdrawalRequest;
}
