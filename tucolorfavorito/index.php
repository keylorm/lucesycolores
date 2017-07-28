<?php
$_SERVER['DOCUMENT_ROOT'] = dirname(__FILE__);
require dirname(__FILE__) . '/core/core.php';
$core = new Core;


# ------------------------------------------------------------------
# Habilitar solo si utilizamos la regla disposible en el htaccess,
# También es necesario agregar la etiqueta <base> para indicar la
# url del landing.
# (Especial para landing A/B Testing)
# ------------------------------------------------------------------
#
# $landing = isset($_GET['landing'])?$_GET['landing']:1;
# 

# Carpeta donde se guardaran los registros.
# Si no es activado la carpeta por defecto
# es /_reg/
$core->carpeta = 'registros';

# Email del destinario, si son varios correos dividirlos por comas.
$core->destino = 'fabiola@orbelink.com';

# Asunto del correo.
$core->asunto = 'Contacto desde landing';

# Nombre y correo de quien envía.
$core->de = array(
  'Luces y Colores',
  'envios@lucesycolorescr.com'
);

# Envía copia oculta, si son varios correos dividirlos por comas.
# $core->copia = 'usuario@dominio.com';


# Descomentar para habilitar el envío por SMTP, es necesario configurar los datos solicitados.
/*$core->smtp = array(
  'Host' => 'tribute.websitewelcome.com',
  'Port' => 587,
  'User' => 'andrey@orbelink.com',
  'Pass' => 'orbe.2014'
);*/

# Inicializa el script. (envío y registros de datos)
$core->init();


#######################################################
#######################################################

# CONFIGURACIÓN EN EL ARCHIVO INDEX.HTML

/*
# --------------------------------------------------
# Variable que muestra los mensajes de información.
# --------------------------------------------------
# El sistema por defecto mostrará los mensajes sobre el formulario,
# pero si es requerido moverlo, se puede agregar la variable
# {mensaje-1} donde 1 es la posición del fomulario en el código,
# si fueran dos formulario seria {mensaje-2}.
#
*/

/*
# -------------------------------------
# Campos OPCIONALES en el formulario.
# -------------------------------------
#
# En este campo se pueden ingresar los NAMEs de los campos que deseamos validar con PHP.
# Si son varios se separan por comas (,).
# ---- <input type="hidden" name="_validar" id="_validar" value="nombre,teléfono"  />
#
# Si ocupamos exluir un campo para que no se guarde en registro o se envíe en el correo,
# es necesario agregar un guión bajo al inicio del NAME que se le asigne.
# ---- <input type="hidden" name="_excluir" id="_excluir" value=""  />
#
# Crea un nuevo archivo de registro para los correos enviados, con el nombre que le asignemos.
# ---- <input type="hidden" name="_archivo" id="_archivo" value="NOMBRE-ARCHIVO"  />
#
#
# -------------------------------------
# Campos REQUEDIDOS en el formulario.
# -------------------------------------
#
# El campo Correo el NAME siempre tiene que ser ( correo ) para que sea validado.
# ---- <input type=" ( text o email ) " name="correo" id="Correo" value=""  />
#
# Función para asignar el valor del campo, después de una validación fallida.***********************
# Si el NAME del campo se llama ( ejemplo ), ese mismo valor se pasa en la función.*****************
# ---- <input type="text" name="ejemplo" id="ejemplo" value="<?php $core->campo('ejemplo')?>"  />***
#
*/

/*
# -------------------------------------------
# Validación del formulario con javascript.
# -------------------------------------------
#
# Para validar campos vacios, agregamos el parámetro data-req="1" con el valor 1.
# [ data-req="1" ]
#
# Para permitir solo número en un campo, agregarmos data-type="num".
# [ data-type="num" ]
#
*/

/*
# --------------------------------------
# Crear eventos Click para Analytics.
# --------------------------------------
#
# Podemos crear un evento click agregando un parámetro DATA a una etiqueta <a>.
# Ejemplo: <a href="#" class="btn" data-evento="click" data-nombre="Cita">Solicite cita</a>
#
# [ data-evento="click" ] => Dispara el evento clic.
# [ data-nombre="Nombre" ] => Nombre del evento, si no se asigna, se tomará el valor de la etiqueta.
#
# Los eventos de tiempo, scroll y envíos están configurados por defecto.
#
*/

/*
# ------------------------------------
# Revisar los registros ingresados.
# ------------------------------------
# URL:  http://URL-LANDING/_reg/ o (Carpeta definida) 
# USER: orbelink
# PASS: !q12/e*3@
#
*/

