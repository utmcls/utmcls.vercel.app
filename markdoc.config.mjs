import { defineMarkdocConfig } from '@astrojs/markdoc/config';

/**
 * Markdoc config for Astro content collections and optional custom tags/nodes.
 * Keystatic-authored content rendered via src/lib/render-markdoc.ts uses
 * @markdoc/markdoc directly; pass this config to transform() there if you
 * add custom tags or variables.
 */
export default defineMarkdocConfig({
  variables: {
    // Optional: add global variables for Markdoc (e.g. environment)
  },
  // tags: { ... } — add custom Markdoc tags that render Astro components
  // nodes: { ... } — override default node rendering
});
