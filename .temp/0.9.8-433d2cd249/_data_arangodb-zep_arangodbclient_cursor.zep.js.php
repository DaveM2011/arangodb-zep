<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Cursor',
    'abstract' => 0,
    'final' => 0,
    'implements' => 
    array (
      0 => 
      array (
        'type' => 'variable',
        'value' => '\\Iterator',
        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
        'line' => 4,
        'char' => 1,
      ),
    ),
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
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'name' => 'data',
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'name' => '_hasMore',
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'name' => '_id',
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'name' => '_position',
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'name' => '_length',
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'name' => '_fullCount',
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
          'name' => '_extra',
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 15,
          'char' => 13,
        ),
        10 => 
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
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 15,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 16,
          'char' => 13,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_cached',
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 17,
          'char' => 13,
        ),
        12 => 
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
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 17,
            'char' => 60,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 18,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 30,
                'char' => 55,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 30,
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 30,
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 30,
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 32,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 32,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 33,
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 33,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 33,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 34,
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 34,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 34,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 35,
              'char' => 11,
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
                  'property' => '_extra',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 35,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 35,
                  'char' => 31,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 36,
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
                  'property' => '_cached',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 36,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 36,
                  'char' => 35,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 37,
              'char' => 10,
            ),
            5 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 37,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 37,
                      'char' => 37,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_ID',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 37,
                      'char' => 37,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 37,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 37,
                  'char' => 39,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 37,
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
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 38,
                          'char' => 33,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 38,
                            'char' => 48,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_ID',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 38,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 38,
                          'char' => 48,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 38,
                        'char' => 49,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 38,
                      'char' => 49,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 39,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 40,
              'char' => 10,
            ),
            6 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 40,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 40,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_EXTRA',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 40,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 40,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 40,
                  'char' => 42,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 40,
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
                      'assign-type' => 'object-property',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_extra',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 41,
                          'char' => 36,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 41,
                            'char' => 54,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_EXTRA',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 41,
                            'char' => 54,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 41,
                          'char' => 54,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 41,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 41,
                      'char' => 55,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 42,
                  'char' => 14,
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
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 42,
                            'char' => 27,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_extra',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 42,
                            'char' => 34,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 42,
                          'char' => 34,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 42,
                            'char' => 52,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_STATS',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 42,
                            'char' => 52,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 42,
                          'char' => 52,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 42,
                        'char' => 53,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 42,
                          'char' => 70,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'FULL_COUNT',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 42,
                          'char' => 70,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 42,
                        'char' => 70,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 42,
                      'char' => 72,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 42,
                    'char' => 72,
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
                          'property' => '_fullCount',
                          'expr' => 
                          array (
                            'type' => 'array-access',
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
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 43,
                                  'char' => 45,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_extra',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 43,
                                  'char' => 52,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 43,
                                'char' => 52,
                              ),
                              'right' => 
                              array (
                                'type' => 'static-constant-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 43,
                                  'char' => 70,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'ENTRY_STATS',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 43,
                                  'char' => 70,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 43,
                                'char' => 70,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 43,
                              'char' => 71,
                            ),
                            'right' => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'self',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 43,
                                'char' => 88,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'FULL_COUNT',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 43,
                                'char' => 88,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 43,
                              'char' => 88,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 43,
                            'char' => 89,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 43,
                          'char' => 89,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 44,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 45,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 46,
              'char' => 10,
            ),
            7 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 46,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 46,
                      'char' => 41,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_CACHED',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 46,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 46,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 46,
                  'char' => 43,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 46,
                'char' => 43,
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
                      'property' => '_cached',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 47,
                          'char' => 37,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 47,
                            'char' => 56,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_CACHED',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 47,
                            'char' => 56,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 47,
                          'char' => 56,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 47,
                        'char' => 57,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 47,
                      'char' => 57,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 48,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 50,
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 50,
                        'char' => 42,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 50,
                          'char' => 62,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_HASMORE',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 50,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 50,
                        'char' => 62,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 50,
                      'char' => 63,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 50,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 50,
                  'char' => 63,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 51,
              'char' => 10,
            ),
            9 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 51,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'string',
                    'value' => '_documentClass',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 51,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 51,
                  'char' => 44,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 51,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 52,
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 52,
                            'char' => 43,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => '_documentClass',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 52,
                            'char' => 60,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 52,
                          'char' => 61,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 52,
                        'char' => 61,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 52,
                    'char' => 62,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 53,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 54,
              'char' => 11,
            ),
            10 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'array-index',
                  'operator' => 'assign',
                  'variable' => 'options',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => '_isNew',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 54,
                      'char' => 29,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 54,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 54,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 55,
              'char' => 11,
            ),
            11 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 55,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 55,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 56,
              'char' => 11,
            ),
            12 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 56,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 56,
                  'char' => 32,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 57,
              'char' => 12,
            ),
            13 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 57,
                  'char' => 14,
                ),
                'name' => 'add',
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
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 57,
                          'char' => 31,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 57,
                            'char' => 50,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_RESULT',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 57,
                            'char' => 50,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 57,
                          'char' => 50,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 57,
                        'char' => 51,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 57,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 57,
                    'char' => 51,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 57,
                'char' => 52,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 58,
              'char' => 12,
            ),
            14 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 58,
                  'char' => 14,
                ),
                'name' => 'updateLength',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 58,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 59,
              'char' => 12,
            ),
            15 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 59,
                  'char' => 14,
                ),
                'name' => 'rewind',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 59,
                'char' => 23,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 60,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 31,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 30,
          'last-line' => 62,
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
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 64,
                  'char' => 53,
                ),
                1 => 
                array (
                  'variable' => 'e',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 64,
                  'char' => 56,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 66,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 66,
                  'char' => 17,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_id',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 66,
                  'char' => 22,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 66,
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 68,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 68,
                          'char' => 66,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 69,
                      'char' => 20,
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 69,
                            'char' => 22,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_connection',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 69,
                            'char' => 35,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 69,
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
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 69,
                                    'char' => 48,
                                  ),
                                  'name' => 'url',
                                  'call-type' => 1,
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 69,
                                  'char' => 55,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => '/',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 69,
                                  'char' => 61,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 69,
                                'char' => 61,
                              ),
                              'right' => 
                              array (
                                'type' => 'property-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'this',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 69,
                                  'char' => 68,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_id',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 69,
                                  'char' => 72,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 69,
                                'char' => 72,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 69,
                              'char' => 72,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 69,
                            'char' => 72,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 69,
                              'char' => 114,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 69,
                            'char' => 114,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 69,
                        'char' => 115,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 70,
                      'char' => 22,
                    ),
                    2 => 
                    array (
                      'type' => 'return',
                      'expr' => 
                      array (
                        'type' => 'bool',
                        'value' => 'true',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 70,
                        'char' => 28,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 71,
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
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 71,
                          'char' => 30,
                        ),
                      ),
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'e',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 74,
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 72,
                            'char' => 24,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 73,
                          'char' => 13,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 74,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 74,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 75,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'false',
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 75,
                'char' => 21,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
                'data-type' => 'bool',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 63,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 63,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 62,
          'last-line' => 78,
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
              'type' => 'while',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 80,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_hasMore',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 80,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 80,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 80,
                'char' => 32,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 81,
                      'char' => 18,
                    ),
                    'name' => 'fetchOutstanding',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 81,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 82,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 83,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 83,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_length',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 83,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 83,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
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
                'data-type' => 'int',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 79,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 79,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 78,
          'last-line' => 86,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getFullCount',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 88,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_fullCount',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 88,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 88,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 89,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 87,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 87,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 86,
          'last-line' => 91,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getCached',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 93,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_cached',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 93,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 93,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 94,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 92,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 92,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 91,
          'last-line' => 96,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getAll',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'while',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 98,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_hasMore',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 98,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 98,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 98,
                'char' => 32,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 99,
                      'char' => 18,
                    ),
                    'name' => 'fetchOutstanding',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 99,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 100,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 101,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 101,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_result',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 101,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 101,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 102,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 97,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 97,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 96,
          'last-line' => 104,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'rewind',
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
                  'property' => '_position',
                  'expr' => 
                  array (
                    'type' => 'int',
                    'value' => '0',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 106,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 106,
                  'char' => 32,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 107,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 104,
          'last-line' => 109,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'current',
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 111,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_result',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 111,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 111,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 111,
                    'char' => 35,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_position',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 111,
                    'char' => 45,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 111,
                  'char' => 45,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 111,
                'char' => 46,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 112,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 110,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 110,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 109,
          'last-line' => 114,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'key',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 116,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_position',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 116,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 116,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 117,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 115,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 115,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 114,
          'last-line' => 119,
          'char' => 19,
        ),
        9 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'next',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property-incr',
                  'variable' => 'this',
                  'property' => '_position',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 121,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 122,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 119,
          'last-line' => 124,
          'char' => 19,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'valid',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'less-equal',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 126,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_position',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 126,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 126,
                  'char' => 28,
                ),
                'right' => 
                array (
                  'type' => 'sub',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 126,
                      'char' => 35,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_length',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 126,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 126,
                    'char' => 44,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '1',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 126,
                    'char' => 48,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 126,
                  'char' => 48,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 126,
                'char' => 48,
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 127,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 128,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 129,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'or',
                'left' => 
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 129,
                        'char' => 19,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_hasMore',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 129,
                        'char' => 28,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 129,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 129,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 129,
                  'char' => 31,
                ),
                'right' => 
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 129,
                        'char' => 40,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_id',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 129,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 129,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 129,
                    'char' => 46,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 129,
                  'char' => 46,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 129,
                'char' => 46,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 130,
                    'char' => 25,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 131,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 132,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 132,
                  'char' => 14,
                ),
                'name' => 'fetchOutstanding',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 132,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 133,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'less-equal',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 133,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_position',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 133,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 133,
                  'char' => 32,
                ),
                'right' => 
                array (
                  'type' => 'sub',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 133,
                      'char' => 39,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_length',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 133,
                      'char' => 48,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 133,
                    'char' => 48,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '1',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 133,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 133,
                  'char' => 51,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 133,
                'char' => 51,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 134,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 125,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 125,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 124,
          'last-line' => 136,
          'char' => 19,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'add',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 136,
              'char' => 38,
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
                  'variable' => 'row',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 138,
                  'char' => 16,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 140,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 140,
                  'char' => 25,
                ),
                'name' => 'sanitize',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'data',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 140,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 140,
                    'char' => 39,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 140,
                'char' => 41,
              ),
              'value' => 'row',
              'reverse' => 0,
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
                      'type' => 'not',
                      'left' => 
                      array (
                        'type' => 'list',
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
                                'value' => 'row',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 141,
                                'char' => 30,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 141,
                              'char' => 30,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 141,
                          'char' => 31,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 141,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 141,
                      'char' => 34,
                    ),
                    'right' => 
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
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 141,
                              'char' => 47,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_options',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 141,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 141,
                            'char' => 56,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 141,
                              'char' => 73,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_FLAT',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 141,
                              'char' => 73,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 141,
                            'char' => 73,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 141,
                          'char' => 76,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 141,
                        'char' => 76,
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 141,
                            'char' => 83,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_options',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 141,
                            'char' => 92,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 141,
                          'char' => 92,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 141,
                            'char' => 109,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_FLAT',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 141,
                            'char' => 109,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 141,
                          'char' => 109,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 141,
                        'char' => 111,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 141,
                      'char' => 111,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 141,
                    'char' => 111,
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
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 142,
                          'char' => 22,
                        ),
                        'name' => 'addFlatFromArray',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'row',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 142,
                              'char' => 43,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 142,
                            'char' => 43,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 142,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 143,
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
                        'type' => 'not',
                        'left' => 
                        array (
                          'type' => 'list',
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
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 144,
                                  'char' => 33,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_options',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 144,
                                  'char' => 42,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 144,
                                'char' => 42,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'objectType',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 144,
                                'char' => 55,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 144,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 144,
                            'char' => 56,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 144,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 144,
                        'char' => 58,
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
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 145,
                              'char' => 26,
                            ),
                            'name' => 'addDocumentsFromArray',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'row',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 145,
                                  'char' => 52,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 145,
                                'char' => 52,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 145,
                            'char' => 53,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 146,
                          'char' => 17,
                        ),
                      ),
                      'else_statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'switch',
                          'expr' => 
                          array (
                            'type' => 'list',
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
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 147,
                                  'char' => 34,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_options',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 147,
                                  'char' => 43,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 147,
                                'char' => 43,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'objectType',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 147,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 147,
                              'char' => 57,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 147,
                            'char' => 59,
                          ),
                          'clauses' => 
                          array (
                            0 => 
                            array (
                              'type' => 'case',
                              'expr' => 
                              array (
                                'type' => 'string',
                                'value' => 'edge',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 148,
                                'char' => 36,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 149,
                                      'char' => 34,
                                    ),
                                    'name' => 'addEdgesFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 149,
                                          'char' => 56,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 149,
                                        'char' => 56,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 149,
                                    'char' => 57,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 150,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 151,
                                  'char' => 28,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 151,
                              'char' => 28,
                            ),
                            1 => 
                            array (
                              'type' => 'case',
                              'expr' => 
                              array (
                                'type' => 'string',
                                'value' => 'vertex',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 151,
                                'char' => 38,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 152,
                                      'char' => 34,
                                    ),
                                    'name' => 'addVerticesFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 152,
                                          'char' => 59,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 152,
                                        'char' => 59,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 152,
                                    'char' => 60,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 153,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 154,
                                  'char' => 28,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 154,
                              'char' => 28,
                            ),
                            2 => 
                            array (
                              'type' => 'case',
                              'expr' => 
                              array (
                                'type' => 'string',
                                'value' => 'path',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 154,
                                'char' => 36,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 155,
                                      'char' => 34,
                                    ),
                                    'name' => 'addPathsFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 155,
                                          'char' => 56,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 155,
                                        'char' => 56,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 155,
                                    'char' => 57,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 156,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 157,
                                  'char' => 28,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 157,
                              'char' => 28,
                            ),
                            3 => 
                            array (
                              'type' => 'case',
                              'expr' => 
                              array (
                                'type' => 'string',
                                'value' => 'shortestPath',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 157,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 158,
                                      'char' => 34,
                                    ),
                                    'name' => 'addShortestPathFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 158,
                                          'char' => 63,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 158,
                                        'char' => 63,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 158,
                                    'char' => 64,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 159,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 160,
                                  'char' => 28,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 160,
                              'char' => 28,
                            ),
                            4 => 
                            array (
                              'type' => 'case',
                              'expr' => 
                              array (
                                'type' => 'string',
                                'value' => 'distanceTo',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 160,
                                'char' => 42,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 161,
                                      'char' => 34,
                                    ),
                                    'name' => 'addDistanceToFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 161,
                                          'char' => 61,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 161,
                                        'char' => 61,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 161,
                                    'char' => 62,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 162,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 163,
                                  'char' => 28,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 163,
                              'char' => 28,
                            ),
                            5 => 
                            array (
                              'type' => 'case',
                              'expr' => 
                              array (
                                'type' => 'string',
                                'value' => 'commonNeighbors',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 163,
                                'char' => 47,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 164,
                                      'char' => 34,
                                    ),
                                    'name' => 'addCommonNeighborsFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 164,
                                          'char' => 66,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 164,
                                        'char' => 66,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 164,
                                    'char' => 67,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 165,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 166,
                                  'char' => 28,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 166,
                              'char' => 28,
                            ),
                            6 => 
                            array (
                              'type' => 'case',
                              'expr' => 
                              array (
                                'type' => 'string',
                                'value' => 'commonProperties',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 166,
                                'char' => 48,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 167,
                                      'char' => 34,
                                    ),
                                    'name' => 'addCommonPropertiesFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 167,
                                          'char' => 67,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 167,
                                        'char' => 67,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 167,
                                    'char' => 68,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 168,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 169,
                                  'char' => 28,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 169,
                              'char' => 28,
                            ),
                            7 => 
                            array (
                              'type' => 'case',
                              'expr' => 
                              array (
                                'type' => 'string',
                                'value' => 'figure',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 169,
                                'char' => 38,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 170,
                                      'char' => 34,
                                    ),
                                    'name' => 'addFigureFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 170,
                                          'char' => 57,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 170,
                                        'char' => 57,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 170,
                                    'char' => 58,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 171,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 172,
                                  'char' => 31,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 172,
                              'char' => 31,
                            ),
                            8 => 
                            array (
                              'type' => 'default',
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
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 173,
                                      'char' => 34,
                                    ),
                                    'name' => 'addDocumentsFromArray',
                                    'call-type' => 1,
                                    'parameters' => 
                                    array (
                                      0 => 
                                      array (
                                        'parameter' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'row',
                                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                          'line' => 173,
                                          'char' => 60,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                        'line' => 173,
                                        'char' => 60,
                                      ),
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 173,
                                    'char' => 61,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 174,
                                  'char' => 33,
                                ),
                                1 => 
                                array (
                                  'type' => 'break',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 175,
                                  'char' => 21,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 175,
                              'char' => 21,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 176,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 177,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 178,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 179,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 136,
          'last-line' => 181,
          'char' => 22,
        ),
        12 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addFlatFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 181,
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
                  'assign-type' => 'object-property-append',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_result',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'data',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 183,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 183,
                  'char' => 35,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 184,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 181,
          'last-line' => 186,
          'char' => 22,
        ),
        13 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addDocumentsFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 186,
              'char' => 56,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 188,
                  'char' => 27,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 190,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 190,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 190,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 190,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 190,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 191,
              'char' => 11,
            ),
            2 => 
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
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 191,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 191,
                        'char' => 69,
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 191,
                            'char' => 76,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_options',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 191,
                            'char' => 85,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 191,
                          'char' => 85,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 191,
                        'char' => 85,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 191,
                    'char' => 86,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 191,
                  'char' => 86,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 192,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 186,
          'last-line' => 194,
          'char' => 22,
        ),
        14 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addPathsFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 194,
              'char' => 52,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 196,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'entry',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 196,
                  'char' => 34,
                ),
                2 => 
                array (
                  'variable' => 'v',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 196,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 198,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 198,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 198,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 198,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 198,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 199,
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
                  'variable' => 'entry',
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
                          'value' => 'vertices',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 199,
                          'char' => 34,
                        ),
                        'value' => 
                        array (
                          'type' => 'empty-array',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 199,
                          'char' => 38,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 199,
                        'char' => 38,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'edges',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 199,
                          'char' => 48,
                        ),
                        'value' => 
                        array (
                          'type' => 'empty-array',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 199,
                          'char' => 52,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 199,
                        'char' => 52,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'source',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 199,
                          'char' => 63,
                        ),
                        'value' => 
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
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'data',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 199,
                                  'char' => 103,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'source',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 199,
                                  'char' => 112,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 199,
                                'char' => 113,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 199,
                              'char' => 113,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 199,
                                  'char' => 120,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_options',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 199,
                                  'char' => 129,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 199,
                                'char' => 129,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 199,
                              'char' => 129,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 199,
                          'char' => 130,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 199,
                        'char' => 130,
                      ),
                      3 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'destination',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 199,
                          'char' => 146,
                        ),
                        'value' => 
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
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'data',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 199,
                                  'char' => 186,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'destination',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 199,
                                  'char' => 200,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 199,
                                'char' => 201,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 199,
                              'char' => 201,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 199,
                                  'char' => 208,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_options',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 199,
                                  'char' => 217,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 199,
                                'char' => 217,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 199,
                              'char' => 217,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 199,
                          'char' => 218,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 199,
                        'char' => 218,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 199,
                    'char' => 219,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 199,
                  'char' => 219,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 200,
              'char' => 11,
            ),
            3 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'array-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 200,
                  'char' => 22,
                ),
                'right' => 
                array (
                  'type' => 'string',
                  'value' => 'vertices',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 200,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 200,
                'char' => 35,
              ),
              'value' => 'v',
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
                      'assign-type' => 'array-index-append',
                      'operator' => 'assign',
                      'variable' => 'entry',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'string',
                          'value' => 'vertices',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 201,
                          'char' => 33,
                        ),
                      ),
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
                              'value' => 'v',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 201,
                              'char' => 74,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 201,
                            'char' => 74,
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
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 201,
                                'char' => 81,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_options',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 201,
                                'char' => 90,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 201,
                              'char' => 90,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 201,
                            'char' => 90,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 201,
                        'char' => 91,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 201,
                      'char' => 91,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 202,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 203,
              'char' => 11,
            ),
            4 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'array-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 203,
                  'char' => 22,
                ),
                'right' => 
                array (
                  'type' => 'string',
                  'value' => 'edges',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 203,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 203,
                'char' => 32,
              ),
              'value' => 'v',
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
                      'assign-type' => 'array-index-append',
                      'operator' => 'assign',
                      'variable' => 'entry',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'string',
                          'value' => 'edges',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 204,
                          'char' => 30,
                        ),
                      ),
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
                              'value' => 'v',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 204,
                              'char' => 59,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 204,
                            'char' => 59,
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
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 204,
                                'char' => 66,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_options',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 204,
                                'char' => 75,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 204,
                              'char' => 75,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 204,
                            'char' => 75,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 204,
                        'char' => 76,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 204,
                      'char' => 76,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 205,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 206,
              'char' => 11,
            ),
            5 => 
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
                    'type' => 'variable',
                    'value' => 'entry',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 206,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 206,
                  'char' => 36,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 207,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 194,
          'last-line' => 209,
          'char' => 22,
        ),
        15 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addShortestPathFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 209,
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
                  'variable' => '_documentClass',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 211,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'vertices',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 211,
                  'char' => 37,
                ),
                2 => 
                array (
                  'variable' => 'startVertex',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 211,
                  'char' => 50,
                ),
                3 => 
                array (
                  'variable' => 'destination',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 211,
                  'char' => 63,
                ),
                4 => 
                array (
                  'variable' => 'entry',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 211,
                  'char' => 70,
                ),
                5 => 
                array (
                  'variable' => 'path',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 211,
                  'char' => 76,
                ),
                6 => 
                array (
                  'variable' => 'v',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 211,
                  'char' => 79,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 213,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 213,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 213,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 213,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 213,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 214,
              'char' => 10,
            ),
            2 => 
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
                    'type' => 'isset',
                    'left' => 
                    array (
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'data',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 214,
                        'char' => 24,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => 'vertices',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 214,
                        'char' => 35,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 214,
                      'char' => 36,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 214,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 214,
                  'char' => 38,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 214,
                'char' => 38,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 216,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 217,
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
                  'variable' => 'vertices',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'data',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 217,
                      'char' => 28,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => 'vertices',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 217,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 217,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 217,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 218,
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
                  'variable' => 'startVertex',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'vertices',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 218,
                      'char' => 35,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '0',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 218,
                      'char' => 37,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 218,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 218,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 219,
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
                  'variable' => 'destination',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'vertices',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 219,
                      'char' => 35,
                    ),
                    'right' => 
                    array (
                      'type' => 'sub',
                      'left' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'count',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'vertices',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 219,
                              'char' => 50,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 219,
                            'char' => 50,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 219,
                        'char' => 52,
                      ),
                      'right' => 
                      array (
                        'type' => 'int',
                        'value' => '1',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 219,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 219,
                      'char' => 55,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 219,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 219,
                  'char' => 56,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 220,
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
                  'variable' => 'entry',
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
                          'value' => 'paths',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 220,
                          'char' => 31,
                        ),
                        'value' => 
                        array (
                          'type' => 'empty-array',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 220,
                          'char' => 35,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 220,
                        'char' => 35,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'source',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 220,
                          'char' => 46,
                        ),
                        'value' => 
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
                                'value' => 'startVertex',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 220,
                                'char' => 93,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 220,
                              'char' => 93,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 220,
                                  'char' => 100,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_options',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 220,
                                  'char' => 109,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 220,
                                'char' => 109,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 220,
                              'char' => 109,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 220,
                          'char' => 110,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 220,
                        'char' => 110,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'distance',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 220,
                          'char' => 123,
                        ),
                        'value' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'data',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 220,
                            'char' => 129,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => 'distance',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 220,
                            'char' => 140,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 220,
                          'char' => 141,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 220,
                        'char' => 141,
                      ),
                      3 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'destination',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 220,
                          'char' => 157,
                        ),
                        'value' => 
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
                                'value' => 'destination',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 220,
                                'char' => 204,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 220,
                              'char' => 204,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 220,
                                  'char' => 211,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_options',
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 220,
                                  'char' => 220,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 220,
                                'char' => 220,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 220,
                              'char' => 220,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 220,
                          'char' => 221,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 220,
                        'char' => 221,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 220,
                    'char' => 222,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 220,
                  'char' => 222,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 221,
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
                  'variable' => 'path',
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
                          'value' => 'vertices',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 221,
                          'char' => 33,
                        ),
                        'value' => 
                        array (
                          'type' => 'empty-array',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 221,
                          'char' => 37,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 221,
                        'char' => 37,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'edges',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 221,
                          'char' => 47,
                        ),
                        'value' => 
                        array (
                          'type' => 'empty-array',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 221,
                          'char' => 51,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 221,
                        'char' => 51,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 221,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 221,
                  'char' => 52,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 222,
              'char' => 11,
            ),
            8 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'array-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 222,
                  'char' => 22,
                ),
                'right' => 
                array (
                  'type' => 'string',
                  'value' => 'vertices',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 222,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 222,
                'char' => 35,
              ),
              'value' => 'v',
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
                      'assign-type' => 'array-index-append',
                      'operator' => 'assign',
                      'variable' => 'path',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'string',
                          'value' => 'vertices',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 223,
                          'char' => 32,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'v',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 223,
                        'char' => 39,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 223,
                      'char' => 39,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 224,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 225,
              'char' => 11,
            ),
            9 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'array-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 225,
                  'char' => 22,
                ),
                'right' => 
                array (
                  'type' => 'string',
                  'value' => 'edges',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 225,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 225,
                'char' => 32,
              ),
              'value' => 'v',
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
                      'assign-type' => 'array-index-append',
                      'operator' => 'assign',
                      'variable' => 'path',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'string',
                          'value' => 'edges',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 226,
                          'char' => 29,
                        ),
                      ),
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
                              'value' => 'v',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 226,
                              'char' => 58,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 226,
                            'char' => 58,
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
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 226,
                                'char' => 65,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_options',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 226,
                                'char' => 74,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 226,
                              'char' => 74,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 226,
                            'char' => 74,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 226,
                        'char' => 75,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 226,
                      'char' => 75,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 227,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 228,
              'char' => 11,
            ),
            10 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'array-index-append',
                  'operator' => 'assign',
                  'variable' => 'entry',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => 'paths',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 228,
                      'char' => 26,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'path',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 228,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 228,
                  'char' => 36,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 229,
              'char' => 11,
            ),
            11 => 
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
                    'type' => 'variable',
                    'value' => 'entry',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 229,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 229,
                  'char' => 36,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 230,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 209,
          'last-line' => 232,
          'char' => 22,
        ),
        16 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addDistanceToFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 232,
              'char' => 57,
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
                  'variable' => 'entry',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 234,
                  'char' => 18,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 236,
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
                  'variable' => 'entry',
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
                          'value' => 'source',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 236,
                          'char' => 32,
                        ),
                        'value' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'data',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 236,
                            'char' => 38,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => 'startVertex',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 236,
                            'char' => 52,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 236,
                          'char' => 53,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 236,
                        'char' => 53,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'distance',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 236,
                          'char' => 66,
                        ),
                        'value' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'data',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 236,
                            'char' => 72,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => 'distance',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 236,
                            'char' => 83,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 236,
                          'char' => 84,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 236,
                        'char' => 84,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'destination',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 236,
                          'char' => 100,
                        ),
                        'value' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'data',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 236,
                            'char' => 106,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => 'vertex',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 236,
                            'char' => 115,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 236,
                          'char' => 116,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 236,
                        'char' => 116,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 236,
                    'char' => 117,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 236,
                  'char' => 117,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 237,
              'char' => 11,
            ),
            2 => 
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
                    'type' => 'variable',
                    'value' => 'entry',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 237,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 237,
                  'char' => 36,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 238,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 232,
          'last-line' => 240,
          'char' => 22,
        ),
        17 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addCommonNeighborsFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 240,
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
                  'variable' => '_documentClass',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 242,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'left',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 242,
                  'char' => 33,
                ),
                2 => 
                array (
                  'variable' => 'right',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 242,
                  'char' => 40,
                ),
                3 => 
                array (
                  'variable' => 'neighbor',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 242,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 244,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 244,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 244,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 244,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 244,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 245,
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
                  'variable' => 'left',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'data',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 245,
                      'char' => 24,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => 'left',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 245,
                      'char' => 31,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 245,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 245,
                  'char' => 32,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 246,
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
                  'variable' => 'right',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'data',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 246,
                      'char' => 25,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => 'right',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 246,
                      'char' => 33,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 246,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 246,
                  'char' => 34,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 247,
              'char' => 10,
            ),
            4 => 
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
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 247,
                          'char' => 25,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_result',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 247,
                          'char' => 33,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 247,
                        'char' => 33,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'left',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 247,
                        'char' => 38,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 247,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 247,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 247,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 247,
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
                      'assign-type' => 'object-property-array-index',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_result',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'variable',
                          'value' => 'left',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 248,
                          'char' => 35,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'empty-array',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 248,
                        'char' => 42,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 248,
                      'char' => 42,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 249,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 250,
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
                  'type' => 'list',
                  'left' => 
                  array (
                    'type' => 'isset',
                    'left' => 
                    array (
                      'type' => 'array-access',
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 250,
                            'char' => 25,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_result',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 250,
                            'char' => 33,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 250,
                          'char' => 33,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'left',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 250,
                          'char' => 38,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 250,
                        'char' => 39,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'right',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 250,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 250,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 250,
                    'char' => 46,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 250,
                  'char' => 48,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 250,
                'char' => 48,
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
                      'assign-type' => 'object-property-array-index',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_result',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'variable',
                          'value' => 'left',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 251,
                          'char' => 35,
                        ),
                        1 => 
                        array (
                          'type' => 'variable',
                          'value' => 'right',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 251,
                          'char' => 42,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'empty-array',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 251,
                        'char' => 49,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 251,
                      'char' => 49,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 252,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 253,
              'char' => 11,
            ),
            6 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'array-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 253,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'string',
                  'value' => 'neighbors',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 253,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 253,
                'char' => 43,
              ),
              'value' => 'neighbor',
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
                      'assign-type' => 'object-property-array-index-append',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_result',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'variable',
                          'value' => 'left',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 254,
                          'char' => 35,
                        ),
                        1 => 
                        array (
                          'type' => 'variable',
                          'value' => 'right',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 254,
                          'char' => 42,
                        ),
                      ),
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
                              'value' => 'neighbor',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 254,
                              'char' => 90,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 254,
                            'char' => 90,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 254,
                        'char' => 91,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 254,
                      'char' => 91,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 255,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 256,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 240,
          'last-line' => 258,
          'char' => 22,
        ),
        18 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addCommonPropertiesFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 258,
              'char' => 63,
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
                  'variable' => 'k',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 260,
                  'char' => 14,
                ),
                1 => 
                array (
                  'variable' => 'c',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 260,
                  'char' => 17,
                ),
                2 => 
                array (
                  'variable' => 'id',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 260,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 262,
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
                  'variable' => 'k',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'array_keys',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 262,
                          'char' => 33,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 262,
                        'char' => 33,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 262,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 262,
                  'char' => 34,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 263,
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
                  'variable' => 'k',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'k',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 263,
                      'char' => 18,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '0',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 263,
                      'char' => 20,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 263,
                    'char' => 21,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 263,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 264,
              'char' => 11,
            ),
            3 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property-array-index',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_result',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'variable',
                      'value' => 'k',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 264,
                      'char' => 28,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 264,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 264,
                  'char' => 35,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 265,
              'char' => 11,
            ),
            4 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'array-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 265,
                  'char' => 22,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'k',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 265,
                  'char' => 24,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 265,
                'char' => 26,
              ),
              'value' => 'c',
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
                      'operator' => 'assign',
                      'variable' => 'id',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'c',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 266,
                          'char' => 23,
                        ),
                        'right' => 
                        array (
                          'type' => 'string',
                          'value' => '_id',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 266,
                          'char' => 29,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 266,
                        'char' => 30,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 266,
                      'char' => 30,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 267,
                  'char' => 17,
                ),
                1 => 
                array (
                  'type' => 'unset',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'c',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 267,
                      'char' => 20,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => '_id',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 267,
                      'char' => 26,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 267,
                    'char' => 27,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 269,
                  'char' => 15,
                ),
                2 => 
                array (
                  'type' => 'let',
                  'assignments' => 
                  array (
                    0 => 
                    array (
                      'assign-type' => 'object-property-array-index',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_result',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'variable',
                          'value' => 'k',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 269,
                          'char' => 32,
                        ),
                        1 => 
                        array (
                          'type' => 'variable',
                          'value' => 'id',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 269,
                          'char' => 36,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'c',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 269,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 269,
                      'char' => 41,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 270,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 271,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 258,
          'last-line' => 273,
          'char' => 22,
        ),
        19 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addFigureFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 273,
              'char' => 53,
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
                  'property' => '_result',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'data',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 275,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 275,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 276,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 273,
          'last-line' => 278,
          'char' => 22,
        ),
        20 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addEdgesFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 278,
              'char' => 52,
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
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 280,
                          'char' => 57,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 280,
                        'char' => 57,
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 280,
                            'char' => 64,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_options',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 280,
                            'char' => 73,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 280,
                          'char' => 73,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 280,
                        'char' => 73,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 280,
                    'char' => 74,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 280,
                  'char' => 74,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 281,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 278,
          'last-line' => 283,
          'char' => 22,
        ),
        21 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'addVerticesFromArray',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 283,
              'char' => 55,
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
                  'assign-type' => 'object-property-append',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_result',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'Vertex',
                    'dynamic' => 0,
                    'name' => 'createFromArray',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 285,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 285,
                        'char' => 59,
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 285,
                            'char' => 66,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_options',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 285,
                            'char' => 75,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 285,
                          'char' => 75,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 285,
                        'char' => 75,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 285,
                    'char' => 76,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 285,
                  'char' => 76,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 286,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 283,
          'last-line' => 288,
          'char' => 22,
        ),
        22 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'sanitize',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'rows',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 288,
              'char' => 43,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 290,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 290,
                  'char' => 32,
                ),
                2 => 
                array (
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 290,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 292,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 292,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 292,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 292,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 292,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 293,
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 293,
                        'char' => 23,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 293,
                        'char' => 32,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 293,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 293,
                        'char' => 53,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_SANITIZE',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 293,
                        'char' => 53,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 293,
                      'char' => 53,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 293,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 293,
                  'char' => 56,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 293,
                      'char' => 63,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_options',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 293,
                      'char' => 72,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 293,
                    'char' => 72,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 293,
                      'char' => 93,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_SANITIZE',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 293,
                      'char' => 93,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 293,
                    'char' => 93,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 293,
                  'char' => 95,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 293,
                'char' => 95,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'for',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'rows',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 294,
                    'char' => 36,
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
                                'value' => 'value',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 295,
                                'char' => 34,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 295,
                              'char' => 34,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 295,
                          'char' => 37,
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
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 295,
                              'char' => 50,
                            ),
                            'right' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'constant',
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
                                      'type' => 'variable',
                                      'value' => '_documentClass',
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 295,
                                      'char' => 75,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'string',
                                      'value' => '::ENTRY_ID',
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 295,
                                      'char' => 89,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 295,
                                    'char' => 89,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 295,
                                  'char' => 89,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 295,
                              'char' => 90,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 295,
                            'char' => 92,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 295,
                          'char' => 92,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 295,
                        'char' => 92,
                      ),
                      'statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'unset',
                          'expr' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'rows',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 296,
                                'char' => 31,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'key',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 296,
                                'char' => 35,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 296,
                              'char' => 36,
                            ),
                            'right' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'constant',
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
                                      'type' => 'variable',
                                      'value' => '_documentClass',
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 296,
                                      'char' => 61,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'string',
                                      'value' => '::ENTRY_ID',
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 296,
                                      'char' => 75,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 296,
                                    'char' => 75,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 296,
                                  'char' => 75,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 296,
                              'char' => 76,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 296,
                            'char' => 77,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 298,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 299,
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
                                'value' => 'value',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 299,
                                'char' => 34,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 299,
                              'char' => 34,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 299,
                          'char' => 37,
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
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 299,
                              'char' => 50,
                            ),
                            'right' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'constant',
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
                                      'type' => 'variable',
                                      'value' => '_documentClass',
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 299,
                                      'char' => 75,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'string',
                                      'value' => '::ENTRY_REV',
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 299,
                                      'char' => 90,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 299,
                                    'char' => 90,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 299,
                                  'char' => 90,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 299,
                              'char' => 91,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 299,
                            'char' => 93,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 299,
                          'char' => 93,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 299,
                        'char' => 93,
                      ),
                      'statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'unset',
                          'expr' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'rows',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 300,
                                'char' => 31,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'key',
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 300,
                                'char' => 35,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 300,
                              'char' => 36,
                            ),
                            'right' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'constant',
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
                                      'type' => 'variable',
                                      'value' => '_documentClass',
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 300,
                                      'char' => 61,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'string',
                                      'value' => '::ENTRY_REV',
                                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                      'line' => 300,
                                      'char' => 76,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                    'line' => 300,
                                    'char' => 76,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                  'line' => 300,
                                  'char' => 76,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 300,
                              'char' => 77,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 300,
                            'char' => 78,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 302,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 303,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 304,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 305,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'rows',
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 305,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 306,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 289,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 289,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 288,
          'last-line' => 308,
          'char' => 22,
        ),
        23 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 310,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 310,
                  'char' => 63,
                ),
                2 => 
                array (
                  'variable' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 310,
                  'char' => 69,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 312,
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 312,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 312,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 313,
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 313,
                        'char' => 30,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_connection',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 313,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 313,
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
                                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                                'line' => 313,
                                'char' => 53,
                              ),
                              'name' => 'url',
                              'call-type' => 1,
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 313,
                              'char' => 60,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '/',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 313,
                              'char' => 66,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 313,
                            'char' => 66,
                          ),
                          'right' => 
                          array (
                            'type' => 'property-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 313,
                              'char' => 73,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_id',
                              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                              'line' => 313,
                              'char' => 77,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 313,
                            'char' => 77,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 313,
                          'char' => 77,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 313,
                        'char' => 77,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => '',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 313,
                          'char' => 81,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 313,
                        'char' => 81,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 313,
                          'char' => 123,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 313,
                        'char' => 123,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 313,
                    'char' => 124,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 313,
                  'char' => 124,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 314,
              'char' => 11,
            ),
            3 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property-incr',
                  'variable' => 'this',
                  'property' => '_fetches',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 314,
                  'char' => 29,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 315,
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
                  'variable' => 'data',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 315,
                      'char' => 30,
                    ),
                    'name' => 'getJson',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 315,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 315,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 316,
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 316,
                        'char' => 42,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 316,
                          'char' => 62,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_HASMORE',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 316,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 316,
                        'char' => 62,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 316,
                      'char' => 63,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 316,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 316,
                  'char' => 63,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 317,
              'char' => 12,
            ),
            6 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 317,
                  'char' => 14,
                ),
                'name' => 'add',
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 317,
                        'char' => 23,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 317,
                          'char' => 42,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_RESULT',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 317,
                          'char' => 42,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 317,
                        'char' => 42,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 317,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 317,
                    'char' => 43,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 317,
                'char' => 44,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 318,
              'char' => 10,
            ),
            7 => 
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 318,
                      'char' => 19,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_hasMore',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 318,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 318,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 318,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 318,
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 319,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 319,
                      'char' => 34,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 320,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 321,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 321,
                  'char' => 14,
                ),
                'name' => 'updateLength',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 321,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 322,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 308,
          'last-line' => 324,
          'char' => 22,
        ),
        24 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'updateLength',
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
                  'property' => '_length',
                  'expr' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'count',
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
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 326,
                            'char' => 41,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_result',
                            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                            'line' => 326,
                            'char' => 49,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 326,
                          'char' => 49,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 326,
                        'char' => 49,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 326,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 326,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 327,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 324,
          'last-line' => 329,
          'char' => 22,
        ),
        25 => 
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 331,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_options',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 331,
                      'char' => 32,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 331,
                    'char' => 32,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 331,
                      'char' => 52,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_BASEURL',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 331,
                      'char' => 52,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 331,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 331,
                  'char' => 54,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 331,
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 332,
                        'char' => 25,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_options',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 332,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 332,
                      'char' => 34,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 332,
                        'char' => 54,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_BASEURL',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 332,
                        'char' => 54,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 332,
                      'char' => 54,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 332,
                    'char' => 55,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 333,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 334,
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 334,
                  'char' => 32,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'URL_CURSOR',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 334,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 334,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 335,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 330,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 330,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 329,
          'last-line' => 337,
          'char' => 22,
        ),
        26 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getStatValue',
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 337,
              'char' => 48,
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
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 339,
                        'char' => 23,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_extra',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 339,
                        'char' => 30,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 339,
                      'char' => 30,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 339,
                        'char' => 48,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_STATS',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 339,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 339,
                      'char' => 48,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 339,
                    'char' => 49,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'name',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 339,
                    'char' => 54,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 339,
                  'char' => 56,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 339,
                'char' => 56,
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
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 340,
                          'char' => 25,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_extra',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 340,
                          'char' => 32,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 340,
                        'char' => 32,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 340,
                          'char' => 50,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_STATS',
                          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                          'line' => 340,
                          'char' => 50,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 340,
                        'char' => 50,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 340,
                      'char' => 51,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'name',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 340,
                      'char' => 56,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 340,
                    'char' => 57,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 341,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 342,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'int',
                'value' => '0',
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 342,
                'char' => 17,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 343,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 338,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 338,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 337,
          'last-line' => 345,
          'char' => 22,
        ),
        27 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getMetadata',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 347,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 347,
                  'char' => 26,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 347,
                'char' => 26,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 348,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 346,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 346,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 345,
          'last-line' => 350,
          'char' => 19,
        ),
        28 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getExtra',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 352,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_extra',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 352,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 352,
                'char' => 28,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 353,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 351,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 351,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 350,
          'last-line' => 355,
          'char' => 19,
        ),
        29 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getWarnings',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 357,
                  'char' => 53,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 359,
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
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 359,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_extra',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 359,
                      'char' => 30,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 359,
                    'char' => 30,
                  ),
                  'right' => 
                  array (
                    'type' => 'string',
                    'value' => 'warnings',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 359,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 359,
                  'char' => 43,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 359,
                'char' => 43,
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
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 360,
                        'char' => 25,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_extra',
                        'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                        'line' => 360,
                        'char' => 32,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 360,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => 'warnings',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 360,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 360,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 361,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 362,
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
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 362,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 362,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 363,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 363,
                'char' => 56,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 364,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 356,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 356,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 355,
          'last-line' => 366,
          'char' => 19,
        ),
        30 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getWritesExecuted',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 368,
                  'char' => 21,
                ),
                'name' => 'getStatValue',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'string',
                      'value' => 'writesExecuted',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 368,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 368,
                    'char' => 51,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 368,
                'char' => 52,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 369,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 367,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 367,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 366,
          'last-line' => 371,
          'char' => 19,
        ),
        31 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getWritesIgnored',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 373,
                  'char' => 21,
                ),
                'name' => 'getStatValue',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'string',
                      'value' => 'writesIgnored',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 373,
                      'char' => 50,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 373,
                    'char' => 50,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 373,
                'char' => 51,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 374,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 372,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 372,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 371,
          'last-line' => 376,
          'char' => 19,
        ),
        32 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getScannedFull',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 378,
                  'char' => 21,
                ),
                'name' => 'getStatValue',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'string',
                      'value' => 'scannedFull',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 378,
                      'char' => 48,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 378,
                    'char' => 48,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 378,
                'char' => 49,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 379,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 377,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 377,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 376,
          'last-line' => 381,
          'char' => 19,
        ),
        33 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getScannedIndex',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 383,
                  'char' => 21,
                ),
                'name' => 'getStatValue',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'string',
                      'value' => 'scannedIndex',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 383,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 383,
                    'char' => 49,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 383,
                'char' => 50,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 384,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 382,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 382,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 381,
          'last-line' => 386,
          'char' => 19,
        ),
        34 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getFiltered',
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 388,
                  'char' => 21,
                ),
                'name' => 'getStatValue',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'string',
                      'value' => 'filtered',
                      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                      'line' => 388,
                      'char' => 45,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 388,
                    'char' => 45,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 388,
                'char' => 46,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 389,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 387,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 387,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 386,
          'last-line' => 391,
          'char' => 19,
        ),
        35 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 393,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_fetches',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 393,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 393,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 394,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 392,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 392,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 391,
          'last-line' => 396,
          'char' => 19,
        ),
        36 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 398,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_id',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 398,
                  'char' => 25,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 398,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 399,
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
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 397,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 397,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 396,
          'last-line' => 401,
          'char' => 19,
        ),
        37 => 
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
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 401,
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
                    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                    'line' => 403,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 403,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 404,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 404,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
              'line' => 405,
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
                  'value' => 'Cursor',
                  'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                  'line' => 402,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
                'line' => 402,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 402,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 401,
          'last-line' => 407,
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
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 18,
            'char' => 26,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 19,
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
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 19,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 20,
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
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 20,
            'char' => 34,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 21,
          'char' => 9,
        ),
        3 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_EXTRA',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'extra',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 21,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 22,
          'char' => 9,
        ),
        4 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_STATS',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'stats',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 22,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 23,
          'char' => 9,
        ),
        5 => 
        array (
          'type' => 'const',
          'name' => 'FULL_COUNT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'fullCount',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 23,
            'char' => 35,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 24,
          'char' => 9,
        ),
        6 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_CACHE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'cache',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 24,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 25,
          'char' => 9,
        ),
        7 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_CACHED',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'cached',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 25,
            'char' => 34,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 26,
          'char' => 9,
        ),
        8 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_SANITIZE',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_sanitize',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 26,
            'char' => 39,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 27,
          'char' => 9,
        ),
        9 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_FLAT',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_flat',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 27,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 28,
          'char' => 9,
        ),
        10 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_TYPE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'objectType',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 28,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 29,
          'char' => 9,
        ),
        11 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_BASEURL',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'baseurl',
            'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
            'line' => 29,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
          'line' => 30,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/cursor.zep',
    'line' => 3,
    'char' => 5,
  ),
);