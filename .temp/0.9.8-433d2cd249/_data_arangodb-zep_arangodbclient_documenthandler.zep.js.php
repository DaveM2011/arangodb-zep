<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'DocumentHandler',
    'abstract' => 0,
    'final' => 0,
    'extends' => 'Handler',
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
          'name' => 'get',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 8,
              'char' => 42,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 8,
              'char' => 54,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 8,
                'char' => 74,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 8,
              'char' => 74,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 10,
                  'char' => 21,
                ),
                'name' => 'getById',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'collection',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 10,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 10,
                    'char' => 40,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'documentId',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 10,
                      'char' => 52,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 10,
                    'char' => 52,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 10,
                      'char' => 61,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 10,
                    'char' => 61,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 10,
                'char' => 62,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 11,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 9,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 9,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 9,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 8,
          'last-line' => 13,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'has',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 13,
              'char' => 42,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 13,
              'char' => 54,
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
                  'variable' => 'e',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 15,
                  'char' => 14,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 17,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'try-catch',
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
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 18,
                      'char' => 18,
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
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 18,
                          'char' => 33,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 18,
                        'char' => 33,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'documentId',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 18,
                          'char' => 45,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 18,
                        'char' => 45,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 18,
                    'char' => 46,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 19,
                  'char' => 18,
                ),
                1 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'true',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 19,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 20,
                  'char' => 9,
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
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 20,
                      'char' => 32,
                    ),
                  ),
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'e',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 26,
                    'char' => 14,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'if',
                      'expr' => 
                      array (
                        'type' => 'identical',
                        'left' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'e',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 21,
                            'char' => 18,
                          ),
                          'name' => 'getCode',
                          'call-type' => 1,
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 21,
                          'char' => 31,
                        ),
                        'right' => 
                        array (
                          'type' => 'int',
                          'value' => '404',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 21,
                          'char' => 37,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 21,
                        'char' => 37,
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
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 22,
                            'char' => 29,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 23,
                          'char' => 13,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 24,
                      'char' => 17,
                    ),
                    1 => 
                    array (
                      'type' => 'throw',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'e',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 24,
                        'char' => 20,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 25,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 26,
                  'char' => 14,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 26,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'false',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 26,
                'char' => 21,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 27,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 14,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 14,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 13,
          'last-line' => 29,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getById',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 29,
              'char' => 43,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 29,
              'char' => 59,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 29,
                'char' => 79,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 29,
              'char' => 79,
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
                  'variable' => 'tmpListCollectionDocumentId',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 31,
                  'char' => 40,
                ),
                1 => 
                array (
                  'variable' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 31,
                  'char' => 46,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 33,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not-identical',
                'left' => 
                array (
                  'type' => 'fcall',
                  'name' => 'strpos',
                  'call-type' => 1,
                  'parameters' => 
                  array (
                    0 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'documentId',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 33,
                        'char' => 29,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 33,
                      'char' => 29,
                    ),
                    1 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'string',
                        'value' => '/',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 33,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 33,
                      'char' => 34,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 33,
                  'char' => 38,
                ),
                'right' => 
                array (
                  'type' => 'bool',
                  'value' => 'false',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 33,
                  'char' => 46,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 33,
                'char' => 46,
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
                      'variable' => 'tmpListCollectionDocumentId',
                      'expr' => 
                      array (
                        'type' => 'fcall',
                        'name' => 'explode',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'string',
                              'value' => '/',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 34,
                              'char' => 58,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 34,
                            'char' => 58,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'documentId',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 34,
                              'char' => 70,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 34,
                            'char' => 70,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 34,
                        'char' => 71,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 34,
                      'char' => 71,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 35,
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
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpListCollectionDocumentId',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 35,
                          'char' => 57,
                        ),
                        'right' => 
                        array (
                          'type' => 'int',
                          'value' => '0',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 35,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 35,
                        'char' => 60,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 35,
                      'char' => 60,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 36,
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
                      'variable' => 'documentId',
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpListCollectionDocumentId',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 36,
                          'char' => 57,
                        ),
                        'right' => 
                        array (
                          'type' => 'int',
                          'value' => '1',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 36,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 36,
                        'char' => 60,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 36,
                      'char' => 60,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 37,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 38,
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
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 38,
                      'char' => 26,
                    ),
                    'name' => 'getDocument',
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
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 38,
                            'char' => 57,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'URL_DOCUMENT',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 38,
                            'char' => 57,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 38,
                          'char' => 57,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 38,
                        'char' => 57,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 38,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 38,
                        'char' => 69,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'documentId',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 38,
                          'char' => 81,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 38,
                        'char' => 81,
                      ),
                      3 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 38,
                          'char' => 90,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 38,
                        'char' => 90,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 38,
                    'char' => 91,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 38,
                  'char' => 91,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 39,
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
                  'variable' => 'options',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => '_isNew',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 39,
                      'char' => 29,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 39,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 39,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 40,
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
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 40,
                  'char' => 21,
                ),
                'name' => 'createFromArrayWithContext',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'data',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 40,
                      'char' => 53,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 40,
                    'char' => 53,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 40,
                      'char' => 62,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 40,
                    'char' => 62,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 40,
                'char' => 63,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
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
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'Document',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 30,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 30,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 30,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 29,
          'last-line' => 43,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getDocument',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 43,
              'char' => 46,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 43,
              'char' => 65,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 43,
              'char' => 77,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 43,
                'char' => 97,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 43,
              'char' => 97,
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
                  'variable' => 'headerElements',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 45,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 45,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 47,
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
                  'variable' => 'collection',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 47,
                      'char' => 32,
                    ),
                    'name' => 'makeCollection',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 47,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 47,
                        'char' => 58,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 47,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 47,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 48,
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
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'buildUrl',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 48,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 48,
                        'char' => 43,
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
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'collection',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 48,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 48,
                              'char' => 56,
                            ),
                            1 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'documentId',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 48,
                                'char' => 68,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 48,
                              'char' => 68,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 48,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 48,
                        'char' => 69,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 48,
                    'char' => 70,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 48,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 49,
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
                  'variable' => 'headerElements',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 49,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 49,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 50,
              'char' => 10,
            ),
            4 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'and',
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
                        'type' => 'string',
                        'value' => 'ifMatch',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 50,
                        'char' => 38,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 50,
                      'char' => 38,
                    ),
                    1 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 50,
                        'char' => 47,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 50,
                      'char' => 47,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 50,
                  'char' => 50,
                ),
                'right' => 
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
                        'type' => 'string',
                        'value' => 'revision',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 50,
                        'char' => 79,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 50,
                      'char' => 79,
                    ),
                    1 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 50,
                        'char' => 88,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 50,
                      'char' => 88,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 50,
                  'char' => 90,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 50,
                'char' => 90,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 51,
                        'char' => 23,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => 'ifMatch',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 51,
                        'char' => 33,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 51,
                      'char' => 37,
                    ),
                    'right' => 
                    array (
                      'type' => 'bool',
                      'value' => 'true',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 51,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
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
                          'assign-type' => 'array-index',
                          'operator' => 'assign',
                          'variable' => 'headerElements',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'If-Match',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 52,
                              'char' => 46,
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
                                'type' => 'string',
                                'value' => '\\"',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 52,
                                'char' => 56,
                              ),
                              'right' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'options',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 52,
                                  'char' => 65,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'revision',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 52,
                                  'char' => 76,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 52,
                                'char' => 78,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 52,
                              'char' => 78,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '\\"',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 52,
                              'char' => 84,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 52,
                            'char' => 84,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 52,
                          'char' => 84,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 53,
                      'char' => 13,
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
                          'assign-type' => 'array-index',
                          'operator' => 'assign',
                          'variable' => 'headerElements',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'If-None-Match',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 54,
                              'char' => 51,
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
                                'type' => 'string',
                                'value' => '\\"',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 54,
                                'char' => 61,
                              ),
                              'right' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'options',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 54,
                                  'char' => 70,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'revision',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 54,
                                  'char' => 81,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 54,
                                'char' => 83,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 54,
                              'char' => 83,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '\\"',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 54,
                              'char' => 89,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 54,
                            'char' => 89,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 54,
                          'char' => 89,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 55,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 56,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 57,
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
                  'variable' => 'response',
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
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 57,
                        'char' => 29,
                      ),
                      'name' => 'getConnection',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 57,
                      'char' => 46,
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
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 57,
                          'char' => 54,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 57,
                        'char' => 54,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'headerElements',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 57,
                          'char' => 70,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 57,
                        'char' => 70,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 57,
                    'char' => 71,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 57,
                  'char' => 71,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 58,
              'char' => 10,
            ),
            6 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'identical',
                'left' => 
                array (
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'response',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 58,
                    'char' => 21,
                  ),
                  'name' => 'getHttpCode',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 58,
                  'char' => 38,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '304',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 58,
                  'char' => 44,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 58,
                'char' => 44,
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
                          'value' => 'Document has not changed.',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 59,
                          'char' => 66,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 59,
                        'char' => 66,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 59,
                    'char' => 67,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 60,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 61,
              'char' => 14,
            ),
            7 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 61,
                  'char' => 25,
                ),
                'name' => 'getJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 61,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
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
                'data-type' => 'array',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 44,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 44,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 43,
          'last-line' => 64,
          'char' => 22,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHead',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 64,
              'char' => 46,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 64,
              'char' => 58,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'revision',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 64,
                'char' => 82,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 64,
              'char' => 82,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'ifMatch',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 64,
                'char' => 103,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 64,
              'char' => 103,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 66,
                  'char' => 21,
                ),
                'name' => 'head',
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
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 66,
                        'char' => 45,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'URL_DOCUMENT',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 66,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 66,
                      'char' => 45,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 66,
                    'char' => 45,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'collection',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 66,
                      'char' => 57,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 66,
                    'char' => 57,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'documentId',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 66,
                      'char' => 69,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 66,
                    'char' => 69,
                  ),
                  3 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'revision',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 66,
                      'char' => 79,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 66,
                    'char' => 79,
                  ),
                  4 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ifMatch',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 66,
                      'char' => 88,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 66,
                    'char' => 88,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 66,
                'char' => 89,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 65,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 65,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 64,
          'last-line' => 69,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'head',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 69,
              'char' => 39,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 69,
              'char' => 58,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 69,
              'char' => 70,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'revision',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 69,
                'char' => 87,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 69,
              'char' => 87,
            ),
            4 => 
            array (
              'type' => 'parameter',
              'name' => 'ifMatch',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 69,
                'char' => 108,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 69,
              'char' => 108,
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
                  'variable' => 'headerElements',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 71,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 71,
                  'char' => 37,
                ),
                2 => 
                array (
                  'variable' => 'headers',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 71,
                  'char' => 46,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 73,
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
                  'variable' => 'collection',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 73,
                      'char' => 31,
                    ),
                    'name' => 'makeCollection',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 73,
                          'char' => 57,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 73,
                        'char' => 57,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 73,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 73,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 74,
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
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'buildUrl',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 74,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 74,
                        'char' => 43,
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
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'collection',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 74,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 74,
                              'char' => 56,
                            ),
                            1 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'documentId',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 74,
                                'char' => 68,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 74,
                              'char' => 68,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 74,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 74,
                        'char' => 69,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 74,
                    'char' => 70,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 74,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 75,
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
                  'variable' => 'headerElements',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 75,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 75,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 76,
              'char' => 10,
            ),
            4 => 
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
                    'value' => 'revision',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 76,
                    'char' => 23,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 76,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 76,
                  'char' => 31,
                ),
                'right' => 
                array (
                  'type' => 'not-identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'ifMatch',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 76,
                    'char' => 43,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 76,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 76,
                  'char' => 50,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 76,
                'char' => 50,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'ifMatch',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 77,
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
                          'assign-type' => 'array-index',
                          'operator' => 'assign',
                          'variable' => 'headerElements',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'If-Match',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 78,
                              'char' => 46,
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
                                'type' => 'string',
                                'value' => '\\"',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 78,
                                'char' => 56,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'revision',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 78,
                                'char' => 67,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 78,
                              'char' => 67,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '\\"',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 78,
                              'char' => 73,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 78,
                            'char' => 73,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 78,
                          'char' => 73,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 79,
                      'char' => 13,
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
                          'assign-type' => 'array-index',
                          'operator' => 'assign',
                          'variable' => 'headerElements',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'If-None-Match',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 80,
                              'char' => 51,
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
                                'type' => 'string',
                                'value' => '\\"',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 80,
                                'char' => 61,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'revision',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 80,
                                'char' => 72,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 80,
                              'char' => 72,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '\\"',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 80,
                              'char' => 78,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 80,
                            'char' => 78,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 80,
                          'char' => 78,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 81,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 82,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 83,
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
                  'variable' => 'response',
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
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 83,
                        'char' => 29,
                      ),
                      'name' => 'getConnection',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 83,
                      'char' => 46,
                    ),
                    'name' => 'head',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 83,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 83,
                        'char' => 55,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'headerElements',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 83,
                          'char' => 71,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 83,
                        'char' => 71,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 83,
                    'char' => 72,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 83,
                  'char' => 72,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 84,
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
                  'variable' => 'headers',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 84,
                      'char' => 32,
                    ),
                    'name' => 'getHeaders',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 84,
                    'char' => 45,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 84,
                  'char' => 45,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 85,
              'char' => 11,
            ),
            7 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'array-index',
                  'operator' => 'assign',
                  'variable' => 'headers',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => 'httpCode',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 85,
                      'char' => 31,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 85,
                      'char' => 45,
                    ),
                    'name' => 'getHttpCode',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 85,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 85,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 86,
              'char' => 14,
            ),
            8 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'headers',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 86,
                'char' => 23,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 87,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 70,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 70,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 69,
          'last-line' => 89,
          'char' => 22,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
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
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 89,
              'char' => 55,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 89,
              'char' => 64,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 91,
                  'char' => 27,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 93,
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
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 93,
                      'char' => 35,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 93,
                      'char' => 50,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 93,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 93,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 94,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
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
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 94,
                      'char' => 54,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 94,
                    'char' => 54,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 94,
                      'char' => 63,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 94,
                    'char' => 63,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 94,
                'char' => 64,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 95,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 90,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 90,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 90,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 89,
          'last-line' => 97,
          'char' => 22,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'store',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Document',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 97,
                'char' => 45,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 97,
              'char' => 46,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 97,
                'char' => 65,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 97,
              'char' => 65,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 97,
                'char' => 85,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 97,
              'char' => 85,
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
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 99,
                  'char' => 19,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 101,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 101,
                  'char' => 21,
                ),
                'name' => 'getIsNew',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 101,
                'char' => 33,
              ),
              'statements' => 
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
                      'value' => 'collection',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 102,
                      'char' => 29,
                    ),
                    'right' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 102,
                      'char' => 36,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 102,
                    'char' => 36,
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
                              'value' => 'A collection id is required to store a new document.',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 103,
                              'char' => 97,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 103,
                            'char' => 97,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 103,
                        'char' => 98,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 104,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 105,
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
                      'variable' => 'result',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 105,
                          'char' => 31,
                        ),
                        'name' => 'save',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'collection',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 105,
                              'char' => 47,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 105,
                            'char' => 47,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'document',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 105,
                              'char' => 57,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 105,
                            'char' => 57,
                          ),
                          2 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'options',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 105,
                              'char' => 66,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 105,
                            'char' => 66,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 105,
                        'char' => 67,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 105,
                      'char' => 67,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 106,
                  'char' => 20,
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
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 106,
                      'char' => 22,
                    ),
                    'name' => 'setIsNew',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 106,
                          'char' => 37,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 106,
                        'char' => 37,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 106,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 107,
                  'char' => 18,
                ),
                3 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'result',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 107,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 108,
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
                    'type' => 'variable',
                    'value' => 'collection',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 109,
                    'char' => 27,
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
                              'value' => 'An existing document cannot be stored into a new collection',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 110,
                              'char' => 104,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 110,
                            'char' => 104,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 110,
                        'char' => 105,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 111,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 112,
                  'char' => 18,
                ),
                1 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 112,
                      'char' => 25,
                    ),
                    'name' => 'replace',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 112,
                          'char' => 42,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 112,
                        'char' => 42,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 112,
                          'char' => 51,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 112,
                        'char' => 51,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 112,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 113,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 114,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 97,
          'last-line' => 116,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'save',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 116,
              'char' => 36,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 116,
              'char' => 46,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 116,
                'char' => 66,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 116,
              'char' => 66,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'params',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 35,
                ),
                2 => 
                array (
                  'variable' => 'tmpArrayd22098ace3d2df0c6462f27eeba25312',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 77,
                ),
                3 => 
                array (
                  'variable' => 'url',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 82,
                ),
                4 => 
                array (
                  'variable' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 88,
                ),
                5 => 
                array (
                  'variable' => 'response',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 98,
                ),
                6 => 
                array (
                  'variable' => 'json',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 104,
                ),
                7 => 
                array (
                  'variable' => 'batchPart',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 115,
                ),
                8 => 
                array (
                  'variable' => 'location',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 125,
                ),
                9 => 
                array (
                  'variable' => 'id',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 118,
                  'char' => 129,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 120,
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
                  'variable' => 'collection',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 120,
                      'char' => 31,
                    ),
                    'name' => 'makeCollection',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 120,
                          'char' => 57,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 120,
                        'char' => 57,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 120,
                    'char' => 58,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 120,
                  'char' => 58,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 121,
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
                  'variable' => '_documentClass',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 121,
                      'char' => 35,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 121,
                      'char' => 50,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 121,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 121,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 122,
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
                  'variable' => 'tmpArrayd22098ace3d2df0c6462f27eeba25312',
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
                          'value' => 'waitForSync',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 122,
                          'char' => 71,
                        ),
                        'value' => 
                        array (
                          'type' => 'null',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 122,
                          'char' => 77,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 122,
                        'char' => 77,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'silent',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 122,
                          'char' => 88,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 122,
                          'char' => 95,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 122,
                        'char' => 95,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'createCollection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 122,
                          'char' => 116,
                        ),
                        'value' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 122,
                              'char' => 123,
                            ),
                            'name' => 'getConnection',
                            'call-type' => 1,
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 122,
                            'char' => 140,
                          ),
                          'name' => 'getOption',
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
                                  'value' => 'ConnectionOptions',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 122,
                                  'char' => 183,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_CREATE',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 122,
                                  'char' => 183,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 122,
                                'char' => 183,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 122,
                              'char' => 183,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 122,
                          'char' => 184,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 122,
                        'char' => 184,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 122,
                    'char' => 185,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 122,
                  'char' => 185,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 123,
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
                  'variable' => 'params',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 123,
                      'char' => 27,
                    ),
                    'name' => 'includeOptionsInParams',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 123,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 123,
                        'char' => 58,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpArrayd22098ace3d2df0c6462f27eeba25312',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 123,
                          'char' => 100,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 123,
                        'char' => 100,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 123,
                    'char' => 101,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 123,
                  'char' => 101,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 124,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 124,
                  'char' => 14,
                ),
                'name' => 'createCollectionIfOptions',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'collection',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 124,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 124,
                    'char' => 51,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'params',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 124,
                      'char' => 59,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 124,
                    'char' => 59,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 124,
                'char' => 60,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 125,
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
                          'type' => 'concat',
                          'left' => 
                          array (
                            'type' => 'concat',
                            'left' => 
                            array (
                              'type' => 'static-constant-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'Urls',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 125,
                                'char' => 66,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'URL_DOCUMENT',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 125,
                                'char' => 66,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 125,
                              'char' => 66,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '/',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 125,
                              'char' => 72,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 125,
                            'char' => 72,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'collection',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 125,
                            'char' => 84,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 125,
                          'char' => 84,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 125,
                        'char' => 84,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'params',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 125,
                          'char' => 92,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 125,
                        'char' => 92,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 125,
                    'char' => 93,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 125,
                  'char' => 93,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 126,
              'char' => 10,
            ),
            7 => 
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
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 126,
                      'char' => 29,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 126,
                    'char' => 29,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 126,
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
                      'variable' => 'data',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'document',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 127,
                        'char' => 32,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 127,
                      'char' => 32,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 128,
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
                      'variable' => 'data',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 129,
                          'char' => 34,
                        ),
                        'name' => 'getAllForInsertUpdate',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 129,
                        'char' => 58,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 129,
                      'char' => 58,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 130,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 131,
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
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 131,
                        'char' => 30,
                      ),
                      'name' => 'getConnection',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 131,
                      'char' => 47,
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
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 131,
                          'char' => 56,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 131,
                        'char' => 56,
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
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 131,
                            'char' => 63,
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
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 131,
                                'char' => 88,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 131,
                              'char' => 88,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 131,
                          'char' => 89,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 131,
                        'char' => 89,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 131,
                    'char' => 90,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 131,
                  'char' => 90,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 132,
              'char' => 11,
            ),
            9 => 
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
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 132,
                      'char' => 30,
                    ),
                    'name' => 'getJson',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 132,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 132,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 133,
              'char' => 11,
            ),
            10 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'batchPart',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 133,
                      'char' => 35,
                    ),
                    'name' => 'getBatchPart',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 133,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 133,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 134,
              'char' => 10,
            ),
            11 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'batchPart',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 134,
                'char' => 22,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'batchPart',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 135,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 136,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 137,
              'char' => 10,
            ),
            12 => 
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
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 137,
                      'char' => 29,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 137,
                    'char' => 29,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 137,
                'char' => 31,
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
                      'type' => 'variable',
                      'value' => 'json',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 138,
                      'char' => 24,
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
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 138,
                              'char' => 49,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '::ENTRY_KEY',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 138,
                              'char' => 64,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 138,
                            'char' => 64,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 138,
                          'char' => 64,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 138,
                      'char' => 65,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 138,
                    'char' => 66,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 139,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 140,
              'char' => 11,
            ),
            13 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'location',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 140,
                      'char' => 34,
                    ),
                    'name' => 'getLocationHeader',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 140,
                    'char' => 54,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 140,
                  'char' => 54,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 141,
              'char' => 10,
            ),
            14 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'location',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 141,
                  'char' => 22,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 141,
                'char' => 22,
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
                          'value' => 'Did not find location header in server response',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 142,
                          'char' => 88,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 142,
                        'char' => 88,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 142,
                    'char' => 89,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 143,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 144,
              'char' => 11,
            ),
            15 => 
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
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'getDocumentIdFromLocation',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'location',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 144,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 144,
                        'char' => 64,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 144,
                    'char' => 65,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 144,
                  'char' => 65,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 145,
              'char' => 16,
            ),
            16 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 145,
                  'char' => 18,
                ),
                'name' => 'setInternalId',
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
                        'value' => 'json',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 145,
                        'char' => 37,
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
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 145,
                                'char' => 62,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => '::ENTRY_ID',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 145,
                                'char' => 76,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 145,
                              'char' => 76,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 145,
                            'char' => 76,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 145,
                        'char' => 77,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 145,
                      'char' => 78,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 145,
                    'char' => 78,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 145,
                'char' => 79,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 146,
              'char' => 16,
            ),
            17 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 146,
                  'char' => 18,
                ),
                'name' => 'setRevision',
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
                        'value' => 'json',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 146,
                        'char' => 35,
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
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 146,
                                'char' => 60,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => '::ENTRY_REV',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 146,
                                'char' => 75,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 146,
                              'char' => 75,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 146,
                            'char' => 75,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 146,
                        'char' => 76,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 146,
                      'char' => 77,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 146,
                    'char' => 77,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 146,
                'char' => 78,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 147,
              'char' => 10,
            ),
            18 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not-identical',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'id',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 147,
                  'char' => 17,
                ),
                'right' => 
                array (
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'document',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 147,
                    'char' => 28,
                  ),
                  'name' => 'getId',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 147,
                  'char' => 37,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 147,
                'char' => 37,
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
                          'value' => 'Got an invalid response from the server',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 148,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 148,
                        'char' => 80,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 148,
                    'char' => 81,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 149,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 150,
              'char' => 16,
            ),
            19 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 150,
                  'char' => 18,
                ),
                'name' => 'setIsNew',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'bool',
                      'value' => 'false',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 150,
                      'char' => 33,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 150,
                    'char' => 33,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 150,
                'char' => 34,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 151,
              'char' => 14,
            ),
            20 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 151,
                  'char' => 25,
                ),
                'name' => 'getId',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 151,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 152,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 116,
          'last-line' => 154,
          'char' => 19,
        ),
        9 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'update',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Document',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 154,
                'char' => 46,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 154,
              'char' => 47,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 154,
                'char' => 67,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 154,
              'char' => 67,
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
                  'variable' => 'documentId',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 156,
                  'char' => 23,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 158,
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
                  'variable' => 'documentId',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 158,
                      'char' => 32,
                    ),
                    'name' => 'getDocumentId',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 158,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 158,
                        'char' => 55,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 158,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 158,
                  'char' => 56,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 159,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 159,
                  'char' => 21,
                ),
                'name' => 'updateById',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 159,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 159,
                    'char' => 41,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'documentId',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 159,
                      'char' => 53,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 159,
                    'char' => 53,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 159,
                      'char' => 63,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 159,
                    'char' => 63,
                  ),
                  3 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 159,
                      'char' => 72,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 159,
                    'char' => 72,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 159,
                'char' => 73,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 160,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 155,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 155,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 154,
          'last-line' => 162,
          'char' => 19,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'updateById',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 162,
              'char' => 49,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 162,
              'char' => 61,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Document',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 162,
                'char' => 81,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 162,
              'char' => 82,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 162,
                'char' => 102,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 162,
              'char' => 102,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 164,
                  'char' => 21,
                ),
                'name' => 'patch',
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
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 164,
                        'char' => 46,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'URL_DOCUMENT',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 164,
                        'char' => 46,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 164,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 164,
                    'char' => 46,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'collection',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 164,
                      'char' => 58,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 164,
                    'char' => 58,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'documentId',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 164,
                      'char' => 70,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 164,
                    'char' => 70,
                  ),
                  3 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 164,
                      'char' => 80,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 164,
                    'char' => 80,
                  ),
                  4 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 164,
                      'char' => 89,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 164,
                    'char' => 89,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 164,
                'char' => 90,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 163,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 163,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 162,
          'last-line' => 167,
          'char' => 19,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'patch',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 167,
              'char' => 40,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 167,
              'char' => 59,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 167,
              'char' => 71,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Document',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 167,
                'char' => 91,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 167,
              'char' => 92,
            ),
            4 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 167,
                'char' => 112,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 167,
              'char' => 112,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 169,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'params',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 169,
                  'char' => 35,
                ),
                2 => 
                array (
                  'variable' => 'tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 169,
                  'char' => 77,
                ),
                3 => 
                array (
                  'variable' => 'headers',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 169,
                  'char' => 86,
                ),
                4 => 
                array (
                  'variable' => 'revision',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 169,
                  'char' => 96,
                ),
                5 => 
                array (
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 169,
                  'char' => 104,
                ),
                6 => 
                array (
                  'variable' => 'json',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 169,
                  'char' => 110,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 171,
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
                  'variable' => 'collection',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 171,
                      'char' => 32,
                    ),
                    'name' => 'makeCollection',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 171,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 171,
                        'char' => 58,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 171,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 171,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 172,
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
                  'variable' => '_documentClass',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 172,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 172,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 172,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 172,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 173,
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
                  'variable' => 'tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5',
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
                          'value' => 'waitForSync',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 71,
                        ),
                        'value' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 173,
                            'char' => 78,
                          ),
                          'name' => 'getConnectionOption',
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
                                  'value' => 'ConnectionOptions',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 173,
                                  'char' => 134,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_WAIT_SYNC',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 173,
                                  'char' => 134,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 173,
                                'char' => 134,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 173,
                              'char' => 134,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 135,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 173,
                        'char' => 135,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'keepNull',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 148,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 154,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 173,
                        'char' => 154,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'silent',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 165,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 172,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 173,
                        'char' => 172,
                      ),
                      3 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'ignoreRevs',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 187,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 193,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 173,
                        'char' => 193,
                      ),
                      4 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'policy',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 204,
                        ),
                        'value' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 173,
                            'char' => 211,
                          ),
                          'name' => 'getConnectionOption',
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
                                  'value' => 'ConnectionOptions',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 173,
                                  'char' => 271,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_UPDATE_POLICY',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 173,
                                  'char' => 271,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 173,
                                'char' => 271,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 173,
                              'char' => 271,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 173,
                          'char' => 272,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 173,
                        'char' => 272,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 173,
                    'char' => 273,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 173,
                  'char' => 273,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 174,
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
                  'variable' => 'params',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 174,
                      'char' => 28,
                    ),
                    'name' => 'includeOptionsInParams',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 174,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 174,
                        'char' => 59,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 174,
                          'char' => 101,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 174,
                        'char' => 101,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 174,
                    'char' => 102,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 174,
                  'char' => 102,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 175,
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
                  'variable' => 'headers',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 175,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 175,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 176,
              'char' => 10,
            ),
            6 => 
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
                      'value' => 'params',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 176,
                      'char' => 24,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 176,
                        'char' => 64,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_UPDATE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 176,
                        'char' => 64,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 176,
                      'char' => 64,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 176,
                    'char' => 67,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 176,
                  'char' => 67,
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
                      'value' => 'params',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 176,
                      'char' => 75,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 176,
                        'char' => 115,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_UPDATE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 176,
                        'char' => 115,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 176,
                      'char' => 115,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 176,
                    'char' => 119,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'UpdatePolicy',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 176,
                      'char' => 141,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ERROR',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 176,
                      'char' => 141,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 176,
                    'char' => 141,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 176,
                  'char' => 141,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 176,
                'char' => 141,
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
                      'variable' => 'revision',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 177,
                          'char' => 38,
                        ),
                        'name' => 'getRevision',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 177,
                        'char' => 52,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 177,
                      'char' => 52,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 178,
                  'char' => 14,
                ),
                1 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'not-identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'revision',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 178,
                      'char' => 27,
                    ),
                    'right' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 178,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 178,
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
                          'variable' => 'params',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'ignoreRevs',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 179,
                              'char' => 40,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 179,
                            'char' => 49,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 179,
                          'char' => 49,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 180,
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
                          'variable' => 'headers',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'if-match',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 180,
                              'char' => 39,
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
                                'type' => 'string',
                                'value' => '\\"',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 180,
                                'char' => 49,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'revision',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 180,
                                'char' => 60,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 180,
                              'char' => 60,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '\\"',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 180,
                              'char' => 66,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 180,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 180,
                          'char' => 66,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 181,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 182,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 183,
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
                    'name' => 'buildUrl',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 183,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 183,
                        'char' => 43,
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
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'collection',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 183,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 183,
                              'char' => 56,
                            ),
                            1 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'documentId',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 183,
                                'char' => 68,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 183,
                              'char' => 68,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 183,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 183,
                        'char' => 69,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 183,
                    'char' => 70,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 183,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 184,
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
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 184,
                          'char' => 50,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 184,
                        'char' => 50,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'params',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 184,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 184,
                        'char' => 58,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 184,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 184,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 185,
              'char' => 11,
            ),
            9 => 
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
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 185,
                        'char' => 28,
                      ),
                      'name' => 'getConnection',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 185,
                      'char' => 45,
                    ),
                    'name' => 'patch',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 185,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 185,
                        'char' => 55,
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
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 185,
                            'char' => 62,
                          ),
                          'name' => 'json_encode_wrapper',
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
                                  'value' => 'document',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 185,
                                  'char' => 92,
                                ),
                                'name' => 'getAllForInsertUpdate',
                                'call-type' => 1,
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 185,
                                'char' => 116,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 185,
                              'char' => 116,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 185,
                          'char' => 117,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 185,
                        'char' => 117,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'headers',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 185,
                          'char' => 126,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 185,
                        'char' => 126,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 185,
                    'char' => 127,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 185,
                  'char' => 127,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 186,
              'char' => 11,
            ),
            10 => 
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
                      'value' => 'result',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 186,
                      'char' => 28,
                    ),
                    'name' => 'getJson',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 186,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 186,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 187,
              'char' => 16,
            ),
            11 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 187,
                  'char' => 18,
                ),
                'name' => 'setRevision',
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
                        'value' => 'json',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 187,
                        'char' => 35,
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
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 187,
                                'char' => 60,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => '::ENTRY_REV',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 187,
                                'char' => 75,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 187,
                              'char' => 75,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 187,
                            'char' => 75,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 187,
                        'char' => 76,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 187,
                      'char' => 77,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 187,
                    'char' => 77,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 187,
                'char' => 78,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 188,
              'char' => 14,
            ),
            12 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'true',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 188,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 189,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 168,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 168,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 167,
          'last-line' => 191,
          'char' => 22,
        ),
        12 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'replace',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Document',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 191,
                'char' => 47,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 191,
              'char' => 48,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 191,
                'char' => 68,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 191,
              'char' => 68,
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
                  'variable' => 'documentId',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 193,
                  'char' => 23,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 195,
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
                  'variable' => 'documentId',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 195,
                      'char' => 32,
                    ),
                    'name' => 'getDocumentId',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 195,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 195,
                        'char' => 55,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 195,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 195,
                  'char' => 56,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 196,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 196,
                  'char' => 21,
                ),
                'name' => 'replaceById',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 196,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 196,
                    'char' => 42,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'documentId',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 196,
                      'char' => 54,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 196,
                    'char' => 54,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 196,
                      'char' => 64,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 196,
                    'char' => 64,
                  ),
                  3 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 196,
                      'char' => 73,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 196,
                    'char' => 73,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 196,
                'char' => 74,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 197,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 192,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 192,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 191,
          'last-line' => 199,
          'char' => 19,
        ),
        13 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'replaceById',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 199,
              'char' => 43,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 199,
              'char' => 55,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Document',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 199,
                'char' => 75,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 199,
              'char' => 76,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 199,
                'char' => 96,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 199,
              'char' => 96,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 201,
                  'char' => 21,
                ),
                'name' => 'put',
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
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 201,
                        'char' => 44,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'URL_DOCUMENT',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 201,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 201,
                      'char' => 44,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 201,
                    'char' => 44,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'collection',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 201,
                      'char' => 56,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 201,
                    'char' => 56,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'documentId',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 201,
                      'char' => 68,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 201,
                    'char' => 68,
                  ),
                  3 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 201,
                      'char' => 78,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 201,
                    'char' => 78,
                  ),
                  4 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 201,
                      'char' => 87,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 201,
                    'char' => 87,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 201,
                'char' => 88,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 202,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 200,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 200,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 199,
          'last-line' => 204,
          'char' => 19,
        ),
        14 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'put',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 204,
              'char' => 38,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 204,
              'char' => 57,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 204,
              'char' => 69,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Document',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 204,
                'char' => 89,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 204,
              'char' => 90,
            ),
            4 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 204,
                'char' => 110,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 204,
              'char' => 110,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 206,
                  'char' => 27,
                ),
                1 => 
                array (
                  'variable' => 'params',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 206,
                  'char' => 35,
                ),
                2 => 
                array (
                  'variable' => 'tmpArray6cb2004c711821f8e0e9777e41742c7f',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 206,
                  'char' => 77,
                ),
                3 => 
                array (
                  'variable' => 'headers',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 206,
                  'char' => 86,
                ),
                4 => 
                array (
                  'variable' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 206,
                  'char' => 92,
                ),
                5 => 
                array (
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 206,
                  'char' => 100,
                ),
                6 => 
                array (
                  'variable' => 'json',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 206,
                  'char' => 106,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 208,
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
                  'variable' => 'collection',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 208,
                      'char' => 32,
                    ),
                    'name' => 'makeCollection',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 208,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 208,
                        'char' => 58,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 208,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 208,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 209,
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
                  'variable' => '_documentClass',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 209,
                      'char' => 36,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_documentClass',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 209,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 209,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 209,
                  'char' => 51,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 210,
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
                  'variable' => 'tmpArray6cb2004c711821f8e0e9777e41742c7f',
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
                          'value' => 'waitForSync',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 210,
                          'char' => 71,
                        ),
                        'value' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 210,
                            'char' => 78,
                          ),
                          'name' => 'getConnectionOption',
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
                                  'value' => 'ConnectionOptions',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 210,
                                  'char' => 134,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_WAIT_SYNC',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 210,
                                  'char' => 134,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 210,
                                'char' => 134,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 210,
                              'char' => 134,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 210,
                          'char' => 135,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 210,
                        'char' => 135,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'silent',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 210,
                          'char' => 146,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 210,
                          'char' => 153,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 210,
                        'char' => 153,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'ignoreRevs',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 210,
                          'char' => 168,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 210,
                          'char' => 174,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 210,
                        'char' => 174,
                      ),
                      3 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'policy',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 210,
                          'char' => 185,
                        ),
                        'value' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 210,
                            'char' => 192,
                          ),
                          'name' => 'getConnectionOption',
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
                                  'value' => 'ConnectionOptions',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 210,
                                  'char' => 253,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_REPLACE_POLICY',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 210,
                                  'char' => 253,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 210,
                                'char' => 253,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 210,
                              'char' => 253,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 210,
                          'char' => 254,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 210,
                        'char' => 254,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 210,
                    'char' => 255,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 210,
                  'char' => 255,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 211,
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
                  'variable' => 'params',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 211,
                      'char' => 28,
                    ),
                    'name' => 'includeOptionsInParams',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 211,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 211,
                        'char' => 59,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpArray6cb2004c711821f8e0e9777e41742c7f',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 211,
                          'char' => 101,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 211,
                        'char' => 101,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 211,
                    'char' => 102,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 211,
                  'char' => 102,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 212,
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
                  'variable' => 'headers',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 212,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 212,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 213,
              'char' => 10,
            ),
            6 => 
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
                      'value' => 'params',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 213,
                      'char' => 24,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 213,
                        'char' => 65,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_REPLACE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 213,
                        'char' => 65,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 213,
                      'char' => 65,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 213,
                    'char' => 68,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 213,
                  'char' => 68,
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
                      'value' => 'params',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 213,
                      'char' => 76,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 213,
                        'char' => 117,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_REPLACE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 213,
                        'char' => 117,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 213,
                      'char' => 117,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 213,
                    'char' => 121,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'UpdatePolicy',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 213,
                      'char' => 143,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ERROR',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 213,
                      'char' => 143,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 213,
                    'char' => 143,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 213,
                  'char' => 143,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 213,
                'char' => 143,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'not-identical',
                    'left' => 
                    array (
                      'type' => 'array-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 214,
                        'char' => 23,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => 'revision',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 214,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 214,
                      'char' => 38,
                    ),
                    'right' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 214,
                      'char' => 45,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 214,
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
                          'assign-type' => 'array-index',
                          'operator' => 'assign',
                          'variable' => 'params',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'ignoreRevs',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 215,
                              'char' => 40,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 215,
                            'char' => 49,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 215,
                          'char' => 49,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 216,
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
                          'variable' => 'headers',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'if-match',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 216,
                              'char' => 39,
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
                                'type' => 'string',
                                'value' => '\\"',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 216,
                                'char' => 49,
                              ),
                              'right' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'options',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 216,
                                  'char' => 58,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'revision',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 216,
                                  'char' => 69,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 216,
                                'char' => 71,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 216,
                              'char' => 71,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '\\"',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 216,
                              'char' => 77,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 216,
                            'char' => 77,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 216,
                          'char' => 77,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 217,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 218,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 219,
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
                  'variable' => 'data',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 219,
                      'char' => 30,
                    ),
                    'name' => 'getAllForInsertUpdate',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 219,
                    'char' => 54,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 219,
                  'char' => 54,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 220,
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
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'buildUrl',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 220,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 220,
                        'char' => 43,
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
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'collection',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 220,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 220,
                              'char' => 56,
                            ),
                            1 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'documentId',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 220,
                                'char' => 68,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 220,
                              'char' => 68,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 220,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 220,
                        'char' => 69,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 220,
                    'char' => 70,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 220,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 221,
              'char' => 11,
            ),
            9 => 
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
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 221,
                          'char' => 50,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 221,
                        'char' => 50,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'params',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 221,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 221,
                        'char' => 58,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 221,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 221,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 222,
              'char' => 11,
            ),
            10 => 
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
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 222,
                        'char' => 28,
                      ),
                      'name' => 'getConnection',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 222,
                      'char' => 45,
                    ),
                    'name' => 'put',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 222,
                          'char' => 53,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 222,
                        'char' => 53,
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
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 222,
                            'char' => 60,
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
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 222,
                                'char' => 85,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 222,
                              'char' => 85,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 222,
                          'char' => 86,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 222,
                        'char' => 86,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'headers',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 222,
                          'char' => 95,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 222,
                        'char' => 95,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 222,
                    'char' => 96,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 222,
                  'char' => 96,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 223,
              'char' => 11,
            ),
            11 => 
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
                      'value' => 'result',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 223,
                      'char' => 28,
                    ),
                    'name' => 'getJson',
                    'call-type' => 1,
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 223,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 223,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 224,
              'char' => 16,
            ),
            12 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 224,
                  'char' => 18,
                ),
                'name' => 'setRevision',
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
                        'value' => 'json',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 224,
                        'char' => 35,
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
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 224,
                                'char' => 60,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => '::ENTRY_REV',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 224,
                                'char' => 75,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 224,
                              'char' => 75,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 224,
                            'char' => 75,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 224,
                        'char' => 76,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 224,
                      'char' => 77,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 224,
                    'char' => 77,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 224,
                'char' => 78,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 225,
              'char' => 14,
            ),
            13 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'true',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 225,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 226,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 205,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 205,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 204,
          'last-line' => 228,
          'char' => 22,
        ),
        15 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'remove',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'Document',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 228,
                'char' => 46,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 228,
              'char' => 47,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 228,
                'char' => 67,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 228,
              'char' => 67,
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
                  'variable' => 'documentId',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 230,
                  'char' => 23,
                ),
                1 => 
                array (
                  'variable' => 'revision',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 230,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 232,
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
                  'variable' => 'documentId',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 232,
                      'char' => 32,
                    ),
                    'name' => 'getDocumentId',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 232,
                          'char' => 55,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 232,
                        'char' => 55,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 232,
                    'char' => 56,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 232,
                  'char' => 56,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 233,
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
                  'variable' => 'revision',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 233,
                      'char' => 30,
                    ),
                    'name' => 'getRevision',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 233,
                          'char' => 51,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 233,
                        'char' => 51,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 233,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 233,
                  'char' => 52,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 234,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 234,
                  'char' => 21,
                ),
                'name' => 'removeById',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 234,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 234,
                    'char' => 41,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'documentId',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 234,
                      'char' => 53,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 234,
                    'char' => 53,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'revision',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 234,
                      'char' => 63,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 234,
                    'char' => 63,
                  ),
                  3 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 234,
                      'char' => 72,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 234,
                    'char' => 72,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 234,
                'char' => 73,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 235,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 229,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 229,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 228,
          'last-line' => 237,
          'char' => 19,
        ),
        16 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'removeById',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 237,
              'char' => 42,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 237,
              'char' => 54,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'revision',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 237,
                'char' => 71,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 237,
              'char' => 71,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 237,
                'char' => 91,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 237,
              'char' => 91,
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
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 239,
                  'char' => 21,
                ),
                'name' => 'erase',
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
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 239,
                        'char' => 46,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'URL_DOCUMENT',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 239,
                        'char' => 46,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 239,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 239,
                    'char' => 46,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'collection',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 239,
                      'char' => 58,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 239,
                    'char' => 58,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'documentId',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 239,
                      'char' => 70,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 239,
                    'char' => 70,
                  ),
                  3 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'revision',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 239,
                      'char' => 80,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 239,
                    'char' => 80,
                  ),
                  4 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 239,
                      'char' => 89,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 239,
                    'char' => 89,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 239,
                'char' => 90,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 240,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 238,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 238,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 237,
          'last-line' => 242,
          'char' => 19,
        ),
        17 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'erase',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'url',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 242,
              'char' => 40,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 242,
              'char' => 59,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'documentId',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 242,
              'char' => 71,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'revision',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 242,
                'char' => 88,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 242,
              'char' => 88,
            ),
            4 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 242,
                'char' => 108,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 242,
              'char' => 108,
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
                  'variable' => 'params',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 244,
                  'char' => 19,
                ),
                1 => 
                array (
                  'variable' => 'tmpArray0da0ce704ed03b9443cf7d3447b85431',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 244,
                  'char' => 61,
                ),
                2 => 
                array (
                  'variable' => 'headers',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 244,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 246,
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
                  'variable' => 'collection',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 246,
                      'char' => 32,
                    ),
                    'name' => 'makeCollection',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 246,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 246,
                        'char' => 58,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 246,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 246,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 247,
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
                  'variable' => 'tmpArray0da0ce704ed03b9443cf7d3447b85431',
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
                          'value' => 'waitForSync',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 247,
                          'char' => 71,
                        ),
                        'value' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 247,
                            'char' => 78,
                          ),
                          'name' => 'getConnectionOption',
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
                                  'value' => 'ConnectionOptions',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 247,
                                  'char' => 134,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_WAIT_SYNC',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 247,
                                  'char' => 134,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 247,
                                'char' => 134,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 247,
                              'char' => 134,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 247,
                          'char' => 135,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 247,
                        'char' => 135,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'silent',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 247,
                          'char' => 146,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'false',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 247,
                          'char' => 153,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 247,
                        'char' => 153,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'ignoreRevs',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 247,
                          'char' => 168,
                        ),
                        'value' => 
                        array (
                          'type' => 'bool',
                          'value' => 'true',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 247,
                          'char' => 174,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 247,
                        'char' => 174,
                      ),
                      3 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'policy',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 247,
                          'char' => 185,
                        ),
                        'value' => 
                        array (
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 247,
                            'char' => 192,
                          ),
                          'name' => 'getConnectionOption',
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
                                  'value' => 'ConnectionOptions',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 247,
                                  'char' => 252,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'OPTION_DELETE_POLICY',
                                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                  'line' => 247,
                                  'char' => 252,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 247,
                                'char' => 252,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 247,
                              'char' => 252,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 247,
                          'char' => 253,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 247,
                        'char' => 253,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 247,
                    'char' => 254,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 247,
                  'char' => 254,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 248,
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
                  'variable' => 'params',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 248,
                      'char' => 28,
                    ),
                    'name' => 'includeOptionsInParams',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 248,
                          'char' => 59,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 248,
                        'char' => 59,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'tmpArray0da0ce704ed03b9443cf7d3447b85431',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 248,
                          'char' => 101,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 248,
                        'char' => 101,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 248,
                    'char' => 102,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 248,
                  'char' => 102,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 249,
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
                  'variable' => 'headers',
                  'expr' => 
                  array (
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 249,
                    'char' => 26,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 249,
                  'char' => 26,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 250,
              'char' => 10,
            ),
            5 => 
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
                      'value' => 'params',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 250,
                      'char' => 24,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 250,
                        'char' => 64,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_DELETE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 250,
                        'char' => 64,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 250,
                      'char' => 64,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 250,
                    'char' => 67,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 250,
                  'char' => 67,
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
                      'value' => 'params',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 250,
                      'char' => 75,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ConnectionOptions',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 250,
                        'char' => 115,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'OPTION_DELETE_POLICY',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 250,
                        'char' => 115,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 250,
                      'char' => 115,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 250,
                    'char' => 119,
                  ),
                  'right' => 
                  array (
                    'type' => 'static-constant-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'UpdatePolicy',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 250,
                      'char' => 141,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ERROR',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 250,
                      'char' => 141,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 250,
                    'char' => 141,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 250,
                  'char' => 141,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 250,
                'char' => 141,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'not-identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'revision',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 251,
                      'char' => 27,
                    ),
                    'right' => 
                    array (
                      'type' => 'null',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 251,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 251,
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
                          'variable' => 'params',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'ignoreRevs',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 252,
                              'char' => 40,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'false',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 252,
                            'char' => 49,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 252,
                          'char' => 49,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 253,
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
                          'variable' => 'headers',
                          'index-expr' => 
                          array (
                            0 => 
                            array (
                              'type' => 'string',
                              'value' => 'if-match',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 253,
                              'char' => 39,
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
                                'type' => 'string',
                                'value' => '\\"',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 253,
                                'char' => 49,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'revision',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 253,
                                'char' => 60,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 253,
                              'char' => 60,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '\\"',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 253,
                              'char' => 66,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 253,
                            'char' => 66,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 253,
                          'char' => 66,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 254,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 255,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 256,
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
                  'variable' => 'url',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'UrlHelper',
                    'dynamic' => 0,
                    'name' => 'buildUrl',
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 256,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 256,
                        'char' => 43,
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
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'collection',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 256,
                                'char' => 56,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 256,
                              'char' => 56,
                            ),
                            1 => 
                            array (
                              'value' => 
                              array (
                                'type' => 'variable',
                                'value' => 'documentId',
                                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                                'line' => 256,
                                'char' => 68,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 256,
                              'char' => 68,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 256,
                          'char' => 69,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 256,
                        'char' => 69,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 256,
                    'char' => 70,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 256,
                  'char' => 70,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 257,
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
                          'type' => 'variable',
                          'value' => 'url',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 257,
                          'char' => 50,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 257,
                        'char' => 50,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'params',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 257,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 257,
                        'char' => 58,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 257,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 257,
                  'char' => 59,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 258,
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
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 258,
                    'char' => 14,
                  ),
                  'name' => 'getConnection',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 258,
                  'char' => 31,
                ),
                'name' => 'delete',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'url',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 258,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 258,
                    'char' => 42,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'headers',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 258,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 258,
                    'char' => 51,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 258,
                'char' => 52,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 259,
              'char' => 14,
            ),
            9 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'true',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 259,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 260,
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
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 243,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 243,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 242,
          'last-line' => 262,
          'char' => 22,
        ),
        18 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getDocumentId',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 262,
              'char' => 46,
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
                  'variable' => 'documentId',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 264,
                  'char' => 23,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 266,
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
                  'variable' => 'documentId',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'document',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 266,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 266,
                  'char' => 34,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 267,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'instanceof',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'document',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 267,
                    'char' => 31,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'Document',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 267,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 267,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 267,
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
                      'assign-type' => 'variable',
                      'operator' => 'assign',
                      'variable' => 'documentId',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 268,
                          'char' => 40,
                        ),
                        'name' => 'getId',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 268,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 268,
                      'char' => 48,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 269,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 270,
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
                  'type' => 'or',
                  'left' => 
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
                              'value' => 'documentId',
                              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                              'line' => 270,
                              'char' => 30,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 270,
                            'char' => 30,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 270,
                        'char' => 33,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 270,
                      'char' => 33,
                    ),
                    'right' => 
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
                            'value' => 'documentId',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 270,
                            'char' => 55,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 270,
                          'char' => 55,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 270,
                      'char' => 58,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 270,
                    'char' => 58,
                  ),
                  'right' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'is_float',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'documentId',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 270,
                          'char' => 79,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 270,
                        'char' => 79,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 270,
                    'char' => 82,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 270,
                  'char' => 82,
                ),
                'right' => 
                array (
                  'type' => 'identical',
                  'left' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'trim',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'documentId',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 270,
                          'char' => 99,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 270,
                        'char' => 99,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 270,
                    'char' => 103,
                  ),
                  'right' => 
                  array (
                    'type' => 'string',
                    'value' => '',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 270,
                    'char' => 108,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 270,
                  'char' => 108,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 270,
                'char' => 108,
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
                          'value' => 'Cannot alter a document without a document id',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 271,
                          'char' => 86,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 271,
                        'char' => 86,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 271,
                    'char' => 87,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 272,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 273,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'documentId',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 273,
                'char' => 26,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 274,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 262,
          'last-line' => 276,
          'char' => 22,
        ),
        19 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'getRevision',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'document',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 276,
              'char' => 44,
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
                  'variable' => 'revision',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 278,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 280,
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
                  'variable' => 'revision',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 280,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 280,
                  'char' => 29,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 281,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'instanceof',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'document',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 281,
                    'char' => 31,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'Document',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 281,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 281,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 281,
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
                      'assign-type' => 'variable',
                      'operator' => 'assign',
                      'variable' => 'revision',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'document',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 282,
                          'char' => 38,
                        ),
                        'name' => 'getRevision',
                        'call-type' => 1,
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 282,
                        'char' => 52,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 282,
                      'char' => 52,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 283,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 284,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'revision',
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 284,
                'char' => 24,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 285,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 276,
          'last-line' => 287,
          'char' => 22,
        ),
        20 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'method',
          'name' => 'createCollectionIfOptions',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'collection',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 287,
              'char' => 60,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 287,
              'char' => 75,
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
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 289,
                  'char' => 18,
                ),
                1 => 
                array (
                  'variable' => 'collectionHandler',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 289,
                  'char' => 37,
                ),
                2 => 
                array (
                  'variable' => 'e',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 289,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 291,
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
                  'type' => 'fcall',
                  'name' => 'array_key_exists',
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
                          'value' => 'CollectionHandler',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 291,
                          'char' => 73,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_CREATE_COLLECTION',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 291,
                          'char' => 73,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 291,
                        'char' => 73,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 291,
                      'char' => 73,
                    ),
                    1 => 
                    array (
                      'parameter' => 
                      array (
                        'type' => 'variable',
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 291,
                        'char' => 82,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 291,
                      'char' => 82,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 291,
                  'char' => 84,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 291,
                'char' => 84,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 293,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 294,
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
                  'variable' => 'value',
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
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 294,
                        'char' => 36,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'CollectionHandler',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 294,
                          'char' => 80,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'OPTION_CREATE_COLLECTION',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 294,
                          'char' => 80,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 294,
                        'char' => 80,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 294,
                      'char' => 81,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 294,
                    'char' => 81,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 294,
                  'char' => 81,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 295,
              'char' => 10,
            ),
            3 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 295,
                  'char' => 19,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 295,
                'char' => 19,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 297,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 298,
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
                          'type' => 'mcall',
                          'variable' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                            'line' => 298,
                            'char' => 61,
                          ),
                          'name' => 'getConnection',
                          'call-type' => 1,
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 298,
                          'char' => 77,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 298,
                        'char' => 77,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 298,
                    'char' => 78,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 298,
                  'char' => 78,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 299,
              'char' => 10,
            ),
            5 => 
            array (
              'type' => 'if',
              'expr' => 
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
                      'type' => 'string',
                      'value' => 'createCollectionType',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 299,
                      'char' => 51,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 299,
                    'char' => 51,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 299,
                      'char' => 60,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 299,
                    'char' => 60,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 299,
                'char' => 62,
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
                      'variable' => 'options',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'string',
                          'value' => 'type',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 300,
                          'char' => 31,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'array-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 300,
                          'char' => 42,
                        ),
                        'right' => 
                        array (
                          'type' => 'string',
                          'value' => 'createCollectionType',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 300,
                          'char' => 65,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 300,
                        'char' => 66,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 300,
                      'char' => 66,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 301,
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
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 301,
                      'char' => 26,
                    ),
                    'right' => 
                    array (
                      'type' => 'string',
                      'value' => 'createCollectionType',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 301,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 301,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 303,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 304,
              'char' => 13,
            ),
            6 => 
            array (
              'type' => 'unset',
              'expr' => 
              array (
                'type' => 'array-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'options',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 304,
                  'char' => 22,
                ),
                'right' => 
                array (
                  'type' => 'string',
                  'value' => 'createCollection',
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 304,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                'line' => 304,
                'char' => 42,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 306,
              'char' => 11,
            ),
            7 => 
            array (
              'type' => 'try-catch',
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
                      'value' => 'collectionHandler',
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 307,
                      'char' => 31,
                    ),
                    'name' => 'create',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'collection',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 307,
                          'char' => 49,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 307,
                        'char' => 49,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                          'line' => 307,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 307,
                        'char' => 58,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 307,
                    'char' => 59,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 308,
                  'char' => 9,
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
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 308,
                      'char' => 26,
                    ),
                  ),
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'e',
                    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                    'line' => 311,
                    'char' => 5,
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
                        'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                        'line' => 309,
                        'char' => 20,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                      'line' => 310,
                      'char' => 9,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
                  'line' => 311,
                  'char' => 5,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
              'line' => 311,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 287,
          'last-line' => 313,
          'char' => 22,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_DOCUMENTS',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'documents',
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 5,
            'char' => 40,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 6,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_COLLECTION',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'collection',
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 6,
            'char' => 43,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 7,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_EXAMPLE',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'example',
            'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
            'line' => 7,
            'char' => 37,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
          'line' => 8,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/documenthandler.zep',
    'line' => 3,
    'char' => 5,
  ),
);