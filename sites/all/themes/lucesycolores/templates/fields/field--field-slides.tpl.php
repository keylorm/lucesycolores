<?php
if ($items){
$slides ="";
//dpm($items);
?>
<!-- Place somewhere in the <body> of your page tst-->
<?php for ($i=0; $i < count($items); $i++) {
	
	/*
	//obtene el objeto al que prtenece el slider paa extraer las posiciones del los slides que debe de mostar el fomulaio expuesto
	$node = $element['#object'];
	$slides_con_formulaio = array();
	$field_slides_con_formulario = $node->field_slides_con_formulario;
	//valida si no esta vacio
	if(!empty($field_slides_con_formulario)){
		$slides_con_formulaio = $field_slides_con_formulario[LANGUAGE_NONE];
	}
	*/


	$img = "";
	$caption="";
	$conVideo=false;
	$videoYoutube="";
	$url="";
	$style_name="slider";
		//verificar si tiene datos del video
		foreach($items[$i]['entity']['field_collection_item'] as $key => $value){
			if(isset($items[$i]['entity']['field_collection_item'][$key]['field_slide_video']['#items'][0]['value'])){
				$videoYoutube='<iframe width="1280" height="720" src="https://www.youtube.com/embed/'.$items[$i]['entity']['field_collection_item'][$key]['field_slide_video']['#items'][0]['value'].'?rel=0&amp;loop=1&amp;playlist='.$items[$i]['entity']['field_collection_item'][$key]['field_slide_video']['#items'][0]['value'].'&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;enablejsapi=1&amp;modestbranding=1" frameborder="0" allowfullscreen></iframe>';
				$conVideo = true;
			}

			if (isset($items[$i]['entity']['field_collection_item'][($key)]['field_slide_image']['#items'][0]['uri'])){
				$url = image_style_url($style_name, $items[$i]['entity']['field_collection_item'][($key)]['field_slide_image']['#items'][0]['uri']);
				image_style_create_derivative($style_name, $items[$i]['entity']['field_collection_item'][($key)]['field_slide_image']['#items'][0]['uri'], $url);
				$img = '<img src="'.$url.'" />';

			}

			if (isset($items[$i]['entity']['field_collection_item'][($key)]['field_slide_caption']['#items'][0]['value'])){
				$caption = '<div class="caption-container">'.$items[$i]['entity']['field_collection_item'][($key)]['field_slide_caption']['#items'][0]['value'].'</div>';
			}

			$slides.='<li  class="slide-'.$i.' slide">';

			if($conVideo){
				$slides.=$videoYoutube;
			}else{
				$slides.=$img;
			}
			$slides.= $caption.'</li>';
		}
		

		

		
		
		
		
	}
} 


?>
<div class="slider">  
	<ul class="bxslider">
		<?php print $slides ?>
	</ul>
</div>
