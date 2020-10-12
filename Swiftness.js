class Swiftness{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:0.03
        }
        this.xPosition = Math.round(random(0,displayWidth));
        this.body = Bodies.rectangle(this.xPosition,0,50,50,options);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill(0,255,255);
        rectMode(CENTER);
        rect(pos.x,pos.y,50,50);
    }
}