class Ball{
    constructor(){
        this.x = random(0,width);
        this.y = random(0,height - 200);
        this.radius = 40;
        this.gravity = 1;
        this.vy = random(0,5);
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);
    }

    move(){
        if(this.y + 2 * this.radius + this.vy >= height + 60){
            this.vy = -this.vy * 0.9;
        }else{
            this.vy += this.gravity;
        }
        this.y += this.vy;
    }

    show(){
        noStroke();
        fill(this.r,this.g,this.b);
        ellipse(this.x,this.y,this.radius)
    }
}