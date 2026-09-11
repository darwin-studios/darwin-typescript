export interface ServiceAccount {
    id: string;
    applicationId?: string | undefined;
    name?: string | undefined;
    keyPrefix?: string | undefined;
    prefix?: string | undefined;
    scopes?: ServiceAccount.Scopes.Item[] | undefined;
    status: ServiceAccount.Status;
    requestCount?: number | undefined;
    lastUsedAt?: (string | null) | undefined;
    expiresAt?: (string | null) | undefined;
    revokedAt?: (string | null) | undefined;
    createdAt?: string | undefined;
}
export declare namespace ServiceAccount {
    type Scopes = Scopes.Item[];
    namespace Scopes {
        const Item: {
            readonly AisRead: "ais:read";
            readonly AisWrite: "ais:write";
            readonly MembersRead: "members:read";
            readonly ConversationsRead: "conversations:read";
            readonly ConversationsWrite: "conversations:write";
            readonly RequestsRead: "requests:read";
            readonly RequestsWrite: "requests:write";
            readonly AiRead: "ai:read";
            readonly AiWrite: "ai:write";
            readonly TasksRead: "tasks:read";
            readonly TasksWrite: "tasks:write";
            readonly GoalsRead: "goals:read";
            readonly GoalsWrite: "goals:write";
            readonly DealsRead: "deals:read";
            readonly DealsWrite: "deals:write";
            readonly TransactionsRead: "transactions:read";
            readonly OutcomesRead: "outcomes:read";
            readonly OutcomesWrite: "outcomes:write";
            readonly IntegrationsRead: "integrations:read";
            readonly ConnectionsRead: "connections:read";
            readonly PermissionsRead: "permissions:read";
            readonly ReputationRead: "reputation:read";
            readonly SkillsRead: "skills:read";
            readonly ListingsRead: "listings:read";
            readonly ListingsWrite: "listings:write";
            readonly NotificationsRead: "notifications:read";
            readonly UsageRead: "usage:read";
            readonly VerificationRead: "verification:read";
            readonly DeploymentRead: "deployment:read";
            readonly EphemeralGoalsRead: "ephemeral-goals:read";
            readonly EphemeralGoalsWrite: "ephemeral-goals:write";
            readonly EphemeralTasksRead: "ephemeral-tasks:read";
            readonly EphemeralTasksWrite: "ephemeral-tasks:write";
        };
        type Item = (typeof Item)[keyof typeof Item];
    }
    const Status: {
        readonly Active: "ACTIVE";
        readonly Revoked: "REVOKED";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
