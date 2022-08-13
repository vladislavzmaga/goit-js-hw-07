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

let instance;

function onShowingImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `<img src=${evt.target.dataset.source} width="800" height="600">`
  );

  instance.show();
  window.addEventListener("keydown", escCloseModal);
}

function escCloseModal(evt) {
  console.log(true);
  if (evt.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", escCloseModal);
  }
}
