import { resolveElements } from '../utils/resolveElements';

export function removeClass(
  element: string | Element | Element[] | NodeListOf<Element>,
  className: string
): void {
  const elements = resolveElements(element);
  elements.forEach((el: Element) => {
    el.classList.remove(className);
  });
}
