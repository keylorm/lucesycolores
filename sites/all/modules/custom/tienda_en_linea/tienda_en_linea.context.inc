<?php
/**
 * @file
 * tienda_en_linea.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function tienda_en_linea_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'blog';
  $context->description = 'Distribución de bloques';
  $context->tag = 'layout';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'blog' => 'blog',
        'blog/*' => 'blog/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-blog-block_2' => array(
          'module' => 'views',
          'delta' => 'blog-block_2',
          'region' => 'sidebar_second',
          'weight' => '-10',
        ),
        'webform-client-block-34' => array(
          'module' => 'webform',
          'delta' => 'client-block-34',
          'region' => 'sidebar_second',
          'weight' => '-9',
        ),
        'block-13' => array(
          'module' => 'block',
          'delta' => '13',
          'region' => 'sidebar_second',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Distribución de bloques');
  t('layout');
  $export['blog'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'home';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'language' => array(
      'values' => array(
        'en' => 'en',
      ),
    ),
    'path' => array(
      'values' => array(
        '<front>' => '<front>',
      ),
    ),
  );
  $context->reactions = array(
    'context_metadata' => array(
      'metadata_title' => 'Home',
      'metadata_description' => 'Home',
      'metadata_keywords' => '',
      'metadata_canonical' => '',
      'metadata_h1' => '',
    ),
  );
  $context->condition_mode = 1;
  $export['home'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'inicio';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'language' => array(
      'values' => array(
        'es' => 'es',
      ),
    ),
    'path' => array(
      'values' => array(
        '<front>' => '<front>',
      ),
    ),
  );
  $context->reactions = array(
    'context_metadata' => array(
      'metadata_title' => 'Inicio',
      'metadata_description' => 'Inicio',
      'metadata_keywords' => '',
      'metadata_canonical' => '',
      'metadata_h1' => '',
    ),
  );
  $context->condition_mode = 1;
  $export['inicio'] = $context;

  return $export;
}
