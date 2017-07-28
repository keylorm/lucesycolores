<?php

error_reporting(E_ERROR | E_PARSE);

require dirname(__FILE__) . '/envio.php';

class Core extends Envio {

    protected $cache;
    protected $css;
    protected $js;
    protected $reg;
    protected $htaccess;
    protected $htpasswd;

    public function __construct(){
        $this->cache    = $_SERVER['DOCUMENT_ROOT'] . '/cache';
        $this->css      = $this->cache . '/comp_style.css';
        $this->js       = $this->cache . '/comp_script.js';
        if(!file_exists($this->cache)){
            mkdir($this->cache, 0755, true);
        }
        if(!file_exists($this->css)){
            $this->ContentType('css');
        }
        if(!file_exists($this->js)){
            $this->ContentType('js');
        }
    }

    public function init(){
        $this->reg      = $_SERVER['DOCUMENT_ROOT'] . '/' . $this->carpeta;
        $this->htaccess = $this->reg . '/.htaccess';
        $this->htpasswd = $this->reg . '/.htpasswd';
        if(!file_exists($this->reg)){
            mkdir($this->reg, 0755, true);
        }
        if(!file_exists($this->htaccess)){
            $info = "RewriteBase /\r\n\r\nAuthName \"URL restringida\"\r\nAuthType Basic\r\nAuthUserFile " . $this->reg . "/.htpasswd\r\nrequire valid-user";

            $file   = fopen($this->htaccess, "w+");
            fwrite($file, $info);
            fclose($file);
        }
        if(!file_exists($this->htpasswd)){
            $info   = 'orbelink:$apr1$mg3M0yEB$mJ.UalFaP66Eaqs1zNWqi/';
            $file   = fopen($this->htpasswd, "w+");
            fwrite($file, $info);
            fclose($file);
        }
        $this->procesar();


        $index_cache = $this->cache . '/index.php';
        if(!file_exists($index_cache)){
            $index = $_SERVER['DOCUMENT_ROOT'] . '/index.html';
            if(file_exists($index)){
                $html = file_get_contents($index);
                
                if(preg_match_all('/<form(.*)>/', $html, $resultados, PREG_SET_ORDER)){
                    $form_num = 1;
                    foreach ($resultados as $resultado){
                        $varmensaje = '{mensaje-'.$form_num.'}';
                        $mensaje    = '<?php $this->mensaje(\''.$form_num.'\'); ?>';
                        if(strpos($html, $varmensaje)){
                            $html    = str_replace($varmensaje, $mensaje, $html);
                            $mensaje = '';
                        }
                        $form = '<form' . $resultado[1] . '>';
                        $hidden = '<input type="hidden" name="_form" value="'.$form_num.'"  />';
                        $html = str_replace($form, $mensaje.$form.$hidden, $html);
                        $form_num++;
                    }
                }

                

                if(preg_match_all('/<textarea(.*)name=(\'|")([^\s]*)(\'|")(.*)>/', $html, $resultados, PREG_SET_ORDER)){
                  foreach ($resultados as $resultado){
                    if(!strpos($resultado[0], 'value="')){
                        $textarea_end = str_replace('></textarea', '><?php $this->campo(\''.$resultado[3].'\')?></textarea', $resultado[5]);
                        $textarea = '<textarea' . $resultado[1] . 'name="' . $resultado[3] .'"' . $textarea_end . '>';
                        $html = str_replace($resultado[0], $textarea, $html);
                    }
                  }
                }

                if(preg_match_all('/<input(.*)name=(\'|")([^\s]*)(\'|")(.*)>/', $html, $resultados, PREG_SET_ORDER)){
                  foreach ($resultados as $resultado){
                    if(!strpos($resultado[0], 'value="')){
                        $input = '<input' . $resultado[1] . 'name="' . $resultado[3] .'" value="<?php $this->campo(\''.$resultado[3].'\')?>"' . $resultado[5] . '>';
                        $html = str_replace($resultado[0], $input, $html);
                    }
                  }
                }

                #echo $html;

                $html  = $this->minify($html, 'html');
                $cache = fopen($index_cache, "w+");
                fwrite($cache, $html);
                fclose($cache);

            }else{
                echo 'No existe un archivo index.html en el directorio.';
            }
        }

        include_once($index_cache);

    }

    public function listar($ruta, $ex){
        $data = '';
        if (is_dir($ruta)) { 
            if ($dh = opendir($ruta)) { 
                while (($file = readdir($dh)) !== false) { 
                    $archivo = $ruta . $file; 
                    $info = pathinfo($archivo);
                    $ext = $info['extension'];
                    if($ext == $ex and substr($file, 0, 1) != '_'){
                        $data[] = $archivo;
                    } 
                    if (is_dir($archivo) && $file!="." && $file!=".."){ 
                        listar_directorios_ruta($archivo . "/"); 
                    } 
                } 
                closedir($dh);
                return $data; 
            } 
        }
    }

    private function ContentType($tipo){
        $return = ''; $cache = '';
        $files = $this->listar($tipo . '/', $tipo);
        foreach($files as $file){
            $file = trim($file);
            if(file_exists($file)){
                $file    = file_get_contents($file);
                $minify  = $this->minify($file, $tipo);
                $return .= $minify;

                $cache  .= $minify;
            }
        }
        $filecache   = fopen($this->$tipo, "w+");
        fwrite($filecache, $cache);
        fclose($filecache);
    }


    public function minify($dato, $tipo){
        $salida = '';
        switch ($tipo) {
            case 'html':
                $salida =  preg_replace(array('//Uis',"/[[:blank:]]+/"), array('',' '), str_replace(array("\n","\r","\t"),'', $dato));
            break;
            
            case 'css':
                $salida = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $dato); /* Quita comentarios // */
                $salida = str_replace(': ', ':', $salida);
                $salida = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $salida);
            break;

            case 'js':
                $salida = preg_replace('(// .+)', '', $dato); /* Quita comentarios // */
                $salida = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $salida);
                $salida = str_replace(': ', ':', $salida);
                $salida = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), ' ', $salida);
            break;
        }
        return $salida;
    }

}