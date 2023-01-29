import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery")

galleryEl.insertAdjacentHTML('beforeEnd', createItemsEl(galleryItems))

function createItemsEl(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    overlay: false,
    captions: true,
    captionType: 'attr',
    captionsData    : 'alt',
    captionPosition: 'outside',
    captionDelay: 250,
})