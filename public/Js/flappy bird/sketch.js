var bird;
var pipes = [];
var r = 0;
var g = 100;
var b = 200;

var gameOver = document.getElementById('gameover');

function setup() {
    createCanvas(innerWidth-1,innerHeight-3.7);

    bird = new Bird();
}

function draw() {
    background(r,g,b);

    for(let i = 0 ; i < pipes.length; i++){    
        if(pipes[i].hit(bird)){
            GameOver();
        }
        pipes[i].show();
        pipes[i].move();

        if(pipes[i].offscreen()){
            pipes.splice(i,1);
        }

        if(pipes[i].score(bird)){
            console.log("score");
        } 
    }

    bird.update();
    bird.show();

    if(frameCount % 120 == 0){
        pipes.push(new Pipe());
    }

}

function keyPressed(){
    if(key === " "){
        bird.fly();
    }
}
function mousePressed(){
    bird.fly();
}

function GameOver(){
    gameOver.innerHTML = 'Game Over!';
    r = 0;
    g = 0;
    b = 0;
    bird.gameover();
    for(let j = 0;j<pipes.length;j++){
        pipes[j].gameOver();
    }
}