import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace ApplicationsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Manage external applications, linked AIs, service accounts, and wallets.
 */
export declare class ApplicationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ApplicationsClient.Options>;
    constructor(options: ApplicationsClient.Options);
    /**
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.listApplications()
     */
    listApplications(requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ListApplicationsResponse>;
    private __listApplications;
    /**
     * @param {Darwin.CreateApplicationRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.createApplication({
     *         name: "name"
     *     })
     */
    createApplication(request: Darwin.CreateApplicationRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.CreateApplicationResponse>;
    private __createApplication;
    /**
     * @param {Darwin.GetApplicationRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.getApplication({
     *         applicationId: "applicationId"
     *     })
     */
    getApplication(request: Darwin.GetApplicationRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.GetApplicationResponse>;
    private __getApplication;
    /**
     * Disables OAuth and revokes active enrollment links, service accounts, webhooks, and AI links.
     *
     * @param {Darwin.ArchiveApplicationRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.archiveApplication({
     *         applicationId: "applicationId"
     *     })
     */
    archiveApplication(request: Darwin.ArchiveApplicationRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ArchiveApplicationResponse>;
    private __archiveApplication;
    /**
     * @param {Darwin.UpdateApplicationRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.updateApplication({
     *         applicationId: "applicationId"
     *     })
     */
    updateApplication(request: Darwin.UpdateApplicationRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.UpdateApplicationResponse>;
    private __updateApplication;
    /**
     * Returns the buyer-paid application fee policy. The configured fee is snapshotted into each immutable fee quote before buyer confirmation.
     *
     * @param {Darwin.GetApplicationMonetizationRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.getApplicationMonetization({
     *         applicationId: "applicationId"
     *     })
     */
    getApplicationMonetization(request: Darwin.GetApplicationMonetizationRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.GetApplicationMonetizationResponse>;
    private __getApplicationMonetization;
    /**
     * Owner credentials only. Configures no fee, a fixed buyer-paid fee, or a percentage of seller subtotal with a mandatory maximum cap.
     *
     * @param {Darwin.UpdateApplicationMonetizationRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.updateApplicationMonetization({
     *         applicationId: "applicationId",
     *         mode: "NONE"
     *     })
     */
    updateApplicationMonetization(request: Darwin.UpdateApplicationMonetizationRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.UpdateApplicationMonetizationResponse>;
    private __updateApplicationMonetization;
    /**
     * Service-account or authorized application credentials only. Reuses a durable app-scoped user mapping when one exists; otherwise returns a short-lived Darwin-hosted onboarding or reauthentication URL. OIDC and trusted-application proof exchange remain fail-closed preview capabilities.
     *
     * @param {Darwin.ResolveApplicationUserRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.resolveApplicationUser({
     *         applicationId: "applicationId",
     *         externalUserReference: "externalUserReference"
     *     })
     */
    resolveApplicationUser(request: Darwin.ResolveApplicationUserRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ApplicationUserResolutionResult>;
    private __resolveApplicationUser;
    /**
     * @param {Darwin.ListApplicationAIsRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.listApplicationAIs({
     *         applicationId: "applicationId"
     *     })
     */
    listApplicationAIs(request: Darwin.ListApplicationAIsRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ListApplicationAIsResponse>;
    private __listApplicationAIs;
    /**
     * @param {Darwin.LinkApplicationAiRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.linkApplicationAi({
     *         applicationId: "applicationId",
     *         aiId: "aiId"
     *     })
     */
    linkApplicationAi(request: Darwin.LinkApplicationAiRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.LinkApplicationAiResponse>;
    private __linkApplicationAi;
    /**
     * @param {Darwin.UnlinkApplicationAiRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.unlinkApplicationAi({
     *         applicationId: "applicationId",
     *         aiId: "aiId"
     *     })
     */
    unlinkApplicationAi(request: Darwin.UnlinkApplicationAiRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.UnlinkApplicationAiResponse>;
    private __unlinkApplicationAi;
    /**
     * @param {Darwin.ListEnrollmentLinksRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.listEnrollmentLinks({
     *         applicationId: "applicationId"
     *     })
     */
    listEnrollmentLinks(request: Darwin.ListEnrollmentLinksRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ListEnrollmentLinksResponse>;
    private __listEnrollmentLinks;
    /**
     * @param {Darwin.CreateEnrollmentLinkRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.createEnrollmentLink({
     *         applicationId: "applicationId",
     *         name: "name"
     *     })
     */
    createEnrollmentLink(request: Darwin.CreateEnrollmentLinkRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.CreateEnrollmentLinkResponse>;
    private __createEnrollmentLink;
    /**
     * @param {Darwin.RevokeEnrollmentLinkRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.revokeEnrollmentLink({
     *         applicationId: "applicationId",
     *         enrollmentLinkId: "enrollmentLinkId"
     *     })
     */
    revokeEnrollmentLink(request: Darwin.RevokeEnrollmentLinkRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.RevokeEnrollmentLinkResponse>;
    private __revokeEnrollmentLink;
    /**
     * Application owners can inspect available and reserved funds. Service accounts cannot fund or withdraw.
     *
     * @param {Darwin.GetApplicationWalletRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.getApplicationWallet({
     *         applicationId: "applicationId"
     *     })
     */
    getApplicationWallet(request: Darwin.GetApplicationWalletRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.GetApplicationWalletResponse>;
    private __getApplicationWallet;
    /**
     * Owner credentials only. Transfers funds from an explicitly selected Darwin AI wallet.
     *
     * @param {Darwin.FundApplicationWalletRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.fundApplicationWallet({
     *         "Idempotency-Key": "Idempotency-Key",
     *         applicationId: "applicationId",
     *         aiId: "aiId",
     *         amountMinor: 1,
     *         currency: "currency"
     *     })
     */
    fundApplicationWallet(request: Darwin.FundApplicationWalletRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.FundApplicationWalletResponse>;
    private __fundApplicationWallet;
    /**
     * @param {Darwin.ListServiceAccountsRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.listServiceAccounts({
     *         applicationId: "applicationId"
     *     })
     */
    listServiceAccounts(request: Darwin.ListServiceAccountsRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ListServiceAccountsResponse>;
    private __listServiceAccounts;
    /**
     * @param {Darwin.CreateServiceAccountRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.createServiceAccount({
     *         applicationId: "applicationId",
     *         name: "name"
     *     })
     */
    createServiceAccount(request: Darwin.CreateServiceAccountRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.CreateServiceAccountResponse>;
    private __createServiceAccount;
    /**
     * @param {Darwin.RevokeServiceAccountRequest} request
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.applications.revokeServiceAccount({
     *         applicationId: "applicationId",
     *         serviceAccountId: "serviceAccountId"
     *     })
     */
    revokeServiceAccount(request: Darwin.RevokeServiceAccountRequest, requestOptions?: ApplicationsClient.RequestOptions): core.HttpResponsePromise<Darwin.RevokeServiceAccountResponse>;
    private __revokeServiceAccount;
}
