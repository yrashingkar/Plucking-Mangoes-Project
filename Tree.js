class Tree {
    constructor(x,y) {
      this.x=x;
      this.y=y;
      this.width=450
      this.height=600
      this.wallThickness=10;
      this.image=loadImage("Plucking+mangoes/tree.png");
      this.bottom=Bodies.rectangle(this.x,this.y,this.width,this.wallThickness,{isStatic: true})
      this.left=Bodies.rectangle(0,this.y-this.height/2,this.wallThickness, this.height,{isStatic: false})
      this.right=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallThickness, this.height,{isStatic: false})
      
      World.add(world,this.bottom)
      World.add(world,this.left)
      World.add(world,this.right)

    }
    display(){
      var posbottom =this.bottom.position;
        push();
        translate(posbottom.x, posbottom.y);
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop();
    }
  }


/*
var pos =this.body.position;
rectMode(CENTER);
fill("brown");
rect(pos.x, pos.y, this.width, this.height); 
*/

