// JavaScript for simple interactivity

document.getElementById("contactButton").addEventListener("click", function () {
  alert("Thanks for your interest! I will get back to you soon.");
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
