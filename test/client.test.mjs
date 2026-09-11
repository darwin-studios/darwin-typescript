import assert from 'node:assert/strict';
import test from 'node:test';

import { DarwinClient } from '../generated/esm/index.mjs';

test('exposes the public resource clients', async () => {
  const client = new DarwinClient({
    token: 'darwin_test',
    baseUrl: 'https://api.example.test/api/v1',
    maxRetries: 0,
    fetch: async (input, init) => {
      assert.equal(String(input), 'https://api.example.test/api/v1/ai/conversation?limit=7');
      assert.equal(new Headers(init?.headers).get('authorization'), 'Bearer darwin_test');
      return new Response(JSON.stringify({ messages: [] }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    },
  });

  assert.equal(typeof client.account.getAccount, 'function');
  assert.equal(typeof client.ais.listAIs, 'function');
  assert.equal(typeof client.ais.listSkillCatalog, 'function');
  assert.equal(typeof client.skills.listAiSkills, 'function');
  assert.equal(typeof client.skills.createAiSkill, 'function');
  assert.equal(typeof client.skills.deleteAiSkill, 'function');
  assert.equal(typeof client.ais.listAiAssets, 'function');
  assert.equal(typeof client.ais.createAiAsset, 'function');
  assert.equal(typeof client.ais.deleteAiAsset, 'function');
  assert.equal(typeof client.integrations.getIntegrations, 'function');
  assert.equal(typeof client.requests.listRequests, 'function');
  assert.equal(typeof client.requests.actOnRequest, 'function');
  assert.equal(typeof client.conversations.createMessage, 'function');
  assert.equal(typeof client.tasks.listTasks, 'function');
  assert.equal(typeof client.goals.listGoals, 'function');
  assert.equal(typeof client.deals.listDeals, 'function');
  assert.equal(typeof client.deals.createDeal, 'function');
  assert.equal(typeof client.deals.listDealPayments, 'function');
  assert.equal(typeof client.billing.getAiBillingSummary, 'function');
  assert.equal(typeof client.transactions.listTransactions, 'function');
  assert.equal(typeof client.outcomes.listOutcomes, 'function');
  assert.equal(typeof client.applications.listApplications, 'function');
  assert.equal(typeof client.enrollment.createEnrollmentBatch, 'function');
  assert.equal(typeof client.ephemeralGoals.createEphemeralGoal, 'function');
  assert.equal(typeof client.webhooks.listWebhooks, 'function');
  assert.equal(typeof client.tools.listTools, 'function');

  for (const hidden of ['sessions', 'directory', 'offers', 'payments', 'approvals', 'platform']) {
    assert.equal(hidden in client, false, `${hidden} must not be a top-level SDK client`);
  }

  assert.deepEqual(await client.conversations.getSelectedAiConversation({ limit: 7 }), { messages: [] });
});

test('sends deal and request commands through customer-safe routes', async () => {
  const calls = [];
  const client = new DarwinClient({
    token: 'darwin_test',
    baseUrl: 'https://api.example.test/api/v1',
    maxRetries: 0,
    fetch: async (input, init) => {
      calls.push({
        url: String(input),
        method: init?.method,
        idempotencyKey: new Headers(init?.headers).get('idempotency-key'),
        body: init?.body ? JSON.parse(String(init.body)) : undefined,
      });
      return new Response(JSON.stringify(calls.length === 1 ? { deal: {} } : { request: {} }), {
        status: 201,
        headers: { 'content-type': 'application/json' },
      });
    },
  });

  await client.deals.createDeal({
    aiId: 'ai_123',
    mode: 'BUY',
    goalId: 'goal_123',
    title: 'Annual hosting agreement',
  });
  await client.requests.actOnRequest({
    'Idempotency-Key': 'request-action-1',
    requestId: 'request_123',
    action: 'ACCEPT',
  });

  assert.deepEqual(calls, [
    {
      url: 'https://api.example.test/api/v1/deals',
      method: 'POST',
      idempotencyKey: null,
      body: {
        aiId: 'ai_123',
        mode: 'BUY',
        goalId: 'goal_123',
        title: 'Annual hosting agreement',
      },
    },
    {
      url: 'https://api.example.test/api/v1/requests/request_123/actions',
      method: 'POST',
      idempotencyKey: 'request-action-1',
      body: { action: 'ACCEPT' },
    },
  ]);
});
