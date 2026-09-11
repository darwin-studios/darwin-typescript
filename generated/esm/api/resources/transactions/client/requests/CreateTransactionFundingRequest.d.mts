/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         dealId: "dealId"
 *     }
 */
export interface CreateTransactionFundingRequest {
    dealId: string;
    /** A caller-generated key, unique to this operation and payload. */
    "Idempotency-Key": string;
    paymentMode?: CreateTransactionFundingRequest.PaymentMode;
}
export declare namespace CreateTransactionFundingRequest {
    const PaymentMode: {
        readonly DarwinManaged: "DARWIN_MANAGED";
        readonly ApplicationManaged: "APPLICATION_MANAGED";
    };
    type PaymentMode = (typeof PaymentMode)[keyof typeof PaymentMode];
}
