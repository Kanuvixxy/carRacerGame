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
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racer Game");
        title.position(170, 0);

        this.input.position(170, 160);

        this.button.position(170, 200);

        this.button.mousePressed(() => {
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;
            player.update(name);
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(190, 160);
        });
    }
}