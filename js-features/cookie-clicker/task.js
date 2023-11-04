let counter = document.getElementById('clicker__counter');
let image = document.getElementById('cookie');


function clickAction() {
	counter.textContent = +counter.textContent + 1;
	

	if (image.width === 200) {
		image.width = 250;
	} else {
		image.width = 200;
	}
}


image.addEventListener('click', clickAction);
