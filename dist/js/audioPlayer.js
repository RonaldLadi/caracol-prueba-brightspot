document.addEventListener('click', (e) => {
    const btn = e.target.closest('.audio-player__btn');
    if (!btn) return;
  
    const player = btn.closest('.audio-player');
    const audio = player.querySelector('audio');
  
    if (audio.paused) {
      audio.play();
      btn.textContent = '❚❚';
    } else {
      audio.pause();
      btn.textContent = '▶';
    }
  });
  