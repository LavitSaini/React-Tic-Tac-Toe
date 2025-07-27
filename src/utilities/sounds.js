import buttonSoundAudioFile from "/audio/button_click_sound.mp3";
import winningSoundAudioFile from "/audio/winning_sound.mp3";
import buttonSoundAudioFile2 from "/audio/click_button_sound_2.mp3";


export function playButtonSound() {
  const audio = new Audio(buttonSoundAudioFile);
  audio.play();
}

export function playWinningSound() {
  const audio = new Audio(winningSoundAudioFile);
  audio.play();
}

export function playButtonSound2() {
  const audio = new Audio(buttonSoundAudioFile2);
  audio.play();
}
