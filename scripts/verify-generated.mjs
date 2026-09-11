import { access } from 'node:fs/promises';

const requiredFiles = [
  'generated/cjs/index.js',
  'generated/esm/index.mjs',
  'generated/esm/index.d.mts',
  'generated/esm/api/resources/account/client/Client.mjs',
  'generated/esm/api/resources/ais/client/Client.mjs',
  'generated/esm/api/resources/requests/client/Client.mjs',
  'generated/esm/api/resources/deals/client/Client.mjs',
  'generated/esm/api/resources/billing/client/Client.mjs',
  'generated/esm/api/types/Payment.d.mts',
  'generated/esm/api/types/Deal.d.mts',
  'generated/esm/api/types/AiSkillCatalogEntry.d.mts',
];

await Promise.all(requiredFiles.map((path) => access(new URL(`../${path}`, import.meta.url))));
