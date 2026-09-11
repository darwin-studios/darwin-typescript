/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         outcomeId: "outcomeId",
 *         evidenceDigest: "evidenceDigest"
 *     }
 */
export interface SubmitOutcomeEvidenceRequest {
    outcomeId: string;
    /** A caller-generated key, unique to this operation and payload. */
    "Idempotency-Key": string;
    evidenceDigest: string;
    signedReference?: string;
    dealId?: string;
}
