<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'EdgeDefinition',
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
          'name' => '_relation',
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
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
          'name' => '_fromCollections',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 6,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
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
          'name' => '_toCollections',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 7,
            'char' => 34,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 8,
          'char' => 10,
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
              'name' => 'relation',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 8,
                'char' => 55,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 8,
              'char' => 55,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'fromCollections',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 8,
                'char' => 77,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 8,
              'char' => 77,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'toCollections',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 8,
                'char' => 97,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 8,
              'char' => 97,
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
                  'property' => '_relation',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'relation',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 10,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 10,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
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
                  'variable' => 'fromCollections',
                  'expr' => 
                  array (
                    'type' => 'cast',
                    'left' => 'array',
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'fromCollections',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 11,
                      'char' => 55,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 11,
                    'char' => 55,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 11,
                  'char' => 55,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
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
                  'variable' => 'toCollections',
                  'expr' => 
                  array (
                    'type' => 'cast',
                    'left' => 'array',
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'toCollections',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 12,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 12,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 12,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 13,
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
                  'property' => '_fromCollections',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'fromCollections',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 13,
                    'char' => 53,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 13,
                  'char' => 53,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 14,
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
                  'property' => '_toCollections',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'toCollections',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 14,
                    'char' => 49,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 14,
                  'char' => 49,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 15,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 8,
          'last-line' => 17,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setRelation',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'relation',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 17,
              'char' => 48,
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
                  'property' => '_relation',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'relation',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 19,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 19,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 20,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 18,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 17,
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
          'name' => 'getRelation',
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
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 24,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_relation',
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 24,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 24,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 25,
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
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 23,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 23,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 22,
          'last-line' => 27,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getToCollections',
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
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 29,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_toCollections',
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 29,
                  'char' => 36,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 29,
                'char' => 36,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
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
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 28,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 28,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 27,
          'last-line' => 32,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getFromCollections',
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
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 34,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_fromCollections',
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 34,
                  'char' => 38,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 34,
                'char' => 38,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 35,
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
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 33,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 33,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 32,
          'last-line' => 37,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'addToCollection',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'toCollection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 37,
              'char' => 56,
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
                  'property' => '_toCollections',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'toCollection',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 39,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 39,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 40,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 38,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 37,
          'last-line' => 42,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'addFromCollection',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'fromCollection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 42,
              'char' => 60,
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
                  'property' => '_fromCollections',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'fromCollection',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 44,
                    'char' => 54,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 44,
                  'char' => 54,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 45,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 43,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 42,
          'last-line' => 47,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'clearToCollection',
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
                  'property' => '_toCollections',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 49,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 49,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 50,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 48,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 47,
          'last-line' => 52,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'clearFromCollection',
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
                  'property' => '_fromCollections',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 54,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 54,
                  'char' => 41,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 55,
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
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 55,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_fromCollections',
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 55,
                  'char' => 38,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 55,
                'char' => 38,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 56,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 52,
          'last-line' => 58,
          'char' => 19,
        ),
        9 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'transformToArray',
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
                  'variable' => 'transformedEd',
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 60,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
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
                  'variable' => 'transformedEd',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 62,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 62,
                  'char' => 32,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 63,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'array-index',
                  'operator' => 'assign',
                  'variable' => 'transformedEd',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => 'collection',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 63,
                      'char' => 39,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 63,
                      'char' => 49,
                    ),
                    'name' => 'getRelation',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 63,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 63,
                  'char' => 63,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 64,
              'char' => 11,
            ),
            3 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'array-index',
                  'operator' => 'assign',
                  'variable' => 'transformedEd',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => 'from',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 64,
                      'char' => 33,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 64,
                      'char' => 43,
                    ),
                    'name' => 'getFromCollections',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 64,
                    'char' => 64,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 64,
                  'char' => 64,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 65,
              'char' => 11,
            ),
            4 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'array-index',
                  'operator' => 'assign',
                  'variable' => 'transformedEd',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => 'to',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 65,
                      'char' => 31,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 65,
                      'char' => 41,
                    ),
                    'name' => 'getToCollections',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 65,
                    'char' => 60,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 65,
                  'char' => 60,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 66,
              'char' => 14,
            ),
            5 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'transformedEd',
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 66,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 67,
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
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 59,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 59,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 58,
          'last-line' => 69,
          'char' => 19,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'createUndirectedRelation',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'relation',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 69,
              'char' => 68,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'vertexCollections',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 69,
              'char' => 93,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'new',
                'class' => 'EdgeDefinition',
                'dynamic' => 0,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'relation',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 71,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 71,
                    'char' => 43,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'vertexCollections',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 71,
                      'char' => 62,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 71,
                    'char' => 62,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'vertexCollections',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 71,
                      'char' => 81,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 71,
                    'char' => 81,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 71,
                'char' => 82,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 72,
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
                  'value' => 'EdgeDefinition',
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 70,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 70,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 70,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 69,
          'last-line' => 74,
          'char' => 26,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'createDirectedRelation',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'relation',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 74,
              'char' => 66,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'fromCollections',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 74,
              'char' => 83,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'toCollections',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 74,
              'char' => 98,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'new',
                'class' => 'EdgeDefinition',
                'dynamic' => 0,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'relation',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 76,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 76,
                    'char' => 43,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'fromCollections',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 76,
                      'char' => 60,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 76,
                    'char' => 60,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'toCollections',
                      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                      'line' => 76,
                      'char' => 75,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                    'line' => 76,
                    'char' => 75,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 76,
                'char' => 76,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
              'line' => 77,
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
                  'value' => 'EdgeDefinition',
                  'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                  'line' => 75,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
                'line' => 75,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
            'line' => 75,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
          'line' => 74,
          'last-line' => 79,
          'char' => 26,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/edgedefinition.zep',
    'line' => 3,
    'char' => 5,
  ),
);