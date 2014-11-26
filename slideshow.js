
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
var currentSlide={
	x:0,
	y:0,
	img:null,
	string:null
}
var nextSlide={
	x:0,
	y:0,
	img:null,
	string:null
}
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

  	timerStart = window.setInterval(firstFrame,200);
  	timerID = window.setInterval(startAnimation,5000);

	slideLength = slides.length
}
else
{
	console.log("feil")
}

function startAnimation(){
	if(slideNumber==slideLength){
		slideNumber = 0	
	}
	currentSlide.x = 0
	currentSlide.y = 0
	currentSlide.img = slides[slideNumber]
	currentSlide.string = slideStrings[slideNumber] 
	var nextSlideNumber = slideNumber+1
	if(nextSlideNumber==slideLength){
		nextSlideNumber = 0
	}
	nextSlide.x=1170	
	nextSlide.y=0
	nextSlide.img = slides[nextSlideNumber]
	nextSlide.string = slideStrings[nextSlideNumber]

	nextAnimationFrame();

	slideNumber+=1
}

function nextAnimationFrame(){
	console.log("frame")
	
	// Draw picture 
	ctx.drawImage(currentSlide.img,currentSlide.x,currentSlide.y,1170,580);
	ctx.drawImage(nextSlide.img,nextSlide.x,nextSlide.y,1170,580);
	// Fordeler pa 15 frames
	currentSlide.x -= 39
	nextSlide.x -=39
	// Draw box
	ctx.fillStyle="rgba(75, 14, 14, 0.7)"
	ctx.fillRect(currentSlide.x,440,500,100)
	ctx.fillRect(nextSlide.x,440,500,100)
	// Draw text
	ctx.font="20px Ubuntu";
	ctx.fillStyle="white";
	ctx.fillText(currentSlide.string,currentSlide.x+20+100,490)
	ctx.fillText(nextSlide.string,nextSlide.x+20+100,490)
	if(nextSlide.x>=0){
		console.log(nextSlide.x)
		requestAnimationFrame(nextAnimationFrame)
	}
	else{
	   	document.getElementById("slideLink").href = slideLinks[slideNumber]; 	
	}
}



