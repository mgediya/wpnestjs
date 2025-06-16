import { resolveElements } from '../utils/resolveElements';

export function show(
  element: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>
): void {
  const elements = resolveElements<HTMLElement>(element);
  elements.forEach((el) => {
    el.style.display = '';
  });
}
