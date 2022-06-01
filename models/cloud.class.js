class Cloud extends MovableObject{
    y = 30;

    width = 385;
    height = 335;
    

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}