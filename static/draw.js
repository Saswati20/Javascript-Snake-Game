const canvas = document.querySelector('.canvasmain')
const ctx = canvas.getContext("2d");
const eatSound = new Audio('static/eat.wav')
const hitSound = new Audio('static/hit.wav')
const dirSound = new Audio('static/dir.wav')

//providing bg color
var grd = ctx.createLinearGradient(0,0,500,0)
grd.addColorStop(0,'green');
grd.addColorStop(1,'lightgreen');
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,500); 

//size of one unit or one box
const boxScale = 20; 

//no of rows and columns
const rows = canvas.height/boxScale;
const columns = canvas.width/boxScale;

var snake;

//this calls itself
(function InitialSetUP() {
    snake = new snake();
    fruit = new fruit();
    fruit.locate();
    initialInterval = 200;

    window.setInterval( function(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,500,500); 
        fruit.drawFruit();
        snake.move();
        snake.drawSnake();

        if(snake.eat(fruit)){
            fruit.locate();
            initialInterval-=5;
        }

        snake.collision();
        document.querySelector('.score').innerText=snake.score;
    },initialInterval);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
}());

window.addEventListener('keydown', function(event){
    dirSound.play();
    var dir = event.key;
    snake.changeDirection(dir);
});
