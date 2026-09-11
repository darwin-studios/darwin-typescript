export interface TransactionAccountRequirement {
    transactionId: string;
    transactionStatus: string;
    requirement: TransactionAccountRequirement.Requirement;
    providerKey: string | null;
    requiredScopes: string[];
    allowedRetention: TransactionAccountRequirement.AllowedRetention.Item[];
    status: TransactionAccountRequirement.Status;
    missingScopes: string[];
}
export declare namespace TransactionAccountRequirement {
    const Requirement: {
        readonly None: "NONE";
        readonly Optional: "OPTIONAL";
        readonly Required: "REQUIRED";
    };
    type Requirement = (typeof Requirement)[keyof typeof Requirement];
    type AllowedRetention = AllowedRetention.Item[];
    namespace AllowedRetention {
        const Item: {
            readonly RequestOnly: "REQUEST_ONLY";
            readonly SavedWithConsent: "SAVED_WITH_CONSENT";
        };
        type Item = (typeof Item)[keyof typeof Item];
    }
    const Status: {
        readonly NotRequired: "NOT_REQUIRED";
        readonly OptionalMissing: "OPTIONAL_MISSING";
        readonly Required: "REQUIRED";
        readonly Authorized: "AUTHORIZED";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
