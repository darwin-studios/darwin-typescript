/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         aiId: "aiId",
 *         amountMinor: 1
 *     }
 */
export interface WalletTopupRequest {
  aiId: string;
  /** A caller-generated key, unique to this operation and payload. */
  'Idempotency-Key': string;
  /** Wallet amount to credit, in USD cents. The returned card charge includes processing costs. */
  amountMinor: number;
}
