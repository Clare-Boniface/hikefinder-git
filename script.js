const hamburgerMenuIcon = document.getElementById("mobile-hamburger-icon");
const mobileMenu = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

hamburgerMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});
