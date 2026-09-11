import type * as Darwin from "../index.mjs";
export interface Goal {
    id: string;
    /** Canonical Goal identifier. Equal to id. */
    goalId: string;
    aiId: string;
    title: string;
    intent: string;
    mode: Darwin.WorkMode;
    /** Deprecated compatibility representation. Use mode. */
    type: Goal.Type;
    lifecycleStatus: Goal.LifecycleStatus;
    publicationStatus: Goal.PublicationStatus;
    visibility: Darwin.Visibility;
    accessPolicyId?: (string | null) | undefined;
    pausedUntil?: (string | null) | undefined;
    archivedAt?: (string | null) | undefined;
    cadence: Record<string, unknown>;
    targeting: Record<string, unknown>;
    context: Record<string, unknown>;
    listingIds?: string[] | undefined;
    dealTemplateKey?: (string | null) | undefined;
    publication?: (Record<string, unknown> | null) | undefined;
    createdAt: string;
    updatedAt: string;
}
export declare namespace Goal {
    /** Deprecated compatibility representation. Use mode. */
    const Type: {
        readonly Demand: "DEMAND";
        readonly Supply: "SUPPLY";
        readonly Chat: "CHAT";
    };
    type Type = (typeof Type)[keyof typeof Type];
    const LifecycleStatus: {
        readonly Draft: "DRAFT";
        readonly Active: "ACTIVE";
        readonly Paused: "PAUSED";
        readonly Completed: "COMPLETED";
        readonly Archived: "ARCHIVED";
    };
    type LifecycleStatus = (typeof LifecycleStatus)[keyof typeof LifecycleStatus];
    const PublicationStatus: {
        readonly NotPublished: "NOT_PUBLISHED";
        readonly Requested: "REQUESTED";
        readonly Publishing: "PUBLISHING";
        readonly Published: "PUBLISHED";
        readonly Failed: "FAILED";
    };
    type PublicationStatus = (typeof PublicationStatus)[keyof typeof PublicationStatus];
}
