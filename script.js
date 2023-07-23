const hamburgerMenuIcon = document.getElementById("mobile-hamburger-icon");
const mobileMenu = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

hamburgerMenuIcon.addEventListener("click", function () {
  console.log("hamburger clicked");
  mobileMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  console.log("close button clicked");
  mobileMenu.classList.add("hidden");
});
