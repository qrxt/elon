"use strict";

const burgerMenu = document
  .querySelector(".js-burger-menu");

if (burgerMenu) {
  burgerMenu
    .addEventListener("click", () => {
      burgerMenu.classList.toggle("burger-menu--opened")

      if (burgerMenu.classList.contains("burger-menu--opened")) {
        burgerMenu.setAttribute("aria-label", "Закрыть меню")
      } else {
        burgerMenu.setAttribute("aria-label", "Открыть меню")
      }
    });
}
