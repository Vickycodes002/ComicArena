document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded!');

    // Landing Page Transition
    const landingPage = document.getElementById('landing-page');
    const enterButton = document.getElementById('enter-button');
    const mainWebsite = document.getElementById('main-website');

    if (enterButton && landingPage && mainWebsite) {
        enterButton.addEventListener('click', () => {
            console.log('Enter button clicked');
            landingPage.style.opacity = '0';
            setTimeout(() => {
                landingPage.style.display = 'none';
                mainWebsite.style.display = 'block';
            }, 500); // Match the duration of the fade-out animation
        });
    } else {
        console.error('Landing page elements not found!');
    }

    // Initialize Owl Carousel for Hero Section
    $('.hero-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // Initialize Owl Carousel for Trending Comics and New Releases
    $('.comic-section .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Navigation Bar (Mobile)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            console.log('Hamburger menu clicked');
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Hamburger menu or nav links not found!');
    }
});