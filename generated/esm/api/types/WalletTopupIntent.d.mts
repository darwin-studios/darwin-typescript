export interface WalletTopupIntent {
    clientSecret: string | null;
    publishableKey: string;
    amountMinor: number;
    walletCreditAmountMinor: number;
    currency: WalletTopupIntent.Currency;
}
export declare namespace WalletTopupIntent {
    const Currency: {
        readonly Usd: "usd";
    };
    type Currency = (typeof Currency)[keyof typeof Currency];
}
