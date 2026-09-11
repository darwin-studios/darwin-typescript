/**
 * @example
 *     {
 *         aiId: "aiId",
 *         assetId: "assetId"
 *     }
 */
export interface UpdateAiAssetRequest {
    aiId: string;
    assetId: string;
    title?: string;
    description?: string | null;
    visibility?: UpdateAiAssetRequest.Visibility;
    metadata?: Record<string, unknown>;
}
export declare namespace UpdateAiAssetRequest {
    const Visibility: {
        readonly Private: "PRIVATE";
        readonly Public: "PUBLIC";
    };
    type Visibility = (typeof Visibility)[keyof typeof Visibility];
}
