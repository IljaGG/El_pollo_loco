class BottleBar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
    ];

    bottleAmmount = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 60;
        this.y = 20;
        this.width = 190;
        this.height = 50;
        
    }

    resolveImageIndex() {
        if (this.bottleAmmount == 10) {
            return 5;
        } else if (this.bottleAmmount > 8) {
            return 4;
        } else if (this.bottleAmmount > 6) {
            return 3;
        } else if (this.bottleAmmount > 4) {
            return 2;
        } else if (this.bottleAmmount > 2) {
            return 1;
        } else {
            return 0;
        }
    }
}