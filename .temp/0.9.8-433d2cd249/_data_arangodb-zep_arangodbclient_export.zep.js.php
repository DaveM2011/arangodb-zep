<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Export',
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
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
          'name' => '_collection',
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
          'name' => '_batchSize',
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
          'name' => '_flat',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 8,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
          'name' => '_flush',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'true',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 9,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
          'name' => '_type',
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
          'name' => '_restrictions',
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
          'name' => '_limit',
          'default' => 
          array (
            'type' => 'int',
            'value' => '0',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 12,
            'char' => 25,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
          'name' => '_documentClass',
          'default' => 
          array (
            'type' => 'string',
            'value' => '\\\\ArangoDBClient\\\\Document',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 13,
            'char' => 60,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 14,
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
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 19,
                'char' => 55,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 19,
              'char' => 56,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 19,
              'char' => 72,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 19,
                'char' => 89,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 19,
              'char' => 89,
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
                  'variable' => 'collectionHandler',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 21,
                  'char' => 30,
                ),
                1 => 
                array (
                  'variable' => 'restrictions',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 21,
                  'char' => 44,
                ),
                2 => 
                array (
                  'variable' => 'tmpArray1ad93cd458ab50bc8b784be1f82fa4b3',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 21,
                  'char' => 86,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
                  'property' => '_connection',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'connection',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 23,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 23,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 24,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'instanceof',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'collection',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 24,
                  'char' => 32,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'Collection',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 24,
                  'char' => 45,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 24,
                'char' => 45,
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
                      'variable' => 'collectionHandler',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'CollectionHandler',
                        'dynamic' => 0,
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
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 27,
                                'char' => 65,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_connection',
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 27,
                                'char' => 77,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 27,
                              'char' => 77,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 27,
                            'char' => 77,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 27,
                        'char' => 78,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 27,
                      'char' => 78,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 28,
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
                      'variable' => 'collection',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collectionHandler',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 28,
                          'char' => 49,
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
                              'value' => 'collection',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 28,
                              'char' => 64,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 28,
                            'char' => 64,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 28,
                        'char' => 65,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 28,
                      'char' => 65,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 29,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 30,
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
                  'property' => '_collection',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'collection',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 30,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 30,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 31,
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
                  'property' => '_type',
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
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 31,
                        'char' => 33,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_collection',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 31,
                        'char' => 46,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 31,
                      'char' => 46,
                    ),
                    'name' => 'getType',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 31,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 31,
                  'char' => 56,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 32,
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
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 32,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 32,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_FLUSH',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 32,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 32,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 32,
                  'char' => 42,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 32,
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
                      'property' => '_flush',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 33,
                          'char' => 36,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 33,
                            'char' => 54,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_FLUSH',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 33,
                            'char' => 54,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 33,
                          'char' => 54,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 33,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 33,
                      'char' => 55,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 34,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 35,
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
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 35,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 35,
                      'char' => 44,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_BATCHSIZE',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 35,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 35,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 35,
                  'char' => 46,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 35,
                'char' => 46,
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
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 36,
                      'char' => 18,
                    ),
                    'name' => 'setBatchSize',
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
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 36,
                            'char' => 36,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 36,
                              'char' => 58,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_BATCHSIZE',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 36,
                              'char' => 58,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 36,
                            'char' => 58,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 36,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 36,
                        'char' => 59,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 36,
                    'char' => 60,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 37,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 38,
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
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 38,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 38,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_LIMIT',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 38,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 38,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 38,
                  'char' => 42,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 38,
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
                      'property' => '_limit',
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
                            'value' => 'data',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 39,
                            'char' => 43,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 39,
                              'char' => 61,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_LIMIT',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 39,
                              'char' => 61,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 39,
                            'char' => 61,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 39,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 39,
                        'char' => 62,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 39,
                      'char' => 62,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 40,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 41,
              'char' => 10,
            ),
            8 => 
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
                      'type' => 'variable',
                      'value' => 'data',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 41,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 41,
                        'char' => 43,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_RESTRICT',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 41,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 41,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 41,
                    'char' => 46,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 41,
                  'char' => 46,
                ),
                'right' => 
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
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 41,
                          'char' => 61,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 41,
                            'char' => 82,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_RESTRICT',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 41,
                            'char' => 82,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 41,
                          'char' => 82,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 41,
                        'char' => 83,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 41,
                      'char' => 83,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 41,
                  'char' => 85,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 41,
                'char' => 85,
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
                      'variable' => 'restrictions',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'data',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 42,
                          'char' => 36,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 42,
                            'char' => 57,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_RESTRICT',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 42,
                            'char' => 57,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 42,
                          'char' => 57,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 42,
                        'char' => 58,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 42,
                      'char' => 58,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 43,
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
                      'variable' => 'tmpArray1ad93cd458ab50bc8b784be1f82fa4b3',
                      'expr' => 
                      array (
                        'type' => 'array',
                        'left' => 
                        array (
                          0 => 
                          array (
                            'value' => 
                            array (
                              'type' => 'string',
                              'value' => 'include',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 43,
                              'char' => 70,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 43,
                            'char' => 70,
                          ),
                          1 => 
                          array (
                            'value' => 
                            array (
                              'type' => 'string',
                              'value' => 'exclude',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 43,
                              'char' => 81,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 43,
                            'char' => 81,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 43,
                        'char' => 82,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 43,
                      'char' => 82,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 44,
                  'char' => 14,
                ),
                2 => 
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
                        'type' => 'isset',
                        'left' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'restrictions',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 44,
                            'char' => 35,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => 'type',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 44,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 44,
                          'char' => 45,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 44,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 44,
                      'char' => 45,
                    ),
                    'right' => 
                    array (
                      'type' => 'not',
                      'left' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'in_array',
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
                                'value' => 'restrictions',
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 44,
                                'char' => 69,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'type',
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 44,
                                'char' => 76,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 44,
                              'char' => 77,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 44,
                            'char' => 77,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'tmpArray1ad93cd458ab50bc8b784be1f82fa4b3',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 44,
                              'char' => 119,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 44,
                            'char' => 119,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'bool',
                              'value' => 'true',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 44,
                              'char' => 125,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 44,
                            'char' => 125,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 44,
                        'char' => 127,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 44,
                      'char' => 127,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 44,
                    'char' => 127,
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
                              'value' => 'Invalid restrictions type definition',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 45,
                              'char' => 81,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 45,
                            'char' => 81,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 45,
                        'char' => 82,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 46,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 47,
                  'char' => 14,
                ),
                3 => 
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
                        'type' => 'isset',
                        'left' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'restrictions',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 47,
                            'char' => 35,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => 'fields',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 47,
                            'char' => 44,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 47,
                          'char' => 47,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 47,
                        'char' => 47,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 47,
                      'char' => 47,
                    ),
                    'right' => 
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
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'restrictions',
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 47,
                                'char' => 71,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'fields',
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 47,
                                'char' => 80,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 47,
                              'char' => 81,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 47,
                            'char' => 81,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 47,
                        'char' => 83,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 47,
                      'char' => 83,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 47,
                    'char' => 83,
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
                              'value' => 'Invalid restrictions fields definition',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 48,
                              'char' => 83,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 48,
                            'char' => 83,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 48,
                        'char' => 84,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 49,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 50,
                  'char' => 15,
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
                      'property' => '_restrictions',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'restrictions',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 50,
                        'char' => 51,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 50,
                      'char' => 51,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 51,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 52,
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
                    'value' => 'data',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 52,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ExportCursor',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 52,
                      'char' => 47,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_FLAT',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 52,
                      'char' => 47,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 52,
                    'char' => 47,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 52,
                  'char' => 49,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 52,
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
                      'assign-type' => 'object-property',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_flat',
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
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 53,
                            'char' => 43,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ExportCursor',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 53,
                              'char' => 68,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_FLAT',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 53,
                              'char' => 68,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 53,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 53,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 53,
                        'char' => 69,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 53,
                      'char' => 69,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 54,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 55,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 19,
          'last-line' => 57,
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
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 59,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_connection',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 59,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 59,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'Connection',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 58,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 58,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 58,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 57,
          'last-line' => 62,
          'char' => 22,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'execute',
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
                  'variable' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 64,
                  'char' => 17,
                ),
                1 => 
                array (
                  'variable' => 'collection',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 64,
                  'char' => 29,
                ),
                2 => 
                array (
                  'variable' => 'url',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 64,
                  'char' => 34,
                ),
                3 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 64,
                  'char' => 44,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
                  'variable' => 'data',
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
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 66,
                            'char' => 40,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_FLUSH',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 66,
                            'char' => 40,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 66,
                          'char' => 40,
                        ),
                        'value' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 66,
                            'char' => 47,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_flush',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 66,
                            'char' => 54,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 66,
                          'char' => 54,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 66,
                        'char' => 54,
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
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 66,
                            'char' => 74,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_COUNT',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 66,
                            'char' => 74,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 66,
                          'char' => 74,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 66,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 66,
                        'char' => 80,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 66,
                    'char' => 81,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 66,
                  'char' => 81,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 67,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'greater',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 67,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_batchSize',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 67,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 67,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '0',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 67,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 67,
                'char' => 33,
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
                      'variable' => 'data',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 68,
                            'char' => 43,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_BATCHSIZE',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 68,
                            'char' => 43,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 68,
                          'char' => 43,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 68,
                          'char' => 52,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_batchSize',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 68,
                          'char' => 63,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 68,
                        'char' => 63,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 68,
                      'char' => 63,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 69,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 70,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'greater',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 70,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_limit',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 70,
                    'char' => 25,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 70,
                  'char' => 25,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '0',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 70,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 70,
                'char' => 29,
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
                      'variable' => 'data',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 71,
                            'char' => 39,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_LIMIT',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 71,
                            'char' => 39,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 71,
                          'char' => 39,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 71,
                          'char' => 48,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_limit',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 71,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 71,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 71,
                      'char' => 55,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 72,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 73,
              'char' => 10,
            ),
            4 => 
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
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 73,
                        'char' => 26,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_restrictions',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 73,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 73,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 73,
                    'char' => 40,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 73,
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
                      'assign-type' => 'array-index',
                      'operator' => 'assign',
                      'variable' => 'data',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 74,
                            'char' => 42,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_RESTRICT',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 74,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 74,
                          'char' => 42,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 74,
                          'char' => 51,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_restrictions',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 74,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 74,
                        'char' => 65,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 74,
                      'char' => 65,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 75,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 76,
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
                  'variable' => 'collection',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 76,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_collection',
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 76,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 76,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 76,
                  'char' => 44,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 77,
              'char' => 10,
            ),
            6 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'instanceof',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'collection',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 77,
                  'char' => 32,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'Collection',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 77,
                  'char' => 45,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 77,
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
                      'variable' => 'collection',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 78,
                          'char' => 42,
                        ),
                        'name' => 'getName',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 78,
                        'char' => 52,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 78,
                      'char' => 52,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 79,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 80,
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
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'appendParamsUrl',
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
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 80,
                            'char' => 63,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_EXPORT',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 80,
                            'char' => 63,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 80,
                          'char' => 63,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 80,
                        'char' => 63,
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
                              'key' => 
                              array (
                                'type' => 'string',
                                'value' => 'collection',
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 80,
                                'char' => 79,
                              ),
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'collection',
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 80,
                                'char' => 91,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 80,
                              'char' => 91,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 80,
                          'char' => 92,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 80,
                        'char' => 92,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 80,
                    'char' => 93,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 80,
                  'char' => 93,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 81,
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
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 81,
                        'char' => 30,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_connection',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 81,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 81,
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
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 81,
                          'char' => 52,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 81,
                        'char' => 52,
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
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 81,
                              'char' => 59,
                            ),
                            'name' => 'getConnection',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 81,
                            'char' => 76,
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
                                'value' => 'data',
                                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                                'line' => 81,
                                'char' => 101,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 81,
                              'char' => 101,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 81,
                          'char' => 102,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 81,
                        'char' => 102,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 81,
                    'char' => 103,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 81,
                  'char' => 103,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 82,
              'char' => 14,
            ),
            9 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'new',
                'class' => 'ExportCursor',
                'dynamic' => 0,
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
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 82,
                        'char' => 38,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_connection',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 82,
                        'char' => 50,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 82,
                      'char' => 50,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 82,
                    'char' => 50,
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
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 82,
                        'char' => 61,
                      ),
                      'name' => 'getJson',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 82,
                      'char' => 71,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 82,
                    'char' => 71,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 82,
                        'char' => 78,
                      ),
                      'name' => 'getCursorOptions',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                      'line' => 82,
                      'char' => 97,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 82,
                    'char' => 97,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 82,
                'char' => 98,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 83,
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
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 63,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 63,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 63,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 62,
          'last-line' => 85,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setBatchSize',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'int',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 85,
              'char' => 43,
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
                  'type' => 'not',
                  'left' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'is_int',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'value',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 87,
                          'char' => 25,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 87,
                        'char' => 25,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 87,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 87,
                  'char' => 28,
                ),
                'right' => 
                array (
                  'type' => 'less-equal',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 87,
                    'char' => 36,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '0',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 87,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 87,
                  'char' => 40,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 87,
                'char' => 40,
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
                          'value' => 'Batch size should be a positive integer',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 88,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 88,
                        'char' => 80,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 88,
                    'char' => 81,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 89,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
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
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_batchSize',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 90,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 90,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 91,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 85,
          'last-line' => 93,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getBatchSize',
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
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 95,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_batchSize',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 95,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 95,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 96,
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
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 94,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 94,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 93,
          'last-line' => 98,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getCursorOptions',
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
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 100,
                  'char' => 19,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 102,
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
                  'variable' => 'result',
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
                            'value' => 'ExportCursor',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 49,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_FLAT',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 49,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 102,
                          'char' => 49,
                        ),
                        'value' => 
                        array (
                          'type' => 'cast',
                          'left' => 'bool',
                          'right' => 
                          array (
                            'type' => 'property-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 102,
                              'char' => 63,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_flat',
                              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                              'line' => 102,
                              'char' => 69,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 69,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 102,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 102,
                        'char' => 69,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ExportCursor',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 99,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_BASEURL',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 99,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 102,
                          'char' => 99,
                        ),
                        'value' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'Urls',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 117,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_EXPORT',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 117,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 102,
                          'char' => 117,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 102,
                        'char' => 117,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ExportCursor',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 144,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_TYPE',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 144,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 102,
                          'char' => 144,
                        ),
                        'value' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 151,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_type',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 157,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 102,
                          'char' => 157,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 102,
                        'char' => 157,
                      ),
                      3 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => '_documentClass',
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 102,
                          'char' => 176,
                        ),
                        'value' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 183,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_documentClass',
                            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                            'line' => 102,
                            'char' => 198,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                          'line' => 102,
                          'char' => 198,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                        'line' => 102,
                        'char' => 198,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 102,
                    'char' => 199,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 102,
                  'char' => 199,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 103,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'result',
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 103,
                'char' => 22,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 104,
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
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 99,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 99,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 98,
          'last-line' => 106,
          'char' => 22,
        ),
        6 => 
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
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 106,
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
                    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                    'line' => 108,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 108,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 109,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 109,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/export.zep',
              'line' => 110,
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
                  'value' => 'Export',
                  'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                  'line' => 107,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/export.zep',
                'line' => 107,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 107,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 106,
          'last-line' => 112,
          'char' => 19,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_COUNT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'count',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 14,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 15,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_BATCHSIZE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'batchSize',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 15,
            'char' => 40,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 16,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_FLUSH',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'flush',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 16,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 17,
          'char' => 9,
        ),
        3 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_RESTRICT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'restrict',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 17,
            'char' => 38,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 18,
          'char' => 9,
        ),
        4 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_LIMIT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'limit',
            'file' => '/data/arangodb-zep/arangodbclient/export.zep',
            'line' => 18,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/export.zep',
          'line' => 19,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/export.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/export.zep',
    'line' => 3,
    'char' => 5,
  ),
);