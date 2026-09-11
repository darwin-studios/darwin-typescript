import type * as Darwin from '../index.js';

export interface EnrollmentLink {
  id: string;
  applicationId: string;
  name?: string | undefined;
  codePrefix?: string | undefined;
  mode?: EnrollmentLink.Mode | undefined;
  defaultAiKind?: EnrollmentLink.DefaultAiKind | undefined;
  defaultVisibility?: Darwin.Visibility | undefined;
  maxUses?: (number | null) | undefined;
  useCount?: number | undefined;
  expiresAt?: (string | null) | undefined;
  revokedAt?: (string | null) | undefined;
  settings?: Record<string, unknown> | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}
export declare namespace EnrollmentLink {
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
