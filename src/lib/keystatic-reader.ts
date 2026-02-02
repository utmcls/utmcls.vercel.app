import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const contentPath = process.cwd();

export const reader = createReader(contentPath, keystaticConfig);

export type HeroEntry = Awaited<ReturnType<typeof reader.singletons.hero.read>>;
export type CtaEntry = Awaited<ReturnType<typeof reader.singletons.cta.read>>;
export type FooterEntry = Awaited<ReturnType<typeof reader.singletons.footer.read>>;
export type EventsList = Awaited<ReturnType<typeof reader.collections.events.all>>;
export type TeamList = Awaited<ReturnType<typeof reader.collections.team.all>>;
