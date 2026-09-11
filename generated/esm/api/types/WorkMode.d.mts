/** The workflow view for shared Darwin work resources. */
export declare const WorkMode: {
    readonly Buy: "BUY";
    readonly Sell: "SELL";
    readonly Chat: "CHAT";
};
export type WorkMode = (typeof WorkMode)[keyof typeof WorkMode];
