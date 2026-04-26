/* =============================================================
   PLAYER.JS — Player de Vídeo Customizado + Botão Voltar + FAB
   Arquivo separado para não modificar script.js original
============================================================= */

document.addEventListener('DOMContentLoaded', function () {
  initMusicFab();
  initCustomVideoPlayer();
  initBackButton();
});

/* -------------------------------------------------------
   BOTÃO DE ÁUDIO FLUTUANTE (FAB)
------------------------------------------------------- */
function initMusicFab() {
  const musicBtn  = document.getElementById('musicControl');
  const musicIcon = document.getElementById('musicIcon');
  const audio     = document.getElementById('bgMusic');

  if (!musicBtn || !musicIcon || !audio) return;

  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        musicIcon.className = 'fas fa-pause';
        musicBtn.classList.add('is-playing');
      }).catch(err => {
        console.error("Erro: O usuário precisa interagir com a página primeiro.", err);
      });
    } else {
      audio.pause();
      musicIcon.className = 'fas fa-play';
      musicBtn.classList.remove('is-playing');
    }
  });
}

/* -------------------------------------------------------
   BOTÃO VOLTAR AO LOBBY — com delay e áudio
------------------------------------------------------- */
function initBackButton() {
  const backBtn      = document.getElementById('navBackBtn');
  const goodbyeAudio = document.getElementById('goodbyeAudio');
  const pageOverlay  = document.getElementById('pageOverlay');

  if (!backBtn) return;

  backBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (goodbyeAudio) {
      goodbyeAudio.play().catch(function(err){
        console.log('Erro ao tocar áudio de saída:', err);
      });
    }

    if (pageOverlay) {
      pageOverlay.classList.add('show');
    }

    setTimeout(function () {
      window.location.href = 'lobby.html';
    }, 2500);
  });
}

/* -------------------------------------------------------
   PLAYER DE VÍDEO CUSTOMIZADO — Estilo YouTube/Netflix
------------------------------------------------------- */
function initCustomVideoPlayer() {
  const container      = document.getElementById('customVideoPlayer');
  const video          = document.getElementById('galleryVideo');
  const bigPlayBtn     = document.getElementById('bigPlayBtn');
  const playPauseBtn   = document.getElementById('playPauseBtn');
  const playPauseIcon  = document.getElementById('playPauseIcon');
  const muteBtn        = document.getElementById('muteBtn');
  const muteIcon       = document.getElementById('muteIcon');
  const fullscreenBtn  = document.getElementById('fullscreenBtn');
  const fullscreenIcon = document.getElementById('fullscreenIcon');
  const progressBar    = document.getElementById('progressBar');
  const progressFill   = document.getElementById('progressFill');
  const progressHandle = document.getElementById('progressHandle');
  const progressWrap   = document.querySelector('.video-progress-wrap');
  const currentTimeEl  = document.getElementById('currentTime');
  const totalTimeEl    = document.getElementById('totalTime');

  if (!container || !video) return;

  let isDragging = false;

  function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function updatePlayState() {
    if (video.paused) {
      container.classList.remove('is-playing');
      container.classList.add('is-paused');
      playPauseIcon.className = 'fas fa-play';
      bigPlayBtn.style.opacity = '1';
      bigPlayBtn.style.pointerEvents = 'all';
    } else {
      container.classList.add('is-playing');
      container.classList.remove('is-paused');
      playPauseIcon.className = 'fas fa-pause';
      bigPlayBtn.style.opacity = '0';
      bigPlayBtn.style.pointerEvents = 'none';
    }
  }

  function updateMuteState() {
    if (video.muted || video.volume === 0) {
      muteIcon.className = 'fas fa-volume-mute';
    } else if (video.volume < 0.5) {
      muteIcon.className = 'fas fa-volume-down';
    } else {
      muteIcon.className = 'fas fa-volume-up';
    }
  }

  function updateProgress() {
    if (!isDragging && video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      progressFill.style.width = pct + '%';
      progressHandle.style.left = pct + '%';
    }
    currentTimeEl.textContent = formatTime(video.currentTime);
  }

  function updateTotalTime() {
    totalTimeEl.textContent = formatTime(video.duration);
  }

  function togglePlay(e) {
    if (e) e.stopPropagation();
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }

  function toggleMute(e) {
    if (e) e.stopPropagation();
    if (video.muted) {
      video.muted = false;
      if (video.volume === 0) video.volume = 1;
    } else {
      video.muted = true;
    }
    updateMuteState();
  }

  function toggleFullscreen(e) {
    if (e) e.stopPropagation();
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
      fullscreenIcon.className = 'fas fa-compress';
    } else {
      document.exitFullscreen();
      fullscreenIcon.className = 'fas fa-expand';
    }
  }

  function seekTo(clientX) {
    const rect = progressBar.getBoundingClientRect();
    let pct = (clientX - rect.left) / rect.width;
    pct = Math.max(0, Math.min(1, pct));
    if (video.duration) {
      video.currentTime = pct * video.duration;
    }
    progressFill.style.width = (pct * 100) + '%';
    progressHandle.style.left = (pct * 100) + '%';
  }

  // Event Listeners
  video.addEventListener('click', togglePlay);
  bigPlayBtn.addEventListener('click', togglePlay);
  playPauseBtn.addEventListener('click', togglePlay);
  muteBtn.addEventListener('click', toggleMute);
  fullscreenBtn.addEventListener('click', toggleFullscreen);

  container.addEventListener('click', function (e) {
    const isControl = e.target.closest('.video-btn, .video-progress-wrap, .video-big-play');
    if (!isControl) {
      togglePlay(e);
    }
  });

  video.addEventListener('play', updatePlayState);
  video.addEventListener('pause', updatePlayState);
  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('loadedmetadata', updateTotalTime);
  video.addEventListener('ended', () => {
    updatePlayState();
    video.currentTime = 0;
    progressFill.style.width = '0%';
    progressHandle.style.left = '0%';
  });

  // Barra de progresso — mouse
  progressWrap.addEventListener('click', (e) => {
    e.stopPropagation();
    seekTo(e.clientX);
  });

  progressWrap.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    isDragging = true;
    progressWrap.classList.add('is-dragging');
    seekTo(e.clientX);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      seekTo(e.clientX);
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      progressWrap.classList.remove('is-dragging');
    }
  });

  // Touch support para mobile
  progressWrap.addEventListener('touchstart', (e) => {
    e.stopPropagation();
    isDragging = true;
    progressWrap.classList.add('is-dragging');
    seekTo(e.touches[0].clientX);
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      seekTo(e.touches[0].clientX);
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      progressWrap.classList.remove('is-dragging');
    }
  });

  // Fullscreen change listener
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      fullscreenIcon.className = 'fas fa-compress';
    } else {
      fullscreenIcon.className = 'fas fa-expand';
    }
  });

  // Inicializa estados
  video.muted = true;
  updatePlayState();
  updateMuteState();
}
