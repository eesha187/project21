
var speed,weight,wall,thickness,bullet;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
 bullet=createSprite(50,200,50,50);
 wall=createSprite(1200,200,thickness,height/2);
 bullet.velocityX=6;
 
 

}

function draw() {
  background(255,255,255); 
  bullet.collide(wall);
  wall.shapeColor=(80,80,80);

  
  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5*speed*weight*speed/(thickness *thickness*thickness)
    
    if(damage>10){
wall.shapeColor=(255,0,0);


    }

    if(damage<10){
      wall.shapeColor=(0,255,0)

    }
    

  }
  



hasCollided();
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.width;
if (bulletRightEdge>=wallLeftEdge){
  return true


}
return true

}