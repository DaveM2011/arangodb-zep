<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Traversal',
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
          'name' => '_connection',
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
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
          'name' => 'attributes',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 6,
            'char' => 30,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
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
          'name' => '_action',
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 8,
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
              'name' => 'connection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Connection',
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 11,
                'char' => 55,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 11,
              'char' => 56,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'startVertex',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 11,
              'char' => 76,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'edgeCollection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 11,
              'char' => 99,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 11,
                'char' => 121,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 11,
              'char' => 121,
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
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 13,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 13,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 14,
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
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 14,
                  'char' => 14,
                ),
                'name' => 'setStartVertex',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'startVertex',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 14,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 14,
                    'char' => 41,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 14,
                'char' => 42,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 15,
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
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 15,
                  'char' => 14,
                ),
                'name' => 'setEdgeCollection',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'edgeCollection',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 15,
                      'char' => 47,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 15,
                    'char' => 47,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 15,
                'char' => 48,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 16,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
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
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 16,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 16,
                    'char' => 28,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 16,
                'char' => 30,
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
                      'property' => 'attributes',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'array_merge',
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
                                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                                'line' => 17,
                                'char' => 54,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'attributes',
                                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                                'line' => 17,
                                'char' => 65,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                              'line' => 17,
                              'char' => 65,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                            'line' => 17,
                            'char' => 65,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'options',
                              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                              'line' => 17,
                              'char' => 74,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                            'line' => 17,
                            'char' => 74,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 17,
                        'char' => 75,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 17,
                      'char' => 75,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 18,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 19,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 11,
          'last-line' => 21,
          'char' => 19,
        ),
        1 => 
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
              'type' => 'declare',
              'data-type' => 'variable',
              'variables' => 
              array (
                0 => 
                array (
                  'variable' => 'bodyParams',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 23,
                  'char' => 23,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 23,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 25,
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
                  'variable' => 'bodyParams',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 25,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'attributes',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 25,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 25,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 25,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 26,
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
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 26,
                        'char' => 30,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_connection',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 26,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 26,
                      'char' => 43,
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
                            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                            'line' => 26,
                            'char' => 68,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_TRAVERSAL',
                            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                            'line' => 26,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                          'line' => 26,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 26,
                        'char' => 68,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                              'line' => 26,
                              'char' => 75,
                            ),
                            'name' => 'getConnection',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                            'line' => 26,
                            'char' => 92,
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
                                'value' => 'bodyParams',
                                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                                'line' => 26,
                                'char' => 123,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                              'line' => 26,
                              'char' => 123,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                          'line' => 26,
                          'char' => 124,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 26,
                        'char' => 124,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 26,
                    'char' => 125,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 26,
                  'char' => 125,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 27,
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
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 27,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 27,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
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
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 22,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 22,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 21,
          'last-line' => 30,
          'char' => 19,
        ),
        2 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 32,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_connection',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 32,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 32,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 33,
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
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 31,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 31,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 31,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 30,
          'last-line' => 35,
          'char' => 22,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setStartVertex',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 35,
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
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 37,
                  'char' => 14,
                ),
                'name' => 'set',
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
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 37,
                        'char' => 42,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_STARTVERTEX',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 37,
                        'char' => 42,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 37,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 37,
                    'char' => 42,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 37,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 37,
                    'char' => 49,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 37,
                'char' => 50,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 38,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 36,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 35,
          'last-line' => 40,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getStartVertex',
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
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 42,
                  'char' => 21,
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
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 42,
                        'char' => 49,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_STARTVERTEX',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 42,
                        'char' => 49,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 42,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 42,
                    'char' => 49,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 42,
                'char' => 50,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 43,
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
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 41,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 41,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 40,
          'last-line' => 45,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setEdgeCollection',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 45,
              'char' => 51,
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
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 47,
                  'char' => 14,
                ),
                'name' => 'set',
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
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 47,
                        'char' => 45,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_EDGECOLLECTION',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 47,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 47,
                      'char' => 45,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 47,
                    'char' => 45,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 47,
                      'char' => 52,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 47,
                    'char' => 52,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 47,
                'char' => 53,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 48,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 46,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 45,
          'last-line' => 50,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getEdgeCollection',
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
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 52,
                  'char' => 21,
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
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 52,
                        'char' => 52,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_EDGECOLLECTION',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 52,
                        'char' => 52,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 52,
                      'char' => 52,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 52,
                    'char' => 52,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 52,
                'char' => 53,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 53,
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
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 51,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 51,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 50,
          'last-line' => 55,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'set',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'key',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 55,
              'char' => 28,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 55,
              'char' => 35,
            ),
          ),
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
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 57,
                        'char' => 26,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 57,
                      'char' => 26,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 57,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 57,
                'char' => 28,
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
                          'value' => 'Invalid attribute key',
                          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                          'line' => 58,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 58,
                        'char' => 62,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 58,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 59,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 60,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property-array-index',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'attributes',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'variable',
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 60,
                      'char' => 33,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 60,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 60,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 61,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 56,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 55,
          'last-line' => 63,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__set',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'key',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 63,
              'char' => 37,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 63,
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
                'type' => 'equals',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 65,
                  'char' => 17,
                ),
                'right' => 
                array (
                  'type' => 'static-constant-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'self',
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 65,
                    'char' => 43,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'ENTRY_STARTVERTEX',
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 65,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 65,
                  'char' => 43,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 65,
                'char' => 43,
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
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 66,
                      'char' => 18,
                    ),
                    'name' => 'setStartVertex',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'value',
                          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                          'line' => 66,
                          'char' => 39,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 66,
                        'char' => 39,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 66,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 67,
                  'char' => 9,
                ),
              ),
              'elseif_statements' => 
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
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 67,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 67,
                        'char' => 52,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_EDGECOLLECTION',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 67,
                        'char' => 52,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 67,
                      'char' => 52,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 67,
                    'char' => 52,
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
                          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                          'line' => 68,
                          'char' => 18,
                        ),
                        'name' => 'setEdgeCollection',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                              'line' => 68,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                            'line' => 68,
                            'char' => 42,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 68,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 69,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 69,
                  'char' => 14,
                ),
              ),
              'else_statements' => 
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
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 70,
                      'char' => 18,
                    ),
                    'name' => 'set',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'key',
                          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                          'line' => 70,
                          'char' => 26,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 70,
                        'char' => 26,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'value',
                          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                          'line' => 70,
                          'char' => 33,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 70,
                        'char' => 33,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 70,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 71,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 72,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 63,
          'last-line' => 74,
          'char' => 19,
        ),
        9 => 
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
              'name' => 'key',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 74,
              'char' => 35,
            ),
          ),
          'statements' => 
          array (
            0 => 
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
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 76,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'attributes',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 76,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 76,
                    'char' => 34,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'key',
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 76,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 76,
                  'char' => 40,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 76,
                'char' => 40,
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
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 77,
                        'char' => 25,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'attributes',
                        'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                        'line' => 77,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 77,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 77,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 77,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 78,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 79,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 79,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 80,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 74,
          'last-line' => 82,
          'char' => 19,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__get',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'key',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 82,
              'char' => 37,
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
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 84,
                  'char' => 21,
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
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 84,
                      'char' => 29,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 84,
                    'char' => 29,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 84,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 85,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 82,
          'last-line' => 87,
          'char' => 19,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__isset',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'key',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 87,
              'char' => 39,
            ),
          ),
          'statements' => 
          array (
            0 => 
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
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 89,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'attributes',
                      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                      'line' => 89,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 89,
                    'char' => 34,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'key',
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 89,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 89,
                  'char' => 40,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 89,
                'char' => 40,
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
                    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                    'line' => 90,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 91,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 92,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'false',
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 92,
                'char' => 21,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 93,
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
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 88,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 88,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 87,
          'last-line' => 95,
          'char' => 19,
        ),
        12 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__toString',
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
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 97,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_action',
                  'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                  'line' => 97,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 97,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
              'line' => 98,
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
                'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
                'line' => 96,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 96,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 95,
          'last-line' => 100,
          'char' => 19,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_FIELDS',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'fields',
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 8,
            'char' => 35,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 9,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_STARTVERTEX',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'startVertex',
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 9,
            'char' => 44,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 10,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_EDGECOLLECTION',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'edgeCollection',
            'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
            'line' => 10,
            'char' => 50,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
          'line' => 11,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/traversal.zep',
    'line' => 3,
    'char' => 5,
  ),
);