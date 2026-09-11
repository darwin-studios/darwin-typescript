import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         id: "id",
 *         body: {}
 *     }
 */
export interface UpdateTaskBody {
  id: string;
  body: Darwin.UpdateTaskRequest;
}
