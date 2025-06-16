import { resolveElements } from '../utils/resolveElements';

export function addClass(
  element: string | Element | Element[] | NodeListOf<Element>,
  className: string
): void {
  const elements = resolveElements(element);
  elements.forEach((el) => el.classList.add(className));
}
