class CoinBar extends DrawableObject {

    IMAGES_COIN_BAR = [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/80__1.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/100__1.png'
    ];

    coinsAmmount = 0;

    constructor() {
        super().loadImage('img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png');
        this.loadImages(this.IMAGES_COIN_BAR);
        this.x = 60;
        this.y = 60;
        this.width = 190;
        this.height = 50;
        this.setCoinAmmount(0);
    }

    setCoinAmmount(coinsAmmount) {
        this.coinsAmmount = coinsAmmount;
        let path = this.IMAGES_COIN_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.coinsAmmount == 10) {
            return 5;
        } else if (this.coinsAmmount >= 8) {
            return 4;   
        } else if (this.coinsAmmount >= 6) {
            return 3;
        } else if (this.coinsAmmount >= 4) {
            return 2;
        } else if (this.coinsAmmount >= 2) {
            return 1;
        } else if (this.coinsAmmount >= 0) {
            return 0;
        }
    }

}