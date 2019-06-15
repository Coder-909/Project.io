var bird;
var pipes = [];
var r = 0;
var g = 100;
var b = 200;

var gameOver = document.getElementById('gameover');
var score = document.getElementById('score');
var score_num = 0;

function setup() {
    createCanvas(850,600);

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
            score_num += 1;
        } 
    }

    bird.update();
    bird.show();

    if(frameCount % 120 == 0){
        pipes.push(new Pipe());
    }

    score.innerHTML = score_num;
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