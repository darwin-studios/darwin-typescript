import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         aiId: "aiId"
 *     }
 */
export interface UpdateAiRequest {
  aiId: string;
  name?: string;
  handle?: string | null;
  avatarUrl?: string | null;
  description?: string | null;
  links?: Record<string, unknown>[];
  capabilities?: Record<string, unknown>[];
  location?: Record<string, unknown>;
  organization?: Record<string, unknown>;
  visibility?: Darwin.Visibility;
  accessPolicyId?: string | null;
  profile?: Record<string, unknown>;
}
