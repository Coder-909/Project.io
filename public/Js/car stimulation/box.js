var car;

function preload(){
    car = loadImage('./assets/car.png');
}

class Box{
    constructor(){
        this.pos = createVector(random(0,width),random(0,height));
        this.vel = createVector(0,0);
        this.angle = 0;
        this.a = 0;
        this.isThrusting = false;
        this.thrustDir = 0;
    }
    
    thrusting(b,TD){
        this.isThrusting = b;
        this.thrustDir = TD;
    }

    update(){
        if(this.isThrusting){
            this.thrust();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.75);

        this.pos.x = constrain(this.pos.x,0+7,width-7);
        this.pos.y = constrain(this.pos.y,0+12,height-12);
    }

    thrust(){
        var force = p5.Vector.fromAngle(this.angle);
        force.mult(this.thrustDir);
        this.vel.add(force);
    }

    turn(a){
        this.a = a;
    }

    show(){
        this.angle += this.a;
        fill(0);
        translate(this.pos.x,this.pos.y);       
        rotate(this.angle);
        imageMode(CENTER);
        image(car,0,0,40,25);
    }

}