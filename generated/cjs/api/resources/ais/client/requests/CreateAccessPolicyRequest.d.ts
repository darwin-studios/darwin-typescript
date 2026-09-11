import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         aiId: "aiId",
 *         name: "name",
 *         visibility: "PUBLIC"
 *     }
 */
export interface CreateAccessPolicyRequest {
  aiId: string;
  name: string;
  visibility: Darwin.Visibility;
  naturalLanguage?: string;
  rules?: Darwin.AccessPolicyRule[];
}
