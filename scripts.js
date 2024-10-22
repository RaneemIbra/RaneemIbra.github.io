// Add animations when sections come into view
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(100px)";
    }
  });
});

// Smooth scrolling for navigation
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
