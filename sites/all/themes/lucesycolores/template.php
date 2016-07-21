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
    }else{
      return implode($sep, $variables['breadcrumb']);      
    }
    
  }
  else {
    return t("Home");
  }
}


/*function lucesycolores_menu_breadcrumb_alter(&$active_trail, $item){
  //STORE THE LAST ITEM
    $end = end($active_trail);

    foreach ($active_trail as $key => $crumb){

        //CHECK AGAINST NODE TYPE
        if($crumb['map'][1]->type == 'NODE_MACHINE_NAME'){

            //INSERT THE REPLACEMENT CRUMB
            $active_trail[$key] = array( 
                'title' => t("Title"),
                'href' => 'PATH',
                'link_path' => 'PATH', 
                'localized_options' => array(),
                'type' => 0
            );
            //RECREATE ITEM
            $active_trail[] = $crumb;
        }

    }


    //SHOW CURRENT PAGE IN BREADCRUMB BY DUPLICATING THE LAST ARRAY ITEM IN ACTIVE_TRAIL

    if (!drupal_is_front_page()) {
        if ($item['href'] == $end['href']) {
            $active_trail[] = $end;
        }       
    }
}*/