class Coin extends MovableObject {

    IMAGES_COIN = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    width = 100;
    height = 100;
    
    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        
        this.x = 200 + Math.random() * 2500;
        this.y = 250 - Math.random() * 200;
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 120);

    }

}