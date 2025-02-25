// Landing Page Transition
const landingPage = document.getElementById('landing-page');
const mainWebsite = document.getElementById('main-website');
const enterButton = document.getElementById('enter-button');

enterButton.addEventListener('click', () => {
    landingPage.style.opacity = '0';
    setTimeout(() => {
        landingPage.style.display = 'none';
        mainWebsite.style.display = 'block';
    }, 500); // Match the duration of the fade-out animation
});

// Hero Carousel
const heroCarousel = document.querySelector('.hero-carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Auto-rotate carousel
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});