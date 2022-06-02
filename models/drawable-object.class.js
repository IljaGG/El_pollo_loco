class DrawableObject {

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


    drawFrame(ctx) {
        if (this instanceof Chicken || this instanceof Character) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}