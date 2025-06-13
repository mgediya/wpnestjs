export function find(selector, context = document) {
  return context.querySelectorAll(selector);
}
