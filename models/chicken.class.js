class Chicken extends MovableObject{
    

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_bsico/Version_Gallinita_estas_salen_por_orden_de_la_gallina_gigantona/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_bsico/Version_Gallinita_estas_salen_por_orden_de_la_gallina_gigantona/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_bsico/Version_Gallinita_estas_salen_por_orden_de_la_gallina_gigantona/3.Ga_paso izquierdo.png'
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_bsico/Version_Gallinita_estas_salen_por_orden_de_la_gallina_gigantona/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.y = 355;
        this.width = 55;
        this.height = 70;
        
        this.speed = 0.25 + Math.random() * 0.25;
        //this.animate();
        
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 120);

    }

}