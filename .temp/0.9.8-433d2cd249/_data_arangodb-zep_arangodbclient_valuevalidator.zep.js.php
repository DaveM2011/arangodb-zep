<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'ValueValidator',
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
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
              'line' => 5,
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
                  'variable' => 'subValue',
                  'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                  'line' => 7,
                  'char' => 21,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
              'line' => 9,
              'char' => 10,
            ),
            1 => 
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
                      'type' => 'or',
                      'left' => 
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
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                              'line' => 9,
                              'char' => 27,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                            'line' => 9,
                            'char' => 27,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                        'line' => 9,
                        'char' => 30,
                      ),
                      'right' => 
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
                              'value' => 'value',
                              'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                              'line' => 9,
                              'char' => 44,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                            'line' => 9,
                            'char' => 44,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                        'line' => 9,
                        'char' => 47,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                      'line' => 9,
                      'char' => 47,
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
                            'value' => 'value',
                            'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                            'line' => 9,
                            'char' => 63,
                          ),
                          'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                          'line' => 9,
                          'char' => 63,
                        ),
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                      'line' => 9,
                      'char' => 66,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                    'line' => 9,
                    'char' => 66,
                  ),
                  'right' => 
                  array (
                    'type' => 'fcall',
                    'name' => 'is_bool',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'value',
                          'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                          'line' => 9,
                          'char' => 81,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                        'line' => 9,
                        'char' => 81,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                    'line' => 9,
                    'char' => 84,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                  'line' => 9,
                  'char' => 84,
                ),
                'right' => 
                array (
                  'type' => 'identical',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                    'line' => 9,
                    'char' => 94,
                  ),
                  'right' => 
                  array (
                    'type' => 'null',
                    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                    'line' => 9,
                    'char' => 101,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                  'line' => 9,
                  'char' => 101,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                'line' => 9,
                'char' => 101,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'return',
                  'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                  'line' => 11,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
              'line' => 12,
              'char' => 10,
            ),
            2 => 
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
                      'value' => 'value',
                      'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                      'line' => 12,
                      'char' => 26,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                    'line' => 12,
                    'char' => 26,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                'line' => 12,
                'char' => 28,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'for',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'value',
                    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                    'line' => 13,
                    'char' => 35,
                  ),
                  'value' => 'subValue',
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
                        'class' => 'self',
                        'dynamic' => 0,
                        'name' => 'validate',
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'variable',
                              'value' => 'subValue',
                              'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                              'line' => 14,
                              'char' => 40,
                            ),
                            'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                            'line' => 14,
                            'char' => 40,
                          ),
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                        'line' => 14,
                        'char' => 41,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                      'line' => 15,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                  'line' => 16,
                  'char' => 18,
                ),
                1 => 
                array (
                  'type' => 'return',
                  'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                  'line' => 17,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
              'line' => 18,
              'char' => 13,
            ),
            3 => 
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
                      'value' => 'Invalid bind parameter value',
                      'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                      'line' => 18,
                      'char' => 65,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                    'line' => 18,
                    'char' => 65,
                  ),
                ),
                'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
                'line' => 18,
                'char' => 66,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
              'line' => 19,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
          'line' => 5,
          'last-line' => 21,
          'char' => 26,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/valuevalidator.zep',
    'line' => 3,
    'char' => 5,
  ),
);