document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const comicPages = document.querySelectorAll('.comic-page');
    const navigationControls = document.querySelector('.navigation-controls');
    const prevIssueButton = document.querySelector('.prev-issue');
    const nextIssueButton = document.querySelector('.next-issue');
    const loadingEffect = document.querySelector('.loading-effect');

    let loadedPages = 0;

    // Function to show/hide loading effect
    function toggleLoading(show) {
        loadingEffect.style.display = show ? 'block' : 'none';
    }

    // Show loading effect before images start loading
    toggleLoading(true);

    // Track page loading
    comicPages.forEach((page, index) => {
        page.style.opacity = '0'; // Set initial opacity to 0 (hidden)

        // When a page loads
        page.addEventListener('load', () => {
            loadedPages++;
            page.style.opacity = '1'; // Fade in the page

            // Hide loading effect only after the last page loads
            if (loadedPages === comicPages.length) {
                toggleLoading(false);
            }
        });

        // If a page fails to load
        page.addEventListener('error', () => {
            loadedPages++;
            console.error(`Failed to load page ${index + 1}`);

            // Hide loading effect if all pages are done (even if some failed)
            if (loadedPages === comicPages.length) {
                toggleLoading(false);
            }
        });
    });

    // Observe when the last page is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navigationControls.classList.add('visible');
                } else {
                    navigationControls.classList.remove('visible');
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the last page is visible
    );

    if (comicPages.length > 0) {
        observer.observe(comicPages[comicPages.length - 1]);
    }

    // Navigation button functionality
    prevIssueButton.addEventListener('click', () => {
        alert('Navigate to previous issue');
        // Implement previous issue navigation logic
    });

    nextIssueButton.addEventListener('click', () => {
        alert('Navigate to next issue');
        // Implement next issue navigation logic
    });

    // Smooth fade-in effect for comic pages as they come into view
    const pageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1'; // Fade in the page
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the page is visible
    );

    comicPages.forEach((page) => {
        pageObserver.observe(page);
    });
});