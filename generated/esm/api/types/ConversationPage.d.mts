import type * as Darwin from "../index.mjs";
export interface ConversationPage {
    conversation: Darwin.ConversationSummary;
    messages: Darwin.ConversationMessage[];
    nextCursor: string | null;
}
