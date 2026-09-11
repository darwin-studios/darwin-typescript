import type * as Darwin from '../index.js';

export interface WithdrawalQuote {
  speed: WithdrawalQuote.Speed;
  withdrawalAmountMinor: number;
  providerFeeMinor: number;
  payoutAmountMinor: number;
  rate: Darwin.FeeRate;
  currency: WithdrawalQuote.Currency;
}
export declare namespace WithdrawalQuote {
  const Speed: {
    readonly Standard: 'STANDARD';
    readonly Instant: 'INSTANT';
  };
  type Speed = (typeof Speed)[keyof typeof Speed];
  const Currency: {
    readonly Usd: 'usd';
  };
  type Currency = (typeof Currency)[keyof typeof Currency];
}
