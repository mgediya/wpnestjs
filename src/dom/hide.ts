export function hide(
  element: string | Element | Element[] | NodeListOf<Element>
): void {
  let elements: Element[] = [];

  if (typeof element === 'string') {
    elements = Array.from(document.querySelectorAll(element));
  } else if (element instanceof Element) {
    elements = [element];
  } else if (element instanceof NodeList || Array.isArray(element)) {
    elements = Array.from(element);
  }

  elements.forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });
}
