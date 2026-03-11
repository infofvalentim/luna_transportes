/**
 * carousel.js
 * Carrossel automático do Hero com fade entre slides.
 * - Troca automática a cada 5 segundos
 * - Pausa ao passar o mouse
 * - Dots clicáveis para navegar
 * - Acessível com aria-selected
 */

export function initCarousel() {
  const slides = document.querySelectorAll(".hero__slide");
  const dots   = document.querySelectorAll(".hero__dot");

  if (!slides.length || !dots.length) return;

  let current  = 0;
  let interval = null;
  const DELAY  = 7000; // 5 segundos

  function goTo(index) {
    // Remove ativo do slide e dot atual
    slides[current].classList.remove("hero__slide--active");
    dots[current].classList.remove("hero__dot--active");
    dots[current].setAttribute("aria-selected", "false");

    // Ativa o novo
    current = index;
    slides[current].classList.add("hero__slide--active");
    dots[current].classList.add("hero__dot--active");
    dots[current].setAttribute("aria-selected", "true");
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function startAuto() {
    interval = setInterval(next, DELAY);
  }

  function stopAuto() {
    clearInterval(interval);
  }

  // Dots clicáveis
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      stopAuto();
      goTo(i);
      startAuto(); // reinicia o timer após clique manual
    });
  });

  // Pausa ao hover no hero
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.addEventListener("mouseenter", stopAuto);
    hero.addEventListener("mouseleave", startAuto);
  }

  // Inicia
  startAuto();
}
