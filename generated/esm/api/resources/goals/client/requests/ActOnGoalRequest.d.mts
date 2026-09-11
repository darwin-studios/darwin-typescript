import type * as Darwin from "../../../../index.mjs";
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
