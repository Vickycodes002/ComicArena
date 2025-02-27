document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const comicPages = document.querySelectorAll('.comic-page');
    const navigationControls = document.querySelector('.navigation-controls');
    const prevIssueButton = document.querySelector('.prev-issue');
    const nextIssueButton = document.querySelector('.next-issue');
    const loadingEffect = document.querySelector('.loading-effect');

    // Track loaded pages
    let loadedPages = 0;

    // Show loading effect when a new page is being loaded
    comicPages.forEach((page, index) => {
        // Set initial opacity to 0 for all pages
        page.style.opacity = '0';

        // When a page loads, increment the counter and show it
        page.addEventListener('load', () => {
            loadedPages++;
            page.style.opacity = '1'; // Show the page

            // Show loading effect only if there are more pages to load
            if (loadedPages < comicPages.length) {
                loadingEffect.style.display = 'block';
            } else {
                loadingEffect.style.display = 'none'; // Hide loading effect when all pages are loaded
            }
        });

        // If a page fails to load, still increment the counter
        page.addEventListener('error', () => {
            loadedPages++;
            if (loadedPages === comicPages.length) {
                loadingEffect.style.display = 'none'; // Hide loading effect if all pages are done
            }
        });
    });

    // Show navigation controls when the last page is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target === comicPages[comicPages.length - 1]) {
                navigationControls.classList.add('visible');
            } else {
                navigationControls.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    // Observe the last comic page
    if (comicPages.length > 0) {
        observer.observe(comicPages[comicPages.length - 1]);
    }

    // Navigation button functionality
    prevIssueButton.addEventListener('click', () => {
        alert('Navigate to previous issue');
        // Add logic to load the previous issue
    });

    nextIssueButton.addEventListener('click', () => {
        alert('Navigate to next issue');
        // Add logic to load the next issue
    });

    // Smooth fade-in effect for comic pages as they come into view
    const pageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1'; // Fade in the page
            }
        });
    }, { threshold: 0.1 });

    comicPages.forEach(page => {
        pageObserver.observe(page);
    });
});