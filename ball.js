class Ball{
    constructor(c_width,c_height,x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.c_width = c_width;
        this.c_height = c_height;
        this.xspeed = Math.random()*10+(-5); 
        this.yspeed = Math.sqrt(25-(this.xspeed)**2)*(Math.random() < 0.5 ? -1 : 1);
        
        
    }
    update(padx,pady,padwidth,padheight){
        //console.log("padx,pady");
        this.padx = padx;
        this.pady = pady;
        this.padwidth = padwidth;
        this.padheight = padheight;
        this.#move();
    }
    #move(){
        //console.log(this.x,this.y);
        //console.log(this.padx,this.pady);
        if(this.y+this.height/2>this.c_height){
            this.yspeed = -this.yspeed;
        }
        //console.log(this.speed);
        if(this.y-this.height/2<0){
            this.yspeed = -this.yspeed;
        }
        if(this.x+this.width/2>this.c_width){
            this.xspeed = -this.xspeed;
        }
        if(this.x-this.width/2<0){
            this.xspeed = -this.xspeed;
        }
        if(dist(this.x,this.padx)<=this.width/2+this.padwidth/2){
            if(dist(this.y,this.pady)<=this.height/2+this.padheight/2){
                this.yspeed = -this.yspeed;
                console.log("in region");
            }
        }
       // console.log(dist(this.y,this.pady),this.height/2+this.padheight/2);
        this.x-=this.xspeed;
        this.y-=this.yspeed;
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        //console.log(this.x,this.y);
        ctx.beginPath();
        ctx.strokeStyle = "#f920aa";
        ctx.strokeRect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.restore();
    }
    }
