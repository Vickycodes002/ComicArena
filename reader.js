document.addEventListener('DOMContentLoaded', () => {
    const skeletonLoading = document.querySelector('.skeleton-loading');
    const comicPages = document.querySelectorAll('.comic-page');
    const navigationControls = document.querySelector('.navigation-controls');

    let loadedPages = 0;

    console.log('Skeleton loading:', skeletonLoading); // Debugging
    console.log('Comic pages:', comicPages); // Debugging

    // Show skeleton loading effect before images start loading
    if (skeletonLoading) {
        skeletonLoading.style.display = 'flex';
    }

    // Function to handle page load
    const handlePageLoad = (page) => {
        loadedPages++;
        console.log('Page loaded:', page.src); // Debugging
        console.log('Loaded pages:', loadedPages); // Debugging

        page.classList.add('loaded'); // Fade in the page

        // Hide skeleton loading effect after all pages are loaded
        if (loadedPages === comicPages.length && skeletonLoading) {
            skeletonLoading.style.display = 'none';
            console.log('All pages loaded.'); // Debugging
        }
    };

    // Track page loading
    comicPages.forEach((page) => {
        page.style.opacity = '0'; // Start hidden

        // If image is already loaded (cached)
        if (page.complete) {
            console.log('Page already loaded:', page.src); // Debugging
            handlePageLoad(page);
        } else {
            page.addEventListener('load', () => handlePageLoad(page));
        }

        // If a page fails to load
        page.addEventListener('error', () => {
            loadedPages++;
            console.error('Failed to load a comic page:', page.src); // Debugging

            // Hide skeleton loading effect if all pages are done (even if some failed)
            if (loadedPages === comicPages.length && skeletonLoading) {
                skeletonLoading.style.display = 'none';
                console.log('All pages attempted to load.'); // Debugging
            }
        });
    });

    // Show navigation controls when the last page is in view
    if (comicPages.length > 0 && navigationControls) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target === comicPages[comicPages.length - 1]) {
                        navigationControls.classList.add('visible');
                        console.log('Last page in view.'); // Debugging
                    } else {
                        navigationControls.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(comicPages[comicPages.length - 1]);
    }

    // Navigation button functionality
    const prevIssueButton = document.querySelector('.prev-issue');
    const nextIssueButton = document.querySelector('.next-issue');

    if (prevIssueButton) {
        prevIssueButton.addEventListener('click', () => {
            alert('Navigate to previous issue');
        });
    }

    if (nextIssueButton) {
        nextIssueButton.addEventListener('click', () => {
            alert('Navigate to next issue');
        });
    }
});