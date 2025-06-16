export function removeClass(
  element: string | Element | Element[] | NodeListOf<Element>,
  classNames: string
): void {
  let elements: Element[] = [];

  if (typeof element === 'string') {
    elements = Array.from(document.querySelectorAll(element));
  } else if (element instanceof Element) {
    elements = [element];
  } else if (element instanceof NodeList || Array.isArray(element)) {
    elements = Array.from(element);
  }

  // Support comma or space-separated class names
  const classList = classNames.split(/[\s,]+/).filter(Boolean);

  elements.forEach((el) => {
    classList.forEach((cls) => {
      el.classList.remove(cls);
    });
  });
}
