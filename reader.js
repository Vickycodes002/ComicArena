// Function to hide loader when image is loaded
function hideLoader(img) {
    const page = img.parentElement;
    page.classList.remove("loading");
  }
  
  // Function to handle next page
  function nextPage() {
    const currentPage = document.querySelector(".comic-page:not([hidden])");
    const nextPage = currentPage.nextElementSibling;
  
    if (nextPage) {
      currentPage.setAttribute("hidden", true);
      nextPage.removeAttribute("hidden");
      nextPage.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("You've reached the end of the comic!");
    }
  }
  
  // Initialize first page
  document.addEventListener("DOMContentLoaded", () => {
    const firstPage = document.querySelector(".comic-page");
    firstPage.removeAttribute("hidden");
  });