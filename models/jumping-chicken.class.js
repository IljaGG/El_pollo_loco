class JumpingChicken extends MovableObject {
    IMAGES = [
        'img/3.Secuencias_Enemy_bsico/Version_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_bsico/Version_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_bsico/Version_pollito/3.Paso_izquierdo.png'
    ];

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_bsico/Version_pollito/1.Paso_derecho.png');
        this.loadImages(this.IMAGES);
        this.x = 200 + Math.random() * 5752;
        this.y = 372;
        this.width = 40;
        this.height = 50;
        this.applyGravity();
        this.speed = 0.25 + Math.random() * 0.45;
        this.speedY = 20;
        //this.animate();

    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 120);

        setInterval(() => {
            this.jump();
        }, 2000 + Math.random() * 2000);

    }
}