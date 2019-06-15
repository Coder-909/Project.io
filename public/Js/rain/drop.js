class Drop {
    constructor(){
        this.len = random(0,20);
        this.x1 = random(0,width);
        this.x2 = this.x1;
        this.y1 = random(-800,0);
        this.y2 = this.y1 + this.len;
        this.gravity = random(0.1,0.2);
        this.fv = 0;
        this.a = map(this.gravity,0.1,0.2,0,255);
    }

    fall(){
        this.fv += this.gravity;
        this.y1 += this.fv;
        this.y2 += this.fv;

        if(this.y1 >= height){        
            this.len = random(0,20);
            this.x1 = random(0,width);
            this.x2 = this.x1;
            this.y1 = random(-500,-10);
            this.y2 = this.y1 + this.len;
            this.gravity = random(0,0.2);
            this.fv = 0;
        }
    }

    show(){
        strokeWeight(3);
        stroke(255,255,255,this.a);
        line(this.x1,this.y1,this.x2,this.y2);
    }

}