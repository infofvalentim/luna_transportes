/**
 * forms.js
 * Gerencia os formulários de cotação e contato.
 * O feedback usa aria-live="polite" para leitores de tela.
 */

function showFeedback(id, msg, isError = false) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.style.color = isError ? "#dc2626" : "#16a34a";

  setTimeout(() => { el.textContent = ""; }, 6000);
}

export function initForms() {
  // ── Formulário de Cotação ──
  const quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", e => {
      e.preventDefault();
      showFeedback(
        "quoteFeedback",
        "✅ Cotação solicitada! Entraremos em contato em até 2 horas úteis."
      );
      quoteForm.reset();
    });
  }

  // ── Formulário de Contato ──
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      showFeedback(
        "contactFeedback",
        "✅ Mensagem enviada! Entraremos em contato em breve."
      );
      contactForm.reset();
    });
  }
}
