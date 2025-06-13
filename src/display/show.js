export function show(el) {
  el.style.display = '';
  if (getComputedStyle(el).display === 'none') {
    el.style.display = 'block';
  }
}
