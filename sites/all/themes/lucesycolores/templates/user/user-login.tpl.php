<div class="w-container">
	
<?php
  global $language;
//dpm($form);
// Ocultamos contenido que no queremos mostrar 
  $form['pass']['#suffix']="";
  $form['actions']['#suffix']="</div>";
  $form['actions']['submit']['#value'] = t('Log in');
	$form['name']['#attributes'] = array(
		'placeholder' => $form['name']['#title'],
	);
	$form['pass']['#attributes'] = array(
		'placeholder' => $form['pass']['#title'],
	);
	


if ($language->language=="es"){
  $form['links']['#items'][0] = str_replace(">Crear nueva cuenta", ">¿No posee una cuenta?<br><strong>Regístrese.</strong>", $form['links']['#items'][0]);
  $form['links']['#items'][1] = str_replace(">Solicitar una nueva contraseña", ">¿Olvidó su contraseña?", $form['links']['#items'][1]);
 
}else{
  $form['links']['#items'][0] = str_replace(">Create new account", ">Don't you have an account?<br /><strong>Sign up.</strong>", $form['links']['#items'][0]);
  $form['links']['#items'][1] = str_replace(">Request new password", ">Did you forget your password?", $form['links']['#items'][1]);

}

$form['name']['#prefix'] .= '<div class="facebook-login-button"><a href="/user/simple-fb-connect"><img src="/sites/all/themes/lucesycolores/images/facebook.jpg" /></a></div><p>'.t('Log in with your account').'</p>';

	// split the username and password so we can put the form links were we want (they are in the "user-login-links" div bellow)
 ?>

<?php
	print drupal_render($form['name']);
	print drupal_render($form['pass']);
    ?>

    <!--<div class="user-login-links ">
	<span class="password-link"><a href="/user/password">Forget your password?</a></span> | <span class="register-link"><a href="/user/register">Create an account</a></span>
    </div>-->

    <?php



        // render login button
	print drupal_render($form['form_build_id']);
	print drupal_render($form['form_id']);
	print drupal_render($form['actions']);

print drupal_render($form['links']);
    ?>
</div>

<!-- /user-login-custom-form -->