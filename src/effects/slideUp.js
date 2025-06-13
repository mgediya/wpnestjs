export function slideUp(el, duration = 300) {
  el.style.transition = `height ${duration}ms ease`;
  el.style.overflow = 'hidden';
  el.style.height = `${el.offsetHeight}px`;

  requestAnimationFrame(() => {
    el.style.height = '0';
  });

  setTimeout(() => {
    el.style.display = 'none';
    el.style.height = '';
    el.style.transition = '';
  }, duration);
}
