class Bottle extends MovableObject{

    IMAGES_BOTTLE = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        
        this.x = 200 + Math.random() * 5752;
        this.y = 350;
        this.height = 70;
        this.width = 60;
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 300);

    }
}