
class ball{
	constructor(xs,ys,xsst,ysst){
		this.x=xs;this.y=ys;
		this.xsp=xsst;this.ysp=ysst;
	}
	
move(){
this.x+=this.xsp;this.y+=this.ysp;
}	

chbd(){
	if(this.x<0||this.x>width){this.xsp=-1*this.xsp;}
	if(this.y<0||this.y>height){this.ysp=-1*this.ysp;}
}

display(c){
fill(c);stroke(200,100,50);strokeWeight(4);
ellipse(this.x,this.y,30,30);
}	

coll(r1){
if(r1.x-5<this.x&&this.x<r1.x+5&&r1.y-30<this.y&&this.y<r1.y+30)
{this.xsp=-1*this.xsp;}
}

}

class rec{
constructor(xs,ys){
this.x=xs;this.y=ys;}
	
move(yval){
this.y=yval;}

display(){
//rectMode(CENTER);
rect(this.x,this.y,20,60);	
}
	
}