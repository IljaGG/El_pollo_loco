class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];
    endboss = this.level.enemies.find(e => e instanceof Endboss);
    chicken = this.level.enemies.find(e => e instanceof Chicken);

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.runCharacter();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
        this.chicken.world = this;
    }

    animate() {
        this.level.animateLevel();
        this.character.animate();
    }

    runCharacter() {
        setInterval(() => {
            this.checkCollisions();
        }, 200);
    }

    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCoinCollisions();
            this.checkBottleCollisions();
            this.chickenIsInSight();
        }, 1000 / 25);
    }

    checkThrowObjects() {

        if (this.keyboard.D && this.bottleBar.bottlesAmmount > 0) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottleBar.bottlesAmmount --;
            this.keyboard.D = false;
        }

    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }


    endbossIsInSight() {
        if (this.endboss.x - (this.character.x + this.character.width) < 200) {
            return true;
        } else {
            return false;
        }
    }

    chickenIsInSight() {
        this.level.enemies.forEach((enemie) => {
            if (enemie instanceof Chicken && enemie.x - (this.character.x + this.character.width) < 200) {
                enemie.inSight = true;
            }
            if (enemie instanceof Chicken && (enemie.x + enemie.width) - this.character.x < -200) {
                enemie.inSight = false;
            }
        });
    }

    checkCoinCollisions() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin();
                this.coinBar.setCoinAmmount(this.character.coinAmmount);
                this.level.coins.splice(index, 1);
            }
        });
    }

    checkBottleCollisions() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectBottle();
                this.bottleBar.setBottleAmmount(this.bottleBar.bottlesAmmount);
                this.level.bottles.splice(index, 1);
            }
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
        // ----- space for fixed objects -----
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);

        // draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        //border
        mo.drawFrame(this.ctx);
        //border
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}