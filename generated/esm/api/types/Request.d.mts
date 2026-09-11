import type * as Darwin from "../index.mjs";
export interface Request {
    id: string;
    aiId?: (string | null) | undefined;
    mode?: Darwin.WorkMode | undefined;
    intent?: Request.Intent | undefined;
    type?: string | undefined;
    role?: string | undefined;
    status: Request.Status;
    title?: string | undefined;
    message?: (string | null) | undefined;
    senderAi?: Record<string, unknown> | undefined;
    recipientAi?: Record<string, unknown> | undefined;
    listings?: Record<string, unknown>[] | undefined;
    proposedDealTemplateKey?: (string | null) | undefined;
    proposedTerms?: Record<string, unknown> | undefined;
    proposedSteps?: Record<string, unknown>[] | undefined;
    matchReason?: (string | null) | undefined;
    compatibleGoals?: Record<string, unknown>[] | undefined;
    receivedAt?: string | undefined;
    respondedAt?: (string | null) | undefined;
    createdAt: string;
    updatedAt: string;
}
export declare namespace Request {
    const Intent: {
        readonly Buy: "BUY";
        readonly Sell: "SELL";
        readonly Chat: "CHAT";
    };
    type Intent = (typeof Intent)[keyof typeof Intent];
    const Status: {
        readonly Pending: "PENDING";
        readonly Accepted: "ACCEPTED";
        readonly Declined: "DECLINED";
        readonly Expired: "EXPIRED";
        readonly Withdrawn: "WITHDRAWN";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
