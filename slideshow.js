
var canvas = document.getElementById("myCanvas")

var ctx = canvas.getContext("2d")

var slides = []

var slideLinks = []

var slideNumber =  0

var slideLength = 0

var link = document.getElementById("slideLink");

var timerID

var timerStart

var slideStrings = ["Samfundet","Studieteknikker","Finn de billigste butikkene"]

function nextFrame(){
	if(slideNumber == slideLength){
		slideNumber = 0
	}
	// Draw picture 
	ctx.drawImage(slides[slideNumber],0,0,1170,580);
	console.log(slides[slideNumber])
	// Draw box
	ctx.fillStyle="rgba(75, 14, 14, 0.7)"
	ctx.fillRect(0,440,500,100)
	// Draw text
	ctx.font="20px Ubuntu";
	ctx.fillStyle="white";
	ctx.fillText(slideStrings[slideNumber],20,490)
	
   	document.getElementById("slideLink").href = slideLinks[slideNumber]; 

	slideNumber += 1
}
function firstFrame(){
	if(slideNumber == slideLength){
		slideNumber = 0
	}
	// Draw picture 
	ctx.drawImage(slides[slideNumber],0,0,1170,580);
	console.log(slides[slideNumber])
	console.log("first frame")
	// Draw box
	ctx.fillStyle="rgba(75, 14, 14, 0.7)"
	ctx.fillRect(0,440,500,100)
	// Draw text
	ctx.font="20px Ubuntu";
	ctx.fillStyle="white";
	ctx.fillText(slideStrings[slideNumber],20,490)
	
   	document.getElementById("slideLink").href = slideLinks[slideNumber]; 

	slideNumber += 1

	clearInterval(timerStart)
}

if(ctx != null)
{
	var samfSlide = document.getElementById("samfSlide");
	var hovedSlide = document.getElementById("hovedSlide");
	var butikkSlide = document.getElementById("butikkSlide");
	slides[0] = samfSlide
	slides[1] = hovedSlide
	slides[2] = butikkSlide
	slideLinks[0] = "uteliv/samfundet.html"
	slideLinks[1] = "studentliv/studieteknikk.html"
	slideLinks[2] = "studentliv/matpris.html"
	ctx.canvas.width  = samfSlide.width;
  	ctx.canvas.height = samfSlide.height;

  	timerStart = window.setInterval(firstFrame,80);
  	timerID = window.setInterval(nextFrame,5000);

	slideLength = slides.length
}
else
{
	console.log("feil")
}



