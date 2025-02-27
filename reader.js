document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const comicPages = document.querySelectorAll('.comic-page');
    const navigationControls = document.querySelector('.navigation-controls');
    const prevIssueButton = document.querySelector('.prev-issue');
    const nextIssueButton = document.querySelector('.next-issue');
    const loadingEffect = document.querySelector('.loading-effect');

    // Show loading effect when a new page is being loaded
    comicPages.forEach((page, index) => {
        page.addEventListener('load', () => {
            if (index < comicPages.length - 1) {
                loadingEffect.style.display = 'block';
                setTimeout(() => {
                    loadingEffect.style.display = 'none';
                }, 1000); // Simulate loading delay
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
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    comicPages.forEach(page => {
        pageObserver.observe(page);
    });
});