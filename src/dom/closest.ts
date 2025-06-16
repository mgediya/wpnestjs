export function closest(
  element: string | Element | Element[] | NodeListOf<Element>,
  selector: string
): Element[] {
  let elements: Element[] = [];

  if (typeof element === 'string') {
    elements = Array.from(document.querySelectorAll(element));
  } else if (element instanceof Element) {
    elements = [element];
  } else if (element instanceof NodeList || Array.isArray(element)) {
    elements = Array.from(element);
  }

  return elements
    .map((el) => el.closest(selector))
    .filter((el): el is Element => el !== null);
}
