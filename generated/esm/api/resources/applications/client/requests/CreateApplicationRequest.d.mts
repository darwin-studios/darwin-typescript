import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface CreateApplicationRequest {
    name: string;
    description?: string;
    websiteUrl?: string;
    mode?: CreateApplicationRequest.Mode;
    redirectUris?: string[];
    defaultAiKind?: CreateApplicationRequest.DefaultAiKind;
    defaultVisibility?: Darwin.Visibility;
    metadata?: Record<string, unknown>;
}
export declare namespace CreateApplicationRequest {
    const Mode: {
        readonly Hosted: "HOSTED";
        readonly Embedded: "EMBEDDED";
        readonly Hybrid: "HYBRID";
    };
    type Mode = (typeof Mode)[keyof typeof Mode];
    const DefaultAiKind: {
        readonly Personal: "PERSONAL";
        readonly Business: "BUSINESS";
    };
    type DefaultAiKind = (typeof DefaultAiKind)[keyof typeof DefaultAiKind];
}
