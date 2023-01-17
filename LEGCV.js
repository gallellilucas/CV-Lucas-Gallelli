//Loading page/

const loader= this.document.querySelector ('.loader')

window.addEventListener("load", function (){
loader.className += " hidden";
});

//Funcion de ventanas modales/
let modal = document.getElementById('ventana-modal');
let modal2 = document.getElementById('ventana-modal-2');
let flex = document.getElementById('flex');
let flex2 = document.getElementById('flex-2');
let abrir = document.getElementById('abrir');
let abrir2 = document.getElementById('abrir-2');
let cerrar = document.getElementById('close');
let cerrar2 = document.getElementById('close-2');

abrir.addEventListener('click', function(e){
    modal.style.display = 'block';
});
cerrar.addEventListener('click', function(e){
    modal.style.display = 'none';
});
window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});
abrir2.addEventListener('click', function(e){
    modal2.style.display = 'block';
});
cerrar2.addEventListener('click', function(e){
    modal2.style.display = 'none';
});
window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex2){
        modal2.style.display = 'none';
    }
});

