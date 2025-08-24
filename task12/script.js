
const images = [
    "Screenshot 2025-08-02 025012.png",
    "Screenshot 2024-08-11 131319.png",
    "Screenshot 2025-08-02 025012.png",
    "Screenshot 2024-08-11 131319.png"
];

let currentImageIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');



function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}


function changeLightboxImage(direction) {
    let newIndex = currentImageIndex + direction;
    
    if (newIndex >= images.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = images.length - 1;
    }
    
    currentImageIndex = newIndex;
    updateLightboxImage();
}

function updateLightboxImage() {
    lightboxImage.src = images[currentImageIndex];
}

