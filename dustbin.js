class Dustbin{
	constructor(x,y){
		var options={
			'restitution':0.3,
			'isStatic':true,
			'friction':0.9,
			'density':1.2
		}
		this.bottom=Bodies.rectangle(x,y,300,12,options)
		this.width=300;
		this.height=12;
		//widthref=this.width
		World.add(world,this.bottom)


		 this.right=Bodies.rectangle(x+150,y-48,12,100,options)
		 this.sidesheight=100;
		 World.add(world,this.right)


		 this.left=Bodies.rectangle(x-150,y-48,12,100,options)
		 World.add(world,this.left)

	}
	display(){
		var pos=this.bottom.position
		push()
		fill("red")
		translate(pos.x,pos.y)
		rectMode(CENTER)
		rect(0,0,this.width,this.height);
		pop()

		var pos=this.right.position
		push()
		fill("red")
		translate(pos.x,pos.y)
		rectMode(CENTER)
		rect(0,0,this.height,this.sidesheight);
		pop()

		var pos=this.left.position
		push()
		fill("red")
		translate(pos.x,pos.y)
		rectMode(CENTER)
		rect(0,0,this.height,this.sidesheight);
		pop()
	}
}
