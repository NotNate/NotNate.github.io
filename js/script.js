document.addEventListener("DOMContentLoaded", (event) => {
  // Code for smooth scroll animation
  const navLinks = document.querySelectorAll("nav ul li a");

  for (const link of navLinks) {
    link.addEventListener("click", function (e) {
      // Check if the link is not one of GitHub, Resume, or LinkedIn
      if (
        !this.href.includes("github.com") &&
        !this.href.includes("linkedin.com") &&
        !this.href.endsWith(".pdf")
      ) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const professions = [
    " student",
    "n app developer",
    " machine learning enthusiast",
  ];
  let professionIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  const typewriterElement = document.querySelector("#profession");

  function typeWriterEffect() {
    if (professionIndex >= professions.length) {
      professionIndex = 0;
    }

    if (!isDeleting && charIndex <= professions[professionIndex].length) {
      currentText = professions[professionIndex].slice(0, ++charIndex);
    } else if (isDeleting && charIndex > 0) {
      currentText = professions[professionIndex].slice(0, --charIndex);
    }

    typewriterElement.textContent = currentText;

    if (!isDeleting && charIndex === professions[professionIndex].length) {
      setTimeout(() => (isDeleting = true), 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      professionIndex++;
    }

    setTimeout(typeWriterEffect, isDeleting ? 50 : 100); // Speed of typing
  }

  typeWriterEffect();
});
