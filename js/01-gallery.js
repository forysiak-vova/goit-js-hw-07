import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', ongalleryContainerClick);

function createImgCardsMarkup(galleryItems) {
   return galleryItems.map(({preview, original}) => {
   
      return  `
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</div>
   `
   }).join('');
   
}

console.log(galleryItems);

function ongalleryContainerClick(e) {
   const isGalleryClass = e.target.classList.contains('.gallery__image');
   if (!isGalleryClass) {
      return;
   }
   console.log(e.target);
   
};


// const instance = basicLightbox.create(`
//     <img src=${galleryItems.original} width="800" height="600">
// `)

// instance.show()


