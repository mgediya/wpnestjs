// src/class/removeClass.ts
export function removeClass(
  element: Element | Element[] | NodeListOf<Element>,
  className: string
): void {
  const elements = element instanceof NodeList || Array.isArray(element)
    ? Array.from(element)
    : [element];

  elements.forEach((el) => el.classList.remove(className));
}
