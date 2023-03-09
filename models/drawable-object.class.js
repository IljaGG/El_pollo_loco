class DrawableObject {

    drawable = true;

    x = 120;
    y = 180;
    width = 130;
    height = 250;
    img;
    imageCache = {};
    currenImage = 0;
    

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}