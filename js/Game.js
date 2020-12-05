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

            form.reset.hide();
            
        car1 = createSprite(150, 200);
        car1.addImage(car1Img);

        car2 = createSprite(350, 200);
        car2.addImage(car2Img);

        car3 = createSprite(550, 200);
        car3.addImage(car3Img);

        car4 = createSprite(750, 200);
        car4.addImage(car4Img);

        cars = [car1, car2, car3, car4];

        car1.visible = false;
        car2.visible = false;
        car3.visible = false;
        car4.visible = false;
        }
    }

    play(){
        form.hide();

        form.reset.show();

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            background(198, 135, 103);
            image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            
            car1.visible = true;
            car2.visible = true;
            car3.visible = true;
            car4.visible = true;
 
            var index = 0;

            var x = 220;
            var y = 100;

            for(var plr in allPlayers){
                index += 1;

                x += 300;
                y = displayHeight - allPlayers[plr].distance - 100;

                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if(index === player.index){
                    stroke(10);
                    fill('blue');
                    ellipse(x, y, 60, 60);

                    cars[index - 1].shapeColor = "red";

                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }

        if(player.distance > 5100){
            gameState = 2;
        }
    }

    end(){
        console.log("Game Ended");
        player.distance = 5100;
    }
}