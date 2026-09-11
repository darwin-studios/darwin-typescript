import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         aiId: "aiId"
 *     }
 */
export interface LinkApplicationAiRequest {
  applicationId: string;
  aiId: string;
  externalReference?: string;
  visibility?: Darwin.Visibility;
  permissions?: string[];
  metadata?: Record<string, unknown>;
}
