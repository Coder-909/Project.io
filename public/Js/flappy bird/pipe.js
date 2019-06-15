class Pipe{
    constructor(){
        this.topHeight = random(0,height/2);
        this.bottomHeight = random(0,height/2);
        this.x = width;
        this.y1 = 0;
        this.y2 = height - this.bottomHeight;
        this.width = 50;
        this.speed = 2;
        this.r = 60;
        this.g = 220;
        this.b = 60;
    }

    move(){
        this.x -= this.speed;
    }

    gameOver(){
        this.speed = 0;
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }

    hit(bird){
        if(bird.y - bird.r < this.topHeight || bird.y + bird.r > height - this.bottomHeight){
            if(bird.x > this.x && bird.x < this.x + this.width){
                return true;
            }
        }else{
            return false;
        }
    }

    score(bird){
        if(this.x == bird.x - this.width){
            return true;
        }else{
            return false;
        }
    }

    changeColor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    offscreen(){
        if(this.x < -this.width){
            return true;
        }else{
            return false;
        }
    }

    show(){
        fill(this.r,this.g,this.b);
        //Top pipe
        rect(this.x,this.y1,this.width,this.topHeight);

        //Bottom pipe
        rect(this.x,this.y2,this.width,this.bottomHeight);
    }
}