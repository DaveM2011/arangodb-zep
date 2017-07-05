<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'BatchPart',
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
          'name' => '_cursorOptions',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 5,
            'char' => 34,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
          'name' => '_id',
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
          'name' => '_type',
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
          'name' => '_request',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 8,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
          'name' => '_response',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 9,
            'char' => 29,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
          'name' => '_batch',
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 11,
            'char' => 60,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
              'name' => 'batch',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Batch',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 12,
                'char' => 45,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 12,
              'char' => 46,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'id',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 12,
              'char' => 50,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'type',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 12,
              'char' => 56,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'request',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 12,
              'char' => 65,
            ),
            4 => 
            array (
              'type' => 'parameter',
              'name' => 'response',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 12,
              'char' => 75,
            ),
            5 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 12,
              'char' => 84,
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
                  'variable' => 'sanitize',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 14,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 16,
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
                  'variable' => 'sanitize',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 16,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 16,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 17,
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
                  'variable' => 'options',
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
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 17,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 17,
                        'char' => 43,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 17,
                            'char' => 50,
                          ),
                          'name' => 'getCursorOptions',
                          'call-type' => 1,
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 17,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 17,
                        'char' => 69,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 17,
                    'char' => 70,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 17,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 18,
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
                    'value' => 'options',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 18,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'string',
                    'value' => '_documentClass',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 18,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 18,
                  'char' => 44,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 18,
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
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 19,
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
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 19,
                            'char' => 43,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => '_documentClass',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 19,
                            'char' => 60,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 19,
                          'char' => 61,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 19,
                        'char' => 61,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 19,
                    'char' => 62,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 20,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 21,
              'char' => 15,
            ),
            4 => 
            array (
              'type' => 'fcall',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'extract',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 21,
                      'char' => 24,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 21,
                    'char' => 24,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'constant',
                      'value' => 'EXTR_IF_EXISTS',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 21,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 21,
                    'char' => 40,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 21,
                'char' => 41,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 22,
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
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 22,
                  'char' => 14,
                ),
                'name' => 'setBatch',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'batch',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 22,
                      'char' => 29,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 22,
                    'char' => 29,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 22,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 23,
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
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 23,
                  'char' => 14,
                ),
                'name' => 'setId',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'id',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 23,
                      'char' => 23,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 23,
                    'char' => 23,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 23,
                'char' => 24,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 24,
              'char' => 12,
            ),
            7 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 24,
                  'char' => 14,
                ),
                'name' => 'setType',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'type',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 24,
                      'char' => 27,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 24,
                    'char' => 27,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 24,
                'char' => 28,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 25,
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
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 25,
                  'char' => 14,
                ),
                'name' => 'setRequest',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'request',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 25,
                      'char' => 33,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 25,
                    'char' => 33,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 25,
                'char' => 34,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 26,
              'char' => 12,
            ),
            9 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 26,
                  'char' => 14,
                ),
                'name' => 'setResponse',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 26,
                      'char' => 35,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 26,
                    'char' => 35,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 26,
                'char' => 36,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 27,
              'char' => 11,
            ),
            10 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property-array-index',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => '_cursorOptions',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'Cursor',
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 27,
                        'char' => 56,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_SANITIZE',
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 27,
                        'char' => 56,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 27,
                      'char' => 56,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'sanitize',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 27,
                    'char' => 68,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 27,
                  'char' => 68,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 28,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 12,
          'last-line' => 30,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setBatch',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'batch',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Batch',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 30,
                'char' => 42,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 30,
              'char' => 43,
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
                  'property' => '_batch',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'batch',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 32,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 32,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 33,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 33,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 34,
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
                  'value' => 'BatchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 31,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 31,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 31,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 30,
          'last-line' => 36,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setId',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'id',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 36,
              'char' => 29,
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
                  'property' => '_id',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'id',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 38,
                    'char' => 27,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 38,
                  'char' => 27,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 39,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 39,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'BatchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 37,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 37,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 37,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 36,
          'last-line' => 42,
          'char' => 19,
        ),
        3 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 44,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_id',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 44,
                  'char' => 25,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 44,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 45,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 42,
          'last-line' => 47,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setType',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'type',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 47,
              'char' => 33,
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
                  'property' => '_type',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'type',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 49,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 49,
                  'char' => 31,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 50,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 50,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'BatchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 48,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 48,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 48,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 47,
          'last-line' => 53,
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
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 55,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_type',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 55,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 55,
                'char' => 27,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 56,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 53,
          'last-line' => 58,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setRequest',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'request',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 58,
              'char' => 39,
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
                  'property' => '_request',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'request',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 60,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 60,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 61,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 61,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 62,
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
                  'value' => 'BatchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 59,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 59,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 59,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 58,
          'last-line' => 64,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getRequest',
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
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 66,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_request',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 66,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 66,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 65,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 65,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 64,
          'last-line' => 69,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setResponse',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'response',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 69,
              'char' => 41,
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
                  'property' => '_response',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'response',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 71,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 71,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 72,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 72,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 73,
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
                  'value' => 'BatchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 70,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 70,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 70,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 69,
          'last-line' => 75,
          'char' => 19,
        ),
        9 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getResponse',
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
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 77,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_response',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 77,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 77,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 78,
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
                  'value' => 'HttpResponse',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 76,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 76,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 76,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 75,
          'last-line' => 80,
          'char' => 19,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHttpCode',
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
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 82,
                    'char' => 21,
                  ),
                  'name' => 'getResponse',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 82,
                  'char' => 36,
                ),
                'name' => 'getHttpCode',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 82,
                'char' => 50,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
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
                'data-type' => 'int',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 81,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 81,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 80,
          'last-line' => 85,
          'char' => 19,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getProcessedResponse',
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
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 87,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 87,
                  'char' => 37,
                ),
                2 => 
                array (
                  'variable' => 'json',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 87,
                  'char' => 43,
                ),
                3 => 
                array (
                  'variable' => 'options',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 87,
                  'char' => 52,
                ),
                4 => 
                array (
                  'variable' => 'id',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 87,
                  'char' => 56,
                ),
                5 => 
                array (
                  'variable' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 87,
                  'char' => 62,
                ),
                6 => 
                array (
                  'variable' => 'tmpArray9652f742a399008c9c81204e76ce67c6',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 87,
                  'char' => 104,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 89,
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
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 89,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 89,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 89,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 89,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 90,
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
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 90,
                      'char' => 30,
                    ),
                    'name' => 'getResponse',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 90,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 90,
                  'char' => 44,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 91,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'switch',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 91,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_type',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 91,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 91,
                'char' => 28,
              ),
              'clauses' => 
              array (
                0 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'first',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 92,
                    'char' => 25,
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
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 93,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 93,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 93,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 94,
                      'char' => 18,
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
                            'type' => 'isset',
                            'left' => 
                            array (
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'json',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 94,
                                'char' => 31,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'error',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 94,
                                'char' => 39,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 94,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 94,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 94,
                          'char' => 42,
                        ),
                        'right' => 
                        array (
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'json',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 94,
                              'char' => 48,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => 'error',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 94,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 94,
                            'char' => 60,
                          ),
                          'right' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 94,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 94,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 94,
                        'char' => 68,
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
                              'variable' => 'options',
                              'expr' => 
                              array (
                                'type' => 'mcall',
                                'variable' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'this',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 95,
                                  'char' => 41,
                                ),
                                'name' => 'getCursorOptions',
                                'call-type' => 1,
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 95,
                                'char' => 60,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 95,
                              'char' => 60,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 96,
                          'char' => 23,
                        ),
                        1 => 
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
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 96,
                                  'char' => 41,
                                ),
                              ),
                              'expr' => 
                              array (
                                'type' => 'bool',
                                'value' => 'false',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 96,
                                'char' => 50,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 96,
                              'char' => 50,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 97,
                          'char' => 23,
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
                                        'value' => 'json',
                                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                        'line' => 97,
                                        'char' => 75,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'string',
                                        'value' => 'document',
                                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                        'line' => 97,
                                        'char' => 86,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                      'line' => 97,
                                      'char' => 87,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 97,
                                    'char' => 87,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'options',
                                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                      'line' => 97,
                                      'char' => 96,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 97,
                                    'char' => 96,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 97,
                                'char' => 97,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 97,
                              'char' => 97,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 98,
                          'char' => 17,
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
                              'variable' => 'response',
                              'expr' => 
                              array (
                                'type' => 'bool',
                                'value' => 'false',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 99,
                                'char' => 42,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 99,
                              'char' => 42,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 100,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 101,
                      'char' => 21,
                    ),
                    2 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 102,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 102,
                  'char' => 16,
                ),
                1 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'getdocument',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 102,
                    'char' => 31,
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
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 103,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 103,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 103,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 104,
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
                          'variable' => 'options',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 104,
                              'char' => 37,
                            ),
                            'name' => 'getCursorOptions',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 104,
                            'char' => 56,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 104,
                          'char' => 56,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 105,
                      'char' => 19,
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
                          'variable' => 'options',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => '_isNew',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 105,
                              'char' => 37,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 105,
                            'char' => 46,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 105,
                          'char' => 46,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 106,
                      'char' => 19,
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
                                  'value' => 'json',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 106,
                                  'char' => 71,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 106,
                                'char' => 71,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'options',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 106,
                                  'char' => 80,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 106,
                                'char' => 80,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 106,
                            'char' => 81,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 106,
                          'char' => 81,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 107,
                      'char' => 21,
                    ),
                    4 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 108,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 108,
                  'char' => 16,
                ),
                2 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'document',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 108,
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
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 109,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 109,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 109,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 110,
                      'char' => 18,
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
                            'type' => 'isset',
                            'left' => 
                            array (
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'json',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 110,
                                'char' => 31,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'error',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 110,
                                'char' => 39,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 110,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 110,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 110,
                          'char' => 42,
                        ),
                        'right' => 
                        array (
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'json',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 110,
                              'char' => 48,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => 'error',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 110,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 110,
                            'char' => 60,
                          ),
                          'right' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 110,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 110,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 110,
                        'char' => 68,
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
                              'variable' => 'id',
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'json',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 111,
                                  'char' => 34,
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
                                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                          'line' => 111,
                                          'char' => 59,
                                        ),
                                        'right' => 
                                        array (
                                          'type' => 'string',
                                          'value' => '::ENTRY_ID',
                                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                          'line' => 111,
                                          'char' => 73,
                                        ),
                                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                        'line' => 111,
                                        'char' => 73,
                                      ),
                                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                      'line' => 111,
                                      'char' => 73,
                                    ),
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 111,
                                  'char' => 74,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 111,
                                'char' => 75,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 111,
                              'char' => 75,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 112,
                          'char' => 23,
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
                                'type' => 'variable',
                                'value' => 'id',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 112,
                                'char' => 38,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 112,
                              'char' => 38,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 113,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 114,
                      'char' => 21,
                    ),
                    2 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 115,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 115,
                  'char' => 16,
                ),
                3 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'getedge',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 115,
                    'char' => 27,
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
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 116,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 116,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 116,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 117,
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
                          'variable' => 'options',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 117,
                              'char' => 37,
                            ),
                            'name' => 'getCursorOptions',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 117,
                            'char' => 56,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 117,
                          'char' => 56,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 118,
                      'char' => 19,
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
                          'variable' => 'options',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => '_isNew',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 118,
                              'char' => 37,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 118,
                            'char' => 46,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 118,
                          'char' => 46,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 119,
                      'char' => 19,
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
                                  'value' => 'json',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 119,
                                  'char' => 59,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 119,
                                'char' => 59,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'options',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 119,
                                  'char' => 68,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 119,
                                'char' => 68,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 119,
                            'char' => 69,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 119,
                          'char' => 69,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 120,
                      'char' => 21,
                    ),
                    4 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 121,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 121,
                  'char' => 16,
                ),
                4 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'edge',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 121,
                    'char' => 24,
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
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 122,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 122,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 122,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 123,
                      'char' => 18,
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
                            'type' => 'isset',
                            'left' => 
                            array (
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'json',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 123,
                                'char' => 31,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'error',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 123,
                                'char' => 39,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 123,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 123,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 123,
                          'char' => 42,
                        ),
                        'right' => 
                        array (
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'json',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 123,
                              'char' => 48,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => 'error',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 123,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 123,
                            'char' => 60,
                          ),
                          'right' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 123,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 123,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 123,
                        'char' => 68,
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
                              'variable' => 'id',
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'json',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 124,
                                  'char' => 34,
                                ),
                                'right' => 
                                array (
                                  'type' => 'static-constant-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'Edge',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 124,
                                    'char' => 49,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'ENTRY_ID',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 124,
                                    'char' => 49,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 124,
                                  'char' => 49,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 124,
                                'char' => 50,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 124,
                              'char' => 50,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 125,
                          'char' => 23,
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
                                'type' => 'variable',
                                'value' => 'id',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 125,
                                'char' => 38,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 125,
                              'char' => 38,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 126,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 127,
                      'char' => 21,
                    ),
                    2 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 128,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 128,
                  'char' => 16,
                ),
                5 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'getedges',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 128,
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
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 129,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 129,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 129,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 130,
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
                          'variable' => 'options',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 130,
                              'char' => 37,
                            ),
                            'name' => 'getCursorOptions',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 130,
                            'char' => 56,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 130,
                          'char' => 56,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 131,
                      'char' => 19,
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
                          'variable' => 'options',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => '_isNew',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 131,
                              'char' => 37,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 131,
                            'char' => 46,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 131,
                          'char' => 46,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 132,
                      'char' => 19,
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
                            'type' => 'empty-array',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 132,
                            'char' => 35,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 132,
                          'char' => 35,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 133,
                      'char' => 19,
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
                          'value' => 'json',
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 133,
                          'char' => 33,
                        ),
                        'right' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'EdgeHandler',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 133,
                            'char' => 58,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_EDGES',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 133,
                            'char' => 58,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 133,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 133,
                        'char' => 60,
                      ),
                      'value' => 'data',
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
                              'assign-type' => 'variable-append',
                              'operator' => 'assign',
                              'variable' => 'response',
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
                                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                      'line' => 134,
                                      'char' => 64,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 134,
                                    'char' => 64,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'options',
                                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                      'line' => 134,
                                      'char' => 73,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 134,
                                    'char' => 73,
                                  ),
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 134,
                                'char' => 74,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 134,
                              'char' => 74,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 135,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 136,
                      'char' => 21,
                    ),
                    5 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 137,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 137,
                  'char' => 16,
                ),
                6 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'getcollection',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 137,
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
                          'assign-type' => 'variable',
                          'operator' => 'assign',
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 138,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 138,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 138,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 139,
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
                            'type' => 'scall',
                            'dynamic-class' => 0,
                            'class' => 'Collection',
                            'dynamic' => 0,
                            'name' => 'createFromArray',
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'json',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 139,
                                  'char' => 65,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 139,
                                'char' => 65,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 139,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 139,
                          'char' => 66,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 140,
                      'char' => 21,
                    ),
                    2 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 141,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 141,
                  'char' => 16,
                ),
                7 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'collection',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 141,
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
                          'assign-type' => 'variable',
                          'operator' => 'assign',
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 142,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 142,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 142,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 143,
                      'char' => 18,
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
                            'type' => 'isset',
                            'left' => 
                            array (
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'json',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 143,
                                'char' => 31,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'error',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 143,
                                'char' => 39,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 143,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 143,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 143,
                          'char' => 42,
                        ),
                        'right' => 
                        array (
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'json',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 143,
                              'char' => 48,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => 'error',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 143,
                              'char' => 56,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 143,
                            'char' => 60,
                          ),
                          'right' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 143,
                            'char' => 68,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 143,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 143,
                        'char' => 68,
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
                              'variable' => 'id',
                              'expr' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'json',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 144,
                                  'char' => 34,
                                ),
                                'right' => 
                                array (
                                  'type' => 'static-constant-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'Collection',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 144,
                                    'char' => 55,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'ENTRY_ID',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 144,
                                    'char' => 55,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 144,
                                  'char' => 55,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 144,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 144,
                              'char' => 56,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 145,
                          'char' => 23,
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
                                'type' => 'variable',
                                'value' => 'id',
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 145,
                                'char' => 38,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 145,
                              'char' => 38,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 146,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 147,
                      'char' => 21,
                    ),
                    2 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 148,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 148,
                  'char' => 16,
                ),
                8 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'cursor',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 148,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 149,
                  'char' => 16,
                ),
                9 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'all',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 149,
                    'char' => 23,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 150,
                  'char' => 16,
                ),
                10 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'by',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 150,
                    'char' => 22,
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
                          'variable' => 'options',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 151,
                              'char' => 37,
                            ),
                            'name' => 'getCursorOptions',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 151,
                            'char' => 56,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 151,
                          'char' => 56,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 152,
                      'char' => 19,
                    ),
                    1 => 
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
                              'value' => 'isNew',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 152,
                              'char' => 36,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 152,
                            'char' => 45,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 152,
                          'char' => 45,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 153,
                      'char' => 19,
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
                          'variable' => 'tmpArray9652f742a399008c9c81204e76ce67c6',
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
                                  'value' => '_documentClass',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 153,
                                  'char' => 82,
                                ),
                                'value' => 
                                array (
                                  'type' => 'property-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'this',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 153,
                                    'char' => 89,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => '_documentClass',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 153,
                                    'char' => 104,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 153,
                                  'char' => 104,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 153,
                                'char' => 104,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 153,
                            'char' => 105,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 153,
                          'char' => 105,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 154,
                      'char' => 19,
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
                          'variable' => 'options',
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
                                  'type' => 'variable',
                                  'value' => 'tmpArray9652f742a399008c9c81204e76ce67c6',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 154,
                                  'char' => 84,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 154,
                                'char' => 84,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'options',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 154,
                                  'char' => 93,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 154,
                                'char' => 93,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 154,
                            'char' => 94,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 154,
                          'char' => 94,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 155,
                      'char' => 19,
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
                          'variable' => 'response',
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
                                  'type' => 'mcall',
                                  'variable' => 
                                  array (
                                    'type' => 'property-access',
                                    'left' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'this',
                                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                      'line' => 155,
                                      'char' => 49,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => '_batch',
                                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                      'line' => 155,
                                      'char' => 57,
                                    ),
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 155,
                                    'char' => 57,
                                  ),
                                  'name' => 'getConnection',
                                  'call-type' => 1,
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 155,
                                  'char' => 73,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 155,
                                'char' => 73,
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
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 155,
                                    'char' => 84,
                                  ),
                                  'name' => 'getJson',
                                  'call-type' => 1,
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 155,
                                  'char' => 94,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 155,
                                'char' => 94,
                              ),
                              2 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'options',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 155,
                                  'char' => 103,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 155,
                                'char' => 103,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 155,
                            'char' => 104,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 155,
                          'char' => 104,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 156,
                      'char' => 21,
                    ),
                    5 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 157,
                      'char' => 16,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 157,
                  'char' => 16,
                ),
                11 => 
                array (
                  'type' => 'case',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => 'remove',
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 157,
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
                          'variable' => 'json',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'response',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 158,
                              'char' => 38,
                            ),
                            'name' => 'getJson',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 158,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 158,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 159,
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
                            'type' => 'array',
                            'left' => 
                            array (
                              0 => 
                              array (
                                'key' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'removed',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 159,
                                  'char' => 44,
                                ),
                                'value' => 
                                array (
                                  'type' => 'array-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'json',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 159,
                                    'char' => 50,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'string',
                                    'value' => 'removed',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 159,
                                    'char' => 60,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 159,
                                  'char' => 61,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 159,
                                'char' => 61,
                              ),
                              1 => 
                              array (
                                'key' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'ignored',
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 159,
                                  'char' => 73,
                                ),
                                'value' => 
                                array (
                                  'type' => 'array-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'json',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 159,
                                    'char' => 79,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'string',
                                    'value' => 'ignored',
                                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                    'line' => 159,
                                    'char' => 89,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                  'line' => 159,
                                  'char' => 90,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                                'line' => 159,
                                'char' => 90,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 159,
                            'char' => 91,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                          'line' => 159,
                          'char' => 91,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 160,
                      'char' => 21,
                    ),
                    2 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 161,
                      'char' => 19,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 161,
                  'char' => 19,
                ),
                12 => 
                array (
                  'type' => 'default',
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
                              'value' => 'Could not determine response data type.',
                              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                              'line' => 162,
                              'char' => 84,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                            'line' => 162,
                            'char' => 84,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                        'line' => 162,
                        'char' => 85,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 163,
                      'char' => 21,
                    ),
                    1 => 
                    array (
                      'type' => 'break',
                      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                      'line' => 164,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 164,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 165,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'response',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 165,
                'char' => 24,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 166,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 85,
          'last-line' => 168,
          'char' => 19,
        ),
        12 => 
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
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 170,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_cursorOptions',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 170,
                  'char' => 36,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 170,
                'char' => 36,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 171,
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
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 169,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 169,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 168,
          'last-line' => 173,
          'char' => 22,
        ),
        13 => 
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
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 173,
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
                    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                    'line' => 175,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 175,
                  'char' => 42,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 176,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 176,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
              'line' => 177,
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
                  'value' => 'BatchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                  'line' => 174,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
                'line' => 174,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
            'line' => 174,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
          'line' => 173,
          'last-line' => 179,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/batchpart.zep',
    'line' => 3,
    'char' => 5,
  ),
);