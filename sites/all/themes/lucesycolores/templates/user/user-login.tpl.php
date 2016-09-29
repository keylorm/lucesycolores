<div class="w-container">
	
<?php
	
  global $language;
$form['name']['#prefix'] = '<div id="user_login_form"><h1>'.t('Login to your account').'</h1>';
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
	


$form['name']['#prefix'] .= '<div class="facebook-login-button"><a href="/user/simple-fb-connect"><img src="/sites/all/themes/lucesycolores/images/facebook.jpg" /></a></div><p>'.t('Log in with your account').'</p>';

	// split the username and password so we can put the form links were we want (they are in the "user-login-links" div bellow)
 ?>

<?php
	print drupal_render($form['name']);
	print drupal_render($form['pass']);
    ?>

    <div class="user-login-links ">
	<span class="password-link"><a href="/user/password"><?php echo t('Forgot your password?') ?></a></span> | <span class="register-link"><a href="/user/register"><?php echo t('Create an account') ?></a></span>
    </div>

    <?php
        // render login button
	print drupal_render($form['form_build_id']);
	print drupal_render($form['form_id']);
	print drupal_render($form['actions']);

print drupal_render($form['links']);
    ?>
</div>

<!-- /user-login-custom-form -->