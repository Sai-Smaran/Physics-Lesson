class Ball{
    constructor(x, y, diameter){
        var options = {
            isStatic:false,
            'restitution':1,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, diameter, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        ellipse(0, 0, 100, 100);
        pop();
    }
}