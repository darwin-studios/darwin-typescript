/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         transactionId: "transactionId",
 *         action: "CANCEL"
 *     }
 */
export interface TransactionActionRequest {
    transactionId: string;
    /** A caller-generated key, unique to this operation and payload. */
    "Idempotency-Key": string;
    action: TransactionActionRequest.Action;
    /** Optional partial refund amount. Omit to request the remaining refundable amount. */
    amountMinor?: number;
}
export declare namespace TransactionActionRequest {
    const Action: {
        readonly Cancel: "CANCEL";
        readonly RequestRefund: "REQUEST_REFUND";
    };
    type Action = (typeof Action)[keyof typeof Action];
}
