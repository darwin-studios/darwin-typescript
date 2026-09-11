/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         mode: "NONE"
 *     }
 */
export interface UpdateApplicationMonetizationRequest {
    applicationId: string;
    mode: UpdateApplicationMonetizationRequest.Mode;
    currency?: string;
    fixedAmountMinor?: number;
    percentageBps?: number;
    /** Required for percentage fees. */
    maximumFeeMinor?: number;
    /** Stores the desired payout cadence. Automatic and manual fee-earnings payout operations remain preview until their public endpoints ship. */
    payoutSchedule?: UpdateApplicationMonetizationRequest.PayoutSchedule;
}
export declare namespace UpdateApplicationMonetizationRequest {
    const Mode: {
        readonly None: "NONE";
        readonly Fixed: "FIXED";
        readonly Percentage: "PERCENTAGE";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
    /** Stores the desired payout cadence. Automatic and manual fee-earnings payout operations remain preview until their public endpoints ship. */
    const PayoutSchedule: {
        readonly Manual: "MANUAL";
        readonly Weekly: "WEEKLY";
        readonly Monthly: "MONTHLY";
    };
    type PayoutSchedule = (typeof PayoutSchedule)[keyof typeof PayoutSchedule];
}
