export interface ApplicationWallet {
    applicationId: string;
    currency: string;
    availableAmountMinor: number;
    reservedAmountMinor: number;
    operationalAvailableAmountMinor: number;
    operationalReservedAmountMinor: number;
    pendingFeeEarningsMinor: number;
    availableFeeEarningsMinor: number;
}
