import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         aiId: "aiId"
 *     }
 */
export interface ListListingsRequest {
    aiId: string;
    limit?: number;
    cursor?: string;
    q?: string;
    type?: Darwin.ListingType;
    executionDomain?: Darwin.ListingExecutionDomain;
    capabilityKind?: Darwin.ListListingsRequestCapabilityKind;
    status?: Darwin.ListingStatus;
    visibility?: Darwin.ListingVisibility;
}
