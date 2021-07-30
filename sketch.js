var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,carrotImg,snakeImg;
var score=0,gameSate="PLAY";
var appleGr,carrotGr,snakeGr;
var gameOver,gameOverImg;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png.png")
  carrotImg = loadImage("carrot.png")
  snakeImg = loadImage("snake.png")
  gameOverImg = loadImage("gameOver.png")
}

function setup()
{
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,380,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  gameOver = createSprite(180,200,30,30);
  gameOver.scale =0.9;
  gameOver.addImage(gameOverImg);

  appleGr=new Group();
  carrotGr=new Group();
  snakeGr=new Group();

  var rand =  Math.round(random(1,100))
  console.log(rand)
}


function draw()
{
  background(0);
  
  edges= createEdgeSprites();

  rabbit.x = mouseX
  rabbit.collide(edges);
  var select_sprites=Math.round(random(1,2));
 
 
  if(frameCount%80===0)
  {
    if(select_sprites===1)
    {
      spawnApple()
    }
    else if (select_sprites===2)
    {
      spawnCarrot()
      spawnSnake()
    }
    
  }
  gameOver.visible=false;

 if(rabbit.isTouching(appleGr))
 {
  appleGr.destroyEach();
  score=score+5
 }
 else if(rabbit.isTouching(carrotGr))
 {
  carrotGr.destroyEach();
  score=score+10
 }
 else if(rabbit.isTouching(snakeGr))
 {
  snakeGr.velocityYEach(0);
  gameState = "END"
  console.log("touching")
  gameOver.visible=true;
 }
 drawSprites();
 textSize(25);
 fill("black");
 text("Score : " + score, 250, 50);

if(gameSate=="END"){
rabbit.velocityX = 0;
console.log("End")
carrotGr.setLifetimeEach(0);
appleGr.setLifetimeEach(0);
snakeGr.setLifetimeEach(0);

}
}
function spawnApple()
{
  var apple;
    apple=createSprite(windowWidth-30,windowHeight-windowHeight+10,40,10);
    apple.velocityY=3;
    apple.addImage("apple",appleImg);
    apple.scale=0.09;
    apple.x=Math.round(random(40,380));
    rabbit.depth=apple.depth+1;
    apple.lifetime=340
   appleGr.add(apple);
}


function spawnCarrot()
{

  var carrot=createSprite(380,10,40,10);
    carrot.velocityY=3;
    carrot.addImage("carrot",carrotImg);
    carrot.scale=0.15;
    carrot.x=Math.round(random(50,350));
    rabbit.depth=carrot.depth+1;
    carrot.lifetime=340
  
  carrotGr.add(carrot)
}
function spawnSnake()
{
 
  var snake=createSprite(180,30,40,10);
   snake.velocityY=4;
   snake.addImage("snake",snakeImg);
   snake.scale=0.25;
   snake.x=Math.round(random(30,350));
   snake.depth=rabbit.depth+1;
   snake.lifetime=340
  
  snakeGr.add(snake)
}