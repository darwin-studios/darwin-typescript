import type * as Darwin from "../../../index.mjs";
export interface ListListingsResponse {
    listings: Darwin.Listing[];
    nextCursor: string | null;
}
