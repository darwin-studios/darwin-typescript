import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         mode: "BUY",
 *         title: "title"
 *     }
 */
export interface CreateDealRequest {
    /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
    aiId?: string;
    goalId?: string;
    /** Deprecated compatibility alias for goalId. */
    taskId?: string;
    mode: CreateDealRequest.Mode;
    /** Deprecated compatibility field. Use mode. */
    direction?: CreateDealRequest.Direction;
    title: string;
    visibility?: Darwin.Visibility;
    accessPolicyId?: string;
    terms?: Record<string, unknown>;
    counterparty?: Record<string, unknown>;
    listingSelections?: Darwin.ListingSelection[];
}
export declare namespace CreateDealRequest {
    const Mode: {
        readonly Buy: "BUY";
        readonly Sell: "SELL";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
    /** Deprecated compatibility field. Use mode. */
    const Direction: {
        readonly Demand: "DEMAND";
        readonly Supply: "SUPPLY";
    };
    type Direction = (typeof Direction)[keyof typeof Direction];
}
