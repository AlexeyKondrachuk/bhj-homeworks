const getHole = index => document.getElementById(`hole${index}`);

let score = document.getElementById('dead');
let miss = document.getElementById('lost');

let holes = [];

for (let i = 0; i < 9; i++) {
	holes[i] = document.getElementById(`hole${i+1}`);
	holes[i].addEventListener('click', function scoring() {
	if (holes[i].className !== 'hole hole_has-mole') {
		miss.textContent = +miss.textContent + 1;
	} else {
		score.textContent = +score.textContent + 1;
	}

	if (score.textContent == 10) {
		window.alert('Ура! Победа!');
		score.textContent = 0;
		mis.textContent = 0;
	}

	if (miss.textContent == 5) {
		window.alert('Вы проиграли');
		score.textContent = 0;
		miss.textContent = 0;
	}
});
}