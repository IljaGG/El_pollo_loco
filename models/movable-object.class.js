class MovableObject extends DrawableObject {

    speed = 0.11;
    otherDirecton = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    coinAmmount = 0;
    bottleAmmount = 0;
    timeNow = 0;
    lastAction = 0;
    characterIsMoving = false;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }
/* deadPepe geht noch nicht, er soll unter Erde fallen, wenn tot
    applyGravityForDeadPepe() { 
        if (this.isDead()) {
        setInterval(() => {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
        }, 1000 / 25);
    }
    }*/
    

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else if (this instanceof Character) {
            return this.y < 180;
        } else {
            return this.y < 372;
        }
    }


    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    collectCoin() {
        this.coinAmmount++;
    }

    collectBottle() {
        this.bottleAmmount++;
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in MS
        timePassed = timePassed / 1000; // Difference in seconds
        return timePassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    kill() {
        this.energy = 0;
    }

    checkCharacterMoving() {
        if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.D || this.isAboveGround()) {
            this.lastAction = new Date().getTime();
        }
        this.timeNow = new Date().getTime();
    }

    restOrSleepAnimation() {
        if (this.timeNow - this.lastAction > 8000) {
            this.playAnimation(this.IMAGES_SLEEPING);
        } else if (this.timeNow - this.lastAction > 4000) {
            this.playAnimation(this.IMAGES_BORED);
        }
    }
    
    boredAnimation() {
        if (this.timeNow - this.lastAction > 6000) {
            this.playAnimation(this.IMAGES_SLEEPING);
        }
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currenImage % images.length; // MODULO!
        let path = images[i];
        this.img = this.imageCache[path];
        this.currenImage++;
    }

    jump() {
        this.speedY = 23;
    }


}