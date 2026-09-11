/**
 * @example
 *     {
 *         aiId: "aiId"
 *     }
 */
export interface UpdateMoneySettingsRequest {
  aiId: string;
  autoTopupEnabled?: boolean;
  autoTopupThresholdMinor?: number | null;
  autoTopupAmountMinor?: number | null;
  payoutSchedule?: UpdateMoneySettingsRequest.PayoutSchedule;
}
export declare namespace UpdateMoneySettingsRequest {
  const PayoutSchedule: {
    readonly Manual: 'manual';
    readonly Monthly: 'monthly';
  };
  type PayoutSchedule = (typeof PayoutSchedule)[keyof typeof PayoutSchedule];
}
