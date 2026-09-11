import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         applicationId: "applicationId"
 *     }
 */
export interface UpdateApplicationRequest {
  applicationId: string;
  name?: string;
  description?: string | null;
  websiteUrl?: string | null;
  mode?: UpdateApplicationRequest.Mode;
  redirectUris?: string[];
  defaultAiKind?: UpdateApplicationRequest.DefaultAiKind;
  defaultVisibility?: Darwin.Visibility;
  metadata?: Record<string, unknown>;
}
export declare namespace UpdateApplicationRequest {
  const Mode: {
    readonly Hosted: 'HOSTED';
    readonly Embedded: 'EMBEDDED';
    readonly Hybrid: 'HYBRID';
  };
  type Mode = (typeof Mode)[keyof typeof Mode];
  const DefaultAiKind: {
    readonly Personal: 'PERSONAL';
    readonly Business: 'BUSINESS';
  };
  type DefaultAiKind = (typeof DefaultAiKind)[keyof typeof DefaultAiKind];
}
