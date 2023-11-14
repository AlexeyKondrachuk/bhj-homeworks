const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll',  () => {
    const viewportHeight = window.innerHeight;

    for (let div of reveal) {        
        const divTop = div.getBoundingClientRect().top;
        
        if (divTop < viewportHeight && divTop > 0) {
            div.classList.add('reveal_active');
        } else {
            div.classList.remove('reveal_active');
        }
    }
});