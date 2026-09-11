/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         aiId: "aiId"
 *     }
 */
export interface CreateAiPaymentMethodSetupRequest {
    aiId: string;
    /** A caller-generated key, unique to this operation and payload. */
    "Idempotency-Key": string;
}
