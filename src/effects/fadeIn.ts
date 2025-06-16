import { resolveElements } from '../utils/resolveElements';

export function fadeIn(
  element: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
  duration: number = 400
): void {
  const elements = resolveElements<HTMLElement>(element);

  elements.forEach((el) => {
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
  });
}
