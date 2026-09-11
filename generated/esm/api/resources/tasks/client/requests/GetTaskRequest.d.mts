/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface GetTaskRequest {
    id: string;
    /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
    aiId?: string;
}
