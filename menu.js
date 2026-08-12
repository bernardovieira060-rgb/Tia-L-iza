// abre/fecha o menu no celular
const botaoMenu = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav-principal");

if (botaoMenu && nav) {
  botaoMenu.addEventListener("click", () => {
    nav.classList.toggle("aberto");
  });

  // fecha o menu quando clica em um link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("aberto"));
  });
}