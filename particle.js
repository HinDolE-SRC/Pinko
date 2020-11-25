class particle{
    constructor(x,y){
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r);
        this.color = color(random(1,255),random(1,255),random(1,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop()
    }
}