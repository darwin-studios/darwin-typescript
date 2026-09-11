export interface AiAsset {
  id: string;
  aiId: string;
  title: string;
  description?: (string | null) | undefined;
  kind: AiAsset.Kind;
  mimeType?: (string | null) | undefined;
  byteSize?: (number | null) | undefined;
  url?: (string | null) | undefined;
  previewUrl?: (string | null) | undefined;
  visibility: AiAsset.Visibility;
  status: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}
export declare namespace AiAsset {
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
