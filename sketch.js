var tom,tomImage;
var jerry,jerryImage;
var garden,gardenImage;

function preload() {
  //load the images here
 gardenImage=loadImage("images/garden.png");
 tomImage=loadImage("images/tomTwo.png")
 jerryImage=loadImage("images/jerryOne.png")
 
}


function setup(){
  createCanvas(1000,800);
  //create tom and jerry sprites here
  garden=createSprite(500,350);
  garden.addImage(gardenImage);
  garden.scale = 1

  tom=createSprite(680,600)
  tom.addImage(tomImage);
  tom.scale = 0.2

  jerry=createSprite(400,600);
  jerry.addImage(jerryImage);
  jerry.scale = 0.2
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    garden.velocityX=5;
   if(garden.x > 400){
     garden.x = 300
  }
    drawSprites();
    
  }


function keyPressed(){

  //For moving and changing animation write code here


}
