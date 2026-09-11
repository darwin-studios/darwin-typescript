import type * as Darwin from '../index.js';

export interface ApplicationAiLink {
  id: string;
  applicationId?: string | undefined;
  aiId?: string | undefined;
  externalReference?: (string | null) | undefined;
  status: ApplicationAiLink.Status;
  visibility?: Darwin.Visibility | undefined;
  permissions?: string[] | undefined;
  metadata?: Record<string, unknown> | undefined;
  linkedAt?: string | undefined;
  updatedAt?: string | undefined;
  aiIdentity?: ApplicationAiLink.AiIdentity | undefined;
  /** Accepts any additional properties */
  [key: string]: any;
}
export declare namespace ApplicationAiLink {
  const Status: {
    readonly Active: 'ACTIVE';
    readonly Revoked: 'REVOKED';
  };
  type Status = (typeof Status)[keyof typeof Status];
  interface AiIdentity {
    id?: string | undefined;
    kind?: AiIdentity.Kind | undefined;
    name?: string | undefined;
    handle?: (string | null) | undefined;
    avatarUrl?: (string | null) | undefined;
    description?: (string | null) | undefined;
    visibility?: Darwin.Visibility | undefined;
    /** Accepts any additional properties */
    [key: string]: any;
  }
  namespace AiIdentity {
    const Kind: {
      readonly Personal: 'PERSONAL';
      readonly Business: 'BUSINESS';
    };
    type Kind = (typeof Kind)[keyof typeof Kind];
  }
}
