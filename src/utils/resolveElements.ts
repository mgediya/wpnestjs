export function resolveElements<T extends Element>(
  element: string | T | T[] | NodeListOf<T>
): T[] {
  if (typeof element === 'string') {
    return Array.from(document.querySelectorAll(element)) as T[];
  } else if (element instanceof Element) {
    return [element as T];
  } else if (element instanceof NodeList || Array.isArray(element)) {
    return Array.from(element) as T[];
  }
  return [];
}
