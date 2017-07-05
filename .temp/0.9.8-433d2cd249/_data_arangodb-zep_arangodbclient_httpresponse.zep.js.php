<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'HttpResponse',
    'abstract' => 0,
    'final' => 0,
    'definition' => 
    array (
      'properties' => 
      array (
        0 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_header',
          'default' => 
          array (
            'type' => 'string',
            'value' => '',
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 5,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 6,
          'char' => 13,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_body',
          'default' => 
          array (
            'type' => 'string',
            'value' => '',
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 6,
            'char' => 25,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 7,
          'char' => 13,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_headers',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 7,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 8,
          'char' => 13,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_result',
          'default' => 
          array (
            'type' => 'string',
            'value' => '',
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 8,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 9,
          'char' => 13,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_httpCode',
          'default' => 
          array (
            'type' => 'int',
            'value' => '0',
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 9,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 10,
          'char' => 13,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_wasAsync',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 10,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 11,
          'char' => 13,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => 'batchPart',
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 12,
          'char' => 9,
        ),
      ),
      'methods' => 
      array (
        0 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__construct',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'responseString',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 13,
              'char' => 54,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'originUrl',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 13,
                'char' => 79,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 13,
              'char' => 79,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'originMethod',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 13,
                'char' => 107,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 13,
              'char' => 107,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'wasAsync',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'bool',
                'value' => 'false',
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 13,
                'char' => 130,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 13,
              'char' => 130,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'declare',
              'data-type' => 'variable',
              'variables' => 
              array (
                0 => 
                array (
                  'variable' => '_headers',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 15,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => '_body',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 15,
                  'char' => 28,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 17,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_wasAsync',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'wasAsync',
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 17,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 17,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 18,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'and',
                'left' => 
                array (
                  'type' => 'not-identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'originUrl',
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 18,
                    'char' => 24,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 18,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 18,
                  'char' => 32,
                ),
                'right' => 
                array (
                  'type' => 'not-identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'originMethod',
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 18,
                    'char' => 49,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 18,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 18,
                  'char' => 56,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 18,
                'char' => 56,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'equals',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'responseString',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 19,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => '',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 19,
                      'char' => 37,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 19,
                    'char' => 37,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'throw',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'ClientException',
                        'dynamic' => 0,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'concat',
                              'left' => 
                              array (
                                'type' => 'concat',
                                'left' => 
                                array (
                                  'type' => 'concat',
                                  'left' => 
                                  array (
                                    'type' => 'concat',
                                    'left' => 
                                    array (
                                      'type' => 'string',
                                      'value' => 'Got no response from the server after request to ',
                                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                      'line' => 20,
                                      'char' => 95,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'originMethod',
                                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                      'line' => 20,
                                      'char' => 110,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                    'line' => 20,
                                    'char' => 110,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'string',
                                    'value' => ' ',
                                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                    'line' => 20,
                                    'char' => 116,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                  'line' => 20,
                                  'char' => 116,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'originUrl',
                                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                  'line' => 20,
                                  'char' => 128,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                'line' => 20,
                                'char' => 128,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => ' - Note: this may be a timeout issue',
                                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                'line' => 20,
                                'char' => 168,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                              'line' => 20,
                              'char' => 168,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                            'line' => 20,
                            'char' => 168,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 20,
                        'char' => 169,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 21,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 22,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 23,
              'char' => 11,
            ),
            3 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => '_body',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'HttpHelper',
                    'dynamic' => 0,
                    'name' => 'parseHttpMessage',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'responseString',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 23,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 23,
                        'char' => 64,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'originUrl',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 23,
                          'char' => 75,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 23,
                        'char' => 75,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'originMethod',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 23,
                          'char' => 89,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 23,
                        'char' => 89,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 23,
                    'char' => 90,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 23,
                  'char' => 90,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 24,
              'char' => 11,
            ),
            4 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_header',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => '_body',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 24,
                      'char' => 34,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '0',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 24,
                      'char' => 36,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 24,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 24,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 25,
              'char' => 11,
            ),
            5 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_body',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => '_body',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 25,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '1',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 25,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 25,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 25,
                  'char' => 35,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 26,
              'char' => 11,
            ),
            6 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => '_headers',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'HttpHelper',
                    'dynamic' => 0,
                    'name' => 'parseHeaders',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                            'line' => 26,
                            'char' => 54,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_header',
                            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                            'line' => 26,
                            'char' => 62,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 26,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 26,
                        'char' => 62,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 26,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 26,
                  'char' => 63,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 27,
              'char' => 11,
            ),
            7 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_httpCode',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => '_headers',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 27,
                      'char' => 39,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '0',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 27,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 27,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 27,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 28,
              'char' => 11,
            ),
            8 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_result',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => '_headers',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 28,
                      'char' => 37,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '1',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 28,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 28,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 28,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 29,
              'char' => 11,
            ),
            9 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_headers',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => '_headers',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 29,
                      'char' => 38,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '2',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 29,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 29,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 29,
                  'char' => 41,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 30,
              'char' => 10,
            ),
            10 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'and',
                'left' => 
                array (
                  'type' => 'identical',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 30,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_body',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 30,
                      'char' => 26,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 30,
                    'char' => 26,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 30,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 30,
                  'char' => 34,
                ),
                'right' => 
                array (
                  'type' => 'list',
                  'left' => 
                  array (
                    'type' => 'and',
                    'left' => 
                    array (
                      'type' => 'and',
                      'left' => 
                      array (
                        'type' => 'not-identical',
                        'left' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                            'line' => 30,
                            'char' => 42,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_httpCode',
                            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                            'line' => 30,
                            'char' => 55,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 30,
                          'char' => 55,
                        ),
                        'right' => 
                        array (
                          'type' => 'int',
                          'value' => '204',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 30,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 30,
                        'char' => 62,
                      ),
                      'right' => 
                      array (
                        'type' => 'not-identical',
                        'left' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                            'line' => 30,
                            'char' => 69,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_httpCode',
                            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                            'line' => 30,
                            'char' => 82,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 30,
                          'char' => 82,
                        ),
                        'right' => 
                        array (
                          'type' => 'int',
                          'value' => '304',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 30,
                          'char' => 89,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 30,
                        'char' => 89,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 30,
                      'char' => 89,
                    ),
                    'right' => 
                    array (
                      'type' => 'not',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'wasAsync',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 30,
                        'char' => 100,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 30,
                      'char' => 100,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 30,
                    'char' => 100,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 30,
                  'char' => 102,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 30,
                'char' => 102,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'and',
                    'left' => 
                    array (
                      'type' => 'not-identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'originUrl',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 31,
                        'char' => 28,
                      ),
                      'right' => 
                      array (
                        'type' => 'null',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 31,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 31,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'not-identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'originMethod',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 31,
                        'char' => 53,
                      ),
                      'right' => 
                      array (
                        'type' => 'null',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 31,
                        'char' => 60,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 31,
                      'char' => 60,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 31,
                    'char' => 60,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'throw',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'ClientException',
                        'dynamic' => 0,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'concat',
                              'left' => 
                              array (
                                'type' => 'concat',
                                'left' => 
                                array (
                                  'type' => 'concat',
                                  'left' => 
                                  array (
                                    'type' => 'string',
                                    'value' => 'Got an invalid response from the server after request to ',
                                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                    'line' => 32,
                                    'char' => 103,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'originMethod',
                                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                    'line' => 32,
                                    'char' => 118,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                  'line' => 32,
                                  'char' => 118,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => ' ',
                                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                  'line' => 32,
                                  'char' => 124,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                'line' => 32,
                                'char' => 124,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'originUrl',
                                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                                'line' => 32,
                                'char' => 135,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                              'line' => 32,
                              'char' => 135,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                            'line' => 32,
                            'char' => 135,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 32,
                        'char' => 136,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 33,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 34,
                  'char' => 17,
                ),
                1 => 
                array (
                  'type' => 'throw',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => 'ClientException',
                    'dynamic' => 0,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => 'Got an invalid response from the server',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 34,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 34,
                        'char' => 80,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 34,
                    'char' => 81,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 35,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 36,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 13,
          'last-line' => 38,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHttpCode',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 40,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_httpCode',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 40,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 40,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 41,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'int',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 39,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 39,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 38,
          'last-line' => 43,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHeader',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'name',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 43,
              'char' => 42,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'name',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'strtolower',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'name',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 46,
                          'char' => 36,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 46,
                        'char' => 36,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 46,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 46,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 47,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'isset',
                'left' => 
                array (
                  'type' => 'array-access',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 47,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_headers',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 47,
                      'char' => 32,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 47,
                    'char' => 32,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'name',
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 47,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 47,
                  'char' => 39,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 47,
                'char' => 39,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 48,
                        'char' => 25,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_headers',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 48,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 48,
                      'char' => 34,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'name',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 48,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 48,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 49,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 50,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 51,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'string',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 44,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 44,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 43,
          'last-line' => 53,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHeaders',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 55,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_headers',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 55,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 55,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 56,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'array',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 54,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 54,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 53,
          'last-line' => 58,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getLocationHeader',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 60,
                  'char' => 21,
                ),
                'name' => 'getHeader',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 60,
                        'char' => 53,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'HEADER_LOCATION',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 60,
                        'char' => 53,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 60,
                      'char' => 53,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 60,
                    'char' => 53,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 60,
                'char' => 54,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 61,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'string',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 59,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 59,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 58,
          'last-line' => 63,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getBody',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 65,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_body',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 65,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 65,
                'char' => 27,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 66,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'string',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 64,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 64,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 63,
          'last-line' => 68,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getResult',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 70,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_result',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 70,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 70,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 71,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'string',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 69,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 69,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 68,
          'last-line' => 73,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getJson',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'declare',
              'data-type' => 'variable',
              'variables' => 
              array (
                0 => 
                array (
                  'variable' => 'body',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 75,
                  'char' => 17,
                ),
                1 => 
                array (
                  'variable' => 'json',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 75,
                  'char' => 23,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 77,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'body',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 77,
                      'char' => 26,
                    ),
                    'name' => 'getBody',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 77,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 77,
                  'char' => 36,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 78,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'json',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'json_decode',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'body',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 78,
                          'char' => 37,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 78,
                        'char' => 37,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 78,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 78,
                        'char' => 43,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 78,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 78,
                  'char' => 44,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 79,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not',
                'left' => 
                array (
                  'type' => 'fcall',
                  'name' => 'is_array',
                  'call-type' => 1,
                  'parameters' => 
                  array (
                    0 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'json',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 79,
                        'char' => 26,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 79,
                      'char' => 26,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 79,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 79,
                'char' => 28,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 80,
                      'char' => 21,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_wasAsync',
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 80,
                      'char' => 32,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 80,
                    'char' => 32,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'return',
                      'expr' => 
                      array (
                        'type' => 'empty-array',
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 81,
                        'char' => 26,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                      'line' => 82,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 83,
                  'char' => 17,
                ),
                1 => 
                array (
                  'type' => 'throw',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => 'ClientException',
                    'dynamic' => 0,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => 'Got a malformed result from the server',
                          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                          'line' => 83,
                          'char' => 79,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                        'line' => 83,
                        'char' => 79,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 83,
                    'char' => 80,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 84,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 85,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'json',
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 85,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 86,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'array',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 74,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 74,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 73,
          'last-line' => 88,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setBatchPart',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'batchPart',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 88,
              'char' => 43,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'batchPart',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'batchPart',
                    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                    'line' => 90,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 90,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 91,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 91,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 92,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'HttpResponse',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 89,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 89,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 89,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 88,
          'last-line' => 94,
          'char' => 19,
        ),
        9 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getBatchPart',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 96,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'batchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                  'line' => 96,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
                'line' => 96,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
              'line' => 97,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 94,
          'last-line' => 99,
          'char' => 19,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'HEADER_LOCATION',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'location',
            'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
            'line' => 12,
            'char' => 39,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
          'line' => 13,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/httpresponse.zep',
    'line' => 3,
    'char' => 5,
  ),
);