// src/effects/slideUp.ts
export function slideUp(el: HTMLElement, duration: number = 400): void {
  el.style.transition = `height ${duration}ms, padding ${duration}ms, margin ${duration}ms`;
  el.style.height = el.offsetHeight + 'px';
  el.offsetHeight; // force reflow
  el.style.overflow = 'hidden';
  el.style.height = '0';
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';
  el.style.marginTop = '0';
  el.style.marginBottom = '0';

  setTimeout(() => {
    el.style.display = 'none';
  }, duration);
}