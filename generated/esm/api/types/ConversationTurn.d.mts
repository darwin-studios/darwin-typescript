import type * as Darwin from "../index.mjs";
export interface ConversationTurn {
    conversation: Darwin.ConversationSummary;
    messages: Darwin.ConversationMessage[];
}
