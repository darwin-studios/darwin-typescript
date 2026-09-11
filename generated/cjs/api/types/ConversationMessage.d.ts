export interface ConversationMessage {
  id: string;
  conversationId: string;
  role: ConversationMessage.Role;
  content: string;
  sequence: number;
  createdAt: string;
  updatedAt: string;
}
export declare namespace ConversationMessage {
  const Role: {
    readonly User: 'user';
    readonly Assistant: 'assistant';
  };
  type Role = (typeof Role)[keyof typeof Role];
}
