const bookElement = document.getElementById('book');
const sizeElements = document.querySelectorAll('.font-size');

for (let i = 0; i < sizeElements.length; i++) {

    sizeElements[i].addEventListener('click',
        (event) => {
            
            // Обнулим размер шрифта
            if (bookElement.classList.contains('book_fs-small')) {
                bookElement.classList.remove('book_fs-small');
            }
            else if (bookElement.classList.contains('book_fs-big')) {
                bookElement.classList.remove('book_fs-big');
            }

            // Зададим размер шрифта            
            if (event.target.hasAttribute('data-size')) {
                bookElement.classList.add('book_fs-' + event.target.dataset.size);
            }

            //Отметим, если необходимо, кружочком размер в меню
            if (!(event.target.classList.contains('font-size_active'))) {
                for (let q = 0; q < sizeElements.length; q++) {
                    if (sizeElements[q].classList.contains('font-size_active')) {
                        sizeElements[q].classList.remove('font-size_active');
                    }
                }
                event.target.classList.add('font-size_active');
            }

            event.preventDefault();            
        }
    );

}