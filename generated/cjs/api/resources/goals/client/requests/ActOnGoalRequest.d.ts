import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         id: "id",
 *         body: {
 *             action: "PAUSE"
 *         }
 *     }
 */
export interface ActOnGoalRequest {
  id: string;
  body: Darwin.GoalActionRequest;
}
