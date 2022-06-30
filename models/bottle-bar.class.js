class BottleBar extends DrawableObject {

    IMAGES_BOTTLEBAR = [
        'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
    ];

    bottlesAmmount = 0;

    constructor() {
        super().loadImage('img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png');
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.x = 60;
        this.y = 100;
        this.width = 190;
        this.height = 50;
        this.setBottleAmmount(0);
    }

    setBottleAmmount(bottlesAmmount) {
        this.bottlesAmmount = bottlesAmmount;
        let path = this.IMAGES_BOTTLEBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.bottlesAmmount == 10) {
            return 5;
        } else if (this.bottlesAmmount >= 8) {
            return 4;   
        } else if (this.bottlesAmmount >= 6) {
            return 3;
        } else if (this.bottlesAmmount >= 4) {
            return 2;
        } else if (this.bottlesAmmount >= 2) {
            return 1;
        } else if (this.bottlesAmmount >= 0) {
            return 0;
        }
    }
}