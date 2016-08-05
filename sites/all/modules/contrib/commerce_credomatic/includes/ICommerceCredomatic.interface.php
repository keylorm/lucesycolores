<?php

interface ICommerceCredomatic {
/**
 *
 * @param type $parameters
 */
  public function doHttpRequest($parameters = array());
/**
 *
 * @param type $parameters
 */
  public function prepareParameters(&$parameters = array());
/**
 *
 * @param type $code
 */
  public function reviewCodeAVS($code);
/**
 *
 * @param type $code
 */
  public function reviewCodeCVV($code);
}
