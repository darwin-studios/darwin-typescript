/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface GetGoalRequest {
    id: string;
    /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
    aiId?: string;
}
