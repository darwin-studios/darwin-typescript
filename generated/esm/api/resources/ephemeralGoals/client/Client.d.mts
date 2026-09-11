import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace EphemeralGoalsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create application-funded goals without provisioning an end-user AI.
 */
export declare class EphemeralGoalsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EphemeralGoalsClient.Options>;
    constructor(options: EphemeralGoalsClient.Options);
    /**
     * Creates a pseudonymous goal without first creating a Darwin AI for the external user. The application remains the accountable principal.
     *
     * @param {Darwin.CreateEphemeralGoalRequest} request
     * @param {EphemeralGoalsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.ephemeralGoals.createEphemeralGoal({
     *         "Idempotency-Key": "Idempotency-Key",
     *         applicationId: "applicationId",
     *         externalUserReference: "externalUserReference",
     *         mode: "BUY",
     *         intent: "intent",
     *         targeting: {
     *             "key": "value"
     *         },
     *         budget: {
     *             "key": "value"
     *         }
     *     })
     */
    createEphemeralGoal(request: Darwin.CreateEphemeralGoalRequest, requestOptions?: EphemeralGoalsClient.RequestOptions): core.HttpResponsePromise<Darwin.CreateEphemeralGoalResponse>;
    private __createEphemeralGoal;
    /**
     * @param {Darwin.GetEphemeralGoalRequest} request
     * @param {EphemeralGoalsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.ephemeralGoals.getEphemeralGoal({
     *         applicationId: "applicationId",
     *         goalId: "goalId"
     *     })
     */
    getEphemeralGoal(request: Darwin.GetEphemeralGoalRequest, requestOptions?: EphemeralGoalsClient.RequestOptions): core.HttpResponsePromise<Darwin.GetEphemeralGoalResponse>;
    private __getEphemeralGoal;
    /**
     * @param {Darwin.CastEphemeralGoalRequest} request
     * @param {EphemeralGoalsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.ephemeralGoals.castEphemeralGoal({
     *         applicationId: "applicationId",
     *         goalId: "goalId"
     *     })
     */
    castEphemeralGoal(request: Darwin.CastEphemeralGoalRequest, requestOptions?: EphemeralGoalsClient.RequestOptions): core.HttpResponsePromise<Darwin.CastEphemeralGoalResponse>;
    private __castEphemeralGoal;
    /**
     * @param {Darwin.EphemeralGoalActionRequest} request
     * @param {EphemeralGoalsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.ephemeralGoals.actOnEphemeralGoal({
     *         applicationId: "applicationId",
     *         goalId: "goalId",
     *         action: "CANCEL"
     *     })
     */
    actOnEphemeralGoal(request: Darwin.EphemeralGoalActionRequest, requestOptions?: EphemeralGoalsClient.RequestOptions): core.HttpResponsePromise<Darwin.ActOnEphemeralGoalResponse>;
    private __actOnEphemeralGoal;
}
