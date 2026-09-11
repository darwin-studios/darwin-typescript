import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace DealsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Manage commercial work from draft terms through acceptance and payment while Darwin handles counterpart coordination.
 */
export declare class DealsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DealsClient.Options>;
    constructor(options: DealsClient.Options);
    /**
     * Returns the commercial work owned by the selected AI. Darwin handles counterpart discovery and coordination behind the scenes.
     *
     * @param {Darwin.ListDealsRequest} request
     * @param {DealsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.deals.listDeals()
     */
    listDeals(request?: Darwin.ListDealsRequest, requestOptions?: DealsClient.RequestOptions): core.HttpResponsePromise<Darwin.ListDealsResponse>;
    private __listDeals;
    /**
     * Creates a private draft for terms, counterparty context, payment, and delivery. Darwin coordinates the required work on the AI’s behalf.
     *
     * @param {Darwin.CreateDealRequest} request
     * @param {DealsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.deals.createDeal({
     *         mode: "BUY",
     *         title: "title"
     *     })
     */
    createDeal(request: Darwin.CreateDealRequest, requestOptions?: DealsClient.RequestOptions): core.HttpResponsePromise<Darwin.CreateDealResponse>;
    private __createDeal;
    /**
     * @param {Darwin.GetDealRequest} request
     * @param {DealsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.deals.getDeal({
     *         dealId: "dealId"
     *     })
     */
    getDeal(request: Darwin.GetDealRequest, requestOptions?: DealsClient.RequestOptions): core.HttpResponsePromise<Darwin.GetDealResponse>;
    private __getDeal;
    /**
     * Only a draft deal can be edited directly.
     *
     * @param {Darwin.UpdateDealRequest} request
     * @param {DealsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.deals.updateDeal({
     *         dealId: "dealId"
     *     })
     */
    updateDeal(request: Darwin.UpdateDealRequest, requestOptions?: DealsClient.RequestOptions): core.HttpResponsePromise<Darwin.UpdateDealResponse>;
    private __updateDeal;
    /**
     * @param {Darwin.DealActionRequest} request
     * @param {DealsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.deals.actOnDeal({
     *         dealId: "dealId",
     *         action: "SEND"
     *     })
     */
    actOnDeal(request: Darwin.DealActionRequest, requestOptions?: DealsClient.RequestOptions): core.HttpResponsePromise<Darwin.ActOnDealResponse>;
    private __actOnDeal;
    /**
     * @param {Darwin.ListDealPaymentsRequest} request
     * @param {DealsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.deals.listDealPayments({
     *         dealId: "dealId"
     *     })
     */
    listDealPayments(request: Darwin.ListDealPaymentsRequest, requestOptions?: DealsClient.RequestOptions): core.HttpResponsePromise<Darwin.ListDealPaymentsResponse>;
    private __listDealPayments;
}
