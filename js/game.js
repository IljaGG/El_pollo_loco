let canvas;
let world;
let keyboard = new Keyboard;

game_sound = new Audio('audio/game-sound.mp3');



function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    world.animate();
    this.game_sound.play();
    this.game_sound.volume = 0.2;
}

function startGame() {
    let startImage = document.getElementById('start-wrapper')
    let startButton = document.getElementById('start-btn');
    let gameCanvas = document.getElementById('canvas');
    let btnTop = document.getElementById('top-mobile-btn');
    let btnBottom = document.getElementById('bottom-mobile-btn');
    startImage.classList.add('d-none');
    startButton.classList.add('d-none');
    startButton.blur();
    gameCanvas.classList.remove('d-none');
    btnTop.classList.remove('d-none');
    btnBottom.classList.remove('d-none');
    init();
}

function reloadGame() {
    window.location = 'index.html';
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }


});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});










