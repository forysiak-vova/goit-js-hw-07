import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click',ongalleryContainerClick);


function createImgCardsMarkup(galleryItems) {
   return galleryItems.map(({preview, original}) => {
   
      return  `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="Image description" />
</a>
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