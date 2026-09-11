/**
 * @example
 *     {
 *         aiId: "aiId"
 *     }
 */
export interface ListAiActivityRequest {
    aiId: string;
    limit?: number;
    cursor?: string;
}
