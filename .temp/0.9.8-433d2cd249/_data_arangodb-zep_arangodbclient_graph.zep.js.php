<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Graph',
    'abstract' => 0,
    'final' => 0,
    'extends' => 'Document',
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
          'name' => '_edgeDefinitions',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 10,
            'char' => 36,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 11,
          'char' => 13,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => '_orphanCollections',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 11,
            'char' => 38,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 12,
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
              'name' => 'name',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 12,
                'char' => 50,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 12,
              'char' => 50,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 12,
                'char' => 70,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 12,
              'char' => 70,
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
                          'type' => 'variable',
                          'value' => 'name',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 14,
                          'char' => 26,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 14,
                        'char' => 26,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 14,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 14,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'not-identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'name',
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 14,
                    'char' => 38,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 14,
                    'char' => 45,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 14,
                  'char' => 45,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 14,
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
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 15,
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
                          'type' => 'string',
                          'value' => '_key',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 15,
                          'char' => 29,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 15,
                        'char' => 29,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'name',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 15,
                          'char' => 35,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 15,
                        'char' => 35,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 15,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 16,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 17,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'scall',
              'expr' => 
              array (
                'type' => 'scall',
                'dynamic-class' => 0,
                'class' => 'parent',
                'dynamic' => 0,
                'name' => '__construct',
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 17,
                      'char' => 36,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 17,
                    'char' => 36,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 17,
                'char' => 37,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 18,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 12,
          'last-line' => 20,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'addEdgeDefinition',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'edgeDefinition',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'EdgeDefinition',
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 20,
                'char' => 69,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 20,
              'char' => 70,
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
                  'property' => '_edgeDefinitions',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'edgeDefinition',
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 22,
                    'char' => 54,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 22,
                  'char' => 54,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 23,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 23,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 24,
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
                  'value' => 'Graph',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 21,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 21,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 21,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 20,
          'last-line' => 26,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getEdgeDefinitions',
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
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 28,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_edgeDefinitions',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 28,
                  'char' => 38,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 28,
                'char' => 38,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 29,
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
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 27,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 27,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 26,
          'last-line' => 31,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'addOrphanCollection',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'orphanCollection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 31,
              'char' => 64,
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
                  'property' => '_orphanCollections',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'orphanCollection',
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 33,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 33,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 34,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 34,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
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
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'Graph',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 32,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 32,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 32,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 31,
          'last-line' => 37,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getOrphanCollections',
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
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 39,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_orphanCollections',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 39,
                  'char' => 40,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 39,
                'char' => 40,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 40,
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
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 38,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 38,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 37,
          'last-line' => 42,
          'char' => 19,
        ),
        5 => 
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
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 42,
              'char' => 35,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 42,
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
                  'variable' => 'edgeDefinitionBaseObject',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 44,
                  'char' => 37,
                ),
                1 => 
                array (
                  'variable' => 'ed',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 44,
                  'char' => 41,
                ),
                2 => 
                array (
                  'variable' => 'edgeDefinition',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 44,
                  'char' => 57,
                ),
                3 => 
                array (
                  'variable' => 'from',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 44,
                  'char' => 63,
                ),
                4 => 
                array (
                  'variable' => 'to',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 44,
                  'char' => 67,
                ),
                5 => 
                array (
                  'variable' => 'o',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 44,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 46,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'identical',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 46,
                  'char' => 18,
                ),
                'right' => 
                array (
                  'type' => 'static-constant-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'self',
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 46,
                    'char' => 49,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'ENTRY_EDGE_DEFINITIONS',
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 46,
                    'char' => 49,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 46,
                  'char' => 49,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 46,
                'char' => 49,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 47,
                      'char' => 21,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_doValidate',
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 47,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 47,
                    'char' => 34,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'scall',
                      'expr' => 
                      array (
                        'type' => 'scall',
                        'dynamic-class' => 0,
                        'class' => 'ValueValidator',
                        'dynamic' => 0,
                        'name' => 'validate',
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 48,
                              'char' => 47,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 48,
                            'char' => 47,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 48,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 49,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 50,
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
                      'variable' => 'edgeDefinitionBaseObject',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'EdgeDefinition',
                        'dynamic' => 0,
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 50,
                        'char' => 65,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 50,
                      'char' => 65,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 51,
                  'char' => 15,
                ),
                2 => 
                array (
                  'type' => 'for',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 51,
                    'char' => 29,
                  ),
                  'value' => 'ed',
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
                          'variable' => 'edgeDefinition',
                          'expr' => 
                          array (
                            'type' => 'clone',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'edgeDefinitionBaseObject',
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 52,
                              'char' => 69,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 52,
                            'char' => 69,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 52,
                          'char' => 69,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 53,
                      'char' => 19,
                    ),
                    1 => 
                    array (
                      'type' => 'for',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ed',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 53,
                          'char' => 31,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 53,
                            'char' => 48,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_FROM',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 53,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 53,
                          'char' => 48,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 53,
                        'char' => 50,
                      ),
                      'value' => 'from',
                      'reverse' => 0,
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
                              'value' => 'edgeDefinition',
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 54,
                              'char' => 36,
                            ),
                            'name' => 'addFromCollection',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'from',
                                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                  'line' => 54,
                                  'char' => 59,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                'line' => 54,
                                'char' => 59,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 54,
                            'char' => 60,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 55,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 56,
                      'char' => 19,
                    ),
                    2 => 
                    array (
                      'type' => 'for',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ed',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 56,
                          'char' => 29,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 56,
                            'char' => 44,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_TO',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 56,
                            'char' => 44,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 56,
                          'char' => 44,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 56,
                        'char' => 46,
                      ),
                      'value' => 'to',
                      'reverse' => 0,
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
                              'value' => 'edgeDefinition',
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 57,
                              'char' => 36,
                            ),
                            'name' => 'addToCollection',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'to',
                                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                  'line' => 57,
                                  'char' => 55,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                'line' => 57,
                                'char' => 55,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 57,
                            'char' => 56,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 58,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 59,
                      'char' => 30,
                    ),
                    3 => 
                    array (
                      'type' => 'mcall',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'edgeDefinition',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 59,
                          'char' => 32,
                        ),
                        'name' => 'setRelation',
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
                                'value' => 'ed',
                                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                'line' => 59,
                                'char' => 47,
                              ),
                              'right' => 
                              array (
                                'type' => 'static-constant-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                  'line' => 59,
                                  'char' => 70,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'ENTRY_COLLECTION',
                                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                  'line' => 59,
                                  'char' => 70,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                'line' => 59,
                                'char' => 70,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 59,
                              'char' => 71,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 59,
                            'char' => 71,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 59,
                        'char' => 72,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 60,
                      'char' => 20,
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
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 60,
                          'char' => 22,
                        ),
                        'name' => 'addEdgeDefinition',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'edgeDefinition',
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 60,
                              'char' => 55,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 60,
                            'char' => 55,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 60,
                        'char' => 56,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 61,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 62,
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
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 63,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 63,
                        'char' => 55,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_ORPHAN_COLLECTIONS',
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 63,
                        'char' => 55,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 63,
                      'char' => 55,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 63,
                    'char' => 55,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'if',
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 64,
                          'char' => 25,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_doValidate',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 64,
                          'char' => 38,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 64,
                        'char' => 38,
                      ),
                      'statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'scall',
                          'expr' => 
                          array (
                            'type' => 'scall',
                            'dynamic-class' => 0,
                            'class' => 'ValueValidator',
                            'dynamic' => 0,
                            'name' => 'validate',
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'value',
                                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                  'line' => 65,
                                  'char' => 51,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                'line' => 65,
                                'char' => 51,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 65,
                            'char' => 52,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 66,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 67,
                      'char' => 19,
                    ),
                    1 => 
                    array (
                      'type' => 'for',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'value',
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 67,
                        'char' => 32,
                      ),
                      'value' => 'o',
                      'reverse' => 0,
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
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 68,
                              'char' => 26,
                            ),
                            'name' => 'addOrphanCollection',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'o',
                                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                  'line' => 68,
                                  'char' => 48,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                'line' => 68,
                                'char' => 48,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 68,
                            'char' => 49,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 69,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 70,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'scall',
                      'expr' => 
                      array (
                        'type' => 'scall',
                        'dynamic-class' => 0,
                        'class' => 'parent',
                        'dynamic' => 0,
                        'name' => 'set',
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'key',
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 71,
                              'char' => 32,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 71,
                            'char' => 32,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                              'line' => 71,
                              'char' => 39,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 71,
                            'char' => 39,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 71,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 72,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 73,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 74,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 42,
          'last-line' => 76,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getSingleUndirectedRelation',
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
                  'variable' => 'ed',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 78,
                  'char' => 15,
                ),
                1 => 
                array (
                  'variable' => 'a',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 78,
                  'char' => 18,
                ),
                2 => 
                array (
                  'variable' => 'b',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 78,
                  'char' => 21,
                ),
                3 => 
                array (
                  'variable' => 'c',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 78,
                  'char' => 24,
                ),
                4 => 
                array (
                  'variable' => 'eD',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 78,
                  'char' => 28,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 80,
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
                  'variable' => 'ed',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 80,
                      'char' => 24,
                    ),
                    'name' => 'getEdgeDefinitions',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 80,
                    'char' => 45,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 80,
                  'char' => 45,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 81,
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
                        'value' => 'ed',
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 81,
                        'char' => 20,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 81,
                      'char' => 20,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 81,
                  'char' => 22,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '0',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 81,
                  'char' => 26,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 81,
                'char' => 26,
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
                      'variable' => 'a',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ed',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 82,
                          'char' => 23,
                        ),
                        'right' => 
                        array (
                          'type' => 'int',
                          'value' => '0',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 82,
                          'char' => 25,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 82,
                        'char' => 26,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 82,
                      'char' => 26,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 83,
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
                      'variable' => 'b',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'a',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 83,
                          'char' => 24,
                        ),
                        'name' => 'getFromCollections',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 83,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 83,
                      'char' => 45,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 84,
                  'char' => 15,
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
                      'variable' => 'c',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'a',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 84,
                          'char' => 24,
                        ),
                        'name' => 'getToCollections',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 84,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 84,
                      'char' => 43,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 85,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 86,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'or',
                'left' => 
                array (
                  'type' => 'greater',
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
                          'value' => 'ed',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 86,
                          'char' => 20,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 86,
                        'char' => 20,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 86,
                    'char' => 22,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '1',
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 86,
                    'char' => 27,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 86,
                  'char' => 27,
                ),
                'right' => 
                array (
                  'type' => 'and',
                  'left' => 
                  array (
                    'type' => 'identical',
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
                            'value' => 'ed',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 37,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 86,
                          'char' => 37,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 86,
                      'char' => 41,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '1',
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 86,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 86,
                    'char' => 46,
                  ),
                  'right' => 
                  array (
                    'type' => 'list',
                    'left' => 
                    array (
                      'type' => 'or',
                      'left' => 
                      array (
                        'type' => 'or',
                        'left' => 
                        array (
                          'type' => 'greater',
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
                                  'type' => 'mcall',
                                  'variable' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'a',
                                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                    'line' => 86,
                                    'char' => 57,
                                  ),
                                  'name' => 'getFromCollections',
                                  'call-type' => 1,
                                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                  'line' => 86,
                                  'char' => 78,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                'line' => 86,
                                'char' => 78,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 80,
                          ),
                          'right' => 
                          array (
                            'type' => 'int',
                            'value' => '1',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 85,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 86,
                          'char' => 85,
                        ),
                        'right' => 
                        array (
                          'type' => 'greater',
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
                                  'type' => 'mcall',
                                  'variable' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'a',
                                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                    'line' => 86,
                                    'char' => 95,
                                  ),
                                  'name' => 'getToCollections',
                                  'call-type' => 1,
                                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                  'line' => 86,
                                  'char' => 114,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                                'line' => 86,
                                'char' => 114,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 116,
                          ),
                          'right' => 
                          array (
                            'type' => 'int',
                            'value' => '1',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 121,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 86,
                          'char' => 121,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 86,
                        'char' => 121,
                      ),
                      'right' => 
                      array (
                        'type' => 'not-identical',
                        'left' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'b',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 124,
                          ),
                          'right' => 
                          array (
                            'type' => 'int',
                            'value' => '0',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 126,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 86,
                          'char' => 130,
                        ),
                        'right' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'c',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 133,
                          ),
                          'right' => 
                          array (
                            'type' => 'int',
                            'value' => '0',
                            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                            'line' => 86,
                            'char' => 135,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 86,
                          'char' => 136,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 86,
                        'char' => 136,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 86,
                      'char' => 136,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 86,
                    'char' => 138,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 86,
                  'char' => 138,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 86,
                'char' => 138,
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
                          'value' => 'This operation only supports graphs with one undirected single collection relation',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 87,
                          'char' => 123,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 87,
                        'char' => 123,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                    'line' => 87,
                    'char' => 124,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 88,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 89,
              'char' => 10,
            ),
            4 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'identical',
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
                        'value' => 'ed',
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 89,
                        'char' => 20,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 89,
                      'char' => 20,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 89,
                  'char' => 24,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '1',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 89,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 89,
                'char' => 28,
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
                      'variable' => 'eD',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ed',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 90,
                          'char' => 24,
                        ),
                        'right' => 
                        array (
                          'type' => 'int',
                          'value' => '0',
                          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                          'line' => 90,
                          'char' => 26,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 90,
                        'char' => 27,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 90,
                      'char' => 27,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 91,
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
                      'property' => '_edgeDefinitions',
                      'expr' => 
                      array (
                        'type' => 'empty-array',
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 91,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 91,
                      'char' => 45,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 92,
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
                      'assign-type' => 'variable',
                      'operator' => 'assign',
                      'variable' => 'eD',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'EdgeDefinition',
                        'dynamic' => 0,
                        'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                        'line' => 93,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                      'line' => 93,
                      'char' => 43,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 94,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
              'line' => 95,
              'char' => 14,
            ),
            5 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'eD',
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 95,
                'char' => 18,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
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
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'EdgeDefinition',
                  'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                  'line' => 77,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
                'line' => 77,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 77,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 76,
          'last-line' => 98,
          'char' => 22,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_EDGE_DEFINITIONS',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'edgeDefinitions',
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 5,
            'char' => 53,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 6,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_FROM',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'from',
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 6,
            'char' => 30,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 7,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_TO',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'to',
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 7,
            'char' => 26,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 8,
          'char' => 9,
        ),
        3 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_COLLECTION',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'collection',
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 8,
            'char' => 42,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 9,
          'char' => 9,
        ),
        4 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_ORPHAN_COLLECTIONS',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'orphanCollections',
            'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
            'line' => 9,
            'char' => 57,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
          'line' => 10,
          'char' => 13,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/graph.zep',
    'line' => 3,
    'char' => 5,
  ),
);