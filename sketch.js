const Engine =Matter.Engine;
const World=Matter.World
const Body=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world;

function setup() {
  createCanvas(800,400);

  engine.Engine.create();
  world-engine.world
  block1= new BlueBlock(500,360,20,30)
  block2= new YellowBlock(520,360,30,20)
  block3=new GreenBlock(540,360,30,20)
  block4=new RedBlock(560,360,30,20)
  block5=new GreenBlock(580,360,30,20)
  block6= new YellowBlock(600,360,30,20)


  block7=new  RedBlock(510,330,30,20)
  block8= new YellowBlock(530,330,30,20)
  block9= new BlueBlock(550,330,30,20)
  block10= new GreenBlock(570,330,30,20)
  block11= new RedBlock(590,330,30,20)

  block12=new YellowBlock(520,310,20,30)
  block13=new BlueBlock(540,310,20,30)
  block14=new RedBlock(560,310,20,30)
  block15=new GreenBlock(580,310,20,30)

  block16=new YellowBlock(530,280,20,30)
  block17=new RedBlock(550,310,20,30)
  block18=new GreenBlock(570,310,20,30)

  block19=new BlueBlock(540,250,20,30)
  block20=new RedBlock(560,250,20,30)

  block21=new RedBlock(550,220,20,30)

  block22=new GreenBlock(500,135,20,30)
  block23=new BlueBlock(520,250,20,30)
  block24=new YellowBlock(540,250,20,30)
  block25=new RedBlock(560,250,20,30)
  block26=new GreenBlock(580,250,20,30)
  block27=new YellowBlock(600,250,20,30)

  block28=new BlueBlock(510,185,20,30)
  block29=new RedBlock(530,105,20,30)
  block30=new YellowBlock(550,105,20,30)
  block31=new GreenBlock(570,105,20,30)
  block32=new RedBlock(590,105,20,30)

  block33=new YellowBlock(520,75,20,30)
  block34=new BlueBlock(540,75,20,30)
  block35=new RedBlock(560,75,20,30)
  block36=new GreenBlock(580,75,20,30)

  block37=new YellowBlock(530,45,20,30)
  block38=new BlueBlock(550,45,20,30)
  block39=new GreenBlock(570,45,20,30)

  ball=new Ball(0,0,50)

  spring=new ProjectTile(ball.body,{x:200,y:200});
  ground= new Platform(400,390,800,20);
  groundHovering= new Platform(550,160,200,20);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine)

  debug:true;

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  block29.display()
  block30.display()
  block31.display()
  block32.display()
  block33.display()
  block34.display()
  block35.display()
  block36.display()
  block37.display()
  block38.display()
  block39.display()
  
  ball.display()
  spring.display()
  ground.display()
  groundHovering.display()
  


  drawSprites();

}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  spring.realese();
}

function keyPressed(){
if(keyCode===32){
  spring.attach(ball.body)
}

}
