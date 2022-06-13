class Coin extends MovableObject {

    IMAGES_COIN = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];
   
    offset = {
        top: 25,
        left: 25,
        right: 25,
        bottom: 25
    };
    
    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        
        this.x = 200 + Math.random() * 5752
        this.y = 250 - Math.random() * 150;
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