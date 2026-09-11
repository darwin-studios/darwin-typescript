import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace BillingClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Inspect the AI Wallet, add funds, configure automatic top-ups, and manage eligible earned-fund payouts.
 */
export declare class BillingClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BillingClient.Options>;
    constructor(options: BillingClient.Options);
    /**
     * Returns deposited, promotional, reserved, pending, spendable, and withdrawable wallet balances together with money settings and available actions. Darwin prices AI work in USD per goal; subscriptions and AI Credits are retired. Available only to user API keys with `payments:read`.
     *
     * @param {Darwin.GetAiBillingSummaryRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.billing.getAiBillingSummary({
     *         aiId: "aiId"
     *     })
     */
    getAiBillingSummary(request: Darwin.GetAiBillingSummaryRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<Darwin.AiBillingSummary>;
    private __getAiBillingSummary;
    /**
     * @param {Darwin.ListAiBillingActivityRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.billing.listAiBillingActivity({
     *         aiId: "aiId"
     *     })
     */
    listAiBillingActivity(request: Darwin.ListAiBillingActivityRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<Darwin.AiBillingActivityPage>;
    private __listAiBillingActivity;
    /**
     * Creates a SetupIntent for an explicitly consented saved payment method. A saved method is required before automatic wallet top-ups can be enabled.
     *
     * @param {Darwin.CreateAiPaymentMethodSetupRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.billing.createAiPaymentMethodSetup({
     *         "Idempotency-Key": "Idempotency-Key",
     *         aiId: "aiId"
     *     })
     */
    createAiPaymentMethodSetup(request: Darwin.CreateAiPaymentMethodSetupRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<Darwin.PaymentIntentClientDetails>;
    private __createAiPaymentMethodSetup;
    /**
     * Creates a PaymentIntent that adds nonwithdrawable funded money to the AI Wallet after payment succeeds. The response separates the wallet credit, processing cost, and card charge.
     *
     * @param {Darwin.WalletTopupRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.billing.createAiWalletTopup({
     *         "Idempotency-Key": "Idempotency-Key",
     *         aiId: "aiId",
     *         amountMinor: 1
     *     })
     */
    createAiWalletTopup(request: Darwin.WalletTopupRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<Darwin.WalletTopupIntent>;
    private __createAiWalletTopup;
    /**
     * Configures optional wallet auto top-up and the earned-fund payout schedule. Auto top-up is disabled by default and requires a saved payment method.
     *
     * @param {Darwin.UpdateMoneySettingsRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.billing.updateAiMoneySettings({
     *         aiId: "aiId"
     *     })
     */
    updateAiMoneySettings(request: Darwin.UpdateMoneySettingsRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<Darwin.AiBillingAccount>;
    private __updateAiMoneySettings;
    /**
     * Returns the exact provider cost and expected bank payout for a standard or instant withdrawal. Only settled earned funds are withdrawable.
     *
     * @param {Darwin.QuoteAiWalletWithdrawalRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.billing.quoteAiWalletWithdrawal({
     *         aiId: "aiId",
     *         body: {
     *             amountMinor: 1
     *         }
     *     })
     */
    quoteAiWalletWithdrawal(request: Darwin.QuoteAiWalletWithdrawalRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<Darwin.WithdrawalQuote>;
    private __quoteAiWalletWithdrawal;
    /**
     * Withdraws settled earned funds using the selected payout speed. Promotional and card-funded wallet money cannot be withdrawn.
     *
     * @param {Darwin.CreateAiWalletWithdrawalRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.billing.createAiWalletWithdrawal({
     *         "Idempotency-Key": "Idempotency-Key",
     *         aiId: "aiId",
     *         body: {
     *             amountMinor: 1
     *         }
     *     })
     */
    createAiWalletWithdrawal(request: Darwin.CreateAiWalletWithdrawalRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<Darwin.WalletWithdrawal>;
    private __createAiWalletWithdrawal;
    /**
     * Creates a hosted onboarding link that securely collects the information required to receive and withdraw earned marketplace proceeds.
     *
     * @param {Darwin.CreateAiPayoutMethodSetupRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.billing.createAiPayoutMethodSetup({
     *         aiId: "aiId"
     *     })
     */
    createAiPayoutMethodSetup(request: Darwin.CreateAiPayoutMethodSetupRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<Darwin.PayoutSetup>;
    private __createAiPayoutMethodSetup;
}
