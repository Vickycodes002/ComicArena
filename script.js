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

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded!');

    // Like Button Functionality
    const loveButton = document.querySelector('.love-button');
    if (loveButton) {
        loveButton.addEventListener('click', () => {
            console.log('Comic liked!');
            loveButton.classList.toggle('liked');
        });
    }

    // Notify Button Functionality
    const notifyButton = document.querySelector('.notify-button');
    if (notifyButton) {
        notifyButton.addEventListener('click', () => {
            console.log('Notifications enabled!');
            notifyButton.classList.toggle('notified');
        });
    }
});

$(document).ready(function () {
    $('.upcoming-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

// search bar

document.addEventListener('DOMContentLoaded', () => {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const comicItems = document.querySelectorAll('.comic-item'); // Select all comic items

    // Toggle search bar expansion
    searchButton.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus(); // Focus on the input when expanded
        }
    });

    // Function to filter comics based on search input
    function filterComics() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        comicItems.forEach((comic) => {
            const comicTitle = comic.querySelector('h3').textContent.toLowerCase();
            if (comicTitle.includes(searchTerm)) {
                comic.style.display = 'block'; // Show matching comics
            } else {
                comic.style.display = 'none'; // Hide non-matching comics
            }
        });
    }

    // Trigger search on button click
    searchButton.addEventListener('click', (e) => {
        if (searchContainer.classList.contains('active')) {
            e.preventDefault(); // Prevent default behavior if search bar is expanded
            filterComics();
        }
    });

    // Trigger search on pressing Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterComics();
        }
    });

    // Clear search and show all comics when input is empty
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() === '') {
            comicItems.forEach((comic) => {
                comic.style.display = 'block'; // Show all comics
            });
        }
    });
});