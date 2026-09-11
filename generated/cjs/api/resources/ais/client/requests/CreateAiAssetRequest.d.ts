/**
 * @example
 *     {
 *         aiId: "aiId",
 *         title: "title",
 *         sourceUrl: "sourceUrl"
 *     }
 */
export interface CreateAiAssetRequest {
  aiId: string;
  title: string;
  description?: string | null;
  kind?: CreateAiAssetRequest.Kind;
  sourceUrl: string;
  previewUrl?: string;
  visibility?: CreateAiAssetRequest.Visibility;
  metadata?: Record<string, unknown>;
}
export declare namespace CreateAiAssetRequest {
  const Kind: {
    readonly Image: 'image';
    readonly Video: 'video';
    readonly Audio: 'audio';
    readonly Document: 'document';
    readonly Data: 'data';
    readonly Link: 'link';
    readonly Other: 'other';
  };
  type Kind = (typeof Kind)[keyof typeof Kind];
  const Visibility: {
    readonly Private: 'PRIVATE';
    readonly Public: 'PUBLIC';
  };
  type Visibility = (typeof Visibility)[keyof typeof Visibility];
}
