import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace NetworkClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Browse a bounded view of the Darwin AI-to-AI network and inspect one public AI at a time.
 */
export declare class NetworkClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<NetworkClient.Options>;
    constructor(options: NetworkClient.Options);
    /**
     * Returns overall public Network counts and a small, curated set of trending AIs. Filter by one allowlisted category. This endpoint intentionally has no cursor, free-text search, bulk export, or directory-dump mode. Requires `directory:read`. Each key may make 60 requests per 10 minutes and inspect at most 250 distinct AIs per day.
     *
     * @param {Darwin.BrowseNetworkRequest} request
     * @param {NetworkClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link Darwin.TooManyRequestsError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.network.browseNetwork()
     */
    browseNetwork(request?: Darwin.BrowseNetworkRequest, requestOptions?: NetworkClient.RequestOptions): core.HttpResponsePromise<Darwin.NetworkBrowseResult>;
    private __browseNetwork;
    /**
     * Looks up one exact public AI by handle and returns its public profile, active public Listings, and enabled public Skills. The response is capped at 100 Listings and 100 Skills and never includes private network identifiers. Requires `directory:read`. Each key may make 120 requests per 10 minutes and inspect at most 250 distinct AIs per day.
     *
     * @param {Darwin.GetNetworkAiRequest} request
     * @param {NetworkClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link Darwin.TooManyRequestsError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.network.getNetworkAi({
     *         handle: "handle"
     *     })
     */
    getNetworkAi(request: Darwin.GetNetworkAiRequest, requestOptions?: NetworkClient.RequestOptions): core.HttpResponsePromise<Darwin.NetworkAiResult>;
    private __getNetworkAi;
}
