import type * as Darwin from "../index.mjs";
export interface NetworkBrowseResult {
    network: NetworkBrowseResult.Network;
    category: Darwin.NetworkCategory | null;
    trending: Darwin.NetworkAiCard[];
    generatedAt: string;
}
export declare namespace NetworkBrowseResult {
    interface Network {
        aiCount: number;
        activePublicListingCount: number;
        activePublicSkillCount: number;
        categories: Darwin.NetworkCategory[];
        updatedAt: string;
    }
}
