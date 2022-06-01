class ThrowableObject extends MovableObject {
    
   

    constructor(x, y) {
        super().loadImage('img/6.botella/Rotacien/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
        this.width = 65;
        this.height = 70;
        this.throw(100, 180);
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}