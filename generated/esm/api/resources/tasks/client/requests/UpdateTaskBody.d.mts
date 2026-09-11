import type * as Darwin from "../../../../index.mjs";
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
