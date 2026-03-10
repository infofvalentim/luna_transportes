/**
 * scroll.js
 * - Sombra no header ao rolar
 * - Botão "voltar ao topo"
 * - Scroll suave com offset do header fixo
 * - Fade-in das seções e cards ao entrar na viewport
 */

// ── Header com sombra ao rolar ──
export function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 50);
  }, { passive: true });
}

// ── Botão voltar ao topo ──
export function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("back-to-top--visible", window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Suporte a teclado
  btn.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// ── Scroll suave com offset do header fixo ──
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      const headerH = document.querySelector("header")?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 10;

      window.scrollTo({ top, behavior: "smooth" });

      // Foco semântico: move o foco para a seção alvo
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });
}

// ── Fade-in das seções e cards ao entrar na viewport ──
export function initReveal() {
  const SELECTORS = [
    ".card",
    ".fleet-card",
    ".testimonial-card",
    ".coverage__item",
    ".about__text",
    ".contact-item",
    ".stat",
  ].join(", ");

  const elements = document.querySelectorAll(SELECTORS);
  if (!elements.length) return;

  elements.forEach(el => {
    el.classList.add("section-reveal");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Delay escalonado para cards na mesma linha
        setTimeout(() => {
          entry.target.classList.add("section-reveal--visible");
        }, 80 * (i % 6));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}
