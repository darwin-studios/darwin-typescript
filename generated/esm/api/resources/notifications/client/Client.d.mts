import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace NotificationsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Read the notification policy effective for an AI.
 */
export declare class NotificationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<NotificationsClient.Options>;
    constructor(options: NotificationsClient.Options);
    /**
     * @param {Darwin.GetAiNotificationsRequest} request
     * @param {NotificationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.notifications.getAiNotifications({
     *         aiId: "aiId"
     *     })
     */
    getAiNotifications(request: Darwin.GetAiNotificationsRequest, requestOptions?: NotificationsClient.RequestOptions): core.HttpResponsePromise<Darwin.AiNotifications>;
    private __getAiNotifications;
}
