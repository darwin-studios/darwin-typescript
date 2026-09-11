import type * as Darwin from '../index.js';

export interface TransactionFundingResult {
  state: TransactionFundingResult.State;
  transaction: Darwin.Transaction;
  fundingAmountMinor?: number | undefined;
  fundingRail?: (string | null) | undefined;
  clientSecret?: (string | null) | undefined;
}
export declare namespace TransactionFundingResult {
  const State: {
    readonly Ready: 'ready';
    readonly RequiresFunding: 'requires_funding';
    readonly PaymentAuthorizationRequired: 'payment_authorization_required';
    readonly RecurringApprovalRequired: 'recurring_approval_required';
    readonly RecurringScheduled: 'recurring_scheduled';
  };
  type State = (typeof State)[keyof typeof State];
}
