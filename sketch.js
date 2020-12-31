var player, ground, bananaGroup, obstacleGroup, stone, banana, monkeyImage, bananaImage, stoneImage, backgroundImage, backgroundImg, ground1;

function preload() {
  backgroundImage = loadImage("jungle2.jpg");
  monkeyAnimation = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  bananaImage = loadImage("Bananas.png");
  stoneImage = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 600);
  backgroundImg = createSprite(0, 0, 1500, 1500)
  backgroundImg.addImage("backg",backgroundImage)
  backgroundImg.scale = 1.5;
  ground1 = createSprite(200, 600, 1000, 20);
  banana = createSprite(370, 135, 20, 20);
  banana.scale = 0.02;
  player = createSprite(100, 340, 20, 50);
  player.scale = 0.2;
  ground = createSprite(600, 600, 800, 10);
}

function draw() {

player.addAnimation("monkey", monkeyAnimation);
backgroundImg.velocityX = -4;
ground.x = ground.width/2;

var gravity = 0.5;
  
  ground.visible = false;
  player.collide(ground1);
  
  if(keyDown("space")) {
    player.velocityY = -12;
  }
  
  if (backgroundImg.x < 0){
    backgroundImg.x = backgroundImg.width/2;
  }
  
  var survivalTime = 0;
  stroke("blue");
  textSize(20);
  fill("blue");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  food();
  drawSprites();
  
  player.velocityY = player.velocityY + gravity;
}

function food() {
 if(World.frameCount % 80 === 0) {
    banana.velocityX = -12;
    
    var rand = random(120, 200);
    banana.addAnimation("banana", bananaImage);
    
    banana.lifetime = 70;
  } 
}

function obstacleGroup() {
  if(World.frameCount % 300 === 0) {
    var stone = createSprite(400,365,10,40);
    stone.velocityX = -12;
    
    stone.setAnimation(stoneImage,"stone.png");
  }
}