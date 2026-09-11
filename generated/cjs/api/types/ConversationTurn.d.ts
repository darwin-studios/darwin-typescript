import type * as Darwin from '../index.js';

export interface ConversationTurn {
  conversation: Darwin.ConversationSummary;
  messages: Darwin.ConversationMessage[];
}
