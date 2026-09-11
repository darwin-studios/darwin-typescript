import type * as Darwin from "../../../../index.mjs";
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
