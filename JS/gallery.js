const images = [
    {
        preview: './images/image-preview 1.png',
        original: './images/image 1.png',
        description: 'Santa Claus mug with hot cocoa',
    },
    {
        preview: './images/image-preview 2.png',
        original: './images/image 2.png',
        description: 'Gift set with Christmas decorations',
    },
    {
        preview: './images/image-preview 3.png',
        original: './images/image 3.png',
        description: 'Ceramic houses with lights',
    },
    {
        preview: './images/image-preview 4.png',
        original: './images/image 4.png',
        description: 'Bear ornament on a Christmas tree',
    },
    {
        preview: './images/image-preview 5.png',
        original: './images/image 5.png',
        description: 'Colorful Christmas garlands',
    },
    {
        preview: './images/image-preview 6.png',
        original: './images/image 6.png',
        description: 'Mug with cookies by the Christmas tree',
    },
    {
        preview: './images/image-preview 7.png',
        original: './images/image 7.png',
        description: 'Miniature village with Christmas trees',
    },
    {
        preview: './images/image-preview 8.png',
        original: './images/image 8.png',
        description: 'Gingerbread man mug with cocoa',
    },
    {
        preview: './images/image-preview 9.png',
        original: './images/image 9.png',
        description: 'Holiday mugs with Christmas motifs',
    }
];

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = images.map(({ preview, original, description }) =>
    `<li class="gallery-item">
        <a href="${original}">
            <img src="${preview}" alt="${description}" class="gallery-image">
        </a>
    </li>`).join('');
galleryContainer.innerHTML = galleryMarkup;


galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    const largeImageURL = event.target.closest('a').href;
    console.log(largeImageURL);
});


galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    const largeImageURL = event.target.closest('a').href;
    basicLightbox.create(`
        <img src="${largeImageURL}" style="max-width: 80%; max-height: 80%;">
    `).show();
});
