<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'HttpHelper',
    'abstract' => 0,
    'final' => 0,
    'definition' => 
    array (
      'methods' => 
      array (
        0 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'createConnection',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'ConnectionOptions',
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 17,
                'char' => 71,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 17,
              'char' => 72,
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
                  'variable' => 'endpoint',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 19,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'context',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 19,
                  'char' => 30,
                ),
                2 => 
                array (
                  'variable' => 'fp',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 19,
                  'char' => 34,
                ),
                3 => 
                array (
                  'variable' => 'errNo',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 19,
                  'char' => 41,
                ),
                4 => 
                array (
                  'variable' => 'message',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 19,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 21,
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
                  'variable' => 'endpoint',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 21,
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
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 21,
                            'char' => 77,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_ENDPOINT',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 21,
                            'char' => 77,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 21,
                          'char' => 77,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 21,
                        'char' => 77,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 21,
                    'char' => 78,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 21,
                  'char' => 78,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 22,
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
                  'variable' => 'context',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'stream_context_create',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 22,
                    'char' => 47,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 22,
                  'char' => 47,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 23,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'equals',
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
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 23,
                        'char' => 38,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 23,
                      'char' => 38,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 23,
                  'char' => 41,
                ),
                'right' => 
                array (
                  'type' => 'static-constant-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'Endpoint',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 23,
                    'char' => 62,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'TYPE_SSL',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 23,
                    'char' => 62,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 23,
                  'char' => 62,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 23,
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
                    'name' => 'stream_context_set_option',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'context',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 24,
                          'char' => 46,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 24,
                        'char' => 46,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => 'ssl',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 24,
                          'char' => 53,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 24,
                        'char' => 53,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => 'verify_peer',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 24,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 24,
                        'char' => 68,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 24,
                            'char' => 78,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 24,
                                  'char' => 126,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_VERIFY_CERT',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 24,
                                  'char' => 126,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 24,
                                'char' => 126,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 24,
                              'char' => 126,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 24,
                          'char' => 127,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 24,
                        'char' => 127,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 24,
                    'char' => 128,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 25,
                  'char' => 37,
                ),
                1 => 
                array (
                  'type' => 'fcall',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'stream_context_set_option',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'context',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 25,
                          'char' => 46,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 25,
                        'char' => 46,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => 'ssl',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 25,
                          'char' => 53,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 25,
                        'char' => 53,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => 'allow_self_signed',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 25,
                          'char' => 74,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 25,
                        'char' => 74,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 25,
                            'char' => 84,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 25,
                                  'char' => 138,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_ALLOW_SELF_SIGNED',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 25,
                                  'char' => 138,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 25,
                                'char' => 138,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 25,
                              'char' => 138,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 25,
                          'char' => 139,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 25,
                        'char' => 139,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 25,
                    'char' => 140,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 26,
                  'char' => 14,
                ),
                2 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'not-identical',
                    'left' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 26,
                        'char' => 24,
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
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 26,
                              'char' => 68,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_CIPHERS',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 26,
                              'char' => 68,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 26,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 26,
                          'char' => 68,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 26,
                      'char' => 72,
                    ),
                    'right' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 26,
                      'char' => 79,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 26,
                    'char' => 79,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'fcall',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'stream_context_set_option',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'context',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 27,
                              'char' => 50,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 27,
                            'char' => 50,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => 'ssl',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 27,
                              'char' => 57,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 27,
                            'char' => 57,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => 'ciphers',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 27,
                              'char' => 68,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 27,
                            'char' => 68,
                          ),
                          3 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'mcall',
                              'variable' => 
                              array (
                                'type' => 'variable',
                                'value' => 'options',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 27,
                                'char' => 78,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 27,
                                      'char' => 122,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'OPTION_CIPHERS',
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 27,
                                      'char' => 122,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 27,
                                    'char' => 122,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 27,
                                  'char' => 122,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 27,
                              'char' => 123,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 27,
                            'char' => 123,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 27,
                        'char' => 124,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 28,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 29,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 30,
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
                  'variable' => 'fp',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'stream_socket_client',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'endpoint',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 30,
                          'char' => 48,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 30,
                        'char' => 48,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'errNo',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 30,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 30,
                        'char' => 55,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'message',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 30,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 30,
                        'char' => 64,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 30,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 30,
                                  'char' => 118,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_TIMEOUT',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 30,
                                  'char' => 118,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 30,
                                'char' => 118,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 30,
                              'char' => 118,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 30,
                          'char' => 119,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 30,
                        'char' => 119,
                      ),
                      4 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'constant',
                          'value' => 'STREAM_CLIENT_CONNECT',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 30,
                          'char' => 142,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 30,
                        'char' => 142,
                      ),
                      5 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'context',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 30,
                          'char' => 151,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 30,
                        'char' => 151,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 30,
                    'char' => 152,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 30,
                  'char' => 152,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 31,
              'char' => 10,
            ),
            5 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'fp',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 31,
                  'char' => 16,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 31,
                'char' => 16,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'throw',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => 'ConnectException',
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
                                'value' => 'cannot connect to endpoint \'',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 32,
                                'char' => 71,
                              ),
                              'right' => 
                              array (
                                'type' => 'mcall',
                                'variable' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'options',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 32,
                                  'char' => 81,
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
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 32,
                                        'char' => 126,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'OPTION_ENDPOINT',
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 32,
                                        'char' => 126,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 32,
                                      'char' => 126,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 32,
                                    'char' => 126,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 32,
                                'char' => 128,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 32,
                              'char' => 128,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '\': ',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 32,
                              'char' => 136,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 32,
                            'char' => 136,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'message',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 32,
                            'char' => 145,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 32,
                          'char' => 145,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 32,
                        'char' => 145,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'errNo',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 32,
                          'char' => 152,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 32,
                        'char' => 152,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 32,
                    'char' => 153,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 33,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 34,
              'char' => 26,
            ),
            6 => 
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
                      'type' => 'variable',
                      'value' => 'fp',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 34,
                      'char' => 30,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 34,
                    'char' => 30,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 34,
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
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 34,
                              'char' => 84,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_TIMEOUT',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 34,
                              'char' => 84,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 34,
                            'char' => 84,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 34,
                          'char' => 84,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 34,
                      'char' => 85,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 34,
                    'char' => 85,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 34,
                'char' => 86,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 35,
              'char' => 14,
            ),
            7 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'fp',
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 35,
                'char' => 18,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 36,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 17,
          'last-line' => 38,
          'char' => 26,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'buildRequest',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'ConnectionOptions',
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 38,
                'char' => 67,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 38,
              'char' => 68,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'connectionHeader',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 38,
              'char' => 93,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'method',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 38,
              'char' => 108,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 38,
              'char' => 120,
            ),
            4 => 
            array (
              'type' => 'parameter',
              'name' => 'body',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 38,
              'char' => 133,
            ),
            5 => 
            array (
              'type' => 'parameter',
              'name' => 'customHeaders',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 38,
                'char' => 159,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 38,
              'char' => 159,
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
                  'variable' => 'length',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 40,
                  'char' => 19,
                ),
                1 => 
                array (
                  'variable' => 'contentType',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 40,
                  'char' => 32,
                ),
                2 => 
                array (
                  'variable' => 'customHeader',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 40,
                  'char' => 46,
                ),
                3 => 
                array (
                  'variable' => 'headerKey',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 40,
                  'char' => 57,
                ),
                4 => 
                array (
                  'variable' => 'headerValue',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 40,
                  'char' => 70,
                ),
                5 => 
                array (
                  'variable' => 'request',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 40,
                  'char' => 79,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 42,
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
                  'name' => 'is_string',
                  'call-type' => 1,
                  'parameters' => 
                  array (
                    0 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'body',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 42,
                        'char' => 27,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 42,
                      'char' => 27,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 42,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 42,
                'char' => 29,
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
                            'value' => 'Invalid value for body. Expecting string, got ',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 43,
                            'char' => 88,
                          ),
                          'right' => 
                          array (
                            'type' => 'fcall',
                            'name' => 'gettype',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'body',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 43,
                                  'char' => 102,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 43,
                                'char' => 102,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 43,
                            'char' => 103,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 43,
                          'char' => 103,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 43,
                        'char' => 103,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 43,
                    'char' => 104,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 44,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 45,
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
                  'variable' => 'length',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'strlen',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'body',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 45,
                          'char' => 34,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 45,
                        'char' => 34,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 45,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 45,
                  'char' => 35,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 46,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'identical',
                'left' => 
                array (
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'options',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 46,
                    'char' => 20,
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
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 46,
                          'char' => 62,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_BATCH',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 46,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 46,
                        'char' => 62,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 46,
                      'char' => 62,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 46,
                  'char' => 66,
                ),
                'right' => 
                array (
                  'type' => 'bool',
                  'value' => 'true',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 46,
                  'char' => 73,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 46,
                'char' => 73,
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
                      'variable' => 'contentType',
                      'expr' => 
                      array (
                        'type' => 'concat',
                        'left' => 
                        array (
                          'type' => 'concat',
                          'left' => 
                          array (
                            'type' => 'string',
                            'value' => 'Content-Type: multipart/form-data; boundary=',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 47,
                            'char' => 79,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 47,
                              'char' => 101,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'MIME_BOUNDARY',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 47,
                              'char' => 101,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 47,
                            'char' => 101,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 47,
                          'char' => 101,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 47,
                            'char' => 112,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'EOL',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 47,
                            'char' => 112,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 47,
                          'char' => 112,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 47,
                        'char' => 112,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 47,
                      'char' => 112,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 48,
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
                      'variable' => 'contentType',
                      'expr' => 
                      array (
                        'type' => 'string',
                        'value' => '',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 49,
                        'char' => 33,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 49,
                      'char' => 33,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 50,
                  'char' => 14,
                ),
                1 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'and',
                    'left' => 
                    array (
                      'type' => 'greater',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'length',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 50,
                        'char' => 23,
                      ),
                      'right' => 
                      array (
                        'type' => 'int',
                        'value' => '0',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 50,
                        'char' => 28,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 50,
                      'char' => 28,
                    ),
                    'right' => 
                    array (
                      'type' => 'identical',
                      'left' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 50,
                          'char' => 38,
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
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 50,
                                'char' => 84,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'OPTION_BATCHPART',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 50,
                                'char' => 84,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 50,
                              'char' => 84,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 50,
                            'char' => 84,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 50,
                        'char' => 88,
                      ),
                      'right' => 
                      array (
                        'type' => 'bool',
                        'value' => 'false',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 50,
                        'char' => 96,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 50,
                      'char' => 96,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 50,
                    'char' => 96,
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
                          'variable' => 'contentType',
                          'expr' => 
                          array (
                            'type' => 'concat',
                            'left' => 
                            array (
                              'type' => 'string',
                              'value' => 'Content-Type: application/json',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 51,
                              'char' => 69,
                            ),
                            'right' => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'self',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 51,
                                'char' => 80,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'EOL',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 51,
                                'char' => 80,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 51,
                              'char' => 80,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 51,
                            'char' => 80,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 51,
                          'char' => 80,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 52,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 53,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 54,
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
                  'variable' => 'customHeader',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => '',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 54,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 54,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 55,
              'char' => 11,
            ),
            5 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'customHeaders',
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 55,
                'char' => 53,
              ),
              'key' => 'headerKey',
              'value' => 'headerValue',
              'reverse' => 0,
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
                      'variable' => 'customHeader',
                      'expr' => 
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
                              'type' => 'variable',
                              'value' => 'headerKey',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 56,
                              'char' => 42,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => ': ',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 56,
                              'char' => 49,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 56,
                            'char' => 49,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'headerValue',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 56,
                            'char' => 63,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 56,
                          'char' => 63,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 56,
                            'char' => 74,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'EOL',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 56,
                            'char' => 74,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 56,
                          'char' => 74,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 56,
                        'char' => 74,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 56,
                      'char' => 74,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 57,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 58,
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
                  'variable' => 'request',
                  'expr' => 
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
                            'type' => 'concat',
                            'left' => 
                            array (
                              'type' => 'concat',
                              'left' => 
                              array (
                                'type' => 'concat',
                                'left' => 
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
                                        'value' => '%s %s %s',
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 58,
                                        'char' => 42,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 58,
                                      'char' => 42,
                                    ),
                                    1 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'method',
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 58,
                                        'char' => 50,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 58,
                                      'char' => 50,
                                    ),
                                    2 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'url',
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 58,
                                        'char' => 55,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 58,
                                      'char' => 55,
                                    ),
                                    3 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'static-constant-access',
                                        'left' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'self',
                                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                          'line' => 58,
                                          'char' => 71,
                                        ),
                                        'right' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'PROTOCOL',
                                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                          'line' => 58,
                                          'char' => 71,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 58,
                                        'char' => 71,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 58,
                                      'char' => 71,
                                    ),
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 58,
                                  'char' => 73,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'connectionHeader',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 58,
                                  'char' => 92,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 58,
                                'char' => 92,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'customHeader',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 58,
                                'char' => 107,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 58,
                              'char' => 107,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'contentType',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 58,
                              'char' => 121,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 58,
                            'char' => 121,
                          ),
                          'right' => 
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
                                  'value' => 'Content-Length: %s',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 58,
                                  'char' => 151,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 58,
                                'char' => 151,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'length',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 58,
                                  'char' => 159,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 58,
                                'char' => 159,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 58,
                            'char' => 161,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 58,
                          'char' => 161,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 58,
                            'char' => 173,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'EOL',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 58,
                            'char' => 173,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 58,
                          'char' => 173,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 58,
                        'char' => 173,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 58,
                          'char' => 185,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'EOL',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 58,
                          'char' => 185,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 58,
                        'char' => 185,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 58,
                      'char' => 185,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'body',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 58,
                      'char' => 191,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 58,
                    'char' => 191,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 58,
                  'char' => 191,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 59,
              'char' => 14,
            ),
            7 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'request',
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 59,
                'char' => 23,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 60,
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
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 39,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 39,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 38,
          'last-line' => 62,
          'char' => 26,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'validateMethod',
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
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 62,
              'char' => 56,
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
                            'value' => 'method',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 64,
                            'char' => 21,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 64,
                              'char' => 42,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'METHOD_POST',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 64,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 64,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 64,
                          'char' => 42,
                        ),
                        'right' => 
                        array (
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'method',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 64,
                            'char' => 53,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 64,
                              'char' => 73,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'METHOD_PUT',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 64,
                              'char' => 73,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 64,
                            'char' => 73,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 64,
                          'char' => 73,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 64,
                        'char' => 73,
                      ),
                      'right' => 
                      array (
                        'type' => 'identical',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'method',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 64,
                          'char' => 84,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 64,
                            'char' => 107,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'METHOD_DELETE',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 64,
                            'char' => 107,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 64,
                          'char' => 107,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 64,
                        'char' => 107,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 64,
                      'char' => 107,
                    ),
                    'right' => 
                    array (
                      'type' => 'identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'method',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 64,
                        'char' => 118,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 64,
                          'char' => 138,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'METHOD_GET',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 64,
                          'char' => 138,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 64,
                        'char' => 138,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 64,
                      'char' => 138,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 64,
                    'char' => 138,
                  ),
                  'right' => 
                  array (
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'method',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 64,
                      'char' => 149,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 64,
                        'char' => 170,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'METHOD_HEAD',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 64,
                        'char' => 170,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 64,
                      'char' => 170,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 64,
                    'char' => 170,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 64,
                  'char' => 170,
                ),
                'right' => 
                array (
                  'type' => 'identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'method',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 64,
                    'char' => 181,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 64,
                      'char' => 202,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'METHOD_PATCH',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 64,
                      'char' => 202,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 64,
                    'char' => 202,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 64,
                  'char' => 202,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 64,
                'char' => 202,
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
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 65,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 66,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 67,
              'char' => 13,
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
                      'type' => 'concat',
                      'left' => 
                      array (
                        'type' => 'concat',
                        'left' => 
                        array (
                          'type' => 'string',
                          'value' => 'Invalid request method \'',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 67,
                          'char' => 62,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'method',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 67,
                          'char' => 71,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 67,
                        'char' => 71,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => '\'',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 67,
                        'char' => 76,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 67,
                      'char' => 76,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 67,
                    'char' => 76,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 67,
                'char' => 77,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
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
                'data-type' => 'bool',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 63,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 63,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 62,
          'last-line' => 70,
          'char' => 26,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'transfer',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'socket',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 70,
              'char' => 43,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'request',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 70,
              'char' => 59,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'method',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 70,
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
                  'variable' => 'contentLength',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 26,
                ),
                1 => 
                array (
                  'variable' => 'expectedLength',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 42,
                ),
                2 => 
                array (
                  'variable' => 'totalRead',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 53,
                ),
                3 => 
                array (
                  'variable' => 'contentLengthPos',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 71,
                ),
                4 => 
                array (
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 79,
                ),
                5 => 
                array (
                  'variable' => 'first',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 86,
                ),
                6 => 
                array (
                  'variable' => 'read',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 92,
                ),
                7 => 
                array (
                  'variable' => 'pos',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 97,
                ),
                8 => 
                array (
                  'variable' => 'bodyStart',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 72,
                  'char' => 108,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 74,
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
                  'name' => 'is_resource',
                  'call-type' => 1,
                  'parameters' => 
                  array (
                    0 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'socket',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 74,
                        'char' => 31,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 74,
                      'char' => 31,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 74,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 74,
                'char' => 33,
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
                          'value' => 'Invalid socket used',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 75,
                          'char' => 60,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 75,
                        'char' => 60,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 75,
                    'char' => 61,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 76,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 78,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'fcall',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'fwrite',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'socket',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 78,
                      'char' => 22,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 78,
                    'char' => 22,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'request',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 78,
                      'char' => 31,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 78,
                    'char' => 31,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 78,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 79,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'fcall',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'fflush',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'socket',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 79,
                      'char' => 22,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 79,
                    'char' => 22,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 79,
                'char' => 23,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 80,
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
                  'variable' => 'contentLength',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 80,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 80,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 81,
              'char' => 11,
            ),
            5 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'expectedLength',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 81,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 81,
                  'char' => 34,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 82,
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
                  'variable' => 'totalRead',
                  'expr' => 
                  array (
                    'type' => 'int',
                    'value' => '0',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 82,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 82,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 83,
              'char' => 11,
            ),
            7 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'contentLengthPos',
                  'expr' => 
                  array (
                    'type' => 'int',
                    'value' => '0',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 83,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 83,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 84,
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
                  'variable' => 'result',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => '',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 84,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 84,
                  'char' => 24,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 85,
              'char' => 11,
            ),
            9 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'first',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'true',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 85,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 85,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 86,
              'char' => 13,
            ),
            10 => 
            array (
              'type' => 'while',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'or',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'first',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 86,
                    'char' => 23,
                  ),
                  'right' => 
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
                            'value' => 'socket',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 86,
                            'char' => 37,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 86,
                          'char' => 37,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 86,
                      'char' => 38,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 86,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 86,
                  'char' => 38,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 86,
                'char' => 40,
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
                      'variable' => 'read',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'fread',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'socket',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 87,
                              'char' => 36,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 87,
                            'char' => 36,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'self',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 87,
                                'char' => 54,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'CHUNK_SIZE',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 87,
                                'char' => 54,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 87,
                              'char' => 54,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 87,
                            'char' => 54,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 87,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 87,
                      'char' => 55,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 88,
                  'char' => 14,
                ),
                1 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'or',
                    'left' => 
                    array (
                      'type' => 'identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'read',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 88,
                        'char' => 23,
                      ),
                      'right' => 
                      array (
                        'type' => 'bool',
                        'value' => 'false',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 88,
                        'char' => 32,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 88,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'read',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 88,
                        'char' => 41,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => '',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 88,
                        'char' => 46,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 88,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 88,
                    'char' => 46,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 90,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 91,
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
                      'operator' => 'add-assign',
                      'variable' => 'totalRead',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'strlen',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'read',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 91,
                              'char' => 40,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 91,
                            'char' => 40,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 91,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 91,
                      'char' => 41,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 92,
                  'char' => 14,
                ),
                3 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'first',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 92,
                    'char' => 22,
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
                          'variable' => 'result',
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'read',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 93,
                            'char' => 34,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 93,
                          'char' => 34,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 94,
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
                          'variable' => 'first',
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 94,
                            'char' => 34,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 94,
                          'char' => 34,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 95,
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
                          'operator' => 'concat-assign',
                          'variable' => 'result',
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'read',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 96,
                            'char' => 34,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 96,
                          'char' => 34,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 97,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 98,
                  'char' => 14,
                ),
                4 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'contentLength',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 98,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 98,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 98,
                    'char' => 39,
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
                          'variable' => 'pos',
                          'expr' => 
                          array (
                            'type' => 'fcall',
                            'name' => 'stripos',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'result',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 99,
                                  'char' => 41,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 99,
                                'char' => 41,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'content-length: ',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 99,
                                  'char' => 61,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 99,
                                'char' => 61,
                              ),
                              2 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'int',
                                  'value' => '12',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 99,
                                  'char' => 65,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 99,
                                'char' => 65,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 99,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 99,
                          'char' => 66,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 100,
                      'char' => 18,
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
                          'value' => 'pos',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 100,
                          'char' => 26,
                        ),
                        'right' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 100,
                          'char' => 34,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 100,
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
                              'assign-type' => 'variable',
                              'operator' => 'assign',
                              'variable' => 'contentLength',
                              'expr' => 
                              array (
                                'type' => 'cast',
                                'left' => 'int',
                                'right' => 
                                array (
                                  'type' => 'fcall',
                                  'name' => 'substr',
                                  'call-type' => 1,
                                  'parameters' => 
                                  array (
                                    0 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'result',
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 101,
                                        'char' => 60,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 101,
                                      'char' => 60,
                                    ),
                                    1 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'add',
                                        'left' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'pos',
                                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                          'line' => 101,
                                          'char' => 66,
                                        ),
                                        'right' => 
                                        array (
                                          'type' => 'int',
                                          'value' => '16',
                                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                          'line' => 101,
                                          'char' => 70,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 101,
                                        'char' => 70,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 101,
                                      'char' => 70,
                                    ),
                                    2 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'int',
                                        'value' => '10',
                                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                        'line' => 101,
                                        'char' => 74,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 101,
                                      'char' => 74,
                                    ),
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 101,
                                  'char' => 75,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 101,
                                'char' => 75,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 101,
                              'char' => 75,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 102,
                          'char' => 23,
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
                              'variable' => 'contentLengthPos',
                              'expr' => 
                              array (
                                'type' => 'add',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'pos',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 102,
                                  'char' => 48,
                                ),
                                'right' => 
                                array (
                                  'type' => 'int',
                                  'value' => '17',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 102,
                                  'char' => 52,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 102,
                                'char' => 52,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 102,
                              'char' => 52,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 103,
                          'char' => 22,
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
                              'value' => 'method',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 103,
                              'char' => 33,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => 'HEAD',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 103,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 103,
                            'char' => 42,
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
                                  'variable' => 'contentLength',
                                  'expr' => 
                                  array (
                                    'type' => 'int',
                                    'value' => '0',
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 104,
                                    'char' => 46,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 104,
                                  'char' => 46,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 105,
                              'char' => 21,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 106,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 107,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 108,
                  'char' => 14,
                ),
                5 => 
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
                        'value' => 'contentLength',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 108,
                        'char' => 32,
                      ),
                      'right' => 
                      array (
                        'type' => 'null',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 108,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 108,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'expectedLength',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 108,
                        'char' => 59,
                      ),
                      'right' => 
                      array (
                        'type' => 'null',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 108,
                        'char' => 66,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 108,
                      'char' => 66,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 108,
                    'char' => 66,
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
                          'variable' => 'bodyStart',
                          'expr' => 
                          array (
                            'type' => 'fcall',
                            'name' => 'strpos',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'result',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 109,
                                  'char' => 46,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 109,
                                'char' => 46,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'string',
                                  'value' => '\\r\\n\\r\\n',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 109,
                                  'char' => 58,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 109,
                                'char' => 58,
                              ),
                              2 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'contentLengthPos',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 109,
                                  'char' => 76,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 109,
                                'char' => 76,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 109,
                            'char' => 77,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 109,
                          'char' => 77,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 110,
                      'char' => 18,
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
                          'value' => 'bodyStart',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 110,
                          'char' => 32,
                        ),
                        'right' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 110,
                          'char' => 40,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 110,
                        'char' => 40,
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
                              'operator' => 'add-assign',
                              'variable' => 'bodyStart',
                              'expr' => 
                              array (
                                'type' => 'int',
                                'value' => '4',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 111,
                                'char' => 38,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 111,
                              'char' => 38,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 112,
                          'char' => 23,
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
                              'variable' => 'expectedLength',
                              'expr' => 
                              array (
                                'type' => 'add',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'bodyStart',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 112,
                                  'char' => 52,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'contentLength',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 112,
                                  'char' => 67,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 112,
                                'char' => 67,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 112,
                              'char' => 67,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 113,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 114,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 115,
                  'char' => 14,
                ),
                6 => 
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
                        'value' => 'expectedLength',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 115,
                        'char' => 33,
                      ),
                      'right' => 
                      array (
                        'type' => 'null',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 115,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 115,
                      'char' => 41,
                    ),
                    'right' => 
                    array (
                      'type' => 'greater-equal',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'totalRead',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 115,
                        'char' => 53,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'expectedLength',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 115,
                        'char' => 70,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 115,
                      'char' => 70,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 115,
                    'char' => 70,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 117,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 118,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 119,
              'char' => 14,
            ),
            11 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'result',
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 119,
                'char' => 22,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 120,
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
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 71,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 71,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 70,
          'last-line' => 122,
          'char' => 26,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'parseHttpMessage',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'httpMessage',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 122,
              'char' => 63,
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
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 122,
                'char' => 88,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 122,
              'char' => 88,
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
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 122,
                'char' => 116,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 122,
              'char' => 116,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'explode',
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
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 124,
                        'char' => 39,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'SEPARATOR',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 124,
                        'char' => 39,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 124,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 124,
                    'char' => 39,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'httpMessage',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 124,
                      'char' => 52,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 124,
                    'char' => 52,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'int',
                      'value' => '2',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 124,
                      'char' => 55,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 124,
                    'char' => 55,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 124,
                'char' => 56,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 125,
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
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 123,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 123,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 122,
          'last-line' => 127,
          'char' => 26,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'parseHeaders',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'headers',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 127,
              'char' => 55,
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
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 29,
                ),
                2 => 
                array (
                  'variable' => 'processed',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 40,
                ),
                3 => 
                array (
                  'variable' => 'lineNumber',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 52,
                ),
                4 => 
                array (
                  'variable' => 'line',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 58,
                ),
                5 => 
                array (
                  'variable' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 63,
                ),
                6 => 
                array (
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 70,
                ),
                7 => 
                array (
                  'variable' => 'tmpListKeyValue',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 87,
                ),
                8 => 
                array (
                  'variable' => 'matches',
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 129,
                  'char' => 96,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 131,
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
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 131,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 131,
                  'char' => 29,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 132,
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
                  'variable' => 'result',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 132,
                    'char' => 27,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 132,
                  'char' => 27,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 133,
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
                  'variable' => 'processed',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 133,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 133,
                  'char' => 28,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 134,
              'char' => 11,
            ),
            4 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'explode',
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
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 134,
                        'char' => 56,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'EOL',
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 134,
                        'char' => 56,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 134,
                      'char' => 56,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 134,
                    'char' => 56,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'headers',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 134,
                      'char' => 65,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 134,
                    'char' => 65,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 134,
                'char' => 67,
              ),
              'key' => 'lineNumber',
              'value' => 'line',
              'reverse' => 0,
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
                      'value' => 'lineNumber',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 135,
                      'char' => 29,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '0',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 135,
                      'char' => 33,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 135,
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
                        'name' => 'preg_match',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => '/^HTTP\\\\/\\\\d+\\\\.\\\\d+\\\\s+(\\\\d+)/',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 136,
                              'char' => 64,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 136,
                            'char' => 64,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'line',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 136,
                              'char' => 70,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 136,
                            'char' => 70,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'matches',
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 136,
                              'char' => 79,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 136,
                            'char' => 79,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 136,
                        'char' => 81,
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
                              'variable' => 'httpCode',
                              'expr' => 
                              array (
                                'type' => 'cast',
                                'left' => 'int',
                                'right' => 
                                array (
                                  'type' => 'array-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'matches',
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 137,
                                    'char' => 50,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'int',
                                    'value' => '1',
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 137,
                                    'char' => 52,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 137,
                                  'char' => 53,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 137,
                                'char' => 53,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 137,
                              'char' => 53,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 138,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 139,
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
                          'variable' => 'result',
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'line',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 139,
                            'char' => 34,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 139,
                          'char' => 34,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 140,
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
                        'type' => 'not-identical',
                        'left' => 
                        array (
                          'type' => 'fcall',
                          'name' => 'strpos',
                          'call-type' => 1,
                          'parameters' => 
                          array (
                            0 => 
                            array (
                              'parameter' => 
                              array (
                                'type' => 'variable',
                                'value' => 'line',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 141,
                                'char' => 31,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 141,
                              'char' => 31,
                            ),
                            1 => 
                            array (
                              'parameter' => 
                              array (
                                'type' => 'string',
                                'value' => ': ',
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 141,
                                'char' => 37,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 141,
                              'char' => 37,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 141,
                          'char' => 41,
                        ),
                        'right' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 141,
                          'char' => 49,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                        'line' => 141,
                        'char' => 49,
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
                              'variable' => 'tmpListKeyValue',
                              'expr' => 
                              array (
                                'type' => 'fcall',
                                'name' => 'explode',
                                'call-type' => 1,
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'string',
                                      'value' => ': ',
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 142,
                                      'char' => 55,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 142,
                                    'char' => 55,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'line',
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 142,
                                      'char' => 61,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 142,
                                    'char' => 61,
                                  ),
                                  2 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'int',
                                      'value' => '2',
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 142,
                                      'char' => 64,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 142,
                                    'char' => 64,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 142,
                                'char' => 65,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 142,
                              'char' => 65,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 143,
                          'char' => 23,
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
                              'variable' => 'key',
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'tmpListKeyValue',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 143,
                                  'char' => 46,
                                ),
                                'right' => 
                                array (
                                  'type' => 'int',
                                  'value' => '0',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 143,
                                  'char' => 48,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 143,
                                'char' => 49,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 143,
                              'char' => 49,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 144,
                          'char' => 23,
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
                              'variable' => 'value',
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'tmpListKeyValue',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 144,
                                  'char' => 48,
                                ),
                                'right' => 
                                array (
                                  'type' => 'int',
                                  'value' => '1',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 144,
                                  'char' => 50,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 144,
                                'char' => 51,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 144,
                              'char' => 51,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 145,
                          'char' => 17,
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
                              'variable' => 'tmpListKeyValue',
                              'expr' => 
                              array (
                                'type' => 'fcall',
                                'name' => 'explode',
                                'call-type' => 1,
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'string',
                                      'value' => ':',
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 146,
                                      'char' => 54,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 146,
                                    'char' => 54,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'line',
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 146,
                                      'char' => 60,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 146,
                                    'char' => 60,
                                  ),
                                  2 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'int',
                                      'value' => '2',
                                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                      'line' => 146,
                                      'char' => 63,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 146,
                                    'char' => 63,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 146,
                                'char' => 64,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 146,
                              'char' => 64,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 147,
                          'char' => 23,
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
                              'variable' => 'key',
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'tmpListKeyValue',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 147,
                                  'char' => 46,
                                ),
                                'right' => 
                                array (
                                  'type' => 'int',
                                  'value' => '0',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 147,
                                  'char' => 48,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 147,
                                'char' => 49,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 147,
                              'char' => 49,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 148,
                          'char' => 23,
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
                              'variable' => 'value',
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'tmpListKeyValue',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 148,
                                  'char' => 48,
                                ),
                                'right' => 
                                array (
                                  'type' => 'int',
                                  'value' => '1',
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 148,
                                  'char' => 50,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                'line' => 148,
                                'char' => 51,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 148,
                              'char' => 51,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 149,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 150,
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
                          'variable' => 'processed',
                          'index-expr' => 
                          array (
                            0 => 
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
                                    'value' => 'key',
                                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                    'line' => 150,
                                    'char' => 45,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                                  'line' => 150,
                                  'char' => 45,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                              'line' => 150,
                              'char' => 46,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'value',
                            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                            'line' => 150,
                            'char' => 55,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                          'line' => 150,
                          'char' => 55,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 151,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                  'line' => 152,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 153,
              'char' => 14,
            ),
            5 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'array',
                'left' => 
                array (
                  0 => 
                  array (
                    'value' => 
                    array (
                      'type' => 'variable',
                      'value' => 'httpCode',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 153,
                      'char' => 25,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 153,
                    'char' => 25,
                  ),
                  1 => 
                  array (
                    'value' => 
                    array (
                      'type' => 'variable',
                      'value' => 'result',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 153,
                      'char' => 33,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 153,
                    'char' => 33,
                  ),
                  2 => 
                  array (
                    'value' => 
                    array (
                      'type' => 'variable',
                      'value' => 'processed',
                      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                      'line' => 153,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                    'line' => 153,
                    'char' => 44,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 153,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
              'line' => 154,
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
                'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
                'line' => 128,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 128,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 127,
          'last-line' => 156,
          'char' => 26,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'METHOD_POST',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'POST',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 5,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 6,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'METHOD_PUT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'PUT',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 6,
            'char' => 29,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 7,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'METHOD_DELETE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'DELETE',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 7,
            'char' => 35,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 8,
          'char' => 9,
        ),
        3 => 
        array (
          'type' => 'const',
          'name' => 'METHOD_GET',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'GET',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 8,
            'char' => 29,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 9,
          'char' => 9,
        ),
        4 => 
        array (
          'type' => 'const',
          'name' => 'METHOD_HEAD',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'HEAD',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 9,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 10,
          'char' => 9,
        ),
        5 => 
        array (
          'type' => 'const',
          'name' => 'METHOD_PATCH',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'PATCH',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 10,
            'char' => 33,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 11,
          'char' => 9,
        ),
        6 => 
        array (
          'type' => 'const',
          'name' => 'CHUNK_SIZE',
          'default' => 
          array (
            'type' => 'int',
            'value' => '8192',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 11,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 12,
          'char' => 9,
        ),
        7 => 
        array (
          'type' => 'const',
          'name' => 'EOL',
          'default' => 
          array (
            'type' => 'string',
            'value' => '\\r\\n',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 12,
            'char' => 23,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 13,
          'char' => 9,
        ),
        8 => 
        array (
          'type' => 'const',
          'name' => 'SEPARATOR',
          'default' => 
          array (
            'type' => 'string',
            'value' => '\\r\\n\\r\\n',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 13,
            'char' => 33,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 14,
          'char' => 9,
        ),
        9 => 
        array (
          'type' => 'const',
          'name' => 'PROTOCOL',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'HTTP/1.1',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 14,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 15,
          'char' => 9,
        ),
        10 => 
        array (
          'type' => 'const',
          'name' => 'MIME_BOUNDARY',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'XXXsubpartXXX',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 15,
            'char' => 42,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 16,
          'char' => 9,
        ),
        11 => 
        array (
          'type' => 'const',
          'name' => 'ASYNC_HEADER',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'X-Arango-Async',
            'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
            'line' => 16,
            'char' => 42,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
          'line' => 17,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/httphelper.zep',
    'line' => 3,
    'char' => 5,
  ),
);