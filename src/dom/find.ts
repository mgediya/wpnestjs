// src/dom/find.ts
export function find(
  selector: string,
  context: Document | Element = document
): NodeListOf<Element> {
  return context.querySelectorAll(selector);
}