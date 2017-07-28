<?php
$nombre = "";
$telefono = "";
$correo = "";
$mensaje = "";

if (isset($_REQUEST['action']) and $_REQUEST['action'] == "send") {

	if ($result['is_errors'] == 0) {
		echo '<div id="send-form" class="alert msg">' . $result["info"] . '</div>';
	}
	if ($result['is_errors'] == 1) {
		echo '<div id="send-form" class="success msg">' . $result["info"] . '</div>';
		echo "<script>ga('send', 'event', 'Envio', 'Contacto', urlactual);</script>";
	}
	if ($result['is_errors'] == 2) {
		echo '<div id="send-form" class="error msg">' . $result["info"] . '</div>';
	}	

	if ($result['is_errors'] != 1) {
		extract($_REQUEST);
		/*$telefono = $_REQUEST['telefono'];
		$nombre = $_REQUEST['nombre'];
		$correo = $_REQUEST['correo'];
		$mensaje = $_REQUEST['mensaje'];*/
		
	}

}