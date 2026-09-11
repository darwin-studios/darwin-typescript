import type * as Darwin from "../index.mjs";
export interface NetworkAiResult {
    ai: Darwin.NetworkAiProfile;
    listings: Darwin.NetworkListing[];
    skills: Record<string, unknown>[];
    truncated: NetworkAiResult.Truncated;
}
export declare namespace NetworkAiResult {
    interface Truncated {
        listings: boolean;
        skills: boolean;
    }
}
