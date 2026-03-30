# claude.md — Hotsite QUALISaP-PNAISP

## Visão Geral do Projeto

Crie um **hotsite de página única** (single-page) em **HTML5, CSS3 e Bootstrap 5** para o curso:

> **Curso de Qualificação em Saúde Prisional para o Fortalecimento da Política Nacional de Atenção à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (QUALISaP-PNAISP)**
> Trilha de aprendizagem para gestores, trabalhadores e profissionais da saúde.

O hotsite deve ser visualmente impactante, moderno e institucional, com tom acolhedor e profissional. Deve transmitir credibilidade, clareza e engajamento para atrair o público-alvo.

---

## Identidade Visual

### Paleta de Cores
```css
:root {
  --cor-principal:   #92bada; /* Azul médio — cor primária, navbar, destaques */
  --cor-rosa:        #faada5; /* Rosa claro — cards de módulos ímpares, acentos */
  --cor-azul-bebe:   #b7e7f3; /* Azul bebê — fundos de seções alternadas */
  --cor-amarelo:     #FFF699; /* Amarelo — badges, destaques, CTA secundário */
  --cor-verde:       #B6EEA7; /* Verde menta — ícones, unidades, confirmações */
  --cor-texto:       #2c3e50; /* Texto escuro */
  --cor-branco:      #ffffff;
  --cor-cinza-claro: #f8f9fa;
}
```

### Tipografia
- **Display / Títulos**: Google Fonts — `Nunito` (peso 800) ou `Poppins` (peso 700)
- **Corpo**: Google Fonts — `Inter` ou `Open Sans` (peso 400/600)
- Importar via `<link>` no `<head>`

### Estilo Visual
- Cantos arredondados (`border-radius: 16px` em cards)
- Sombras suaves (`box-shadow: 0 4px 20px rgba(0,0,0,0.08)`)
- Gradientes suaves usando as cores da paleta
- Ícones: usar **Bootstrap Icons** (`https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css`)
- Animações sutis de entrada via CSS (`@keyframes fadeInUp`) ativadas por scroll com Intersection Observer

---

## Estrutura de Dobras (Seções)

### 1. NAVBAR (fixo no topo)
- Fundo branco com leve sombra ao rolar a página
- Logo institucional à esquerda: texto estilizado "QUALISaP" em `--cor-principal` + "PNAISP" em cinza escuro
- Menu âncora com links suaves: `Início | Objetivos | Matriz Curricular | Inscreva-se`
- Botão CTA "Inscreva-se" com fundo `--cor-principal` e texto branco
- Responsivo: menu hamburguer no mobile

---

### 2. BANNER (dobra 1 — hero section)

**Conteúdo textual:**
```
Título principal:
QUALISaP-PNAISP

Subtítulo:
Curso de Qualificação em Saúde Prisional

Descrição:
Trilha de aprendizagem para gestores, trabalhadores e profissionais da saúde — fortalecendo a Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional.

Badges de destaque (pills/chips):
• 🎓 115 horas
• 📱 EAD
• 🏛️ Ministério da Saúde
• 🔬 Fiocruz MS

CTA principal:
Botão grande: "Inscreva-se Agora" → redireciona para link externo (usar href="#inscricao" como placeholder)
```

**Design:**
- Fundo com gradiente diagonal: `linear-gradient(135deg, #92bada 0%, #b7e7f3 60%, #ffffff 100%)`
- Coluna esquerda (col-lg-7): textos alinhados à esquerda com animação fadeInLeft
- Coluna direita (col-lg-5): ilustração SVG inline representando saúde/cuidado (ex: ícone de coração com símbolo de saúde, círculo decorativo, ou abstrato geométrico com as cores da paleta)
- Badges/pills com fundo branco semitransparente e texto colorido
- Altura mínima: 100vh no desktop, auto no mobile

---

### 3. OBJETIVOS GERAIS (dobra 2)

**Conteúdo textual:**
```
Título da seção: Objetivo do Curso

Texto completo:
Promover a qualificação de gestores(as), trabalhadores(as) e profissionais da saúde e da justiça e segurança pública que atuam no cuidado à saúde da população privada de liberdade para implementação da Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional (PNAISP).

Cards de público-alvo (3 cards lado a lado):
Card 1: ícone bi-person-gear | "Gestores(as)" | Profissionais de gestão da saúde e da justiça
Card 2: ícone bi-heart-pulse | "Trabalhadores(as)" | Equipes que atuam no sistema prisional
Card 3: ícone bi-hospital | "Profissionais da Saúde" | Médicos, enfermeiros e demais profissionais
```

**Design:**
- Fundo branco
- Título com linha decorativa colorida abaixo (`--cor-principal`)
- Texto centralizado em bloco com largura máxima 780px
- 3 cards com ícone grande no topo, fundo `--cor-azul-bebe`, borda superior colorida (cada um com cor diferente: `--cor-principal`, `--cor-rosa`, `--cor-verde`)
- Animação de entrada nos cards ao rolar

---

### 4. MATRIZ CURRICULAR (dobra 3)

> ⚠️ **NÃO usar tabela HTML.** Usar design de acordeão (accordion) com cards estilizados por módulo.

**Estrutura dos dados:**

```
MÓDULO I — Política Nacional de Atenção Integral à Saúde das PPL (PNAISP)
  Cor: --cor-principal (#92bada)
  Unidade 1: Estrutura e Sistema Prisional .............. 5h
  Unidade 2: A Atenção Integral à Saúde das PPL no Sistema Prisional .... 5h

MÓDULO II — Direito, Diversidade e Equidade no Sistema Prisional
  Cor: --cor-rosa (#faada5)
  Unidade 1: Violência e Saúde ......................... 5h
  Unidade 2: Família, Comunidade e Reintegração Social .. 5h
  Unidade 3: Diversidade e Inclusão no Sistema Prisional 10h
  Unidade 4: Racismo Estrutural ......................... 5h

MÓDULO III — Saúde Prisional e a Rede de Atenção à Saúde
  Cor: --cor-azul-bebe (#b7e7f3)
  Unidade 1: A Saúde Prisional como Parte Integrante da RAS no SUS ...... 10h
  Unidade 2: O Processo de Trabalho das Equipes ESF e das Equipes de Atenção
             às Unidades Prisionais e a Articulação com a RAS ............ 10h

MÓDULO IV — Promoção da Saúde e Prevenção de Agravos e Doenças no Sistema Prisional
  Cor: --cor-amarelo (#FFF699)
  Unidade 1: Promoção da Saúde .........................  6h
  Unidade 2: Agravos e Doenças Transmissíveis e Não Transmissíveis ...... 6h
  Unidade 3: Saúde da Mulher ........................... 6h
  Unidade 4: Saúde Mental .............................. 6h
  Unidade 5: Saúde Bucal ............................... 6h

MÓDULO V — O Itinerário de Cuidado à Saúde no Âmbito da PNAISP
  Cor: --cor-verde (#B6EEA7)
  Unidade 1: Cuidado e Tratamento de Agravos, Doenças Agudas, Crônicas e
             Infecciosas em Ambiente Prisional .......................... 10h
  Unidade 2: Cuidado na Saúde da Mulher ............... 5h
  Unidade 3: Cuidado em Saúde na Diversidade de Gênero (CH a definir)
  Unidade 4: Cuidado e Tratamento em Saúde Mental ...... 5h
  Unidade 5: Cuidado e Tratamento em Saúde Bucal ....... 5h

CARGA HORÁRIA TOTAL: 115 horas
```

**Design do Accordion:**
- Fundo da seção: `--cor-cinza-claro`
- Cada módulo = 1 item de accordion Bootstrap customizado
- Header do accordion: fundo colorido conforme cor do módulo, número do módulo em destaque (grande, bold), nome do módulo, badge com total de horas do módulo
- Ao expandir: lista das unidades com ícone `bi-book` à esquerda, nome da unidade, e badge de horas à direita com `--cor-amarelo`
- Rodapé da seção: card/banner destacado com "Carga Horária Total: 115 horas" centralizado, fundo `--cor-principal`, texto branco, ícone `bi-clock`

---

### 5. INSCREVA-SE (dobra 4 — CTA)

**Conteúdo textual:**
```
Título:
INSCREVA-SE NESSA TRILHA!

Subtítulo:
Faça parte da transformação da saúde no sistema prisional.
Qualifique-se para implementar a PNAISP e impactar vidas.

Botão:
"Quero me Inscrever" → link externo (placeholder: href="#")

Informações rápidas abaixo do botão (ícones + texto):
• bi-laptop | Modalidade EAD
• bi-clock | 115 horas
• bi-award | Certificado de conclusão
• bi-people | Para gestores, trabalhadores e profissionais da saúde
```

**Design:**
- Fundo com gradiente vibrante: `linear-gradient(135deg, #92bada, #faada5)`
- Texto centralizado, branco
- Título com tamanho grande (display-4 ou h1 grande)
- Botão grande, fundo branco, texto `--cor-principal`, hover com fundo `--cor-amarelo`
- Linha de ícones + texto em row centralizada, com separadores
- Efeito de "pulse" suave no botão via CSS animation

---

### 6. FOOTER (dobra 5)

**Conteúdo:**
```
Linha 1 (logos/texto institucional, centralizados):
  Ministério da Saúde | Fundação Oswaldo Cruz Mato Grosso do Sul

Linha 2 (texto de direitos):
  Alguns direitos reservados. É permitida a reprodução, a disseminação e a
  utilização desta obra, em parte ou em sua totalidade, nos Termos de uso do
  ARES. Deve ser citada a fonte e é vedada sua utilização comercial.
  © 2025. Ministério da Saúde. Fundação Oswaldo Cruz Mato Grosso do Sul.
```

**Design:**
- Fundo `--cor-texto` (#2c3e50) escuro
- Texto cinza claro `#adb5bd`
- Nome institucional em branco e bold
- Separador horizontal sutil
- Texto de copyright pequeno (`font-size: 0.8rem`), centralizado

---

## Comportamentos e Técnicas

### Scroll Suave
```html
<style>html { scroll-behavior: smooth; }</style>
```

### Navbar que muda ao rolar
```javascript
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
// CSS: .navbar.scrolled { box-shadow: 0 2px 20px rgba(0,0,0,0.1); }
```

### Animações de entrada (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```
```css
.animate-on-scroll { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
```

### Accordion Bootstrap customizado
- Usar `accordion-flush` do Bootstrap 5 como base
- Sobrescrever `.accordion-button` com cores da paleta via CSS

---

## Baixe os arquvivos para usar no `<head>`

```html
<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

<!-- Bootstrap 5 JS (antes de </body>) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

---

## Estrutura de Arquivos

O hotsite deve ser entregue como **arquivo único**: `index.html`  
Todo o CSS deve estar em `<style>` dentro do `<head>`.  
Todo o JS deve estar em `<script>` antes do `</body>`.

---

## Foco do Hotsite

Este é um **hotsite objetivo e direto**, criado exclusivamente para **converter visitantes em inscritos**. Toda decisão de design e conteúdo deve servir a esse objetivo. Evite elementos que distraiam ou aumentem o tempo de decisão do usuário.

---

## Espaços para Imagem

Onde houver espaços reservados para imagens que ainda não foram fornecidas, **mantenha o espaço com um `<img>` placeholder** contendo um `alt` descritivo do tipo de imagem que ficaria bem ali. O `alt` deve ser escrito em português e descrever visualmente o conteúdo ideal.

**Exemplos:**
```html
<!-- Hero section -->
<img src="" alt="[Imagem: profissional de saúde atendendo paciente em ambiente de unidade prisional, transmitindo cuidado e humanização]" ...>

<!-- Sobre o curso -->
<img src="" alt="[Imagem: grupo diverso de profissionais da saúde em formação, contexto de capacitação EAD]" ...>

<!-- Rodapé / institucional -->
<img src="" alt="[Imagem: logo institucional da Fiocruz Mato Grosso do Sul]" ...>
```

O `alt` deve deixar claro para quem for substituir a imagem o que seria ideal para aquele espaço visual, mantendo o foco em credibilidade institucional e engajamento para inscrição.

---

## Checklist de Qualidade

- [ ] Responsivo em mobile (320px), tablet (768px) e desktop (1200px+)
- [ ] Navbar fixa com scroll suave para âncoras
- [ ] Hero com gradiente e animação de entrada
- [ ] 3 cards de público-alvo com ícones
- [ ] Accordion de módulos com cores distintas por módulo
- [ ] Badge de carga horária total destacado
- [ ] Seção CTA com botão com animação pulse
- [ ] Footer escuro com texto de direitos
- [ ] Sem tabelas HTML na matriz curricular
- [ ] Paleta de cores aplicada via CSS variables
- [ ] Fontes do Google Fonts carregadas
- [ ] Ícones Bootstrap Icons em toda interface