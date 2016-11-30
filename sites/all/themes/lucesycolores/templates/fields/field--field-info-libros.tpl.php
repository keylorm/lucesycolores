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
$nodo_id = arg(1);
$nodo = node_load($nodo_id);
$salida_html= '<div id="tabs">
          <ul>
            <li><a href="#tabs-1">'.$title_caracteristicas.'</a></li>
          </ul>
          <div id="tabs-1">'.$desc_caracteristicas;


  if ($nodo->type=='cristales_de_vidrio_programados'){
    $salida_html.= '<div class="btn-realizar-pedido lg-es"><a href="/pedido-de-cristales?producto='.$nodo->title.'" class="colorbox-node">'.t('Request this glass').'</a></div><div class="btn-realizar-pedido lg-en"><a href="/glass-request?product='.$nodo->title.'" class="colorbox-node">'.t('Request this glass').'</a></div></div></div>';
  }else{
    $salida_html.='<a class="info cart-submit" href>'. t('Add to') .'</a></div>
         </div>';
  }


echo $salida_html;