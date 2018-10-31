let sl,par,h;
function start(){
	sl=createSlider(0,400,200);
	//sl.position(700,50);
    par=createP(" ");par.id('par_sl');
    par.position(700,150);
	sl.parent('#par_sl');
par.class('parbdd');	
h=select('#head');h.position(260,15);
}