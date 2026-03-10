# 🚚 Fvalentim Transportes

Site institucional da **Fvalentim Transportes**, empresa de logística e transporte rodoviário com sede em Santa Bárbara d'Oeste - SP.

🔗 **[Ver site ao vivo](https://infofvalentim.github.io/fvalentim_transportes/)**

---

## 📋 Sobre o Projeto

Site one-page desenvolvido com HTML, CSS e JavaScript puro, sem frameworks ou dependências de build. O objetivo é apresentar os serviços da empresa, gerar confiança com clientes B2B e converter visitantes em leads via WhatsApp e formulários de cotação.

---

## 🗂️ Estrutura de Seções

| Seção | Descrição |
|---|---|
| **Hero** | Banner principal com animação do caminhão e CTAs |
| **Sobre** | História da empresa, diferenciais e credenciais |
| **Serviços** | 6 serviços oferecidos com ícones e descrições |
| **Frota** | Apresentação dos veículos disponíveis |
| **Resultados** | Contadores animados (entregas, clientes, anos, satisfação) |
| **Cobertura** | Cidades e regiões atendidas no interior de SP |
| **Depoimentos** | Avaliações de clientes com estrelas |
| **Cotação** | Formulário de solicitação de cotação rápida |
| **Contato** | Informações de contato e formulário de mensagem |
| **Mapa** | Google Maps embedado com localização |

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica e acessível
- **CSS3** — variáveis CSS, Grid, Flexbox, animações
- **JavaScript** (ES6+) — sem frameworks
- **[Font Awesome 6.5](https://fontawesome.com/)** — ícones SVG via CDN
- **[Google Fonts](https://fonts.google.com/)** — Barlow Condensed + Montserrat
- **GitHub Pages** — hospedagem gratuita

---

## 📁 Estrutura de Arquivos

```
fvalentim_transportes/
├── index.html          # Estrutura principal do site
├── style.css           # Estilos e responsividade
├── script.js           # Interações e animações
├── README.md           # Documentação do projeto
└── images/
    ├── hero.jpg        # Imagem de fundo do banner
    ├── truck.png       # Caminhão animado no hero
    ├── fleet2.png      # Foto da frota (Truck / Baú)
    ├── fleet3.png      # Foto da frota (Veículo urbano)
    └── favicon.ico     # Ícone do site
```

---

## ✨ Funcionalidades

- ✅ Menu responsivo com toggle mobile
- ✅ Animação do caminhão percorrendo o hero
- ✅ Contadores animados com `IntersectionObserver` (disparam ao entrar na tela)
- ✅ Formulário de cotação com campos: origem, destino, tipo de carga, peso, prazo
- ✅ Formulário de contato com feedback visual
- ✅ Botão WhatsApp fixo com ícone SVG oficial
- ✅ Botão "Voltar ao topo" com aparição ao rolar
- ✅ Scroll suave em todos os links internos
- ✅ Fade-in animado nos cards ao entrar na tela
- ✅ Open Graph tags para preview em redes sociais e WhatsApp
- ✅ `meta description` para SEO
- ✅ Atributos `alt` em todas as imagens
- ✅ `loading="lazy"` no iframe do Google Maps
- ✅ `preconnect` para otimização de carregamento das fontes
- ✅ Layout totalmente responsivo (mobile, tablet, desktop)

---

## 🚀 Como Executar Localmente

Não é necessário nenhum servidor ou ferramenta de build. Basta clonar e abrir:

```bash
git clone https://github.com/infofvalentim/fvalentim_transportes.git
cd fvalentim_transportes
# Abra o index.html no navegador
```

Ou com Live Server no VS Code:
```bash
# Instale a extensão Live Server no VS Code
# Clique com o botão direito em index.html → "Open with Live Server"
```

---

## ⚠️ Dados para Atualizar

Antes de publicar em produção, substitua os placeholders abaixo pelos dados reais:

| Campo | Localização | Valor atual |
|---|---|---|
| Número WhatsApp | `index.html` (2x) e `style.css` | `5519999999999` |
| Telefone exibido | `index.html` (3x) | `(19) 99999-9999` |
| E-mail | `index.html` (2x) | `contato@fvalentim.com.br` |
| CNPJ | `index.html` (2x) | `00.000.000/0001-00` |
| RNTRC | `index.html` (2x) | `000000` |

---

## 📈 Melhorias Futuras

- [ ] Integrar formulários com [Formspree](https://formspree.io) ou [EmailJS](https://www.emailjs.com/)
- [ ] Adicionar Google Analytics / Search Console
- [ ] Substituir imagens genéricas por fotos reais da frota e equipe
- [ ] Criar página `/obrigado.html` para rastreamento de conversões
- [ ] Adicionar certificações e selos (ANTT, RNTRC) com imagem

---

## 📄 Licença

Projeto privado — © 2026 Fvalentim Transportes. Todos os direitos reservados.
