export function addClass(
  element: Element | Element[] | NodeListOf<Element>,
  className: string
): void {
  if (element instanceof Element) {
    element.classList.add(className);
  } else if (element instanceof NodeList || Array.isArray(element)) {
    [...element].forEach((el) => el.classList.add(className));
  }
}
