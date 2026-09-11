import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace EnrollmentClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create pseudonymous, user-distributed enrollment links and asynchronous batches.
 */
export declare class EnrollmentClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EnrollmentClient.Options>;
    constructor(options: EnrollmentClient.Options);
    /**
     * Creates one-time, user-distributed enrollment URLs for pseudonymous external references. Darwin does not require or email user PII.
     *
     * @param {Darwin.CreateEnrollmentBatchRequest} request
     * @param {EnrollmentClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.enrollment.createEnrollmentBatch({
     *         applicationId: "applicationId",
     *         externalReferences: ["externalReferences"]
     *     })
     */
    createEnrollmentBatch(request: Darwin.CreateEnrollmentBatchRequest, requestOptions?: EnrollmentClient.RequestOptions): core.HttpResponsePromise<Darwin.EnrollmentBatchResult>;
    private __createEnrollmentBatch;
    /**
     * @param {Darwin.GetEnrollmentBatchRequest} request
     * @param {EnrollmentClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.enrollment.getEnrollmentBatch({
     *         applicationId: "applicationId",
     *         batchId: "batchId"
     *     })
     */
    getEnrollmentBatch(request: Darwin.GetEnrollmentBatchRequest, requestOptions?: EnrollmentClient.RequestOptions): core.HttpResponsePromise<Darwin.EnrollmentBatchResult>;
    private __getEnrollmentBatch;
}
