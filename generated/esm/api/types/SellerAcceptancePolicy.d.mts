export interface SellerAcceptancePolicy {
    mode: SellerAcceptancePolicy.Mode;
    ruleRevisionId?: string | undefined;
}
export declare namespace SellerAcceptancePolicy {
    const Mode: {
        readonly Instant: "INSTANT";
        readonly Rules: "RULES";
        readonly Manual: "MANUAL";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
}
