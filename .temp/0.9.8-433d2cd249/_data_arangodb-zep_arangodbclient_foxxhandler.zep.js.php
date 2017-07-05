<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'FoxxHandler',
    'abstract' => 0,
    'final' => 0,
    'extends' => 'Handler',
    'definition' => 
    array (
      'methods' => 
      array (
        0 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'installFoxxZip',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'localZip',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 5,
              'char' => 51,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'mountPoint',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 5,
              'char' => 70,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                'line' => 5,
                'char' => 90,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 5,
              'char' => 90,
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
                  'variable' => 'post',
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 7,
                  'char' => 17,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 7,
                  'char' => 27,
                ),
                2 => 
                array (
                  'variable' => 'tmpArrayd1b5116499c5b30ab1ea6541dd495788',
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 7,
                  'char' => 69,
                ),
                3 => 
                array (
                  'variable' => 'e',
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 7,
                  'char' => 72,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 9,
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
                  'name' => 'file_exists',
                  'call-type' => 1,
                  'parameters' => 
                  array (
                    0 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'localZip',
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 9,
                        'char' => 33,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 9,
                      'char' => 33,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 9,
                  'char' => 35,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                'line' => 9,
                'char' => 35,
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
                          'value' => 'Foxx-Zip {localZip} does not exist (or file is unreadable).',
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 10,
                          'char' => 100,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 10,
                        'char' => 100,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                    'line' => 10,
                    'char' => 101,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 11,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 12,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'try-catch',
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
                      'variable' => 'post',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'file_get_contents',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'localZip',
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 13,
                              'char' => 51,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 13,
                            'char' => 51,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 13,
                        'char' => 52,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 13,
                      'char' => 52,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 14,
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
                      'variable' => 'response',
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
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 14,
                            'char' => 34,
                          ),
                          'name' => 'getConnection',
                          'call-type' => 1,
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 14,
                          'char' => 51,
                        ),
                        'name' => 'post',
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
                                'value' => 'Urls',
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 14,
                                'char' => 73,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'URL_UPLOAD',
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 14,
                                'char' => 73,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 14,
                              'char' => 73,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 14,
                            'char' => 73,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'post',
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 14,
                              'char' => 79,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 14,
                            'char' => 79,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 14,
                        'char' => 80,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 14,
                      'char' => 80,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 15,
                  'char' => 14,
                ),
                2 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'less',
                    'left' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'response',
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 15,
                        'char' => 25,
                      ),
                      'name' => 'getHttpCode',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 15,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '400',
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 15,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                    'line' => 15,
                    'char' => 46,
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
                          'variable' => 'tmpArrayd1b5116499c5b30ab1ea6541dd495788',
                          'expr' => 
                          array (
                            'type' => 'array',
                            'left' => 
                            array (
                              0 => 
                              array (
                                'key' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'appInfo',
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 16,
                                  'char' => 75,
                                ),
                                'value' => 
                                array (
                                  'type' => 'array-access',
                                  'left' => 
                                  array (
                                    'type' => 'mcall',
                                    'variable' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'response',
                                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                      'line' => 16,
                                      'char' => 86,
                                    ),
                                    'name' => 'getJson',
                                    'call-type' => 1,
                                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                    'line' => 16,
                                    'char' => 96,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'string',
                                    'value' => 'filename',
                                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                    'line' => 16,
                                    'char' => 107,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 16,
                                  'char' => 108,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 16,
                                'char' => 108,
                              ),
                              1 => 
                              array (
                                'key' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'mount',
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 16,
                                  'char' => 118,
                                ),
                                'value' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'mountPoint',
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 16,
                                  'char' => 130,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 16,
                                'char' => 130,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 16,
                            'char' => 131,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 16,
                          'char' => 131,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 17,
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
                          'variable' => 'response',
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
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 17,
                                'char' => 38,
                              ),
                              'name' => 'getConnection',
                              'call-type' => 1,
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 17,
                              'char' => 55,
                            ),
                            'name' => 'put',
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
                                    'value' => 'Urls',
                                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                    'line' => 17,
                                    'char' => 82,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'URL_FOXX_INSTALL',
                                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                    'line' => 17,
                                    'char' => 82,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 17,
                                  'char' => 82,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 17,
                                'char' => 82,
                              ),
                              1 => 
                              array (
                                'parameter' => 
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
                                        'value' => 'tmpArrayd1b5116499c5b30ab1ea6541dd495788',
                                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                        'line' => 17,
                                        'char' => 136,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                      'line' => 17,
                                      'char' => 136,
                                    ),
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 17,
                                  'char' => 137,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 17,
                                'char' => 137,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 17,
                            'char' => 138,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 17,
                          'char' => 138,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 18,
                      'char' => 18,
                    ),
                    2 => 
                    array (
                      'type' => 'if',
                      'expr' => 
                      array (
                        'type' => 'less',
                        'left' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'response',
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 18,
                            'char' => 29,
                          ),
                          'name' => 'getHttpCode',
                          'call-type' => 1,
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 18,
                          'char' => 44,
                        ),
                        'right' => 
                        array (
                          'type' => 'int',
                          'value' => '400',
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 18,
                          'char' => 50,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 18,
                        'char' => 50,
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
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 19,
                              'char' => 37,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 19,
                            'char' => 47,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 20,
                          'char' => 17,
                        ),
                      ),
                      'else_statements' => 
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
                                  'value' => 'Foxx-Zip install failed',
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 21,
                                  'char' => 72,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 21,
                                'char' => 72,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 21,
                            'char' => 73,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 22,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 23,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
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
                              'value' => 'Foxx-Zip upload failed',
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 24,
                              'char' => 67,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 24,
                            'char' => 67,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 24,
                        'char' => 68,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 25,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 26,
                  'char' => 9,
                ),
              ),
              'catches' => 
              array (
                0 => 
                array (
                  'classes' => 
                  array (
                    0 => 
                    array (
                      'type' => 'variable',
                      'value' => 'ServerException',
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 26,
                      'char' => 32,
                    ),
                  ),
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'e',
                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                    'line' => 29,
                    'char' => 14,
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
                              'type' => 'mcall',
                              'variable' => 
                              array (
                                'type' => 'variable',
                                'value' => 'e',
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 27,
                                'char' => 41,
                              ),
                              'name' => 'getMessage',
                              'call-type' => 1,
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 27,
                              'char' => 54,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 27,
                            'char' => 54,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 27,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 28,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 29,
                  'char' => 14,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 29,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                'line' => 29,
                'char' => 18,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 30,
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
                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                'line' => 6,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
            'line' => 6,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
          'line' => 5,
          'last-line' => 32,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'removeFoxxApp',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'mountPoint',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 32,
              'char' => 52,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                'line' => 32,
                'char' => 72,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 32,
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
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 34,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'tmpArray2e91a2de584b196522ab83abc491c501',
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 34,
                  'char' => 63,
                ),
                2 => 
                array (
                  'variable' => 'e',
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 34,
                  'char' => 66,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 36,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'try-catch',
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
                      'variable' => 'tmpArray2e91a2de584b196522ab83abc491c501',
                      'expr' => 
                      array (
                        'type' => 'array',
                        'left' => 
                        array (
                          0 => 
                          array (
                            'key' => 
                            array (
                              'type' => 'string',
                              'value' => 'mount',
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 37,
                              'char' => 69,
                            ),
                            'value' => 
                            array (
                              'type' => 'variable',
                              'value' => 'mountPoint',
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 37,
                              'char' => 81,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 37,
                            'char' => 81,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 37,
                        'char' => 82,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 37,
                      'char' => 82,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 38,
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
                      'variable' => 'response',
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
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 38,
                            'char' => 34,
                          ),
                          'name' => 'getConnection',
                          'call-type' => 1,
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 38,
                          'char' => 51,
                        ),
                        'name' => 'put',
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
                                'value' => 'Urls',
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 38,
                                'char' => 80,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'URL_FOXX_UNINSTALL',
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 38,
                                'char' => 80,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 38,
                              'char' => 80,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 38,
                            'char' => 80,
                          ),
                          1 => 
                          array (
                            'parameter' => 
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
                                    'value' => 'tmpArray2e91a2de584b196522ab83abc491c501',
                                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                    'line' => 38,
                                    'char' => 134,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 38,
                                  'char' => 134,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 38,
                              'char' => 135,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 38,
                            'char' => 135,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 38,
                        'char' => 136,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 38,
                      'char' => 136,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 39,
                  'char' => 14,
                ),
                2 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'less',
                    'left' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'response',
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 39,
                        'char' => 25,
                      ),
                      'name' => 'getHttpCode',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 39,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '400',
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 39,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                    'line' => 39,
                    'char' => 46,
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
                          'value' => 'response',
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 40,
                          'char' => 33,
                        ),
                        'name' => 'getJson',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 40,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 41,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
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
                                    'value' => 'Foxx uninstall failed (Code: %d)',
                                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                    'line' => 42,
                                    'char' => 85,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 42,
                                  'char' => 85,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                      'line' => 42,
                                      'char' => 96,
                                    ),
                                    'name' => 'getHttpCode',
                                    'call-type' => 1,
                                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                    'line' => 42,
                                    'char' => 110,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 42,
                                  'char' => 110,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 42,
                              'char' => 111,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 42,
                            'char' => 111,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 42,
                        'char' => 112,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 43,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 44,
                  'char' => 9,
                ),
              ),
              'catches' => 
              array (
                0 => 
                array (
                  'classes' => 
                  array (
                    0 => 
                    array (
                      'type' => 'variable',
                      'value' => 'ServerException',
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 44,
                      'char' => 32,
                    ),
                  ),
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'e',
                    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                    'line' => 50,
                    'char' => 14,
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
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'e',
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 45,
                            'char' => 18,
                          ),
                          'name' => 'getMessage',
                          'call-type' => 1,
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 45,
                          'char' => 34,
                        ),
                        'right' => 
                        array (
                          'type' => 'string',
                          'value' => 'Service not found',
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 45,
                          'char' => 56,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 45,
                        'char' => 56,
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
                                        'value' => 'Mount point %s not present.',
                                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                        'line' => 46,
                                        'char' => 80,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                      'line' => 46,
                                      'char' => 80,
                                    ),
                                    1 => 
                                    array (
                                      'parameter' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'mountPoint',
                                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                        'line' => 46,
                                        'char' => 92,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                      'line' => 46,
                                      'char' => 92,
                                    ),
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                  'line' => 46,
                                  'char' => 93,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 46,
                                'char' => 93,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 46,
                            'char' => 94,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                          'line' => 47,
                          'char' => 13,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 48,
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
                              'type' => 'mcall',
                              'variable' => 
                              array (
                                'type' => 'variable',
                                'value' => 'e',
                                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                                'line' => 48,
                                'char' => 41,
                              ),
                              'name' => 'getMessage',
                              'call-type' => 1,
                              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                              'line' => 48,
                              'char' => 54,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                            'line' => 48,
                            'char' => 54,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                        'line' => 48,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                      'line' => 49,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                  'line' => 50,
                  'char' => 14,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
              'line' => 50,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                'line' => 50,
                'char' => 18,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
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
                'data-type' => 'array',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
                'line' => 33,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
            'line' => 33,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
          'line' => 32,
          'last-line' => 53,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/foxxhandler.zep',
    'line' => 3,
    'char' => 5,
  ),
);