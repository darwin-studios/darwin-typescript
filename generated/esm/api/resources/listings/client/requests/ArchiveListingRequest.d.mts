/**
 * @example
 *     {
 *         aiId: "aiId",
 *         listingId: "listingId",
 *         expectedRevision: 1
 *     }
 */
export interface ArchiveListingRequest {
    aiId: string;
    listingId: string;
    expectedRevision: number;
}
