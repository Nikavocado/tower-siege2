class ProjectTile{
    constructor(BodyA,BodyB){
        var options={
            BodyA:BodyA,
            BodyB:BodyB,
            stifness:0.4,
            lenght:10,
        }
        this.pointB=pointB;

        this.body=constraint.create(options);
        this.width=width
        this.height=height
        World.add(world,this.body);

    }
    release(){
        this.body.BodyA=null
    }
    display(){
        if(this.body.BodyA){
    var pointA=this.body.BodyA.position;
    var pointB=this.pointB
    strokeWeight(1)
    stroke("grey")
    line(pointA.x,PointA.y,pointB.x,pointB.y)
}

}

}