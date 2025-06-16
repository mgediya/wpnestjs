export function slideUp(
  element: string | Element | Element[] | NodeListOf<Element>,
  duration: number = 400
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
    const htmlEl = el as HTMLElement;
    htmlEl.style.transition = `height ${duration}ms, padding ${duration}ms, margin ${duration}ms`;
    htmlEl.style.boxSizing = 'border-box';
    htmlEl.style.height = `${htmlEl.offsetHeight}px`;
    htmlEl.offsetHeight; // force reflow
    htmlEl.style.overflow = 'hidden';
    htmlEl.style.height = '0';
    htmlEl.style.paddingTop = '0';
    htmlEl.style.paddingBottom = '0';
    htmlEl.style.marginTop = '0';
    htmlEl.style.marginBottom = '0';

    setTimeout(() => {
      htmlEl.style.display = 'none';
    }, duration);
  });
}
