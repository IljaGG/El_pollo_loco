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
    endbossHealthBar = new EndbossHealthBar();
    throwableObjects = [];
    endboss = this.level.enemies.find(e => e instanceof Endboss);
    chicken = this.level.enemies.filter(e => e instanceof Chicken);

    glass_sound = new Audio('audio/breaking_glass.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.runCharacter();
        this.run();
        this.touchButtons();
    }

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
        this.chicken.forEach(c => c.world = this);
    }

    animate() {
        this.level.animateLevel();
        this.character.animate();
    }

    runCharacter() {
        setInterval(() => {
            this.checkCollisions();
            this.throwableObjects.forEach(bottle => {
                this.bottleCollideWithEndboss(bottle);
            })
        }, 100);
    }

    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCoinCollisions();
            this.checkBottleCollisions();
            this.endbossIsInSightHealthBar();
        }, 1000 / 25);
    }

    checkThrowObjects() {

        if (this.keyboard.D && this.bottleBar.bottlesAmmount > 0) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.character.bottleAmmount--;
            this.bottleBar.setBottleAmmount(this.character.bottleAmmount);
            this.keyboard.D = false;
        }

    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            this.checkCharacterEnemyCollision(enemy);

        });
    }

    checkCharacterEnemyCollision(enemy) {
        if (this.validateCharacterEnemyCollision(enemy))
            if (this.character.isAboveGround())
                enemy.kill();
            else {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
    }

    validateCharacterEnemyCollision(enemy) {
        return !enemy.isDead() && !this.character.isHurt() && this.character.isColliding(enemy);
    }

    bottleCollideWithEndboss(bottle) {
        if (!bottle.breaked && bottle.isColliding(this.endboss)) {
            this.glass_sound.play();
            this.endboss.hit();
            this.endbossHealthBar.setPercentage(this.endboss.energy);
            bottle.breaked = true;
        }
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
                this.bottleBar.setBottleAmmount(this.character.bottleAmmount);
                this.level.bottles.splice(index, 1);
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

    endbossIsInSightHealthBar() {
        if (this.endboss.x - (this.character.x + this.character.width) < 1200 && !this.endbossHealthBar.drawable) {
           this.endbossHealthBar.drawable = true;
        }
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
        this.addToMap(this.endbossHealthBar);
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
        if (mo.drawable) {
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

    touchButtons() {
        document.getElementById('button-right').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.keyboard.RIGHT = true;
        });
        
        document.getElementById('button-right').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.keyboard.RIGHT = false;
        });
        
        document.getElementById('button-left').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.keyboard.LEFT = true;
        });
        
        document.getElementById('button-left').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.keyboard.LEFT = false;
        });
        
        document.getElementById('button-jump').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.keyboard.SPACE = true;
        });
        
        document.getElementById('button-jump').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.keyboard.SPACE = false;
        });
        
        document.getElementById('button-throw').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.keyboard.D = true;
        });
        
        document.getElementById('button-throw').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.keyboard.D = false;
        });
    }
}