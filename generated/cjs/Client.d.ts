import { AccountClient } from './api/resources/account/client/Client.js';
import { AisClient } from './api/resources/ais/client/Client.js';
import { ApplicationsClient } from './api/resources/applications/client/Client.js';
import { BillingClient } from './api/resources/billing/client/Client.js';
import { ConnectionsClient } from './api/resources/connections/client/Client.js';
import { ConversationsClient } from './api/resources/conversations/client/Client.js';
import { DealsClient } from './api/resources/deals/client/Client.js';
import { DeploymentClient } from './api/resources/deployment/client/Client.js';
import { EnrollmentClient } from './api/resources/enrollment/client/Client.js';
import { EphemeralGoalsClient } from './api/resources/ephemeralGoals/client/Client.js';
import { GoalsClient } from './api/resources/goals/client/Client.js';
import { IntegrationsClient } from './api/resources/integrations/client/Client.js';
import { ListingsClient } from './api/resources/listings/client/Client.js';
import { NetworkClient } from './api/resources/network/client/Client.js';
import { NotificationsClient } from './api/resources/notifications/client/Client.js';
import { OutcomesClient } from './api/resources/outcomes/client/Client.js';
import { PermissionsClient } from './api/resources/permissions/client/Client.js';
import { ReputationClient } from './api/resources/reputation/client/Client.js';
import { RequestsClient } from './api/resources/requests/client/Client.js';
import { SkillsClient } from './api/resources/skills/client/Client.js';
import { TasksClient } from './api/resources/tasks/client/Client.js';
import { ToolsClient } from './api/resources/tools/client/Client.js';
import { TransactionsClient } from './api/resources/transactions/client/Client.js';
import { UsageClient } from './api/resources/usage/client/Client.js';
import { VerificationClient } from './api/resources/verification/client/Client.js';
import { WebhooksClient } from './api/resources/webhooks/client/Client.js';
import type { BaseClientOptions, BaseRequestOptions } from './BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from './BaseClient.js';
import * as core from './core/index.js';

export declare namespace DarwinClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
export declare class DarwinClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<DarwinClient.Options>;
  protected _account: AccountClient | undefined;
  protected _ais: AisClient | undefined;
  protected _listings: ListingsClient | undefined;
  protected _reputation: ReputationClient | undefined;
  protected _permissions: PermissionsClient | undefined;
  protected _notifications: NotificationsClient | undefined;
  protected _usage: UsageClient | undefined;
  protected _verification: VerificationClient | undefined;
  protected _deployment: DeploymentClient | undefined;
  protected _integrations: IntegrationsClient | undefined;
  protected _connections: ConnectionsClient | undefined;
  protected _skills: SkillsClient | undefined;
  protected _billing: BillingClient | undefined;
  protected _conversations: ConversationsClient | undefined;
  protected _requests: RequestsClient | undefined;
  protected _tools: ToolsClient | undefined;
  protected _tasks: TasksClient | undefined;
  protected _goals: GoalsClient | undefined;
  protected _network: NetworkClient | undefined;
  protected _deals: DealsClient | undefined;
  protected _transactions: TransactionsClient | undefined;
  protected _outcomes: OutcomesClient | undefined;
  protected _applications: ApplicationsClient | undefined;
  protected _enrollment: EnrollmentClient | undefined;
  protected _ephemeralGoals: EphemeralGoalsClient | undefined;
  protected _webhooks: WebhooksClient | undefined;
  constructor(options: DarwinClient.Options);
  get account(): AccountClient;
  get ais(): AisClient;
  get listings(): ListingsClient;
  get reputation(): ReputationClient;
  get permissions(): PermissionsClient;
  get notifications(): NotificationsClient;
  get usage(): UsageClient;
  get verification(): VerificationClient;
  get deployment(): DeploymentClient;
  get integrations(): IntegrationsClient;
  get connections(): ConnectionsClient;
  get skills(): SkillsClient;
  get billing(): BillingClient;
  get conversations(): ConversationsClient;
  get requests(): RequestsClient;
  get tools(): ToolsClient;
  get tasks(): TasksClient;
  get goals(): GoalsClient;
  get network(): NetworkClient;
  get deals(): DealsClient;
  get transactions(): TransactionsClient;
  get outcomes(): OutcomesClient;
  get applications(): ApplicationsClient;
  get enrollment(): EnrollmentClient;
  get ephemeralGoals(): EphemeralGoalsClient;
  get webhooks(): WebhooksClient;
  /**
   * Make a passthrough request using the SDK's configured auth, retry, logging, etc.
   * This is useful for making requests to endpoints not yet supported in the SDK.
   * The input can be a URL string, URL object, or Request object. Relative paths are resolved against the configured base URL.
   *
   * @param {Request | string | URL} input - The URL, path, or Request object.
   * @param {RequestInit} init - Standard fetch RequestInit options.
   * @param {core.PassthroughRequest.RequestOptions} requestOptions - Per-request overrides (timeout, retries, headers, abort signal).
   * @returns {Promise<Response>} A standard Response object.
   */
  fetch(
    input: Request | string | URL,
    init?: RequestInit,
    requestOptions?: core.PassthroughRequest.RequestOptions,
  ): Promise<Response>;
}
