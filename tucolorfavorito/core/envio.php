<?php

date_default_timezone_set('America/Costa_Rica');

class Envio {

    public $copia;
    public $destino;
    public $asunto; 
    public $de;
    public $smtp = FALSE;

    public  $mensaje;
    public  $campos;

    public  $carpeta;

    private $correo;
    private $datos;
    private $msj = array(
        'exito' => '¡Gracias por su mensaje, pronto nos pondremos en contacto!',
        'error' => 'No se ha podido enviar el mensaje, intente más tarde.'
    );
   

    public function procesar() {
        if($this->validar()){
            $this->guardar();
            $this->enviar();
        }
    }

    public function mensaje() {
        if(!empty($this->mensaje)){
            switch ($this->mensaje['tipo']) {
                case 0:
                    echo '<div id="send-form" class="alert msg">' . $this->mensaje['msj'] . '</div>';
                    break;
                case 1:
                    echo '<div id="send-form" class="success msg">' . $this->mensaje['msj'] . '</div>';
                    echo "<script type=\"text/javascript\">ga('send', 'event', 'Envio', 'Contacto', urlactual);</script>";
                    break;
                case 2:
                    echo '<div id="send-form" class="error msg">' . $this->mensaje['msj'] . '</div>';
                    break;
            }
        }
        unset($this->mensaje);
    }

    public function campo($key) {
        echo @$this->campos[$key];
    }

    private function enviar() {
        if(is_array($this->smtp)){
            $this->send_smtp();
        } else {
            $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
            $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
            if(!$this->de)
                $cabeceras .= 'From: ' . $this->de[0] . ' <' . $this->de[1] . '>' . "\r\n";
            if(!$this->copia)
                $cabeceras .= 'Bcc: ' . $this->copia . "\r\n";
            if(mail($this->destino, $this->asunto, $this->correo, $cabeceras)){
                $this->mensaje['msj']  = $this->msj['exito'];
                $this->mensaje['tipo'] = 1;
                unset($this->campos);
            } else{
                $this->mensaje['msj']  = $this->msj['error'];
                $this->mensaje['tipo'] = 2;   
            }
        }
    }

    private function send_smtp(){
        include $_SERVER['DOCUMENT_ROOT'] . '/core/lib/PHPMailer/class.phpmailer.php';
        $mail = new PHPMailer;
        $mail->IsSMTP();
        $mail->Host = $this->smtp['Host'];
        $mail->Port = $this->smtp['Port'];   
        $mail->SMTPAuth = true;
        $mail->Username = $this->smtp['User'];
        $mail->Password = $this->smtp['Pass']; 

        $mail->FromName = $this->de[0];
        $mail->From = $this->de[1];
        
        $mail->Subject = $this->asunto;
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->MsgHTML($this->correo);

        if($this->destino){
            $destino = explode(',', $this->destino);
            foreach ($destino as $key => $value) {
                $mail->AddAddress(trim($value));
            }
        }
        if($this->copia){
            $copia = explode(',', $this->copia);
            foreach ($copia as $key => $value) {
                $mail->AddBCC(trim($value));
            }
        }

        if($mail->send()) {
            $this->mensaje['msj']  = $this->msj['exito'];
            $this->mensaje['tipo'] = 1;
        } else {
            $this->mensaje['msj']  = $this->msj['error'] . '<br> ' . $mail->ErrorInfo;
            $this->mensaje['tipo'] = 2;   
        }
    }

    private function guardar() {
        require_once $_SERVER['DOCUMENT_ROOT'] . '/core/lib/Classes/PHPExcel.php';
        require_once $_SERVER['DOCUMENT_ROOT'] . '/core/lib/Classes/PHPExcel/IOFactory.php';
        $objPHPExcel = new PHPExcel();
        $registros = $_SERVER['DOCUMENT_ROOT'] . "/".$this->carpeta."/registros.xlsx";
        if(!empty($_POST['_archivo'])){
            $registros = $_SERVER['DOCUMENT_ROOT'] . "/".$this->carpeta."/" . ereg_replace('[^A-Za-z0-9_-]', '', $_POST['_archivo']) . ".xlsx";
        }
        if(file_exists($registros)){
          // Leemos un archivo Excel 2007
          $objReader = PHPExcel_IOFactory::createReader('Excel2007');
          $objPHPExcel = $objReader->load($registros);
        }
        // Indicamos que se pare en la hoja uno del libro
        $objPHPExcel->setActiveSheetIndex(0);
        $objPHPExcel->getActiveSheet()->setTitle("Lista de registros");

        $highestColumm = $objPHPExcel->getActiveSheet()->getHighestColumn();
        $numColum = (ord($highestColumm) - 64);
        $highestRow = $objPHPExcel->getActiveSheet()->getHighestRow();
        $row = ($highestRow+1);
        $i = 1;
        foreach ($this->datos as $key => $value) {
          $letra = chr(64 + $i);
          if($highestRow == 1){ /* or $i > $numColum*/
            $objPHPExcel->getActiveSheet()->SetCellValue($letra.'1', $key);
            $objPHPExcel->getActiveSheet()->getColumnDimension($letra)->setWidth(25);
            $objPHPExcel->getActiveSheet()->getStyle($letra.'1')->getFont()->setBold(true);
          }
          $objPHPExcel->getActiveSheet()->SetCellValue($letra.$row, $value);
          $i = $i + 1;
        }
        //Guardamos el archivo en formato Excel 2007
        //Si queremos trabajar con Excel 2003, basta cambiar el 'Excel2007' por 'Excel5' y el nombre del archivo de salida cambiar su formato por '.xls'
        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
        $objWriter->save($registros); 
    }

    private function validar() {
        if (!empty($_POST)) {
            $return = true;
            $required  = explode(',', $_POST['_validar']);
            $data      = array();
            $data['Fecha']    = date('d/m/Y g:i:s a');
            foreach ($_POST as $key => $value) {
                $nombre  = strtolower(trim($key));
                if(substr($key, 0, 1) != '_'){
                    $label = ucwords($nombre);
                    $label = str_replace('-', ' ', $label);
                    $label = str_replace('_', ' ', $label);
                    $data[$label]    = $value;
                    $this->campos[$key] = $value;
                    $this->correo .= "<b>" . $label . ":</b> " . $value . "\r\n<br />";
                }
                if (in_array($nombre, $required) and empty($value)) {
                    $this->mensaje['msj'] = "Por favor, introduzca correctamente el campo <b>" . ucwords($nombre) . "</b>";
                    $this->mensaje['tipo'] = 0;
                    $return = false; 
                }
                if ($nombre == "correo") {
                    if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
                        $this->mensaje['msj'] = "Por favor, introduzca un correo válido";
                        $this->mensaje['tipo'] = 0;
                        $return = false; 
                    }
                }
            }
            $this->correo .= "\r\n<br />-------------------------\r\n<br />
            Correo generado desde landing: " . "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
            $this->datos = $data;
            return $return;
        }
    }
}