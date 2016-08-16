<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<?php 
  global $base_url;
  $terapiaId = $row->{$field->field_alias};
  $terapia = node_load($terapiaId);;
  $body = $terapia->body[LANGUAGE_NONE][0]['value'];
  $pattern = "/{[^}]*}/";
  if(preg_match_all($pattern, $body, $resultados, PREG_SET_ORDER)){
       $token = '';
       $productoRef = '';
       $urlAlias = '';
       foreach ($resultados as $resultado){
           //buscar el url alias de los token
           $token = str_replace("{","",$resultado[0]);
           $token = str_replace("}","",$token);
           $token = preg_replace('/\s+/', '', $token);
           $productoRef = explode(':', $token);
           $producto = node_load($productoRef[0]);
           $urlAlias = drupal_get_path_alias('node/'.$productoRef[0]);
           //reemplazar el token con el url del producto
           $body = str_replace($resultado,'<a href="'.$base_url.'/'.$urlAlias.'">'.$producto->title.'</a>', $body);
       }
   }
   $body = '<p>'.$body.'</p>';
   print $body;
/*$varmensaje = '{mensaje-'.$form_num.'}';
           $mensaje    = '<?php $this->mensaje(\''.$form_num.'\'); ?>';
           if(strpos($html, $varmensaje)){
               $html    = str_replace($varmensaje, $mensaje, $html);
               $mensaje = '';
           }
           $form = '<form' . $resultado[1] . '>'; echo $form;
           $hidden = '<input type="hidden" name="_form" value="'.$form_num.'"  />';
           $html = str_replace($form, $mensaje.$form.$hidden, $html);*/

?>