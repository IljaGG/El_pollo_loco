class Level {

enemies;
clouds;
backgroundObjects;
bottles;
coins;
level_end_x = 6400;

constructor(enemies, clouds, backgroundObjects, bottles, coins) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.bottles = bottles;
    this.coins = coins;
}

animateLevel() {
    this.animateAll(this.enemies, this.clouds, this.bottles, this.coins);
}

animateAll(mos) {
    mos.forEach( mo => mo.animate() );
}
}