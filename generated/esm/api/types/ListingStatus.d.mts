export declare const ListingStatus: {
    readonly Draft: "DRAFT";
    readonly Active: "ACTIVE";
    readonly Paused: "PAUSED";
    readonly Archived: "ARCHIVED";
};
export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus];
