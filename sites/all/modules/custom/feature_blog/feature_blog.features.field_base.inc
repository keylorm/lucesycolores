<?php
/**
 * @file
 * feature_blog.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function feature_blog_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_correo'.
  $field_bases['field_correo'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_correo',
    'indexes' => array(),
    'locked' => 0,
    'module' => 'email',
    'settings' => array(),
    'translatable' => 0,
    'type' => 'email',
  );

  return $field_bases;
}
