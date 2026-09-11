import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         aiId: "aiId",
 *         body: {
 *             amountMinor: 1
 *         }
 *     }
 */
export interface CreateAiWalletWithdrawalRequest {
  aiId: string;
  /** A caller-generated key, unique to this operation and payload. */
  'Idempotency-Key': string;
  body: Darwin.WithdrawalRequest;
}
