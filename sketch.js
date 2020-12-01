var database;
var gameState = 0, playerCount = 0, form, player, game;
var allPlayers;
var distance = 0;
var car1, car2, car3, car4, cars;

function setup(){
    createCanvas(displayWidth - 90, displayHeight - 130);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }

    drawSprites();
}
