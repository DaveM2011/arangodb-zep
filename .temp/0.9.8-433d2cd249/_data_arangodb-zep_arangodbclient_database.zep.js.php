<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Database',
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
          'name' => 'create',
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 7,
                'char' => 57,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 7,
              'char' => 58,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'name',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 7,
              'char' => 71,
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
                  'variable' => 'payload',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 9,
                  'char' => 20,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 9,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 11,
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
                  'variable' => 'payload',
                  'expr' => 
                  array (
                    'type' => 'array',
                    'left' => 
                    array (
                      0 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 11,
                            'char' => 51,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_DATABASE_NAME',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 11,
                            'char' => 51,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 11,
                          'char' => 51,
                        ),
                        'value' => 
                        array (
                          'type' => 'variable',
                          'value' => 'name',
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 11,
                          'char' => 57,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 11,
                        'char' => 57,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 11,
                            'char' => 86,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_DATABASE_USERS',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 11,
                            'char' => 86,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 11,
                          'char' => 86,
                        ),
                        'value' => 
                        array (
                          'type' => 'array',
                          'left' => 
                          array (
                            0 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'array',
                                'left' => 
                                array (
                                  0 => 
                                  array (
                                    'key' => 
                                    array (
                                      'type' => 'string',
                                      'value' => 'username',
                                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                      'line' => 11,
                                      'char' => 101,
                                    ),
                                    'value' => 
                                    array (
                                      'type' => 'mcall',
                                      'variable' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'connection',
                                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                        'line' => 11,
                                        'char' => 114,
                                      ),
                                      'name' => 'getOption',
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
                                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                              'line' => 11,
                                              'char' => 160,
                                            ),
                                            'right' => 
                                            array (
                                              'type' => 'variable',
                                              'value' => 'OPTION_AUTH_USER',
                                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                              'line' => 11,
                                              'char' => 160,
                                            ),
                                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                            'line' => 11,
                                            'char' => 160,
                                          ),
                                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                          'line' => 11,
                                          'char' => 160,
                                        ),
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                      'line' => 11,
                                      'char' => 161,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                    'line' => 11,
                                    'char' => 161,
                                  ),
                                  1 => 
                                  array (
                                    'key' => 
                                    array (
                                      'type' => 'string',
                                      'value' => 'passwd',
                                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                      'line' => 11,
                                      'char' => 172,
                                    ),
                                    'value' => 
                                    array (
                                      'type' => 'mcall',
                                      'variable' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'connection',
                                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                        'line' => 11,
                                        'char' => 185,
                                      ),
                                      'name' => 'getOption',
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
                                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                              'line' => 11,
                                              'char' => 233,
                                            ),
                                            'right' => 
                                            array (
                                              'type' => 'variable',
                                              'value' => 'OPTION_AUTH_PASSWD',
                                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                              'line' => 11,
                                              'char' => 233,
                                            ),
                                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                            'line' => 11,
                                            'char' => 233,
                                          ),
                                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                          'line' => 11,
                                          'char' => 233,
                                        ),
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                      'line' => 11,
                                      'char' => 234,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                    'line' => 11,
                                    'char' => 234,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                'line' => 11,
                                'char' => 235,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                              'line' => 11,
                              'char' => 235,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 11,
                          'char' => 236,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 11,
                        'char' => 236,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 11,
                    'char' => 237,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 11,
                  'char' => 237,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 12,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'connection',
                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                      'line' => 12,
                      'char' => 36,
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
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 12,
                            'char' => 60,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_DATABASE',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 12,
                            'char' => 60,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 12,
                          'char' => 60,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 12,
                        'char' => 60,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'connection',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 12,
                            'char' => 73,
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
                                'value' => 'payload',
                                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                'line' => 12,
                                'char' => 101,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                              'line' => 12,
                              'char' => 101,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 12,
                          'char' => 102,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 12,
                        'char' => 102,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 12,
                    'char' => 103,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 12,
                  'char' => 103,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 13,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 13,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 13,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 14,
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 8,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
            'line' => 8,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
          'line' => 7,
          'last-line' => 16,
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
          'name' => 'delete',
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 16,
                'char' => 57,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 16,
              'char' => 58,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'name',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 16,
              'char' => 71,
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
                  'variable' => 'url',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 18,
                  'char' => 16,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 18,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 20,
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
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'buildUrl',
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
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 20,
                            'char' => 58,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_DATABASE',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 20,
                            'char' => 58,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 20,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 20,
                        'char' => 58,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'array',
                          'left' => 
                          array (
                            0 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'name',
                                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                'line' => 20,
                                'char' => 65,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                              'line' => 20,
                              'char' => 65,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 20,
                          'char' => 66,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 20,
                        'char' => 66,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 20,
                    'char' => 67,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 20,
                  'char' => 67,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 21,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'connection',
                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                      'line' => 21,
                      'char' => 36,
                    ),
                    'name' => 'delete',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 21,
                          'char' => 47,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 21,
                        'char' => 47,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 21,
                    'char' => 48,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 21,
                  'char' => 48,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 22,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 22,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 22,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 23,
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 17,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
            'line' => 17,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
          'line' => 16,
          'last-line' => 25,
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
          'name' => 'listDatabases',
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 25,
                'char' => 64,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 25,
              'char' => 65,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'scall',
                'dynamic-class' => 0,
                'class' => 'self',
                'dynamic' => 0,
                'name' => 'databases',
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'connection',
                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                      'line' => 27,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 27,
                    'char' => 42,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 27,
                'char' => 43,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 28,
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 26,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
            'line' => 26,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
          'line' => 25,
          'last-line' => 30,
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
          'name' => 'databases',
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 30,
                'char' => 60,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 30,
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
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 32,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 34,
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
                      'value' => 'connection',
                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                      'line' => 34,
                      'char' => 36,
                    ),
                    'name' => 'get',
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
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 34,
                            'char' => 59,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_DATABASE',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 34,
                            'char' => 59,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 34,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 34,
                        'char' => 59,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 34,
                    'char' => 60,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 34,
                  'char' => 60,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 35,
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
                  'value' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 35,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 35,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 36,
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 31,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
            'line' => 31,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
          'line' => 30,
          'last-line' => 38,
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
          'name' => 'listUserDatabases',
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 38,
                'char' => 68,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 38,
              'char' => 69,
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
                  'variable' => 'url',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 40,
                  'char' => 16,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 40,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 42,
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
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'buildUrl',
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
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 42,
                            'char' => 58,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_DATABASE',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 42,
                            'char' => 58,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 42,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 42,
                        'char' => 58,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'array',
                          'left' => 
                          array (
                            0 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'string',
                                'value' => 'user',
                                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                'line' => 42,
                                'char' => 67,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                              'line' => 42,
                              'char' => 67,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 42,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 42,
                        'char' => 68,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 42,
                    'char' => 69,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 42,
                  'char' => 69,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 43,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'connection',
                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                      'line' => 43,
                      'char' => 36,
                    ),
                    'name' => 'get',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 43,
                          'char' => 44,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 43,
                        'char' => 44,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 43,
                    'char' => 45,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 43,
                  'char' => 45,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 44,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 44,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 44,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 45,
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 39,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
            'line' => 39,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
          'line' => 38,
          'last-line' => 47,
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
          'name' => 'getInfo',
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
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 47,
                'char' => 58,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 47,
              'char' => 59,
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
                  'variable' => 'url',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 49,
                  'char' => 16,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 49,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 51,
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
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'buildUrl',
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
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 51,
                            'char' => 58,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_DATABASE',
                            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                            'line' => 51,
                            'char' => 58,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 51,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 51,
                        'char' => 58,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'array',
                          'left' => 
                          array (
                            0 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'string',
                                'value' => 'current',
                                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                                'line' => 51,
                                'char' => 70,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                              'line' => 51,
                              'char' => 70,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 51,
                          'char' => 71,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 51,
                        'char' => 71,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 51,
                    'char' => 72,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 51,
                  'char' => 72,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 52,
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
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'connection',
                      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                      'line' => 52,
                      'char' => 36,
                    ),
                    'name' => 'get',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                          'line' => 52,
                          'char' => 44,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                        'line' => 52,
                        'char' => 44,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                    'line' => 52,
                    'char' => 45,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 52,
                  'char' => 45,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
              'line' => 53,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                  'line' => 53,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 53,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/database.zep',
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
                'data-type' => 'array',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/database.zep',
                'line' => 48,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
            'line' => 48,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
          'line' => 47,
          'last-line' => 56,
          'char' => 26,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_DATABASE_NAME',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'name',
            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
            'line' => 5,
            'char' => 39,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
          'line' => 6,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_DATABASE_USERS',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'users',
            'file' => '/data/arangodb-zep/arangodbclient/database.zep',
            'line' => 6,
            'char' => 41,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/database.zep',
          'line' => 7,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/database.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/database.zep',
    'line' => 3,
    'char' => 5,
  ),
);