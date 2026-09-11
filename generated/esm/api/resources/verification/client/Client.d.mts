import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace VerificationClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Read verification readiness without provider identifiers or evidence.
 */
export declare class VerificationClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VerificationClient.Options>;
    constructor(options: VerificationClient.Options);
    /**
     * @param {Darwin.GetAiVerificationRequest} request
     * @param {VerificationClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.verification.getAiVerification({
     *         aiId: "aiId"
     *     })
     */
    getAiVerification(request: Darwin.GetAiVerificationRequest, requestOptions?: VerificationClient.RequestOptions): core.HttpResponsePromise<Darwin.GetAiVerificationResponse>;
    private __getAiVerification;
}
