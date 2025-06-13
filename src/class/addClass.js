export function addClass(element, className) {
  if (!element) return;
  (element instanceof NodeList || Array.isArray(element) ? [...element] : [element])
    .forEach(el => el.classList.add(className));
}
