import type * as Darwin from '../index.js';

export interface AiAssetUpload {
  asset: Darwin.AiAsset;
  upload: AiAssetUpload.Upload;
}
export declare namespace AiAssetUpload {
  interface Upload {
    url: string;
    method: Upload.Method;
    headers: Record<string, string>;
    expiresInSeconds: number;
  }
  namespace Upload {
    const Method: {
      readonly Put: 'PUT';
    };
    type Method = (typeof Method)[keyof typeof Method];
  }
}
