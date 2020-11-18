class Paper{
	constructor(x,y,radius){
		var options={
			'restitution':0.3,
			'isStatic':false,
			'friction':0.5,
			'density':0.6
		}
		this.body=Bodies.circle(x,y,radius,options)
		this.width=radius*2;
		this.height=radius*2;
		this.image=loadImage("paper.png")
		World.add(world,this.body)
	}
	display(){
		var pos=this.body.position
		push()
		fill("pink")
		translate(pos.x,pos.y)
		imageMode(CENTER)
		//ellipse(0,0,this.width,this.height);
		image(this.image,0,0,this.width+30,this.height+30)
		pop()
	}
}
