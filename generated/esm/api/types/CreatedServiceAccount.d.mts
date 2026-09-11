import type * as Darwin from "../index.mjs";
export interface CreatedServiceAccount extends Darwin.ServiceAccount {
    /** Returned only once. */
    apiKey: string;
}
