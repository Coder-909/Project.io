var balls = Array(200);

function setup() {
    createCanvas(800,600);

    for(let i = 0; i < balls.length; i++){
        balls[i] = new Ball();
    }
}

function draw() {
    background(170);

    for(let i = 0; i < balls.length; i++){
        balls[i].show();
        balls[i].move();
    }
}