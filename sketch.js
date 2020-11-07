var dog,happyDog,database,foodS,foodStock;

var dogImg,dogHappy,milkImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
  milkImg = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  
  dog=createSprite(250,300,20,20)
  dog.addImage(dogImg);
  dog.scale=0.16;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    }

  fill("white");
  text("Note: Press UP_ARROW To Feed Drago Milk",100,20);

  drawSprites();
 
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x+1;
  }

database.ref('/').update({
  Food:x
})
}


