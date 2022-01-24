let keys = document.querySelectorAll(`.key`);

function handleKeyDown(event){
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return;
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add(`playing`);
    audio.currentTime = 0;
    audio.play();
    // console.log(audio);
    // console.log(key);
}

function removeTransition(event){
    if(event.propertyName !== "transform") return;
    event.target.classList.remove(`playing`);
    // console.log(event);
}

window.addEventListener(`keydown`, handleKeyDown);
keys.forEach(key => {
    key.addEventListener(`transitionend`, removeTransition);
})