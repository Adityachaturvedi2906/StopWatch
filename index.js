
var increaseTime = time => time + 1;
var interval;
var minute;
var seconds;

//when start button clicked
var startTimer = () => {

	var currentTime = document.getElementById("timer-time").innerHTML; //00:00
	minute = parseInt(currentTime.split(":")[0]);
	seconds = parseInt(currentTime.split(":")[1]);
	currentTime = minute * 60 + seconds;
	currentTime = increaseTime(currentTime);
	minute = Math.floor(currentTime / 60);
	seconds = currentTime % 60;
	currentTime = minute.toString().padStart(2 ,'0').concat(":").concat(seconds.toString().padStart(2, '0'));
	console.log(currentTime); 
	document.getElementById("timer-time").innerHTML = currentTime;   

	interval = setTimeout(startTimer, '1000');       //call back function because a function called inside it

}

//when stop button clicked
var stopTimer = () => 
{
	clearInterval(interval)
}

var resetTimer = () =>
{
	minute = "00";
	seconds = "00";
	currentTime = minute.toString().padStart(2 ,'0').concat(":").concat(seconds.toString().padStart(2, '0'));
	console.log(currentTime); 
	document.getElementById("timer-time").innerHTML = currentTime;   
	clearInterval(interval)

}



var start = document.getElementById("timer-button-start");
var stops = document.getElementById("timer-button-stop");
var reset = document.getElementById("timer-button-reset");

start.addEventListener('click', startTimer);
stops.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);
