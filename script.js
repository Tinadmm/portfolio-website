// Example JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
  // Add a simple console log to test if the JS is working
  console.log("JavaScript is linked and working!");

  // You can add more interactive features here
  const contactButton = document.querySelector(".contact-button");

  contactButton.addEventListener("click", function () {
    alert("Redirecting you to send an email...");
  });
});
