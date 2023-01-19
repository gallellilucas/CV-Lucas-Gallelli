//Loading page/

const loader= this.document.querySelector ('.loader')

window.addEventListener("load", function (){
loader.className += " hidden";
});

//Funcion de ventanas modales/

let modal = document.getElementById('ventana-modal');
let modal2 = document.getElementById('ventana-modal-2');

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

abrir2.addEventListener('click', function(e){
    modal2.style.display = 'block';
});

cerrar2.addEventListener('click', function(e){
    modal2.style.display = 'none';
});

// Boton ver más //

const ver = this.document.getElementById("ver");
const ver2 = this.document.getElementById("ver-2");
const p1 = this.document.querySelector('.p1');
const p2 = this.document.querySelector('.p2');

ver.addEventListener("click", function(){
    p1.style.display += "block";
    ver.className += " ocultar";
});

ver2.addEventListener("click", function(){
    p2.style.display += "block";
    ver2.className += " ocultar";
});
