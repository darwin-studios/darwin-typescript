import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace WebhooksClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Subscribe applications to signed, reviewed Darwin lifecycle events.
 */
export declare class WebhooksClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<WebhooksClient.Options>;
    constructor(options: WebhooksClient.Options);
    /**
     * @param {Darwin.ListWebhooksRequest} request
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.webhooks.listWebhooks({
     *         applicationId: "applicationId"
     *     })
     */
    listWebhooks(request: Darwin.ListWebhooksRequest, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<Darwin.ListWebhooksResponse>;
    private __listWebhooks;
    /**
     * @param {Darwin.CreateWebhookRequest} request
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.webhooks.createWebhook({
     *         applicationId: "applicationId",
     *         url: "url",
     *         events: ["AI.created"]
     *     })
     */
    createWebhook(request: Darwin.CreateWebhookRequest, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<Darwin.CreateWebhookResponse>;
    private __createWebhook;
    /**
     * @param {Darwin.RevokeWebhookRequest} request
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.webhooks.revokeWebhook({
     *         applicationId: "applicationId",
     *         webhookId: "webhookId"
     *     })
     */
    revokeWebhook(request: Darwin.RevokeWebhookRequest, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<Darwin.RevokeWebhookResponse>;
    private __revokeWebhook;
    /**
     * @param {Darwin.ListWebhookDeliveriesRequest} request
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.webhooks.listWebhookDeliveries({
     *         applicationId: "applicationId",
     *         webhookId: "webhookId"
     *     })
     */
    listWebhookDeliveries(request: Darwin.ListWebhookDeliveriesRequest, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<Darwin.ListWebhookDeliveriesResponse>;
    private __listWebhookDeliveries;
    /**
     * @param {Darwin.RetryWebhookDeliveryRequest} request
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.webhooks.retryWebhookDelivery({
     *         applicationId: "applicationId",
     *         webhookId: "webhookId",
     *         deliveryId: "deliveryId"
     *     })
     */
    retryWebhookDelivery(request: Darwin.RetryWebhookDeliveryRequest, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<Darwin.RetryWebhookDeliveryResponse>;
    private __retryWebhookDelivery;
}
