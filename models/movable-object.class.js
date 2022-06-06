class MovableObject extends DrawableObject {

    speed = 0.11;
    otherDirecton = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    coinAmmount = 0;
    bottleAmmount = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }
    

    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
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
        this.coinAmmount ++;
    }

    collectBottle() {
        this.bottleAmmount ++;
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in MS
        timePassed = timePassed / 1000; // Difference in seconds
        return timePassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
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