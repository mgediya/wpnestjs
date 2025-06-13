export function fadeOut(el, duration = 400) {
  el.style.opacity = 1;
  let last = +new Date();

  const tick = () => {
    el.style.opacity = +el.style.opacity - (new Date() - last) / duration;
    last = +new Date();

    if (+el.style.opacity > 0) {
      requestAnimationFrame(tick);
    } else {
      el.style.display = 'none';
    }
  };

  tick();
}
