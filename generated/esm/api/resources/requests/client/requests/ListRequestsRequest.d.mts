/**
 * @example
 *     {}
 */
export interface ListRequestsRequest {
    /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
    aiId?: string;
    limit?: number;
}
