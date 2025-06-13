export function slideDown(el, duration = 300) {
  el.style.removeProperty('display');
  let display = window.getComputedStyle(el).display;
  if (display === 'none') display = 'block';
  el.style.display = display;

  const height = el.offsetHeight;
  el.style.height = '0';
  el.style.overflow = 'hidden';
  el.style.transition = `height ${duration}ms ease`;

  requestAnimationFrame(() => {
    el.style.height = `${height}px`;
  });

  setTimeout(() => {
    el.style.height = '';
    el.style.transition = '';
  }, duration);
}
