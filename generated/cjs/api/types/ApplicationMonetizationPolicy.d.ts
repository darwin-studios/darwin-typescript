export interface ApplicationMonetizationPolicy {
  applicationId: string;
  mode: ApplicationMonetizationPolicy.Mode;
  currency: string;
  fixedAmountMinor?: (number | null) | undefined;
  percentageBps?: (number | null) | undefined;
  maximumFeeMinor?: (number | null) | undefined;
  /** Stored payout preference. Fee withdrawal and scheduled payout operations remain preview until their public endpoints ship. */
  payoutSchedule: ApplicationMonetizationPolicy.PayoutSchedule;
  status: ApplicationMonetizationPolicy.Status;
  revision: number;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}
export declare namespace ApplicationMonetizationPolicy {
  const Mode: {
    readonly None: 'NONE';
    readonly Fixed: 'FIXED';
    readonly Percentage: 'PERCENTAGE';
  };
  type Mode = (typeof Mode)[keyof typeof Mode];
  /** Stored payout preference. Fee withdrawal and scheduled payout operations remain preview until their public endpoints ship. */
  const PayoutSchedule: {
    readonly Manual: 'MANUAL';
    readonly Weekly: 'WEEKLY';
    readonly Monthly: 'MONTHLY';
  };
  type PayoutSchedule = (typeof PayoutSchedule)[keyof typeof PayoutSchedule];
  const Status: {
    readonly Active: 'ACTIVE';
    readonly Disabled: 'DISABLED';
  };
  type Status = (typeof Status)[keyof typeof Status];
}
