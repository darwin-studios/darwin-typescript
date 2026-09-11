export interface WalletWithdrawal {
  id: string;
  status: WalletWithdrawal.Status;
  withdrawalAmountMinor?: number | undefined;
  providerFeeMinor?: number | undefined;
  payoutAmountMinor?: number | undefined;
  speed?: WalletWithdrawal.Speed | undefined;
  failureCode?: (string | null) | undefined;
}
export declare namespace WalletWithdrawal {
  const Status: {
    readonly Submitted: 'submitted';
    readonly Completed: 'completed';
    readonly Failed: 'failed';
    readonly Reversed: 'reversed';
  };
  type Status = (typeof Status)[keyof typeof Status];
  const Speed: {
    readonly Standard: 'standard';
    readonly Instant: 'instant';
  };
  type Speed = (typeof Speed)[keyof typeof Speed];
}
