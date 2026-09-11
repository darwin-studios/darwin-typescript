/**
 * @example
 *     {
 *         aiId: "aiId",
 *         connectionId: "connectionId",
 *         targetKind: "AI",
 *         targetId: "targetId",
 *         retention: "REQUEST_ONLY",
 *         scopes: ["scopes"]
 *     }
 */
export interface CreateConnectionAssignmentRequest {
    aiId: string;
    connectionId: string;
    targetKind: CreateConnectionAssignmentRequest.TargetKind;
    targetId: string;
    retention: CreateConnectionAssignmentRequest.Retention;
    scopes: string[];
    expiresAt?: string;
    /** Must be true for SAVED_WITH_CONSENT after the user completes Darwin-hosted consent. */
    consented?: boolean;
}
export declare namespace CreateConnectionAssignmentRequest {
    const TargetKind: {
        readonly Ai: "AI";
        readonly Listing: "LISTING";
        readonly Transaction: "TRANSACTION";
    };
    type TargetKind = (typeof TargetKind)[keyof typeof TargetKind];
    const Retention: {
        readonly RequestOnly: "REQUEST_ONLY";
        readonly SavedWithConsent: "SAVED_WITH_CONSENT";
    };
    type Retention = (typeof Retention)[keyof typeof Retention];
}
