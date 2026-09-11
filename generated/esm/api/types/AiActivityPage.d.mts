import type * as Darwin from "../index.mjs";
export interface AiActivityPage {
    events: Darwin.AiActivity[];
    nextCursor: string | null;
}
