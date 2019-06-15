var box1;
var track;

function setup() {
    createCanvas(innerWidth,innerHeight);
    box1 = new Box();
    track = loadImage('./assets/track.png');
}

function draw() {
    background(255);
    
    image(track,innerWidth/2,innerHeight/2,innerWidth,innerHeight);
    
    box1.show();
    box1.update();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        box1.thrusting(true,0.8); 
    }
    if(keyCode === DOWN_ARROW){
        box1.thrusting(true,-0.8);
    } 
    if(keyCode === LEFT_ARROW){
        box1.turn(-0.06);
    }
    if(keyCode === RIGHT_ARROW){
        box1.turn(0.06);
    }
}

function keyReleased(){
    box1.turn(0);
    box1.thrusting(false);
}