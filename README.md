# 👁 YOU — Penn Badgley | Site Fã Interativo

> **Projeto Acadêmico — FATEC Itaquera**  
> Curso: Desenvolvimento de Software Multiplataforma (DSM)  
> Disciplina: Desenvolvimento Web I — 1º Semestre

---

## 📖 Índice

- [📌 Sobre o Projeto](#-sobre-o-projeto)
- [🎓 Contexto Acadêmico](#-contexto-acadêmico)
- [🛠️ Tecnologias e Metodologia](#️-tecnologias-e-metodologia)
- [📁 Estrutura de Arquivos](#-estrutura-do-projeto)
- [✨ Funcionalidades Principais](#-funcionalidades-principais)
- [🚀 Como Executar](#-como-rodar-localmente)
- [🎨 Vista Geral da Interface](#-vista-geral-da-interface)
- [🎓 Conceitos Aplicados](#-conceitos-aplicados)
- [👥 Autores](#-autores)

---

## 📌 Sobre o Projeto

O **YOU — Penn Badgley | Site Fã** é uma experiência web imersiva dedicada ao ator **Penn Badgley** e ao seu papel mais icônico, **Joe Goldberg**, na série *YOU* (Netflix). O projeto foi construído como uma "biografia moderna" interativa, aplicando conceitos avançados de **HTML5 semântico**, **CSS3** e **JavaScript vanilla** para criar uma navegação fluida e cinematográfica.

### 🎯 Objetivos do Sistema
- **Perfil Interativo:** Apresentar biografia, curiosidades e conquistas do ator com interatividade.
- **Organização Visual:** Linha do tempo (timeline) com animações de scroll e detalhes expandidos.
- **Design Inspirado:** Seção estilo Netflix/Spotify com cards, hover effects e modais informativos.
- **Engajamento:** Quiz interativo com pontuação automática e feedback visual.
- **Multimídia:** Player de vídeos com troca dinâmica de conteúdo via YouTube embed.
- **Responsividade:** Layout adaptável para mobile, tablet e desktop.

---

## 🎓 Contexto Acadêmico

Este projeto faz parte da grade curricular da **FATEC Itaquera** e atende à atividade em dupla: **"Perfil Interativo de um(a) Artista e um(a) Atleta"**. No entanto, como o tema escolhido foi um ator com múltiplas facetas artísticas (atuação e música), todas as funcionalidades foram concentradas em uma experiência única e aprofundada.

A proposta consolidou os fundamentos de:
- Estruturação semântica de documentos com **HTML5**.
- Estilização avançada, animações e layouts com **CSS3 (Flexbox/Grid)**.
- Lógica de programação e manipulação do DOM com **JavaScript puro**.
- Organização de diretórios e versionamento com **Git/GitHub**.
- Acessibilidade web (ARIA labels, navegação por teclado, focus visível).

---

## 🛠️ Tecnologias e Metodologia

| Tecnologia | Finalidade |
|-----------|-----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Estruturação semântica, sections, navegação e acessibilidade. |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Design system completo, animações, responsividade e cursor personalizado. |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Interatividade: abas, quiz, modais, timeline, player multimídia e animações de scroll. |
| ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) | Controle de versão e colaboração em dupla. |
| ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white) | Tipografia editorial (Playfair Display) e corpo de texto (DM Sans). |

---

## 📁 Estrutura do Projeto

A organização segue o padrão de separação de responsabilidades, com assets locais e recursos externos otimizados:

```text
Penn/
│
├── index.html                  # Página única (Single Page Application style)
├── style.css                   # Design System completo — variáveis, componentes, responsividade
├── script.js                   # Lógica interativa — quiz, modais, timeline, player, cursor
├── README.md                   # Documentação do projeto
│
├── Images/                     # Assets visuais locais
│   ├── You (Netflix).webp      # Poster da série YOU
│   └── you_cage.webp           # Imagem da cela de vidro (momento icônico)
│
└── Movies/                     # Vídeos locais
    └── É VOCÊ ou NADA.mp4      # Vídeo de destaque na seção hero
```

---

## ✨ Funcionalidades Principais

| Módulo | Descrição | Interatividade |
|--------|-----------|----------------|
| 🎭 **Perfil Hero** | Foto, biografia, citação e vídeo de fundo | Hover na imagem troca para vídeo com som; botões revelam painéis de curiosidades e conquistas |
| 📑 **Abas (Tabs)** | Seções: Sobre, Carreira, Prêmios | Clique alterna conteúdo com animação de fade |
| 🖼️ **Galeria** | Grid de imagens da carreira | Clique abre lightbox ampliado; hover com zoom suave |
| ⏳ **Timeline** | Linha do tempo da carreira (1986–2025) | Scroll revela itens com animação; clique expande detalhes |
| 🎬 **Netflix Style** | Banner hero + carrosséis de obras e momentos | Hover nos cards amplia e revela info; clique abre modal completo |
| ❓ **Quiz** | 10 perguntas sobre Penn Badgley e YOU | Pontuação ao vivo, feedback visual, resultado final com barra animada |
| ▶️ **Player Multimídia** | Player principal + playlist lateral | Clique na playlist troca vídeo do YouTube dinamicamente |
| 🖱️ **Cursor Personalizado** | Círculo e ponto vermelhos | Efeito de escala em elementos clicáveis; desativado em mobile |
| 🔝 **Voltar ao Topo** | Botão flutuante | Aparece após scroll; clique retorna suavemente ao topo |

---

## 🚀 Como Rodar Localmente

### Opção 1: Abrir Diretamente no Navegador (Mais Simples)

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/penn-badgley-you-site.git

# 2. Navegue até a pasta
cd penn-badgley-you-site

# 3. Abra index.html no navegador
# Windows: duplo clique em index.html
# macOS: clique direito > Abrir com > Navegador padrão
# Linux: xdg-open index.html
```

### Opção 2: Usar o Live Server do VS Code (Recomendado)

```bash
# 1. Instale a extensão "Live Server" no VS Code (ID: ritwickdey.LiveServer)

# 2. Clique com botão direito em index.html

# 3. Selecione "Open with Live Server"

# O navegador abrirá automaticamente em http://localhost:5500
```

### Opção 3: Servidor Local com Python

```bash
# Python 3.x
cd penn-badgley-you-site
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000

# Acesse em http://localhost:8000
```

### Opção 4: Servidor Local com Node.js

```bash
# Instale http-server globalmente (primeira vez)
npm install -g http-server

# Inicie o servidor
cd penn-badgley-you-site
http-server

# Acesse em http://localhost:8080
```

### ✅ Verificação de Sucesso

Você saberá que está funcionando quando:
- 👁 A página inicial carrega com o texto "YOU" gigante no fundo
- 🎨 Os estilos CSS aparecem (cores escuras, fontes, layouts)
- 🔗 Os links de navegação funcionam e rolam suavemente para as seções
- 📱 O layout se adapta ao redimensionar a janela
- 🖱️ O cursor personalizado (círculo vermelho) aparece em desktop
- 🎬 O hover na foto do Penn troca para o vídeo local

---

## 🎨 Vista Geral da Interface

### Landing Page (Hero)
- Navegação fixa com logo "YOU" e links âncora
- Foto principal com efeito tilt 3D e vídeo de hover
- Título editorial "Penn Badgley" com citação de Joe Goldberg
- Botões interativos: "Mostrar Curiosidades" e "Ver Conquistas"

### Abas (Sobre / Carreira / Prêmios)
- **Sobre:** Biografia detalhada + cards de estatísticas (temporadas, anos de carreira)
- **Carreira:** Lista cronológica com anos e descrições de produções
- **Prêmios:** Grid de cards com ícones, anos e categorias de premiações

### Timeline
- Linha vertical central com marcadores vermelhos
- Itens alternados (esquerda/direita) em desktop
- Cards clicáveis que expandem detalhes extras
- Animação de entrada ao rolar a página

### Netflix Style
- Banner grande com poster de YOU ao fundo
- Carrossel horizontal de obras (YOU, Gossip Girl, Easy A, Margin Call)
- Carrossel de momentos marcantes (Cela de Vidro, Voz de Joe, Revelação Gossip Girl)
- Modais completos com descrição, metadados e imagem

### Quiz
- Tela de boas-vindas com ícone temático
- 10 perguntas embaralhadas com opções também embaralhadas
- Pontuação ao vivo, feedback correto/errado com explicação
- Tela de resultado com emoji, título, mensagem e barra animada

### Player de Vídeos
- Player principal 16:9 com embed do YouTube
- Playlist lateral com 5 vídeos (trailers, entrevistas, react)
- Troca dinâmica de vídeo, título e descrição ao clicar

---

## 🎓 Conceitos Aplicados

| Conceito | Aplicação no Projeto |
|----------|----------------------|
| **HTML5 Semântico** | Uso de `<nav>`, `<section>`, `<header>`, `<footer>`, `<article>`, atributos ARIA |
| **CSS3 Responsivo** | Media queries, Flexbox, Grid, unidades relativas (clamp, rem), mobile-first |
| **JavaScript Vanilla** | Manipulação do DOM, eventos, lógica de quiz, Intersection Observer, animações |
| **Design System** | Variáveis CSS para cores, tipografia, espaçamentos, sombras e transições |
| **Acessibilidade (a11y)** | ARIA labels, roles, focus visível para teclado, contraste de cores |
| **Performance Web** | Lazy loading em imagens, otimização de animações com `requestAnimationFrame` |
| **UX/UI Cinematográfica** | Paleta dark, sombras vermelhas, cursor personalizado, micro-interações |

---

## 👥 Autores

| 👤 Nome | 🎯 Função | 🔗 Contato |
|---------|----------|-----------|
| **Imlucsz - Lucas Araujo** | Desenvolvedor Front-end | [![GitHub](https://img.shields.io/badge/GitHub-@imlucsz-000?style=flat-square&logo=github)](https://github.com/imlucsz) |
| **Varish** | Desenvolvedor Front-end |  |

> ⚠️ **Substitua os nomes e links acima pelos dados reais da dupla antes de publicar!**

### 👨‍🏫 Orientação Acadêmica

- **Disciplina:** Desenvolvimento Web I
- **Instituição:** FATEC Itaquera
- **Curso:** Desenvolvimento de Software Multiplataforma (DSM)
- **Semestre:** 1º

---

## 📄 Licença

Este projeto é destinado a **fins educacionais e acadêmicos**.  
Todo o conteúdo sobre Penn Badgley e a série YOU pertence aos seus respectivos detentores de direitos autorais.  
Este site não possui fins comerciais.

---

## 💡 Aprendizados Principais

Durante o desenvolvimento deste projeto, foram consolidados:

- ✅ Estrutura semântica e acessível com HTML5
- ✅ Criação de design systems escaláveis com CSS3
- ✅ Manipulação avançada do DOM com JavaScript puro
- ✅ Lógica de aplicações interativas (quiz, modais, abas)
- ✅ Animações performáticas com CSS e Intersection Observer
- ✅ Organização de arquivos e versionamento com Git/GitHub
- ✅ Responsividade real e mobile-first design
- ✅ Experiência de usuário imersiva e cinematográfica

---

<div align="center">

**Desenvolvido com ❤️ para celebrar a arte de Penn Badgley**

[![Made with HTML5](https://img.shields.io/badge/Made%20with-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![Made with CSS3](https://img.shields.io/badge/Made%20with-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

**“Você é meu único pensamento. Você é tudo.”** — Joe Goldberg

</div>

