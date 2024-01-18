const pianokeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckBox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("./tunes/a.wav");

const playTune = (key) => {
    audio.src = `./tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key=${key}]`);
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150);
}

pianokeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const showHideKeys = (e) => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
}

keysCheckBox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);