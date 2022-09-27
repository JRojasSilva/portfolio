// Seleccion Menu hambuerguesa
const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Ir arriba al seleccionar
const scrollUp = document.querySelector("#scroll-up");

// Sleccionar los link
const navLink = document.querySelectorAll(".nav-link");

// funcion menu hamburguesa
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

//Cerrar el menu
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// funcionalidad del scroll
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
