function snake(){

    //initial position, velocity of snake
    this.x = 0;
    this.y = 0;
    this.xVelocity = boxScale;
    this.yVelocity = 0;
    this.score=0;
    this.tail = [];

    //drawing snake of size boxScale*boxScale
    this.drawSnake = function(){
        ctx.fillStyle = "#fff";

        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, boxScale, boxScale);
        }
        ctx.fillRect(this.x, this.y, boxScale, boxScale);
    }

    this.move = function() {
        for(let i=0;i<this.tail.length-1;i++){
            this.tail[i]=this.tail[i+1];
        }

        this.tail[this.score - 1] = {x:this.x, y:this.y};

        this.x += this.xVelocity;
        this.y += this.yVelocity;

        //x overfow
        if(this.x >=columns * boxScale )
            this.x=0;
        else if(this.x < 0 )
            this.x=(columns-1) * boxScale;

        //y overfow
        if(this.y >= rows * boxScale)
            this.y=0;
        else if(this.y < 0 )
            this.y=(rows-1) * boxScale;
    }

    this.changeDirection = function(dir) {
        switch(dir) {
            case 'ArrowRight': 
                this.xVelocity = boxScale;
                this.yVelocity = 0;
                break;

            case 'ArrowLeft': 
                this.xVelocity = -1*boxScale;
                this.yVelocity = 0;
                break;

            case 'ArrowUp': 
                this.xVelocity = 0;
                this.yVelocity = -1*boxScale;
                break;

            case 'ArrowDown': 
                this.xVelocity = 0;
                this.yVelocity = boxScale;
        }
    }

    this.eat = function(fruit) {
        if(this.x == fruit.x && this.y == fruit.y){
            this.score++;
            eatSound.play();
            return true;
        }
        return false;
    }

    this.collision = function() {
        for(let i=0;i<this.tail.length;i++)
        {
            if(this.x == this.tail[i].x && this.y == this.tail[i].y)
            {
                this.score=0;
                this.tail=[];
                hitSound.play();
                
            }
        }
    }
}

