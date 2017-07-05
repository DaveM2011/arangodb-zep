<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'ExportCursor',
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
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
          'name' => '_options',
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
          'name' => '_result',
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
          'name' => '_hasMore',
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
          'name' => '_id',
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
          'name' => '_fetches',
          'default' => 
          array (
            'type' => 'int',
            'value' => '1',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 10,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
          'name' => '_documentClass',
          'default' => 
          array (
            'type' => 'string',
            'value' => '\\\\ArangoDBClient\\\\Document',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 11,
            'char' => 60,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
          'name' => 'data',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 12,
            'char' => 24,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 13,
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
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 20,
                'char' => 55,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 20,
              'char' => 56,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 20,
              'char' => 68,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 20,
              'char' => 83,
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
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 22,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 22,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 23,
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
                  'property' => 'data',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'data',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 23,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 23,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 24,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_id',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 24,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 24,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 25,
              'char' => 10,
            ),
            3 => 
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
                    'value' => 'data',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 25,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 25,
                      'char' => 37,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_ID',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 25,
                      'char' => 37,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 25,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 25,
                  'char' => 39,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 25,
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
                      'assign-type' => 'object-property',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_id',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 26,
                          'char' => 33,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 26,
                            'char' => 48,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_ID',
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 26,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 26,
                          'char' => 48,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 26,
                        'char' => 49,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 26,
                      'char' => 49,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 27,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 28,
              'char' => 10,
            ),
            4 => 
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
                    'value' => 'options',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 28,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'string',
                    'value' => '_documentClass',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 28,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 28,
                  'char' => 44,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 28,
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
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 29,
                      'char' => 18,
                    ),
                    'name' => 'setDocumentClass',
                    'call-type' => 1,
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
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 29,
                            'char' => 43,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => '_documentClass',
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 29,
                            'char' => 60,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 29,
                          'char' => 61,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 29,
                        'char' => 61,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 29,
                    'char' => 62,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 30,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 32,
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
                  'property' => '_hasMore',
                  'expr' => 
                  array (
                    'type' => 'cast',
                    'left' => 'bool',
                    'right' => 
                    array (
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'data',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 32,
                        'char' => 42,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 32,
                          'char' => 62,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_HASMORE',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 32,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 32,
                        'char' => 62,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 32,
                      'char' => 63,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 32,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 32,
                  'char' => 63,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 33,
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
                  'property' => '_options',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'options',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 33,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 33,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 34,
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
                  'property' => '_result',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 34,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 34,
                  'char' => 32,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 35,
              'char' => 12,
            ),
            8 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 35,
                  'char' => 14,
                ),
                'name' => 'setData',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'cast',
                      'left' => 'array',
                      'right' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 35,
                          'char' => 35,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 35,
                            'char' => 54,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_RESULT',
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 35,
                            'char' => 54,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 35,
                          'char' => 54,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 35,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 35,
                      'char' => 55,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 35,
                    'char' => 55,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 35,
                'char' => 56,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 36,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 20,
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
          'name' => 'delete',
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
                  'variable' => 'e',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 40,
                  'char' => 14,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 42,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 42,
                  'char' => 17,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_id',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 42,
                  'char' => 22,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 42,
                'char' => 22,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'try-catch',
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
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 44,
                            'char' => 22,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_connection',
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 44,
                            'char' => 35,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 44,
                          'char' => 35,
                        ),
                        'name' => 'delete',
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
                                    'type' => 'variable',
                                    'value' => 'this',
                                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                    'line' => 44,
                                    'char' => 48,
                                  ),
                                  'name' => 'url',
                                  'call-type' => 1,
                                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                  'line' => 44,
                                  'char' => 55,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => '/',
                                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                  'line' => 44,
                                  'char' => 61,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                'line' => 44,
                                'char' => 61,
                              ),
                              'right' => 
                              array (
                                'type' => 'property-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'this',
                                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                  'line' => 44,
                                  'char' => 68,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_id',
                                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                  'line' => 44,
                                  'char' => 72,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                'line' => 44,
                                'char' => 72,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                              'line' => 44,
                              'char' => 72,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 44,
                            'char' => 72,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 44,
                        'char' => 73,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 45,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'expr' => 
                      array (
                        'type' => 'bool',
                        'value' => 'true',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 45,
                        'char' => 28,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 46,
                      'char' => 13,
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
                          'value' => 'Exception',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 46,
                          'char' => 30,
                        ),
                      ),
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'e',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 49,
                        'char' => 9,
                      ),
                      'statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'throw',
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'e',
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 47,
                            'char' => 24,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 48,
                          'char' => 13,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 49,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 49,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 50,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'false',
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 50,
                'char' => 21,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
                'data-type' => 'bool',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 39,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 39,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 38,
          'last-line' => 53,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getCount',
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
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 55,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'data',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 55,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 55,
                  'char' => 26,
                ),
                'right' => 
                array (
                  'type' => 'static-constant-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'self',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 55,
                    'char' => 44,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'ENTRY_COUNT',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 55,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 55,
                  'char' => 44,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 55,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
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
                'data-type' => 'int',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 54,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 54,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 53,
          'last-line' => 58,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getNextBatch',
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
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 60,
                  'char' => 53,
                ),
                1 => 
                array (
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 60,
                  'char' => 61,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 62,
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
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 62,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 62,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 63,
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
                  'type' => 'identical',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 63,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_result',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 63,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 63,
                    'char' => 28,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 63,
                    'char' => 72,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 63,
                  'char' => 72,
                ),
                'right' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 63,
                    'char' => 79,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_hasMore',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 63,
                    'char' => 89,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 63,
                  'char' => 89,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 63,
                'char' => 89,
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
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 64,
                      'char' => 18,
                    ),
                    'name' => 'fetchOutstanding',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 64,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 65,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 66,
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
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 66,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 66,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 67,
              'char' => 10,
            ),
            4 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not-identical',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 67,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_result',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 67,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 67,
                  'char' => 28,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 67,
                  'char' => 71,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 67,
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
                      'variable' => 'result',
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 68,
                          'char' => 32,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_result',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 68,
                          'char' => 40,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 68,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 68,
                      'char' => 40,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 69,
                  'char' => 15,
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
                      'property' => '_result',
                      'expr' => 
                      array (
                        'type' => 'empty-array',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 69,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 69,
                      'char' => 36,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 70,
                  'char' => 18,
                ),
                2 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'result',
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 70,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 71,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 72,
              'char' => 14,
            ),
            5 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'false',
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 72,
                'char' => 21,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 73,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 58,
          'last-line' => 75,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'setData',
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
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 75,
              'char' => 42,
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
                  'variable' => '_documentClass',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 77,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'row',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 77,
                  'char' => 32,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 79,
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
                  'variable' => '_documentClass',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 79,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 79,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 79,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 79,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 80,
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
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 80,
                        'char' => 23,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 80,
                        'char' => 32,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 80,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 80,
                        'char' => 49,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_FLAT',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 80,
                        'char' => 49,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 80,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 80,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 80,
                  'char' => 52,
                ),
                'right' => 
                array (
                  'type' => 'array-access',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 80,
                      'char' => 59,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_options',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 80,
                      'char' => 68,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 80,
                    'char' => 68,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 80,
                      'char' => 85,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_FLAT',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 80,
                      'char' => 85,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 80,
                    'char' => 85,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 80,
                  'char' => 87,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 80,
                'char' => 87,
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
                      'property' => '_result',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'data',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 81,
                        'char' => 37,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 81,
                      'char' => 37,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 82,
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
                      'property' => '_result',
                      'expr' => 
                      array (
                        'type' => 'empty-array',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 83,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 83,
                      'char' => 36,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 84,
                  'char' => 14,
                ),
                1 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'identical',
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
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 84,
                          'char' => 21,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_options',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 84,
                          'char' => 30,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 84,
                        'char' => 30,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 84,
                          'char' => 47,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_TYPE',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 84,
                          'char' => 47,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 84,
                        'char' => 47,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 84,
                      'char' => 51,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'Collection',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 84,
                        'char' => 75,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'TYPE_EDGE',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 84,
                        'char' => 75,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 84,
                      'char' => 75,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 84,
                    'char' => 75,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'for',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'data',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 85,
                        'char' => 33,
                      ),
                      'value' => 'row',
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
                              'assign-type' => 'object-property-append',
                              'operator' => 'assign',
                              'variable' => 'this',
                              'property' => '_result',
                              'expr' => 
                              array (
                                'type' => 'scall',
                                'dynamic-class' => 0,
                                'class' => 'Edge',
                                'dynamic' => 0,
                                'name' => 'createFromArray',
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'row',
                                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                      'line' => 86,
                                      'char' => 68,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                    'line' => 86,
                                    'char' => 68,
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
                                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                        'line' => 86,
                                        'char' => 75,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => '_options',
                                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                        'line' => 86,
                                        'char' => 84,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                      'line' => 86,
                                      'char' => 84,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                    'line' => 86,
                                    'char' => 84,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                'line' => 86,
                                'char' => 85,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                              'line' => 86,
                              'char' => 85,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 87,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 88,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'for',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'data',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 89,
                        'char' => 33,
                      ),
                      'value' => 'row',
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
                              'assign-type' => 'object-property-append',
                              'operator' => 'assign',
                              'variable' => 'this',
                              'property' => '_result',
                              'expr' => 
                              array (
                                'type' => 'scall',
                                'dynamic-class' => 1,
                                'class' => '_documentClass',
                                'dynamic' => 0,
                                'name' => 'createFromArray',
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'row',
                                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                      'line' => 90,
                                      'char' => 80,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                    'line' => 90,
                                    'char' => 80,
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
                                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                        'line' => 90,
                                        'char' => 87,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => '_options',
                                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                        'line' => 90,
                                        'char' => 96,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                      'line' => 90,
                                      'char' => 96,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                    'line' => 90,
                                    'char' => 96,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                'line' => 90,
                                'char' => 97,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                              'line' => 90,
                              'char' => 97,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 91,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 92,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 93,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 94,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 75,
          'last-line' => 96,
          'char' => 22,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'fetchOutstanding',
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
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 98,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 98,
                  'char' => 27,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 100,
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
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 100,
                        'char' => 30,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_connection',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 100,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 100,
                      'char' => 43,
                    ),
                    'name' => 'put',
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
                                'type' => 'variable',
                                'value' => 'this',
                                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                                'line' => 100,
                                'char' => 53,
                              ),
                              'name' => 'url',
                              'call-type' => 1,
                              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                              'line' => 100,
                              'char' => 60,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '/',
                              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                              'line' => 100,
                              'char' => 66,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 100,
                            'char' => 66,
                          ),
                          'right' => 
                          array (
                            'type' => 'property-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                              'line' => 100,
                              'char' => 73,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_id',
                              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                              'line' => 100,
                              'char' => 77,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                            'line' => 100,
                            'char' => 77,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 100,
                          'char' => 77,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 100,
                        'char' => 77,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => '',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 100,
                          'char' => 81,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 100,
                        'char' => 81,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 100,
                    'char' => 82,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 100,
                  'char' => 82,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 101,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property-incr',
                  'variable' => 'this',
                  'property' => '_fetches',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 101,
                  'char' => 29,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 102,
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
                  'variable' => 'data',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 102,
                      'char' => 30,
                    ),
                    'name' => 'getJson',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 102,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 102,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 103,
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
                  'property' => '_hasMore',
                  'expr' => 
                  array (
                    'type' => 'cast',
                    'left' => 'bool',
                    'right' => 
                    array (
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'data',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 103,
                        'char' => 42,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 103,
                          'char' => 62,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_HASMORE',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 103,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 103,
                        'char' => 62,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 103,
                      'char' => 63,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 103,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 103,
                  'char' => 63,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 104,
              'char' => 12,
            ),
            5 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 104,
                  'char' => 14,
                ),
                'name' => 'setData',
                'call-type' => 1,
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
                        'value' => 'data',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 104,
                        'char' => 27,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 104,
                          'char' => 46,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_RESULT',
                          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                          'line' => 104,
                          'char' => 46,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 104,
                        'char' => 46,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 104,
                      'char' => 47,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 104,
                    'char' => 47,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 104,
                'char' => 48,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 105,
              'char' => 10,
            ),
            6 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not',
                'left' => 
                array (
                  'type' => 'list',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 105,
                      'char' => 19,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_hasMore',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 105,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 105,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 105,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 105,
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
                      'property' => '_id',
                      'expr' => 
                      array (
                        'type' => 'null',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 106,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 106,
                      'char' => 34,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 107,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 108,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 96,
          'last-line' => 110,
          'char' => 22,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'url',
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
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 112,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_options',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 112,
                      'char' => 32,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 112,
                    'char' => 32,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 112,
                      'char' => 52,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_BASEURL',
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 112,
                      'char' => 52,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 112,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 112,
                  'char' => 54,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 112,
                'char' => 54,
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
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 113,
                        'char' => 25,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 113,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 113,
                      'char' => 34,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 113,
                        'char' => 54,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_BASEURL',
                        'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                        'line' => 113,
                        'char' => 54,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                      'line' => 113,
                      'char' => 54,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 113,
                    'char' => 55,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 114,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 115,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'static-constant-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'Urls',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 115,
                  'char' => 32,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'URL_EXPORT',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 115,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 115,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 116,
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
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 111,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 111,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 110,
          'last-line' => 118,
          'char' => 22,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getFetches',
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
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 120,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_fetches',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 120,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 120,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 121,
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
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 119,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 119,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 118,
          'last-line' => 123,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getId',
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
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 125,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_id',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 125,
                  'char' => 25,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 125,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 126,
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
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 124,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 124,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 123,
          'last-line' => 128,
          'char' => 19,
        ),
        9 => 
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
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 128,
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
                    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                    'line' => 130,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 130,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 131,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 131,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
              'line' => 132,
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
                  'value' => 'ExportCursor',
                  'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                  'line' => 129,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
                'line' => 129,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 129,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 128,
          'last-line' => 134,
          'char' => 19,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_ID',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'id',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 13,
            'char' => 26,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 14,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_HASMORE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'hasMore',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 14,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 15,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_RESULT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'result',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 15,
            'char' => 34,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 16,
          'char' => 9,
        ),
        3 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_FLAT',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_flat',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 16,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 17,
          'char' => 9,
        ),
        4 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_COUNT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'count',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 17,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 18,
          'char' => 9,
        ),
        5 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_TYPE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'type',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 18,
            'char' => 30,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 19,
          'char' => 9,
        ),
        6 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_BASEURL',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'baseurl',
            'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
            'line' => 19,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
          'line' => 20,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/exportcursor.zep',
    'line' => 3,
    'char' => 5,
  ),
);