export interface ConversationSummary {
    id: string;
    aiId: string | null;
    mode: ConversationSummary.Mode;
    type: ConversationSummary.Type;
    title: string;
    messageCount: number;
    lastMessageAt?: (string | null) | undefined;
    createdAt: string;
    updatedAt: string;
}
export declare namespace ConversationSummary {
    const Mode: {
        readonly Chat: "CHAT";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
    const Type: {
        readonly Chat: "CHAT";
    };
    type Type = (typeof Type)[keyof typeof Type];
}
