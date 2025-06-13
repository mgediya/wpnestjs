export function toggleClass(element, className) {
  if (!element) return;
  (element instanceof NodeList || Array.isArray(element) ? [...element] : [element])
    .forEach(el => el.classList.toggle(className));
}
