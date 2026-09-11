import type * as Darwin from '../../../index.js';

export interface ListListingsResponse {
  listings: Darwin.Listing[];
  nextCursor: string | null;
}
