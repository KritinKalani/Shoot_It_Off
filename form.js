class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createElement("Reset");
    }

    hide() {
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
        this.title.hide()
    }

    display() {
        this.title.html("Shoot It!");
        this.title.position(displayWidth / 2 - 100, 0);

        this.input.position(displayWidth / 2, displayHeight / 2);
        this.reset.position(displayWidth - 50, displayHeight - 50);
        this.button.position(displayWidth / 2 + 100, displayHeight / 2 + 100);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            //Please write code to add Player name in DB


            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);


            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);

            //gameState = gameState + 1;
            //game.update(state)

            //check if the index/player count =1 
            //Player1 
            // name : sdfsdf
            // x : 200 
            //y: 200

            //check if the index/player count =2
            //x:
            //y:
        })

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}