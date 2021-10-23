var car, carImg;
var background, bckImg;
var apple, appleImg;
var grapesImg, grapes;
var mangoes, mangoesImg;
var tomato, tomatoImg;
var tree, treeImg;
var fuel = 0;
var finishline;

function preload(){
 carImg = loadImage("car.png");
 bckImg = loadImage("track.jpg");
 appleImg = loadImage("apple.png");
 grapesImg = loadImage("grapes.png");
 mangoesImg = loadImage("mangoes.png");
 tomatoImg = loadImage("tomato.png");
 treeImg = loadImage("tree.png");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
 
  background = createSprite(displayWidth/2,-displayHeight*4,displayWidth/2,displayHeight*6);
  background.addImage(bckImg);

  finishline = displayHeight*6;
  
  car = createSprite(displayWidth/2,displayHeight-200,50,50);
  car.addImage(carImg);
  car.scale = 0.1;

  treeGroup = new Group();
  mangoGroup = new Group();
  appleGroup = new Group();
  grapeGroup = new Group();
  tomatoGroup = new Group();
}

function draw() {

  if (keyDown("left")) {
    car.velocityX = -5;
  }
  if (keyDown("right")) {
    car.velocityX = 5;
  }
  background.velocityY = 10;

  if (car.isTouching(mangoGroup)){
   fuel = fuel+1;
   console.log(fuel);
   mangoGroup.destroyEach();
  }
  if (car.isTouching(appleGroup)){
    fuel = fuel+1;
    appleGroup.destroyEach();
   }
 if (car.isTouching(grapeGroup)){
    fuel = fuel+1;
    grapeGroup.destroyEach();
   }
 if (car.isTouching(tomatoGroup)){
    fuel = fuel+1;
    tomatoGroup.destroyEach();
   }
   if (car.isTouching(treeGroup)){
    fuel = fuel-1;
    treeGroup.destroyEach();
   }
   if (car.y>displayHeight*4) {
    background.velocityY = 0;
    treeGroup.velocityY = 0; 
    tomatoGroup.velocityY = 0;
    grapeGroup.velocityY = 0;
    appleGroup.velocityY = 0;
    mangoGroup.velocityY = 0;
   }
   
 spawnTrees();
 spawnApples();
 spawnMangoes();
 spawnGrapes();
 spawnTomatoes();
 drawSprites();
}
function spawnTrees() {
  if (frameCount %100 === 0) {
  x = Math.round(random(windowWidth/4,windowWidth/2+300));
  tree = createSprite(x,windowHeight/4-100,10,10);
  tree.scale = 0.3
  tree.addImage(treeImg);
  tree.velocityY = 3;
  treeGroup.add(tree);
  tree.depth = car.depth;
  car.depth = car.depth+1;
  }
}
function spawnMangoes() {
  if (frameCount %200 === 0) {
  x = Math.round(random(windowWidth/4,windowWidth/2+300));
  mangoes = createSprite(x,windowHeight/4-100,10,10);
  mangoes.scale = 0.2;
  mangoes.addImage(mangoesImg);
  mangoes.velocityY = 3;
  mangoGroup.add(mangoes);
  mangoes.depth = car.depth;
  car.depth = car.depth+1;
  }
}
function spawnApples() {
  if (frameCount %150 === 0) {
  x = Math.round(random(windowWidth/4,windowWidth/2+300));
  apple = createSprite(x,windowHeight/4-100,10,10);
  apple.scale = 0.2;
  apple.addImage(appleImg);
  apple.velocityY = 3;
  appleGroup.add(apple);
  apple.depth = car.depth;
  car.depth = car.depth+1;
  }
}
function spawnGrapes() {
  if (frameCount %250 === 0) {
  x = Math.round(random(windowWidth/4,windowWidth/2+300));
  grapes = createSprite(x,windowHeight/4-100,10,10);
  grapes.scale = 0.2;
  grapes.addImage(grapesImg);
  grapes.velocityY = 3;
  grapeGroup.add(grapes);
  grapes.depth = car.depth;
  car.depth = car.depth+1;
  }
}
function spawnTomatoes() {
  if (frameCount %300 === 0) {
  x = Math.round(random(windowWidth/4,windowWidth/2+300));
  tomato = createSprite(x,windowHeight/4-100,10,10);
  tomato.scale = 0.2;
  tomato.addImage(tomatoImg);
  tomato.velocityY = 3;
  tomatoGroup.add(tomato);
  tomato.depth = car.depth;
  car.depth = car.depth+1;
  }
}
