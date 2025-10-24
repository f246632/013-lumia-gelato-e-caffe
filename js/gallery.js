// ===========================
// Gallery & Lightbox
// ===========================

document.addEventListener('DOMContentLoaded', function() {

    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => item.getAttribute('data-img'));

    // ===========================
    // Open Lightbox
    // ===========================
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openLightbox(images[currentImageIndex]);
        });
    });

    function openLightbox(imageSrc) {
        lightboxImg.src = imageSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Preload next and previous images for smooth navigation
        preloadImages();
    }

    // ===========================
    // Close Lightbox
    // ===========================
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ===========================
    // Navigate Images
    // ===========================
    lightboxPrev.addEventListener('click', function(e) {
        e.stopPropagation();
        navigateImage(-1);
    });

    lightboxNext.addEventListener('click', function(e) {
        e.stopPropagation();
        navigateImage(1);
    });

    function navigateImage(direction) {
        currentImageIndex += direction;

        // Loop around
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        // Add fade transition
        lightboxImg.style.opacity = '0';

        setTimeout(() => {
            lightboxImg.src = images[currentImageIndex];
            lightboxImg.style.opacity = '1';
            preloadImages();
        }, 200);
    }

    // ===========================
    // Keyboard Navigation
    // ===========================
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'ArrowLeft') {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
            navigateImage(1);
        }
    });

    // ===========================
    // Touch/Swipe Support
    // ===========================
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;

        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next image
            navigateImage(1);
        }

        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous image
            navigateImage(-1);
        }
    }

    // ===========================
    // Preload Images
    // ===========================
    function preloadImages() {
        // Preload next image
        const nextIndex = (currentImageIndex + 1) % images.length;
        const nextImg = new Image();
        nextImg.src = images[nextIndex];

        // Preload previous image
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        const prevImg = new Image();
        prevImg.src = images[prevIndex];
    }

    // ===========================
    // Gallery Hover Effects
    // ===========================
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.gallery-overlay');

        item.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
            overlay.style.opacity = '1';
        });

        item.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
            overlay.style.opacity = '0';
        });
    });

    // ===========================
    // Add smooth transition to lightbox image
    // ===========================
    lightboxImg.style.transition = 'opacity 0.3s ease';

    // ===========================
    // Prevent right-click on gallery images (optional)
    // ===========================
    galleryItems.forEach(item => {
        item.addEventListener('contextmenu', function(e) {
            // Uncomment to prevent right-click
            // e.preventDefault();
        });
    });

    // ===========================
    // Gallery Loading Animation
    // ===========================
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    });

    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.1 });

    galleryItems.forEach(item => galleryObserver.observe(item));

    // ===========================
    // Image Counter (Optional)
    // ===========================
    const createImageCounter = () => {
        const counter = document.createElement('div');
        counter.style.cssText = `
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 1.2rem;
            font-weight: 500;
            background: rgba(0, 0, 0, 0.5);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            z-index: 10000;
        `;
        lightbox.appendChild(counter);
        return counter;
    };

    const imageCounter = createImageCounter();

    function updateCounter() {
        imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }

    // Update counter when opening lightbox or navigating
    const originalOpenLightbox = openLightbox;
    openLightbox = function(imageSrc) {
        originalOpenLightbox(imageSrc);
        updateCounter();
    };

    const originalNavigateImage = navigateImage;
    navigateImage = function(direction) {
        originalNavigateImage(direction);
        updateCounter();
    };

    // ===========================
    // Zoom on Image (Double Click)
    // ===========================
    let isZoomed = false;

    lightboxImg.addEventListener('dblclick', function(e) {
        e.stopPropagation();

        if (!isZoomed) {
            this.style.transform = 'scale(1.5)';
            this.style.cursor = 'zoom-out';
            isZoomed = true;
        } else {
            this.style.transform = 'scale(1)';
            this.style.cursor = 'default';
            isZoomed = false;
        }
    });

    lightboxImg.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    // Reset zoom when changing images
    lightboxPrev.addEventListener('click', resetZoom);
    lightboxNext.addEventListener('click', resetZoom);
    lightboxClose.addEventListener('click', resetZoom);

    function resetZoom() {
        lightboxImg.style.transform = 'scale(1)';
        lightboxImg.style.cursor = 'default';
        isZoomed = false;
    }

    // ===========================
    // Console Info
    // ===========================
    console.log(`%c📸 Gallery initialized with ${images.length} images`, 'color: #d4a574; font-weight: bold;');
});
