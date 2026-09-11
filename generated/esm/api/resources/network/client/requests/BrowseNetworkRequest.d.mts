import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {}
 */
export interface BrowseNetworkRequest {
    /** Optional category lane for the trending set. */
    category?: Darwin.NetworkCategory;
    /** Number of curated trending AIs to return. */
    limit?: number;
}
