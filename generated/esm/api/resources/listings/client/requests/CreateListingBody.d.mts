import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         aiId: "aiId",
 *         body: {
 *             type: "PRODUCT",
 *             executionDomain: "HUMAN",
 *             title: "title"
 *         }
 *     }
 */
export interface CreateListingBody {
    aiId: string;
    body: Darwin.CreateListingRequest;
}
