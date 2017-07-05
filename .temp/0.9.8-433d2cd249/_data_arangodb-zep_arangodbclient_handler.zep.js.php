<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
    'line' => 3,
    'char' => 8,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Handler',
    'abstract' => 1,
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
          'name' => '_connection',
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
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
          'name' => '_documentClass',
          'default' => 
          array (
            'type' => 'string',
            'value' => '\\\\ArangoDBClient\\\\Document',
            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
            'line' => 6,
            'char' => 60,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 7,
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
              'name' => 'connection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Connection',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 7,
                'char' => 55,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 7,
              'char' => 56,
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
                  'property' => '_connection',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'connection',
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 9,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 9,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 10,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 7,
          'last-line' => 12,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getConnection',
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
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 14,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_connection',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 14,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 14,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 15,
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
                  'value' => 'Connection',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 13,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 13,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
            'line' => 13,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 12,
          'last-line' => 17,
          'char' => 22,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getConnectionOption',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'optionName',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 17,
              'char' => 54,
            ),
          ),
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
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 19,
                    'char' => 21,
                  ),
                  'name' => 'getConnection',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 19,
                  'char' => 38,
                ),
                'name' => 'getOption',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'optionName',
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 19,
                      'char' => 59,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 19,
                    'char' => 59,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 19,
                'char' => 60,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 20,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 17,
          'last-line' => 22,
          'char' => 22,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'json_encode_wrapper',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'body',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 22,
              'char' => 54,
            ),
          ),
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
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 24,
                    'char' => 21,
                  ),
                  'name' => 'getConnection',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 24,
                  'char' => 38,
                ),
                'name' => 'json_encode_wrapper',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'body',
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 24,
                      'char' => 63,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 24,
                    'char' => 63,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 24,
                'char' => 64,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 25,
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
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 23,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
            'line' => 23,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 22,
          'last-line' => 27,
          'char' => 22,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'includeOptionsInParams',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 27,
              'char' => 54,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'includeArray',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 27,
                'char' => 79,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 27,
              'char' => 79,
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
                  'variable' => 'params',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 29,
                  'char' => 19,
                ),
                1 => 
                array (
                  'variable' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 29,
                  'char' => 24,
                ),
                2 => 
                array (
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 29,
                  'char' => 31,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 31,
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
                  'variable' => 'params',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 31,
                    'char' => 25,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 31,
                  'char' => 25,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 32,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'options',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 32,
                'char' => 35,
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
                    'type' => 'fcall',
                    'name' => 'array_key_exists',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'key',
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 33,
                          'char' => 36,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                        'line' => 33,
                        'char' => 36,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'includeArray',
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 33,
                          'char' => 50,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                        'line' => 33,
                        'char' => 50,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 33,
                    'char' => 52,
                  ),
                  'statements' => 
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
                          'value' => 'key',
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 34,
                          'char' => 26,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ConnectionOptions',
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 34,
                            'char' => 68,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_UPDATE_POLICY',
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 34,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 34,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                        'line' => 34,
                        'char' => 68,
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
                            'class' => 'UpdatePolicy',
                            'dynamic' => 0,
                            'name' => 'validate',
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'value',
                                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                  'line' => 35,
                                  'char' => 49,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                'line' => 35,
                                'char' => 49,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 35,
                            'char' => 50,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 36,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 37,
                      'char' => 19,
                    ),
                    1 => 
                    array (
                      'type' => 'let',
                      'assignments' => 
                      array (
                        0 => 
                        array (
                          'assign-type' => 'array-index',
                          'operator' => 'assign',
                          'variable' => 'params',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'variable',
                              'value' => 'key',
                              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                              'line' => 37,
                              'char' => 31,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'value',
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 37,
                            'char' => 40,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 37,
                          'char' => 40,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 38,
                      'char' => 18,
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
                          'value' => 'value',
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 38,
                          'char' => 28,
                        ),
                        'right' => 
                        array (
                          'type' => 'null',
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 38,
                          'char' => 35,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                        'line' => 38,
                        'char' => 35,
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
                              'assign-type' => 'array-index',
                              'operator' => 'assign',
                              'variable' => 'params',
                              'index-expr' => 
                              array (
                                0 => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'key',
                                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                  'line' => 39,
                                  'char' => 35,
                                ),
                              ),
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'includeArray',
                                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                  'line' => 39,
                                  'char' => 51,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'key',
                                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                  'line' => 39,
                                  'char' => 55,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                'line' => 39,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                              'line' => 39,
                              'char' => 56,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 40,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 41,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 42,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 43,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'params',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 43,
                'char' => 22,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 44,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 27,
          'last-line' => 46,
          'char' => 22,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'includeOptionsInBody',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 46,
              'char' => 52,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'body',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 46,
              'char' => 58,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'includeArray',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 46,
                'char' => 83,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 46,
              'char' => 83,
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
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 48,
                  'char' => 16,
                ),
                1 => 
                array (
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 48,
                  'char' => 23,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 50,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'options',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 50,
                'char' => 35,
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
                    'type' => 'fcall',
                    'name' => 'array_key_exists',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'key',
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 51,
                          'char' => 36,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                        'line' => 51,
                        'char' => 36,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'includeArray',
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 51,
                          'char' => 50,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                        'line' => 51,
                        'char' => 50,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 51,
                    'char' => 52,
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
                          'assign-type' => 'array-index',
                          'operator' => 'assign',
                          'variable' => 'body',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'variable',
                              'value' => 'key',
                              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                              'line' => 52,
                              'char' => 29,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'value',
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 52,
                            'char' => 38,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 52,
                          'char' => 38,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 53,
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
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'value',
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 53,
                            'char' => 28,
                          ),
                          'right' => 
                          array (
                            'type' => 'null',
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 53,
                            'char' => 36,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 53,
                          'char' => 36,
                        ),
                        'right' => 
                        array (
                          'type' => 'not-identical',
                          'left' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'includeArray',
                              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                              'line' => 53,
                              'char' => 50,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'key',
                              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                              'line' => 53,
                              'char' => 54,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 53,
                            'char' => 58,
                          ),
                          'right' => 
                          array (
                            'type' => 'null',
                            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                            'line' => 53,
                            'char' => 65,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 53,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                        'line' => 53,
                        'char' => 65,
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
                              'assign-type' => 'array-index',
                              'operator' => 'assign',
                              'variable' => 'body',
                              'index-expr' => 
                              array (
                                0 => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'key',
                                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                  'line' => 54,
                                  'char' => 33,
                                ),
                              ),
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'includeArray',
                                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                  'line' => 54,
                                  'char' => 49,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'key',
                                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                  'line' => 54,
                                  'char' => 53,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                                'line' => 54,
                                'char' => 54,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                              'line' => 54,
                              'char' => 54,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                          'line' => 55,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 56,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 57,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 58,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'body',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 58,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 59,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 46,
          'last-line' => 61,
          'char' => 22,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'makeCollection',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 61,
              'char' => 44,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'instanceof',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 63,
                  'char' => 27,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'Collection',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 63,
                  'char' => 40,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 63,
                'char' => 40,
              ),
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
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 64,
                      'char' => 26,
                    ),
                    'name' => 'getName',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 64,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 65,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 66,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'instanceof',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 66,
                  'char' => 27,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'Document',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 66,
                  'char' => 38,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 66,
                'char' => 38,
              ),
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
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                      'line' => 67,
                      'char' => 26,
                    ),
                    'name' => 'getCollectionId',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 67,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 68,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 69,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'value',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 69,
                'char' => 21,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 70,
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
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 62,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
            'line' => 62,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 61,
          'last-line' => 72,
          'char' => 22,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setDocumentClass',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'classs',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 72,
              'char' => 51,
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
                  'property' => '_documentClass',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'classs',
                    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                    'line' => 74,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 74,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
              'line' => 75,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 75,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
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
                  'value' => 'Handler',
                  'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                  'line' => 73,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
                'line' => 73,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
            'line' => 73,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
          'line' => 72,
          'last-line' => 78,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
      'line' => 3,
      'char' => 14,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/handler.zep',
    'line' => 3,
    'char' => 14,
  ),
);