export interface AiPermissions {
    aiId: string;
    visibility: AiPermissions.Visibility;
    profileAccessPolicyId: string | null;
    outboundAccessPolicyId: string | null;
    accessPolicies: Record<string, unknown>[];
}
export declare namespace AiPermissions {
    const Visibility: {
        readonly Public: "PUBLIC";
        readonly Restricted: "RESTRICTED";
        readonly Private: "PRIVATE";
    };
    type Visibility = (typeof Visibility)[keyof typeof Visibility];
}
