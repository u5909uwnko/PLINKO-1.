class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution:1
      }
      this.body=Bodies.circle(x,y,10,options)
      World.add(world,this.body)
      this.radius=10
    }
    display (){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate (this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}