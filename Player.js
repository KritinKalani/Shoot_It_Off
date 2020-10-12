class Player {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.4
        }
        this.name;
        this.index;
        this.colour = color(random(0, 255), random(0, 255), random(0, 255));
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        fill(this.colour);
        rectMode(CENTER);
        rect(pos.x,pos.y,20,20);
    }

    getCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name
        });
    }

    /* static getPlayerInfo(){
        var playerInfoRef = database.ref('players').on("value",(data)=>{
            allPlayers = data.val();
        })
    } */
    
    

}