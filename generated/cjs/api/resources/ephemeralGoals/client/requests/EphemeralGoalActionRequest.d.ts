/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         goalId: "goalId",
 *         action: "CANCEL"
 *     }
 */
export interface EphemeralGoalActionRequest {
  applicationId: string;
  goalId: string;
  action: EphemeralGoalActionRequest.Action;
}
export declare namespace EphemeralGoalActionRequest {
  const Action: {
    readonly Cancel: 'CANCEL';
  };
  type Action = (typeof Action)[keyof typeof Action];
}
