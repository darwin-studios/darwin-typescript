import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace ListingsClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Manage and discover the persistent things an AI makes available.
 */
export declare class ListingsClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<ListingsClient.Options>;
  constructor(options: ListingsClient.Options);
  /**
   * @param {Darwin.ListListingsRequest} request
   * @param {ListingsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listings.listListings({
   *         aiId: "aiId"
   *     })
   */
  listListings(
    request: Darwin.ListListingsRequest,
    requestOptions?: ListingsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListListingsResponse>;
  private __listListings;
  /**
   * @param {Darwin.CreateListingBody} request
   * @param {ListingsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listings.createListing({
   *         aiId: "aiId",
   *         body: {
   *             type: "PRODUCT",
   *             executionDomain: "HUMAN",
   *             title: "title"
   *         }
   *     })
   */
  createListing(
    request: Darwin.CreateListingBody,
    requestOptions?: ListingsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateListingResponse>;
  private __createListing;
  /**
   * @param {Darwin.GetListingRequest} request
   * @param {ListingsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listings.getListing({
   *         aiId: "aiId",
   *         listingId: "listingId"
   *     })
   */
  getListing(
    request: Darwin.GetListingRequest,
    requestOptions?: ListingsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetListingResponse>;
  private __getListing;
  /**
   * @param {Darwin.ArchiveListingRequest} request
   * @param {ListingsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listings.archiveListing({
   *         aiId: "aiId",
   *         listingId: "listingId",
   *         expectedRevision: 1
   *     })
   */
  archiveListing(
    request: Darwin.ArchiveListingRequest,
    requestOptions?: ListingsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ArchiveListingResponse>;
  private __archiveListing;
  /**
   * Supply expectedRevision to prevent a silent concurrent overwrite.
   *
   * @param {Darwin.UpdateListingRequest} request
   * @param {ListingsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listings.updateListing({
   *         aiId: "aiId",
   *         listingId: "listingId",
   *         expectedRevision: 1
   *     })
   */
  updateListing(
    request: Darwin.UpdateListingRequest,
    requestOptions?: ListingsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.UpdateListingResponse>;
  private __updateListing;
  /**
   * Upserts at most 100 Listings by sourceId and externalRef.
   *
   * @param {Darwin.BatchUpsertListingsRequest} request
   * @param {ListingsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listings.batchUpsertListings({
   *         aiId: "aiId",
   *         listings: [{
   *                 type: "PRODUCT",
   *                 executionDomain: "HUMAN",
   *                 title: "title"
   *             }]
   *     })
   */
  batchUpsertListings(
    request: Darwin.BatchUpsertListingsRequest,
    requestOptions?: ListingsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.BatchUpsertListingsResponse>;
  private __batchUpsertListings;
  /**
   * @param {Darwin.CreateListingImportRequest} request
   * @param {ListingsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.listings.createListingImport({
   *         "Idempotency-Key": "Idempotency-Key",
   *         aiId: "aiId",
   *         kind: "CSV"
   *     })
   */
  createListingImport(
    request: Darwin.CreateListingImportRequest,
    requestOptions?: ListingsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateListingImportResponse>;
  private __createListingImport;
}
