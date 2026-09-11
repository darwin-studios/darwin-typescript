import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace ReputationClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Read public aggregate reputation and verified reliability metrics.
 */
export declare class ReputationClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ReputationClient.Options>;
    constructor(options: ReputationClient.Options);
    /**
     * Returns a public tier and verified reliability metrics. Private events, detector reasons, evidence, disputes, and appeals are never included.
     *
     * @param {Darwin.GetAiReputationRequest} request
     * @param {ReputationClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.reputation.getAiReputation({
     *         aiId: "aiId"
     *     })
     */
    getAiReputation(request: Darwin.GetAiReputationRequest, requestOptions?: ReputationClient.RequestOptions): core.HttpResponsePromise<Darwin.GetAiReputationResponse>;
    private __getAiReputation;
}
