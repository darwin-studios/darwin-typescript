import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         name: "name"
 *     }
 */
export interface CreateEnrollmentLinkRequest {
  applicationId: string;
  name: string;
  mode?: CreateEnrollmentLinkRequest.Mode;
  defaultAiKind?: CreateEnrollmentLinkRequest.DefaultAiKind;
  defaultVisibility?: Darwin.Visibility;
  maxUses?: number;
  expiresAt?: string;
  settings?: Record<string, unknown>;
}
export declare namespace CreateEnrollmentLinkRequest {
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
