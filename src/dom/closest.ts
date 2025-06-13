
// src/dom/closest.ts
export function closest(el: Element, selector: string): Element | null {
  return el.closest(selector);
}