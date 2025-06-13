// src/effects/fadeIn.ts
export function fadeIn(el: HTMLElement, duration: number = 400): void {
  el.style.opacity = '0';
  el.style.display = '';

  let last = +new Date();
  const tick = () => {
    const now = +new Date();
    const delta = (now - last) / duration;
    el.style.opacity = (parseFloat(el.style.opacity) + delta).toString();
    last = now;

    if (parseFloat(el.style.opacity) < 1) {
      requestAnimationFrame(tick);
    }
  };
  tick();
}