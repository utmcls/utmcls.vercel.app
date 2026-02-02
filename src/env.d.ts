/// <reference types="astro/client" />

declare module '@keystatic/astro/internal/keystatic-api.js' {
  import type { APIRoute } from 'astro';
  export const all: APIRoute;
  export const ALL: APIRoute;
}
