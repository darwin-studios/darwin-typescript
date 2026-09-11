import type * as Darwin from "../index.mjs";
export interface AiBillingAccount {
    autoTopup: Darwin.AutoTopupSettings;
    payoutSchedule: AiBillingAccount.PayoutSchedule;
}
export declare namespace AiBillingAccount {
    const PayoutSchedule: {
        readonly Manual: "manual";
        readonly Weekly: "weekly";
        readonly Monthly: "monthly";
    };
    type PayoutSchedule = (typeof PayoutSchedule)[keyof typeof PayoutSchedule];
}
