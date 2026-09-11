import type * as Darwin from "../index.mjs";
export interface Account {
    id: string;
    email: string;
    name?: (string | null) | undefined;
    image?: (string | null) | undefined;
    timeZone?: (string | null) | undefined;
    ais: Darwin.Ai[];
    createdAt: string;
    updatedAt: string;
}
