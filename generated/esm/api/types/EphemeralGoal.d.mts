import type * as Darwin from "../index.mjs";
export interface EphemeralGoal {
    id: string;
    goalId: string;
    externalUserReference: string;
    accountablePrincipal: EphemeralGoal.AccountablePrincipal;
    mode: Darwin.WorkMode;
    title?: string | undefined;
    intent: string;
    status: EphemeralGoal.Status;
    castAt?: (string | null) | undefined;
    expiresAt: string;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    /** Accepts any additional properties */
    [key: string]: any;
}
export declare namespace EphemeralGoal {
    interface AccountablePrincipal {
        type: AccountablePrincipal.Type;
        applicationId: string;
    }
    namespace AccountablePrincipal {
        const Type: {
            readonly Application: "application";
        };
        type Type = (typeof Type)[keyof typeof Type];
    }
    const Status: {
        readonly Draft: "draft";
        readonly Cast: "cast";
        readonly Matched: "matched";
        readonly Claimed: "claimed";
        readonly Canceled: "canceled";
        readonly Expired: "expired";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
