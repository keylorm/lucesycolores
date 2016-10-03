<?php

class CommerceCredomatic implements ICommerceCredomatic {

  protected $key;

  /**
   *
   * @param type $args
   */
  public function __construct($args = array()) {
    if (is_array($args) && !empty($args)) {
      if (isset($args['key'])) {
        $this->setKey($args['key']);
      }
    }
  }

  /**
   *
   * @return type
   */
  public function getKey() {
    return $this->key;
  }

  /**
   *
   * @param type $key
   */
  public function setKey($key) {
    $this->key = $key;
  }

  /**
   *
   * @param type $parameters
   * @return null
   */
  public function doHttpRequest($parameters = array()) {
    $data = array(
      'type' => $parameters['type'],
      'orderid' => $parameters['orderid'],
      'key_id' => $parameters['key_id'],
      'hash' => $parameters['hash'],
      'time' => $parameters['time'],
      'redirect' => $parameters['redirect'],
      'ccnumber' => $parameters['ccnumber'],
      'ccexp' => $parameters['ccexp'],
      'amount' => $parameters['amount'],
      'cvv' => $parameters['cvv'],
      'orderdescription' => $parameters['description'],
    );

    $url = CREDOMATIC_URL;

    $options = array(
      'method' => 'POST',
      'data' => http_build_query($data),
      'headers' => array('Content-Type' => 'application/x-www-form-urlencoded'),
    );
    $response = drupal_http_request($url, $options);
    if (isset($response->redirect_url)) {
      if (isset($response->data)) {
        return (object) drupal_json_decode($response->data);
      }
    } else {
      print $response->data;
    }

    return NULL;
  }

  /**
   *
   * @global type $base_url
   * @param type $parameters
   */
  public function prepareParameters(&$parameters = array()) {
    global $base_url;

    $parameters['time'] = time();
    $parameters['redirect'] = "$base_url/" . CREDOMATIC_RESPONSE_URL;
    $parameters['amount'] = number_format($parameters['amount'], 2, '.', '');
    $parameters['description'] = implode('', $parameters['description']);
    $parameters['hash'] = md5(implode('|', array($parameters['orderid'], $parameters['amount'], $parameters['time'], $this->getKey())));
  }

  /**
   *
   * @param type $code
   * @return type
   */
  public function reviewCodeAVS($code) {
    $response = '"';

    switch ($code) {
      case 'X':
        $response = t('Exact match, 9-character numeric ZIP');
        break;

      case 'Y':
        $response = t('Exact match, 5-character numeric ZIP');
        break;

      case 'A':
        $response = t('Address match only');
        break;

      case 'W':
        $response = t('9-character numeric ZIP match only');
        break;

      case 'Z':
        $response = t('5-character Zip match only');
        break;

      case 'N':
        $response = t('No address or ZIP match');
        break;

      case 'U':
        $response = t('Address unavailable');
        break;

      case 'G':
        $response = t('Non-U.S. Issuer does not participate');
        break;

      case 'R':
        $response = t('Issuer system unavailable');
        break;

      case 'E':
        $response = t('Not a mail/phone order');
        break;

      case 'S':
        $response = t('Service not supported');
        break;

      case '0':
        $response = t('AVS Not Available');
        break;
    }

    return $response;
  }

  /**
   *
   * @param type $code
   * @return type
   */
  public function reviewCodeCVV($code) {
    $response = '-';

    switch ($code) {
      case 'M':
        $response = t('CVV2/CVC2 Match');
        break;

      case 'N':
        $response = t('CVV2/CVC2 No Match');
        break;

      case 'P':
        $response = t('Not Processed');
        break;

      case 'S':
        $response = t('Merchant has indicated that CVV2/CVC2 is not present on card');
        break;

      case 'U':
        $response = t('Issuer is not certified and/or has not provided Visa encryption keys');
        break;
    }

    return $response;
  }

}
