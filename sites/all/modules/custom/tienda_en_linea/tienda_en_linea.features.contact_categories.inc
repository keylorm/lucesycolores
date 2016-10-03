<?php
/**
 * @file
 * tienda_en_linea.features.contact_categories.inc
 */

/**
 * Implements hook_contact_categories_defaults().
 */
function tienda_en_linea_contact_categories_defaults() {
  return array(
    'Website feedback' => array(
      'category' => 'Website feedback',
      'recipients' => 'soporte@orbelink.com',
      'reply' => '',
      'weight' => 0,
      'selected' => 1,
    ),
  );
}
