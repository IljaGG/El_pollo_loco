class Endboss extends MovableObject {
    y = 145;
    speed = 0.5;
    width = 300;
    height = 300;
    world;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/1.Caminata/G4.png'
    ];

    IMAGES_ALERT = [
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/2.Atecion-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/2.Atecion-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/2.Atecion-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/2.Atecion-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/2.Atecion-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/2.Atecion-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/2.Atecion-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/2.Atecion-ataque/1.Alerta/G12.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.x = 6500;
        //this.animate();
    }


    animate() {

        setInterval(() => {

        if (this.world.endbossIsInSight() == true) {
            
                this.playAnimation(this.IMAGES_ALERT);
        
        } else {

            this.moveLeft();
       
            this.playAnimation(this.IMAGES_WALKING);
        }
    }, 200);
    }

}

