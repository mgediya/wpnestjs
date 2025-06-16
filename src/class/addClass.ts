export function addClass(
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

  const classList = classNames.split(/[\s,]+/).filter(Boolean);

  elements.forEach((el) => {
    classList.forEach((cls) => {
      el.classList.add(cls);
    });
  });
}
