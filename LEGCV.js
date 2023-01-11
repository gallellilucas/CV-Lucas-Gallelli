php 
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre ;


	if(mail('lucasegallelli@outlook.com', $asunto, $mensaje)) send 
    