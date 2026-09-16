document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
  const navMenu = document.querySelector(".header-right");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});
