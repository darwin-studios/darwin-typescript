export interface AiSkill {
    id: string;
    aiId: string | null;
    name: string;
    slug?: (string | null) | undefined;
    description?: (string | null) | undefined;
    category: AiSkill.Category;
    source: string;
    visibility: AiSkill.Visibility;
    status: string;
    enabled: boolean;
    executable: boolean;
    enabledActions?: string[] | undefined;
    instructions?: string | undefined;
    version?: (number | null) | undefined;
    versionId?: (string | null) | undefined;
    metadata?: Record<string, unknown> | undefined;
    createdAt: string;
    updatedAt: string;
}
export declare namespace AiSkill {
    const Category: {
        readonly Ai: "ai";
        readonly Human: "human";
        readonly Hybrid: "hybrid";
    };
    type Category = (typeof Category)[keyof typeof Category];
    const Visibility: {
        readonly Private: "PRIVATE";
        readonly Public: "PUBLIC";
    };
    type Visibility = (typeof Visibility)[keyof typeof Visibility];
}
