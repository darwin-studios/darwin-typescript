import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace UsageClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Read sanitized AI Wallet, dollar-denominated usage, goal, and deal projections.
 */
export declare class UsageClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UsageClient.Options>;
    constructor(options: UsageClient.Options);
    /**
     * Separates available and reserved balances. It does not expose provider billing identifiers.
     *
     * @param {Darwin.GetAiUsageRequest} request
     * @param {UsageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.usage.getAiUsage({
     *         aiId: "aiId"
     *     })
     */
    getAiUsage(request: Darwin.GetAiUsageRequest, requestOptions?: UsageClient.RequestOptions): core.HttpResponsePromise<Darwin.GetAiUsageResponse>;
    private __getAiUsage;
}
