import type * as Darwin from '../index.js';

export interface AiBillingSummary {
  currency: AiBillingSummary.Currency;
  account: Darwin.AiBillingAccount;
  wallet: Darwin.AiWalletBalance;
  actions: AiBillingSummary.Actions;
  feePolicy: AiBillingSummary.FeePolicy;
}
export declare namespace AiBillingSummary {
  const Currency: {
    readonly Usd: 'usd';
  };
  type Currency = (typeof Currency)[keyof typeof Currency];
  interface Actions {
    canWithdraw: boolean;
    hasPaymentMethod: boolean;
    payoutReady: boolean;
  }
  interface FeePolicy {
    standardPayout: Darwin.FeeRate;
    instantPayout: Darwin.FeeRate;
    instantPayoutIncludesStandardConnectCost: boolean;
  }
}
