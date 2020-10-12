const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground, player,player1;
var gun;
var swiftness;
var partner;
var shield;
var chooseObj;
var gunA = [];
var form;
var database;
var allPlayers;
var gameState;
var playerCount;

function preload() {

}

function setup() {
  createCanvas(displayWidth, displayHeight);

  database = firebase.database();

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(displayWidth / 2, displayHeight - 100, displayWidth, 200);
  ground1 = new Ground(displayWidth / 2, displayHeight - 200, displayWidth, 200);
  ground2 = new Ground(displayWidth / 2, displayHeight - 300, displayWidth, 200);
  ground3 = new Ground(displayWidth / 3, displayHeight - 400, displayWidth / 4, 200);
  ground4 = new Ground(displayWidth - 100, displayHeight - 400, displayWidth / 4, 200);
  // player = new Player(200, 200);
  //player1 = new Player(1000, 200);

  game = new Game();
  game.getState();
  form = new Form();


}

function draw() {
  background(255, 255, 255);
  Engine.update(engine);

  if (gameState === 0) {
   
    form.display();
    player = new Player();
    player.getCount();
  }


  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    form.hide();
    ground3.display();
    ground4.display();
    ground2.display();
    ground1.display();
    ground.display();
   /*  player.display();
    player1.display(); */
    chooseObj = Math.round(random(1, 4));
    if (frameCount % 40 === 0) {
      // if(chooseObj === 1){

      gunA.push(new Gun());

      /*   }else if(chooseObj === 2){
          console.log("Creating shield Object");
          shield = new Shield();
          shield.display();
        } else if(chooseObj === 3){
          console.log("Creating partner Object");
          partner = new Partner();
          partner.display();
        }else if(chooseObj === 4){
          console.log("Creating swiftness Object");
          swiftness = new Swiftness();
          swiftness.display();
        } */
    }
    for (var i = 0; i < gunA.length; i++) {
      gunA[i].display();
    }
  }

}
