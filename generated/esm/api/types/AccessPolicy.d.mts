import type * as Darwin from "../index.mjs";
export interface AccessPolicy {
    id: string;
    ownerAiId: string;
    name: string;
    visibility: Darwin.Visibility;
    naturalLanguage?: (string | null) | undefined;
    rules: Darwin.AccessPolicyRule[];
    compiledRules: Record<string, unknown>;
    version: number;
    previousVersionId?: (string | null) | undefined;
    status: AccessPolicy.Status;
    createdAt: string;
    updatedAt: string;
}
export declare namespace AccessPolicy {
    const Status: {
        readonly Active: "ACTIVE";
        readonly Superseded: "SUPERSEDED";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
