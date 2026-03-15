const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

function showImage(index) {
    lightbox.style.display = 'block';
    lightboxImg.src = galleryItems[index].src;
}

closeBtn.onclick = () => lightbox.style.display = 'none';

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
};

prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
};