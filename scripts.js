// You can add animations here
window.addEventListener("load", () => {
  const skillCards = document.querySelectorAll(".skill-card");
  const projectCards = document.querySelectorAll(".project-card");

  skillCards.forEach((card) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.opacity = 1;
    }, 300);
  });

  projectCards.forEach((card) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.opacity = 1;
    }, 500);
  });
});
