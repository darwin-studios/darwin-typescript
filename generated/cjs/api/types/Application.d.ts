import type * as Darwin from '../index.js';

export interface Application {
  id: string;
  name: string;
  slug: string;
  description?: (string | null) | undefined;
  websiteUrl?: (string | null) | undefined;
  mode: Application.Mode;
  status: Application.Status;
  redirectUris: string[];
  defaultAiKind: Application.DefaultAiKind;
  defaultVisibility: Darwin.Visibility;
  oauth?: (Application.Oauth | null) | undefined;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}
export declare namespace Application {
  const Mode: {
    readonly Hosted: 'hosted';
    readonly Embedded: 'embedded';
    readonly Hybrid: 'hybrid';
  };
  type Mode = (typeof Mode)[keyof typeof Mode];
  const Status: {
    readonly Active: 'active';
    readonly Archived: 'archived';
  };
  type Status = (typeof Status)[keyof typeof Status];
  const DefaultAiKind: {
    readonly Personal: 'personal';
    readonly Business: 'business';
  };
  type DefaultAiKind = (typeof DefaultAiKind)[keyof typeof DefaultAiKind];
  interface Oauth {
    clientId: string;
    authorizationUrl: string;
    tokenUrl: string;
    requirePKCE: boolean;
  }
}
