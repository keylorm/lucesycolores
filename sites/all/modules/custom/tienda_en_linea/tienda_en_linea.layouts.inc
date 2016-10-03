<?php
/**
 * @file
 * tienda_en_linea.layouts.inc
 */

/**
 * Implements hook_default_panels_layout().
 */
function tienda_en_linea_default_panels_layout() {
  $export = array();

  $layout = new stdClass();
  $layout->disabled = FALSE; /* Edit this to true to make a default layout disabled initially */
  $layout->api_version = 1;
  $layout->name = 'fluid_layout';
  $layout->admin_title = 'Fluid Layout';
  $layout->admin_description = '';
  $layout->category = '';
  $layout->plugin = 'flexible';
  $layout->settings = array();
  $export['fluid_layout'] = $layout;

  $layout = new stdClass();
  $layout->disabled = FALSE; /* Edit this to true to make a default layout disabled initially */
  $layout->api_version = 1;
  $layout->name = 'tienda';
  $layout->admin_title = 'Tienda';
  $layout->admin_description = '';
  $layout->category = '';
  $layout->plugin = 'flexible';
  $layout->settings = array(
    'items' => array(
      'canvas' => array(
        'type' => 'row',
        'contains' => 'column',
        'children' => array(
          0 => 'main',
        ),
        'parent' => NULL,
      ),
      'main' => array(
        'type' => 'column',
        'width' => 100,
        'width_type' => '%',
        'children' => array(
          0 => 3,
          1 => 1,
          2 => 2,
        ),
        'parent' => 'canvas',
      ),
      1 => array(
        'type' => 'row',
        'contains' => 'region',
        'children' => array(
          0 => 'izq',
          1 => 'der',
        ),
        'parent' => 'main',
        'class' => '',
        'hide_empty' => 0,
      ),
      'izq' => array(
        'type' => 'region',
        'title' => 'izq',
        'width' => 50,
        'width_type' => '%',
        'parent' => '1',
        'class' => '',
        'hide_empty' => 0,
      ),
      'der' => array(
        'type' => 'region',
        'title' => 'der',
        'width' => 50,
        'width_type' => '%',
        'parent' => '1',
        'class' => '',
        'hide_empty' => 0,
      ),
      2 => array(
        'type' => 'row',
        'contains' => 'region',
        'children' => array(
          0 => 'contenido',
        ),
        'parent' => 'main',
        'class' => '',
        'hide_empty' => 0,
      ),
      'contenido' => array(
        'type' => 'region',
        'title' => 'Contenido',
        'width' => 100,
        'width_type' => '%',
        'parent' => '2',
        'class' => '',
        'hide_empty' => 0,
      ),
      3 => array(
        'type' => 'row',
        'contains' => 'region',
        'children' => array(
          0 => 'encabezado',
        ),
        'parent' => 'main',
        'class' => '',
        'hide_empty' => 0,
      ),
      'encabezado' => array(
        'type' => 'region',
        'title' => 'Encabezado',
        'width' => 100,
        'width_type' => '%',
        'parent' => '3',
        'class' => '',
        'hide_empty' => 0,
      ),
    ),
  );
  $export['tienda'] = $layout;

  return $export;
}
