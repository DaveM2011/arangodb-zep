<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Document',
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
          'name' => '_id',
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
          'name' => '_key',
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
          'name' => '_rev',
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
          'name' => '_values',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 8,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
          'name' => '_changed',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 9,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
          'name' => '_isNew',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'true',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 10,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
          'name' => '_doValidate',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 11,
            'char' => 34,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
          'name' => '_hiddenAttributes',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 12,
            'char' => 37,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
          'name' => '_ignoreHiddenAttributes',
          'default' => 
          array (
            'type' => 'bool',
            'value' => 'false',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 13,
            'char' => 46,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 23,
                'char' => 53,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 23,
              'char' => 53,
            ),
          ),
          'statements' => 
          array (
            0 => 
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
                      'value' => 'options',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 25,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 25,
                    'char' => 28,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 25,
                'char' => 30,
              ),
              'statements' => 
              array (
                0 => 
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
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 26,
                        'char' => 29,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => 'hiddenAttributes',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 26,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 26,
                      'char' => 50,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 26,
                    'char' => 50,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 27,
                          'char' => 22,
                        ),
                        'name' => 'setHiddenAttributes',
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
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 27,
                                'char' => 50,
                              ),
                              'right' => 
                              array (
                                'type' => 'string',
                                'value' => 'hiddenAttributes',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 27,
                                'char' => 69,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 27,
                              'char' => 70,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 27,
                            'char' => 70,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 27,
                        'char' => 71,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 28,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 29,
                  'char' => 14,
                ),
                1 => 
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
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 29,
                        'char' => 29,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 29,
                          'char' => 58,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_HIDDENATTRIBUTES',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 29,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 29,
                        'char' => 58,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 29,
                      'char' => 60,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 29,
                    'char' => 60,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 30,
                          'char' => 22,
                        ),
                        'name' => 'setHiddenAttributes',
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
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 30,
                                'char' => 50,
                              ),
                              'right' => 
                              array (
                                'type' => 'static-constant-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 30,
                                  'char' => 79,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'ENTRY_HIDDENATTRIBUTES',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 30,
                                  'char' => 79,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 30,
                                'char' => 79,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 30,
                              'char' => 80,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 30,
                            'char' => 80,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 30,
                        'char' => 81,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 31,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 32,
                  'char' => 14,
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
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 32,
                        'char' => 29,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 32,
                          'char' => 64,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_IGNOREHIDDENATTRIBUTES',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 32,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 32,
                        'char' => 64,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 32,
                      'char' => 66,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 32,
                    'char' => 66,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 33,
                          'char' => 22,
                        ),
                        'name' => 'setIgnoreHiddenAttributes',
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
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 33,
                                'char' => 56,
                              ),
                              'right' => 
                              array (
                                'type' => 'static-constant-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 33,
                                  'char' => 91,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'ENTRY_IGNOREHIDDENATTRIBUTES',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 33,
                                  'char' => 91,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 33,
                                'char' => 91,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 33,
                              'char' => 92,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 33,
                            'char' => 92,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 33,
                        'char' => 93,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 34,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 35,
                  'char' => 14,
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
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 35,
                        'char' => 29,
                      ),
                      'right' => 
                      array (
                        'type' => 'static-constant-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'self',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 35,
                          'char' => 47,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ENTRY_ISNEW',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 35,
                          'char' => 47,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 35,
                        'char' => 47,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 35,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 35,
                    'char' => 49,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 36,
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
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'options',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 36,
                                'char' => 39,
                              ),
                              'right' => 
                              array (
                                'type' => 'static-constant-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 36,
                                  'char' => 57,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'ENTRY_ISNEW',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 36,
                                  'char' => 57,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 36,
                                'char' => 57,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 36,
                              'char' => 58,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 36,
                            'char' => 58,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 36,
                        'char' => 59,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 37,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 38,
                  'char' => 14,
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
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 38,
                        'char' => 29,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => '_validate',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 38,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 38,
                      'char' => 43,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 38,
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
                          'property' => '_doValidate',
                          'expr' => 
                          array (
                            'type' => 'array-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'options',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 39,
                              'char' => 48,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '_validate',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 39,
                              'char' => 60,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 39,
                            'char' => 61,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 39,
                          'char' => 61,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 40,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 41,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 42,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 23,
          'last-line' => 44,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'createFromArray',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'values',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 44,
              'char' => 56,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 44,
                'char' => 76,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 44,
              'char' => 76,
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
                  'variable' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 46,
                  'char' => 21,
                ),
                1 => 
                array (
                  'variable' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 46,
                  'char' => 26,
                ),
                2 => 
                array (
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 46,
                  'char' => 33,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 48,
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
                  'variable' => 'document',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => 'Document',
                    'dynamic' => 0,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 48,
                          'char' => 45,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 48,
                        'char' => 45,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 48,
                    'char' => 46,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 48,
                  'char' => 46,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 49,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'values',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 49,
                'char' => 34,
              ),
              'key' => 'key',
              'value' => 'value',
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
                      'value' => 'document',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 50,
                      'char' => 22,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 50,
                          'char' => 30,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 50,
                        'char' => 30,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'value',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 50,
                          'char' => 37,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 50,
                        'char' => 37,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 50,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 51,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 52,
              'char' => 16,
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
                  'value' => 'document',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 52,
                  'char' => 18,
                ),
                'name' => 'setChanged',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'bool',
                      'value' => 'true',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 52,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 52,
                    'char' => 34,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 52,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 53,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'document',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 53,
                'char' => 24,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 54,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 44,
          'last-line' => 56,
          'char' => 26,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__clone',
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
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 58,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 58,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 59,
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
                  'property' => '_key',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 59,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 59,
                  'char' => 31,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 60,
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
                  'property' => '_rev',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 60,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 60,
                  'char' => 31,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 61,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 56,
          'last-line' => 63,
          'char' => 19,
        ),
        3 => 
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
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 65,
                  'char' => 21,
                ),
                'name' => 'toJson',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 65,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 66,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 64,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 64,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 63,
          'last-line' => 68,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'toJson',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 68,
                'char' => 46,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 68,
              'char' => 46,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'json_encode',
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
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 70,
                        'char' => 33,
                      ),
                      'name' => 'getAll',
                      'call-type' => 1,
                      'parameters' => 
                      array (
                        0 => 
                        array (
                          'parameter' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 70,
                            'char' => 48,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 70,
                          'char' => 48,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 70,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 70,
                    'char' => 49,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 70,
                'char' => 50,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 71,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 69,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 69,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 68,
          'last-line' => 73,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'toSerialized',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 73,
                'char' => 52,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 73,
              'char' => 52,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'serialize',
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
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 75,
                        'char' => 31,
                      ),
                      'name' => 'getAll',
                      'call-type' => 1,
                      'parameters' => 
                      array (
                        0 => 
                        array (
                          'parameter' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 75,
                            'char' => 46,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 75,
                          'char' => 46,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 75,
                      'char' => 47,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 75,
                    'char' => 47,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 75,
                'char' => 48,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 76,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 74,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 74,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 73,
          'last-line' => 78,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'filterHiddenAttributes',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'attributes',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 78,
              'char' => 60,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => '_hiddenAttributes',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 78,
                'char' => 90,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 78,
              'char' => 90,
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
                  'variable' => 'hiddenAttributes',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 80,
                  'char' => 29,
                ),
                1 => 
                array (
                  'variable' => 'hiddenAttributeName',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 80,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 82,
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
                  'variable' => 'hiddenAttributes',
                  'expr' => 
                  array (
                    'type' => 'ternary',
                    'left' => 
                    array (
                      'type' => 'not-identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => '_hiddenAttributes',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 82,
                        'char' => 53,
                      ),
                      'right' => 
                      array (
                        'type' => 'null',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 82,
                        'char' => 60,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 82,
                      'char' => 60,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_hiddenAttributes',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 82,
                      'char' => 81,
                    ),
                    'extra' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 82,
                        'char' => 88,
                      ),
                      'name' => 'getHiddenAttributes',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 82,
                      'char' => 110,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 82,
                    'char' => 110,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 82,
                  'char' => 110,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 83,
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
                        'value' => 'hiddenAttributes',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 83,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 83,
                      'char' => 34,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 83,
                  'char' => 36,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '0',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 83,
                  'char' => 40,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 83,
                'char' => 40,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'for',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'hiddenAttributes',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 84,
                    'char' => 57,
                  ),
                  'value' => 'hiddenAttributeName',
                  'reverse' => 0,
                  'statements' => 
                  array (
                    0 => 
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
                            'value' => 'attributes',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 85,
                            'char' => 36,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'hiddenAttributeName',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 85,
                            'char' => 56,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 85,
                          'char' => 58,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 85,
                        'char' => 58,
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
                              'type' => 'variable',
                              'value' => 'attributes',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 86,
                              'char' => 37,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'hiddenAttributeName',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 86,
                              'char' => 57,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 86,
                            'char' => 58,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 88,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 89,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 90,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 91,
              'char' => 13,
            ),
            3 => 
            array (
              'type' => 'unset',
              'expr' => 
              array (
                'type' => 'array-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'attributes',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 91,
                  'char' => 25,
                ),
                'right' => 
                array (
                  'type' => 'static-constant-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'self',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 91,
                    'char' => 54,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'ENTRY_HIDDENATTRIBUTES',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 91,
                    'char' => 54,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 91,
                  'char' => 54,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 91,
                'char' => 55,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 93,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'attributes',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 93,
                'char' => 26,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 94,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 79,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 79,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 78,
          'last-line' => 96,
          'char' => 19,
        ),
        7 => 
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 96,
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 96,
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
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 98,
                  'char' => 17,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_doValidate',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 98,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 98,
                'char' => 30,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 99,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 99,
                        'char' => 43,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 99,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 100,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 101,
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
                  'type' => 'array-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'key',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 101,
                    'char' => 15,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '0',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 101,
                    'char' => 17,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 101,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'char',
                  'value' => '_',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 101,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 101,
                'char' => 27,
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
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 102,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 102,
                        'char' => 39,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_ID',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 102,
                        'char' => 39,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 102,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 102,
                    'char' => 39,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 103,
                          'char' => 22,
                        ),
                        'name' => 'setInternalId',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 103,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 103,
                            'char' => 42,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 103,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 104,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 105,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 106,
                  'char' => 14,
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
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 106,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 106,
                        'char' => 40,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_KEY',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 106,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 106,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 106,
                    'char' => 40,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 107,
                          'char' => 22,
                        ),
                        'name' => 'setInternalKey',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 107,
                              'char' => 43,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 107,
                            'char' => 43,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 107,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 108,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 109,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 110,
                  'char' => 14,
                ),
                2 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 110,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 110,
                        'char' => 40,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_REV',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 110,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 110,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 110,
                    'char' => 40,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 111,
                          'char' => 22,
                        ),
                        'name' => 'setRevision',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 111,
                              'char' => 40,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 111,
                            'char' => 40,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 111,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 112,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 113,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 114,
                  'char' => 14,
                ),
                3 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 114,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 114,
                        'char' => 42,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_ISNEW',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 114,
                        'char' => 42,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 114,
                      'char' => 42,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 114,
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 115,
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
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 115,
                              'char' => 37,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 115,
                            'char' => 37,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 115,
                        'char' => 38,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 116,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 117,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 118,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 119,
              'char' => 10,
            ),
            2 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'not',
                'left' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 119,
                    'char' => 18,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_changed',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 119,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 119,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 119,
                'char' => 28,
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
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 120,
                              'char' => 28,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => '_values',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 120,
                              'char' => 36,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 120,
                            'char' => 36,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'key',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 120,
                            'char' => 40,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 120,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 120,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 120,
                      'char' => 43,
                    ),
                    'right' => 
                    array (
                      'type' => 'not-identical',
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
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 120,
                            'char' => 50,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_values',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 120,
                            'char' => 58,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 120,
                          'char' => 58,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'key',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 120,
                          'char' => 62,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 120,
                        'char' => 66,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'value',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 120,
                        'char' => 74,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 120,
                      'char' => 74,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 120,
                    'char' => 74,
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
                          'property' => '_changed',
                          'expr' => 
                          array (
                            'type' => 'bool',
                            'value' => 'true',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 121,
                            'char' => 43,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 121,
                          'char' => 43,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 122,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 123,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 124,
              'char' => 11,
            ),
            3 => 
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
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 124,
                      'char' => 30,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 124,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 124,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 125,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 96,
          'last-line' => 127,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__set',
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 127,
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 127,
              'char' => 44,
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
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 129,
                  'char' => 14,
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
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 129,
                      'char' => 22,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 129,
                    'char' => 22,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 129,
                      'char' => 29,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 129,
                    'char' => 29,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 129,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 130,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 127,
          'last-line' => 132,
          'char' => 19,
        ),
        9 => 
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
              'name' => 'key',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 132,
              'char' => 35,
            ),
          ),
          'statements' => 
          array (
            0 => 
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
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 134,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 134,
                      'char' => 31,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 134,
                    'char' => 31,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'key',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 134,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 134,
                  'char' => 37,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 134,
                'char' => 37,
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
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 135,
                        'char' => 25,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_values',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 135,
                        'char' => 33,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 135,
                      'char' => 33,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 135,
                      'char' => 37,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 135,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 136,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 137,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 137,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 138,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 132,
          'last-line' => 140,
          'char' => 19,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__get',
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 140,
              'char' => 37,
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 142,
                  'char' => 21,
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
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 142,
                      'char' => 29,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 142,
                    'char' => 29,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 142,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 143,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 140,
          'last-line' => 145,
          'char' => 19,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__isset',
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 145,
              'char' => 39,
            ),
          ),
          'statements' => 
          array (
            0 => 
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
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 147,
                      'char' => 23,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 147,
                      'char' => 31,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 147,
                    'char' => 31,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'key',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 147,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 147,
                  'char' => 37,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 147,
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
                    'value' => 'true',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 148,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 149,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 150,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'bool',
                'value' => 'false',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 150,
                'char' => 21,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 151,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 146,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 146,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 145,
          'last-line' => 153,
          'char' => 19,
        ),
        12 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__unset',
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 153,
              'char' => 32,
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
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 155,
                    'char' => 20,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_values',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 155,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 155,
                  'char' => 28,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 155,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 155,
                'char' => 33,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 157,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 154,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 153,
          'last-line' => 159,
          'char' => 19,
        ),
        13 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getAll',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 159,
                'char' => 46,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 159,
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
                  'variable' => 'includeInternals',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 161,
                  'char' => 29,
                ),
                1 => 
                array (
                  'variable' => 'ignoreHiddenAttributes',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 161,
                  'char' => 53,
                ),
                2 => 
                array (
                  'variable' => '_hiddenAttributes',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 161,
                  'char' => 72,
                ),
                3 => 
                array (
                  'variable' => 'data',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 161,
                  'char' => 78,
                ),
                4 => 
                array (
                  'variable' => 'nonInternals',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 161,
                  'char' => 92,
                ),
                5 => 
                array (
                  'variable' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 161,
                  'char' => 97,
                ),
                6 => 
                array (
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 161,
                  'char' => 104,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 163,
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
                  'variable' => 'includeInternals',
                  'expr' => 
                  array (
                    'type' => 'bool',
                    'value' => 'false',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 163,
                    'char' => 38,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 163,
                  'char' => 38,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 164,
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
                  'variable' => 'ignoreHiddenAttributes',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 164,
                      'char' => 44,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_ignoreHiddenAttributes',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 164,
                      'char' => 68,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 164,
                    'char' => 68,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 164,
                  'char' => 68,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 165,
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
                  'variable' => '_hiddenAttributes',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 165,
                      'char' => 39,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_hiddenAttributes',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 165,
                      'char' => 57,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 165,
                    'char' => 57,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 165,
                  'char' => 57,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 166,
              'char' => 10,
            ),
            4 => 
            array (
              'type' => 'if',
              'expr' => 
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
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 166,
                        'char' => 29,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 166,
                      'char' => 29,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 166,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 166,
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
                      'variable' => 'includeInternals',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'options',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 167,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 167,
                      'char' => 43,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 168,
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
                      'variable' => 'includeInternals',
                      'expr' => 
                      array (
                        'type' => 'ternary',
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
                                'value' => 'includeInternals',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 169,
                                'char' => 72,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 169,
                              'char' => 72,
                            ),
                            1 => 
                            array (
                              'parameter' => 
                              array (
                                'type' => 'variable',
                                'value' => 'options',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 169,
                                'char' => 81,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 169,
                              'char' => 81,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 169,
                          'char' => 83,
                        ),
                        'right' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 169,
                            'char' => 92,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => 'includeInternals',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 169,
                            'char' => 111,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 169,
                          'char' => 114,
                        ),
                        'extra' => 
                        array (
                          'type' => 'variable',
                          'value' => 'includeInternals',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 169,
                          'char' => 132,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 169,
                        'char' => 132,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 169,
                      'char' => 132,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 170,
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
                      'variable' => 'includeInternals',
                      'expr' => 
                      array (
                        'type' => 'ternary',
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
                                'value' => '_includeInternals',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 170,
                                'char' => 73,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 170,
                              'char' => 73,
                            ),
                            1 => 
                            array (
                              'parameter' => 
                              array (
                                'type' => 'variable',
                                'value' => 'options',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 170,
                                'char' => 82,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 170,
                              'char' => 82,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 170,
                          'char' => 84,
                        ),
                        'right' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 170,
                            'char' => 93,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => '_includeInternals',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 170,
                            'char' => 113,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 170,
                          'char' => 116,
                        ),
                        'extra' => 
                        array (
                          'type' => 'variable',
                          'value' => 'includeInternals',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 170,
                          'char' => 134,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 170,
                        'char' => 134,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 170,
                      'char' => 134,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 171,
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
                      'variable' => 'ignoreHiddenAttributes',
                      'expr' => 
                      array (
                        'type' => 'ternary',
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
                                'value' => 'ignoreHiddenAttributes',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 171,
                                'char' => 84,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 171,
                              'char' => 84,
                            ),
                            1 => 
                            array (
                              'parameter' => 
                              array (
                                'type' => 'variable',
                                'value' => 'options',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 171,
                                'char' => 93,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 171,
                              'char' => 93,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 171,
                          'char' => 95,
                        ),
                        'right' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 171,
                            'char' => 104,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => 'ignoreHiddenAttributes',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 171,
                            'char' => 129,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 171,
                          'char' => 132,
                        ),
                        'extra' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ignoreHiddenAttributes',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 171,
                          'char' => 156,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 171,
                        'char' => 156,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 171,
                      'char' => 156,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 172,
                  'char' => 15,
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
                      'variable' => 'ignoreHiddenAttributes',
                      'expr' => 
                      array (
                        'type' => 'ternary',
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
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 172,
                                  'char' => 94,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'ENTRY_IGNOREHIDDENATTRIBUTES',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 172,
                                  'char' => 94,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 172,
                                'char' => 94,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 172,
                              'char' => 94,
                            ),
                            1 => 
                            array (
                              'parameter' => 
                              array (
                                'type' => 'variable',
                                'value' => 'options',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 172,
                                'char' => 103,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 172,
                              'char' => 103,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 172,
                          'char' => 105,
                        ),
                        'right' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 172,
                            'char' => 114,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 172,
                              'char' => 149,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_IGNOREHIDDENATTRIBUTES',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 172,
                              'char' => 149,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 172,
                            'char' => 149,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 172,
                          'char' => 152,
                        ),
                        'extra' => 
                        array (
                          'type' => 'variable',
                          'value' => 'ignoreHiddenAttributes',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 172,
                          'char' => 176,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 172,
                        'char' => 176,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 172,
                      'char' => 176,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 173,
                  'char' => 15,
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
                      'variable' => '_hiddenAttributes',
                      'expr' => 
                      array (
                        'type' => 'ternary',
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
                                  'value' => 'self',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 173,
                                  'char' => 83,
                                ),
                                'right' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'ENTRY_HIDDENATTRIBUTES',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 173,
                                  'char' => 83,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 173,
                                'char' => 83,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 173,
                              'char' => 83,
                            ),
                            1 => 
                            array (
                              'parameter' => 
                              array (
                                'type' => 'variable',
                                'value' => 'options',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 173,
                                'char' => 92,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 173,
                              'char' => 92,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 173,
                          'char' => 94,
                        ),
                        'right' => 
                        array (
                          'type' => 'array-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'options',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 173,
                            'char' => 103,
                          ),
                          'right' => 
                          array (
                            'type' => 'static-constant-access',
                            'left' => 
                            array (
                              'type' => 'variable',
                              'value' => 'self',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 173,
                              'char' => 132,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'ENTRY_HIDDENATTRIBUTES',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 173,
                              'char' => 132,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 173,
                            'char' => 132,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 173,
                          'char' => 135,
                        ),
                        'extra' => 
                        array (
                          'type' => 'variable',
                          'value' => '_hiddenAttributes',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 173,
                          'char' => 154,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 173,
                        'char' => 154,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 173,
                      'char' => 154,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 174,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
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
                  'variable' => 'data',
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 175,
                      'char' => 26,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_values',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 175,
                      'char' => 34,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 175,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 175,
                  'char' => 34,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 176,
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
                  'variable' => 'nonInternals',
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
                          'value' => '_changed',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 176,
                          'char' => 40,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 176,
                        'char' => 40,
                      ),
                      1 => 
                      array (
                        'value' => 
                        array (
                          'type' => 'string',
                          'value' => '_values',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 176,
                          'char' => 51,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 176,
                        'char' => 51,
                      ),
                      2 => 
                      array (
                        'value' => 
                        array (
                          'type' => 'static-constant-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'self',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 176,
                            'char' => 81,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'ENTRY_HIDDENATTRIBUTES',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 176,
                            'char' => 81,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 176,
                          'char' => 81,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 176,
                        'char' => 81,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 176,
                    'char' => 82,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 176,
                  'char' => 82,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 177,
              'char' => 10,
            ),
            7 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'identical',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'includeInternals',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 177,
                  'char' => 31,
                ),
                'right' => 
                array (
                  'type' => 'bool',
                  'value' => 'true',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 177,
                  'char' => 38,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 177,
                'char' => 38,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'for',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 178,
                    'char' => 36,
                  ),
                  'key' => 'key',
                  'value' => 'value',
                  'reverse' => 0,
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
                          'type' => 'and',
                          'left' => 
                          array (
                            'type' => 'identical',
                            'left' => 
                            array (
                              'type' => 'array-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'key',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 179,
                                'char' => 23,
                              ),
                              'right' => 
                              array (
                                'type' => 'int',
                                'value' => '0',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 179,
                                'char' => 25,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 179,
                              'char' => 29,
                            ),
                            'right' => 
                            array (
                              'type' => 'string',
                              'value' => '_',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 179,
                              'char' => 36,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 179,
                            'char' => 36,
                          ),
                          'right' => 
                          array (
                            'type' => 'not-identical',
                            'left' => 
                            array (
                              'type' => 'int',
                              'value' => '0',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 179,
                              'char' => 42,
                            ),
                            'right' => 
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
                                    'value' => 'key',
                                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                    'line' => 179,
                                    'char' => 54,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 179,
                                  'char' => 54,
                                ),
                                1 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'string',
                                    'value' => '__',
                                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                    'line' => 179,
                                    'char' => 60,
                                  ),
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 179,
                                  'char' => 60,
                                ),
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 179,
                              'char' => 63,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 179,
                            'char' => 63,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 179,
                          'char' => 63,
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
                                  'type' => 'variable',
                                  'value' => 'key',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 179,
                                  'char' => 78,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 179,
                                'char' => 78,
                              ),
                              1 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'nonInternals',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 179,
                                  'char' => 92,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 179,
                                'char' => 92,
                              ),
                              2 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'bool',
                                  'value' => 'true',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 179,
                                  'char' => 98,
                                ),
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 179,
                                'char' => 98,
                              ),
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 179,
                            'char' => 100,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 179,
                          'char' => 100,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 179,
                        'char' => 100,
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
                                  'type' => 'variable',
                                  'value' => 'key',
                                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                  'line' => 180,
                                  'char' => 33,
                                ),
                              ),
                              'expr' => 
                              array (
                                'type' => 'variable',
                                'value' => 'value',
                                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                                'line' => 180,
                                'char' => 42,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 180,
                              'char' => 42,
                            ),
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 181,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 182,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 183,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 184,
              'char' => 10,
            ),
            8 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'identical',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'ignoreHiddenAttributes',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 184,
                  'char' => 37,
                ),
                'right' => 
                array (
                  'type' => 'bool',
                  'value' => 'false',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 184,
                  'char' => 45,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 184,
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
                      'variable' => 'data',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 185,
                          'char' => 30,
                        ),
                        'name' => 'filterHiddenAttributes',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'data',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 185,
                              'char' => 58,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 185,
                            'char' => 58,
                          ),
                          1 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => '_hiddenAttributes',
                              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                              'line' => 185,
                              'char' => 77,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 185,
                            'char' => 77,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 185,
                        'char' => 78,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 185,
                      'char' => 78,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 186,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 187,
              'char' => 10,
            ),
            9 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 187,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_key',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 187,
                    'char' => 25,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 187,
                  'char' => 25,
                ),
                'right' => 
                array (
                  'type' => 'null',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 187,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 187,
                'char' => 32,
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
                          'type' => 'string',
                          'value' => '_key',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 188,
                          'char' => 28,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 188,
                          'char' => 37,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_key',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 188,
                          'char' => 42,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 188,
                        'char' => 42,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 188,
                      'char' => 42,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 189,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 190,
              'char' => 14,
            ),
            10 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'data',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 190,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 191,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 160,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 160,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 159,
          'last-line' => 193,
          'char' => 19,
        ),
        14 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getAllForInsertUpdate',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 195,
                  'char' => 17,
                ),
                1 => 
                array (
                  'variable' => 'key',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 195,
                  'char' => 22,
                ),
                2 => 
                array (
                  'variable' => 'value',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 195,
                  'char' => 29,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 197,
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
                    'type' => 'empty-array',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 197,
                    'char' => 23,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 197,
                  'char' => 23,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 198,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 198,
                  'char' => 32,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_values',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 198,
                  'char' => 41,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 198,
                'char' => 41,
              ),
              'key' => 'key',
              'value' => 'value',
              'reverse' => 0,
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
                      'type' => 'identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'key',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 199,
                        'char' => 22,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => '_id',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 199,
                        'char' => 31,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 199,
                      'char' => 31,
                    ),
                    'right' => 
                    array (
                      'type' => 'identical',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'key',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 199,
                        'char' => 39,
                      ),
                      'right' => 
                      array (
                        'type' => 'string',
                        'value' => '_rev',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 199,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 199,
                      'char' => 48,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 199,
                    'char' => 48,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'continue',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 201,
                      'char' => 13,
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
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'key',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 202,
                            'char' => 26,
                          ),
                          'right' => 
                          array (
                            'type' => 'string',
                            'value' => '_key',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 202,
                            'char' => 36,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 202,
                          'char' => 36,
                        ),
                        'right' => 
                        array (
                          'type' => 'identical',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'value',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 202,
                            'char' => 46,
                          ),
                          'right' => 
                          array (
                            'type' => 'null',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 202,
                            'char' => 53,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 202,
                          'char' => 53,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 202,
                        'char' => 53,
                      ),
                      'statements' => 
                      array (
                        0 => 
                        array (
                          'type' => 'continue',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 204,
                          'char' => 17,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 205,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 206,
                  'char' => 15,
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
                      'variable' => 'data',
                      'index-expr' => 
                      array (
                        0 => 
                        array (
                          'type' => 'variable',
                          'value' => 'key',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 206,
                          'char' => 25,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'value',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 206,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 206,
                      'char' => 34,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 207,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 208,
              'char' => 10,
            ),
            3 => 
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
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 208,
                    'char' => 17,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_key',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 208,
                    'char' => 25,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 208,
                  'char' => 25,
                ),
                'right' => 
                array (
                  'type' => 'null',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 208,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 208,
                'char' => 32,
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
                          'type' => 'string',
                          'value' => '_key',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 209,
                          'char' => 28,
                        ),
                      ),
                      'expr' => 
                      array (
                        'type' => 'property-access',
                        'left' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 209,
                          'char' => 37,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_key',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 209,
                          'char' => 42,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 209,
                        'char' => 42,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 209,
                      'char' => 42,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 210,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 211,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'data',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 211,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 212,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 193,
          'last-line' => 214,
          'char' => 19,
        ),
        15 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getAllAsObject',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'options',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'empty-array',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 214,
                'char' => 54,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 214,
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
                  'variable' => 'result',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 216,
                  'char' => 19,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 218,
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
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 218,
                      'char' => 28,
                    ),
                    'name' => 'getAll',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'options',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 218,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 218,
                        'char' => 43,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 218,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 218,
                  'char' => 44,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 219,
              'char' => 10,
            ),
            2 => 
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
                        'value' => 'result',
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 219,
                        'char' => 24,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 219,
                      'char' => 24,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 219,
                  'char' => 28,
                ),
                'right' => 
                array (
                  'type' => 'int',
                  'value' => '0',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 219,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 219,
                'char' => 32,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => '\\stdClass',
                    'dynamic' => 0,
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 220,
                    'char' => 35,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 221,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 222,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'result',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 222,
                'char' => 22,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 223,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 214,
          'last-line' => 225,
          'char' => 19,
        ),
        16 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setHiddenAttributes',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'attributes',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 225,
              'char' => 57,
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
                  'property' => '_hiddenAttributes',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'attributes',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 227,
                    'char' => 49,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 227,
                  'char' => 49,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 228,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 225,
          'last-line' => 230,
          'char' => 19,
        ),
        17 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHiddenAttributes',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 232,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_hiddenAttributes',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 232,
                  'char' => 39,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 232,
                'char' => 39,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 233,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 231,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 231,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 230,
          'last-line' => 235,
          'char' => 19,
        ),
        18 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'isIgnoreHiddenAttributes',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 237,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_ignoreHiddenAttributes',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 237,
                  'char' => 45,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 237,
                'char' => 45,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 238,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 236,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 236,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 235,
          'last-line' => 240,
          'char' => 19,
        ),
        19 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setIgnoreHiddenAttributes',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'ignoreHiddenAttributes',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 240,
              'char' => 74,
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
                  'property' => '_ignoreHiddenAttributes',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'ignoreHiddenAttributes',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 242,
                    'char' => 68,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 242,
                  'char' => 68,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 243,
              'char' => 5,
            ),
          ),
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 241,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 240,
          'last-line' => 245,
          'char' => 19,
        ),
        20 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setChanged',
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 245,
              'char' => 42,
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
                  'property' => '_changed',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 247,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 247,
                  'char' => 36,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 248,
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 248,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_changed',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 248,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 248,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 249,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 246,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 246,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 245,
          'last-line' => 251,
          'char' => 19,
        ),
        21 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getChanged',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 253,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_changed',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 253,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 253,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 254,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 252,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 252,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 251,
          'last-line' => 256,
          'char' => 19,
        ),
        22 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setIsNew',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'isNew',
              'const' => 0,
              'data-type' => 'bool',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 256,
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
                  'property' => '_isNew',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'isNew',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 258,
                    'char' => 34,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 258,
                  'char' => 34,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 259,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 256,
          'last-line' => 261,
          'char' => 19,
        ),
        23 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getIsNew',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 263,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_isNew',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 263,
                  'char' => 28,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 263,
                'char' => 28,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 264,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 262,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 262,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 261,
          'last-line' => 266,
          'char' => 19,
        ),
        24 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setInternalId',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'id',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 266,
              'char' => 44,
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
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 268,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_id',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 268,
                      'char' => 24,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 268,
                    'char' => 24,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 268,
                    'char' => 32,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 268,
                  'char' => 32,
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
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 268,
                      'char' => 39,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_id',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 268,
                      'char' => 46,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 268,
                    'char' => 46,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'id',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 268,
                    'char' => 51,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 268,
                  'char' => 51,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 268,
                'char' => 51,
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
                          'value' => 'Should not update the id of an existing document',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 269,
                          'char' => 89,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 269,
                        'char' => 89,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 269,
                    'char' => 90,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 270,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 271,
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
                    'name' => 'preg_match',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => '/^[a-zA-Z0-9_-]{1,64}\\\\/[a-zA-Z0-9_:.@\\\\-()+,=;$!*\'%]{1,254}$/',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 271,
                          'char' => 89,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 271,
                        'char' => 89,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'id',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 271,
                          'char' => 93,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 271,
                        'char' => 93,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 271,
                    'char' => 94,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 271,
                  'char' => 96,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 271,
                'char' => 96,
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
                          'value' => 'Invalid format for document id',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 272,
                          'char' => 71,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 272,
                        'char' => 71,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 272,
                    'char' => 72,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 273,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 274,
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
                  'property' => '_id',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'id',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 274,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 274,
                  'char' => 28,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 275,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 266,
          'last-line' => 277,
          'char' => 19,
        ),
        25 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setInternalKey',
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
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 277,
              'char' => 46,
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
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 279,
                      'char' => 17,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_key',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 279,
                      'char' => 25,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 279,
                    'char' => 25,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 279,
                    'char' => 33,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 279,
                  'char' => 33,
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
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 279,
                      'char' => 40,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_key',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 279,
                      'char' => 48,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 279,
                    'char' => 48,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'key',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 279,
                    'char' => 54,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 279,
                  'char' => 54,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 279,
                'char' => 54,
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
                          'value' => 'Should not update the key of an existing document',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 280,
                          'char' => 90,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 280,
                        'char' => 90,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 280,
                    'char' => 91,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 281,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 282,
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
                    'name' => 'preg_match',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'string',
                          'value' => '/^[a-zA-Z0-9_:.@\\\\-()+,=;$!*\'%]{1,254}$/',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 282,
                          'char' => 67,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 282,
                        'char' => 67,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'key',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 282,
                          'char' => 72,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 282,
                        'char' => 72,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 282,
                    'char' => 73,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 282,
                  'char' => 75,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 282,
                'char' => 75,
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
                          'value' => 'Invalid format for document key',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 283,
                          'char' => 72,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 283,
                        'char' => 72,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 283,
                    'char' => 73,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 284,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 285,
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
                  'property' => '_key',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'key',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 285,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 285,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 286,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 277,
          'last-line' => 288,
          'char' => 19,
        ),
        26 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getInternalId',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 290,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_id',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 290,
                  'char' => 25,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 290,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 291,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 289,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 289,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 288,
          'last-line' => 293,
          'char' => 19,
        ),
        27 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getInternalKey',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 295,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_key',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 295,
                  'char' => 26,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 295,
                'char' => 26,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 296,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 294,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 294,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 293,
          'last-line' => 298,
          'char' => 19,
        ),
        28 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHandle',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 300,
                  'char' => 21,
                ),
                'name' => 'getInternalId',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 300,
                'char' => 37,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 301,
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
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 299,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 299,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 298,
          'last-line' => 303,
          'char' => 19,
        ),
        29 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 305,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_id',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 305,
                  'char' => 25,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 305,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 306,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 303,
          'last-line' => 308,
          'char' => 19,
        ),
        30 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getKey',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 310,
                  'char' => 21,
                ),
                'name' => 'getInternalKey',
                'call-type' => 1,
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 310,
                'char' => 38,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 311,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 308,
          'last-line' => 313,
          'char' => 19,
        ),
        31 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getCollectionId',
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
                  'variable' => 'collectionId',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 315,
                  'char' => 25,
                ),
                1 => 
                array (
                  'variable' => 'tmpListCollectionId',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 315,
                  'char' => 46,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 317,
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
                  'variable' => 'tmpListCollectionId',
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
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 317,
                          'char' => 46,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 317,
                        'char' => 46,
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
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 317,
                            'char' => 53,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_id',
                            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                            'line' => 317,
                            'char' => 57,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 317,
                          'char' => 57,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 317,
                        'char' => 57,
                      ),
                      2 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'int',
                          'value' => '2',
                          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                          'line' => 317,
                          'char' => 60,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                        'line' => 317,
                        'char' => 60,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 317,
                    'char' => 61,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 317,
                  'char' => 61,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 318,
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
                  'variable' => 'collectionId',
                  'expr' => 
                  array (
                    'type' => 'array-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'tmpListCollectionId',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 318,
                      'char' => 47,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '0',
                      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                      'line' => 318,
                      'char' => 49,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 318,
                    'char' => 50,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 318,
                  'char' => 50,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 319,
              'char' => 14,
            ),
            3 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'collectionId',
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 319,
                'char' => 28,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 320,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 313,
          'last-line' => 322,
          'char' => 19,
        ),
        32 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setRevision',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'rev',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 322,
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
                  'property' => '_rev',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'rev',
                    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                    'line' => 324,
                    'char' => 30,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 324,
                  'char' => 30,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 325,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 322,
          'last-line' => 327,
          'char' => 19,
        ),
        33 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getRevision',
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
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 329,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_rev',
                  'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                  'line' => 329,
                  'char' => 26,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/document.zep',
                'line' => 329,
                'char' => 26,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/document.zep',
              'line' => 330,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 327,
          'last-line' => 332,
          'char' => 19,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_ID',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_id',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 14,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 15,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_KEY',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_key',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 15,
            'char' => 29,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 16,
          'char' => 9,
        ),
        2 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_REV',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_rev',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 16,
            'char' => 29,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 17,
          'char' => 9,
        ),
        3 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_ISNEW',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_isNew',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 17,
            'char' => 33,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 18,
          'char' => 9,
        ),
        4 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_HIDDENATTRIBUTES',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_hiddenAttributes',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 18,
            'char' => 55,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 19,
          'char' => 9,
        ),
        5 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_IGNOREHIDDENATTRIBUTES',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_ignoreHiddenAttributes',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 19,
            'char' => 67,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 20,
          'char' => 9,
        ),
        6 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_WAIT_FOR_SYNC',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'waitForSync',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 20,
            'char' => 47,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 21,
          'char' => 9,
        ),
        7 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_POLICY',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'policy',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 21,
            'char' => 35,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 22,
          'char' => 9,
        ),
        8 => 
        array (
          'type' => 'const',
          'name' => 'OPTION_KEEPNULL',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'keepNull',
            'file' => '/data/arangodb-zep/arangodbclient/document.zep',
            'line' => 22,
            'char' => 39,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/document.zep',
          'line' => 23,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/document.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/document.zep',
    'line' => 3,
    'char' => 5,
  ),
);