// Smooth scroll for navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form validation and message display
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    formStatus.textContent = "Thank you! Your message has been sent.";
    formStatus.style.color = "green";
    form.reset();
  } else {
    formStatus.textContent = "Please fill out all fields.";
    formStatus.style.color = "red";
  }
});

// Show project details on hover
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  project.addEventListener("mouseenter", function () {
    const description = this.getAttribute("data-description");
    this.innerHTML += `<p class="project-description">${description}</p>`;
  });

  project.addEventListener("mouseleave", function () {
    const descriptionElem = this.querySelector(".project-description");
    if (descriptionElem) {
      descriptionElem.remove();
    }
  });
});
