import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');
const createMarkupGallery = (items) => {
  return items.map((element) => createMarkupItem(element)).join("");
};
const createMarkupItem = ({ preview, original, description }) => {
  return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>`;
};
galleryContainer.insertAdjacentHTML('beforeend', createMarkupGallery(galleryItems));
// console.log(galleryItems);
const onImgClick = (e) => {
  e.preventDefault();
  if (e.target.classList.value !== "gallery__image") {
    return;
  }
  instance.element().querySelector(".current__img").src =
    e.target.dataset.source;
instance.show();
};
const onClose = (e) => {
  if (e.key === "Escape") {
    instance.close();
  }
};
const instance = basicLightbox.create(
  `<img class="current__img" width="1280" src="">`,
  {
  
    onShow: () => window.addEventListener("keydown", onClose),
    onClose: () => window.removeEventListener("keydown", onClose),
  }
);
galleryContainer.addEventListener('click', onImgClick);



