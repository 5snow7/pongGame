let sl,par,h,par2,inp;
function start(){
	par2=createP("what is the passcode");par2.class('parbdd');
	par2.position(700,150);
	inp=createInput("enter code here");
	inp.class('parbdd');inp.position(700,250);
	inp.changed(theCode);
	sl=createSlider(0,400,200);
    par=createP(" ");par.id('par_sl');
    par.position(900,150);
	sl.parent('#par_sl');
    par.class('parbdd');par.style('rotate',90);	
    h=select('#head');h.position(260,15);h.class('hbdd');
}

function theCode(){
	//par2.html(inp.value());
	if(inp.value()==12){cbg=color(0,200,100);}
	if(inp.value()=="yes"){par2.html("correct");}
	if(inp.value()!="yes"){par2.html("that is wrong code");}
	}