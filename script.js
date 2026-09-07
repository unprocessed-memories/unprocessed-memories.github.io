// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');

navToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxFrame = document.getElementById('lightboxFrame');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.frame-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('.frame-img');
    lightboxFrame.style.background = getComputedStyle(img).backgroundImage;
    lightboxCaption.textContent = btn.dataset.caption || '';
    lightbox.hidden = false;
    lightboxClose.focus();
  });
});

function closeLightbox() {
  lightbox.hidden = true;
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
