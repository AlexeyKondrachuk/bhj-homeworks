const button = document.querySelector('div.text__clear');
const editor = document.getElementById('editor');


editor.oninput = function (event) {
    localStorage.editor ? localStorage.editor = event.target.value : localStorage.setItem('editor', (event.target.value));
};


button.onclick = function () {
    localStorage.editor ? localStorage.removeItem('editor') : false;
    editor.value = '';
};


localStorage.editor ? editor.value = localStorage.editor : false;