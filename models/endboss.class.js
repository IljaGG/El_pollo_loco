class Endboss extends MovableObject {
    y = 145;
    speed = 0.5;
    width = 300;
    height = 300;
    world;

    offset = {
        top: 30,
        left: 10,
        right: 10,
        bottom: 10
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

    }


    animate() {

        setInterval(() => {
           // if (this.world.endbossIsInSightHealthBar() == true) {
           //     this.showHealthBar();
           // }

            if (this.world.endbossIsInSight() == true) {

                this.playAnimation(this.IMAGES_ALERT);

            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);

        setInterval(() => {
            if (this.world.endbossIsInSight() == false) {
                this.moveLeft();
            }
        }, 1000 / 60)
    }

}

