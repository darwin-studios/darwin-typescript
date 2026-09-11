/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         requestId: "requestId",
 *         action: "ACCEPT"
 *     }
 */
export interface RequestActionRequest {
  requestId: string;
  /** A caller-generated key, unique to this operation and payload. */
  'Idempotency-Key': string;
  /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
  aiId?: string;
  action: RequestActionRequest.Action;
  existingGoalId?: string;
  createGoal?: boolean;
}
export declare namespace RequestActionRequest {
  const Action: {
    readonly Accept: 'ACCEPT';
    readonly Decline: 'DECLINE';
  };
  type Action = (typeof Action)[keyof typeof Action];
}
