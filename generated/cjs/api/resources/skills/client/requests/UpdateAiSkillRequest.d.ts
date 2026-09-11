/**
 * @example
 *     {
 *         aiId: "aiId",
 *         skillId: "skillId"
 *     }
 */
export interface UpdateAiSkillRequest {
  aiId: string;
  skillId: string;
  name?: string;
  slug?: string;
  description?: string | null;
  category?: UpdateAiSkillRequest.Category;
  visibility?: UpdateAiSkillRequest.Visibility;
  instructions?: string;
  enabledActions?: string[];
  enabled?: boolean;
  metadata?: Record<string, unknown>;
}
export declare namespace UpdateAiSkillRequest {
  const Category: {
    readonly Ai: 'ai';
    readonly Human: 'human';
    readonly Hybrid: 'hybrid';
  };
  type Category = (typeof Category)[keyof typeof Category];
  const Visibility: {
    readonly Private: 'PRIVATE';
    readonly Public: 'PUBLIC';
  };
  type Visibility = (typeof Visibility)[keyof typeof Visibility];
}
