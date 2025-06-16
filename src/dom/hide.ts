import { resolveElements } from '../utils/resolveElements';

export function hide(
  element: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>
): void {
  const elements = resolveElements(element);
  elements.forEach((el) => {
    el.style.display = 'none';
  });
}
