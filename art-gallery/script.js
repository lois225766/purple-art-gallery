
document.addEventListener("DOMContentLoaded", () => {
  const galleryButton = document.querySelector(".button");
  const gallerySection = document.querySelector("#gallery");

  if (galleryButton && gallerySection) {
    galleryButton.addEventListener("click", (event) => {
      event.preventDefault();
      gallerySection.scrollIntoView({ behavior: "smooth" });
    });
  }

  document.querySelectorAll(".art-card a").forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
