// Optimized JavaScript for ComicArena with Mobile Enhancements
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and optimized');
    
    // Landing Page Transition
    const landingPage = document.getElementById('landing-page');
    const enterButton = document.getElementById('enter-button');
    const mainWebsite = document.getElementById('main-website');
    
    if (enterButton && landingPage && mainWebsite) {
        enterButton.addEventListener('click', () => {
            landingPage.style.opacity = '0';
            
            // Use requestAnimationFrame for smoother animation
            requestAnimationFrame(() => {
                setTimeout(() => {
                    landingPage.style.display = 'none';
                    mainWebsite.style.display = 'block';
                    
                    // Force reflow to ensure animation starts
                    void mainWebsite.offsetWidth;
                    mainWebsite.style.opacity = '1';
                }, 500);
            });
        });
    }
    
    // Scrolling Header Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialize Hero Carousel with optimized settings
    const initHeroCarousel = () => {
        $('.hero-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 800,
            animateOut: 'fadeOut',
            items: 1,
            touchDrag: true,
            mouseDrag: false,
            lazyLoad: true,
            responsiveRefreshRate: 100
        });
    };
    
    // Initialize Comic Carousels with optimized settings
    const initComicCarousels = () => {
        $('.comic-section .owl-carousel').owlCarousel({
            loop: true,
            margin: 16,
            nav: true,
            dots: false,
            responsive: {
                0: { items: 2 },
                480: { items: 2 },
                768: { items: 3 },
                1024: { items: 4 }
            },
            smartSpeed: 400,
            touchDrag: true,
            mouseDrag: true,
            lazyLoad: true,
            responsiveRefreshRate: 100
        });
        
        $('.upcoming-carousel').owlCarousel({
            loop: true,
            margin: 16,
            nav: true,
            dots: false,
            responsive: {
                0: { items: 2 },
                600: { items: 3 },
                1000: { items: 4 }
            },
            smartSpeed: 400,
            touchDrag: true,
            mouseDrag: true,
            lazyLoad: true,
            responsiveRefreshRate: 100
        });
    };
    
    // Initialize Special Carousel for mobile
    const initSpecialCarousel = () => {
        $('.special-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600,
            touchDrag: true,
            mouseDrag: false
        });
    };
    
    // Optimized Search Functionality
    const setupSearch = () => {
        const searchContainer = document.querySelector('.search-container');
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        
        if (!searchContainer || !searchInput || !searchButton) return;
        
        // Toggle search expansion
        searchButton.addEventListener('click', (e) => {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            } else {
                searchInput.value = '';
            }
        });
        
        // Debounced search function
        let searchTimeout;
        const performSearch = () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = searchInput.value.trim().toLowerCase();
                document.querySelectorAll('.comic-item, .upcoming-comic-item, .special-item').forEach(item => {
                    const title = item.querySelector('h3').textContent.toLowerCase();
                    item.style.display = title.includes(searchTerm) ? 'block' : 'none';
                });
            }, 200);
        };
        
        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    };
    
    // Lazy Load Images with Intersection Observer
    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '200px 0px' // Load images 200px before they come into view
            });

            lazyImages.forEach(img => {
                if (img.hasAttribute('data-src')) {
                    imageObserver.observe(img);
                }
            });
        }
    };
    
    // Initialize components with requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            initHeroCarousel();
            initComicCarousels();
            initSpecialCarousel();
            setupSearch();
            lazyLoadImages();
        }, { timeout: 1000 });
    } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
            initHeroCarousel();
            initComicCarousels();
            initSpecialCarousel();
            setupSearch();
            lazyLoadImages();
        }, 300);
    }
    
    // Optimized resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            $('.owl-carousel').trigger('refresh.owl.carousel');
        }, 100);
    });
    
    // Add data-src attributes for lazy loading
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.dataset.src = img.src;
        img.src = '';
    });
});