export interface AiMember {
  id: string;
  role: AiMember.Role;
  status: string;
  actionGrants?: string[] | undefined;
  user: AiMember.User;
}
export declare namespace AiMember {
  const Role: {
    readonly Owner: 'owner';
    readonly Admin: 'admin';
    readonly Member: 'member';
  };
  type Role = (typeof Role)[keyof typeof Role];
  interface User {
    id: string;
    name?: (string | null) | undefined;
    email: string;
    image?: (string | null) | undefined;
  }
}
