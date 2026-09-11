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
export interface ActOnTaskRequest {
    id: string;
    body: Darwin.TaskActionRequest;
}
