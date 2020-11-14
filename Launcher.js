class Launcher{
    constructor(body, ancher){
        var options = {
            bodyA: body,
            pointB: ancher,
            stiffness: 0.008,
            length: 1
        }
        this.bodyA=body;  
        this.pointB=ancher;              
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    
    attach(body){
        this.launcher.bodyA=body;
    }

    fly(){
        this.launcher.bodyA=null;
    }
    
    display(){
        if(this.launcher.bodyA){        
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}