class Particle {
    constructor(x,y) {
      var options = {
          restitution:0.4
      }
      this.body=Bodies.circle(x,y,10,options)
      World.add(world,this.body)
      this.color=color(random(0,255),random(0,255),random(0,255))
      this.radius=10
    }
    display (){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate (this.body.angle)
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}