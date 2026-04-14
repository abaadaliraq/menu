// CATEGORY ACTIVE STATE
const categoryButtons = document.querySelectorAll(".category-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// FADE ON SCROLL
const fadeElements = document.querySelectorAll(".fade-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeElements.forEach((el) => observer.observe(el));

// OPTIONAL SEARCH DEMO
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {
  searchInput.parentElement.style.boxShadow = "0 12px 24px rgba(0,0,0,0.28)";
});

searchInput.addEventListener("blur", () => {
  searchInput.parentElement.style.boxShadow = "";
});