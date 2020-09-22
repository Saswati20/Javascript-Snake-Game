function fruit() {
    this.x;
    this.y;

    this.locate= function(){
        this.x = (Math.floor(Math.random() * columns-1) + 1)*boxScale;
        this.y = (Math.floor(Math.random() * rows-1) + 1)*boxScale;
    }

    this.drawFruit = function() {
        ctx.fillStyle = "#f00"
        ctx.fillRect(this.x, this.y, boxScale, boxScale);
    }
}