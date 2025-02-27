document.addEventListener('DOMContentLoaded', () => {
    // Toggle buttons functionality
    const toggleButtons = document.querySelectorAll('.toggle-buttons button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Filter functionality (example)
    const genreFilter = document.getElementById('genre');
    const releaseYearFilter = document.getElementById('release-year');
    const comicsGrid = document.querySelector('.comics-grid');

    genreFilter.addEventListener('change', filterComics);
    releaseYearFilter.addEventListener('change', filterComics);

    function filterComics() {
        const selectedGenre = genreFilter.value;
        const selectedYear = releaseYearFilter.value;

        // Example filtering logic (update based on your data)
        const comics = document.querySelectorAll('.comic-card');
        comics.forEach(comic => {
            const comicGenre = comic.querySelector('.genre').textContent.toLowerCase();
            const comicYear = comic.dataset.year; // Add data-year attribute to comic cards

            if ((selectedGenre === 'all' || comicGenre === selectedGenre) &&
                (selectedYear === 'latest' || selectedYear === 'oldest')) {
                comic.style.display = 'block';
            } else {
                comic.style.display = 'none';
            }
        });
    }
});