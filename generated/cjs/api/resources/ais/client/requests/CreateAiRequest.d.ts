import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface CreateAiRequest {
  type?: CreateAiRequest.Type;
  name: string;
  handle?: string;
  avatarUrl?: string;
  description?: string;
  links?: Record<string, unknown>[];
  capabilities?: Record<string, unknown>[];
  location?: Record<string, unknown>;
  organization?: Record<string, unknown>;
  visibility?: Darwin.Visibility;
  profile?: Record<string, unknown>;
}
export declare namespace CreateAiRequest {
  const Type: {
    readonly Business: 'business';
  };
  type Type = (typeof Type)[keyof typeof Type];
}
