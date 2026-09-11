export interface AiSkillCatalogEntry {
  id: string;
  name: string;
  description: string;
  category: AiSkillCatalogEntry.Category;
  context: AiSkillCatalogEntry.Context;
  recommendedFor: AiSkillCatalogEntry.RecommendedFor.Item[];
}
export declare namespace AiSkillCatalogEntry {
  const Category: {
    readonly Ai: 'ai';
    readonly Human: 'human';
    readonly Hybrid: 'hybrid';
  };
  type Category = (typeof Category)[keyof typeof Category];
  const Context: {
    readonly Demand: 'demand';
    readonly Supply: 'supply';
    readonly Both: 'both';
  };
  type Context = (typeof Context)[keyof typeof Context];
  type RecommendedFor = RecommendedFor.Item[];
  namespace RecommendedFor {
    const Item: {
      readonly Personal: 'personal';
      readonly Business: 'business';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
}
