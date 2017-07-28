<?php
$l = isset($_GET['l'])?$_GET['l']:1;



$action = '/terapiaalternativa/';
$landing = 'Terapia Alternativa A';
if($l == 2){
  $action = '/terapiasalternativas/';
  $landing = 'Terapias Alternativas B';
}

include 'envia_mail.php';?><!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Luces y Colores</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
 
  <link rel="stylesheet" type="text/css" href="/terapiaalternativa/css/normalize.css">
  <link rel="stylesheet" type="text/css" href="/terapiaalternativa/css/webflow.css">
  <link rel="stylesheet" type="text/css" href="/terapiaalternativa/css/luces-y-colores.webflow.css">
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
  <script>
    WebFont.load({
      google: {
        families: ["Montserrat:300,400,700","Trocchi:regular"]
      }
    });
  </script>
  <script type="text/javascript" src="/terapiaalternativa/js/modernizr.js"></script>
  <link rel="shortcut icon" type="image/x-icon" href="/terapiaalternativa/images/favicon.png">
 <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-52364581-1', 'auto');
    ga('send', 'pageview');

  </script>
  <script src="/terapiaalternativa/js/script.js" type="text/javascript"></script>
</head>
<body>
  <div class="w-section st_menu">
    <div class="w-container ct_menu">
      <div class="w-row">
        <div class="w-col w-col-4"><img src="/terapiaalternativa/images/logo.png" class="logo">
        </div>
        <div class="w-col w-col-8">
          <div data-collapse="medium" data-animation="default" data-duration="400" data-contain="1" class="w-nav navbar">
            <div class="w-container">
              <a href="#" class="w-nav-brand"></a>
              <nav role="navigation" class="w-nav-menu navmenu">
                <a href="#padecimientos" class="w-nav-link lia">Trate sus<br>padecimientos</a>
                <a href="#testimonios" class="w-nav-link lia">Testimonios</a>
                <a href="#terapias" class="w-nav-link lia">Terapias Aura Soma<br>&amp; Reiki</a>
                <a href="#solicite_cita" class="w-nav-link lia">Solicite Cita</a>
              </nav>
              <div class="w-nav-button menu_button">
                <div class="w-icon-nav-menu menu_icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-section st_banner">
    <div class="w-container ct_banner">

      <?php if($l == 2){?>
      <div class="w-row">
        <div class="w-col w-col-6 w-clearfix">
          <h1 class="h1_slider_2">MEJORE SU SALUD</h1>
          <p class="p_slider_2">Luces y Colores Costa Rica, ofrece las terapias holísticas Aura Soma y Reiki, diseñadas para desencadenar un proceso global de curación<br > natural de su cuerpo, mente, emociones y <br >espíritu.</p>
        </div>
        <div class="w-col w-col-6 col_form">
          <div class="w-form" id="solicite_cita">
            <form action="<?=$action?>#enviar" id="formcontacto" name="formcontacto" method="post" class="w-clearfix form_slider" autocomplete="off">
              <input type="hidden" name="action" id="action" value="send"  />
              <input type="hidden" name="landing" id="landing" value="<?=$landing?>"  />
              <?php include 'mensajes.php'; ?>
              <p class="titulo_form_2">Solicite una cita</p>
              <input id="nombre-2" type="text" placeholder="Nombre" name="nombre" class="w-input input nombre" data-role="requerido" required value="<?php echo $nombre?>">
              <input id="telefono-2" type="text" placeholder="Teléfono" name="telefono" class="w-input input telefono" data-role="requerido" required value="<?php echo $telefono?>">
              <input id="correo-2" type="email" placeholder="Correo Electrónico" name="correo" class="w-input input correo" data-role="requerido" required value="<?php echo $correo?>">
              <textarea id="mensaje-2" placeholder="Mensaje" name="mensaje" class="w-input textarea" data-role="requerido" required><?php echo $mensaje?></textarea>
              <input type="submit" value="Solicitar" class="w-button submit_2">
            </form>
          </div>
        </div>
      </div>
      <?php }?>

      <?php if($l == 1){?>
      <h1 class="h1_slider">MEJORE SU SALUD CON LAS TERAPIAS<br>ALTERNATIVAS AURA SOMA Y REIKI</h1>
      <p class="p_slider">Luces y Colores Costa Rica, ofrece las terapias holísticas Aura Soma y Reiki, diseñadas para desencadenar un proceso global de curación natural de su cuerpo, mente, emociones y espíritu.</p>
      <div class="w-row row_btn_banner">
        <div class="w-col w-col-6"><a href="#padecimientos" class="btn bgmorado right">Solucione hoy mismo<br>
sus padecimientos</a>
        </div>
        <div class="w-col w-col-6"><a href="#solicite_cita" class="btn bgazul">Solicite una cita en<br>
Luces &amp; Colores</a>
        </div>
      </div>
      <?php }?>


    </div>
  </div>
  <div id="padecimientos" class="w-section st_terapias_alter">
    <div class="w-container ct_terapias_alter">
      <p class="p">Recobrando el bienestar físico, mental y emocional</p>
      <h2 class="h2 cverde">Terapias alternativas en Costa Rica</h2>
      <div class="w-row row_terapias_alter">

        <div class="w-col w-col-2 w-col-medium-4 w-col-small-6">
          <div class="box_terapia_alter"><img src="/terapiaalternativa/images/img1.png">
            <p class="pbox">¿Cansado?</p>
          </div>
        </div>
        <div class="w-col w-col-2 w-col-medium-4 w-col-small-6">
          <div class="box_terapia_alter"><img src="/terapiaalternativa/images/img2.png">
            <p class="pbox">¿Estresado?</p>
          </div>
        </div>
        <div class="w-col w-col-2 w-col-medium-4 w-col-small-6">
          <div class="box_terapia_alter"><img src="/terapiaalternativa/images/img3.png">
            <p class="pbox">¿Está
              <br>deprimido?</p>
          </div>
        </div>
        <div class="w-col w-col-2 w-col-medium-4 w-col-small-6">
          <div class="box_terapia_alter"><img src="/terapiaalternativa/images/img4.png">
            <p class="pbox">¿Padece
              <br>Insomnio?</p>
          </div>
        </div>
        <div class="w-col w-col-2 w-col-medium-4 w-col-small-6">
          <div class="box_terapia_alter"><img src="/terapiaalternativa/images/img5.png">
            <p class="pbox">¿Sufre dolores
              <br>musculares?</p>
          </div>
        </div>
  
      </div>
      <p class="p">El Estudio Luces y Colores, ubicado en San Pedro, ofrece las terapias holísticas Aura Soma y Reiki, que lo ayudan a estimular los procesos de auto sanación naturales de su cuerpo, para que recobre el balance y bienestar físico, mental, emocional y espiritual. Dirigido por Erika Faeth, maestra de Aura Soma y Reiki.</p>
      <p class="espacio"></p><a href="#solicite_cita" class="btn bgverde center">Recobre su balance<br>
físico y emocional</a>
    </div>
  </div>
  <div id="testimonios" class="w-section st_testimonios">
    <div class="w-container ct_testimonios">
      <h2 class="h2 cmorado">Testimonios: Beneficios de las terapias holísticas</h2>
      <div data-animation="slide" data-duration="500" class="w-slider w-clearfix slider">
        <div class="w-slider-mask mask">
          <div class="w-slide slide">
            <p class="p">"La terapia Aura Soma ha significado para mí vida, estabilidad, firmeza, nivelación. Erika ha sido un instrumento del creador, con sus conocimientos, dones y profesionalismo. Verdaderamente recomiendo Aura Soma para quien quiere ser feliz".
              <br>
              <br><strong data-new-link="true">Andrea Acosta</strong>
            </p>
          </div>
          <div class="w-slide slide">
            <p class="p">El aurosoma es una herramienta terapéutica que me ha sorprendido positivamente. Pimero por ser puramente proyectiva y sensorial siempre responde a la necesidad del momento. Luego, a lo largo del mes promueve un proceso de reflexión y maduración que facita el cambio. Lo recomiendo sinceramente como un elemento terapéutico que nunca falla!
              <br>
              <br>
              <strong data-new-link="true">Liza Fendt</strong>
            </p>
          </div>
        </div>
        <div class="w-slider-arrow-left hide">
          <div class="w-icon-slider-left"></div>
        </div>
        <div class="w-slider-arrow-right hide">
          <div class="w-icon-slider-right"></div>
        </div>
        <div class="w-slider-nav w-round slide_nav"></div>
      </div><a href="#solicite_cita" class="btn bgmorado center">Solicite cita en<br>
Luces y Colores</a>
    </div>
  </div>
  <div id="terapias" class="w-section st_terapias">
    <div class="w-container ct_terapias">
      <p class="p">Recobrando el bienestar físico, mental y emocional</p>
      <h2 class="h2 cazul">Terapias holísticas facilitadas por Luces y Colores</h2>
      <div data-duration-in="300" data-duration-out="100" class="w-tabs">
        <div class="w-tab-menu tabs_menu">
          <a data-w-tab="Tab 1" class="w-tab-link w--current w-inline-block tab_link">
            <div>Aura Soma</div>
          </a>
          <a data-w-tab="Tab 2" class="w-tab-link w-inline-block tab_link">
            <div>Reiki</div>
          </a>
        </div>
        <div class="w-tab-content">
          <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
            <div class="w-row">
              <div class="w-col w-col-6"><img src="/terapiaalternativa/images/aura_soma.jpg">
              </div>
              <div class="w-col w-col-6">
                <p class="titulo_terapia">Aura Soma: terapia de color para el alma</p>
                <p class="p_terapia">Aura Soma es un sistema no intrusivo y auto selectivo que, de la mano con nuestra sabiduría interior, nos ayuda a crecer en nuestro amor propio, a descubrir nuestros talentos y fortalezas y a utilizarlos para potenciar nuestra vida y lo que queremos construir en ella.
                  <br>
                  <br> La consulta de Aura Soma se da a través de hermosas botellas de colores con aceites esenciales: Equilibrium; Pomanders; Quintaesencia; Arcangeloi y Esencia de color. Nuestra selección de colores nos permitirá descubrir quiénes somos y qué necesitamos.</p>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 2" class="w-tab-pane">
            <div class="w-row">
              <div class="w-col w-col-6"><img src="/terapiaalternativa/images/reiki.jpg">
              </div>
              <div class="w-col w-col-6">
                <p class="titulo_terapia">Reiki, el arte de aliviar con las manos</p>
                <p class="p_terapia">El Reiki es una terapia de sanación holística donde la maestra Erika Faeth logra canalizar al paciente la energía más pura de amor del universo, a través del tacto y las manos, para así activar y estimular los procesos de auto sanación naturales de la persona.
                  <br>
                  <br> Una de las principales características del Reiki es que trabaja no solo a nivel físico, sino que actúa a nivel emocional, espiritual y mental, brindándole a cada nivel la ayuda necesaria para encontrar un estado de equilibrio y balance.</p>
              </div>
            </div>
          </div>
        </div>
      </div><a href="#solicite_cita" class="btn bgazul right btntop">Permítanos ayudarlo a<br>
través de Aura Soma</a>
    </div>
  </div>
  <?php if($l == 1){?>
  <div id="solicite_cita" class="w-section st_form">
    <div class="w-container ct_form">
      <p class="p">¿Interesado en las terapias holísticas Reiki y Aura Soma?</p>
      <h2 class="h2 crojo">Solicite una cita en Luces y Colores</h2>
      <div class="w-form" id="enviar">
        <?php include 'mensajes.php'; ?>
        <form action="<?=$action?>#enviar" id="formcontacto" name="formcontacto" method="post" autocomplete="off">
          <input type="hidden" name="action" id="action" value="send"  />
          <input type="hidden" name="landing" id="landing" value="<?=$landing?>"  />
          <div class="w-row row_form">
            <div class="w-col w-col-6">
              <input id="nombre" type="text" placeholder="Nombre" name="nombre" class="w-input input nombre" data-role="requerido" required value="<?php echo $nombre?>">
              <input id="telefono" type="text" placeholder="Teléfono" name="telefono" class="w-input input telefono" data-role="requerido" required value="<?php echo $telefono?>">
              <input id="correo" type="email" placeholder="Correo Electrónico" name="correo" class="w-input input correo" data-role="requerido" required value="<?php echo $correo?>">
            </div>
            <div class="w-col w-col-1"></div>
            <div class="w-col w-col-5">
              <textarea id="mensaje" placeholder="Mensaje" name="mensaje" class="w-input textarea" data-role="requerido" required><?php echo $mensaje?></textarea>
              <input type="submit" value="Enviar" class="w-button submit btn bgrojo right">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <?php }?>
  <div class="w-section st_footer">
    <?php if($l == 1){?>
    <div class="w-container ct_footer"><img src="/terapiaalternativa/images/logo.png" class="logo_img"></div>
    <?php }?>
    <?php if($l == 2){?>
    <div class="w-container ct_footer">
      <div class="w-row">
        <div class="w-col w-col-5"><img src="/terapiaalternativa/images/logo.png" class="logo_img left">
        </div>
        <div class="w-col w-col-7">
          <p class="p_footer">De la esquina noroeste del Mall San Pedro 250 mts al oeste, casa blanca con &nbsp;verde a mano derecha, contigua a edificio de apartamentos de tres pisos.</p>
        </div>
      </div>
    </div>
    <?php }?>
  </div>  
  <script type="text/javascript" src="/terapiaalternativa/js/webflow.js"></script>
  <!--[if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif]-->
</body>
</html>