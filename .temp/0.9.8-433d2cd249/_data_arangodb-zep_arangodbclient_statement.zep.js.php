<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Statement',
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
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_bindVars',
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_doCount',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 8,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_fullCount',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 9,
            'char' => 33,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_query',
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_flat',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 11,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_sanitize',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 12,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_retries',
          'default' => 
          array (
            'type' => 'int',
            'value' => '0',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 13,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_cache',
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => 'resultType',
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => '_documentClass',
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 17,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 23,
                'char' => 55,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 23,
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
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 23,
              'char' => 68,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 25,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 25,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_bindVars',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => 'BindVars',
                    'dynamic' => 0,
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 26,
                    'char' => 46,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 26,
                  'char' => 46,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 27,
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
                    'value' => 'data',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 27,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 27,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_QUERY',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 27,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 27,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 27,
                  'char' => 42,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 27,
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
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 28,
                      'char' => 18,
                    ),
                    'name' => 'setQuery',
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 28,
                            'char' => 32,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 28,
                              'char' => 50,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_QUERY',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 28,
                              'char' => 50,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 28,
                            'char' => 50,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 28,
                          'char' => 51,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 28,
                        'char' => 51,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 28,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 29,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 30,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 30,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 30,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_COUNT',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 30,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 30,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 30,
                  'char' => 42,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 30,
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
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 31,
                      'char' => 18,
                    ),
                    'name' => 'setCount',
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 31,
                            'char' => 32,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 31,
                              'char' => 50,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_COUNT',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 31,
                              'char' => 50,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 31,
                            'char' => 50,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 31,
                          'char' => 51,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 31,
                        'char' => 51,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 31,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 32,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 33,
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
                    'value' => 'data',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 33,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 33,
                      'char' => 44,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_BATCHSIZE',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 33,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 33,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 33,
                  'char' => 46,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 33,
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
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 34,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 34,
                            'char' => 36,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 34,
                              'char' => 58,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_BATCHSIZE',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 34,
                              'char' => 58,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 34,
                            'char' => 58,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 34,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 34,
                        'char' => 59,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 34,
                    'char' => 60,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 35,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 36,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 36,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 36,
                      'char' => 43,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_BINDVARS',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 36,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 36,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 36,
                  'char' => 45,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 36,
                'char' => 45,
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
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 37,
                        'char' => 18,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_bindVars',
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 37,
                        'char' => 29,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 37,
                      'char' => 29,
                    ),
                    'name' => 'set',
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 37,
                            'char' => 38,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 37,
                              'char' => 59,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_BINDVARS',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 37,
                              'char' => 59,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 37,
                            'char' => 59,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 37,
                          'char' => 60,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 37,
                        'char' => 60,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 37,
                    'char' => 61,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 38,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 39,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 39,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 39,
                      'char' => 39,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'FULL_COUNT',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 39,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 39,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 39,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 39,
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
                      'assign-type' => 'object-property',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_fullCount',
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 40,
                            'char' => 48,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'Cursor',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 40,
                              'char' => 67,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'FULL_COUNT',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 40,
                              'char' => 67,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 40,
                            'char' => 67,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 40,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 40,
                        'char' => 68,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 40,
                      'char' => 68,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 41,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 42,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 42,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'Cursor',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 42,
                      'char' => 45,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_SANITIZE',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 42,
                      'char' => 45,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 42,
                    'char' => 45,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 42,
                  'char' => 47,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 42,
                'char' => 47,
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
                      'property' => '_sanitize',
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 43,
                            'char' => 47,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'Cursor',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 43,
                              'char' => 70,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_SANITIZE',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 43,
                              'char' => 70,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 43,
                            'char' => 70,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 43,
                          'char' => 71,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 43,
                        'char' => 71,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 43,
                      'char' => 71,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 44,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 45,
              'char' => 10,
            ),
            8 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 45,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 45,
                      'char' => 42,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_RETRIES',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 45,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 45,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 45,
                  'char' => 44,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 45,
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
                      'assign-type' => 'object-property',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_retries',
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 46,
                            'char' => 45,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 46,
                              'char' => 65,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_RETRIES',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 46,
                              'char' => 65,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 46,
                            'char' => 65,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 46,
                          'char' => 66,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 46,
                        'char' => 66,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 46,
                      'char' => 66,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 47,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 48,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 48,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'Cursor',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 48,
                      'char' => 41,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_FLAT',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 48,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 48,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 48,
                  'char' => 43,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 48,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 49,
                            'char' => 43,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'Cursor',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 49,
                              'char' => 62,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_FLAT',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 49,
                              'char' => 62,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 49,
                            'char' => 62,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 49,
                          'char' => 63,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 49,
                        'char' => 63,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 49,
                      'char' => 63,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 50,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 51,
              'char' => 10,
            ),
            10 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 51,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'Cursor',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 51,
                      'char' => 42,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ENTRY_CACHE',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 51,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 51,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 51,
                  'char' => 44,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 51,
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
                      'assign-type' => 'object-property',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_cache',
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 52,
                            'char' => 44,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'Cursor',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 52,
                              'char' => 64,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_CACHE',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 52,
                              'char' => 64,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 52,
                            'char' => 64,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 52,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 52,
                        'char' => 65,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 52,
                      'char' => 65,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 53,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 54,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 24,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 23,
          'last-line' => 56,
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 58,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_connection',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 58,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 58,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 59,
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 57,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 57,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 57,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 56,
          'last-line' => 61,
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 63,
                  'char' => 17,
                ),
                1 => 
                array (
                  'variable' => 'tries',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 63,
                  'char' => 24,
                ),
                2 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 63,
                  'char' => 34,
                ),
                3 => 
                array (
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 63,
                  'char' => 76,
                ),
                4 => 
                array (
                  'variable' => 'e',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 63,
                  'char' => 79,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 65,
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
                  'type' => 'list',
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
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 65,
                            'char' => 29,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_query',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 65,
                            'char' => 36,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 65,
                          'char' => 36,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 65,
                        'char' => 36,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 65,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 65,
                  'char' => 39,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 65,
                'char' => 39,
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
                          'value' => 'Query should be a string',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 66,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 66,
                        'char' => 65,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 66,
                    'char' => 66,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 67,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 68,
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
                  'variable' => 'data',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 68,
                      'char' => 26,
                    ),
                    'name' => 'buildData',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 68,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 68,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 69,
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
                  'variable' => 'tries',
                  'expr' => 
                  array (
                    'type' => 'int',
                    'value' => '0',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 69,
                    'char' => 22,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 69,
                  'char' => 22,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 70,
              'char' => 13,
            ),
            4 => 
            array (
              'type' => 'while',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'bool',
                  'value' => 'true',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 70,
                  'char' => 20,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 70,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 72,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 72,
                          'char' => 66,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 73,
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
                              'type' => 'property-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'this',
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 73,
                                'char' => 38,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_connection',
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 73,
                                'char' => 51,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 73,
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
                                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                    'line' => 73,
                                    'char' => 73,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'URL_CURSOR',
                                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                    'line' => 73,
                                    'char' => 73,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                  'line' => 73,
                                  'char' => 73,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 73,
                                'char' => 73,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                      'line' => 73,
                                      'char' => 80,
                                    ),
                                    'name' => 'getConnection',
                                    'call-type' => 1,
                                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                    'line' => 73,
                                    'char' => 97,
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
                                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                        'line' => 73,
                                        'char' => 122,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                      'line' => 73,
                                      'char' => 122,
                                    ),
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                  'line' => 73,
                                  'char' => 123,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 73,
                                'char' => 123,
                              ),
                              2 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                  'line' => 73,
                                  'char' => 165,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 73,
                                'char' => 165,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 73,
                            'char' => 166,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 73,
                          'char' => 166,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 74,
                      'char' => 22,
                    ),
                    2 => 
                    array (
                      'type' => 'return',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'Cursor',
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
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 74,
                                'char' => 40,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_connection',
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 74,
                                'char' => 52,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 74,
                              'char' => 52,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 74,
                            'char' => 52,
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
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 74,
                                'char' => 63,
                              ),
                              'name' => 'getJson',
                              'call-type' => 1,
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 74,
                              'char' => 73,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 74,
                            'char' => 73,
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
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 74,
                                'char' => 80,
                              ),
                              'name' => 'getCursorOptions',
                              'call-type' => 1,
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 74,
                              'char' => 99,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 74,
                            'char' => 99,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 74,
                        'char' => 100,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 75,
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
                          'value' => 'ServerException',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 75,
                          'char' => 36,
                        ),
                      ),
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'e',
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 84,
                        'char' => 9,
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
                              'assign-type' => 'incr',
                              'variable' => 'tries',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 76,
                              'char' => 28,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 77,
                          'char' => 18,
                        ),
                        1 => 
                        array (
                          'type' => 'if',
                          'expr' => 
                          array (
                            'type' => 'greater-equal',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'tries',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 77,
                              'char' => 26,
                            ),
                            'right' => 
                            array (
                              'type' => 'property-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'this',
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 77,
                                'char' => 33,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_retries',
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 77,
                                'char' => 43,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 77,
                              'char' => 43,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 77,
                            'char' => 43,
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
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 78,
                                'char' => 28,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 79,
                              'char' => 17,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 80,
                          'char' => 18,
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
                                'value' => 'e',
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 80,
                                'char' => 22,
                              ),
                              'name' => 'getServerCode',
                              'call-type' => 1,
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 80,
                              'char' => 41,
                            ),
                            'right' => 
                            array (
                              'type' => 'int',
                              'value' => '29',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 80,
                              'char' => 46,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 80,
                            'char' => 46,
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
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 81,
                                'char' => 28,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 82,
                              'char' => 17,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 83,
                          'char' => 13,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 84,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 84,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 85,
              'char' => 14,
            ),
            5 => 
            array (
              'type' => 'return',
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 86,
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 62,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 62,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 62,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 61,
          'last-line' => 88,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'explain',
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 90,
                  'char' => 17,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 90,
                  'char' => 27,
                ),
                2 => 
                array (
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 90,
                  'char' => 69,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 92,
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
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 92,
                      'char' => 26,
                    ),
                    'name' => 'buildData',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 92,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 92,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 93,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 93,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 93,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 94,
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
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 94,
                        'char' => 30,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_connection',
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 94,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 94,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 94,
                            'char' => 66,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_EXPLAIN',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 94,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 94,
                          'char' => 66,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 94,
                        'char' => 66,
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
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 94,
                              'char' => 73,
                            ),
                            'name' => 'getConnection',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 94,
                            'char' => 90,
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
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 94,
                                'char' => 115,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 94,
                              'char' => 115,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 94,
                          'char' => 116,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 94,
                        'char' => 116,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 94,
                          'char' => 158,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 94,
                        'char' => 158,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 94,
                    'char' => 159,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 94,
                  'char' => 159,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 95,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 95,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 95,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
                'data-type' => 'array',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 89,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 89,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 88,
          'last-line' => 98,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'validate',
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 100,
                  'char' => 17,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 100,
                  'char' => 27,
                ),
                2 => 
                array (
                  'variable' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 100,
                  'char' => 69,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
                  'variable' => 'data',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 102,
                      'char' => 26,
                    ),
                    'name' => 'buildData',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 102,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 102,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 103,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 103,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 103,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 104,
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
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 104,
                        'char' => 30,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_connection',
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 104,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 104,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 104,
                            'char' => 64,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_QUERY',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 104,
                            'char' => 64,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 104,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 104,
                        'char' => 64,
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
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 104,
                              'char' => 71,
                            ),
                            'name' => 'getConnection',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 104,
                            'char' => 88,
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
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 104,
                                'char' => 113,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 104,
                              'char' => 113,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 104,
                          'char' => 114,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 104,
                        'char' => 114,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpArray40cd750bba9870f18aada2478b24840a',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 104,
                          'char' => 156,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 104,
                        'char' => 156,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 104,
                    'char' => 157,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 104,
                  'char' => 157,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 105,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 105,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 105,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 106,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 99,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 99,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 98,
          'last-line' => 108,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__invoke',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'args',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 108,
              'char' => 34,
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 110,
                  'char' => 21,
                ),
                'name' => 'execute',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 110,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 111,
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 109,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 109,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 109,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 108,
          'last-line' => 113,
          'char' => 19,
        ),
        6 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 115,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_query',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 115,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 115,
                'char' => 28,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 114,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 114,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 113,
          'last-line' => 118,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'bind',
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
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 118,
              'char' => 29,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 118,
                'char' => 43,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 118,
              'char' => 43,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 120,
                    'char' => 14,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_bindVars',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 120,
                    'char' => 25,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 120,
                  'char' => 25,
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
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 120,
                      'char' => 33,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 120,
                    'char' => 33,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 120,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 120,
                    'char' => 40,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 120,
                'char' => 41,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 121,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => 'getBindVars',
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
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 125,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_bindVars',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 125,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 125,
                  'char' => 32,
                ),
                'name' => 'getAll',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 125,
                'char' => 41,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
                'data-type' => 'array',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 124,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 124,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
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
          'name' => 'setQuery',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'query',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 128,
              'char' => 42,
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
                  'type' => 'list',
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
                          'value' => 'query',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 130,
                          'char' => 29,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 130,
                        'char' => 29,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 130,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 130,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 130,
                'char' => 32,
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
                          'value' => 'Query should be a string',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 131,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 131,
                        'char' => 65,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 131,
                    'char' => 66,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 132,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 133,
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
                  'property' => '_query',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'query',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 133,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 133,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 134,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 128,
          'last-line' => 136,
          'char' => 19,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getQuery',
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 138,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_query',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 138,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 138,
                'char' => 28,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 139,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 137,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 137,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 136,
          'last-line' => 141,
          'char' => 19,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setResultType',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'resultType',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 141,
              'char' => 45,
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
                  'property' => 'resultType',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'resultType',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 143,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 143,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 144,
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 144,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'resultType',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 144,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 144,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 145,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 142,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 142,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 141,
          'last-line' => 147,
          'char' => 19,
        ),
        12 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setCount',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 147,
              'char' => 40,
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
                  'property' => '_doCount',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 149,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 149,
                  'char' => 35,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 150,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 147,
          'last-line' => 152,
          'char' => 19,
        ),
        13 => 
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
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 154,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_doCount',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 154,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 154,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 155,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 153,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 153,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 152,
          'last-line' => 157,
          'char' => 19,
        ),
        14 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setFullCount',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 157,
              'char' => 44,
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
                  'property' => '_fullCount',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 159,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 159,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 160,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 157,
          'last-line' => 162,
          'char' => 19,
        ),
        15 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 164,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_fullCount',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 164,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 164,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 165,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 163,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 163,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 162,
          'last-line' => 167,
          'char' => 19,
        ),
        16 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setCache',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 167,
              'char' => 40,
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
                  'property' => '_cache',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 169,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 169,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 170,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 167,
          'last-line' => 172,
          'char' => 19,
        ),
        17 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getCache',
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 174,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_cache',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 174,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 174,
                'char' => 28,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 175,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 173,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 173,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 172,
          'last-line' => 177,
          'char' => 19,
        ),
        18 => 
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
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 177,
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
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 179,
                          'char' => 25,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 179,
                        'char' => 25,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 179,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 179,
                  'char' => 28,
                ),
                'right' => 
                array (
                  'type' => 'less-equal',
                  'left' => 
                  array (
                    'type' => 'cast',
                    'left' => 'int',
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 179,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 179,
                    'char' => 42,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '0',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 179,
                    'char' => 46,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 179,
                  'char' => 46,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 179,
                'char' => 46,
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
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 180,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 180,
                        'char' => 80,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 180,
                    'char' => 81,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 181,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 182,
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
                    'type' => 'cast',
                    'left' => 'int',
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 182,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 182,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 182,
                  'char' => 44,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 183,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 177,
          'last-line' => 185,
          'char' => 19,
        ),
        19 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 187,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_batchSize',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 187,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 187,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 188,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 186,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 186,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 185,
          'last-line' => 190,
          'char' => 19,
        ),
        20 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'buildData',
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 192,
                  'char' => 17,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 194,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 194,
                            'char' => 40,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_QUERY',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 194,
                            'char' => 40,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 194,
                          'char' => 40,
                        ),
                        'value' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 194,
                            'char' => 47,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_query',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 194,
                            'char' => 54,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 194,
                          'char' => 54,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 194,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 194,
                            'char' => 74,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_COUNT',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 194,
                            'char' => 74,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 194,
                          'char' => 74,
                        ),
                        'value' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 194,
                            'char' => 81,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_doCount',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 194,
                            'char' => 90,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 194,
                          'char' => 90,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 194,
                        'char' => 90,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 194,
                          'char' => 102,
                        ),
                        'value' => 
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
                                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                  'line' => 194,
                                  'char' => 122,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'FULL_COUNT',
                                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                  'line' => 194,
                                  'char' => 122,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 194,
                                'char' => 122,
                              ),
                              'value' => 
                              array (
                                'type' => 'property-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'this',
                                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                  'line' => 194,
                                  'char' => 129,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_fullCount',
                                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                  'line' => 194,
                                  'char' => 140,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                                'line' => 194,
                                'char' => 140,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 194,
                              'char' => 140,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 194,
                          'char' => 141,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 194,
                        'char' => 141,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 194,
                    'char' => 142,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 194,
                  'char' => 142,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 195,
              'char' => 10,
            ),
            2 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 195,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_cache',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 195,
                    'char' => 27,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 195,
                  'char' => 27,
                ),
                'right' => 
                array (
                  'type' => 'null',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 195,
                  'char' => 34,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 195,
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
                            'value' => 'Cursor',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 196,
                            'char' => 41,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_CACHE',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 196,
                            'char' => 41,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 196,
                          'char' => 41,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 196,
                          'char' => 50,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_cache',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 196,
                          'char' => 57,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 196,
                        'char' => 57,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 196,
                      'char' => 57,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 197,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 198,
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
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 198,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_bindVars',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 198,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 198,
                    'char' => 28,
                  ),
                  'name' => 'getCount',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 198,
                  'char' => 40,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '0',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 198,
                  'char' => 44,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 198,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 199,
                            'char' => 42,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_BINDVARS',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 199,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 199,
                          'char' => 42,
                        ),
                      ),
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 199,
                            'char' => 52,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_bindVars',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 199,
                            'char' => 63,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 199,
                          'char' => 63,
                        ),
                        'name' => 'getAll',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 199,
                        'char' => 72,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 199,
                      'char' => 72,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 200,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 201,
              'char' => 10,
            ),
            4 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 201,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_batchSize',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 201,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 201,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '0',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 201,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 201,
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
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 202,
                            'char' => 43,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_BATCHSIZE',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 202,
                            'char' => 43,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 202,
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
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 202,
                          'char' => 52,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_batchSize',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 202,
                          'char' => 63,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 202,
                        'char' => 63,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 202,
                      'char' => 63,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 203,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 204,
              'char' => 14,
            ),
            5 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'data',
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 204,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 205,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 191,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 191,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 190,
          'last-line' => 207,
          'char' => 22,
        ),
        21 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 209,
                  'char' => 19,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 211,
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
                            'value' => 'Cursor',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 47,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_SANITIZE',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 47,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 211,
                          'char' => 47,
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
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 211,
                              'char' => 61,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_sanitize',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 211,
                              'char' => 71,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 71,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 211,
                          'char' => 71,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 211,
                        'char' => 71,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'Cursor',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 92,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_FLAT',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 92,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 211,
                          'char' => 92,
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
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 211,
                              'char' => 106,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_flat',
                              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                              'line' => 211,
                              'char' => 112,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 112,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 211,
                          'char' => 112,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 211,
                        'char' => 112,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'Cursor',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 136,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_BASEURL',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 136,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 211,
                          'char' => 136,
                        ),
                        'value' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'Urls',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 154,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_CURSOR',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 211,
                            'char' => 154,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 211,
                          'char' => 154,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 211,
                        'char' => 154,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 211,
                    'char' => 155,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 211,
                  'char' => 155,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 212,
              'char' => 10,
            ),
            2 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 212,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'resultType',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 212,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 212,
                  'char' => 31,
                ),
                'right' => 
                array (
                  'type' => 'null',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 212,
                  'char' => 38,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 212,
                'char' => 38,
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
                      'variable' => 'result',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'Cursor',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 213,
                            'char' => 42,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_TYPE',
                            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                            'line' => 213,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 213,
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
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 213,
                          'char' => 51,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'resultType',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 213,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 213,
                        'char' => 62,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 213,
                      'char' => 62,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 214,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 215,
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
                  'type' => 'not-identical',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 215,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 215,
                      'char' => 35,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 215,
                    'char' => 35,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 215,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 215,
                  'char' => 43,
                ),
                'right' => 
                array (
                  'type' => 'not-identical',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 215,
                      'char' => 50,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 215,
                      'char' => 68,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 215,
                    'char' => 68,
                  ),
                  'right' => 
                  array (
                    'type' => 'string',
                    'value' => '',
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 215,
                    'char' => 73,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 215,
                  'char' => 73,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 215,
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
                      'assign-type' => 'array-index',
                      'operator' => 'assign',
                      'variable' => 'result',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'string',
                          'value' => '_documentClass',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 216,
                          'char' => 40,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 216,
                          'char' => 49,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_documentClass',
                          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                          'line' => 216,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                        'line' => 216,
                        'char' => 64,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                      'line' => 216,
                      'char' => 64,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 217,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 218,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'result',
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 218,
                'char' => 22,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 219,
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
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 208,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 208,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 207,
          'last-line' => 221,
          'char' => 22,
        ),
        22 => 
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
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 221,
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
                    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                    'line' => 223,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 223,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 224,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 224,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
              'line' => 225,
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
                  'value' => 'Statement',
                  'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                  'line' => 222,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
                'line' => 222,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 222,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 221,
          'last-line' => 227,
          'char' => 19,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_QUERY',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'query',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 17,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 18,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_COUNT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'count',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 18,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 19,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_BATCHSIZE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'batchSize',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 19,
            'char' => 40,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 20,
          'char' => 9,
        ),
        3 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_RETRIES',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'retries',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 20,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 21,
          'char' => 9,
        ),
        4 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_BINDVARS',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'bindVars',
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 21,
            'char' => 38,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 22,
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
            'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
            'line' => 22,
            'char' => 35,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
          'line' => 23,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/statement.zep',
    'line' => 3,
    'char' => 5,
  ),
);