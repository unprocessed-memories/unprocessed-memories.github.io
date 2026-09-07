document.querySelectorAll(".year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".photo-button").forEach(button => {
  button.addEventListener("click", () => {
    if (!lightbox) return;

    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.querySelector("img")?.alt || "";
    lightboxCaption.textContent = button.dataset.caption || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});
