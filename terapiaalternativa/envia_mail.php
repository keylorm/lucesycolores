<?php
function insert_bd($data)
{
    
    $connection = mysql_connect("localhost", 'lucesyco_landuse', '=lHk-k{s)]]?') or die(mysql_error());
    $db_selected = mysql_select_db("lucesyco_landing", $connection) or die(mysql_error());
    
    $query = sprintf("INSERT INTO registros (
			fecha,
			nombre,
			telefono,
			correo,						
			mensaje,
			landing
		) VALUES (
			CURDATE(), 
	        '" . $data['nombre'] . "',
			'" . $data['telefono'] . "',
			'" . $data['correo'] . "',			        
			'" . $data['mensaje'] . "',
			'" . $data['landing'] . "'
		);");
    mysql_query($query) or die(mysql_error());
    mysql_close($connection);
}

$result = array(
    "is_errors" => NULL,
    "info" => ""
);

if (isset($_REQUEST['action'])) {
    
    if ($_REQUEST['action'] == "send") {
        
        $ourMail = "ekafaeth@gmail.com";	
        $mailbcc = "fabiola@orbelink.com";
        
        #$ourMail = "andrey@orbelink.com";
        #$mailbcc = "";
        
        $required_fields = array(
            "nombre",
            "telefono",
            "correo",
            "mensaje",
            "landing"
        );
        $message         = "";
        $errors          = array();
        $data            = array();
        
        if (!empty($_POST)) {
            foreach ($_POST as $key => $value) {
                $data[$key] = $value;
                $name       = strtolower(trim($key));
                if (in_array($name, $required_fields)) {
                    if (empty($value)) {
                        $errors = "Por favor, introduzca correctamente el campo \"" . $name . "\"";
                        break;
                    }
                }
                
                if ($name == "correo") {
                    if (!check_email_address($value)) {
                        $errors = "Por favor, introduzca un correo válido";
                        break;
                    }
                }
            }
        }
        
        if (!empty($errors)) {
            
            $result['is_errors'] = 0;
            $result['info']      = $errors;
            
        } else {
            
            $message .= "<strong>Nombre</strong>" . ": " . $_POST['nombre'] . "<br />";
            $message .= "<strong>Teléfono</strong>" . ": " . $_POST['telefono'] . "<br />";
            $message .= "<strong>Correo</strong>" . ": " . $_POST['correo'] . "<br />";
            $message .= "<strong>Mensaje</strong>" . ": " . $_POST['mensaje'] . "<br />";
            $message .= "\r\n<br />--------------------------------------------------------------------------------------------------\r\n<br />
			Correo generado desde landing: " . $_POST['landing'];
            
            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
            $headers .= "From: Contacto <info@lucesycolores.com>\r\n";
            $headers .= "reply-to: info@lucesycolores.com\r\n";
            $headers .= "Bcc: " . $mailbcc . "\r\n";
            
            
            if (mail($ourMail, "Contacto del Landing Luces y Colores", $message, $headers)) {
                $result['is_errors'] = 1;
                $result["info"]      = "¡Gracias por su mensaje, pronto nos pondremos en contacto!";
                insert_bd($data);
            } else {
                $result['is_errors'] = 2;
                $result["info"]      = "Error favor intentar nuevamente";
            }
            
        }
        
    } else {
        $result['is_errors'] = 0;
        $result['info']      = 'Error en el servidor, intente más tarde.';
    }
    
}

function check_email_address($email)
{
    // First, we check that there's one @ symbol,
    // and that the lengths are right.
    if (!ereg("^[^@]{1,64}@[^@]{1,255}$", $email)) {
        // Email invalid because wrong number of characters
        // in one section or wrong number of @ symbols.
        return false;
    }
    // Split it into sections to make life easier
    $email_array = explode("@", $email);
    $local_array = explode(".", $email_array[0]);
    for ($i = 0; $i < sizeof($local_array); $i++) {
        if (!ereg("^(([A-Za-z0-9!#$%&'*+/=?^_`{|}~-][A-Za-z0-9!#$%&
?â€ ?'*+/=?^_`{|}~\.-]{0,63})|(\"[^(\\|\")]{0,62}\"))$", $local_array[$i])) {
            return false;
        }
    }
    // Check if domain is IP. If not,
    // it should be valid domain name
    if (!ereg("^\[?[0-9\.]+\]?$", $email_array[1])) {
        $domain_array = explode(".", $email_array[1]);
        if (sizeof($domain_array) < 2) {
            return false; // Not enough parts to domain
        }
        for ($i = 0; $i < sizeof($domain_array); $i++) {
            if (!ereg("^(([A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9])|
?â€ ?([A-Za-z0-9]+))$", $domain_array[$i])) {
                return false;
            }
        }
    }
    return true;
}
?>