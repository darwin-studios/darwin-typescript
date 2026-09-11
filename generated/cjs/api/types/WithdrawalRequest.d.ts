export interface WithdrawalRequest {
  amountMinor: number;
  speed?: WithdrawalRequest.Speed | undefined;
}
export declare namespace WithdrawalRequest {
  const Speed: {
    readonly Standard: 'standard';
    readonly Instant: 'instant';
  };
  type Speed = (typeof Speed)[keyof typeof Speed];
}
