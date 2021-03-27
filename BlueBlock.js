class BlueBlock{
    constructor(x,y){
        super(x,y,20,30)
    }
display(){
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
var pos=this.body.position;
fill(176,219,83);
ellipseMode(CENTER)
ellipse(pos.x,pos.y,this.radius);
}
}
   
    
