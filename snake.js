class Snake {
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.xspeed =  1 ; 
        this.yspeed = 0 ;
        this.total = 0 ;
        this.tail = [];

    }
    update(){
        if(this.total === this.tail.length){
            for(let i = 0 ; i < this.tail.length-1 ; i++ ){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
        score = str(this.total);
    }
    show(){
        for(let i = 0 ; i < this.tail.length ; i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
           
        }
        fill(255);
        rect(this.x, this.y, scl, scl);
        
    }
    dir(x, y){
        this.xspeed = x ;
        this.yspeed = y ;
    }
    eatsfood(food){
       let fooddist = dist(this.x, this.y, food.x, food.y);
       if (fooddist < 16  ){
        this.total = this.total + 1 ;
       return true
        }
        else return false;
    }
    foul(){
        for(let i = 0 ; i < this.tail.length ; i++){
            let pos = this.tail[i];
            let dis = dist(this.x, this.y, pos.x, pos.y);
            if (dis < 16 ){
                gameover();
            }
        }
        
    }

}