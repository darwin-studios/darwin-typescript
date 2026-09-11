export interface OutcomeEvidence {
    id: string;
    outcomeId: string;
    sourcePrincipalType: OutcomeEvidence.SourcePrincipalType;
    goalId: string | null;
    /** Deprecated compatibility alias for goalId. */
    taskId?: (string | null) | undefined;
    dealId?: (string | null) | undefined;
    digest: OutcomeEvidence.Digest;
    signedReference?: (string | null) | undefined;
    verificationStatus: OutcomeEvidence.VerificationStatus;
    disputeState: OutcomeEvidence.DisputeState;
    submittedAt: string;
    createdAt: string;
    updatedAt: string;
}
export declare namespace OutcomeEvidence {
    const SourcePrincipalType: {
        readonly Customer: "customer";
        readonly Application: "application";
        readonly Provider: "provider";
        readonly Counterparty: "counterparty";
    };
    type SourcePrincipalType = (typeof SourcePrincipalType)[keyof typeof SourcePrincipalType];
    interface Digest {
        algorithm: Digest.Algorithm;
        value: string;
    }
    namespace Digest {
        const Algorithm: {
            readonly Sha256: "sha-256";
        };
        type Algorithm = (typeof Algorithm)[keyof typeof Algorithm];
    }
    const VerificationStatus: {
        readonly Pending: "pending";
        readonly Verified: "verified";
        readonly Rejected: "rejected";
    };
    type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];
    const DisputeState: {
        readonly None: "none";
        readonly Open: "open";
        readonly Resolved: "resolved";
    };
    type DisputeState = (typeof DisputeState)[keyof typeof DisputeState];
}
