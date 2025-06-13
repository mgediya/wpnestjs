// src/class/toggleClass.ts
export function toggleClass(
  element: Element | Element[] | NodeListOf<Element>,
  className: string
): void {
  const elements = element instanceof NodeList || Array.isArray(element)
    ? Array.from(element)
    : [element];

  elements.forEach((el) => el.classList.toggle(className));
}