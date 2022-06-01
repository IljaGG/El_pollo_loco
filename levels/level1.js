const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3, 0)

    ],
    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ],
    [
        new Coin('img/8.Coin/Moneda1.png', 200, 200),
        new Coin('img/8.Coin/Moneda1.png', 240, 160),
        new Coin('img/8.Coin/Moneda1.png', 300,130),
        new Coin('img/8.Coin/Moneda1.png', 360, 130),
        new Coin('img/8.Coin/Moneda1.png', 420, 160),
        new Coin('img/8.Coin/Moneda1.png', 470, 200)
    ]

);