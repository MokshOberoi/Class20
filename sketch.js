var backgroundImage ;
var cat , catGoing , catImage , mouse , mouseGift , mouseImage ;

function preload() {
    //load the images here
    backgroundImage = loadImage("./images/garden.png");

    catGoing = loadAnimation("./images/tomTwo.png","./images/tomThree.png")
    catImage = loadImage("./images/tomOne.png");
    catSitting = loadImage("./images/tomFour.png");

    mouseImage = loadImage("./images/jerryOne.png")
    mouseBetween = loadImage("./images/jerryThree.png");
    mouseLast = loadImage("./images/jerryFour.png");

}

function setup(){
    createCanvas(600,600);

    background(backgroundImage);

    //create tom and jerry sprites here
    mouse = createSprite(120,500,20,20);
    mouse.addImage(mouseImage);
    //mouse.addImage(mouseImage);
    mouse.scale = 0.1;

    cat = createSprite(500,500,20,20);
    cat.addImage(catImage);
    cat.scale = 0.1;


}

function draw() {

  
    //Write condition here to evalute if tom and jerry collide
    if ( isTouching(cat,mouse)){
        cat.addImage("catSitting");
        cat.changeAnimation("catSitting");

    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catGoing);
      cat.changeAnimation("catRunning");
  }

}
