let modal3 = document.getElementById('ventana-modal-3');
let flex3 = document.getElementById('flex-3');
let abrir3 = document.getElementById('a-3');
let cerrar3 = document.getElementById('close-3');

abrir3.addEventListener('click', function(){
    modal3.style.display = 'block';
});

cerrar3.addEventListener('click', function(){
    modal3.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex3){
        modal3.style.display = 'none';
    }
});