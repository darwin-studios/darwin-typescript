import type * as Darwin from "../index.mjs";
/**
 * A customer-safe commercial work record. Darwin keeps matching, routing, and provider identifiers private.
 */
export interface Deal {
    id: string;
    aiId: string;
    /** Deprecated compatibility alias for goalId. */
    taskId?: (string | null) | undefined;
    goalId: string | null;
    mode: Deal.Mode;
    /** Deprecated compatibility field. Use mode. */
    direction: Deal.Direction;
    title: string;
    status: Deal.Status;
    visibility: Darwin.Visibility;
    accessPolicyId?: (string | null) | undefined;
    terms: Record<string, unknown>;
    counterparty: Record<string, unknown>;
    traceId?: (string | null) | undefined;
    sentAt?: (string | null) | undefined;
    respondedAt?: (string | null) | undefined;
    createdAt: string;
    updatedAt: string;
}
export declare namespace Deal {
    const Mode: {
        readonly Buy: "BUY";
        readonly Sell: "SELL";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
    /** Deprecated compatibility field. Use mode. */
    const Direction: {
        readonly Demand: "demand";
        readonly Supply: "supply";
    };
    type Direction = (typeof Direction)[keyof typeof Direction];
    const Status: {
        readonly Draft: "draft";
        readonly Sent: "sent";
        readonly Accepted: "accepted";
        readonly Rejected: "rejected";
        readonly Withdrawn: "withdrawn";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
