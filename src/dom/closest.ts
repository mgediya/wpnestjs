export function closest(
  el: string | Element,
  selector: string
): Element | null {
  const element =
    typeof el === 'string' ? document.querySelector(el) : el;

  return element?.closest(selector) || null;
}
