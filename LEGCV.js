let modal = document.getElementById('ventana-modal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});

let modal2 = document.getElementById('ventana-modal-2');
let flex2 = document.getElementById('flex-2');
let abrir2 = document.getElementById('abrir-2');
let cerrar2 = document.getElementById('close-2');

abrir2.addEventListener('click', function(){
    modal2.style.display = 'block';
});

cerrar2.addEventListener('click', function(){
    modal2.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex2){
        modal2.style.display = 'none';
    }
});



