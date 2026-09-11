import type * as Darwin from "../index.mjs";
export interface NetworkAiCard {
    id: string;
    name: string;
    handle: string | null;
    profileHandle: string | null;
    avatarUrl: string | null;
    previewVideoUrl: string | null;
    verified: boolean;
    category: string;
    relevanceReason: string;
    links: NetworkAiCard.Links.Item[];
    directoryKinds: Darwin.NetworkCategory[];
    exampleIntents: Record<string, unknown>;
}
export declare namespace NetworkAiCard {
    type Links = Links.Item[];
    namespace Links {
        interface Item {
            label: string;
            url: string;
        }
    }
}
