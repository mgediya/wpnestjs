export function fadeOut(
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
    htmlEl.style.transition = `opacity ${duration}ms`;
    htmlEl.style.opacity = '0';

    setTimeout(() => {
      htmlEl.style.display = 'none';
    }, duration);
  });
}
