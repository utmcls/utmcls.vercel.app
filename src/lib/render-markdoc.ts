import Markdoc from '@markdoc/markdoc';
const { parse, transform, renderers } = Markdoc;
import type { Node } from '@markdoc/markdoc';

/**
 * Renders a Markdoc string to HTML.
 * Used for Keystatic markdoc fields when using the Reader API (Option A).
 */
export function renderMarkdocToHtml(content: string): string {
  if (!content?.trim()) return '';
  const ast = parse(content);
  const transformed = transform(ast);
  return renderers.html(transformed);
}

/**
 * Renders a Keystatic-resolved Markdoc value to HTML.
 * With resolveLinkedFiles: true, the reader returns { node } (parsed AST), not a string.
 */
export function renderMarkdocValueToHtml(value: unknown): string {
  if (value == null) return '';
  const node = typeof value === 'object' && value !== null && 'node' in value
    ? (value as { node: Node }).node
    : null;
  if (!node) return '';
  try {
    const transformed = transform(node);
    return renderers.html(transformed);
  } catch {
    return '';
  }
}
