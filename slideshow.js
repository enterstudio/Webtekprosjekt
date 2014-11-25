
var canvas = document.getElementById("myCanvas")

var ctx = canvas.getContext("2d")

var slides = []

var slideLinks = []

var slideNumber =  0

var slideLength = 0

var link = document.getElementById("slideLink");

var timerID

if(ctx != null)
{
	var samfSlide = document.getElementById("samfSlide");
	var hovedSlide = document.getElementById("hovedSlide");
	var butikkSlide = document.getElementById("butikkSlide");
	slides[0] = samfSlide
	slides[1] = hovedSlide
	slides[2] = butikkSlide
	slideLinks[0] = "uteliv/uteliv.html"
	slideLinks[1] = "uteliv/samfundet.html"
	slideLinks[2] = "uteliv/solsiden.html"
	ctx.canvas.width  = samfSlide.width;
  	ctx.canvas.height = samfSlide.height;

  	timerID = window.setInterval(nextFrame,5000);
	
	slideLength = slides.length

	
}
else
{
	console.log("feil")
}

function nextFrame(){
	if(slideNumber == slideLength){
		slideNumber = 0
	}
	ctx.drawImage(slides[slideNumber],0,0,1170,580);
	ctx.fillStyle="#4B0E0E";
	ctx.fillRect(0,440,500,100)
	ctx.font="20px Ubuntu";
	ctx.fillStyle="white";
	ctx.fillText("Samfundet",20,480)
	
   	document.getElementById("slideLink").href = slideLinks[slideNumber]; 

	slideNumber += 1
}

nextFrame();
