var database;
var gameState = 0, playerCount = 0, form, player, game;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    drawSprites();
}