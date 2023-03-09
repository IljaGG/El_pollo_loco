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
    let gameInfo = document.getElementById('game-info');
    let gameInfoBackground = document.getElementById('game-info-background');
    let startImage = document.getElementById('start-wrapper');
    let startButton = document.getElementById('start-btn');
    let gameCanvas = document.getElementById('canvas');
    let btnTop = document.getElementById('top-mobile-btn');
    let btnBottom = document.getElementById('bottom-mobile-btn');

    startImage.classList.add('d-none');
    startButton.classList.add('d-none');
    startButton.blur();
    gameInfo.classList.remove('d-none');
    gameInfoBackground.classList.remove('d-none');

    setTimeout(() => {
        gameInfo.classList.add('d-none');
        gameInfoBackground.classList.add('d-none');
        gameCanvas.classList.remove('d-none');
        btnTop.classList.remove('d-none');
        btnBottom.classList.remove('d-none');
        init();
    }, 4000);
}

function goFullScreen(){
    let canvas = document.getElementById('canvas');
    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
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










