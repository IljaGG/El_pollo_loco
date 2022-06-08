class Coin extends MovableObject {

    IMAGES_COIN = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];
   
    offset = {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
    };
    
    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        
        this.x = 200 + Math.random() * 5752
        this.y = 250 - Math.random() * 200;
        this.width = 100;
        this.height = 100;
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 120);

    }

}