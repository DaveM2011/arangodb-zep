<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Connection',
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
          'name' => '_options',
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
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
          'name' => '_httpHeader',
          'default' => 
          array (
            'type' => 'string',
            'value' => '',
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 6,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
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
          'name' => '_baseUrl',
          'default' => 
          array (
            'type' => 'string',
            'value' => '',
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 7,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
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
          'name' => '_handle',
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
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
          'name' => '_useKeepAlive',
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
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
          'name' => '_batches',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 10,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
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
          'name' => '_activeBatch',
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 12,
          'char' => 13,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_captureBatch',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 12,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 13,
          'char' => 13,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_batchRequest',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 13,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 14,
          'char' => 13,
        ),
        9 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_database',
          'default' => 
          array (
            'type' => 'string',
            'value' => '',
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 14,
            'char' => 29,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 15,
          'char' => 10,
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
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 15,
              'char' => 46,
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
                  'property' => '_options',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => 'ConnectionOptions',
                    'dynamic' => 0,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 17,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 17,
                        'char' => 59,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 17,
                    'char' => 60,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 17,
                  'char' => 60,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 18,
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
                  'property' => '_useKeepAlive',
                  'expr' => 
                  array (
                    'type' => 'equals',
                    'left' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 18,
                          'char' => 41,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_options',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 18,
                          'char' => 51,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 18,
                        'char' => 51,
                      ),
                      'name' => 'offsetGet',
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
                              'value' => 'ConnectionOptions',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 18,
                              'char' => 98,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_CONNECTION',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 18,
                              'char' => 98,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 18,
                            'char' => 98,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 18,
                          'char' => 98,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 18,
                      'char' => 101,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => 'Keep-Alive',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 18,
                      'char' => 115,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 18,
                    'char' => 115,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 18,
                  'char' => 115,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 19,
              'char' => 6,
            ),
            2 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 19,
                  'char' => 8,
                ),
                'name' => 'setDatabase',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 19,
                          'char' => 26,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_options',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 19,
                          'char' => 36,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 19,
                        'char' => 36,
                      ),
                      'name' => 'offsetGet',
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
                              'value' => 'ConnectionOptions',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 19,
                              'char' => 81,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_DATABASE',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 19,
                              'char' => 81,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 19,
                            'char' => 81,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 19,
                          'char' => 81,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 19,
                      'char' => 82,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 19,
                    'char' => 82,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 19,
                'char' => 83,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 20,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 15,
          'last-line' => 22,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__destruct',
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
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 24,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_useKeepAlive',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 24,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 24,
                  'char' => 33,
                ),
                'right' => 
                array (
                  'type' => 'fcall',
                  'name' => 'is_resource',
                  'call-type' => 1,
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
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 24,
                          'char' => 52,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_handle',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 24,
                          'char' => 60,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 24,
                        'char' => 60,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 24,
                      'char' => 60,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 24,
                  'char' => 62,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 24,
                'char' => 62,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'fcall',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'fclose',
                    'call-type' => 1,
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
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 25,
                            'char' => 25,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_handle',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 25,
                            'char' => 33,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 25,
                          'char' => 33,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 25,
                        'char' => 33,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 25,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 26,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 27,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 22,
          'last-line' => 29,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setOption',
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
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 29,
              'char' => 42,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 29,
              'char' => 53,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'or',
                'left' => 
                array (
                  'type' => 'or',
                  'left' => 
                  array (
                    'type' => 'or',
                    'left' => 
                    array (
                      'type' => 'or',
                      'left' => 
                      array (
                        'type' => 'or',
                        'left' => 
                        array (
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'name',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 31,
                            'char' => 19,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ConnectionOptions',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 31,
                              'char' => 57,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_ENDPOINT',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 31,
                              'char' => 57,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 31,
                            'char' => 57,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 31,
                          'char' => 57,
                        ),
                        'right' => 
                        array (
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'name',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 31,
                            'char' => 66,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ConnectionOptions',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 31,
                              'char' => 100,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_HOST',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 31,
                              'char' => 100,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 31,
                            'char' => 100,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 31,
                          'char' => 100,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 31,
                        'char' => 100,
                      ),
                      'right' => 
                      array (
                        'type' => 'identical',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'name',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 31,
                          'char' => 109,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ConnectionOptions',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 31,
                            'char' => 143,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_PORT',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 31,
                            'char' => 143,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 31,
                          'char' => 143,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 31,
                        'char' => 143,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 31,
                      'char' => 143,
                    ),
                    'right' => 
                    array (
                      'type' => 'identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'name',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 31,
                        'char' => 152,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ConnectionOptions',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 31,
                          'char' => 193,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_VERIFY_CERT',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 31,
                          'char' => 193,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 31,
                        'char' => 193,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 31,
                      'char' => 193,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 31,
                    'char' => 193,
                  ),
                  'right' => 
                  array (
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'name',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 31,
                      'char' => 202,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 31,
                        'char' => 239,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_CIPHERS',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 31,
                        'char' => 239,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 31,
                      'char' => 239,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 31,
                    'char' => 239,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 31,
                  'char' => 239,
                ),
                'right' => 
                array (
                  'type' => 'identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'name',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 31,
                    'char' => 248,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ConnectionOptions',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 31,
                      'char' => 294,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'OPTION_ALLOW_SELF_SIGNED',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 31,
                      'char' => 294,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 31,
                    'char' => 294,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 31,
                  'char' => 294,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 31,
                'char' => 294,
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
                              'type' => 'string',
                              'value' => 'Must not set option ',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 32,
                              'char' => 62,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 32,
                              'char' => 70,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 32,
                            'char' => 70,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => ' after connection is created.',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 32,
                            'char' => 103,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 32,
                          'char' => 103,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 32,
                        'char' => 103,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 32,
                    'char' => 104,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 33,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 34,
              'char' => 12,
            ),
            1 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 34,
                    'char' => 14,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_options',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 34,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 34,
                  'char' => 24,
                ),
                'name' => 'offsetSet',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'name',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 34,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 34,
                    'char' => 39,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 34,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 34,
                    'char' => 46,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 34,
                'char' => 47,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 35,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'identical',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'name',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 35,
                  'char' => 19,
                ),
                'right' => 
                array (
                  'type' => 'static-constant-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'ConnectionOptions',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 35,
                    'char' => 55,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'OPTION_TIMEOUT',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 35,
                    'char' => 55,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 35,
                  'char' => 55,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 35,
                'char' => 55,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'is_resource',
                    'call-type' => 1,
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
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 36,
                            'char' => 33,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_handle',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 36,
                            'char' => 41,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 36,
                          'char' => 41,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 36,
                        'char' => 41,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 36,
                    'char' => 43,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'fcall',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'stream_set_timeout',
                        'call-type' => 1,
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
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 37,
                                'char' => 41,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_handle',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 37,
                                'char' => 49,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 37,
                              'char' => 49,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 37,
                            'char' => 49,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 37,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 37,
                            'char' => 56,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 37,
                        'char' => 57,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 38,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 39,
                  'char' => 9,
                ),
              ),
              'else_statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'name',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 40,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 40,
                        'char' => 62,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_CONNECTION',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 40,
                        'char' => 62,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 40,
                      'char' => 62,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 40,
                    'char' => 62,
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
                          'property' => '_useKeepAlive',
                          'expr' => 
                          array (
                            'type' => 'identical',
                            'left' => 
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
                                    'value' => 'value',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 41,
                                    'char' => 60,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 41,
                                  'char' => 60,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 41,
                              'char' => 64,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => 'keep-alive',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 41,
                              'char' => 78,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 41,
                            'char' => 78,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 41,
                          'char' => 78,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 42,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'if',
                      'expr' => 
                      array (
                        'type' => 'identical',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'name',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 43,
                          'char' => 27,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ConnectionOptions',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 43,
                            'char' => 64,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_DATABASE',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 43,
                            'char' => 64,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 43,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 43,
                        'char' => 64,
                      ),
                      'statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'mcall',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 44,
                              'char' => 26,
                            ),
                            'name' => 'setDatabase',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'value',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 44,
                                  'char' => 44,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 44,
                                'char' => 44,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 44,
                            'char' => 45,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 45,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 46,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 47,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 48,
              'char' => 12,
            ),
            3 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 48,
                  'char' => 14,
                ),
                'name' => 'updateHttpHeader',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 48,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 49,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 30,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 29,
          'last-line' => 51,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getOptions',
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 53,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_options',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 53,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 53,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 54,
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
                  'value' => 'ConnectionOptions',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 52,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 52,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 52,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 51,
          'last-line' => 56,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getOption',
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
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 56,
              'char' => 42,
            ),
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
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 59,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_options',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 59,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 59,
                  'char' => 30,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'name',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 59,
                  'char' => 35,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 59,
                'char' => 36,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 60,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 56,
          'last-line' => 62,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'get',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 62,
              'char' => 35,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'customHeaders',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 62,
                'char' => 61,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 62,
              'char' => 61,
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
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 64,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 66,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 66,
                      'char' => 30,
                    ),
                    'name' => 'executeRequest',
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
                            'value' => 'HttpHelper',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 66,
                            'char' => 68,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'METHOD_GET',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 66,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 66,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 66,
                        'char' => 68,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 66,
                          'char' => 73,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 66,
                        'char' => 73,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => '',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 66,
                          'char' => 77,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 66,
                        'char' => 77,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'customHeaders',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 66,
                          'char' => 92,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 66,
                        'char' => 92,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 66,
                    'char' => 93,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 66,
                  'char' => 93,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 67,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 67,
                  'char' => 21,
                ),
                'name' => 'parseResponse',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 67,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 67,
                    'char' => 44,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 67,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 68,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 63,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 63,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 63,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 62,
          'last-line' => 70,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'post',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 70,
              'char' => 36,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 70,
              'char' => 49,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'customHeaders',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 70,
                'char' => 75,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 70,
              'char' => 75,
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
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 72,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 74,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 74,
                      'char' => 30,
                    ),
                    'name' => 'executeRequest',
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
                            'value' => 'HttpHelper',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 74,
                            'char' => 69,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'METHOD_POST',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 74,
                            'char' => 69,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 74,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 74,
                        'char' => 69,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 74,
                          'char' => 74,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 74,
                        'char' => 74,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 74,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 74,
                        'char' => 80,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'customHeaders',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 74,
                          'char' => 95,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 74,
                        'char' => 95,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 74,
                    'char' => 96,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 74,
                  'char' => 96,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 75,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 75,
                  'char' => 21,
                ),
                'name' => 'parseResponse',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 75,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 75,
                    'char' => 44,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 75,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 76,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 71,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 71,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 71,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 70,
          'last-line' => 78,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'put',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 78,
              'char' => 35,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 78,
              'char' => 48,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'customHeaders',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 78,
                'char' => 74,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 78,
              'char' => 74,
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
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 80,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 82,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 82,
                      'char' => 30,
                    ),
                    'name' => 'executeRequest',
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
                            'value' => 'HttpHelper',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 82,
                            'char' => 68,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'METHOD_PUT',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 82,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 82,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 82,
                        'char' => 68,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 82,
                          'char' => 73,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 82,
                        'char' => 73,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 82,
                          'char' => 79,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 82,
                        'char' => 79,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'customHeaders',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 82,
                          'char' => 94,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 82,
                        'char' => 94,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 82,
                    'char' => 95,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 82,
                  'char' => 95,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 83,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 83,
                  'char' => 21,
                ),
                'name' => 'parseResponse',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 83,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 83,
                    'char' => 44,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 83,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 84,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 79,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 79,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 79,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 78,
          'last-line' => 86,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'head',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 86,
              'char' => 36,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'customHeaders',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 86,
                'char' => 62,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 86,
              'char' => 62,
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
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 88,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 90,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 90,
                      'char' => 30,
                    ),
                    'name' => 'executeRequest',
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
                            'value' => 'HttpHelper',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 90,
                            'char' => 69,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'METHOD_HEAD',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 90,
                            'char' => 69,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 90,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 90,
                        'char' => 69,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 90,
                          'char' => 74,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 90,
                        'char' => 74,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => '',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 90,
                          'char' => 78,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 90,
                        'char' => 78,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'customHeaders',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 90,
                          'char' => 93,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 90,
                        'char' => 93,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 90,
                    'char' => 94,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 90,
                  'char' => 94,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 91,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 91,
                  'char' => 21,
                ),
                'name' => 'parseResponse',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 91,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 91,
                    'char' => 44,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 91,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 87,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 87,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 87,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 86,
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
          'name' => 'patch',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 94,
              'char' => 37,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 94,
              'char' => 50,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'customHeaders',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 94,
                'char' => 76,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 94,
              'char' => 76,
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
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 96,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 98,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 98,
                      'char' => 30,
                    ),
                    'name' => 'executeRequest',
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
                            'value' => 'HttpHelper',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 98,
                            'char' => 70,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'METHOD_PATCH',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 98,
                            'char' => 70,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 98,
                          'char' => 70,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 98,
                        'char' => 70,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 98,
                          'char' => 75,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 98,
                        'char' => 75,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 98,
                          'char' => 81,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 98,
                        'char' => 81,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'customHeaders',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 98,
                          'char' => 96,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 98,
                        'char' => 96,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 98,
                    'char' => 97,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 98,
                  'char' => 97,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 99,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 99,
                  'char' => 21,
                ),
                'name' => 'parseResponse',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 99,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 99,
                    'char' => 44,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 99,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 100,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 95,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 95,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 95,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 94,
          'last-line' => 102,
          'char' => 19,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'delete',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 102,
              'char' => 38,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'customHeaders',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 102,
                'char' => 64,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 102,
              'char' => 64,
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
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 104,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 106,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 106,
                      'char' => 30,
                    ),
                    'name' => 'executeRequest',
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
                            'value' => 'HttpHelper',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 106,
                            'char' => 71,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'METHOD_DELETE',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 106,
                            'char' => 71,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 106,
                          'char' => 71,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 106,
                        'char' => 71,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 106,
                          'char' => 76,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 106,
                        'char' => 76,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => '',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 106,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 106,
                        'char' => 80,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'customHeaders',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 106,
                          'char' => 95,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 106,
                        'char' => 95,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 106,
                    'char' => 96,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 106,
                  'char' => 96,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 107,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 107,
                  'char' => 21,
                ),
                'name' => 'parseResponse',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 107,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 107,
                    'char' => 44,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 107,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 108,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 103,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 103,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 103,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 102,
          'last-line' => 110,
          'char' => 19,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'updateHttpHeader',
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
                  'variable' => 'endpoint',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 112,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'authorizationValue',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 112,
                  'char' => 41,
                ),
                2 => 
                array (
                  'variable' => '_httpHeader',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => '',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 112,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 112,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 113,
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
                  'variable' => '_httpHeader',
                  'expr' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'HttpHelper',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 113,
                      'char' => 42,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'EOL',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 113,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 113,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 113,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 114,
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
                  'variable' => 'endpoint',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 114,
                        'char' => 29,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 114,
                        'char' => 39,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 114,
                      'char' => 39,
                    ),
                    'name' => 'offsetGet',
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
                            'value' => 'ConnectionOptions',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 114,
                            'char' => 84,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_ENDPOINT',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 114,
                            'char' => 84,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 114,
                          'char' => 84,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 114,
                        'char' => 84,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 114,
                    'char' => 85,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 114,
                  'char' => 85,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 115,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not-equals',
                'left' => 
                array (
                  'type' => 'scall',
                  'dynamic-class' => 0,
                  'class' => 'Endpoint',
                  'dynamic' => 0,
                  'name' => 'getType',
                  'parameters' => 
                  array (
                    0 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'endpoint',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 115,
                        'char' => 38,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 115,
                      'char' => 38,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 115,
                  'char' => 41,
                ),
                'right' => 
                array (
                  'type' => 'static-constant-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'Endpoint',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 115,
                    'char' => 63,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'TYPE_UNIX',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 115,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 115,
                  'char' => 63,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 115,
                'char' => 63,
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
                      'operator' => 'concat-assign',
                      'variable' => '_httpHeader',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'sprintf',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => 'Host: %s%s',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 116,
                              'char' => 51,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 116,
                            'char' => 51,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'scall',
                              'dynamic-class' => 0,
                              'class' => 'Endpoint',
                              'dynamic' => 0,
                              'name' => 'getHost',
                              'parameters' => 
                              array (
                                0 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'endpoint',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 116,
                                    'char' => 79,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 116,
                                  'char' => 79,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 116,
                              'char' => 80,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 116,
                            'char' => 80,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'HttpHelper',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 116,
                                'char' => 97,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'EOL',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 116,
                                'char' => 97,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 116,
                              'char' => 97,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 116,
                            'char' => 97,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 116,
                        'char' => 98,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 116,
                      'char' => 98,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 117,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 118,
              'char' => 10,
            ),
            4 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'and',
                'left' => 
                array (
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 118,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_options',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 118,
                      'char' => 27,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 118,
                    'char' => 27,
                  ),
                  'name' => 'offsetExists',
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
                          'value' => 'ConnectionOptions',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 118,
                          'char' => 76,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_AUTH_TYPE',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 118,
                          'char' => 76,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 118,
                        'char' => 76,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 118,
                      'char' => 76,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 118,
                  'char' => 79,
                ),
                'right' => 
                array (
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 118,
                      'char' => 86,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_options',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 118,
                      'char' => 96,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 118,
                    'char' => 96,
                  ),
                  'name' => 'offsetExists',
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
                          'value' => 'ConnectionOptions',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 118,
                          'char' => 145,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_AUTH_USER',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 118,
                          'char' => 145,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 118,
                        'char' => 145,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 118,
                      'char' => 145,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 118,
                  'char' => 147,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 118,
                'char' => 147,
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
                      'variable' => 'authorizationValue',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'base64_encode',
                        'call-type' => 1,
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
                                  'type' => 'mcall',
                                  'variable' => 
                                  array (
                                    'type' => 'property-access',
                                    'left' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'this',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 119,
                                      'char' => 57,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => '_options',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 119,
                                      'char' => 67,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 119,
                                    'char' => 67,
                                  ),
                                  'name' => 'offsetGet',
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
                                          'value' => 'ConnectionOptions',
                                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                          'line' => 119,
                                          'char' => 113,
                                        ),
                                        'right' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'OPTION_AUTH_USER',
                                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                          'line' => 119,
                                          'char' => 113,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 119,
                                        'char' => 113,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 119,
                                      'char' => 113,
                                    ),
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 119,
                                  'char' => 115,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => ':',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 119,
                                  'char' => 121,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 119,
                                'char' => 121,
                              ),
                              'right' => 
                              array (
                                'type' => 'mcall',
                                'variable' => 
                                array (
                                  'type' => 'property-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'this',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 119,
                                    'char' => 128,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => '_options',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 119,
                                    'char' => 138,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 119,
                                  'char' => 138,
                                ),
                                'name' => 'offsetGet',
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
                                        'value' => 'ConnectionOptions',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 119,
                                        'char' => 186,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'OPTION_AUTH_PASSWD',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 119,
                                        'char' => 186,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 119,
                                      'char' => 186,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 119,
                                    'char' => 186,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 119,
                                'char' => 187,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 119,
                              'char' => 187,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 119,
                            'char' => 187,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 119,
                        'char' => 188,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 119,
                      'char' => 188,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 120,
                  'char' => 15,
                ),
                1 => 
                array (
                  'type' => 'let',
                  'assignments' => 
                  array (
                    0 => 
                    array (
                      'assign-type' => 'variable',
                      'operator' => 'concat-assign',
                      'variable' => '_httpHeader',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'sprintf',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => 'Authorization: %s %s%s',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 120,
                              'char' => 63,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 120,
                            'char' => 63,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'mcall',
                              'variable' => 
                              array (
                                'type' => 'property-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'this',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 120,
                                  'char' => 70,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_options',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 120,
                                  'char' => 80,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 120,
                                'char' => 80,
                              ),
                              'name' => 'offsetGet',
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
                                      'value' => 'ConnectionOptions',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 120,
                                      'char' => 126,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'OPTION_AUTH_TYPE',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 120,
                                      'char' => 126,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 120,
                                    'char' => 126,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 120,
                                  'char' => 126,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 120,
                              'char' => 127,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 120,
                            'char' => 127,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'authorizationValue',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 120,
                              'char' => 147,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 120,
                            'char' => 147,
                          ),
                          3 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'HttpHelper',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 120,
                                'char' => 164,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'EOL',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 120,
                                'char' => 164,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 120,
                              'char' => 164,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 120,
                            'char' => 164,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 120,
                        'char' => 165,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 120,
                      'char' => 165,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 121,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 122,
              'char' => 10,
            ),
            5 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 122,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_options',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 122,
                    'char' => 27,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 122,
                  'char' => 27,
                ),
                'name' => 'offsetExists',
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
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 122,
                        'char' => 77,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_CONNECTION',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 122,
                        'char' => 77,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 122,
                      'char' => 77,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 122,
                    'char' => 77,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 122,
                'char' => 79,
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
                      'operator' => 'concat-assign',
                      'variable' => '_httpHeader',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'sprintf',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => 'Connection: %s%s',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 123,
                              'char' => 57,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 123,
                            'char' => 57,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'mcall',
                              'variable' => 
                              array (
                                'type' => 'property-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'this',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 123,
                                  'char' => 64,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_options',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 123,
                                  'char' => 74,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 123,
                                'char' => 74,
                              ),
                              'name' => 'offsetGet',
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
                                      'value' => 'ConnectionOptions',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 123,
                                      'char' => 121,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'OPTION_CONNECTION',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 123,
                                      'char' => 121,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 123,
                                    'char' => 121,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 123,
                                  'char' => 121,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 123,
                              'char' => 122,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 123,
                            'char' => 122,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'HttpHelper',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 123,
                                'char' => 139,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'EOL',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 123,
                                'char' => 139,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 123,
                              'char' => 139,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 123,
                            'char' => 139,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 123,
                        'char' => 140,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 123,
                      'char' => 140,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 124,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 125,
              'char' => 11,
            ),
            6 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_httpHeader',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => '_httpHeader',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 125,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 125,
                  'char' => 44,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 126,
              'char' => 10,
            ),
            7 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'equals',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 126,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_database',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 126,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 126,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'string',
                  'value' => '',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 126,
                  'char' => 34,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 126,
                'char' => 34,
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
                      'property' => '_baseUrl',
                      'expr' => 
                      array (
                        'type' => 'string',
                        'value' => '/_db/_system',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 127,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 127,
                      'char' => 48,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 128,
                  'char' => 9,
                ),
              ),
              'else_statements' => 
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
                      'property' => '_baseUrl',
                      'expr' => 
                      array (
                        'type' => 'concat',
                        'left' => 
                        array (
                          'type' => 'string',
                          'value' => '/_db/',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 129,
                          'char' => 42,
                        ),
                        'right' => 
                        array (
                          'type' => 'fcall',
                          'name' => 'urlencode',
                          'call-type' => 1,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 129,
                                  'char' => 59,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_database',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 129,
                                  'char' => 69,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 129,
                                'char' => 69,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 129,
                              'char' => 69,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 129,
                          'char' => 70,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 129,
                        'char' => 70,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 129,
                      'char' => 70,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 130,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 131,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 111,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 110,
          'last-line' => 133,
          'char' => 22,
        ),
        12 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getHandle',
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
                  'variable' => 'handle',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 135,
                  'char' => 19,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 137,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'and',
                'left' => 
                array (
                  'type' => 'and',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 137,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_useKeepAlive',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 137,
                      'char' => 33,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 137,
                    'char' => 33,
                  ),
                  'right' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 137,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_handle',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 137,
                      'char' => 50,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 137,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 137,
                  'char' => 50,
                ),
                'right' => 
                array (
                  'type' => 'fcall',
                  'name' => 'is_resource',
                  'call-type' => 1,
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
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 137,
                          'char' => 69,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_handle',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 137,
                          'char' => 77,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 137,
                        'char' => 77,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 137,
                      'char' => 77,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 137,
                  'char' => 79,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 137,
                'char' => 79,
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
                      'variable' => 'handle',
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 138,
                          'char' => 32,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_handle',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 138,
                          'char' => 40,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 138,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 138,
                      'char' => 40,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 139,
                  'char' => 14,
                ),
                1 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'not',
                    'left' => 
                    array (
                      'type' => 'fcall',
                      'name' => 'feof',
                      'call-type' => 1,
                      'parameters' => 
                      array (
                        0 => 
                        array (
                          'parameter' => 
                          array (
                            'type' => 'variable',
                            'value' => 'handle',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 139,
                            'char' => 28,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 139,
                          'char' => 28,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 139,
                      'char' => 30,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 139,
                    'char' => 30,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'return',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'handle',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 140,
                        'char' => 30,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 141,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 142,
                  'char' => 18,
                ),
                2 => 
                array (
                  'type' => 'fcall',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'fclose',
                    'call-type' => 1,
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
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 142,
                            'char' => 25,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_handle',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 142,
                            'char' => 33,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 142,
                          'char' => 33,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 142,
                        'char' => 33,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 142,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 143,
                  'char' => 15,
                ),
                3 => 
                array (
                  'type' => 'let',
                  'assignments' => 
                  array (
                    0 => 
                    array (
                      'assign-type' => 'object-property',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_handle',
                      'expr' => 
                      array (
                        'type' => 'int',
                        'value' => '0',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 143,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 143,
                      'char' => 34,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 144,
                  'char' => 14,
                ),
                4 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'not',
                    'left' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 144,
                          'char' => 22,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_options',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 144,
                          'char' => 32,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 144,
                        'char' => 32,
                      ),
                      'name' => 'offsetGet',
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
                              'value' => 'ConnectionOptions',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 144,
                              'char' => 78,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_RECONNECT',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 144,
                              'char' => 78,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 144,
                            'char' => 78,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 144,
                          'char' => 78,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 144,
                      'char' => 80,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 144,
                    'char' => 80,
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
                              'type' => 'string',
                              'value' => 'Server has closed the connection already.',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 145,
                              'char' => 86,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 145,
                            'char' => 86,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 145,
                        'char' => 87,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 146,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 147,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 148,
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
                  'variable' => 'handle',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'HttpHelper',
                    'dynamic' => 0,
                    'name' => 'createConnection',
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
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 148,
                            'char' => 57,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_options',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 148,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 148,
                          'char' => 66,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 148,
                        'char' => 66,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 148,
                    'char' => 67,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 148,
                  'char' => 67,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 149,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'and',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 149,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_useKeepAlive',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 149,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 149,
                  'char' => 33,
                ),
                'right' => 
                array (
                  'type' => 'fcall',
                  'name' => 'is_resource',
                  'call-type' => 1,
                  'parameters' => 
                  array (
                    0 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'handle',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 149,
                        'char' => 53,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 149,
                      'char' => 53,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 149,
                  'char' => 55,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 149,
                'char' => 55,
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
                      'property' => '_handle',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'handle',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 150,
                        'char' => 39,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 150,
                      'char' => 39,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 151,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 152,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'handle',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 152,
                'char' => 22,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 153,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 133,
          'last-line' => 155,
          'char' => 22,
        ),
        13 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'executeRequest',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'method',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 155,
              'char' => 52,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 155,
              'char' => 64,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 155,
              'char' => 77,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'customHeaders',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 155,
                'char' => 103,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 155,
              'char' => 103,
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
                  'variable' => 'wasAsync',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'request',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 30,
                ),
                2 => 
                array (
                  'variable' => 'batchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 41,
                ),
                3 => 
                array (
                  'variable' => 'traceFunc',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 52,
                ),
                4 => 
                array (
                  'variable' => 'header',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 60,
                ),
                5 => 
                array (
                  'variable' => 'tmpListHeader',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 75,
                ),
                6 => 
                array (
                  'variable' => 'headers',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 84,
                ),
                7 => 
                array (
                  'variable' => 'handle',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 92,
                ),
                8 => 
                array (
                  'variable' => 'startTime',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 103,
                ),
                9 => 
                array (
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 111,
                ),
                10 => 
                array (
                  'variable' => 'timeTaken',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 122,
                ),
                11 => 
                array (
                  'variable' => 'status',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 130,
                ),
                12 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 157,
                  'char' => 140,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 160,
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
                  'variable' => 'wasAsync',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 160,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 160,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 161,
              'char' => 10,
            ),
            2 => 
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
                    'type' => 'variable',
                    'value' => 'customHeaders',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 161,
                    'char' => 31,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'HttpHelper',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 161,
                      'char' => 56,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ASYNC_HEADER',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 161,
                      'char' => 56,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 161,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 161,
                  'char' => 58,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 161,
                'char' => 58,
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
                      'variable' => 'wasAsync',
                      'expr' => 
                      array (
                        'type' => 'bool',
                        'value' => 'true',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 162,
                        'char' => 33,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 162,
                      'char' => 33,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 163,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 164,
              'char' => 18,
            ),
            3 => 
            array (
              'type' => 'scall',
              'expr' => 
              array (
                'type' => 'scall',
                'dynamic-class' => 0,
                'class' => 'HttpHelper',
                'dynamic' => 0,
                'name' => 'validateMethod',
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'method',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 164,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 164,
                    'char' => 42,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 164,
                'char' => 43,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 165,
              'char' => 11,
            ),
            4 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'concat',
                    'left' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 165,
                        'char' => 25,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_baseUrl',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 165,
                        'char' => 35,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 165,
                      'char' => 35,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'url',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 165,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 165,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 165,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 166,
              'char' => 10,
            ),
            5 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'equals',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 166,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_batchRequest',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 166,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 166,
                  'char' => 33,
                ),
                'right' => 
                array (
                  'type' => 'bool',
                  'value' => 'false',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 166,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 166,
                'char' => 41,
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
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 167,
                        'char' => 21,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_captureBatch',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 167,
                        'char' => 37,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 167,
                      'char' => 37,
                    ),
                    'right' => 
                    array (
                      'type' => 'bool',
                      'value' => 'true',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 167,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 167,
                    'char' => 44,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'mcall',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 168,
                            'char' => 22,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_options',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 168,
                            'char' => 32,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 168,
                          'char' => 32,
                        ),
                        'name' => 'offsetSet',
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
                                'value' => 'ConnectionOptions',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 168,
                                'char' => 78,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'OPTION_BATCHPART',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 168,
                                'char' => 78,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 168,
                              'char' => 78,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 168,
                            'char' => 78,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'bool',
                              'value' => 'true',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 168,
                              'char' => 84,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 168,
                            'char' => 84,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 168,
                        'char' => 85,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 169,
                      'char' => 19,
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
                          'variable' => 'request',
                          'expr' => 
                          array (
                            'type' => 'scall',
                            'dynamic-class' => 0,
                            'class' => 'HttpHelper',
                            'dynamic' => 0,
                            'name' => 'buildRequest',
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
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 169,
                                    'char' => 61,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => '_options',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 169,
                                    'char' => 70,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 169,
                                  'char' => 70,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 169,
                                'char' => 70,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'property-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'this',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 169,
                                    'char' => 77,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => '_httpHeader',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 169,
                                    'char' => 89,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 169,
                                  'char' => 89,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 169,
                                'char' => 89,
                              ),
                              2 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'method',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 169,
                                  'char' => 97,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 169,
                                'char' => 97,
                              ),
                              3 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'url',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 169,
                                  'char' => 102,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 169,
                                'char' => 102,
                              ),
                              4 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'data',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 169,
                                  'char' => 108,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 169,
                                'char' => 108,
                              ),
                              5 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'customHeaders',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 169,
                                  'char' => 123,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 169,
                                'char' => 123,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 169,
                            'char' => 124,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 169,
                          'char' => 124,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 170,
                      'char' => 20,
                    ),
                    2 => 
                    array (
                      'type' => 'mcall',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 170,
                            'char' => 22,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_options',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 170,
                            'char' => 32,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 170,
                          'char' => 32,
                        ),
                        'name' => 'offsetSet',
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
                                'value' => 'ConnectionOptions',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 170,
                                'char' => 78,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'OPTION_BATCHPART',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 170,
                                'char' => 78,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 170,
                              'char' => 78,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 170,
                            'char' => 78,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'bool',
                              'value' => 'false',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 170,
                              'char' => 85,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 170,
                            'char' => 85,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 170,
                        'char' => 86,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 171,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
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
                          'variable' => 'request',
                          'expr' => 
                          array (
                            'type' => 'scall',
                            'dynamic-class' => 0,
                            'class' => 'HttpHelper',
                            'dynamic' => 0,
                            'name' => 'buildRequest',
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
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 172,
                                    'char' => 61,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => '_options',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 172,
                                    'char' => 70,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 172,
                                  'char' => 70,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 172,
                                'char' => 70,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'property-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'this',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 172,
                                    'char' => 77,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => '_httpHeader',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 172,
                                    'char' => 89,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 172,
                                  'char' => 89,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 172,
                                'char' => 89,
                              ),
                              2 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'method',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 172,
                                  'char' => 97,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 172,
                                'char' => 97,
                              ),
                              3 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'url',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 172,
                                  'char' => 102,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 172,
                                'char' => 102,
                              ),
                              4 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'data',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 172,
                                  'char' => 108,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 172,
                                'char' => 108,
                              ),
                              5 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'customHeaders',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 172,
                                  'char' => 123,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 172,
                                'char' => 123,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 172,
                            'char' => 124,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 172,
                          'char' => 124,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 173,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 174,
                  'char' => 14,
                ),
                1 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'equals',
                    'left' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 174,
                        'char' => 21,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_captureBatch',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 174,
                        'char' => 37,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 174,
                      'char' => 37,
                    ),
                    'right' => 
                    array (
                      'type' => 'bool',
                      'value' => 'true',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 174,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 174,
                    'char' => 44,
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
                          'variable' => 'batchPart',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 175,
                              'char' => 39,
                            ),
                            'name' => 'doBatch',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'method',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 175,
                                  'char' => 54,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 175,
                                'char' => 54,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'request',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 175,
                                  'char' => 63,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 175,
                                'char' => 63,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 175,
                            'char' => 64,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 175,
                          'char' => 64,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 176,
                      'char' => 18,
                    ),
                    1 => 
                    array (
                      'type' => 'if',
                      'expr' => 
                      array (
                        'type' => 'not-equals',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'batchPart',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 176,
                          'char' => 31,
                        ),
                        'right' => 
                        array (
                          'type' => 'null',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 176,
                          'char' => 38,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 176,
                        'char' => 38,
                      ),
                      'statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'return',
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'batchPart',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 177,
                            'char' => 37,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 178,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 179,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 180,
                  'char' => 9,
                ),
              ),
              'else_statements' => 
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
                      'property' => '_batchRequest',
                      'expr' => 
                      array (
                        'type' => 'bool',
                        'value' => 'false',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 181,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 181,
                      'char' => 44,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 182,
                  'char' => 16,
                ),
                1 => 
                array (
                  'type' => 'mcall',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 182,
                        'char' => 18,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 182,
                        'char' => 28,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 182,
                      'char' => 28,
                    ),
                    'name' => 'offsetSet',
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
                            'value' => 'ConnectionOptions',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 182,
                            'char' => 70,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_BATCH',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 182,
                            'char' => 70,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 182,
                          'char' => 70,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 182,
                        'char' => 70,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 182,
                          'char' => 76,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 182,
                        'char' => 76,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 182,
                    'char' => 77,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 183,
                  'char' => 15,
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
                      'variable' => 'request',
                      'expr' => 
                      array (
                        'type' => 'scall',
                        'dynamic-class' => 0,
                        'class' => 'HttpHelper',
                        'dynamic' => 0,
                        'name' => 'buildRequest',
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
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 183,
                                'char' => 57,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_options',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 183,
                                'char' => 66,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 183,
                              'char' => 66,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 183,
                            'char' => 66,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'property-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'this',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 183,
                                'char' => 73,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_httpHeader',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 183,
                                'char' => 85,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 183,
                              'char' => 85,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 183,
                            'char' => 85,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'method',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 183,
                              'char' => 93,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 183,
                            'char' => 93,
                          ),
                          3 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'url',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 183,
                              'char' => 98,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 183,
                            'char' => 98,
                          ),
                          4 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'data',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 183,
                              'char' => 104,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 183,
                            'char' => 104,
                          ),
                          5 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'customHeaders',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 183,
                              'char' => 119,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 183,
                            'char' => 119,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 183,
                        'char' => 120,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 183,
                      'char' => 120,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 184,
                  'char' => 16,
                ),
                3 => 
                array (
                  'type' => 'mcall',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 184,
                        'char' => 18,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 184,
                        'char' => 28,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 184,
                      'char' => 28,
                    ),
                    'name' => 'offsetSet',
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
                            'value' => 'ConnectionOptions',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 184,
                            'char' => 70,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_BATCH',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 184,
                            'char' => 70,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 184,
                          'char' => 70,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 184,
                        'char' => 70,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 184,
                          'char' => 77,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 184,
                        'char' => 77,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 184,
                    'char' => 78,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 185,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 186,
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
                  'variable' => 'traceFunc',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 186,
                        'char' => 30,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 186,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 186,
                      'char' => 40,
                    ),
                    'name' => 'offsetGet',
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
                            'value' => 'ConnectionOptions',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 186,
                            'char' => 82,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_TRACE',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 186,
                            'char' => 82,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 186,
                          'char' => 82,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 186,
                        'char' => 82,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 186,
                    'char' => 83,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 186,
                  'char' => 83,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 187,
              'char' => 10,
            ),
            7 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'traceFunc',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 187,
                'char' => 22,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 188,
                        'char' => 21,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 188,
                        'char' => 31,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 188,
                      'char' => 31,
                    ),
                    'name' => 'offsetGet',
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
                            'value' => 'ConnectionOptions',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 188,
                            'char' => 82,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_ENHANCED_TRACE',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 188,
                            'char' => 82,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 188,
                          'char' => 82,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 188,
                        'char' => 82,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 188,
                    'char' => 84,
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
                          'variable' => 'tmpListHeader',
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
                                  'value' => 'request',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 189,
                                  'char' => 73,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 189,
                                'char' => 73,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'url',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 189,
                                  'char' => 78,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 189,
                                'char' => 78,
                              ),
                              2 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'method',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 189,
                                  'char' => 86,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 189,
                                'char' => 86,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 189,
                            'char' => 87,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 189,
                          'char' => 87,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 190,
                      'char' => 19,
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
                          'variable' => 'header',
                          'expr' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'tmpListHeader',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 190,
                              'char' => 43,
                            ),
                            'right' => 
                            array (
                              'type' => 'int',
                              'value' => '0',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 190,
                              'char' => 45,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 190,
                            'char' => 46,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 190,
                          'char' => 46,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 191,
                      'char' => 19,
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
                          'variable' => 'headers',
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
                                  'type' => 'variable',
                                  'value' => 'header',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 191,
                                  'char' => 62,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 191,
                                'char' => 62,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 191,
                            'char' => 63,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 191,
                          'char' => 63,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 192,
                      'char' => 17,
                    ),
                    3 => 
                    array (
                      'type' => 'fcall',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'traceFunc',
                        'call-type' => 2,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'new',
                              'class' => 'TraceRequest',
                              'dynamic' => 0,
                              'parameters' => 
                              array (
                                0 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'array-access',
                                    'left' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'headers',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 192,
                                      'char' => 53,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'int',
                                      'value' => '2',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 192,
                                      'char' => 55,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 192,
                                    'char' => 56,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 192,
                                  'char' => 56,
                                ),
                                1 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'method',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 192,
                                    'char' => 64,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 192,
                                  'char' => 64,
                                ),
                                2 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'url',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 192,
                                    'char' => 69,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 192,
                                  'char' => 69,
                                ),
                                3 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'data',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 192,
                                    'char' => 75,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 192,
                                  'char' => 75,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 192,
                              'char' => 76,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 192,
                            'char' => 76,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 192,
                        'char' => 77,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 193,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'fcall',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'traceFunc',
                        'call-type' => 2,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => 'send',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 194,
                              'char' => 35,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 194,
                            'char' => 35,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'request',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 194,
                              'char' => 44,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 194,
                            'char' => 44,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 194,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 195,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 196,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 197,
              'char' => 11,
            ),
            8 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'handle',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 197,
                      'char' => 27,
                    ),
                    'name' => 'getHandle',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 197,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 197,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 198,
              'char' => 10,
            ),
            9 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'handle',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 198,
                'char' => 19,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'traceFunc',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 199,
                    'char' => 26,
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
                          'variable' => 'startTime',
                          'expr' => 
                          array (
                            'type' => 'fcall',
                            'name' => 'microtime',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'bool',
                                  'value' => 'true',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 200,
                                  'char' => 47,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 200,
                                'char' => 47,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 200,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 200,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 201,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 202,
                  'char' => 15,
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
                      'variable' => 'result',
                      'expr' => 
                      array (
                        'type' => 'scall',
                        'dynamic-class' => 0,
                        'class' => 'HttpHelper',
                        'dynamic' => 0,
                        'name' => 'transfer',
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'handle',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 202,
                              'char' => 53,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 202,
                            'char' => 53,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'request',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 202,
                              'char' => 62,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 202,
                            'char' => 62,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'method',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 202,
                              'char' => 70,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 202,
                            'char' => 70,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 202,
                        'char' => 71,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 202,
                      'char' => 71,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 203,
                  'char' => 14,
                ),
                2 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'traceFunc',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 203,
                    'char' => 26,
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
                          'variable' => 'timeTaken',
                          'expr' => 
                          array (
                            'type' => 'sub',
                            'left' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'microtime',
                              'call-type' => 1,
                              'parameters' => 
                              array (
                                0 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'bool',
                                    'value' => 'true',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 204,
                                    'char' => 47,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 204,
                                  'char' => 47,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 204,
                              'char' => 49,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'startTime',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 204,
                              'char' => 60,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 204,
                            'char' => 60,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 204,
                          'char' => 60,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 205,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 206,
                  'char' => 15,
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
                      'variable' => 'status',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'socket_get_status',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'handle',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 206,
                              'char' => 50,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 206,
                            'char' => 50,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 206,
                        'char' => 51,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 206,
                      'char' => 51,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 207,
                  'char' => 14,
                ),
                4 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'status',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 207,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => 'timed_out',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 207,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 207,
                    'char' => 36,
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
                              'type' => 'string',
                              'value' => 'Got a timeout while waiting for the server\'s response',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 208,
                              'char' => 98,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 208,
                            'char' => 98,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'int',
                              'value' => '408',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 208,
                              'char' => 103,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 208,
                            'char' => 103,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 208,
                        'char' => 104,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 209,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 210,
                  'char' => 14,
                ),
                5 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'not',
                    'left' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 210,
                        'char' => 22,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_useKeepAlive',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 210,
                        'char' => 37,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 210,
                      'char' => 37,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 210,
                    'char' => 37,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'fcall',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'fclose',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'handle',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 211,
                              'char' => 30,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 211,
                            'char' => 30,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 211,
                        'char' => 31,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 212,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 213,
                  'char' => 15,
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
                      'variable' => 'response',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'HttpResponse',
                        'dynamic' => 0,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'result',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 213,
                              'char' => 51,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 213,
                            'char' => 51,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'url',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 213,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 213,
                            'char' => 56,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'method',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 213,
                              'char' => 64,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 213,
                            'char' => 64,
                          ),
                          3 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'wasAsync',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 213,
                              'char' => 74,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 213,
                            'char' => 74,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 213,
                        'char' => 75,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 213,
                      'char' => 75,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 214,
                  'char' => 14,
                ),
                7 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'traceFunc',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 214,
                    'char' => 26,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'if',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 215,
                            'char' => 25,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_options',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 215,
                            'char' => 35,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 215,
                          'char' => 35,
                        ),
                        'name' => 'offsetGet',
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
                                'value' => 'ConnectionOptions',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 215,
                                'char' => 86,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'OPTION_ENHANCED_TRACE',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 215,
                                'char' => 86,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 215,
                              'char' => 86,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 215,
                            'char' => 86,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 215,
                        'char' => 88,
                      ),
                      'statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'fcall',
                          'expr' => 
                          array (
                            'type' => 'fcall',
                            'name' => 'traceFunc',
                            'call-type' => 2,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'new',
                                  'class' => 'TraceResponse',
                                  'dynamic' => 0,
                                  'parameters' => 
                                  array (
                                    0 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'mcall',
                                        'variable' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'response',
                                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                          'line' => 216,
                                          'char' => 60,
                                        ),
                                        'name' => 'getHeaders',
                                        'call-type' => 1,
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 216,
                                        'char' => 73,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 216,
                                      'char' => 73,
                                    ),
                                    1 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'mcall',
                                        'variable' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'response',
                                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                          'line' => 216,
                                          'char' => 84,
                                        ),
                                        'name' => 'getHttpCode',
                                        'call-type' => 1,
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 216,
                                        'char' => 98,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 216,
                                      'char' => 98,
                                    ),
                                    2 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'mcall',
                                        'variable' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'response',
                                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                          'line' => 216,
                                          'char' => 109,
                                        ),
                                        'name' => 'getBody',
                                        'call-type' => 1,
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 216,
                                        'char' => 119,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 216,
                                      'char' => 119,
                                    ),
                                    3 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'timeTaken',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 216,
                                        'char' => 130,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 216,
                                      'char' => 130,
                                    ),
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 216,
                                  'char' => 131,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 216,
                                'char' => 131,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 216,
                            'char' => 132,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 217,
                          'char' => 17,
                        ),
                      ),
                      'else_statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'fcall',
                          'expr' => 
                          array (
                            'type' => 'fcall',
                            'name' => 'traceFunc',
                            'call-type' => 2,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'receive',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 218,
                                  'char' => 42,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 218,
                                'char' => 42,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'result',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 218,
                                  'char' => 50,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 218,
                                'char' => 50,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 218,
                            'char' => 51,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 219,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 220,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 221,
                  'char' => 18,
                ),
                8 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'response',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 221,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 222,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 223,
              'char' => 13,
            ),
            10 => 
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
                      'value' => 'Whoops, this should never happen',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 223,
                      'char' => 69,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 223,
                    'char' => 69,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 223,
                'char' => 70,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 224,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 155,
          'last-line' => 226,
          'char' => 22,
        ),
        14 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'parseResponse',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'response',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'HttpResponse',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 226,
                'char' => 57,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 226,
              'char' => 58,
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
                  'variable' => 'httpCode',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 228,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'body',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 228,
                  'char' => 27,
                ),
                2 => 
                array (
                  'variable' => 'details',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 228,
                  'char' => 36,
                ),
                3 => 
                array (
                  'variable' => 'exception',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 228,
                  'char' => 47,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 230,
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
                  'variable' => 'httpCode',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 230,
                      'char' => 34,
                    ),
                    'name' => 'getHttpCode',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 230,
                    'char' => 48,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 230,
                  'char' => 48,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 231,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'or',
                'left' => 
                array (
                  'type' => 'less',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'httpCode',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 231,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '200',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 231,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 231,
                  'char' => 28,
                ),
                'right' => 
                array (
                  'type' => 'greater-equal',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'httpCode',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 231,
                    'char' => 39,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '400',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 231,
                    'char' => 45,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 231,
                  'char' => 45,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 231,
                'char' => 45,
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
                      'variable' => 'body',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'response',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 232,
                          'char' => 34,
                        ),
                        'name' => 'getBody',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 232,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 232,
                      'char' => 44,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 233,
                  'char' => 14,
                ),
                1 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'not-identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'body',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 233,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => '',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 233,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 233,
                    'char' => 28,
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
                          'variable' => 'details',
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
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 234,
                                  'char' => 48,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 234,
                                'char' => 48,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'bool',
                                  'value' => 'true',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 234,
                                  'char' => 54,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 234,
                                'char' => 54,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 234,
                            'char' => 55,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 234,
                          'char' => 55,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 235,
                      'char' => 18,
                    ),
                    1 => 
                    array (
                      'type' => 'if',
                      'expr' => 
                      array (
                        'type' => 'and',
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
                                'value' => 'details',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 235,
                                'char' => 36,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 235,
                              'char' => 36,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 235,
                          'char' => 39,
                        ),
                        'right' => 
                        array (
                          'type' => 'isset',
                          'left' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'details',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 235,
                              'char' => 54,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => 'errorMessage',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 235,
                              'char' => 69,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 235,
                            'char' => 71,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 235,
                          'char' => 71,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 235,
                        'char' => 71,
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
                              'variable' => 'exception',
                              'expr' => 
                              array (
                                'type' => 'new',
                                'class' => 'ServerException',
                                'dynamic' => 0,
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'array-access',
                                      'left' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'details',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 236,
                                        'char' => 65,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'string',
                                        'value' => 'errorMessage',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 236,
                                        'char' => 80,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 236,
                                      'char' => 81,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 236,
                                    'char' => 81,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'array-access',
                                      'left' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'details',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 236,
                                        'char' => 90,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'string',
                                        'value' => 'code',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 236,
                                        'char' => 97,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 236,
                                      'char' => 98,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 236,
                                    'char' => 98,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 236,
                                'char' => 99,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 236,
                              'char' => 99,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 237,
                          'char' => 29,
                        ),
                        1 => 
                        array (
                          'type' => 'mcall',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'exception',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 237,
                              'char' => 31,
                            ),
                            'name' => 'setDetails',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'details',
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 237,
                                  'char' => 50,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 237,
                                'char' => 50,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 237,
                            'char' => 51,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 238,
                          'char' => 25,
                        ),
                        2 => 
                        array (
                          'type' => 'throw',
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'exception',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 238,
                            'char' => 36,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 239,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 240,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 241,
                  'char' => 17,
                ),
                2 => 
                array (
                  'type' => 'throw',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => 'ServerException',
                    'dynamic' => 0,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'response',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 241,
                            'char' => 48,
                          ),
                          'name' => 'getResult',
                          'call-type' => 1,
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 241,
                          'char' => 60,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 241,
                        'char' => 60,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'httpCode',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 241,
                          'char' => 70,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 241,
                        'char' => 70,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 241,
                    'char' => 71,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 242,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 243,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'response',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 243,
                'char' => 24,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 244,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 227,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 227,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 227,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 226,
          'last-line' => 246,
          'char' => 19,
        ),
        15 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'stopCaptureBatch',
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
                  'property' => '_captureBatch',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 248,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 248,
                  'char' => 41,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 249,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 249,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_activeBatch',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 249,
                  'char' => 34,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 249,
                'char' => 34,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 250,
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
                  'value' => 'Batch',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 247,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 247,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 247,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 246,
          'last-line' => 252,
          'char' => 19,
        ),
        16 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setActiveBatch',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'batch',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Batch',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 252,
                'char' => 48,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 252,
              'char' => 49,
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
                  'property' => '_activeBatch',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'batch',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 254,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 254,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 255,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 255,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_activeBatch',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 255,
                  'char' => 34,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 255,
                'char' => 34,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 256,
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
                  'value' => 'Batch',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 253,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 253,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 253,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 252,
          'last-line' => 258,
          'char' => 19,
        ),
        17 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getActiveBatch',
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 260,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_activeBatch',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 260,
                  'char' => 34,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 260,
                'char' => 34,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 261,
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
                  'value' => 'Batch',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 259,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 259,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 259,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 258,
          'last-line' => 263,
          'char' => 19,
        ),
        18 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setCaptureBatch',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'state',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 263,
              'char' => 47,
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
                  'property' => '_captureBatch',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'state',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 265,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 265,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 266,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 264,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 263,
          'last-line' => 268,
          'char' => 19,
        ),
        19 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setBatchRequest',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'state',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 268,
              'char' => 47,
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
                  'property' => '_batchRequest',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'state',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 270,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 270,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 271,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 269,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 268,
          'last-line' => 273,
          'char' => 19,
        ),
        20 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'isInBatchCaptureMode',
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 275,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_captureBatch',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 275,
                  'char' => 35,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 275,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 276,
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
                'data-type' => 'bool',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 274,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 274,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 273,
          'last-line' => 278,
          'char' => 19,
        ),
        21 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getBatches',
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 280,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_batches',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 280,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 280,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 281,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 278,
          'last-line' => 283,
          'char' => 19,
        ),
        22 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'doBatch',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'method',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 283,
              'char' => 38,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'request',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 283,
              'char' => 54,
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
                  'variable' => 'batchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 285,
                  'char' => 22,
                ),
                1 => 
                array (
                  'variable' => 'batch',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 285,
                  'char' => 29,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 287,
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
                  'variable' => 'batchPart',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 287,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 287,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 288,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'identical',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 288,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_captureBatch',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 288,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 288,
                  'char' => 34,
                ),
                'right' => 
                array (
                  'type' => 'bool',
                  'value' => 'true',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 288,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 288,
                'char' => 41,
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
                      'variable' => 'batch',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 289,
                          'char' => 31,
                        ),
                        'name' => 'getActiveBatch',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 289,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 289,
                      'char' => 48,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 290,
                  'char' => 15,
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
                      'variable' => 'batchPart',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'batch',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 290,
                          'char' => 36,
                        ),
                        'name' => 'append',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'method',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 290,
                              'char' => 50,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 290,
                            'char' => 50,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'request',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 290,
                              'char' => 59,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 290,
                            'char' => 59,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 290,
                        'char' => 60,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 290,
                      'char' => 60,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 291,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 292,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'batchPart',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 292,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 293,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 283,
          'last-line' => 295,
          'char' => 22,
        ),
        23 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'detect_utf',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'stringg',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 295,
              'char' => 52,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'preg_match',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'string',
                      'value' => '//u',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 297,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 297,
                    'char' => 28,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'stringg',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 297,
                      'char' => 37,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 297,
                    'char' => 37,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 297,
                'char' => 39,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'true',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 298,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 299,
                  'char' => 9,
                ),
              ),
              'else_statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 300,
                    'char' => 25,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 301,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 302,
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
                'data-type' => 'bool',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 296,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 296,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 295,
          'last-line' => 304,
          'char' => 26,
        ),
        24 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'check_encoding',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 304,
              'char' => 53,
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
                  'variable' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 306,
                  'char' => 16,
                ),
                1 => 
                array (
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 306,
                  'char' => 23,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 308,
              'char' => 10,
            ),
            1 => 
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
                        'value' => 'data',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 308,
                        'char' => 26,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 308,
                      'char' => 26,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 308,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 308,
                'char' => 28,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 310,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 311,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'data',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 311,
                'char' => 32,
              ),
              'key' => 'key',
              'value' => 'value',
              'reverse' => 0,
              'statements' => 
              array (
                0 => 
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
                            'value' => 'value',
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 312,
                            'char' => 31,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 312,
                          'char' => 31,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 312,
                      'char' => 33,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 312,
                    'char' => 33,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'if',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'function_exists',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => 'mb_detect_encoding',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 313,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 313,
                            'char' => 56,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 313,
                        'char' => 58,
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
                              'type' => 'fcall',
                              'name' => 'is_string',
                              'call-type' => 1,
                              'parameters' => 
                              array (
                                0 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'key',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 314,
                                    'char' => 37,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 314,
                                  'char' => 37,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 314,
                              'char' => 40,
                            ),
                            'right' => 
                            array (
                              'type' => 'identical',
                              'left' => 
                              array (
                                'type' => 'fcall',
                                'name' => 'mb_detect_encoding',
                                'call-type' => 1,
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'key',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 314,
                                      'char' => 64,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 314,
                                    'char' => 64,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'string',
                                      'value' => 'UTF-8',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 314,
                                      'char' => 73,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 314,
                                    'char' => 73,
                                  ),
                                  2 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'bool',
                                      'value' => 'true',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 314,
                                      'char' => 79,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 314,
                                    'char' => 79,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 314,
                                'char' => 83,
                              ),
                              'right' => 
                              array (
                                'type' => 'bool',
                                'value' => 'false',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 314,
                                'char' => 91,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 314,
                              'char' => 91,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 314,
                            'char' => 91,
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
                                        'type' => 'string',
                                        'value' => 'Only UTF-8 encoded keys allowed. Wrong encoding in key string: ',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 315,
                                        'char' => 117,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'key',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 315,
                                        'char' => 122,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 315,
                                      'char' => 122,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 315,
                                    'char' => 122,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 315,
                                'char' => 123,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 316,
                              'char' => 21,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 317,
                          'char' => 22,
                        ),
                        1 => 
                        array (
                          'type' => 'if',
                          'expr' => 
                          array (
                            'type' => 'and',
                            'left' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'is_string',
                              'call-type' => 1,
                              'parameters' => 
                              array (
                                0 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'value',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 317,
                                    'char' => 39,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 317,
                                  'char' => 39,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 317,
                              'char' => 42,
                            ),
                            'right' => 
                            array (
                              'type' => 'identical',
                              'left' => 
                              array (
                                'type' => 'fcall',
                                'name' => 'mb_detect_encoding',
                                'call-type' => 1,
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'value',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 317,
                                      'char' => 68,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 317,
                                    'char' => 68,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'string',
                                      'value' => 'UTF-8',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 317,
                                      'char' => 77,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 317,
                                    'char' => 77,
                                  ),
                                  2 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'bool',
                                      'value' => 'true',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 317,
                                      'char' => 83,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 317,
                                    'char' => 83,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 317,
                                'char' => 87,
                              ),
                              'right' => 
                              array (
                                'type' => 'bool',
                                'value' => 'false',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 317,
                                'char' => 95,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 317,
                              'char' => 95,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 317,
                            'char' => 95,
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
                                        'type' => 'string',
                                        'value' => 'Only UTF-8 encoded values allowed. Wrong encoding in value string: ',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 318,
                                        'char' => 121,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'value',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 318,
                                        'char' => 128,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 318,
                                      'char' => 128,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 318,
                                    'char' => 128,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 318,
                                'char' => 129,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 319,
                              'char' => 21,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 320,
                          'char' => 17,
                        ),
                      ),
                      'else_statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'if',
                          'expr' => 
                          array (
                            'type' => 'and',
                            'left' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'is_string',
                              'call-type' => 1,
                              'parameters' => 
                              array (
                                0 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'key',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 321,
                                    'char' => 37,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 321,
                                  'char' => 37,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 321,
                              'char' => 40,
                            ),
                            'right' => 
                            array (
                              'type' => 'identical',
                              'left' => 
                              array (
                                'type' => 'scall',
                                'dynamic-class' => 0,
                                'class' => 'self',
                                'dynamic' => 0,
                                'name' => 'detect_utf',
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'key',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 321,
                                      'char' => 62,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 321,
                                    'char' => 62,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 321,
                                'char' => 66,
                              ),
                              'right' => 
                              array (
                                'type' => 'bool',
                                'value' => 'false',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 321,
                                'char' => 74,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 321,
                              'char' => 74,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 321,
                            'char' => 74,
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
                                        'type' => 'string',
                                        'value' => 'Only UTF-8 encoded keys allowed. Wrong encoding in key string: ',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 322,
                                        'char' => 117,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'key',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 322,
                                        'char' => 122,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 322,
                                      'char' => 122,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 322,
                                    'char' => 122,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 322,
                                'char' => 123,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 323,
                              'char' => 21,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 324,
                          'char' => 22,
                        ),
                        1 => 
                        array (
                          'type' => 'if',
                          'expr' => 
                          array (
                            'type' => 'and',
                            'left' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'is_string',
                              'call-type' => 1,
                              'parameters' => 
                              array (
                                0 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'value',
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 324,
                                    'char' => 39,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                  'line' => 324,
                                  'char' => 39,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 324,
                              'char' => 42,
                            ),
                            'right' => 
                            array (
                              'type' => 'identical',
                              'left' => 
                              array (
                                'type' => 'scall',
                                'dynamic-class' => 0,
                                'class' => 'self',
                                'dynamic' => 0,
                                'name' => 'detect_utf',
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'value',
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 324,
                                      'char' => 66,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 324,
                                    'char' => 66,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 324,
                                'char' => 70,
                              ),
                              'right' => 
                              array (
                                'type' => 'bool',
                                'value' => 'false',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 324,
                                'char' => 78,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 324,
                              'char' => 78,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 324,
                            'char' => 78,
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
                                        'type' => 'string',
                                        'value' => 'Only UTF-8 encoded values allowed. Wrong encoding in value string: ',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 325,
                                        'char' => 121,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'value',
                                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                        'line' => 325,
                                        'char' => 128,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                      'line' => 325,
                                      'char' => 128,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                    'line' => 325,
                                    'char' => 128,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 325,
                                'char' => 129,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 326,
                              'char' => 21,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 327,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 328,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'scall',
                      'expr' => 
                      array (
                        'type' => 'scall',
                        'dynamic-class' => 0,
                        'class' => 'self',
                        'dynamic' => 0,
                        'name' => 'check_encoding',
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 329,
                              'char' => 43,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 329,
                            'char' => 43,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 329,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 330,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 331,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 332,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 304,
          'last-line' => 334,
          'char' => 26,
        ),
        25 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'json_encode_wrapper',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 334,
              'char' => 45,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'int',
                'value' => '0',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 334,
                'char' => 58,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 334,
              'char' => 58,
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
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 336,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 337,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'equals',
                'left' => 
                array (
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 337,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_options',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 337,
                      'char' => 27,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 337,
                    'char' => 27,
                  ),
                  'name' => 'offsetGet',
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
                          'value' => 'ConnectionOptions',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 337,
                          'char' => 82,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_CHECK_UTF8_CONFORM',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 337,
                          'char' => 82,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 337,
                        'char' => 82,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 337,
                      'char' => 82,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 337,
                  'char' => 85,
                ),
                'right' => 
                array (
                  'type' => 'bool',
                  'value' => 'true',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 337,
                  'char' => 92,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 337,
                'char' => 92,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'scall',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'self',
                    'dynamic' => 0,
                    'name' => 'check_encoding',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                          'line' => 338,
                          'char' => 38,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 338,
                        'char' => 38,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 338,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 339,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 340,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'empty',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 340,
                  'char' => 23,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 340,
                'char' => 23,
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
                      'variable' => 'response',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'json_encode',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'data',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 341,
                              'char' => 45,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 341,
                            'char' => 45,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'bitwise_or',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'options',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 341,
                                'char' => 55,
                              ),
                              'right' => 
                              array (
                                'type' => 'constant',
                                'value' => 'JSON_FORCE_OBJECT',
                                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                                'line' => 341,
                                'char' => 74,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 341,
                              'char' => 74,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 341,
                            'char' => 74,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 341,
                        'char' => 75,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 341,
                      'char' => 75,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 342,
                  'char' => 9,
                ),
              ),
              'else_statements' => 
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
                      'variable' => 'response',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'json_encode',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'data',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 343,
                              'char' => 45,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 343,
                            'char' => 45,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'options',
                              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                              'line' => 343,
                              'char' => 54,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                            'line' => 343,
                            'char' => 54,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 343,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 343,
                      'char' => 55,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 344,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 345,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'response',
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 345,
                'char' => 24,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 346,
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
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 335,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 335,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 334,
          'last-line' => 348,
          'char' => 19,
        ),
        26 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setDatabase',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'database',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 348,
              'char' => 48,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 350,
                    'char' => 14,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_options',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 350,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 350,
                  'char' => 24,
                ),
                'name' => 'offsetSet',
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
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 350,
                        'char' => 69,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_DATABASE',
                        'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                        'line' => 350,
                        'char' => 69,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 350,
                      'char' => 69,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 350,
                    'char' => 69,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'database',
                      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                      'line' => 350,
                      'char' => 79,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 350,
                    'char' => 79,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 350,
                'char' => 80,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 351,
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
                  'property' => '_database',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'database',
                    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                    'line' => 351,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 351,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 352,
              'char' => 12,
            ),
            2 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 352,
                  'char' => 14,
                ),
                'name' => 'updateHttpHeader',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 352,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 353,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 349,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 348,
          'last-line' => 355,
          'char' => 19,
        ),
        27 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getDatabase',
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
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 357,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_database',
                  'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                  'line' => 357,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 357,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
              'line' => 358,
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
                'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
                'line' => 356,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
            'line' => 356,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
          'line' => 355,
          'last-line' => 360,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/connection.zep',
    'line' => 3,
    'char' => 5,
  ),
);