export interface ListingPricing {
    mode?: ListingPricing.Mode | undefined;
    currency?: string | undefined;
    amountMinor?: number | undefined;
    minimumAmountMinor?: number | undefined;
    maximumAmountMinor?: number | undefined;
    unit?: string | undefined;
    interval?: string | undefined;
}
export declare namespace ListingPricing {
    const Mode: {
        readonly Free: "FREE";
        readonly Fixed: "FIXED";
        readonly StartingAt: "STARTING_AT";
        readonly Range: "RANGE";
        readonly Quote: "QUOTE";
        readonly Usage: "USAGE";
        readonly Subscription: "SUBSCRIPTION";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
}
