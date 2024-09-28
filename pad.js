class Pad{
    constructor(c_width,c_height,x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.c_width = c_width;
        this.c_height = c_height;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        //ctx.stroke();
        this.speed=0;
        this.acceleration=1;
        this.maxSpeed=18;
        this.friction=0.05;
        this.controls=new Controls();
    }
    
    pad_loc(){
        this.#lo();
    }
    #lo(){
        this.loc = [this.x,this.y];
        console.log(this.loc);
    }
    update(){
        //this.pad_loc();
         this.#move();
         //console.log(this.x,this.y,this.width,this.height);

    }
    #move(){
        if(this.controls.left){
            this.speed+=this.acceleration;
        }
        if(this.controls.right){
            this.speed-=this.acceleration;
        }

        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed){
            this.speed=-this.maxSpeed;
        }

        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }

        if(this.x+this.width/2>this.c_width){
            this.speed = -this.speed;
        }
        //console.log(this.speed);
        if(this.x-this.width/2<0){
            this.speed = -this.speed;
        }

        this.x-=this.speed;
    }


    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        //console.log(this.x,this.y);
       
        ctx.beginPath();
        ctx.strokeStyle = "#20aaf9";
        ctx.strokeRect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.restore();
    }
    
}