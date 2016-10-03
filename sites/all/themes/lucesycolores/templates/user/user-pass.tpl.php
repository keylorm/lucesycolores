<div class="w-container">
<?php

//dpm($form);
// Ocultamos contenido que no queremos mostrar 



	$form['name']['#title'] = t('Email');
	$form['name']['#attributes'] = array(
		'placeholder' => $form['name']['#title'],
	);
	$form['name']['#prefix'] .= '<div class="w-row"><div class="w-col w-col-7">';
	if(isset($form['name']['#suffix'])){
			$form['name']['#suffix'] .= '</div><div class="w-col w-col-5">';
	}else{
			$form['name']['#suffix'] = '</div><div class="w-col w-col-5">';
	}

	$form['actions']['#suffix']="</div></div>";
	
	
	$form['actions']['submit']['#value'] = t('Recover Password');

	// split the username and password so we can put the form links were we want (they are in the "user-login-links" div bellow)
 ?>

		<?php
		print drupal_render($form['name']);
			?>


<?php
					// render login button
		print drupal_render($form['form_build_id']);
		print drupal_render($form['form_id']);
		print drupal_render($form['actions']);

			?>

</div>

<!-- /user-login-custom-form -->