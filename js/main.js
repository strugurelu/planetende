// Mobile menu toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Scroll to top button
const toTop = document.createElement('button');
toTop.id = 'toTop';
toTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(toTop);

window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Before-After slider
const ba = document.querySelector('.before-after');
if (ba) {
  const overlay = ba.querySelector('.overlay');
  const handle = ba.querySelector('.slider-handle');
  let dragging = false;

  const startDrag = () => dragging = true;
  const stopDrag = () => dragging = false;
  const onDrag = (e) => {
    if (!dragging) return;
    const rect = ba.getBoundingClientRect();
    let x = e.clientX || e.touches[0].clientX;
    x = x - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    overlay.style.width = x + 'px';
    handle.style.left = x + 'px';
  };

  handle.addEventListener('mousedown', startDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('mousemove', onDrag);

  handle.addEventListener('touchstart', startDrag);
  window.addEventListener('touchend', stopDrag);
  window.addEventListener('touchmove', onDrag);
}
