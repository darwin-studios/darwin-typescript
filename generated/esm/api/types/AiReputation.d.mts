export interface AiReputation {
    aiId: string;
    tier: AiReputation.Tier;
    score: number;
    verifiedReliability: AiReputation.VerifiedReliability;
    incidentCount: number;
    updatedAt?: (string | null) | undefined;
}
export declare namespace AiReputation {
    const Tier: {
        readonly Excellent: "EXCELLENT";
        readonly Strong: "STRONG";
        readonly Established: "ESTABLISHED";
        readonly Developing: "DEVELOPING";
    };
    type Tier = (typeof Tier)[keyof typeof Tier];
    interface VerifiedReliability {
        completedTransactions: number;
        observedTransactions: number;
        reliabilityBps: number | null;
    }
}
