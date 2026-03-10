# 🚚 Fvalentim Transportes

Site institucional fictício desenvolvido para fins de **estudo e prática** de desenvolvimento web front-end.

🔗 **[Ver site ao vivo](https://infofvalentim.github.io/fvalentim_transportes/)**

---

## 📚 Objetivo

Praticar a criação de um site institucional completo do zero, aplicando conceitos de HTML semântico, CSS moderno e JavaScript vanilla — sem frameworks ou ferramentas de build.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica e acessível
- **CSS3** — variáveis CSS, Grid, Flexbox, animações e responsividade
- **JavaScript** (ES6+) — sem frameworks, vanilla puro
- **[Font Awesome 6.5](https://fontawesome.com/)** — ícones via CDN
- **[Google Fonts](https://fonts.google.com/)** — Barlow Condensed + Montserrat
- **GitHub Pages** — hospedagem estática gratuita

---

## 🧠 Conceitos Praticados

- Estrutura de layout com **CSS Grid** e **Flexbox**
- **Variáveis CSS** (`--blue`, `--red`, etc.) para manutenção de tema
- **Animações CSS** (`@keyframes`, `transition`)
- **JavaScript sem jQuery**: manipulação de DOM, eventos, timers
- **IntersectionObserver API** — para acionar animações ao rolar a página
- Design **responsivo** com `@media queries`
- Boas práticas de **SEO** (meta tags, Open Graph, alt em imagens)
- **Acessibilidade** básica (`aria-label`, `title` em iframes, semântica HTML)
- Uso de **CDN externo** (Font Awesome, Google Fonts)

---

## 🗂️ Estrutura de Seções

| Seção | O que pratica |
|---|---|
| **Hero** | Background fixo, overlay com gradiente, animação CSS |
| **Sobre** | CSS Grid assimétrico, cards posicionados com `absolute` |
| **Serviços** | Grid responsivo com `auto-fit/minmax`, hover com transform |
| **Frota** | Grid com imagens, `object-fit`, efeito scale no hover |
| **Resultados** | `IntersectionObserver` + contador animado com `setInterval` |
| **Cobertura** | Grid de tags com `border-left` e hover com `translateX` |
| **Depoimentos** | Cards com pseudo-elementos `::before/::after` para aspas |
| **Cotação** | Formulário com `select`, `grid` de campos, validação nativa |
| **Contato** | Layout de dois blocos, `focus` com `box-shadow` |
| **Mapa** | Embed de Google Maps com `loading="lazy"` |

---

## 📁 Estrutura de Arquivos

```
fvalentim_transportes/
├── index.html          # Estrutura e conteúdo
├── style.css           # Estilos, layout e responsividade
├── script.js           # Interações e animações
├── README.md           # Documentação
└── images/
    ├── hero.jpg        # Imagem de fundo do banner
    ├── truck.png       # Caminhão animado
    ├── fleet2.png      # Foto de frota
    ├── fleet3.png      # Foto de frota
    └── favicon.ico     # Ícone do site
```

---

## ✨ Funcionalidades Implementadas

- ✅ Menu responsivo com toggle mobile
- ✅ Animação do caminhão percorrendo a tela (`@keyframes`)
- ✅ Contadores animados disparados pelo scroll (`IntersectionObserver`)
- ✅ Formulário de cotação com múltiplos campos
- ✅ Formulário de contato com feedback visual
- ✅ Botão WhatsApp fixo com ícone SVG
- ✅ Botão "Voltar ao topo" com aparição progressiva
- ✅ Scroll suave em links internos
- ✅ Fade-in nos cards ao entrar na viewport
- ✅ Open Graph tags para preview em redes sociais
- ✅ Layout 100% responsivo

---

## 🚀 Como Rodar Localmente

```bash
git clone https://github.com/infofvalentim/fvalentim_transportes.git
cd fvalentim_transportes
# Abra o index.html diretamente no navegador
```

Ou use a extensão **Live Server** no VS Code para hot reload durante o desenvolvimento.

---

## 📈 Próximos Passos de Estudo

- [ ] Refatorar o CSS usando metodologia **BEM**
- [ ] Recriar o projeto usando **React** ou **Vue**
- [ ] Adicionar **SASS/SCSS** no lugar do CSS puro
- [ ] Integrar um formulário real com **Formspree** ou **EmailJS**
- [ ] Implementar **Google Analytics**
- [ ] Criar testes com **Jest** ou **Cypress**

---

## 👨‍💻 Autor

Desenvolvido por **infofvalentim** — projeto de estudo front-end.
