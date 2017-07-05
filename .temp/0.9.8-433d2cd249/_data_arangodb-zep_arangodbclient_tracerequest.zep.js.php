<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'TraceRequest',
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
          'name' => '_headers',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
            'line' => 5,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
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
          'name' => '_method',
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
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
          'name' => '_requestUrl',
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
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
          'name' => '_body',
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
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
          'name' => '_type',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'request',
            'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
            'line' => 9,
            'char' => 32,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
          'line' => 10,
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
              'name' => 'headers',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 10,
              'char' => 46,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'method',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 10,
              'char' => 61,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'requestUrl',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 10,
              'char' => 80,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'body',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 10,
              'char' => 93,
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
                  'property' => '_headers',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'headers',
                    'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                    'line' => 12,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 12,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 13,
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
                  'property' => '_method',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'method',
                    'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                    'line' => 13,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 13,
                  'char' => 35,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 14,
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
                  'property' => '_requestUrl',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'requestUrl',
                    'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                    'line' => 14,
                    'char' => 43,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 14,
                  'char' => 43,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 15,
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
                  'property' => '_body',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'body',
                    'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                    'line' => 15,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 15,
                  'char' => 31,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 16,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
          'line' => 10,
          'last-line' => 18,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHeaders',
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
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 20,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_headers',
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 20,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 20,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 21,
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
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 19,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
            'line' => 19,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
          'line' => 18,
          'last-line' => 23,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getMethod',
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
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 25,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_method',
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 25,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 25,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 26,
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
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 24,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
            'line' => 24,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
          'line' => 23,
          'last-line' => 28,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getRequestUrl',
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
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 30,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_requestUrl',
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 30,
                  'char' => 33,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 30,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 31,
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
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 29,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
            'line' => 29,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
          'line' => 28,
          'last-line' => 33,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getBody',
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
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 35,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_body',
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 35,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 35,
                'char' => 27,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
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
                'data-type' => 'string',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 34,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
            'line' => 34,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
          'line' => 33,
          'last-line' => 38,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getType',
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
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 40,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_type',
                  'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                  'line' => 40,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 40,
                'char' => 27,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
              'line' => 41,
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
                'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
                'line' => 39,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
            'line' => 39,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
          'line' => 38,
          'last-line' => 43,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/tracerequest.zep',
    'line' => 3,
    'char' => 5,
  ),
);