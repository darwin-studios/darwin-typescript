import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         aiId: "aiId",
 *         listings: [{
 *                 type: "PRODUCT",
 *                 executionDomain: "HUMAN",
 *                 title: "title"
 *             }]
 *     }
 */
export interface BatchUpsertListingsRequest {
  aiId: string;
  listings: Darwin.CreateListingRequest[];
}
