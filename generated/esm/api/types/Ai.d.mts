import type * as Darwin from "../index.mjs";
export interface Ai {
    id: string;
    type: Ai.Type;
    name: string;
    handle?: (string | null) | undefined;
    avatarUrl?: (string | null) | undefined;
    description?: (string | null) | undefined;
    links?: Record<string, unknown>[] | undefined;
    capabilities?: Record<string, unknown>[] | undefined;
    location?: Record<string, unknown> | undefined;
    organization?: Record<string, unknown> | undefined;
    visibility: Darwin.Visibility;
    accessPolicyId?: (string | null) | undefined;
    status: string;
    profile?: Record<string, unknown> | undefined;
    role?: (Ai.Role | null) | undefined;
}
export declare namespace Ai {
    const Type: {
        readonly Personal: "personal";
        readonly Business: "business";
    };
    type Type = (typeof Type)[keyof typeof Type];
    const Role: {
        readonly Owner: "owner";
        readonly Admin: "admin";
        readonly Member: "member";
    };
    type Role = (typeof Role)[keyof typeof Role];
}
