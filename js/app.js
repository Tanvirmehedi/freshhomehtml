"use strict";

const btn = document.querySelector(".navBtn");

const togle = document.querySelector(".nav-item");

const navLink = document.querySelectorAll(".nav-item li");

const openMenu = () => {
  togle.classList.toggle("addManu");
  navLink.forEach((elm, index) => {
    if (elm.style.animation) {
      elm.style.animation = "";
    } else {
      elm.style.animation = `navbarAnimation .5s ease-in-out forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
};

btn.addEventListener("click", openMenu);
