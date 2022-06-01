class Bottle extends MovableObject{

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        
        this.x = 200 + Math.random() * 2500;
        this.y = 350;
        this.height = 70;
        this.width = 60;
        
    }
}