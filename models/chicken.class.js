class Chicken extends MovableObject{
    

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_bsico/Version_Gallinita_estas_salen_por_orden_de_la_gallina_gigantona/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_bsico/Version_Gallinita_estas_salen_por_orden_de_la_gallina_gigantona/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_bsico/Version_Gallinita_estas_salen_por_orden_de_la_gallina_gigantona/3.Ga_paso izquierdo.png'
    ];
    world;

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };

    chicken_sound = new Audio('audio/cicken_walk.mp3');

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_bsico/Version_Gallinita_estas_salen_por_orden_de_la_gallina_gigantona/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 5752;
        this.y = 355;
        this.width = 55;
        this.height = 70;
        
        this.speed = 0.25 + Math.random() * 0.25; 
    }

    animate() {
        setInterval(() => {
            this.chicken_sound.pause();
            if (this.world.chickenIsInSight() == true) {
            this.moveLeft();
            this.chicken_sound.play();
        } else if (this.world.chickenIsInSight() == false) {
            this.moveLeft();
        }
        }, 1000 / 60);
        
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 120);

    }

}