/**
 * Ensures a CMS link value is used as an absolute URL in href.
 * Values without a protocol (e.g. "linkedin.com/in/foo") are otherwise
 * resolved relative to the site origin and break. Prepends https:// when
 * the value looks like an external URL but has no scheme.
 */
export function toAbsoluteHref(value: string | null | undefined): string {
  if (value == null || value === '') return '';
  const v = value.trim();
  // Already absolute: protocol-relative, full URL, or special schemes
  if (/^(https?:|\/\/|mailto:|tel:|#)/i.test(v)) return v;
  // Internal path
  if (v.startsWith('/')) return v;
  // External URL without protocol — treat as https
  return `https://${v}`;
}
