document.addEventListener('DOMContentLoaded', () => {
    // Select all comic pages
    const comicPages = document.querySelectorAll('.comic-page');

    // Loop through each page and apply loading logic
    comicPages.forEach((page, index) => {
        // Create a loading effect element for each page
        const loadingEffect = document.createElement('div');
        loadingEffect.classList.add('loading-effect');
        loadingEffect.innerHTML = '<img src="./media/Comics Arena LogoV2.png" alt="Loading..." class="loading-logo">';
        page.parentElement.insertBefore(loadingEffect, page);

        // Hide the page initially
        page.style.opacity = '0';

        // Check if the image is already loaded (e.g., cached)
        if (page.complete) {
            // If already loaded, hide the loading effect and show the page
            loadingEffect.style.display = 'none';
            page.style.opacity = '1';
        } else {
            // Show the loading effect while the page is loading
            loadingEffect.style.display = 'block';
        }

        // When the page is fully loaded
        page.addEventListener('load', () => {
            loadingEffect.style.display = 'none'; // Hide loading effect
            page.style.opacity = '1'; // Show the page
        });

        // If the page fails to load
        page.addEventListener('error', () => {
            console.error(`Failed to load page ${index + 1}`);
            loadingEffect.style.display = 'none'; // Hide loading effect even if the page fails
        });
    });

    // Navigation buttons logic
    const navigationControls = document.querySelector('.navigation-controls');
    const prevIssueButton = document.querySelector('.prev-issue');
    const nextIssueButton = document.querySelector('.next-issue');

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
    });

    nextIssueButton.addEventListener('click', () => {
        alert('Navigate to next issue');
    });
});