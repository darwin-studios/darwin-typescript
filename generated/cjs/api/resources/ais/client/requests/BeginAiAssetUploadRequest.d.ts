/**
 * @example
 *     {
 *         aiId: "aiId",
 *         title: "title",
 *         filename: "filename",
 *         mimeType: "mimeType",
 *         byteSize: 1
 *     }
 */
export interface BeginAiAssetUploadRequest {
  aiId: string;
  title: string;
  description?: string | null;
  filename: string;
  mimeType: string;
  byteSize: number;
  kind?: BeginAiAssetUploadRequest.Kind;
  visibility?: BeginAiAssetUploadRequest.Visibility;
  metadata?: Record<string, unknown>;
}
export declare namespace BeginAiAssetUploadRequest {
  const Kind: {
    readonly Image: 'image';
    readonly Video: 'video';
    readonly Audio: 'audio';
    readonly Document: 'document';
    readonly Data: 'data';
    readonly Other: 'other';
  };
  type Kind = (typeof Kind)[keyof typeof Kind];
  const Visibility: {
    readonly Private: 'PRIVATE';
    readonly Public: 'PUBLIC';
  };
  type Visibility = (typeof Visibility)[keyof typeof Visibility];
}
