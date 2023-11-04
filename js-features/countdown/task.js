const timer = document.getElementById('timer');
let timeLeft = +timer.textContent;

let seconds = 0;
let minutes = 0;
let hours = 0;

let timeTablo = '';

function timeTabloRender(timeLeft) {
	hours = Math.floor(timeLeft / 3600);
	if (timeLeft !== 0 && (timeLeft % 3600) !== 0) {
		minutes = Math.floor((timeLeft % 3600) / 60);} 
	else {
		minutes = 0;
	}
	if ((timeLeft !== 0 && (timeLeft % 3600) % 60) !== 0) {
				seconds = Math.floor((timeLeft % 3600) % 60);
	} else {
				seconds = 0;
	}

	if (hours < 10) {hours = "0"+hours;};
	if (minutes < 10) {minutes = "0"+minutes;};
	if (seconds < 10) {seconds = "0"+seconds;};

	timeFace = hours+':'+minutes+':'+seconds;
	timer.textContent = timeFace;
} 

timeTabloRender(timeLeft); 


let timerInterval = setInterval(function () {
	timeLeft -= 1;
	timeTabloRender(timeLeft);

	if (timeLeft === 0) {
		window.alert('Вы победили в конкурсе!');
		clearInterval(timerInterval);
	}	
}, 1000, timer);

