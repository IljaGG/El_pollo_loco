class Endboss extends MovableObject {
    y = 145;
    speed = 0.5;
    width = 300;
    height = 300;

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/1.Caminata/G4.png'   
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 6500;
        //this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);

    }

}