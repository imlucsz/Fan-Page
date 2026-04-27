/* ============================================================
   STEPHEN CURRY — SPOTIFY-INSPIRED INTERACTIONS
   curry.js v2.0 — Pure JS, no frameworks
   ============================================================ */

'use strict';

/* ── MODAL DATA ────────────────────────────────────────────── */
const MODAL_DATA = {
  'curry-62pts': {
    icon: '🏀',
    label: 'Jogo Histórico',
    title: '62 Pontos',
    sub: 'vs. Portland Trail Blazers · Janeiro 2021',
    gradient: 'linear-gradient(135deg, #003d1a 0%, #1DB954 100%)',
    stats: [
      { val: '62', key: 'Pontos' },
      { val: '8', key: 'Rebotes' },
      { val: '5', key: 'Assistências' },
      { val: '11/16', key: '3pts convertidos' },
    ],
    desc: 'Em 23 de Janeiro de 2021, Stephen Curry fez história ao marcar 62 pontos contra o Portland Trail Blazers — a maior pontuação de sua carreira. Com 11 cestas de 3 pontos em apenas 16 tentativas (68.7% de aproveitamento), Curry destruiu a defesa dos Blazers em uma performance que ficará para sempre na memória dos fãs.',
    facts: [
      { icon: '🔥', text: '<strong>11 cestas de 3 pontos</strong> — um novo recorde pessoal naquele momento' },
      { icon: '⏱️', text: 'Atingiu os <strong>62 pontos em apenas 3 quartos</strong>, sendo poupado no 4º' },
      { icon: '📊', text: 'FG%: 18/31 · 3P%: 68.7% · FT%: 15/16 — eficiência absurda' },
      { icon: '📺', text: 'GSW venceu por <strong>137-122</strong> com domínio total de Curry' },
    ],
  },
  'curry-finals-2022': {
    icon: '🏆',
    label: 'Finais NBA',
    title: 'Finals MVP 2022',
    sub: 'Golden State Warriors vs. Boston Celtics',
    gradient: 'linear-gradient(135deg, #002a0f 0%, #169040 100%)',
    stats: [
      { val: '31.2', key: 'PPG nas Finais' },
      { val: '6', key: 'Jogos' },
      { val: '4×', key: 'Campeão' },
      { val: '1º', key: 'Finals MVP' },
    ],
    desc: 'Após anos sendo questionado sobre não ter um MVP das Finais, Curry respondeu da única forma que conhece — com uma performance histórica. Em 2022, liderou os Warriors ao 4º título, médias de 31.2 pontos, 6.0 rebotes e 5.0 assistências por jogo, e foi eleito MVP das Finais por unanimidade.',
    facts: [
      { icon: '🏆', text: 'Quarto título da NBA, completando o <strong>legado de campeão absoluto</strong>' },
      { icon: '👑', text: 'Primeiro <strong>Finals MVP da carreira</strong> — o troféu que faltava no currículo' },
      { icon: '🎯', text: 'Média de <strong>6.3 cestas de 3pts por jogo</strong> nas Finais de 2022' },
      { icon: '🌟', text: 'Jogos 5 e 6 foram <strong>masterclasses absolutas</strong> de basquete' },
    ],
  },
  'curry-record': {
    icon: '🎯',
    label: 'Recorde Histórico',
    title: 'Recorde de 3pts',
    sub: 'vs. New York Knicks · 14 Nov 2021',
    gradient: 'linear-gradient(135deg, #0a1a2e 0%, #1DB954 100%)',
    stats: [
      { val: '2.974+', key: 'Cestas de 3pts' },
      { val: '13', key: 'Anos p/ chegar lá' },
      { val: '3.747+', key: 'Total atual' },
      { val: '∞', key: 'Legado' },
    ],
    desc: 'Em 14 de novembro de 2021, Stephen Curry quebrou o recorde de cestas de 3 pontos de Ray Allen com sua cesta de número 2.974 — e o fez com uma caçamba típica de Curry: dribble entre as pernas, passo atrás, e rip. O Madison Square Garden parou. A NBA parou. A história do basquete foi reescrita.',
    facts: [
      { icon: '📅', text: 'Ray Allen levou <strong>18 temporadas</strong> para atingir 2.974 — Curry chegou em 13' },
      { icon: '🏟️', text: 'O recorde foi quebrado no <strong>Madison Square Garden</strong> — o palco mais icônico' },
      { icon: '🤝', text: 'Ray Allen estava <strong>presente na arena</strong> para ver o recorde ser quebrado' },
      { icon: '📈', text: 'Hoje o recorde é de <strong>3.747+ cestas</strong> e segue crescendo' },
    ],
  },
  'curry-allstar-3pt': {
    icon: '⭐',
    label: 'All-Star Weekend',
    title: '3PT Contest',
    sub: '3× Campeão do Concurso de 3 Pontos',
    gradient: 'linear-gradient(135deg, #1a1a00 0%, #2DB954 100%)',
    stats: [
      { val: '3×', key: 'Campeonatos' },
      { val: '2015', key: '1ª vitória' },
      { val: '27', key: 'Pontos (record)' },
      { val: '🌟', key: 'Ídolo do show' },
    ],
    desc: 'Stephen Curry transformou o Concurso de 3 Pontos do All-Star Weekend em um espetáculo próprio. Com 3 títulos (2015, 2021, 2022), ele é o maior vencedor da história do evento. Curry não apenas ganha o concurso — ele entretém. Cada edição com ele é um show à parte.',
    facts: [
      { icon: '🎯', text: 'Em 2021, Curry marcou <strong>27 pontos no Money Ball</strong> em uma única rodada — absurdo' },
      { icon: '🎭', text: 'Celebrações únicas, dribbles criativos e arremessos impossíveis que <strong>viram meme</strong>' },
      { icon: '📊', text: 'Aproveitamento médio nos concursos: bem acima de qualquer outro participante' },
      { icon: '🏆', text: '2015, 2021 e 2022 — três títulos que consolidam sua <strong>lenda no All-Star</strong>' },
    ],
  },
  'curry-olympics': {
    icon: '🥇',
    label: 'Olimpíadas Paris 2024',
    title: 'Ouro Olímpico',
    sub: 'Final USA vs. França · Paris 2024',
    gradient: 'linear-gradient(135deg, #00111a 0%, #1DB954 100%)',
    stats: [
      { val: '🥇', key: 'Medalha de Ouro' },
      { val: '24', key: 'Pontos na Final' },
      { val: 'USA', key: 'Campeão' },
      { val: '2024', key: 'Paris' },
    ],
    desc: 'A final olímpica de Paris 2024 foi mais um capítulo da lenda de Stephen Curry. Com os EUA em uma situação difícil, Curry assumiu o controle no 4º período com uma sequência de bolas de 3 que selaram o ouro americano contra a França no próprio país deles. Uma performance que entrou para a história das Olimpíadas.',
    facts: [
      { icon: '🇫🇷', text: 'Vencer os <strong>franceses em Paris</strong> foi simbólico — Curry virou herói americano' },
      { icon: '🏀', text: 'Sequência de 4 bolas de 3 consecutivas no <strong>4º período da final</strong>' },
      { icon: '🌍', text: 'A performance viralizou globalmente — <strong>o momento mais assistido das Olimpíadas</strong>' },
      { icon: '🎖️', text: 'Curry completou o currículo: <strong>títulos NBA + MVP + Finals MVP + Ouro Olímpico</strong>' },
    ],
  },
  'curry-mvp-2016': {
    icon: '👑',
    label: 'MVP Histórico',
    title: 'MVP Unânime 2016',
    sub: '131 de 131 votos — único na história da NBA',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #ff6b1a 60%, #1DB954 100%)',
    stats: [
      { val: '131/131', key: 'Votos recebidos' },
      { val: '30.1', key: 'PPG 2015-16' },
      { val: '402', key: 'Cestas de 3pts' },
      { val: '73-9', key: 'Recorde Warriors' },
    ],
    desc: 'Na temporada 2015-16, Stephen Curry não apenas ganhou o MVP — ele ganhou por voto unânime de TODOS os 131 jornalistas votantes, tornando-se o único jogador na história da NBA a receber essa honra. Nessa temporada, ele médias de 30.1 pontos, fez 402 cestas de 3 pontos e liderou os Warriors ao recorde de 73 vitórias.',
    facts: [
      { icon: '🏅', text: 'ÚNICO na história da NBA a receber o MVP com <strong>131 de 131 votos</strong>' },
      { icon: '📈', text: '<strong>402 cestas de 3pts</strong> em uma única temporada — recorde que dura até hoje' },
      { icon: '🏆', text: 'Warriors terminaram com <strong>73-9</strong> — o melhor recorde da história da NBA' },
      { icon: '💫', text: 'A temporada de Curry em 2015-16 é considerada por muitos a <strong>melhor temporada individual da história</strong>' },
    ],
  },
  'stat-3pts': {
    icon: '🎯',
    label: 'Estatística de Carreira',
    title: '42.7% de 3pts',
    sub: 'Melhor aproveitamento para alto volume da história',
    gradient: 'linear-gradient(135deg, #0a1a0f 0%, #1DB954 100%)',
    stats: [
      { val: '42.7%', key: 'Aproveitamento' },
      { val: '3.747+', key: 'Cestas convertidas' },
      { val: '8.8', key: 'Tentativas/jogo' },
      { val: '#1', key: 'All-time' },
    ],
    desc: 'O que torna Curry único não é apenas o volume absurdo de cestas de 3 pontos, mas a eficiência com que as converte. Enquanto outros grandes arremessadores de 3 pontos ficaram em torno de 40%, Curry mantém 42.7% ao longo de toda sua carreira — com um volume de tentativas que nenhum jogador eficiente historicamente teve.',
    facts: [
      { icon: '📊', text: 'Temporada de melhor aproveitamento: <strong>45.4%</strong> em 2015-16 com 402 tentativas' },
      { icon: '🎯', text: 'Converte de distâncias que outros jogadores <strong>nem tentariam arremessar</strong>' },
      { icon: '🧠', text: 'Shot selection impecável: sabe exatamente quando e de onde arremessar' },
      { icon: '🏃', text: 'Off the dribble 3-pointers com aproveitamento que envergonha arremessos parados de outros' },
    ],
  },
  'stat-scoring': {
    icon: '🔥',
    label: 'Pontuação de Carreira',
    title: '24.8 PPG',
    sub: 'Média de pontos por jogo em toda a carreira NBA',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #ff6b1a 100%)',
    stats: [
      { val: '24.8', key: 'PPG Carreira' },
      { val: '32.0', key: 'PPG Melhor Temp.' },
      { val: '900+', key: 'Jogos' },
      { val: 'Top 10', key: 'All-Time' },
    ],
    desc: 'Com uma média de 24.8 pontos por jogo ao longo de toda a carreira, Curry é consistentemente um dos maiores pontuadores da história da NBA. Sua melhor temporada foi 2020-21, com 32.0 PPG — suficiente para ser líder de pontuação da liga. O mais impressionante: faz isso com eficiência de campo que poucos alcançam.',
    facts: [
      { icon: '📅', text: '<strong>2020-21: 32.0 PPG</strong> — campeão em pontuação da temporada regular' },
      { icon: '🏆', text: 'Médias de <strong>29.4 PPG nas Finais de 2022</strong> ao ganhar o Finals MVP' },
      { icon: '⚡', text: 'Pontua de todas as zonas, mas é <strong>devastador da linha de 3 pontos</strong>' },
      { icon: '🎯', text: 'TS% (True Shooting) de carreira: <strong>64.1%</strong> — elite histórico' },
    ],
  },
  'stat-assists': {
    icon: '⚡',
    label: 'Assistências de Carreira',
    title: '6.3 APG',
    sub: 'Média de assistências por jogo na carreira',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #4a90d9 100%)',
    stats: [
      { val: '6.3', key: 'APG Carreira' },
      { val: '7.3', key: 'APG Melhor Temp.' },
      { val: '50+%', key: 'Ast. para 3pts' },
      { val: 'PG elite', key: 'Classificação' },
    ],
    desc: 'Curry é muito mais que um pontuador — é um armador completo. Com médias de 6.3 assistências por jogo na carreira, ele combina sua ameaça de arremesso com uma visão de jogo excepcional. Sua capacidade de criar para os companheiros é amplificada pela atenção defensiva que sempre recebe.',
    facts: [
      { icon: '👁️', text: '<strong>Visão de jogo elite</strong> — encontra companheiros em posições impossíveis' },
      { icon: '🔗', text: 'Suas assistências <strong>levam diretamente a cestas de 3 pontos</strong> dos companheiros' },
      { icon: '🎭', text: '<strong>Gravity:</strong> sua presença em quadra cria espaço para o time inteiro' },
      { icon: '📊', text: 'Pick-and-roll handler excelente — <strong>2-man game com Draymond é letal</strong>' },
    ],
  },
  'stat-wins': {
    icon: '🏆',
    label: 'Temporada Histórica',
    title: '73 Vitórias',
    sub: 'Golden State Warriors 2015–16 — recorde da NBA',
    gradient: 'linear-gradient(135deg, #001a00 0%, #1DB954 100%)',
    stats: [
      { val: '73-9', key: 'Temporada 2015-16' },
      { val: '.890', key: 'Winning %' },
      { val: '6', key: 'Jogos Finais' },
      { val: '#1', key: 'All-Time' },
    ],
    desc: 'A temporada 2015-16 dos Golden State Warriors, liderada por Curry como MVP unânime, produziu o melhor recorde da história da NBA: 73 vitórias e apenas 9 derrotas. Um feito que quebrou o recorde de 72-10 dos Chicago Bulls de Michael Jordan. A equipe de Curry foi, por muitos, considerada a melhor da história do basquete.',
    facts: [
      { icon: '📅', text: 'Recorde anterior: <strong>72-10 dos Chicago Bulls de 1995-96</strong> com MJ' },
      { icon: '🏀', text: 'Curry médias de <strong>30.1 PPG, 6.7 APG, 5.4 RPG</strong> nessa temporada' },
      { icon: '😔', text: 'Ironicamente, os Warriors <strong>perderam as Finais</strong> para o Cleveland de LeBron (3-1)' },
      { icon: '📊', text: 'O recorde de 73-9 ainda está de pé e é <strong>considerado quase impossível de bater</strong>' },
    ],
  },
  'stat-allstar': {
    icon: '🌟',
    label: 'All-Star',
    title: '9× All-Star',
    sub: 'Um dos mais votados do Oeste por anos consecutivos',
    gradient: 'linear-gradient(135deg, #1a0a1a 0%, #9b59b6 100%)',
    stats: [
      { val: '9×', key: 'Seleções' },
      { val: '2014', key: 'Primeira vez' },
      { val: '3×', key: '3PT Contest' },
      { val: '#30', key: 'Número' },
    ],
    desc: 'Stephen Curry foi selecionado para o All-Star Game por 9 vezes, tornando-se um dos armadores mais escolhidos da história. Além das participações no jogo principal, sua presença no 3PT Contest do All-Star Weekend virou um evento à parte — sempre um dos momentos mais assistidos do fim de semana.',
    facts: [
      { icon: '📊', text: 'Primeira seleção All-Star em <strong>2014</strong>, início de um domínio de quase uma década' },
      { icon: '🎯', text: '<strong>3× campeão do 3PT Contest</strong> — 2015, 2021 e 2022' },
      { icon: '📺', text: 'Sempre entre os <strong>jogadores mais votados</strong> pelos fãs no Oeste' },
      { icon: '🌟', text: 'Participação no All-Star Game de 2022 foi especialmente especial — logo antes de ganhar o 4º título' },
    ],
  },
};

/* ── UTILITIES ─────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

function showToast(msg, duration = 2800) {
  const toast = $('#spToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ── CURSOR ────────────────────────────────────────────────── */
(function initCursor() {
  const cursor    = $('#cursor');
  const cursorDot = $('#cursorDot');
  if (!cursor || !cursorDot) return;

  let mx = 0, my = 0, cx = 0, cy = 0;
  let raf;

  on(document, 'mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursorDot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
  });

  function animateCursor() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
    raf = requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverTargets = 'a, button, .sp-card, .sp-track, .playlist-item, .quiz-option, .tab-btn, .sp-modal-close';
  on(document, 'mouseover', e => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });
  on(document, 'mouseout', e => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });
})();

/* ── NAVBAR ────────────────────────────────────────────────── */
(function initNavbar() {
  const navbar    = $('#navbar');
  const navToggle = $('#navToggle');
  const navLinks  = $('#navLinks');
  const links     = $$('.nav-link');

  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  on(window, 'scroll', onScroll, { passive: true });
  onScroll();

  on(navToggle, 'click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  // Active link on scroll
  const sections = $$('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = links.find(l => l.getAttribute('href') === `#${e.target.id}`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observer.observe(s));

  // Close mobile menu on link click
  links.forEach(l => on(l, 'click', () => navLinks.classList.remove('open')));
})();

/* ── BACK TO TOP ───────────────────────────────────────────── */
(function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;
  on(window, 'scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  on(btn, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
(function initScrollReveal() {
  const targets = [
    '.sp-card', '.sp-track', '.timeline-item', '.award-card',
    '.stat-card', '.career-item', '.tab-pane .tab-text',
    '.sp-row-header', '.sp-tracklist',
  ];

  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(sel => {
    $$(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${Math.min(i * 0.06, 0.4)}s`;
      obs.observe(el);
    });
  });

  // Timeline items
  $$('.timeline-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });
})();

/* ── HERO PANELS (Curiosidades / Conquistas) ───────────────── */
(function initHeroPanels() {
  const btnCuriosidades = $('#btnCuriosidades');
  const btnConquistas   = $('#btnConquistas');
  const panelCuriosidades = $('#panelCuriosidades');
  const panelConquistas   = $('#panelConquistas');
  if (!btnCuriosidades) return;

  function toggle(panel, other, btn) {
    const isOpen = panel.classList.contains('open');
    other.classList.remove('open');
    panel.classList.toggle('open', !isOpen);
    btn.style.opacity = isOpen ? '1' : '0.7';
  }

  on(btnCuriosidades, 'click', () => toggle(panelCuriosidades, panelConquistas, btnCuriosidades));
  on(btnConquistas,   'click', () => toggle(panelConquistas, panelCuriosidades, btnConquistas));
})();

/* ── TABS ──────────────────────────────────────────────────── */
(function initTabs() {
  const tabBtns  = $$('.tab-btn');
  const tabPanes = $$('.tab-pane');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    on(btn, 'click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = $(`#tab-${btn.dataset.tab}`);
      if (target) target.classList.add('active');
    });
  });
})();

/* ── MODAL ─────────────────────────────────────────────────── */
(function initModal() {
  const overlay     = $('#modalOverlay');
  const box         = $('#modalBox');
  const closeBtn    = $('#modalClose');
  const modalContent = $('#modalContent');
  if (!overlay) return;

  function buildModalHTML(data) {
    const statsHTML = data.stats.map(s => `
      <div class="sp-modal-stat">
        <span class="sp-modal-stat-val">${s.val}</span>
        <span class="sp-modal-stat-key">${s.key}</span>
      </div>`).join('');

    const factsHTML = data.facts.map(f => `
      <div class="sp-modal-fact">
        <span style="font-size:1.1rem;flex-shrink:0">${f.icon}</span>
        <span>${f.text}</span>
      </div>`).join('');

    return `
      <div class="sp-modal-header">
        <div class="sp-modal-header-bg" style="background:${data.gradient}"></div>
        <div class="sp-modal-header-overlay"></div>
        <span class="sp-modal-icon-big">${data.icon}</span>
        <div class="sp-modal-title-wrap">
          <span class="sp-modal-label">${data.label}</span>
          <h2 class="sp-modal-title">${data.title}</h2>
          <p class="sp-modal-sub">${data.sub}</p>
        </div>
      </div>
      <div class="sp-modal-body">
        <div class="sp-modal-stats">${statsHTML}</div>
        <p class="sp-modal-desc">${data.desc}</p>
        <div class="sp-modal-facts">${factsHTML}</div>
      </div>
    `;
  }

  function openModal(key) {
    const data = MODAL_DATA[key];
    if (!data) return;
    modalContent.innerHTML = buildModalHTML(data);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Trigger on sp-cards
  $$(`.sp-card[data-modal], .sp-track[data-modal]`).forEach(el => {
    on(el, 'click', e => {
      // Don't trigger if play button is clicked
      if (e.target.closest('.sp-card-play-btn')) return;
      openModal(el.dataset.modal);
    });
    on(el, 'keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(el.dataset.modal);
      }
    });
  });

  // Play button on cards — simulate play + open modal
  $$('.sp-card-play-btn').forEach(btn => {
    on(btn, 'click', e => {
      e.stopPropagation();
      const card = btn.closest('.sp-card');
      const key  = card && card.dataset.modal;
      if (key) {
        simulatePlay(key);
        openModal(key);
      }
    });
  });

  on(closeBtn, 'click', closeModal);
  on(overlay, 'click', e => { if (e.target === overlay) closeModal(); });
  on(document, 'keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });
})();

/* ── SPOTIFY SECTION INTERACTIONS ──────────────────────────── */

/* Mini Player Bar */
(function initPlayerBar() {
  const banner    = $('#spBanner');
  const playerBar = $('#spPlayerBar');
  if (!banner || !playerBar) return;

  const obs = new IntersectionObserver(([entry]) => {
    playerBar.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0 });
  obs.observe(banner);
})();

/* Simulated Player */
let playerState = {
  playing:  true,
  progress: 0,
  duration: 227, // seconds
  raf:      null,
  lastTime: null,
};

function simulatePlay(key) {
  const data = MODAL_DATA[key];
  const nameEl = $('#spNowPlayingName');
  const iconEl = $('#spNowPlayingIcon');
  if (nameEl && data) nameEl.textContent = data.title;
  if (iconEl && data) iconEl.textContent = data.icon;
  playerState.playing  = true;
  playerState.progress = 0;
  startPlayerTick();
  updatePlayerUI();
  showToast(`▶ Reproduzindo: ${data ? data.title : 'Destaque'}`);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function startPlayerTick() {
  cancelAnimationFrame(playerState.raf);
  playerState.lastTime = performance.now();

  function tick(now) {
    if (!playerState.playing) return;
    const delta = (now - playerState.lastTime) / 1000;
    playerState.lastTime = now;
    playerState.progress = Math.min(playerState.progress + delta, playerState.duration);
    if (playerState.progress >= playerState.duration) {
      playerState.playing  = false;
      playerState.progress = 0;
    }
    updateProgressUI();
    playerState.raf = requestAnimationFrame(tick);
  }
  playerState.raf = requestAnimationFrame(tick);
}

function updateProgressUI() {
  const fill  = $('#spProgressFill');
  const thumb = $('#spProgressThumb');
  const timeNow = $('#spTimeNow');
  const pct = (playerState.progress / playerState.duration) * 100;
  if (fill)    fill.style.width = `${pct}%`;
  if (thumb)   thumb.style.left = `${pct}%`;
  if (timeNow) timeNow.textContent = formatTime(playerState.progress);
}

function updatePlayerUI() {
  const playIcon = $('#spCtrlPlayIcon');
  const fabIcon  = $('#musicIcon');
  const mainBtn  = $('#spMainPlayBtn');
  const fabBtn   = $('#musicControl');

  if (playIcon) playIcon.className = playerState.playing ? 'fas fa-pause' : 'fas fa-play';
  if (fabIcon)  fabIcon.className  = playerState.playing ? 'fas fa-pause' : 'fas fa-play';
  if (mainBtn)  mainBtn.classList.toggle('playing', playerState.playing);
  if (fabBtn)   fabBtn.classList.toggle('playing', playerState.playing);
}

(function initPlayerControls() {
  const ctrlPlay  = $('#spCtrlPlay');
  const mainPlay  = $('#spMainPlayBtn');
  const musicFab  = $('#musicControl');
  const progTrack = $('#spProgressTrack');
  const shuffleBtn = $('#spShuffleBtn');
  const followBtn  = $('#spFollowBtn');

  // Start player immediately (visual only)
  startPlayerTick();

  function togglePlay() {
    playerState.playing = !playerState.playing;
    if (playerState.playing) {
      playerState.lastTime = performance.now();
      startPlayerTick();
    } else {
      cancelAnimationFrame(playerState.raf);
    }
    updatePlayerUI();
    showToast(playerState.playing ? '▶ Reproduzindo' : '⏸ Pausado');
  }

  on(ctrlPlay,  'click', togglePlay);
  on(mainPlay,  'click', togglePlay);
  on(musicFab,  'click', togglePlay);

  // Progress bar click
  on(progTrack, 'click', e => {
    const rect = progTrack.getBoundingClientRect();
    const pct  = (e.clientX - rect.left) / rect.width;
    playerState.progress = pct * playerState.duration;
    updateProgressUI();
  });

  // Shuffle
  on(shuffleBtn, 'click', () => {
    playerState.progress = Math.random() * playerState.duration;
    updateProgressUI();
    showToast('🔀 Modo aleatório ativado');
  });

  // Follow
  on(followBtn, 'click', function() {
    this.classList.toggle('following');
    this.textContent = this.classList.contains('following') ? 'Seguindo ✓' : 'Seguir';
    showToast(this.classList.contains('following') ? '✓ Seguindo Stephen Curry' : 'Deixou de seguir');
  });
})();

/* Progress bar drag support */
(function initProgressDrag() {
  const track = $('#spProgressTrack');
  if (!track) return;
  let dragging = false;

  function setProgress(e) {
    const rect = track.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    playerState.progress = pct * playerState.duration;
    updateProgressUI();
  }

  on(track, 'mousedown', e => { dragging = true; setProgress(e); });
  on(document, 'mousemove', e => { if (dragging) setProgress(e); });
  on(document, 'mouseup', () => { dragging = false; });
})();

/* ── "SEE ALL" BUTTON ──────────────────────────────────────── */
(function initSeeAll() {
  $$('.sp-see-all').forEach(btn => {
    on(btn, 'click', () => {
      showToast('📋 Exibindo todos os itens');
    });
  });
})();

/* ── VIDEO PLAYLIST ────────────────────────────────────────── */
(function initVideoPlaylist() {
  const frame  = $('#mainVideoFrame');
  const title  = $('#playerVideoTitle');
  const desc   = $('#playerVideoDesc');
  const items  = $$('.playlist-item');
  if (!frame || !items.length) return;

  items.forEach(item => {
    on(item, 'click', function() {
      items.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      const vid = this.dataset.videoId;
      if (vid && frame) {
        frame.src = `https://www.youtube.com/embed/${vid}?autoplay=1&enablejsapi=1`;
      }
      if (title) title.textContent = this.dataset.title || '';
      if (desc)  desc.textContent  = this.dataset.desc  || '';
    });
  });
})();

/* ── QUIZ ──────────────────────────────────────────────────── */
(function initQuiz() {
  const QUESTIONS = [
    {
      q: 'Em que posição Stephen Curry foi selecionado no Draft da NBA de 2009?',
      opts: ['3ª Escolha', '7ª Escolha', '12ª Escolha', '1ª Escolha'],
      ans: 1,
      exp: 'Curry foi a 7ª escolha geral pelo Golden State Warriors. Muitos duvidaram — mas foi o melhor investimento da história da franquia!',
    },
    {
      q: 'Quantos títulos de MVP da Liga Stephen Curry conquistou?',
      opts: ['1', '3', '2', '4'],
      ans: 2,
      exp: 'Curry ganhou 2 MVPs: em 2015 (normal) e em 2016 (unânime — único na história da NBA com 131/131 votos).',
    },
    {
      q: 'Qual é o recorde pessoal de pontos de Curry em um único jogo?',
      opts: ['54 pontos', '59 pontos', '62 pontos', '73 pontos'],
      ans: 2,
      exp: '62 pontos contra o Portland Trail Blazers em Janeiro de 2021 — com 11 de 16 em bolas de 3 pontos!',
    },
    {
      q: 'De quem Curry superou o recorde de cestas de 3pts na NBA?',
      opts: ['Reggie Miller', 'Ray Allen', 'Klay Thompson', 'Larry Bird'],
      ans: 1,
      exp: 'Em novembro de 2021, Curry superou Ray Allen (2.974 cestas) e hoje acumula mais de 3.747 bolas de 3 convertidas.',
    },
    {
      q: 'Qual era o aproveitamento de Curry em cestas de 3 pontos na temporada 2015-16 (MVP unânime)?',
      opts: ['44.3%', '40.0%', '45.4%', '50.0%'],
      ans: 2,
      exp: 'Na temporada histórica de 2015-16, Curry converteu 45.4% das suas 402 tentativas de 3 pontos — absurdo!',
    },
    {
      q: 'Qual era o recorde de vitórias dos Warriors na temporada 2015-16?',
      opts: ['70-12', '73-9', '72-10', '68-14'],
      ans: 1,
      exp: '73-9! Os Warriors quebraram o recorde dos Chicago Bulls de Michael Jordan (72-10 em 1995-96). Um feito histórico.',
    },
    {
      q: 'Em que ano Curry ganhou o seu primeiro MVP das Finais?',
      opts: ['2015', '2017', '2018', '2022'],
      ans: 3,
      exp: 'Curry ganhou o MVP das Finais em 2022, ao liderar os Warriors ao 4º título com médias de 31.2 pontos por jogo na série.',
    },
    {
      q: 'Qual o apelido da dupla formada por Stephen Curry e Klay Thompson?',
      opts: ['Golden Duo', 'Splash Brothers', 'Bay Brothers', 'Sharp Shooters'],
      ans: 1,
      exp: '"Splash Brothers" — porque os dois sempre fazem a bola "splashar" na rede de 3 pontos. Uma das melhores duplas da história!',
    },
    {
      q: 'Quantos All-Star Games Stephen Curry disputou ao longo da carreira?',
      opts: ['7', '8', '9', '11'],
      ans: 2,
      exp: 'Curry foi selecionado 9 vezes para o All-Star Game, sendo um dos armadores mais escolhidos da história da NBA.',
    },
    {
      q: 'O que Curry conquistou nas Olimpíadas de Paris 2024?',
      opts: ['Prata', 'Bronze', 'Ouro', 'Não foi selecionado'],
      ans: 2,
      exp: 'Ouro! Curry liderou os EUA na final contra a França com uma performance histórica no 4º período — o momento mais falado das Olimpíadas.',
    },
  ];

  const startDiv    = $('#quizStart');
  const questionDiv = $('#quizQuestionWrap');
  const resultDiv   = $('#quizResult');
  const startBtn    = $('#startQuizBtn');
  const nextBtn     = $('#quizNextBtn');
  const retryBtn    = $('#retryQuizBtn');
  const progressFill = $('#quizProgressFill');
  const progressText = $('#quizProgressText');
  const scoreLive    = $('#quizScoreLive');
  const questionText = $('#quizQuestionText');
  const optionsDiv   = $('#quizOptions');
  const feedback     = $('#quizFeedback');
  const resultEmoji  = $('#resultEmoji');
  const resultTitle  = $('#resultTitle');
  const resultScore  = $('#resultScore');
  const resultMsg    = $('#resultMessage');
  const resultBar    = $('#resultBar');

  if (!startBtn) return;

  let current = 0;
  let score   = 0;
  let answered = false;

  function startQuiz() {
    current  = 0;
    score    = 0;
    answered = false;
    startDiv.style.display    = 'none';
    resultDiv.style.display   = 'none';
    questionDiv.style.display = 'block';
    showQuestion();
  }

  function showQuestion() {
    answered = false;
    nextBtn.style.display = 'none';
    feedback.classList.remove('show', 'ok', 'bad');
    feedback.textContent = '';

    const q   = QUESTIONS[current];
    const pct = ((current) / QUESTIONS.length) * 100;
    progressFill.style.width = `${pct}%`;
    progressText.textContent = `Pergunta ${current + 1} de ${QUESTIONS.length}`;
    scoreLive.textContent    = `Pontos: ${score}`;
    questionText.textContent = q.q;

    optionsDiv.innerHTML = q.opts.map((opt, i) => `
      <button class="quiz-option" data-index="${i}">${opt}</button>
    `).join('');

    $$('.quiz-option', optionsDiv).forEach(btn => {
      on(btn, 'click', function() {
        if (answered) return;
        answered = true;
        const chosen = parseInt(this.dataset.index);
        $$('.quiz-option', optionsDiv).forEach(b => b.disabled = true);

        if (chosen === q.ans) {
          score++;
          this.classList.add('correct');
          feedback.className = 'quiz-feedback show ok';
          feedback.innerHTML = `✅ Correto! ${q.exp}`;
          showToast('✅ Resposta correta! +1 ponto');
        } else {
          this.classList.add('wrong');
          $$('.quiz-option', optionsDiv)[q.ans].classList.add('correct');
          feedback.className = 'quiz-feedback show bad';
          feedback.innerHTML = `❌ Incorreto. ${q.exp}`;
          showToast('❌ Resposta incorreta');
        }
        scoreLive.textContent = `Pontos: ${score}`;
        nextBtn.style.display = 'inline-flex';
      });
    });
  }

  function nextQuestion() {
    current++;
    if (current < QUESTIONS.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    questionDiv.style.display = 'none';
    resultDiv.style.display   = 'block';

    const pct = (score / QUESTIONS.length) * 100;
    resultScore.textContent = `${score} / ${QUESTIONS.length}`;
    setTimeout(() => { resultBar.style.width = `${pct}%`; }, 100);

    if (pct === 100) {
      resultEmoji.textContent = '🏆';
      resultTitle.textContent = 'Chef Curry Reconheceria você!';
      resultMsg.textContent   = 'Perfeito! Você é um verdadeiro expert em Stephen Curry. The Chef aprovaria.';
    } else if (pct >= 70) {
      resultEmoji.textContent = '🏀';
      resultTitle.textContent = 'Splash Brother Honorary!';
      resultMsg.textContent   = 'Muito bem! Você conhece muito sobre Curry. Continue assistindo os jogos!';
    } else if (pct >= 50) {
      resultEmoji.textContent = '📊';
      resultTitle.textContent = 'Bom começo, Rookie!';
      resultMsg.textContent   = 'Você sabe algumas coisas, mas tem muito mais para aprender sobre The Chef.';
    } else {
      resultEmoji.textContent = '😅';
      resultTitle.textContent = 'Hora de estudar!';
      resultMsg.textContent   = 'Curry marcaria 62 pontos antes de você acertar mais da metade. Tente novamente!';
    }
    showToast(`Quiz finalizado! Você fez ${score}/${QUESTIONS.length} pontos 🏀`);
  }

  on(startBtn, 'click', startQuiz);
  on(nextBtn,  'click', nextQuestion);
  on(retryBtn, 'click', () => {
    resultDiv.style.display   = 'none';
    startDiv.style.display    = 'block';
  });
})();

/* ── SMOOTH SCROLL ─────────────────────────────────────────── */
(function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', e => {
      const target = $(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

/* ── CARD HOVER RIPPLE ─────────────────────────────────────── */
(function initRipple() {
  $$('.sp-card').forEach(card => {
    on(card, 'click', function(e) {
      const rect   = this.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute; border-radius:50%; pointer-events:none;
        background:rgba(255,255,255,0.08);
        width:8px; height:8px;
        left:${x}px; top:${y}px;
        transform:translate(-50%,-50%) scale(0);
        transition:transform 0.6s ease-out, opacity 0.6s ease-out;
        opacity:1; z-index:10;
      `;
      this.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = `translate(-50%,-50%) scale(${Math.max(rect.width, rect.height) * 0.5})`;
        ripple.style.opacity   = '0';
      });
      setTimeout(() => ripple.remove(), 700);
    });
  });
})();

/* ── TILT EFFECT ───────────────────────────────────────────── */
(function initTilt() {
  const tiltEl = $('[data-tilt]');
  if (!tiltEl) return;
  on(tiltEl, 'mousemove', e => {
    const rect   = tiltEl.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    const frame  = tiltEl.querySelector('.hero-image-frame');
    if (frame) {
      frame.style.transform = `perspective(600px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg)`;
    }
  });
  on(tiltEl, 'mouseleave', () => {
    const frame = tiltEl.querySelector('.hero-image-frame');
    if (frame) {
      frame.style.transform = '';
      frame.style.transition = 'transform 0.5s ease';
    }
  });
})();

/* ── DONUT ANIMATION ON SCROLL ─────────────────────────────── */
(function initDonutAnimation() {
  const donuts = $$('.sp-donut-fill');
  if (!donuts.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target;
        const dashArray = fill.getAttribute('stroke-dasharray') || '0 329';
        fill.setAttribute('stroke-dasharray', '0 329');
        setTimeout(() => {
          fill.setAttribute('stroke-dasharray', dashArray);
        }, 100);
        obs.unobserve(fill);
      }
    });
  }, { threshold: 0.4 });

  donuts.forEach(d => obs.observe(d));
})();

/* ── PAGE LOAD ANIMATION ───────────────────────────────────── */
(function initPageLoad() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
  // Fallback
  setTimeout(() => { document.body.style.opacity = '1'; }, 600);
})();

/* ── KEYBOARD NAV ──────────────────────────────────────────── */
(function initKeyboardNav() {
  on(document, 'keydown', e => {
    // Space = toggle play
    if (e.code === 'Space' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes(e.target.tagName)) {
      e.preventDefault();
      $('#spCtrlPlay') && $('#spCtrlPlay').click();
    }
  });
})();

console.log('%c🏀 Stephen Curry Fan Page v2.0', 'color:#1DB954;font-size:16px;font-weight:900;');
console.log('%cSpotify-inspired design · Built with pure HTML, CSS & JS', 'color:#b3b3b3;font-size:11px;');
