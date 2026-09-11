/**
 * @example
 *     {
 *         aiId: "aiId",
 *         name: "name"
 *     }
 */
export interface CreateAiSkillRequest {
    aiId: string;
    name: string;
    slug?: string;
    description?: string | null;
    category?: CreateAiSkillRequest.Category;
    visibility?: CreateAiSkillRequest.Visibility;
    instructions?: string;
    enabledActions?: string[];
    enabled?: boolean;
    metadata?: Record<string, unknown>;
}
export declare namespace CreateAiSkillRequest {
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
