/**
 * menu.js
 * Controla o menu mobile com suporte a teclado e ARIA
 */

export function initMenu() {
  const btn  = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (!btn || !menu) return;

  // Abre/fecha ao clicar no botão
  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("nav--open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.setAttribute("aria-label", isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação");
  });

  // Fecha ao clicar em qualquer link interno
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => closeMenu());
  });

  // Fecha ao pressionar ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.classList.contains("nav--open")) {
      closeMenu();
      btn.focus(); // devolve foco ao botão
    }
  });

  // Fecha ao clicar fora do menu
  document.addEventListener("click", e => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });

  function closeMenu() {
    menu.classList.remove("nav--open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Abrir menu de navegação");
  }
}
