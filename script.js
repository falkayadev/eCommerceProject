// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeBtn = document.getElementById("close");

let isNavOpen = false;

bar.addEventListener("click", () => {
  if (!isNavOpen) {
    nav.classList.add("active");
  }
  isNavOpen = !isNavOpen;
});

closeBtn.addEventListener("click", () => {
  if (isNavOpen) {
    nav.classList.remove("active");
  }
  isNavOpen = !isNavOpen;
});
