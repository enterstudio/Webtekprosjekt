var today = new Date();
var hours = today.getHours();
var godNatt = document.createTextNode("God natt");
var godMorgen = document.createTextNode("God morgen");
var godDag = document.createTextNode("God dag");
var godKveld = document.createTextNode("God kveld");



var welcome = document.getElementsByClassName("welcome")[0];
addMessage();
function addMessage() {
	if (hours >= 0 && hours < 6) {
		welcome.appendChild(godNatt);
	} if (hours >= 6 && hours < 12) {
		welcome.appendChild(godMorgen);
	} if (hours >= 12 && hours < 18) {
		welcome.appendChild(godDag);
	} if (hours >= 18) {
		welcome.appendChild(godKveld);
	}
};