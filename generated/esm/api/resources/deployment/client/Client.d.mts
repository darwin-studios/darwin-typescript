import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace DeploymentClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Inspect deployment state and submit reviewable deployment requests.
 */
export declare class DeploymentClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DeploymentClient.Options>;
    constructor(options: DeploymentClient.Options);
    /**
     * @param {Darwin.GetAiDeploymentRequest} request
     * @param {DeploymentClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.deployment.getAiDeployment({
     *         aiId: "aiId"
     *     })
     */
    getAiDeployment(request: Darwin.GetAiDeploymentRequest, requestOptions?: DeploymentClient.RequestOptions): core.HttpResponsePromise<Darwin.GetAiDeploymentResponse>;
    private __getAiDeployment;
    /**
     * Owner credentials only. This creates a reviewable request and never mutates infrastructure directly.
     *
     * @param {Darwin.CreateAiDeploymentRequest} request
     * @param {DeploymentClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.deployment.createAiDeploymentRequest({
     *         "Idempotency-Key": "Idempotency-Key",
     *         aiId: "aiId",
     *         target: "DARWIN_CLOUD"
     *     })
     */
    createAiDeploymentRequest(request: Darwin.CreateAiDeploymentRequest, requestOptions?: DeploymentClient.RequestOptions): core.HttpResponsePromise<Darwin.CreateAiDeploymentRequestResponse>;
    private __createAiDeploymentRequest;
}
