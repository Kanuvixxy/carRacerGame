class Game
{
    constructor(){
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val()
        });
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();

            
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);

        cars = [car1, car2, car3, car4];

        car1.visible = false;
        car2.visible = false;
        car3.visible = false;
        car4.visible = false;
        }
    }

    play(){
        form.hide();

        car1.visible = true;
        car2.visible = true;
        car3.visible = true;
        car4.visible = true;

        /*textSize(30);
        text("Game started", 120, 100);
        */

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            var index = 0;
            var x = 0;
            var y;

            //var displayPosition = 130;

            for(var plr in allPlayers){
                index += 1;

                /*if(plr === "player" + player.index){
                    fill("red")
                }

                else{
                    fill("black");
                }*/
                x += 200;
                y = displayHeight - allPlayers[plr].distance;

                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if(index === player.index){
                    cars[index - 1].shapeColor = "red";

                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                }
            //displayPosition += 20;

            /*textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition);*/
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}
