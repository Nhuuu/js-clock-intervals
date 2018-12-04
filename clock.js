document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM was loaded!');


var secHand = document.getElementById("second");
var minHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");

var timer = new Date;
var currentSec = timer.getSeconds();
var currentMin = timer.getMinutes();
var currentHr = timer.getHours();

var secMinDeg = function(secsOrMin){
	let secMinDegrees = (secsOrMin / 60) * 360;
	return secMinDegrees;
};

var hrDeg = function(hr){
	let hrDegrees = (hr / 12) * 360;
	return hrDegrees;
};

var ticker = function(){
	secHand.style.transform = "rotate(" + secMinDeg(currentSec) + "deg)";
	minHand.style.transform = "rotate(" + secMinDeg(currentMin) + "deg)";
	hourHand.style.transform = "rotate(" + hrDeg(currentHr) + "deg)";
};


var fullTockClick = setInterval(function(){
	timer = new Date;
	currentSec = timer.getSeconds();
	currentMin = timer.getMinutes();
	currentHr = timer.getHours();
	ticker();	
}, 1000);

});