class Form
{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3');
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racer Game");
        title.position(displayWidth / 2 - 130, 0);

        this.input.position(displayWidth / 2 - 120, displayHeight / 2 - 80);
 
        this.button.position(displayWidth / 2 - 60, displayHeight / 2);

        this.button.mousePressed(() => {
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth / 2 - 40, displayHeight / 4);
        });
    }
}
