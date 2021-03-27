class GreenBlock{
    constructor(x,y){
        super(x,y,20,30)
    }
display(){
    fill(75,200,206);
    if(this.body.speed<3){

    }
        else{
        
            World.remove(world,this.body)
            push();
            this.Visibility=this.Visibility-4;
            tint(255,this.Visibility);
            rect(this.x,this.y,20,30)
            pop();
        }
   
    }
    }

