import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace AccountClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Inspect the authenticated Darwin account and its AI inventory.
 */
export declare class AccountClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AccountClient.Options>;
    constructor(options: AccountClient.Options);
    /**
     * Requires a user API key.
     *
     * @param {AccountClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.account.getAccount()
     */
    getAccount(requestOptions?: AccountClient.RequestOptions): core.HttpResponsePromise<Darwin.Account>;
    private __getAccount;
}
