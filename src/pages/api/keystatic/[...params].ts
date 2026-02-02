/**
 * Explicit Keystatic API route so Vercel emits a serverless function for it.
 * The integration also injects this pattern; this file ensures the route exists
 * in src/pages so the Vercel adapter includes it in the deployment.
 */
import { all } from '@keystatic/astro/internal/keystatic-api.js';

export const ALL = all;
export const prerender = false;
