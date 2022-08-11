import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDivEl = document.querySelector(".gallery");

function createGalleryEl(items) {
  return items
    .map((item) => {
      return `<div clas = "gallery__item">
    <a class = "gallery__link" href=${item.original}>
    <img class ="gallery__image" src = ${item.preview} alt =${item.description} data-source=${item.original}
    />
    </a>
    </div>`;
    })
    .join("");
}

galleryDivEl.innerHTML = createGalleryEl(galleryItems);

galleryDivEl.addEventListener("click", onShowingImage);

let url;
let instance;
let lightbox;

function onShowingImage(evt) {
  evt.preventDefault();
  const img = evt.target.classList.contains("gallery__image");
  if (!img) {
    return;
  }
  url = evt.target.dataset.source;
  instance = basicLightbox.create(`<img src=${url} width="800" height="600">`);

  instance.show();
  window.addEventListener("keydown", escCloseModal);
  lightbox = document.querySelector(".basicLightbox");
  lightbox.addEventListener("click", clearEvent);
}

function escCloseModal(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", escCloseModal);
    lightbox.removeEventListener("click", clearEvent);
  }
}
function clearEvent() {
  window.removeEventListener("keydown", escCloseModal);
  lightbox.removeEventListener("click", clearEvent);
}
