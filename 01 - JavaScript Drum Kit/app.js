"use strict";
const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
    const { propertyName } = e;
    if (propertyName !== 'transform')
        return;
    this.classList.remove('playing');
}
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio || !key)
        return;
    audio.play();
    key.classList.add('playing');
}
window.addEventListener('keydown', playSound);
// transitonEvent didn't work as type on removeTransition.
