import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace TransactionsClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Reserve, inspect, cancel, and request refunds for marketplace funds without exposing provider credentials.
 */
export declare class TransactionsClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<TransactionsClient.Options>;
  constructor(options: TransactionsClient.Options);
  /**
   * Creates an idempotent reservation for the accepted maximum cap. Choose Darwin-managed payment or the application-managed Shared Payment Token preview. Performance settlement releases any unused amount.
   *
   * @param {Darwin.CreateTransactionFundingRequest} request
   * @param {TransactionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.transactions.createDealTransaction({
   *         "Idempotency-Key": "Idempotency-Key",
   *         dealId: "dealId"
   *     })
   */
  createDealTransaction(
    request: Darwin.CreateTransactionFundingRequest,
    requestOptions?: TransactionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.TransactionFundingResult>;
  private __createDealTransaction;
  /**
   * @param {Darwin.ListTransactionsRequest} request
   * @param {TransactionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.transactions.listTransactions()
   */
  listTransactions(
    request?: Darwin.ListTransactionsRequest,
    requestOptions?: TransactionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListTransactionsResponse>;
  private __listTransactions;
  /**
   * @param {Darwin.GetTransactionRequest} request
   * @param {TransactionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.transactions.getTransaction({
   *         transactionId: "transactionId"
   *     })
   */
  getTransaction(
    request: Darwin.GetTransactionRequest,
    requestOptions?: TransactionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetTransactionResponse>;
  private __getTransaction;
  /**
   * User credentials only. Returns the provider, scopes, retention choices, and current authorization state needed after funding and before fulfillment.
   *
   * @param {Darwin.GetTransactionAccountRequirementRequest} request
   * @param {TransactionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.transactions.getTransactionAccountRequirement({
   *         transactionId: "transactionId"
   *     })
   */
  getTransactionAccountRequirement(
    request: Darwin.GetTransactionAccountRequirementRequest,
    requestOptions?: TransactionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetTransactionAccountRequirementResponse>;
  private __getTransactionAccountRequirement;
  /**
   * Owner credentials only. Refund requests require an Idempotency-Key header.
   *
   * @param {Darwin.TransactionActionRequest} request
   * @param {TransactionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.transactions.actOnTransaction({
   *         "Idempotency-Key": "Idempotency-Key",
   *         transactionId: "transactionId",
   *         action: "CANCEL"
   *     })
   */
  actOnTransaction(
    request: Darwin.TransactionActionRequest,
    requestOptions?: TransactionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActOnTransactionResponse>;
  private __actOnTransaction;
  /**
   * Private preview. Validates and consumes one transaction-scoped Stripe Shared Payment Token. Generic PaymentMethod IDs, card data, and caller assertions that a payment occurred are rejected.
   *
   * @param {Darwin.ApplicationPaymentAuthorizationRequest} request
   * @param {TransactionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.transactions.authorizeTransactionPayment({
   *         "Idempotency-Key": "Idempotency-Key",
   *         transactionId: "transactionId",
   *         type: "STRIPE_SHARED_PAYMENT_TOKEN",
   *         networkProfileId: "networkProfileId",
   *         grantedToken: "grantedToken"
   *     })
   */
  authorizeTransactionPayment(
    request: Darwin.ApplicationPaymentAuthorizationRequest,
    requestOptions?: TransactionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AuthorizeTransactionPaymentResponse>;
  private __authorizeTransactionPayment;
}
