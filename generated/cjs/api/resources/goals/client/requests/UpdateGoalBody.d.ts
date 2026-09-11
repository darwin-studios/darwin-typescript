import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         id: "id",
 *         body: {}
 *     }
 */
export interface UpdateGoalBody {
  id: string;
  body: Darwin.UpdateGoalRequest;
}
