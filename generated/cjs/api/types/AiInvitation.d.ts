export interface AiInvitation {
  id: string;
  email?: string | undefined;
  role?: AiInvitation.Role | undefined;
  status: string;
  expiresAt?: string | undefined;
  createdAt?: string | undefined;
}
export declare namespace AiInvitation {
  const Role: {
    readonly Admin: 'admin';
    readonly Member: 'member';
  };
  type Role = (typeof Role)[keyof typeof Role];
}
