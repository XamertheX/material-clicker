// export let clickSound = './../sound/click.mp3';

export function playSound(path) {
  let audio = new Audio(path);
  audio.play();
}
