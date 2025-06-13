export function addClass(
  element: Element | NodeListOf<Element> | Element[],
  className: string
): void {
  const elements = element instanceof NodeList || Array.isArray(element)
    ? Array.from(element)
    : [element];

  elements.forEach((el) => el.classList.add(className));
}
