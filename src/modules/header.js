const nav = document.querySelector("#header-nav"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

function toggleMenu() {
  nav.classList.toggle('hidden')
}

navToggle.addEventListener("click", toggleMenu)
nav.addEventListener("click", toggleMenu)