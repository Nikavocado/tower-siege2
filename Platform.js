class Platform{
    constructor(x,y,width,height){
  var options={
isStatic:true,
}
this.body=Bodies.rectangle(x,y,width,height,options);
 this.radius=radius;
World.add(world,this.body);
    
 }
 display(){
var pos=this.body.position;
fill(64,45,38);
rect(CENTER)
rect(pos.x,pos.y,this.width,this.height);
        }
    
}