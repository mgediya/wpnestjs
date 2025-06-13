export function removeClass(element, className) {
  if (!element) return;
  (element instanceof NodeList || Array.isArray(element) ? [...element] : [element])
    .forEach(el => el.classList.remove(className));
}
