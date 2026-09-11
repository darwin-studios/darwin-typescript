import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {}
 */
export interface ListTasksRequest {
    /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
    aiId?: string;
    /** Filter tasks by the user-facing workflow mode. */
    mode?: Darwin.WorkMode;
}
