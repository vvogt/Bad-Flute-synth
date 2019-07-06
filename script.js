/*jshint esversion: 6 */

window.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    let key = document.querySelector(`.key[data-key='${e.keyCode}']`);

    if(!audio) return;

    audio.play();
    key.classList.add('playing');
});

window.addEventListener('keyup', function (e) {
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    let key = document.querySelector(`.key[data-key='${e.keyCode}']`);

    if (!audio) return;

    audio.pause();
    audio.currentTime= 0;
    key.classList.remove('playing');
});