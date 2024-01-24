var audio = document.getElementById("backgroundAudio");
var image = document.getElementById("toggleImage");
var DuckButton = document.getElementById("toggleDucks");
var canQuack = true;

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        image.src = "Images/TurnMusicOn.png";
    } else {
        audio.pause();
        image.src = "Images/TurnMusicOff.png";
    }
}
function toggleDucks() {
    if (canQuack) {
        DuckButton.src = "Images/DuckOff.png";
        canQuack = false;
    } else {
        DuckButton.src = "Images/DuckOn.png";
        canQuack = true;
    }
}

document.addEventListener('keydown', function(e) {
    if (canQuack) {
        document.getElementById('DuckQuack').pause();
        document.getElementById('DuckQuack').currentTime = 0.27;
        document.getElementById('DuckQuack').play();
    }
});