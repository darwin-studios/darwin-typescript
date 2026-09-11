export interface ConnectionAssignment {
    id: string;
    targetKind: ConnectionAssignment.TargetKind;
    targetId: string;
    retentionMode: ConnectionAssignment.RetentionMode;
    scopes: string[];
    status: ConnectionAssignment.Status;
    consentedAt?: (string | null) | undefined;
    expiresAt?: (string | null) | undefined;
    consumedAt?: (string | null) | undefined;
    revokedAt?: (string | null) | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}
export declare namespace ConnectionAssignment {
    const TargetKind: {
        readonly Ai: "AI";
        readonly Listing: "LISTING";
        readonly Transaction: "TRANSACTION";
    };
    type TargetKind = (typeof TargetKind)[keyof typeof TargetKind];
    const RetentionMode: {
        readonly RequestOnly: "REQUEST_ONLY";
        readonly SavedWithConsent: "SAVED_WITH_CONSENT";
    };
    type RetentionMode = (typeof RetentionMode)[keyof typeof RetentionMode];
    const Status: {
        readonly Active: "ACTIVE";
        readonly Consumed: "CONSUMED";
        readonly Revoked: "REVOKED";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
