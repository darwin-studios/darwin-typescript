export interface AiUsage {
    aiId: string;
    aiUsage: AiUsage.AiUsage;
    wallet: Record<string, unknown>;
    activeGoals: number;
    /** Deprecated compatibility alias for activeGoals. */
    activeTasks?: number | undefined;
    activeDeals: number;
}
export declare namespace AiUsage {
    interface AiUsage {
        currency: AiUsage.Currency;
        capturedMinor: number;
        reservedMinor: number;
    }
    namespace AiUsage {
        const Currency: {
            readonly Usd: "usd";
        };
        type Currency = (typeof Currency)[keyof typeof Currency];
    }
}
