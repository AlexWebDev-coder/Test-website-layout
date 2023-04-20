"use strict";

const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach((item) => item.addEventListener("click", open));

function open(e) {
  const tabTarget = e.currenttarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach((item) => item.classList.remove("tabs__btn-item--active"));

  tabContent.forEach((item) =>
    item.classList.remove("tabs__content-item--active")
  );
  tabTarget.classList.add("tabs__btn-item--active");
  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active");
}
