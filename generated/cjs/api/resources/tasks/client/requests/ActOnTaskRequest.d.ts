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
export interface ActOnTaskRequest {
  id: string;
  body: Darwin.TaskActionRequest;
}
