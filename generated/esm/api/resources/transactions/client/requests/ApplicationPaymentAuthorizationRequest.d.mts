/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         transactionId: "transactionId",
 *         type: "STRIPE_SHARED_PAYMENT_TOKEN",
 *         networkProfileId: "networkProfileId",
 *         grantedToken: "grantedToken"
 *     }
 */
export interface ApplicationPaymentAuthorizationRequest {
    transactionId: string;
    /** A caller-generated key, unique to this operation and payload. */
    "Idempotency-Key": string;
    type: ApplicationPaymentAuthorizationRequest.Type;
    /** Darwin seller network identifier used when the application provisions the SPT. */
    networkProfileId: string;
    /** One transaction-scoped, time-limited Stripe Shared Payment Token. */
    grantedToken: string;
}
export declare namespace ApplicationPaymentAuthorizationRequest {
    const Type: {
        readonly StripeSharedPaymentToken: "STRIPE_SHARED_PAYMENT_TOKEN";
    };
    type Type = (typeof Type)[keyof typeof Type];
}
