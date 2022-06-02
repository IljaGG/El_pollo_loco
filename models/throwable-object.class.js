class ThrowableObject extends MovableObject {
    
   IMAGES = [
       'img/6.botella/Rotacien/Mesa de trabajo 1 copia 3.png',
       'img/6.botella/Rotacien/Mesa de trabajo 1 copia 4.png',
       'img/6.botella/Rotacien/Mesa de trabajo 1 copia 5.png',
       'img/6.botella/Rotacien/Mesa de trabajo 1 copia 6.png'
   ];

    constructor(x, y) {
        super().loadImage('img/6.botella/Rotacien/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.width = 65;
        this.height = 70;
        this.throw(100, 180);
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 30);
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 100)
    }
}