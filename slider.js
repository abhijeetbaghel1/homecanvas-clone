console.log('Slider script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (!slides.length || !dots.length || !prevBtn || !nextBtn) {
        console.error('Required elements not found!');
        return;
    }
    
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 3000; // 3 seconds per slide
    const transitionSpeed = 800; // Animation speed in milliseconds

    // Preload all images
    function preloadImages() {
        slides.forEach(slide => {
            const img = new Image();
            img.src = slide.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
        });
    }

    // Initialize slider
    function initSlider() {
        console.log('Initializing slider with', slides.length, 'slides');
        
        // Show first slide
        showSlide(0);
        
        // Preload images
        preloadImages();
        
        // Start autoplay
        startSlideShow();
        
        // Pause on hover
        const slider = document.querySelector('.slider');
        if (slider) {
            slider.addEventListener('mouseenter', pauseSlideShow);
            slider.addEventListener('mouseleave', startSlideShow);
            
            // Touch events for mobile
            let touchStartX = 0;
            let touchEndX = 0;
            
            slider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                pauseSlideShow();
            }, { passive: true });
            
            slider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startSlideShow();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50; // Minimum distance to trigger slide change
                const swipeDistance = touchEndX - touchStartX;
                
                if (Math.abs(swipeDistance) > swipeThreshold) {
                    if (swipeDistance > 0) {
                        prevSlide();
                    } else {
                        nextSlide();
                    }
                }
            }
        }
        
        // Navigation events
        prevBtn.addEventListener('click', () => {
            pauseSlideShow();
            prevSlide();
            startSlideShow();
        });
        
        nextBtn.addEventListener('click', () => {
            pauseSlideShow();
            nextSlide();
            startSlideShow();
        });
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (index !== currentSlide) {
                    pauseSlideShow();
                    goToSlide(index);
                    startSlideShow();
                }
            });
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                pauseSlideShow();
                prevSlide();
                startSlideShow();
            } else if (e.key === 'ArrowRight') {
                pauseSlideShow();
                nextSlide();
                startSlideShow();
            }
        });
    }
    
    // Show specific slide with animation
    function showSlide(index) {
        // Update current slide index
        currentSlide = (index + slides.length) % slides.length;
        
        // Update active states
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
        
        console.log('Showing slide', currentSlide);
    }
    
    // Go to specific slide
    function goToSlide(index) {
        // Add transition effect
        slides[currentSlide].style.transition = `opacity ${transitionSpeed}ms ease-in-out`;
        slides[currentSlide].style.opacity = '0';
        
        // After fade out, change slide and fade in
        setTimeout(() => {
            // Reset all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.transition = '';
                slide.style.opacity = '';
            });
            
            // Show new slide
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
            
            console.log('Went to slide', currentSlide);
        }, transitionSpeed);
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Start slideshow
    function startSlideShow() {
        console.log('Starting slideshow');
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextSlide();
        }, slideDuration);
    }
    
    // Pause slideshow
    function pauseSlideShow() {
        console.log('Pausing slideshow');
        clearInterval(slideInterval);
    }
    
    // Initialize the slider
    initSlider();
    
    // Make functions available globally for debugging
    window.slider = {
        next: nextSlide,
        prev: prevSlide,
        goTo: goToSlide,
        play: startSlideShow,
        pause: pauseSlideShow
    };
});
