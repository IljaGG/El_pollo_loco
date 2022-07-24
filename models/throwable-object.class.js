class ThrowableObject extends MovableObject {

    IMAGES = [
        'img/6.botella/Rotacien/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotacien/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotacien/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotacien/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        'img/6.botella/Rotacien/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotacien/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotacien/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotacien/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotacien/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotacien/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    world;
    glass_sound = new Audio('audio/breaking_glass.mp3');
    breaked = false;


    constructor(x, y) {
        super().loadImage('img/6.botella/Rotacien/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.width = 65;
        this.height = 70;
        this.speedY = 25;
        this.applyGravity();
        this.throw();
    }

    throw() {
        setInterval(() => {
            if (this.breaked) {
                this.playAnimation(this.IMAGES_SPLASH);
               this.glass_sound.play();
               // this.breaked = false;
            }
            else
            this.playAnimation(this.IMAGES);
        }, 100);

        setInterval(() => {
            this.x += 10;
        }, 30);
    }

}