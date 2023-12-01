const progress = document.getElementById('progress');
const form= document.getElementById('form');


form.addEventListener('submit', e =>{
    e.preventDefault();
   
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (e) => {
        progress.value = e.loaded / 1000;
    }
     
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(e.currentTarget);
    xhr.send(formData);
})
   

   
    