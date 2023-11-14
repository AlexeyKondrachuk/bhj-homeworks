let arrRotator = Array.from(document.querySelectorAll('.rotator__case'));

let arr = arrRotator.map(elem => parseInt(elem.getAttribute('data-speed')));


let activeRotator = document.querySelector('.rotator__case_active');
if (activeRotator) {
activeRotator.closest('span').style.color = activeRotator.closest('span').dataset.color;
}

let currentIndex = 0;

function runRotator() {
let activeRotator = document.querySelector('.rotator__case_active');
if (activeRotator) {
    let nextRotator = activeRotator.nextElementSibling || arrRotator[0];
    nextRotator.closest('span').style.color = nextRotator.closest('span').dataset.color;
    nextRotator.className = 'rotator__case rotator__case_active';
    activeRotator.className = 'rotator__case';

    currentIndex = arrRotator.indexOf(nextRotator);
    setTimeout(runRotator, arr[currentIndex]);
}
}

setTimeout(runRotator, arr[0]);