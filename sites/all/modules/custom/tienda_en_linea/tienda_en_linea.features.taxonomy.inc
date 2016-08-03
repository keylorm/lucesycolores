<?php
/**
 * @file
 * tienda_en_linea.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function tienda_en_linea_taxonomy_default_vocabularies() {
  return array(
    'color' => array(
      'name' => 'Color',
      'machine_name' => 'color',
      'description' => 'Diferentes colores que puede ser representado el producto',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'language' => 'und',
      'i18n_mode' => 0,
    ),
    'presentaci_n' => array(
      'name' => 'Presentación',
      'machine_name' => 'presentaci_n',
      'description' => 'Presentaciones de productos por medio de volumen',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'language' => 'und',
      'i18n_mode' => 0,
    ),
  );
}
