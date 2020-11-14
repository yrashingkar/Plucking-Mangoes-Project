class Mango{
    constructor(x,y,radius){
    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.x=x;
    this.y=y;
    this.image = loadImage("Plucking+mangoes/mango.png")
    this.radius = radius;
    this.body = Bodies.circle(x,y,radius/2,options); 
    World.add(world, this.body);
}
    display(){        
        var position = this.body.position;
        push();
        translate(position.x, position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.radius*2,this.radius*2);
        pop();
    }
}