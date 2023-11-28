'use strict';

const toolTips = [...document.querySelectorAll('a.has-tooltip')];
let tooltipText;




toolTips.forEach(function (tip) {
    tip.onclick = function (event) {
        let tooltip = document.querySelector('div.tooltip_active');
        let topCoordinate = tip.getBoundingClientRect().top < window.innerHeight / 2 ?  tip.getBoundingClientRect().bottom + 10 : tip.getBoundingClientRect().top - 30;
        let leftCoordinate = tip.getBoundingClientRect().left < window.innerWidth / 2 ? tip.getBoundingClientRect().left + 10 : tip.getBoundingClientRect().left - 10;
        let html = `<div class="tooltip tooltip_active" style="left: ${leftCoordinate}px; top: ${topCoordinate}px">${tip.title}</div>`;
        if (tooltip && event.target.innerText == tooltipText) {
            tooltip.classList.toggle('tooltip_active');
        } else if (tooltip) {
            tooltip.style.left = `${leftCoordinate}px`;
            tooltip.style.top = `${topCoordinate}px`;
            tooltip.textContent = `${tip.title}`;
        } else {
            tip.insertAdjacentHTML('afterend', html);
        };
        ;
               
        tooltipText = event.target.innerText

        return false;
    };
});
