<?php
/**
 * @file
 * HTML template functions.
 */

/**
 * Implements hook_preprocess_html().
 * Meta tags https://drupal.org/node/1468582#comment-5698732
 */
function lucesycolores_preprocess_html(&$variables) {
  $meta_charset = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'charset' => 'utf-8',
    ),
  );
  drupal_add_html_head($meta_charset, 'meta_charset');

  $meta_x_ua_compatible = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'x-ua-compatible',
      'content' => 'ie=edge, chrome=1',
    ),
  );
  drupal_add_html_head($meta_x_ua_compatible, 'meta_x_ua_compatible');

  $meta_mobile_optimized = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'MobileOptimized',
      'content' => 'width',
    ),
  );
  drupal_add_html_head($meta_mobile_optimized, 'meta_mobile_optimized');

  $meta_handheld_friendly = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'HandheldFriendly',
      'content' => 'true',
    ),
  );
  drupal_add_html_head($meta_handheld_friendly, 'meta_handheld_friendly');

  $meta_viewport = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width=device-width, initial-scale=1',
    ),
  );
  drupal_add_html_head($meta_viewport, 'meta_viewport');

  $meta_cleartype = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'cleartype',
      'content' => 'on',
    ),
  );
  drupal_add_html_head($meta_cleartype, 'meta_cleartype');

   // Use html5shiv.
  if (theme_get_setting('html5shim')) {
    $element = array(
      'element' => array(
        '#tag' => 'script',
        '#value' => '',
        '#attributes' => array(
          'type' => 'text/javascript',
          'src' => file_create_url(drupal_get_path('theme', 'lucesycolores') . '/js/html5shiv-printshiv.js'),
        ),
      ),
    );
    $html5shim = array(
      '#type' => 'markup',
      '#markup' => "<!--[if lt IE 9]>\n" . theme('html_tag', $element) . "<![endif]-->\n",
    );
    drupal_add_html_head($html5shim, 'lucesycolores_html5shim');
  }

  // Use Respond.js.
  if (theme_get_setting('respond_js')) {
    drupal_add_js(drupal_get_path('theme', 'lucesycolores') . '/js/respond.min.js', array('group' => JS_LIBRARY, 'weight' => -100));
  }

  // Use normalize.css
  if (theme_get_setting('normalize_css')) {
    drupal_add_css(drupal_get_path('theme', 'lucesycolores') . '/css/normalize.css', array('group' => CSS_SYSTEM, 'weight' => -100));
  }

  if(drupal_is_front_page()){
    drupal_add_js(libraries_get_path('fitvids') . '/jquery.fitvids.js', array('group' => JS_LIBRARY, 'weight' => -100));
    drupal_add_js(libraries_get_path('bxslider') . '/jquery.bxslider.min.js', array('group' => JS_LIBRARY, 'weight' => -100));
    drupal_add_css(libraries_get_path('bxslider') . '/jquery.bxslider.css', array('group' => CSS_SYSTEM, 'weight' => -100));
  }
}

/**
 * Implements hook_html_head_alter().
 */
function lucesycolores_html_head_alter(&$head_elements) {

  // Remove system content type meta tag.
  unset($head_elements['system_meta_content_type']);
}

/**
 * Implements hook_page_alter().
 * https://gist.github.com/jacine/1378246
 */
function lucesycolores_page_alter(&$page) {
  // Remove all the region wrappers.
  foreach (element_children($page) as $key => $region) {
    if (!empty($page[$region]['#theme_wrappers'])) {
      $page[$region]['#theme_wrappers'] = array_diff($page[$region]['#theme_wrappers'], array('region'));
    }
  }
  // Remove the wrapper from the main content block.
  if (!empty($page['content']['system_main'])) {
    $page['content']['system_main']['#theme_wrappers'] = array_diff($page['content']['system_main']['#theme_wrappers'], array('block'));
  }
}

function lucesycolores_preprocess_node(&$vars) {
  // Add a striping class.
  $vars['classes_array'][] = 'node-' . $vars['zebra'];
  $node = $vars['node'];
  if(isset($node->field_product_category)){
      drupal_add_js(libraries_get_path('fitvids') . '/jquery.fitvids.js', array('group' => JS_LIBRARY, 'weight' => -100));
  }
}

function lucesycolores_preprocess_block(&$vars, $hook) {
  // Add a striping class.
  $vars['classes_array'][] = 'block-' . $vars['zebra'];
}


function lucesycolores_breadcrumb($variables) {
  //breadcrumb = $variables['breadcrumb'];
  $sep = ' | ';
  $crumbs = array();
  $route_course = '/courses';

  if (count($variables['breadcrumb']) > 0) {
    if (arg(0)=='node'){
      $node = node_load(arg(1));
      if($node->type=='curso'){
        //foreach()
        //return implode($sep, $variables['breadcrumb']) ;
        if($node->language == 'es')
          $route_course = '/cursos';

          $crumbs[] = l(t('Home'), '');
          $crumbs[] = l(t('Courses'), $route_course);
          $crumbs[] = $node->title;
          return implode($sep, $crumbs);    
      }
    }else if(arg(0)=='user' || arg(1)=='user'){
          $crumbs[] = l(t('Home'), '');
          $crumbs[] = t('My account');
      
          return implode($sep, $crumbs);   
    }else{
      return implode($sep, $variables['breadcrumb']);      
    }
    
  }
  else {
    return t("Home");
  }
}


function lucesycolores_theme() {
  $items = array();
  // create custom user-login.tpl.php
  $items['user_login'] = array(
  'render element' => 'form',
  'path' => drupal_get_path('theme', 'lucesycolores') . '/templates/user',
  'template' => 'user-login',
  'preprocess functions' => array(
  'lucesycolores_preprocess_user_login'
  ),
 );
   $items['user_pass'] = array(
  'render element' => 'form',
  'path' => drupal_get_path('theme', 'lucesycolores') . '/templates/user',
  'template' => 'user-pass',
  'preprocess functions' => array(
  'lucesycolores_preprocess_user_pass'
  ),
 );   

return $items;
}

function lucesycolores_form_commerce_cart_add_to_cart_form_alter(&$form, &$form_state) {
  $form['submit']['#value'] = t('Add to');
}

function lucesycolores_form_alter(&$form, &$form_state, $form_id){

  //dpm($form);
  global $language;
  if($form_id=="user_register_form"){
    $form['field_full_name']['#prefix'] = $form['account']['name']['#prefix'];
    
    $form['account']['name']['#prefix'] = "";
    $form['actions']['submit']['#suffix'] = "</div>";
    
    $form['field_phone']['und'][0]['value']['#attributes'] = array('placeholder' => $form['field_phone']['und'][0]['value']['#title']);
    $form['field_full_name']['und'][0]['value']['#attributes'] = array('placeholder' => $form['field_full_name']['und'][0]['value']['#title']);
    $form['field_provincia']['und'][0]['value']['#attributes'] = array('placeholder' => $form['field_provincia']['und'][0]['value']['#title']);
    $form['account']['mail']['#attributes'] = array('placeholder' =>  $form['account']['mail']['#title']);
   
  }
 // dpm($form_id);
  
  if($form_id=='user_profile_form'){
    hide($form['contact']);
    hide($form['locale']);
    if($language->language=='en'){
       $form['field_full_name']['#prefix'] = '<div id="user_register_form">
<h2>Personal data</h2>';
    }else{
      $form['field_full_name']['#prefix'] = '<div id="user_register_form">
<h2>Datos Personales</h2>';
    }
     
  }
}

function lucesycolores_preprocess_page(&$variables){
  
  
  $user = user_load($variables['user']->uid);
  //dpm ($user);
  $fullname_user = "";
  if(!empty($user->field_full_name)){
    $fullname_user = $user->field_full_name['und'][0]['value'];
  }
  if(arg(0) == 'user'  || arg(1)=='user' ) {  //For node 2
    $variables['theme_hook_suggestions'][] =  'page__user';
   
    if($variables['language']->language=='en'){
      drupal_set_title('Hello, '.$fullname_user);
    }else{
      drupal_set_title('Hola, '.$fullname_user);
    }
    
    
  }
  
  //dpm($variables);
}
