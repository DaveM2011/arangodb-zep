<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'VertexHandler',
    'abstract' => 0,
    'final' => 0,
    'extends' => 'DocumentHandler',
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
          'name' => 'createFromArrayWithContext',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'data',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
              'line' => 5,
              'char' => 52,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
              'line' => 5,
              'char' => 61,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
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
                      'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
                      'line' => 7,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
                    'line' => 7,
                    'char' => 44,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
                      'line' => 7,
                      'char' => 53,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
                    'line' => 7,
                    'char' => 53,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
                'line' => 7,
                'char' => 54,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
              'line' => 8,
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
                  'value' => 'Document',
                  'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
                  'line' => 6,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
                'line' => 6,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
            'line' => 6,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
          'line' => 5,
          'last-line' => 10,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/vertexhandler.zep',
    'line' => 3,
    'char' => 5,
  ),
);