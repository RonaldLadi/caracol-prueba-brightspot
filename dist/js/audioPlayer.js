class AudioPlayer {
  constructor() {
    this.buttonSelector = '.audio-player__btn';
    this.playerSelector = '.audio-player';
  }

  init() {
    document.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    const btn = event.target.closest(this.buttonSelector);
    if (!btn) return;

    const player = btn.closest(this.playerSelector);
    if (!player) return;

    const audio = player.querySelector('audio');
    if (!audio) return;

    this.toggleAudio(audio, btn);
  }

  toggleAudio(audio, btn) {
    if (audio.paused) {
      audio.play();
      this.updateButton(btn, true);
    } else {
      audio.pause();
      this.updateButton(btn, false);
    }
  }

  updateButton(btn, isPlaying) {
    btn.textContent = isPlaying ? '❚❚' : '▶';
    btn.setAttribute('aria-pressed', isPlaying);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = new AudioPlayer();
  audioPlayer.init();
});
