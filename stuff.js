let sl,par,h,par2,inp;
function start(){
	par2=createP("what is the passcode");par2.class('parbdd');
	par2.position(700,150);
	inp=createInput("enter code here");
	inp.class('parbdd');inp.position(700,250);
	inp.changed(theCode);
	sl=createSlider(0,400,200);
	//sl.position(700,50);
    par=createP(" ");par.id('par_sl');
    par.position(700,50);
	sl.parent('#par_sl');
    par.class('parbdd');	
    h=select('#head');h.position(260,15);
}

function theCode(){
	//par2.html(inp.value());
	if(inp.value()=="yes"){par2.html("correct");}
	if(inp.value()!="yes"){par2.html("that is wrong code");}
	}