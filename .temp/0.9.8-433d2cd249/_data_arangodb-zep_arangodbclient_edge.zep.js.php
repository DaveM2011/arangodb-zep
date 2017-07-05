<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'Edge',
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
          'name' => '_from',
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
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
          'name' => '_to',
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
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
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 9,
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
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 9,
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
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 11,
                  'char' => 17,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_doValidate',
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 11,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 11,
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
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 12,
                          'char' => 43,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 12,
                        'char' => 43,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 12,
                    'char' => 44,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 13,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 14,
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
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 14,
                    'char' => 15,
                  ),
                  'right' => 
                  array (
                    'type' => 'int',
                    'value' => '0',
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 14,
                    'char' => 17,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 14,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'char',
                  'value' => '_',
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 14,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 14,
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
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 15,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 15,
                        'char' => 39,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_ID',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 15,
                        'char' => 39,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 15,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 15,
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
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 16,
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
                              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                              'line' => 16,
                              'char' => 42,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 16,
                            'char' => 42,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 16,
                        'char' => 43,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 17,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 18,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 19,
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
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 19,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 19,
                        'char' => 40,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_KEY',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 19,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 19,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 19,
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
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 20,
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
                              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                              'line' => 20,
                              'char' => 43,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 20,
                            'char' => 43,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 20,
                        'char' => 44,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 21,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 22,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 23,
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
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 23,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 23,
                        'char' => 40,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_REV',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 23,
                        'char' => 40,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 23,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 23,
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
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 24,
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
                              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                              'line' => 24,
                              'char' => 40,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 24,
                            'char' => 40,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 24,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 25,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 26,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 27,
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
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
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
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 27,
                        'char' => 41,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_FROM',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 27,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 27,
                      'char' => 41,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 27,
                    'char' => 41,
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
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 28,
                          'char' => 22,
                        ),
                        'name' => 'setFrom',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                              'line' => 28,
                              'char' => 36,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 28,
                            'char' => 36,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 28,
                        'char' => 37,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 29,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 30,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 31,
                  'char' => 14,
                ),
                4 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'key',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 31,
                      'char' => 22,
                    ),
                    'right' => 
                    array (
                      'type' => 'static-constant-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'self',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 31,
                        'char' => 39,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'ENTRY_TO',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 31,
                        'char' => 39,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 31,
                      'char' => 39,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 31,
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
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 32,
                          'char' => 22,
                        ),
                        'name' => 'setTo',
                        'call-type' => 1,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                              'line' => 32,
                              'char' => 34,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 32,
                            'char' => 34,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 32,
                        'char' => 35,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 33,
                      'char' => 22,
                    ),
                    1 => 
                    array (
                      'type' => 'return',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 34,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 35,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 36,
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
                  'type' => 'list',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 36,
                      'char' => 19,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_changed',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 36,
                      'char' => 28,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 36,
                    'char' => 28,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 36,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 36,
                'char' => 30,
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
                        'type' => 'list',
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
                                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                                'line' => 37,
                                'char' => 29,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => '_values',
                                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                                'line' => 37,
                                'char' => 37,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                              'line' => 37,
                              'char' => 37,
                            ),
                            'right' => 
                            array (
                              'type' => 'variable',
                              'value' => 'key',
                              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                              'line' => 37,
                              'char' => 41,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 37,
                            'char' => 42,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 37,
                          'char' => 42,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 37,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 37,
                      'char' => 45,
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
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 37,
                            'char' => 52,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => '_values',
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 37,
                            'char' => 60,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 37,
                          'char' => 60,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => 'key',
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 37,
                          'char' => 64,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 37,
                        'char' => 68,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'value',
                        'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                        'line' => 37,
                        'char' => 76,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 37,
                      'char' => 76,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 37,
                    'char' => 76,
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
                            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                            'line' => 38,
                            'char' => 43,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                          'line' => 38,
                          'char' => 43,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 39,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 40,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 41,
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
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 41,
                      'char' => 30,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 41,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 41,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 42,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
          'line' => 9,
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
          'name' => 'setFrom',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'from',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 44,
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
                  'property' => '_from',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'from',
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 46,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 46,
                  'char' => 31,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 47,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 47,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 48,
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
                  'value' => 'Edge',
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 45,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 45,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
            'line' => 45,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
          'line' => 44,
          'last-line' => 50,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getFrom',
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
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 52,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_from',
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 52,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 52,
                'char' => 27,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 53,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
          'line' => 50,
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
          'name' => 'setTo',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'to',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 55,
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
                  'property' => '_to',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'to',
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 57,
                    'char' => 27,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 57,
                  'char' => 27,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 58,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'this',
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 58,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
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
                  'value' => 'Edge',
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 56,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 56,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
            'line' => 56,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
          'line' => 55,
          'last-line' => 61,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getTo',
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
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 63,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_to',
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 63,
                  'char' => 25,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 63,
                'char' => 25,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 64,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
          'line' => 61,
          'last-line' => 66,
          'char' => 19,
        ),
        5 => 
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
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 68,
                  'char' => 17,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 70,
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
                    'type' => 'scall',
                    'dynamic-class' => 0,
                    'class' => 'parent',
                    'dynamic' => 0,
                    'name' => 'getAllForInsertUpdate',
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 70,
                    'char' => 52,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 70,
                  'char' => 52,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 71,
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
                  'variable' => 'data',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => '_from',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 71,
                      'char' => 25,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 71,
                      'char' => 34,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_from',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 71,
                      'char' => 40,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 71,
                    'char' => 40,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 71,
                  'char' => 40,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 72,
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
                  'variable' => 'data',
                  'index-expr' => 
                  array (
                    0 => 
                    array (
                      'type' => 'string',
                      'value' => '_to',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 72,
                      'char' => 23,
                    ),
                  ),
                  'expr' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 72,
                      'char' => 32,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => '_to',
                      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                      'line' => 72,
                      'char' => 36,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                    'line' => 72,
                    'char' => 36,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                  'line' => 72,
                  'char' => 36,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 73,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'data',
                'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
                'line' => 73,
                'char' => 20,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
              'line' => 74,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
          'line' => 66,
          'last-line' => 76,
          'char' => 19,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_FROM',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_from',
            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
            'line' => 7,
            'char' => 31,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
          'line' => 8,
          'char' => 9,
        ),
        1 => 
        array (
          'type' => 'const',
          'name' => 'ENTRY_TO',
          'default' => 
          array (
            'type' => 'string',
            'value' => '_to',
            'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
            'line' => 8,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
          'line' => 9,
          'char' => 10,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/edge.zep',
    'line' => 3,
    'char' => 5,
  ),
);