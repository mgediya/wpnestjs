export function find(
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

  const found: Element[] = [];
  elements.forEach((el) => {
    found.push(...Array.from(el.querySelectorAll(selector)));
  });

  return found;
}
