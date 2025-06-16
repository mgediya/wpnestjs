export function slideDown(
  element: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
  duration: number = 400
): void {
  let elements: HTMLElement[] = [];

  if (typeof element === 'string') {
    elements = Array.from(document.querySelectorAll<HTMLElement>(element));
  } else if (element instanceof HTMLElement) {
    elements = [element];
  } else if (element instanceof NodeList || Array.isArray(element)) {
    elements = Array.from(element);
  }

  elements.forEach((el) => {
    el.style.removeProperty('display');
    let display = window.getComputedStyle(el).display;

    if (display === 'none') display = 'block';
    el.style.display = display;

    const height = el.offsetHeight;

    el.style.overflow = 'hidden';
    el.style.height = '0';
    el.style.paddingTop = '0';
    el.style.paddingBottom = '0';
    el.style.marginTop = '0';
    el.style.marginBottom = '0';

    el.offsetHeight; // force reflow

    el.style.transition = `height ${duration}ms, padding ${duration}ms, margin ${duration}ms`;
    el.style.height = `${height}px`;

    setTimeout(() => {
      el.style.removeProperty('height');
      el.style.removeProperty('overflow');
      el.style.removeProperty('transition');
      el.style.removeProperty('padding-top');
      el.style.removeProperty('padding-bottom');
      el.style.removeProperty('margin-top');
      el.style.removeProperty('margin-bottom');
    }, duration);
  });
}
