import type * as Darwin from '../index.js';

export interface ConversationPage {
  conversation: Darwin.ConversationSummary;
  messages: Darwin.ConversationMessage[];
  nextCursor: string | null;
}
