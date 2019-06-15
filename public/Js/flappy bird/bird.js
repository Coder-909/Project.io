class Bird{
    constructor(){
        this.x = 100;
        this.y = height/2;
        this.r = 15;
        this.vy = 0;
        this.gravity = 0.3;
        this.fv = 4;
        this.d = true;
    }

    update(){
        this.y += this.vy;

        if(this.y + this.r >= height){
            this.vy = 0;
        }else{
            this.vy += this.gravity; 
        }
        if(this.y -this.r <= 0){
            this.vy = 0;
            this.vy += this.gravity;
        }
    }

    gameover(){
        this.d = false;
    }

    fly(){
        this.vy = -this.fv;
    }

    score(pipe){
        if(this.y > pipe.topHeight && this.y < height - pipe.bottomHeight){
            if(this.x > pipe.x && this.x < pipe.x + pipe.width){
                return true;
            }
        }else{
            return false;
        }
    }

    show(){
        noStroke();
        fill(255);
        if(this.d){
            ellipse(this.x,this.y,this.r*2);
        }else{
            //return nothing
        }
    }
}