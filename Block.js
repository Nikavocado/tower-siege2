class Block{
    constructor(x,y,width,height){
        var options={
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        World.add(world,this.body);

    }
    display(){
    var pos=this.body.position;
    fill(176,219,83);
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height);
    fill("white");
    }
}