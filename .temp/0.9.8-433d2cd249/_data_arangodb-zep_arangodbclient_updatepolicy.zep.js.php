<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'UpdatePolicy',
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
          'name' => 'validate',
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
              'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
              'line' => 7,
              'char' => 49,
            ),
          ),
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
                  'type' => 'not-identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                    'line' => 10,
                    'char' => 20,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                      'line' => 10,
                      'char' => 34,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'LAST',
                      'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                      'line' => 10,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                    'line' => 10,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                  'line' => 10,
                  'char' => 34,
                ),
                'right' => 
                array (
                  'type' => 'not-identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                    'line' => 10,
                    'char' => 44,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'self',
                      'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                      'line' => 10,
                      'char' => 58,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ERROR',
                      'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                      'line' => 10,
                      'char' => 58,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                    'line' => 10,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                  'line' => 10,
                  'char' => 58,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                'line' => 10,
                'char' => 58,
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
                          'value' => 'Invalid update policy',
                          'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                          'line' => 11,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                        'line' => 11,
                        'char' => 62,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                    'line' => 11,
                    'char' => 63,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
                  'line' => 12,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
              'line' => 13,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
          'line' => 7,
          'last-line' => 15,
          'char' => 26,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'LAST',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'last',
            'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
            'line' => 5,
            'char' => 24,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
          'line' => 6,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ERROR',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'error',
            'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
            'line' => 6,
            'char' => 26,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
          'line' => 7,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/updatepolicy.zep',
    'line' => 3,
    'char' => 5,
  ),
);