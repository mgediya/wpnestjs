// src/effects/slideDown.ts
export function slideDown(el: HTMLElement, duration: number = 400): void {
  el.style.removeProperty('display');
  let display = window.getComputedStyle(el).display;
  if (display === 'none') display = 'block';
  el.style.display = display;

  const height = el.offsetHeight;
  el.style.overflow = 'hidden';
  el.style.height = '0';
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';
  el.style.marginTop = '0';
  el.style.marginBottom = '0';

  el.offsetHeight; // force reflow

  el.style.transition = `height ${duration}ms, padding ${duration}ms, margin ${duration}ms`;
  el.style.height = height + 'px';
}