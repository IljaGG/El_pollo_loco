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

    IMAGES_ANGRY = [
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/3.Herida/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_giganton-Dosa_Gallinota-/4.Muerte/G26.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ANGRY);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 6500;

    }


    animate() {

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout (() => {
                    this.youWonImg();
                }, 2000);
                setTimeout (() => {
                    this.reload();
                }, 4000);
                
            }
            else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_ANGRY);
            }

            else if (this.world.endbossIsInSight() == true) {

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

    youWonImg() {
        let youWonImg = document.getElementById('you-won-wrapper');
        let youWonImgBackground = document.getElementById('you-won-wrapper-background');
        youWonImg.classList.remove('d-none');
        youWonImgBackground.classList.remove('d-none');
    }

    reload() {
        window.location = 'index.html';
    }
}


