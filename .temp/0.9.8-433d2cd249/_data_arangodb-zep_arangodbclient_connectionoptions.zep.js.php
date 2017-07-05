<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'ConnectionOptions',
    'abstract' => 0,
    'final' => 0,
    'implements' => 
    array (
      0 => 
      array (
        'type' => 'variable',
        'value' => '\\ArrayAccess',
        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
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
          'name' => '_values',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 5,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
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
          'name' => '_endpoint',
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 7,
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
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 38,
              'char' => 46,
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
                  'property' => '_values',
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
                          'type' => 'scall',
                          'dynamic-class' => 0,
                          'class' => 'self',
                          'dynamic' => 0,
                          'name' => 'getDefaults',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 40,
                          'char' => 60,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 40,
                        'char' => 60,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 40,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 40,
                        'char' => 69,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 40,
                    'char' => 70,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 40,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 41,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 41,
                  'char' => 14,
                ),
                'name' => 'validate',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 41,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 42,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 38,
          'last-line' => 44,
          'char' => 19,
        ),
        1 => 
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
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 46,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_values',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 46,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 46,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 47,
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
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 45,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 45,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 44,
          'last-line' => 49,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'offsetSet',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'offset',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 49,
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
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 49,
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
                  'assign-type' => 'object-property-array-index',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_values',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'variable',
                      'value' => 'offset',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 51,
                      'char' => 33,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 51,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 51,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 52,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 52,
                  'char' => 14,
                ),
                'name' => 'validate',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 52,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 53,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 49,
          'last-line' => 55,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'offsetExists',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'offset',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 55,
              'char' => 40,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
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
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 57,
                      'char' => 27,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 57,
                      'char' => 35,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 57,
                    'char' => 35,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'offset',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 57,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 57,
                  'char' => 43,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 57,
                'char' => 43,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 58,
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
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 56,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 56,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 55,
          'last-line' => 60,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'offsetUnset',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'offset',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 60,
              'char' => 39,
            ),
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
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 62,
                    'char' => 20,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_values',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 62,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 62,
                  'char' => 28,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'offset',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 62,
                  'char' => 35,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 62,
                'char' => 36,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 64,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 64,
                  'char' => 14,
                ),
                'name' => 'validate',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 64,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 65,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 60,
          'last-line' => 67,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'offsetGet',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'offset',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 67,
              'char' => 37,
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
                  'name' => 'array_key_exists',
                  'call-type' => 1,
                  'parameters' => 
                  array (
                    0 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'offset',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 69,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 69,
                      'char' => 36,
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
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 69,
                          'char' => 43,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_values',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 69,
                          'char' => 51,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 69,
                        'char' => 51,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 69,
                      'char' => 51,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 69,
                  'char' => 53,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 69,
                'char' => 53,
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
                            'value' => 'Invalid option ',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 70,
                            'char' => 57,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'offset',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 70,
                            'char' => 65,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 70,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 70,
                        'char' => 65,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 70,
                    'char' => 66,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 71,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 72,
              'char' => 14,
            ),
            1 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 72,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_values',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 72,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 72,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'offset',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 72,
                  'char' => 36,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 72,
                'char' => 37,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 73,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 67,
          'last-line' => 75,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getEndpoint',
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
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 77,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_endpoint',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 77,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 77,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'null',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 77,
                  'char' => 36,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 77,
                'char' => 36,
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
                      'property' => '_endpoint',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'Endpoint',
                        'dynamic' => 0,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'property-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'this',
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 78,
                                  'char' => 53,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_values',
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 78,
                                  'char' => 61,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 78,
                                'char' => 61,
                              ),
                              'right' => 
                              array (
                                'type' => 'static-constant-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 78,
                                  'char' => 83,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_ENDPOINT',
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 78,
                                  'char' => 83,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 78,
                                'char' => 83,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 78,
                              'char' => 84,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 78,
                            'char' => 84,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 78,
                        'char' => 85,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 78,
                      'char' => 85,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 79,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 80,
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
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 80,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_endpoint',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 80,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 80,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 81,
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
                  'value' => 'Endpoint',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 76,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 76,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 76,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 75,
          'last-line' => 83,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'getDefaults',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
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
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 86,
                        'char' => 35,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_ENDPOINT',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 86,
                        'char' => 35,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 86,
                      'char' => 35,
                    ),
                    'value' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 86,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 86,
                    'char' => 41,
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
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 87,
                        'char' => 31,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_HOST',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 87,
                        'char' => 31,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 87,
                      'char' => 31,
                    ),
                    'value' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 87,
                      'char' => 37,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 87,
                    'char' => 37,
                  ),
                  2 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 88,
                        'char' => 31,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_PORT',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 88,
                        'char' => 31,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 88,
                      'char' => 31,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 88,
                        'char' => 60,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_PORT',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 88,
                        'char' => 60,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 88,
                      'char' => 60,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 88,
                    'char' => 60,
                  ),
                  3 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 89,
                        'char' => 34,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_TIMEOUT',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 89,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 89,
                      'char' => 34,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 89,
                        'char' => 66,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_TIMEOUT',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 89,
                        'char' => 66,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 89,
                      'char' => 66,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 89,
                    'char' => 66,
                  ),
                  4 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 90,
                        'char' => 33,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_CREATE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 90,
                        'char' => 33,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 90,
                      'char' => 33,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 90,
                        'char' => 64,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_CREATE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 90,
                        'char' => 64,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 90,
                      'char' => 64,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 90,
                    'char' => 64,
                  ),
                  5 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 91,
                        'char' => 40,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_UPDATE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 91,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 91,
                      'char' => 40,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 91,
                        'char' => 78,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_UPDATE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 91,
                        'char' => 78,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 91,
                      'char' => 78,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 91,
                    'char' => 78,
                  ),
                  6 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 92,
                        'char' => 41,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_REPLACE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 92,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 92,
                      'char' => 41,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 92,
                        'char' => 80,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_REPLACE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 92,
                        'char' => 80,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 92,
                      'char' => 80,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 92,
                    'char' => 80,
                  ),
                  7 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 93,
                        'char' => 40,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_DELETE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 93,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 93,
                      'char' => 40,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 93,
                        'char' => 78,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_DELETE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 93,
                        'char' => 78,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 93,
                      'char' => 78,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 93,
                    'char' => 78,
                  ),
                  8 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 94,
                        'char' => 35,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_REVISION',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 94,
                        'char' => 35,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 94,
                      'char' => 35,
                    ),
                    'value' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 94,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 94,
                    'char' => 41,
                  ),
                  9 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 95,
                        'char' => 36,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_WAIT_SYNC',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 95,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 95,
                      'char' => 36,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 95,
                        'char' => 70,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_WAIT_SYNC',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 95,
                        'char' => 70,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 95,
                      'char' => 70,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 95,
                    'char' => 70,
                  ),
                  10 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 96,
                        'char' => 36,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_BATCHSIZE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 96,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 96,
                      'char' => 36,
                    ),
                    'value' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 96,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 96,
                    'char' => 42,
                  ),
                  11 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 97,
                        'char' => 39,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_JOURNAL_SIZE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 97,
                        'char' => 39,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 97,
                      'char' => 39,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 97,
                        'char' => 76,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_JOURNAL_SIZE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 97,
                        'char' => 76,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 97,
                      'char' => 76,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 97,
                    'char' => 76,
                  ),
                  12 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 98,
                        'char' => 36,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_IS_SYSTEM',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 98,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 98,
                      'char' => 36,
                    ),
                    'value' => 
                    array (
                      'type' => 'bool',
                      'value' => 'false',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 98,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 98,
                    'char' => 43,
                  ),
                  13 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 99,
                        'char' => 38,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_IS_VOLATILE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 99,
                        'char' => 38,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 99,
                      'char' => 38,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 99,
                        'char' => 74,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_IS_VOLATILE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 99,
                        'char' => 74,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 99,
                      'char' => 74,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 99,
                    'char' => 74,
                  ),
                  14 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 100,
                        'char' => 37,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_CONNECTION',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 100,
                        'char' => 37,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 100,
                      'char' => 37,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 100,
                        'char' => 72,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_CONNECTION',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 100,
                        'char' => 72,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 100,
                      'char' => 72,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 100,
                    'char' => 72,
                  ),
                  15 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 101,
                        'char' => 32,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_TRACE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 101,
                        'char' => 32,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 101,
                      'char' => 32,
                    ),
                    'value' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 101,
                      'char' => 38,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 101,
                    'char' => 38,
                  ),
                  16 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 102,
                        'char' => 41,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_ENHANCED_TRACE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 102,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 102,
                      'char' => 41,
                    ),
                    'value' => 
                    array (
                      'type' => 'bool',
                      'value' => 'false',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 102,
                      'char' => 48,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 102,
                    'char' => 48,
                  ),
                  17 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 103,
                        'char' => 38,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_VERIFY_CERT',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 103,
                        'char' => 38,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 103,
                      'char' => 38,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 103,
                        'char' => 74,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_VERIFY_CERT',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 103,
                        'char' => 74,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 103,
                      'char' => 74,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 103,
                    'char' => 74,
                  ),
                  18 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 104,
                        'char' => 44,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_ALLOW_SELF_SIGNED',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 104,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 104,
                      'char' => 44,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 104,
                        'char' => 86,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_ALLOW_SELF_SIGNED',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 104,
                        'char' => 86,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 104,
                      'char' => 86,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 104,
                    'char' => 86,
                  ),
                  19 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 105,
                        'char' => 34,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_CIPHERS',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 105,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 105,
                      'char' => 34,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 105,
                        'char' => 66,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_CIPHERS',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 105,
                        'char' => 66,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 105,
                      'char' => 66,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 105,
                    'char' => 66,
                  ),
                  20 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 106,
                        'char' => 36,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_AUTH_USER',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 106,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 106,
                      'char' => 36,
                    ),
                    'value' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 106,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 106,
                    'char' => 42,
                  ),
                  21 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 107,
                        'char' => 38,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_AUTH_PASSWD',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 107,
                        'char' => 38,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 107,
                      'char' => 38,
                    ),
                    'value' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 107,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 107,
                    'char' => 44,
                  ),
                  22 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 108,
                        'char' => 36,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_AUTH_TYPE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 108,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 108,
                      'char' => 36,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 108,
                        'char' => 70,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_AUTH_TYPE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 108,
                        'char' => 70,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 108,
                      'char' => 70,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 108,
                    'char' => 70,
                  ),
                  23 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 109,
                        'char' => 36,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_RECONNECT',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 109,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 109,
                      'char' => 36,
                    ),
                    'value' => 
                    array (
                      'type' => 'bool',
                      'value' => 'false',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 109,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 109,
                    'char' => 43,
                  ),
                  24 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 110,
                        'char' => 32,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_BATCH',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 110,
                        'char' => 32,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 110,
                      'char' => 32,
                    ),
                    'value' => 
                    array (
                      'type' => 'bool',
                      'value' => 'false',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 110,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 110,
                    'char' => 39,
                  ),
                  25 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 111,
                        'char' => 36,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_BATCHPART',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 111,
                        'char' => 36,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 111,
                      'char' => 36,
                    ),
                    'value' => 
                    array (
                      'type' => 'bool',
                      'value' => 'false',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 111,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 111,
                    'char' => 43,
                  ),
                  26 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 112,
                        'char' => 35,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_DATABASE',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 112,
                        'char' => 35,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 112,
                      'char' => 35,
                    ),
                    'value' => 
                    array (
                      'type' => 'string',
                      'value' => '_system',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 112,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 112,
                    'char' => 46,
                  ),
                  27 => 
                  array (
                    'key' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 113,
                        'char' => 45,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_CHECK_UTF8_CONFORM',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 113,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 113,
                      'char' => 45,
                    ),
                    'value' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DefaultValues',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 114,
                        'char' => 9,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'DEFAULT_CHECK_UTF8_CONFORM',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 114,
                        'char' => 9,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 114,
                      'char' => 9,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 114,
                    'char' => 9,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 114,
                'char' => 10,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 115,
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
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 84,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 84,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 83,
          'last-line' => 117,
          'char' => 29,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'getSupportedAuthTypes',
          'statements' => 
          array (
            0 => 
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
                      'type' => 'string',
                      'value' => 'Basic',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 119,
                      'char' => 24,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 119,
                    'char' => 24,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 119,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
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
                'data-type' => 'array',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 118,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 118,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 117,
          'last-line' => 122,
          'char' => 29,
        ),
        9 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'getSupportedConnectionTypes',
          'statements' => 
          array (
            0 => 
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
                      'type' => 'string',
                      'value' => 'Close',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 124,
                      'char' => 24,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 124,
                    'char' => 24,
                  ),
                  1 => 
                  array (
                    'value' => 
                    array (
                      'type' => 'string',
                      'value' => 'Keep-Alive',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 124,
                      'char' => 38,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 124,
                    'char' => 38,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 124,
                'char' => 39,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
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
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 123,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 123,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 122,
          'last-line' => 127,
          'char' => 29,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
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
                  'variable' => 'type',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 129,
                  'char' => 17,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 131,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'and',
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
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 131,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 131,
                      'char' => 25,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 131,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 131,
                      'char' => 43,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'OPTION_HOST',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 131,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 131,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 131,
                  'char' => 46,
                ),
                'right' => 
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
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'property-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 131,
                              'char' => 64,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_values',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 131,
                              'char' => 72,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 131,
                            'char' => 72,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 131,
                              'char' => 90,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_HOST',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 131,
                              'char' => 90,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 131,
                            'char' => 90,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 131,
                          'char' => 91,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 131,
                        'char' => 91,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 131,
                    'char' => 93,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 131,
                  'char' => 93,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 131,
                'char' => 93,
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
                          'value' => 'host should be a string',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 132,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 132,
                        'char' => 64,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 132,
                    'char' => 65,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 133,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 134,
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
                  'type' => 'array-access',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 134,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 134,
                      'char' => 25,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 134,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 134,
                      'char' => 43,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'OPTION_PORT',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 134,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 134,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 134,
                  'char' => 46,
                ),
                'right' => 
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
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'property-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 134,
                              'char' => 61,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_values',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 134,
                              'char' => 69,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 134,
                            'char' => 69,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 134,
                              'char' => 87,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_PORT',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 134,
                              'char' => 87,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 134,
                            'char' => 87,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 134,
                          'char' => 88,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 134,
                        'char' => 88,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 134,
                    'char' => 90,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 134,
                  'char' => 90,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 134,
                'char' => 90,
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
                          'value' => 'port should be an integer',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 135,
                          'char' => 66,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 135,
                        'char' => 66,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 135,
                    'char' => 67,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 136,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 137,
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
                  'type' => 'array-access',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 137,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 137,
                      'char' => 25,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 137,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 137,
                      'char' => 43,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'OPTION_HOST',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 137,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 137,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 137,
                  'char' => 46,
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
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 137,
                      'char' => 53,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 137,
                      'char' => 61,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 137,
                    'char' => 61,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 137,
                      'char' => 83,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'OPTION_ENDPOINT',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 137,
                      'char' => 83,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 137,
                    'char' => 83,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 137,
                  'char' => 85,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 137,
                'char' => 85,
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
                          'value' => 'must not specify both host and endpoint',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 138,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 138,
                        'char' => 80,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 138,
                    'char' => 81,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 139,
                  'char' => 9,
                ),
              ),
              'else_statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'and',
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
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 140,
                          'char' => 21,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_values',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 140,
                          'char' => 29,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 140,
                        'char' => 29,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 140,
                          'char' => 47,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_HOST',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 140,
                          'char' => 47,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 140,
                        'char' => 47,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 140,
                      'char' => 50,
                    ),
                    'right' => 
                    array (
                      'type' => 'not',
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
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 140,
                            'char' => 58,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_values',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 140,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 140,
                          'char' => 66,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 140,
                            'char' => 88,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_ENDPOINT',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 140,
                            'char' => 88,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 140,
                          'char' => 88,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 140,
                        'char' => 90,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 140,
                      'char' => 90,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 140,
                    'char' => 90,
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
                          'property' => '_values',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'self',
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 141,
                                'char' => 56,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'OPTION_ENDPOINT',
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 141,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 141,
                              'char' => 56,
                            ),
                          ),
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
                                  'type' => 'string',
                                  'value' => 'tcp://',
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 141,
                                  'char' => 70,
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
                                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                      'line' => 141,
                                      'char' => 77,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => '_values',
                                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                      'line' => 141,
                                      'char' => 85,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                    'line' => 141,
                                    'char' => 85,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'static-constant-access',
                                    'left' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'self',
                                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                      'line' => 141,
                                      'char' => 103,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'OPTION_HOST',
                                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                      'line' => 141,
                                      'char' => 103,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                    'line' => 141,
                                    'char' => 103,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 141,
                                  'char' => 105,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 141,
                                'char' => 105,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => ':',
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 141,
                                'char' => 111,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 141,
                              'char' => 111,
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
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 141,
                                  'char' => 118,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => '_values',
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 141,
                                  'char' => 126,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 141,
                                'char' => 126,
                              ),
                              'right' => 
                              array (
                                'type' => 'static-constant-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 141,
                                  'char' => 144,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_PORT',
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 141,
                                  'char' => 144,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 141,
                                'char' => 144,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 141,
                              'char' => 145,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 141,
                            'char' => 145,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 141,
                          'char' => 145,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 142,
                      'char' => 21,
                    ),
                    1 => 
                    array (
                      'type' => 'unset',
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
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 142,
                            'char' => 28,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_values',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 142,
                            'char' => 36,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 142,
                          'char' => 36,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 142,
                            'char' => 54,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_HOST',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 142,
                            'char' => 54,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 142,
                          'char' => 54,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 142,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 143,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 144,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 145,
              'char' => 12,
            ),
            4 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 145,
                  'char' => 14,
                ),
                'name' => 'getEndpoint',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 145,
                'char' => 28,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 146,
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
                  'variable' => 'type',
                  'expr' => 
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
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'property-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 146,
                              'char' => 43,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_values',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 146,
                              'char' => 51,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 146,
                            'char' => 51,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 146,
                              'char' => 73,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_ENDPOINT',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 146,
                              'char' => 73,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 146,
                            'char' => 73,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 146,
                          'char' => 74,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 146,
                        'char' => 74,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 146,
                    'char' => 75,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 146,
                  'char' => 75,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 147,
              'char' => 10,
            ),
            6 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'equals',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'type',
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 147,
                  'char' => 18,
                ),
                'right' => 
                array (
                  'type' => 'static-constant-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'Endpoint',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 147,
                    'char' => 40,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'TYPE_UNIX',
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 147,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 147,
                  'char' => 40,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 147,
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
                      'assign-type' => 'object-property-array-index',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => '_values',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 148,
                            'char' => 48,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'OPTION_PORT',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 148,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 148,
                          'char' => 48,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'int',
                        'value' => '0',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 148,
                        'char' => 53,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 148,
                      'char' => 53,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 149,
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
                      'value' => 'type',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 149,
                      'char' => 24,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'Endpoint',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 149,
                        'char' => 45,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'TYPE_SSL',
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 149,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 149,
                      'char' => 45,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 149,
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
                          'assign-type' => 'object-property-array-index',
                          'operator' => 'assign',
                          'variable' => 'this',
                          'property' => '_values',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'self',
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 150,
                                'char' => 48,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'OPTION_PORT',
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 150,
                                'char' => 48,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 150,
                              'char' => 48,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'int',
                            'value' => '0',
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 150,
                            'char' => 53,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 150,
                          'char' => 53,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 151,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 152,
                  'char' => 10,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 152,
              'char' => 10,
            ),
            7 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'and',
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
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 152,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 152,
                      'char' => 25,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 152,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 152,
                      'char' => 48,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'OPTION_AUTH_TYPE',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 152,
                      'char' => 48,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 152,
                    'char' => 48,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 152,
                  'char' => 51,
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
                            'type' => 'property-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 152,
                              'char' => 68,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_values',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 152,
                              'char' => 76,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 152,
                            'char' => 76,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 152,
                              'char' => 99,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_AUTH_TYPE',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 152,
                              'char' => 99,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 152,
                            'char' => 99,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 152,
                          'char' => 100,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 152,
                        'char' => 100,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'scall',
                          'dynamic-class' => 0,
                          'class' => 'self',
                          'dynamic' => 0,
                          'name' => 'getSupportedAuthTypes',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 152,
                          'char' => 131,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 152,
                        'char' => 131,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 152,
                          'char' => 137,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 152,
                        'char' => 137,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 152,
                    'char' => 139,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 152,
                  'char' => 139,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 152,
                'char' => 139,
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
                          'value' => 'unsupported authorization method',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 153,
                          'char' => 73,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 153,
                        'char' => 73,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 153,
                    'char' => 74,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 154,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 155,
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
                  'type' => 'array-access',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 155,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 155,
                      'char' => 25,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 155,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 155,
                      'char' => 49,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'OPTION_CONNECTION',
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 155,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 155,
                    'char' => 49,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 155,
                  'char' => 52,
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
                            'type' => 'property-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 155,
                              'char' => 69,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_values',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 155,
                              'char' => 77,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 155,
                            'char' => 77,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 155,
                              'char' => 101,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'OPTION_CONNECTION',
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 155,
                              'char' => 101,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                            'line' => 155,
                            'char' => 101,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 155,
                          'char' => 102,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 155,
                        'char' => 102,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'scall',
                          'dynamic-class' => 0,
                          'class' => 'self',
                          'dynamic' => 0,
                          'name' => 'getSupportedConnectionTypes',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 155,
                          'char' => 139,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 155,
                        'char' => 139,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 155,
                          'char' => 145,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 155,
                        'char' => 145,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 155,
                    'char' => 147,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 155,
                  'char' => 147,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 155,
                'char' => 147,
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
                                'value' => 'unsupported connection value \'%s\'',
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 156,
                                'char' => 82,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 156,
                              'char' => 82,
                            ),
                            1 => 
                            array (
                              'parameter' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'property-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'this',
                                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                    'line' => 156,
                                    'char' => 89,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => '_values',
                                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                    'line' => 156,
                                    'char' => 97,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 156,
                                  'char' => 97,
                                ),
                                'right' => 
                                array (
                                  'type' => 'static-constant-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'self',
                                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                    'line' => 156,
                                    'char' => 121,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'OPTION_CONNECTION',
                                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                    'line' => 156,
                                    'char' => 121,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                  'line' => 156,
                                  'char' => 121,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                                'line' => 156,
                                'char' => 122,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                              'line' => 156,
                              'char' => 122,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 156,
                          'char' => 123,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 156,
                        'char' => 123,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 156,
                    'char' => 124,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                  'line' => 157,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 158,
              'char' => 20,
            ),
            9 => 
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
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 158,
                          'char' => 37,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_values',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 158,
                          'char' => 45,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 158,
                        'char' => 45,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 158,
                          'char' => 72,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_UPDATE_POLICY',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 158,
                          'char' => 72,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 158,
                        'char' => 72,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 158,
                      'char' => 73,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 158,
                    'char' => 73,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 158,
                'char' => 74,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 159,
              'char' => 20,
            ),
            10 => 
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
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 159,
                          'char' => 37,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_values',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 159,
                          'char' => 45,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 159,
                        'char' => 45,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 159,
                          'char' => 73,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_REPLACE_POLICY',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 159,
                          'char' => 73,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 159,
                        'char' => 73,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 159,
                      'char' => 74,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 159,
                    'char' => 74,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 159,
                'char' => 75,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 160,
              'char' => 20,
            ),
            11 => 
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
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 160,
                          'char' => 37,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_values',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 160,
                          'char' => 45,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 160,
                        'char' => 45,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 160,
                          'char' => 72,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_DELETE_POLICY',
                          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                          'line' => 160,
                          'char' => 72,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                        'line' => 160,
                        'char' => 72,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                      'line' => 160,
                      'char' => 73,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                    'line' => 160,
                    'char' => 73,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
                'line' => 160,
                'char' => 74,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
              'line' => 161,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 127,
          'last-line' => 163,
          'char' => 22,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_ENDPOINT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'endpoint',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 7,
            'char' => 39,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 8,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_HOST',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'host',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 8,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 9,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_PORT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'port',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 9,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 10,
          'char' => 9,
        ),
        3 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_TIMEOUT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'timeout',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 10,
            'char' => 37,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 11,
          'char' => 9,
        ),
        4 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_TRACE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'trace',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 11,
            'char' => 33,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 12,
          'char' => 9,
        ),
        5 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_VERIFY_CERT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'verifyCert',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 12,
            'char' => 44,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 13,
          'char' => 9,
        ),
        6 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_ALLOW_SELF_SIGNED',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'allowSelfSigned',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 13,
            'char' => 55,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 14,
          'char' => 9,
        ),
        7 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_CIPHERS',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'ciphers',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 14,
            'char' => 37,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 15,
          'char' => 9,
        ),
        8 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_ENHANCED_TRACE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'enhancedTrace',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 15,
            'char' => 50,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 16,
          'char' => 9,
        ),
        9 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_CREATE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'createCollection',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 16,
            'char' => 45,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 17,
          'char' => 9,
        ),
        10 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_REVISION',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'rev',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 17,
            'char' => 34,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 18,
          'char' => 9,
        ),
        11 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_UPDATE_POLICY',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'policy',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 18,
            'char' => 42,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 19,
          'char' => 9,
        ),
        12 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_UPDATE_KEEPNULL',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'keepNull',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 19,
            'char' => 46,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 20,
          'char' => 9,
        ),
        13 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_REPLACE_POLICY',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'policy',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 20,
            'char' => 43,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 21,
          'char' => 9,
        ),
        14 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_DELETE_POLICY',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'policy',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 21,
            'char' => 42,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 22,
          'char' => 9,
        ),
        15 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_WAIT_SYNC',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'waitForSync',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 22,
            'char' => 43,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 23,
          'char' => 9,
        ),
        16 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_LIMIT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'limit',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 23,
            'char' => 33,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 24,
          'char' => 9,
        ),
        17 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_SKIP',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'skip',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 24,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 25,
          'char' => 9,
        ),
        18 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_BATCHSIZE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'batchSize',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 25,
            'char' => 41,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 26,
          'char' => 9,
        ),
        19 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_JOURNAL_SIZE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'journalSize',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 26,
            'char' => 46,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 27,
          'char' => 9,
        ),
        20 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_IS_SYSTEM',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'isSystem',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 27,
            'char' => 40,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 28,
          'char' => 9,
        ),
        21 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_IS_VOLATILE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'isVolatile',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 28,
            'char' => 44,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 29,
          'char' => 9,
        ),
        22 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_AUTH_USER',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'AuthUser',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 29,
            'char' => 40,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 30,
          'char' => 9,
        ),
        23 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_AUTH_PASSWD',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'AuthPasswd',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 30,
            'char' => 44,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 31,
          'char' => 9,
        ),
        24 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_AUTH_TYPE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'AuthType',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 31,
            'char' => 40,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 32,
          'char' => 9,
        ),
        25 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_CONNECTION',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'Connection',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 32,
            'char' => 43,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 33,
          'char' => 9,
        ),
        26 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_RECONNECT',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'Reconnect',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 33,
            'char' => 41,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 34,
          'char' => 9,
        ),
        27 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_BATCH',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'Batch',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 34,
            'char' => 33,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 35,
          'char' => 9,
        ),
        28 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_BATCHPART',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'BatchPart',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 35,
            'char' => 41,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 36,
          'char' => 9,
        ),
        29 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_DATABASE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'database',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 36,
            'char' => 39,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 37,
          'char' => 9,
        ),
        30 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_CHECK_UTF8_CONFORM',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'CheckUtf8Conform',
            'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
            'line' => 37,
            'char' => 57,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
          'line' => 38,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/connectionoptions.zep',
    'line' => 3,
    'char' => 5,
  ),
);