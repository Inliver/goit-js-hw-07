import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery")

galleryEl.insertAdjacentHTML('beforeEnd', createItemsEl(galleryItems))

function createItemsEl(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`
    }).join('');
}


// const createItemsEl = galleryItems.map(({ preview, original, description }) => {
//     return  `
//     <div class="gallery__item">
//      <a class="gallery__link" href="${original}">
//          <img
//            class="gallery__image"
//            src="${preview}"
//            data-source="${original}"
//          alt="${description}"
//            />
//       </a>
//     </div>`
// }).join('')



galleryEl.addEventListener('click', onGalleryClick)


function onGalleryClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        rexturn;
    }

    basicLightbox.create(`<img src="${e.target.dataset.source}">`).show()  

}


