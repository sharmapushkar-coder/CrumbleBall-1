class Paper{
    constructor(x,y){
       var option={
        restitution:0.3,
        friction:0.5,
        density:1.3
       }
       this.x=x;
       this.y=y
       this.body = Bodies.circle(x,y,5,option);
       World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white")
        ellipse( 0, 0, 20);
        pop();
    }
}