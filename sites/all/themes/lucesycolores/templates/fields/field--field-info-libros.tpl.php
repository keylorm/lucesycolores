<?php
$title_caracteristicas = t('Characteristics');
$desc_caracteristicas = "";
 foreach ($items as $delta => $item) {
  if(isset($item['entity']))
    foreach($item['entity'] as $key => $value){
      foreach($value as $num => $field){
        if(isset($field['field_caracteristicas']))
          $desc_caracteristicas = $field['field_caracteristicas'][0]['#markup'];       
      }
    }
}

echo '<div id="tabs">
          <ul>
            <li><a href="#tabs-1">'.$title_caracteristicas.'</a></li>
          </ul>
          <div id="tabs-1">'.$desc_caracteristicas.'<a class="info cart-submit" href>'. t('Add to') .'</a></div>
         </div>';