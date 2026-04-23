
const QUIZ_DATA = [
  {
    question: "Em que ano a série YOU estreou originalmente?",
    options: ["2016", "2017", "2018", "2019"],
    correct: 2,
    explanation: "YOU estreou em setembro de 2018 na rede Lifetime, antes de ir para a Netflix."
  },
  {
    question: "Qual é o nome completo do personagem principal interpretado por Penn Badgley?",
    options: ["John Goldberg", "Joe Goldberg", "James Goldstein", "Jack Goodman"],
    correct: 1,
    explanation: "O personagem se chama Joe Goldberg — um livreiro perturbado com tendências obsessivas."
  },
  {
    question: "Em qual cidade a 4ª temporada de YOU se passa?",
    options: ["Paris", "Nova York", "Los Angeles", "Londres"],
    correct: 3,
    explanation: "Na 4ª temporada, Joe vai para Londres adotando a identidade de 'Jonathan Moore'."
  },
  {
    question: "Em qual série Penn Badgley ficou famoso antes de YOU?",
    options: ["One Tree Hill", "The O.C.", "Gossip Girl", "Dawson's Creek"],
    correct: 2,
    explanation: "Penn interpretou Dan Humphrey em Gossip Girl (2007–2012), revelando ao final que ele era o famoso blogueiro anônimo."
  },
  {
    question: "Qual é o nome da banda musical de Penn Badgley?",
    options: ["PNTHR", "MOTHXR", "BADGLEY", "FOXRUN"],
    correct: 1,
    explanation: "Penn é vocalista da banda MOTHXR, que lançou o álbum 'Centerfold' em 2016."
  },
  {
    question: "Em YOU, qual é a profissão de Joe Goldberg na 1ª temporada?",
    options: ["Professor de literatura", "Fotógrafo", "Livreiro", "Médico psiquiatra"],
    correct: 2,
    explanation: "Joe Goldberg trabalha como gerente de uma livraria chamada Mooney's em Nova York."
  },
  {
    question: "Qual plataforma de streaming adquiriu YOU e a tornou um fenômeno global?",
    options: ["HBO Max", "Amazon Prime", "Disney+", "Netflix"],
    correct: 3,
    explanation: "A Netflix adquiriu os direitos de YOU após a 1ª temporada, que virou hit global logo após chegar à plataforma."
  },
  {
    question: "Em que ano Penn Badgley nasceu?",
    options: ["1984", "1985", "1986", "1988"],
    correct: 2,
    explanation: "Penn Dayton Badgley nasceu em 1º de novembro de 1986, em Baltimore, Maryland."
  },
  {
    question: "Com quantas visualizações (em lares) a 4ª temporada de YOU foi assistida nas primeiras semanas?",
    options: ["40 milhões", "60 milhões", "87 milhões", "120 milhões"],
    correct: 2,
    explanation: "A 4ª temporada de YOU atingiu 87 milhões de lares nas primeiras semanas — um dos maiores lançamentos da Netflix."
  },
  {
    question: "Qual o símbolo mais icônico da série YOU, onde Joe mantém vítimas presas?",
    options: ["Porão de tijolos", "Cela de vidro", "Cofre metálico", "Jaula de madeira"],
    correct: 1,
    explanation: "A 'cela de vidro' (glass cage) na livraria é um dos elementos mais icônicos e perturbadores da série YOU."
  }
];

/* -------------------------------------------------------
   DADOS — Conteúdo dos Modais
------------------------------------------------------- */
const MODAL_DATA = {
  "you-series": {
    badge: "Série Original Netflix",
    title: "YOU",
    meta: ["2018 – 2025", "5 Temporadas", "TV-MA", "Thriller Psicológico"],
    image: "Images/You (Netflix).webp",
    desc: `<strong>YOU</strong> é uma série de suspense psicológico baseada nos livros de Caroline Kepnes. A história segue <strong>Joe Goldberg</strong>, um livreiro inteligente e manipulador que se torna obcecado pela mulher que cobiça, usando as redes sociais e investigação para monitorá-la — justificando tudo com sua visão distorcida de "amor verdadeiro".
    <br><br>A série é um estudo fascinante de um anti-herói: Joe narra seus próprios pensamentos, criando empatia com o espectador mesmo diante de ações perturbadoras. Cada temporada o leva para um novo lugar, com uma nova obsessão.
    <br><br>Transmitida originalmente pela Lifetime, foi adquirida pela Netflix em 2019 e se tornou um dos títulos mais assistidos da plataforma, gerando debate cultural sobre a romantização de comportamentos tóxicos.`
  },
  "gossip-girl": {
    badge: "Série de TV — CW",
    title: "Gossip Girl",
    meta: ["2007 – 2012", "6 Temporadas", "Drama Teen", "CW Network"],
    image: "https://m.media-amazon.com/images/M/MBOGE4NTc4OTEtZGY4NC00NDUwLWFiZTQtMTQ4MjczNmJiM2IzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc: `<strong>Gossip Girl</strong> acompanha a vida luxuosa dos jovens da elite de Manhattan. Penn Badgley interpreta <strong>Dan Humphrey</strong>, o "outsider" de Brooklyn que se apaixona por Serena van der Woodsen (Blake Lively).
    <br><br>Durante 6 temporadas, a série manteve um suspense: quem é o(a) Gossip Girl, o blogueiro anônimo que expõe os segredos de todos? No finale, a revelação chocante: era Dan o tempo todo, usando o blog como forma de pertencer ao mundo que tanto desejava.
    <br><br>A série lançou Penn ao estrelato internacional e estabeleceu sua capacidade de interpretar personagens moralmente ambíguos — o que seria a base para Joe Goldberg anos depois.`
  },
  "easy-a": {
    badge: "Filme · 2010",
    title: "Easy A",
    meta: ["2010", "Comédia Romântica", "Will Gluck (dir.)", "Columbia Pictures"],
    image: "https://m.media-amazon.com/images/M/MV5BMTQxODE1NTM4OV5BMl5BanBnXkFtZTcwMzExMDUyMw@@._V1_FMjpg_UX1000_.jpg",
    desc: `Em <strong>Easy A</strong>, Penn Badgley interpreta Todd, o interesse amoroso da protagonista Olive (Emma Stone). A comédia romântica baseada livremente em "A Letra Escarlate" foi um sucesso de crítica e bilheteria.
    <br><br>O filme demonstrou que Penn tinha charme e talento para o cinema, além de ótima química com outros atores. Emma Stone foi indicada ao Globo de Ouro pelo papel.
    <br><br>Easy A é considerado um dos filmes teen mais inteligentes dos anos 2010, com roteiro afiado e performances memoráveis.`
  },
  "margin-call": {
    badge: "Filme · 2011",
    title: "Margin Call",
    meta: ["2011", "Thriller Financeiro", "J.C. Chandor (dir.)", "Lionsgate"],
    image: "https://m.media-amazon.com/images/M/MV5BMjI4MzgxMzQzMF5BMl5BanBnXkFtZTcwMzg0NjMwNw@@._V1_FMjpg_UX1000_.jpg",
    desc: `<strong>Margin Call</strong> é um thriller financeiro que retrata as 24 horas que precederam a crise financeira de 2008 em um banco de investimentos de Wall Street. Penn Badgley interpreta Seth Bregman, um jovem analista.
    <br><br>O elenco ensemble inclui Kevin Spacey, Jeremy Irons, Paul Bettany, Demi Moore e Zachary Quinto. O filme recebeu indicação ao Oscar de Melhor Roteiro Original.
    <br><br>Para Penn, foi uma oportunidade de trabalhar em drama adulto e sério, afastando-se da imagem teen de Gossip Girl.`
  },
  "you-s4": {
    badge: "Netflix · 2023",
    title: "YOU — Season 4",
    meta: ["2023", "10 Episódios", "Netflix", "87M lares na estreia"],
    image: "https://m.media-amazon.com/images/M/MV5BNjY3OTRhNzQtNDgyNC00NzM3LTlhM2ItZjliNjJlM2Y2N2VhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc: `Na <strong>4ª temporada</strong>, Joe Goldberg foge para <strong>Londres</strong>, adotando a identidade de "Jonathan Moore", um professor universitário. Mas sua natureza não muda — e um novo assassino em série começa a seguir sua trilha.
    <br><br>A temporada deu uma nova camada ao personagem: desta vez, Joe parece estar sendo caçado, numa inversão inteligente do formato. A trama de detetive foi muito elogiada pelos críticos.
    <br><br>Com 87 milhões de lares assistindo nas primeiras semanas, foi um dos maiores lançamentos da história da Netflix, consolidando Penn Badgley como um dos atores mais relevantes do streaming.`
  },
  "momento-glass-cage": {
    badge: "Momento Marcante",
    title: "A Cela de Vidro",
    meta: ["YOU — S1", "Thriller Psicológico", "Símbolo da série"],
    image: "Images/you_cage.webp",
    desc: `A <strong>cela de vidro</strong> na livraria de Joe Goldberg é um dos elementos mais icônicos da série YOU. Originalmente usada para armazenar livros raros, Joe a converte numa prisão onde mantém suas vítimas enquanto decide o que fazer com elas.
    <br><br>A transparência do vidro é uma metáfora fascinante: Joe observa suas vítimas completamente expostas, mas elas não conseguem escapar. É uma representação física da paranoia e controle obsessivo que define o personagem.
    <br><br>A cela se tornou tão icônica que virou meme, fantasias de Halloween e objeto de debate cultural sobre o fascínio mórbido que a série desperta.`
  },
  "momento-revelation": {
    badge: "Recurso Narrativo",
    title: "A Voz de Joe",
    meta: ["YOU — Todas as temporadas", "Narração em 1ª pessoa"],
    image: "https://m.media-amazon.com/images/M/MV5BNjY3OTRhNzQtNDgyNC00NzM3LTlhM2ItZjliNjJlM2Y2N2VhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc: `Um dos elementos mais geniais de YOU é a <strong>narração em primeira pessoa de Joe</strong>, ouvida pelo espectador em tempo real. Enquanto ele comete atos perturbadores, sua voz nos faz entender — e até concordar — com sua lógica distorcida.
    <br><br>Penn Badgley domina esse recurso com maestria. Sua voz calma, intelectual e às vezes poética cria uma intimidade com o público que é simultaneamente encantadora e perturbadora.
    <br><br>Este recurso narrativo é fundamental para o sucesso de YOU: ao ouvir Joe pensar, o espectador é cúmplice — o que gera um desconforto delicioso e debate sobre ética narrativa.`
  },
  "momento-gossip": {
    badge: "Gossip Girl — 2012",
    title: "Dan = Gossip Girl",
    meta: ["Gossip Girl — S6 Finale", "2012", "Revelação histórica"],
    image: "https://m.media-amazon.com/images/M/MBOGE4NTc4OTEtZGY4NC00NDUwLWFiZTQtMTQ4MjczNmJiM2IzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc: `No finale da 6ª temporada de Gossip Girl, a grande revelação: <strong>Dan Humphrey era o Gossip Girl</strong> desde o início. O outsider de Brooklyn que tanto parecia odiar o blog era, na verdade, seu criador.
    <br><br>A revelação dividiu fãs: alguns adoraram a subversão, outros acharam implausível. Mas tornou Dan em um dos personagens mais ambíguos da TV teen — um homem que criou uma persona para manipular e pertencer ao mundo que amava.
    <br><br>Em retrospecto, essa camada de Dan Humphrey antecipou perfeitamente o que Penn Badgley faria com Joe Goldberg: personagens que parecem simpáticos mas escondem motivações sombrias.`
  },
  "momento-london": {
    badge: "YOU Season 4 · 2023",
    title: "Joe em Londres",
    meta: ["YOU — S4", "2023", "Nova fase"],
    image: "https://m.media-amazon.com/images/M/MV5BNjY3OTRhNzQtNDgyNC00NzM3LTlhM2ItZjliNjJlM2Y2N2VhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc: `Na 4ª temporada, Joe Goldberg foge para <strong>Londres</strong> como "Jonathan Moore", um professor de literatura americana em uma universidade de elite. Ele acredita que pode recomeçar, deixar o passado para trás.
    <br><br>Londres representa a reinvenção — mas também a impossibilidade de fugir de si mesmo. Joe logo se vê envolvido em novos crimes, nova obsessão e a ameaça de um assassino que parece conhecê-lo.
    <br><br>A mudança de cenário revitalizou a série. A estética britânica, os novos personagens excêntricos e o formato mais próximo de um whodunit trouxeram novos fãs e surpreenderam os antigos.`
  }
};

/* =============================================================
   INICIALIZAÇÃO — Aguarda o DOM estar pronto
============================================================= */
document.addEventListener('DOMContentLoaded', function () {
  initCursor();
  initNavbar();
  initTabButtons();
  initHeroButtons();
  initTimeline();
  initGallery();
  initNetflixCards();
  initModal();
  initQuiz();
  initPlaylist();
  initBackToTop();
  initScrollAnimations();
});

/* -------------------------------------------------------
   CURSOR PERSONALIZADO
------------------------------------------------------- */
function initCursor() {
  const cursor    = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');

  if (!cursor || !cursorDot) return;
  if (window.innerWidth <= 768) return; // Desativa em mobile

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  // Posição exata do ponto
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';
  });

  // Posição suavizada do círculo
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;
    cursor.style.left = cursorX + 'px';
    cursor.style.top  = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Efeito hover em elementos clicáveis
  const clickables = document.querySelectorAll('a, button, .netflix-card, .timeline-card, .gallery-item, .playlist-item');

  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
      cursor.style.borderColor = 'var(--red-bright)';
      cursor.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'var(--red)';
      cursor.style.opacity = '1';
    });
  });
}

/* -------------------------------------------------------
   NAVBAR — Scroll + Mobile Toggle
------------------------------------------------------- */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (!navbar) return;

  // Classe 'scrolled' ao rolar
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Toggle mobile
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }

  // Fechar ao clicar em link
  const links = navLinks ? navLinks.querySelectorAll('.nav-link') : [];
  links.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle && navToggle.classList.remove('active');
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', function (e) {
    if (navLinks && navToggle && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    }
  });
}

/* -------------------------------------------------------
   ABAS (TABS)
------------------------------------------------------- */
function initTabButtons() {
  const tabBtns  = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.dataset.tab;

      // Remove active de todos
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanes.forEach(p => p.classList.remove('active'));

      // Ativa o clicado
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      const pane = document.getElementById('tab-' + target);
      if (pane) pane.classList.add('active');
    });
  });
}

/* -------------------------------------------------------
   BOTÕES DA HERO (Curiosidades / Conquistas)
------------------------------------------------------- */
function initHeroButtons() {
  const btnCuriosidades = document.getElementById('btnCuriosidades');
  const btnConquistas   = document.getElementById('btnConquistas');
  const panelCurio      = document.getElementById('panelCuriosidades');
  const panelConq       = document.getElementById('panelConquistas');

  if (btnCuriosidades && panelCurio) {
    btnCuriosidades.addEventListener('click', function () {
      const isVisible = panelCurio.classList.toggle('visible');
      this.innerHTML = isVisible
        ? '<span class="btn-icon">👁</span> Esconder Curiosidades'
        : '<span class="btn-icon">👁</span> Mostrar Curiosidades';
      // Fecha o outro painel
      if (isVisible && panelConq) {
        panelConq.classList.remove('visible');
        btnConquistas.innerHTML = '<span class="btn-icon">🏆</span> Ver Conquistas';
      }
    });
  }

  if (btnConquistas && panelConq) {
    btnConquistas.addEventListener('click', function () {
      const isVisible = panelConq.classList.toggle('visible');
      this.innerHTML = isVisible
        ? '<span class="btn-icon">🏆</span> Esconder Conquistas'
        : '<span class="btn-icon">🏆</span> Ver Conquistas';
      // Fecha o outro painel
      if (isVisible && panelCurio) {
        panelCurio.classList.remove('visible');
        btnCuriosidades.innerHTML = '<span class="btn-icon">👁</span> Mostrar Curiosidades';
      }
    });
  }
}

/* -------------------------------------------------------
   TIMELINE — Clique + Scroll Animation
------------------------------------------------------- */
function initTimeline() {
  const cards = document.querySelectorAll('.timeline-card');

  // Clique para expandir detalhes
  cards.forEach(card => {
    card.addEventListener('click', function () {
      const wasOpen = this.classList.contains('open');
      // Fecha todos
      cards.forEach(c => c.classList.remove('open'));
      // Abre o clicado (se não estava aberto)
      if (!wasOpen) this.classList.add('open');
    });
  });
}

/* -------------------------------------------------------
   GALERIA — Lightbox simples
------------------------------------------------------- */
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    // Pula itens de vídeo (embed do YouTube) — o próprio iframe lida com o clique
    if (item.classList.contains('gallery-item--video')) return;

    item.addEventListener('click', function () {
      const img     = this.querySelector('img');
      const caption = this.dataset.caption || '';
      if (img) {
        showImageModal(img.src, img.alt, caption);
      }
    });
  });
}

function showImageModal(src, alt, caption) {
  const content = `
    <img src="${src}" alt="${alt}" style="width:100%; border-radius:8px; margin-bottom:12px;" />
    <p style="font-size:0.9rem; color:var(--white-dim); text-align:center; font-style:italic;">${caption}</p>
  `;
  openModalWithContent(content);
}

/* -------------------------------------------------------
   NETFLIX CARDS — Abrir Modal
------------------------------------------------------- */
function initNetflixCards() {
  const cards = document.querySelectorAll('.netflix-card[data-modal]');

  cards.forEach(card => {
    // Clique no card inteiro abre modal
    card.addEventListener('click', function () {
      const modalId = this.dataset.modal;
      if (modalId) openModal(modalId);
    });

    // Botão de play abre modal (e para propagação)
    const playBtn = card.querySelector('.card-play-btn');
    if (playBtn) {
      playBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const modalId = card.dataset.modal;
        if (modalId) openModal(modalId);
      });
    }
  });
}

/* -------------------------------------------------------
   MODAL — Abrir / Fechar
------------------------------------------------------- */
function initModal() {
  const overlay   = document.getElementById('modalOverlay');
  const closeBtn  = document.getElementById('modalClose');

  if (!overlay) return;

  // Fechar ao clicar no overlay (fora do modal)
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModalEl();
  });

  // Fechar com botão X
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModalEl);
  }

  // Fechar com ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModalEl();
  });
}

// Abre modal pelo ID dos dados
window.openModal = function (modalId) {
  const data    = MODAL_DATA[modalId];
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  if (!data || !overlay || !content) return;

  const metaHtml = data.meta
    ? data.meta.map(m => `<span>${m}</span>`).join('')
    : '';

  const imgHtml = data.image
    ? `<img class="modal-header-img" src="${data.image}" alt="${data.title}" loading="lazy" />`
    : '';

  content.innerHTML = `
    ${imgHtml}
    <span class="modal-badge">${data.badge || ''}</span>
    <h2 class="modal-title">${data.title}</h2>
    <div class="modal-meta">${metaHtml}</div>
    <div class="modal-desc">${data.desc}</div>
  `;

  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Abre modal com conteúdo HTML direto
function openModalWithContent(htmlContent) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  if (!overlay || !content) return;

  content.innerHTML = htmlContent;
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fecha o modal
function closeModalEl() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* -------------------------------------------------------
   QUIZ — Lógica completa
------------------------------------------------------- */
let quizState = {
  currentQuestion: 0,
  score:           0,
  answered:        false,
  questions:       []
};

function initQuiz() {
  const startBtn = document.getElementById('startQuizBtn');
  const nextBtn  = document.getElementById('quizNextBtn');
  const retryBtn = document.getElementById('retryQuizBtn');

  if (startBtn) startBtn.addEventListener('click', startQuiz);
  if (nextBtn)  nextBtn.addEventListener('click', nextQuestion);
  if (retryBtn) retryBtn.addEventListener('click', resetQuiz);
}

function startQuiz() {
  // Embaralha as perguntas
  quizState.questions = [...QUIZ_DATA].sort(() => Math.random() - 0.5);
  quizState.currentQuestion = 0;
  quizState.score = 0;
  quizState.answered = false;

  document.getElementById('quizStart').style.display = 'none';
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizQuestionWrap').style.display = 'block';

  renderQuestion();
}

function renderQuestion() {
  const q    = quizState.questions[quizState.currentQuestion];
  const total = quizState.questions.length;
  const current = quizState.currentQuestion + 1;

  // Progresso
  const progressPct = ((current - 1) / total) * 100;
  document.getElementById('quizProgressFill').style.width = progressPct + '%';
  document.getElementById('quizProgressText').textContent = `Pergunta ${current} de ${total}`;
  document.getElementById('quizScoreLive').textContent = `Pontos: ${quizState.score}`;
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizNextBtn').style.display = 'none';

  // Texto da pergunta
  document.getElementById('quizQuestionText').textContent = q.question;

  // Opções — embaralha a ordem das opções também
  const shuffledOpts = q.options
    .map((text, idx) => ({ text, idx }))
    .sort(() => Math.random() - 0.5);

  const container = document.getElementById('quizOptions');
  container.innerHTML = '';

  shuffledOpts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt.text;
    btn.dataset.originalIdx = opt.idx;
    btn.addEventListener('click', function () {
      if (quizState.answered) return;
      selectOption(this, opt.idx === q.correct, q.correct, shuffledOpts);
    });
    container.appendChild(btn);
  });

  quizState.answered = false;
}

function selectOption(selectedBtn, isCorrect, correctOriginalIdx, shuffledOpts) {
  quizState.answered = true;

  // Desabilita todos os botões
  const allOptions = document.querySelectorAll('.quiz-option');
  allOptions.forEach(btn => {
    btn.disabled = true;
    const idx = parseInt(btn.dataset.originalIdx);
    if (idx === correctOriginalIdx) {
      btn.classList.add('correct');
    } else if (btn === selectedBtn && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Feedback
  const feedback = document.getElementById('quizFeedback');
  const q = quizState.questions[quizState.currentQuestion];

  if (isCorrect) {
    quizState.score += 10;
    document.getElementById('quizScoreLive').textContent = `Pontos: ${quizState.score}`;
    feedback.textContent = `✅ Correto! ${q.explanation}`;
    feedback.className = 'quiz-feedback correct';
  } else {
    feedback.textContent = `❌ Errado. ${q.explanation}`;
    feedback.className = 'quiz-feedback wrong';
  }

  // Vibração visual suave
  selectedBtn.style.transform = isCorrect ? 'scale(1.02)' : 'scale(0.98)';
  setTimeout(() => { selectedBtn.style.transform = ''; }, 200);

  // Mostra botão "Próxima"
  const nextBtn = document.getElementById('quizNextBtn');
  const isLast = quizState.currentQuestion === quizState.questions.length - 1;
  nextBtn.textContent = isLast ? 'Ver Resultado →' : 'Próxima →';
  nextBtn.style.display = 'inline-flex';
}

function nextQuestion() {
  quizState.currentQuestion++;

  if (quizState.currentQuestion >= quizState.questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function showResult() {
  document.getElementById('quizQuestionWrap').style.display = 'none';
  const result = document.getElementById('quizResult');
  result.style.display = 'block';

  const total     = quizState.questions.length;
  const maxScore  = total * 10;
  const pct       = Math.round((quizState.score / maxScore) * 100);

  let emoji, title, message;

  if (pct >= 90) {
    emoji = '🏆'; title = 'Especialista em YOU!';
    message = 'Impressionante! Você conhece Penn Badgley e a série YOU melhor do que a maioria. Joe Goldberg aprovaria.';
  } else if (pct >= 70) {
    emoji = '👁'; title = 'Ótimo desempenho!';
    message = 'Você conhece bem o universo de YOU. Algumas curiosidades ainda escaparam, mas você está muito na frente!';
  } else if (pct >= 50) {
    emoji = '📚'; title = 'Bom começo!';
    message = 'Você conhece o básico, mas há mais para descobrir. Joe Goldberg leria uns livros a mais nesse lugar.';
  } else {
    emoji = '🔒'; title = 'A cela de vidro espera...';
    message = 'Parece que você ainda não foi fisgado pelo universo de YOU. Hora de uma maratona na Netflix!';
  }

  document.getElementById('resultEmoji').textContent  = emoji;
  document.getElementById('resultTitle').textContent  = title;
  document.getElementById('resultMessage').textContent = message;
  document.getElementById('resultScore').textContent  = `${quizState.score} / ${maxScore}`;

  // Anima a barra de resultado
  setTimeout(() => {
    document.getElementById('resultBar').style.width = pct + '%';
  }, 100);
}

function resetQuiz() {
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizStart').style.display  = 'block';
  document.getElementById('resultBar').style.width    = '0%';
}

/* -------------------------------------------------------
   PLAYER MULTIMÍDIA — Troca de vídeo
------------------------------------------------------- */
function initPlaylist() {
  const playlistItems = document.querySelectorAll('.playlist-item');
  const videoFrame    = document.getElementById('mainVideoFrame');
  const videoTitle    = document.getElementById('playerVideoTitle');
  const videoDesc     = document.getElementById('playerVideoDesc');

  if (!videoFrame || !playlistItems.length) return;

  playlistItems.forEach(item => {
    item.addEventListener('click', function () {
      const videoId = this.dataset.videoId;
      const title   = this.dataset.title;
      const desc    = this.dataset.desc;

      if (!videoId) return;

      // Remove active de todos
      playlistItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');

      // Troca o iframe
      videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;

      // Atualiza informações
      if (videoTitle) videoTitle.textContent = title || '';
      if (videoDesc)  videoDesc.textContent  = desc  || '';

      // Scroll suave até o player
      const playerSection = document.getElementById('player');
      if (playerSection) {
        playerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* -------------------------------------------------------
   BOTÃO VOLTAR AO TOPO
------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------
   ANIMAÇÕES DE SCROLL — Intersection Observer
------------------------------------------------------- */
function initScrollAnimations() {
  // Timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          timelineObserver.unobserve(entry.target); // Animação apenas uma vez
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
  );

  timelineItems.forEach((item, index) => {
    // Delay escalonado por item
    item.style.transitionDelay = (index * 0.08) + 's';
    timelineObserver.observe(item);
  });

  // Animação genérica de fade-in para seções
  const fadeEls = document.querySelectorAll('.stat-card, .award-card, .career-item');

  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeEls.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    fadeObserver.observe(el);
  });
}

/* -------------------------------------------------------
   EFEITO PARALLAX SUAVE NA HERO
------------------------------------------------------- */
window.addEventListener('scroll', function () {
  const hero     = document.querySelector('.hero');
  const ambText  = document.querySelector('.hero-ambient-text');

  if (!hero || !ambText) return;

  const scrollY = window.scrollY;
  const heroH   = hero.offsetHeight;

  if (scrollY < heroH) {
    // Move o texto de fundo mais lento que o scroll
    ambText.style.transform = `translateY(calc(-50% + ${scrollY * 0.3}px))`;
  }
}, { passive: true });

/* -------------------------------------------------------
   EFEITO TILT 3D na imagem hero (mouse)
------------------------------------------------------- */
(function () {
  const tiltEl = document.querySelector('[data-tilt]');
  if (!tiltEl || window.innerWidth <= 768) return;

  tiltEl.addEventListener('mousemove', function (e) {
    const rect = tiltEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    tiltEl.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });

  tiltEl.addEventListener('mouseleave', function () {
    tiltEl.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    tiltEl.style.transition = 'transform 0.5s ease';
  });

  tiltEl.addEventListener('mouseenter', function () {
    tiltEl.style.transition = 'none';
  });
})();

/* -------------------------------------------------------
   VIDEO HOVER — troca imagem por vídeo com som
------------------------------------------------------- */
(function () {
  const frame   = document.querySelector('.hero-image-frame');
  const video   = document.getElementById('heroVideo');
  if (!frame || !video) return;

  frame.addEventListener('mouseenter', async function () {
    frame.classList.add('is-playing');
    video.muted = false;
    video.volume = 1.0;
    try {
      await video.play();
    } catch (err) {
      // Se autoplay com som for bloqueado, toca muted
      video.muted = true;
      video.play().catch(() => {});
    }
  });

  frame.addEventListener('mouseleave', function () {
    frame.classList.remove('is-playing');
    video.pause();
    video.currentTime = 0;
  });
})();

/* -------------------------------------------------------
   UTILITÁRIO — Active nav link por seção visível
------------------------------------------------------- */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active-nav'));
          const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active-nav');
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => sectionObserver.observe(s));
})();

/* -------------------------------------------------------
   ACESSIBILIDADE — Focus visível para teclado
------------------------------------------------------- */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', function () {
  document.body.classList.remove('keyboard-nav');
});
