// Function to hide loader when image is loaded
function hideLoader(img) {
    const page = img.parentElement;
    page.classList.remove("loading");
    page.classList.add("loaded");
  }
  
 // Function to close the comic viewer with fade-out animation
function closeViewer() {
    const comicViewer = document.querySelector(".comic-viewer");
    const closeButton = document.querySelector(".close-button");
  
    // Apply fade-out animation
    comicViewer.classList.add("fade-out");
    closeButton.classList.add("fade-out");
  
    // Redirect to description.html after the animation completes
    setTimeout(() => {
      window.location.href = "description.html";
    }, 500); // Match the duration of the fade-out animation
  }