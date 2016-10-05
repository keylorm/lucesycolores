<?php
/**
 * @file
 * tienda_en_linea.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_pages().
 */
function tienda_en_linea_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'online_store';
  $page->task = 'page';
  $page->admin_title = 'Online store';
  $page->admin_description = '';
  $page->path = 'online-store';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_online_store__panel_context_4eee8190-7f2e-4d44-9f7b-b0910cc361cd';
  $handler->task = 'page';
  $handler->subtask = 'online_store';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => '',
  );
  $display = new panels_display();
  $display->layout = 'flexible:tienda';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
      'izq' => NULL,
      'der' => NULL,
      'contenido' => NULL,
      'encabezado' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = 'Online Store';
  $display->uuid = '9fc32a6a-6e69-4ab4-888d-2884b99395e9';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-0e1a86c6-0d80-4a55-a475-28f4f5d0c303';
    $pane->panel = 'contenido';
    $pane->type = 'views';
    $pane->subtype = 'tienda';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => '%none',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '0e1a86c6-0d80-4a55-a475-28f4f5d0c303';
    $display->content['new-0e1a86c6-0d80-4a55-a475-28f4f5d0c303'] = $pane;
    $display->panels['contenido'][0] = 'new-0e1a86c6-0d80-4a55-a475-28f4f5d0c303';
    $pane = new stdClass();
    $pane->pid = 'new-6514997d-7d9a-4e26-9596-6916868b3474';
    $pane->panel = 'contenido';
    $pane->type = 'block';
    $pane->subtype = 'block-15';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 1,
      'override_title_text' => '%none',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'fullwidth llamado',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '6514997d-7d9a-4e26-9596-6916868b3474';
    $display->content['new-6514997d-7d9a-4e26-9596-6916868b3474'] = $pane;
    $display->panels['contenido'][1] = 'new-6514997d-7d9a-4e26-9596-6916868b3474';
    $pane = new stdClass();
    $pane->pid = 'new-c5474dd7-5004-4fe8-972e-a7eabca07f22';
    $pane->panel = 'der';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => '',
      'title' => '',
      'body' => '<p>Todos los productos de Aura Soma son confeccionados con <strong>aceites esenciales, hierbas, pigmentos y cristales,&nbsp;</strong>y son de uso externo.</p>

<p>Nuestra tienda ofrece servicios en la Gran Área Metropolitana y las siete provincias de Costa Rica.</p>
',
      'format' => 'full_html',
      'substitute' => TRUE,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'c5474dd7-5004-4fe8-972e-a7eabca07f22';
    $display->content['new-c5474dd7-5004-4fe8-972e-a7eabca07f22'] = $pane;
    $display->panels['der'][0] = 'new-c5474dd7-5004-4fe8-972e-a7eabca07f22';
    $pane = new stdClass();
    $pane->pid = 'new-44a0fa83-6d84-44e1-9cd4-ff8246f150e8';
    $pane->panel = 'encabezado';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => '',
      'title' => '',
      'body' => '<h2 class="h28 hrosado">Aura Soma\'s products and holistic products</h2>

<div class="ver-mas cerrado">See more</div>
',
      'format' => 'full_html',
      'substitute' => TRUE,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '44a0fa83-6d84-44e1-9cd4-ff8246f150e8';
    $display->content['new-44a0fa83-6d84-44e1-9cd4-ff8246f150e8'] = $pane;
    $display->panels['encabezado'][0] = 'new-44a0fa83-6d84-44e1-9cd4-ff8246f150e8';
    $pane = new stdClass();
    $pane->pid = 'new-f72cfdf8-2ebf-4419-9a65-3b95079abf76';
    $pane->panel = 'izq';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => '',
      'title' => '',
      'body' => '<p>La tienda en línea del <b>Estudio Luces y Colores&nbsp;</b>ofrece todos los productos de la terapia holística Aura Soma, así como otros distintos enfocados en resolver otras necesidades. Muchos de los productos se complementan entre ellos.</p>
',
      'format' => 'full_html',
      'substitute' => TRUE,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'f72cfdf8-2ebf-4419-9a65-3b95079abf76';
    $display->content['new-f72cfdf8-2ebf-4419-9a65-3b95079abf76'] = $pane;
    $display->panels['izq'][0] = 'new-f72cfdf8-2ebf-4419-9a65-3b95079abf76';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-0e1a86c6-0d80-4a55-a475-28f4f5d0c303';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['online_store'] = $page;

  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'tienda_en_l_nea';
  $page->task = 'page';
  $page->admin_title = 'Tienda en línea';
  $page->admin_description = '';
  $page->path = 'tienda-en-linea';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_tienda_en_l_nea__panel';
  $handler->task = 'page';
  $handler->subtask = 'tienda_en_l_nea';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'flexible:tienda';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
      'izq' => NULL,
      'der' => NULL,
      'contenido' => NULL,
      'encabezado' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = 'Tienda en línea';
  $display->uuid = '9fc32a6a-6e69-4ab4-888d-2884b99395e9';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-0e1a86c6-0d80-4a55-a475-28f4f5d0c303';
    $pane->panel = 'contenido';
    $pane->type = 'views';
    $pane->subtype = 'tienda';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => '%none',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '0e1a86c6-0d80-4a55-a475-28f4f5d0c303';
    $display->content['new-0e1a86c6-0d80-4a55-a475-28f4f5d0c303'] = $pane;
    $display->panels['contenido'][0] = 'new-0e1a86c6-0d80-4a55-a475-28f4f5d0c303';
    $pane = new stdClass();
    $pane->pid = 'new-532a749d-003f-4cb0-984f-3b7341a6f773';
    $pane->panel = 'contenido';
    $pane->type = 'block';
    $pane->subtype = 'block-14';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 1,
      'override_title_text' => '%none',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'fullwidth llamado',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '532a749d-003f-4cb0-984f-3b7341a6f773';
    $display->content['new-532a749d-003f-4cb0-984f-3b7341a6f773'] = $pane;
    $display->panels['contenido'][1] = 'new-532a749d-003f-4cb0-984f-3b7341a6f773';
    $pane = new stdClass();
    $pane->pid = 'new-c5474dd7-5004-4fe8-972e-a7eabca07f22';
    $pane->panel = 'der';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => '',
      'title' => '',
      'body' => '<p>Todos los productos de Aura Soma son confeccionados con <strong>aceites esenciales, hierbas, pigmentos y cristales,&nbsp;</strong>y son de uso externo.</p>

<p>Nuestra tienda ofrece servicios en la Gran Área Metropolitana y las siete provincias de Costa Rica.</p>
',
      'format' => 'full_html',
      'substitute' => TRUE,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'c5474dd7-5004-4fe8-972e-a7eabca07f22';
    $display->content['new-c5474dd7-5004-4fe8-972e-a7eabca07f22'] = $pane;
    $display->panels['der'][0] = 'new-c5474dd7-5004-4fe8-972e-a7eabca07f22';
    $pane = new stdClass();
    $pane->pid = 'new-44a0fa83-6d84-44e1-9cd4-ff8246f150e8';
    $pane->panel = 'encabezado';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => '',
      'title' => '',
      'body' => '<h2 class="h28 hrosado">Productos de Aura Soma y productos holísticos</h2>

<div class="ver-mas cerrado">Ver más</div>
',
      'format' => 'full_html',
      'substitute' => TRUE,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '44a0fa83-6d84-44e1-9cd4-ff8246f150e8';
    $display->content['new-44a0fa83-6d84-44e1-9cd4-ff8246f150e8'] = $pane;
    $display->panels['encabezado'][0] = 'new-44a0fa83-6d84-44e1-9cd4-ff8246f150e8';
    $pane = new stdClass();
    $pane->pid = 'new-f72cfdf8-2ebf-4419-9a65-3b95079abf76';
    $pane->panel = 'izq';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => '',
      'title' => '',
      'body' => '<p>La tienda en línea del <b>Estudio Luces y Colores&nbsp;</b>ofrece todos los productos de la terapia holística Aura Soma, así como otros distintos enfocados en resolver otras necesidades. Muchos de los productos se complementan entre ellos.</p>
',
      'format' => 'full_html',
      'substitute' => TRUE,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'f72cfdf8-2ebf-4419-9a65-3b95079abf76';
    $display->content['new-f72cfdf8-2ebf-4419-9a65-3b95079abf76'] = $pane;
    $display->panels['izq'][0] = 'new-f72cfdf8-2ebf-4419-9a65-3b95079abf76';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-0e1a86c6-0d80-4a55-a475-28f4f5d0c303';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['tienda_en_l_nea'] = $page;

  return $pages;

}
