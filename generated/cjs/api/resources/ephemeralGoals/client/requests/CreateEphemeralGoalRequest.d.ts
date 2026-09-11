import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         applicationId: "applicationId",
 *         externalUserReference: "externalUserReference",
 *         mode: "BUY",
 *         intent: "intent",
 *         targeting: {
 *             "key": "value"
 *         },
 *         budget: {
 *             "key": "value"
 *         }
 *     }
 */
export interface CreateEphemeralGoalRequest {
  applicationId: string;
  /** A caller-generated key, unique to this operation and payload. */
  'Idempotency-Key': string;
  externalUserReference: string;
  mode: Darwin.WorkMode;
  title?: string;
  intent: string;
  targeting: Record<string, unknown>;
  budget: Record<string, unknown>;
  reviewedFields?: Record<string, unknown>;
}
