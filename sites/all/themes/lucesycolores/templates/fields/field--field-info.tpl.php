<?php
$title_caracteristicas = t('Characteristics');
$desc_caracteristicas = "";
$title_aplicacion = t('Usage');
$desc_aplicacion = "";
 foreach ($items as $delta => $item) {
  if(isset($item['entity']))
    foreach($item['entity'] as $key => $value){
      foreach($value as $num => $field){
        if(isset($field['field_caracteristicas']))
          $desc_caracteristicas = $field['field_caracteristicas'][0]['#markup'];
        if(isset($field['field__como_se_aplica_']))
          $desc_aplicacion = $field['field__como_se_aplica_'][0]['#markup'];        
      }
    }
}

echo '<div id="tabs">
          <ul>
            <li><a href="#tabs-1">'.$title_caracteristicas.'</a></li>
            <li><a href="#tabs-2">'.$title_aplicacion.'</a></li>
          </ul>
          <div id="tabs-1">'.$desc_caracteristicas.'</div>
          <div id="tabs-2">'.$desc_aplicacion.'</div>
         </div>';