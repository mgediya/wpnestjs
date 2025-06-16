export function find(
  selector: string,
  context: string | Document | Element = document
): NodeListOf<Element> {
  let ctx: Document | Element = document;

  if (typeof context === 'string') {
    const found = document.querySelector(context);
    if (found) ctx = found;
  } else {
    ctx = context;
  }

  return ctx.querySelectorAll(selector);
}
