/* ═══════════════════════════════════════
   MENU MOBILE
═══════════════════════════════════════ */
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.remove("open");
  });
});


/* ═══════════════════════════════════════
   CONTADOR COM INTERSECTIONOBSERVER
═══════════════════════════════════════ */
function formatNumber(n) {
  return n.toLocaleString("pt-BR");
}

function startCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const duration = 1800;
  const steps = 60;
  const increment = target / steps;
  let step = 0;

  const timer = setInterval(function () {
    step++;
    const current = Math.min(Math.ceil(increment * step), target);
    counter.innerText = formatNumber(current);
    if (current >= target) {
      clearInterval(timer);
      counter.innerText = formatNumber(target);
    }
  }, duration / steps);
}

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

counters.forEach(function (counter) {
  counter.innerText = "0";
  counterObserver.observe(counter);
});


/* ═══════════════════════════════════════
   BOTÃO VOLTAR AO TOPO
═══════════════════════════════════════ */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ═══════════════════════════════════════
   FORMULÁRIO DE COTAÇÃO
═══════════════════════════════════════ */
function handleQuote(event) {
  event.preventDefault();
  const feedback = document.getElementById("quoteFeedback");
  feedback.style.color = "#16a34a";
  feedback.innerText = "✅ Cotação solicitada! Entraremos em contato em até 2 horas úteis.";
  event.target.reset();
  setTimeout(function () { feedback.innerText = ""; }, 6000);
}


/* ═══════════════════════════════════════
   FORMULÁRIO DE CONTATO
═══════════════════════════════════════ */
function handleContact(event) {
  event.preventDefault();
  const feedback = document.getElementById("contactFeedback");
  feedback.style.color = "#16a34a";
  feedback.innerText = "✅ Mensagem enviada! Entraremos em contato em breve.";
  event.target.reset();
  setTimeout(function () { feedback.innerText = ""; }, 6000);
}


/* ═══════════════════════════════════════
   HEADER COM SOMBRA AO ROLAR
═══════════════════════════════════════ */
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 24px rgba(0,0,0,0.14)";
  } else {
    header.style.boxShadow = "0 2px 16px rgba(0,0,0,0.08)";
  }
});


/* ═══════════════════════════════════════
   SCROLL SUAVE NOS LINKS INTERNOS
═══════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const headerH = document.querySelector("header").offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 10;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  });
});


/* ═══════════════════════════════════════
   ANIMAÇÃO DE ENTRADA NAS SEÇÕES (fade-in)
═══════════════════════════════════════ */
const fadeElements = document.querySelectorAll(
  ".card, .fleet-card, .testimonial-card, .coverage-item, .about-text, .contact-item"
);

const fadeObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, 80 * (i % 6));
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach(function (el) {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  fadeObserver.observe(el);
});
