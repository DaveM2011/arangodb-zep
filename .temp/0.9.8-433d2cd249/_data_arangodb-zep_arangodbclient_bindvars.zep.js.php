<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'BindVars',
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
          'name' => '_values',
          'default' => 
          array (
            'type' => 'empty-array',
            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
            'line' => 5,
            'char' => 27,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
          'line' => 6,
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
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 8,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_values',
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 8,
                  'char' => 29,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                'line' => 8,
                'char' => 29,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
              'line' => 9,
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
                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                'line' => 7,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
            'line' => 7,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
          'line' => 6,
          'last-line' => 11,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getCount',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
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
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                        'line' => 13,
                        'char' => 27,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_values',
                        'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                        'line' => 13,
                        'char' => 35,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 13,
                      'char' => 35,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                    'line' => 13,
                    'char' => 35,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                'line' => 13,
                'char' => 36,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
              'line' => 14,
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
                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                'line' => 12,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
            'line' => 12,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
          'line' => 11,
          'last-line' => 16,
          'char' => 19,
        ),
        2 => 
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
              'name' => 'name',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
              'line' => 16,
              'char' => 29,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'value',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                'line' => 16,
                'char' => 47,
              ),
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
              'line' => 16,
              'char' => 47,
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
                      'value' => 'name',
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 18,
                      'char' => 25,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                    'line' => 18,
                    'char' => 25,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                'line' => 18,
                'char' => 27,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'for',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'name',
                    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                    'line' => 19,
                    'char' => 31,
                  ),
                  'value' => 'value',
                  'reverse' => 0,
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
                              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                              'line' => 20,
                              'char' => 47,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                            'line' => 20,
                            'char' => 47,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                        'line' => 20,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 21,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 22,
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
                      'property' => '_values',
                      'expr' => 
                      array (
                        'type' => 'variable',
                        'value' => 'name',
                        'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                        'line' => 22,
                        'char' => 37,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 22,
                      'char' => 37,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 23,
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
                    'type' => 'or',
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
                            'value' => 'name',
                            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                            'line' => 24,
                            'char' => 27,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                          'line' => 24,
                          'char' => 27,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 24,
                      'char' => 30,
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
                            'value' => 'name',
                            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                            'line' => 24,
                            'char' => 46,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                          'line' => 24,
                          'char' => 46,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 24,
                      'char' => 48,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                    'line' => 24,
                    'char' => 48,
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
                              'type' => 'cast',
                              'left' => 'string',
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'name',
                                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                                'line' => 25,
                                'char' => 48,
                              ),
                              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                              'line' => 25,
                              'char' => 48,
                            ),
                          ),
                          'expr' => 
                          array (
                            'type' => 'variable',
                            'value' => 'value',
                            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                            'line' => 25,
                            'char' => 57,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                          'line' => 25,
                          'char' => 57,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 26,
                      'char' => 30,
                    ),
                    1 => 
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
                              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                              'line' => 26,
                              'char' => 47,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                            'line' => 26,
                            'char' => 47,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                        'line' => 26,
                        'char' => 48,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 27,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
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
                              'value' => 'Bind variable name should be string or int',
                              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                              'line' => 28,
                              'char' => 87,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                            'line' => 28,
                            'char' => 87,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                        'line' => 28,
                        'char' => 88,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 29,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 30,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
              'line' => 31,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
          'line' => 16,
          'last-line' => 33,
          'char' => 19,
        ),
        3 => 
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
              'name' => 'name',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
              'line' => 33,
              'char' => 36,
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
                        'value' => 'name',
                        'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                        'line' => 35,
                        'char' => 34,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 35,
                      'char' => 34,
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
                          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                          'line' => 35,
                          'char' => 41,
                        ),
                        'right' => 
                        array (
                          'type' => 'variable',
                          'value' => '_values',
                          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                          'line' => 35,
                          'char' => 49,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                        'line' => 35,
                        'char' => 49,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                      'line' => 35,
                      'char' => 49,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 35,
                  'char' => 51,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                'line' => 35,
                'char' => 51,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'expr' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                    'line' => 36,
                    'char' => 24,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 37,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
              'line' => 38,
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
                    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                    'line' => 38,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_values',
                    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                    'line' => 38,
                    'char' => 29,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 38,
                  'char' => 29,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'name',
                  'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                  'line' => 38,
                  'char' => 34,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
                'line' => 38,
                'char' => 35,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
              'line' => 39,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
          'line' => 33,
          'last-line' => 41,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/bindvars.zep',
    'line' => 3,
    'char' => 5,
  ),
);