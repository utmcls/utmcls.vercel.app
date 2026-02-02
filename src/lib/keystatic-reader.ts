import { createReader } from '@keystatic/core/reader';
import { createGitHubReader } from '@keystatic/core/reader/github';
import keystaticConfig from '../../keystatic.config';

// In prod (e.g. Vercel SSR), the deployment bundle has no repo files—only the built app.
// createReader(process.cwd(), ...) would read from the server runtime dir, which has no content/.
// GitHub storage in config only affects the Admin UI (where edits are saved). For reading at
// request time we must use createGitHubReader so content is fetched from the GitHub API.
const isProd = typeof process !== 'undefined' && process.env.VERCEL === '1';

export const reader = isProd
  ? createGitHubReader(keystaticConfig, {
      repo: 'utmcls/utmcls.github.io',
      token: process.env.GITHUB_PAT,
    })
  : createReader(process.cwd(), keystaticConfig);

export type HeroEntry = Awaited<ReturnType<typeof reader.singletons.hero.read>>;
export type CtaEntry = Awaited<ReturnType<typeof reader.singletons.cta.read>>;
export type FooterEntry = Awaited<ReturnType<typeof reader.singletons.footer.read>>;
export type EventsList = Awaited<ReturnType<typeof reader.collections.events.all>>;
export type TeamList = Awaited<ReturnType<typeof reader.collections.team.all>>;
