export function fadeIn(el, duration = 400) {
  el.style.opacity = 0;
  el.style.display = getComputedStyle(el).display === 'none' ? 'block' : el.style.display;
  let last = +new Date();

  const tick = () => {
    el.style.opacity = +el.style.opacity + (new Date() - last) / duration;
    last = +new Date();

    if (+el.style.opacity < 1) {
      requestAnimationFrame(tick);
    }
  };

  tick();
}
