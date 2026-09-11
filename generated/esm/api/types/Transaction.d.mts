import type * as Darwin from "../index.mjs";
export interface Transaction {
    id: string;
    transactionId: string;
    goalId: string;
    /** Deprecated compatibility alias for goalId. */
    taskId?: string | undefined;
    dealId: string;
    mode: Darwin.WorkMode;
    /** Deprecated compatibility alias for dealId. */
    offerId?: string | undefined;
    reservedCapMinor: number;
    amountMinor?: number | undefined;
    subtotalMinor: number;
    darwinFeeMinor: number;
    feeBps?: number | undefined;
    feeAttributionReason?: string | undefined;
    feePolicyVersion?: number | undefined;
    taxAmountMinor: number;
    settledAmountMinor: number | null;
    releasedAmountMinor: number;
    refundedAmountMinor?: number | undefined;
    currency: string;
    status: string;
    settlementMode: Transaction.SettlementMode;
    sellerAcceptanceStatus?: string | undefined;
    customerAccountStatus?: string | undefined;
    fulfillmentStatus?: string | undefined;
    fundedAt?: (string | null) | undefined;
    transferredAt?: (string | null) | undefined;
    refundedAt?: (string | null) | undefined;
    disputedAt?: (string | null) | undefined;
    canceledAt?: (string | null) | undefined;
    createdAt: string;
    updatedAt: string;
}
export declare namespace Transaction {
    const SettlementMode: {
        readonly Fixed: "fixed";
        readonly Performance: "performance";
    };
    type SettlementMode = (typeof SettlementMode)[keyof typeof SettlementMode];
}
