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
    e.preventDefault();
   const isGalleryClass = e.target.classList.contains('.gallery__image');
   if (!isGalleryClass) {
      return;
   }
   console.log(e.target);
   
};


// ===============================================================================

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom", 
  captionDelay: 250, 
  showCounter: false, 
  scrollZoom: false, 
});