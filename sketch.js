let can;
let b,r;let c;
function setup() {rectMode(CENTER);
start();
can=createCanvas(500,400);
can.position(100,70);
can.class("bdd");
b=new ball(50,50,3,4.5);c=color(0,250,100);
r=new rec(60,300);
}

function draw() {
//clear();
background(250,0,0);
b.move();b.chbd();b.display(c);b.coll(r);
r.move(sl.value());r.display();
}
