"use strict";

const burgerMenu = document
  .querySelector(".js-burger-menu");

const siteList = document
  .querySelector(".site-list");

if (burgerMenu && siteList) {
  burgerMenu
    .addEventListener("click", () => {
      burgerMenu.classList.toggle("burger-menu--opened")
      siteList.classList.toggle("site-list--opened");

      if (burgerMenu.classList.contains("burger-menu--opened")) {
        burgerMenu.setAttribute("aria-label", "Закрыть меню")
      } else {
        burgerMenu.setAttribute("aria-label", "Открыть меню")
      }
    });
}
