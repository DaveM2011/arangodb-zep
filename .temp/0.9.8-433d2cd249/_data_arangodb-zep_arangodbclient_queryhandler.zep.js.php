<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'QueryHandler',
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
          'name' => 'clearSlow',
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
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 7,
                  'char' => 16,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 9,
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
                            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                            'line' => 9,
                            'char' => 55,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_QUERY',
                            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                            'line' => 9,
                            'char' => 55,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 9,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 9,
                        'char' => 55,
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
                                'value' => 'slow',
                                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                                'line' => 9,
                                'char' => 64,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                              'line' => 9,
                              'char' => 64,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 9,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 9,
                        'char' => 65,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 9,
                    'char' => 66,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 9,
                  'char' => 66,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 10,
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
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 10,
                    'char' => 14,
                  ),
                  'name' => 'getConnection',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 10,
                  'char' => 31,
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
                      'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                      'line' => 10,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 10,
                    'char' => 42,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                'line' => 10,
                'char' => 43,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 11,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
            'line' => 6,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
          'line' => 5,
          'last-line' => 13,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getSlow',
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
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 15,
                  'char' => 16,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 15,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
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
                            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                            'line' => 17,
                            'char' => 55,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_QUERY',
                            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                            'line' => 17,
                            'char' => 55,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 17,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 17,
                        'char' => 55,
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
                                'value' => 'slow',
                                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                                'line' => 17,
                                'char' => 64,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                              'line' => 17,
                              'char' => 64,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 17,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 17,
                        'char' => 65,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 17,
                    'char' => 66,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 17,
                  'char' => 66,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 18,
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
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 18,
                        'char' => 30,
                      ),
                      'name' => 'getConnection',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                      'line' => 18,
                      'char' => 47,
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
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 18,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 18,
                        'char' => 55,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 18,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 18,
                  'char' => 56,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 19,
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
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 19,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                'line' => 19,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 20,
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
                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                'line' => 14,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
            'line' => 14,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
          'line' => 13,
          'last-line' => 22,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getCurrent',
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
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 24,
                  'char' => 16,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 24,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 26,
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
                            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                            'line' => 26,
                            'char' => 55,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_QUERY',
                            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                            'line' => 26,
                            'char' => 55,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 26,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 26,
                        'char' => 55,
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
                                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                                'line' => 26,
                                'char' => 67,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                              'line' => 26,
                              'char' => 67,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 26,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 26,
                        'char' => 68,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 26,
                    'char' => 69,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 26,
                  'char' => 69,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 27,
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
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 27,
                        'char' => 30,
                      ),
                      'name' => 'getConnection',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                      'line' => 27,
                      'char' => 47,
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
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 27,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 27,
                        'char' => 55,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 27,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 27,
                  'char' => 56,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 28,
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
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 28,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                'line' => 28,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 29,
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
                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                'line' => 23,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
            'line' => 23,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
          'line' => 22,
          'last-line' => 31,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'kill',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'id',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 31,
              'char' => 35,
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
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 33,
                  'char' => 16,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 35,
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
                            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                            'line' => 35,
                            'char' => 55,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_QUERY',
                            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                            'line' => 35,
                            'char' => 55,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 35,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 35,
                        'char' => 55,
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
                                'value' => 'id',
                                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                                'line' => 35,
                                'char' => 60,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                              'line' => 35,
                              'char' => 60,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                          'line' => 35,
                          'char' => 61,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                        'line' => 35,
                        'char' => 61,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 35,
                    'char' => 62,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 35,
                  'char' => 62,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 36,
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
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 36,
                    'char' => 14,
                  ),
                  'name' => 'getConnection',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                  'line' => 36,
                  'char' => 31,
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
                      'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                      'line' => 36,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                    'line' => 36,
                    'char' => 42,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                'line' => 36,
                'char' => 43,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 37,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'true',
                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                'line' => 37,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
              'line' => 38,
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
                'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
                'line' => 32,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
            'line' => 32,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
          'line' => 31,
          'last-line' => 40,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/queryhandler.zep',
    'line' => 3,
    'char' => 5,
  ),
);