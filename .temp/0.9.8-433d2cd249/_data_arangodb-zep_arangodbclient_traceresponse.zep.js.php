<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'ArangoDBClient',
    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
    'line' => 3,
    'char' => 5,
  ),
  1 => 
  array (
    'type' => 'class',
    'name' => 'TraceResponse',
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
            'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
            'line' => 5,
            'char' => 28,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
          'name' => '_httpCode',
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
          'name' => '_body',
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
          'name' => '_type',
          'default' => 
          array (
            'type' => 'string',
            'value' => 'response',
            'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
            'line' => 8,
            'char' => 33,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
          'name' => '_timeTaken',
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
          'name' => '_httpCodeDefinitions',
          'default' => 
          array (
            'type' => 'array',
            'left' => 
            array (
              0 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '100',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 43,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Continue',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 55,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 55,
              ),
              1 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '101',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 61,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Switching Protocols',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 84,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 84,
              ),
              2 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '200',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 90,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'OK',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 96,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 96,
              ),
              3 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '201',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 102,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Created',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 113,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 113,
              ),
              4 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '202',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 119,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Accepted',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 131,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 131,
              ),
              5 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '203',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 137,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Non-Authoritative Information',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 170,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 170,
              ),
              6 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '204',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 176,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'No Content',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 190,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 190,
              ),
              7 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '205',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 196,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Reset Content',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 213,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 213,
              ),
              8 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '206',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 219,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Partial Content',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 238,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 238,
              ),
              9 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '300',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 244,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Multiple Choices',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 264,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 264,
              ),
              10 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '301',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 270,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Moved Permanently',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 291,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 291,
              ),
              11 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '302',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 297,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Found',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 306,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 306,
              ),
              12 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '303',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 312,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'See Other',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 325,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 325,
              ),
              13 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '304',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 331,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Not Modified',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 347,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 347,
              ),
              14 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '305',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 353,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Use Proxy',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 366,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 366,
              ),
              15 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '307',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 372,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Temporary Redirect',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 394,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 394,
              ),
              16 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '400',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 400,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Bad Request',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 415,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 415,
              ),
              17 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '401',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 421,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Unauthorized',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 437,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 437,
              ),
              18 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '402',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 443,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Payment Required',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 463,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 463,
              ),
              19 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '403',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 469,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Forbidden',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 482,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 482,
              ),
              20 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '404',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 488,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Not Found',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 501,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 501,
              ),
              21 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '405',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 507,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Method Not Allowed',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 529,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 529,
              ),
              22 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '406',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 535,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Not Acceptable',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 553,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 553,
              ),
              23 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '407',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 559,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Proxy Authentication Required',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 592,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 592,
              ),
              24 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '408',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 598,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Request Timeout',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 617,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 617,
              ),
              25 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '409',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 623,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Conflict',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 635,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 635,
              ),
              26 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '410',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 641,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Gone',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 649,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 649,
              ),
              27 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '411',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 655,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Length Required',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 674,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 674,
              ),
              28 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '412',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 680,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Precondition Failed',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 703,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 703,
              ),
              29 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '413',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 709,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Request Entity Too Large',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 737,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 737,
              ),
              30 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '414',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 743,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Request-URI Too Long',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 767,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 767,
              ),
              31 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '415',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 773,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Unsupported Media Type',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 799,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 799,
              ),
              32 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '416',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 805,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Requested Range Not Satisfiable',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 840,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 840,
              ),
              33 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '417',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 846,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Expectation Failed',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 868,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 868,
              ),
              34 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '418',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 874,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'I\'m a teapot',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 890,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 890,
              ),
              35 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '500',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 896,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Internal Server Error',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 921,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 921,
              ),
              36 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '501',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 927,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Not Implemented',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 946,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 946,
              ),
              37 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '502',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 952,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Bad Gateway',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 967,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 967,
              ),
              38 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '503',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 973,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Service Unavailable',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 996,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 996,
              ),
              39 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '504',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 1002,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'Gateway Timeout',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 1021,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 1021,
              ),
              40 => 
              array (
                'key' => 
                array (
                  'type' => 'int',
                  'value' => '505',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 1027,
                ),
                'value' => 
                array (
                  'type' => 'string',
                  'value' => 'HTTP Version Not Supported',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 10,
                  'char' => 1057,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 10,
                'char' => 1057,
              ),
            ),
            'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
            'line' => 10,
            'char' => 1058,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
          'line' => 11,
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
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 11,
              'char' => 46,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'httpCode',
              'const' => 0,
              'data-type' => 'int',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 11,
              'char' => 60,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'body',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 11,
              'char' => 73,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'timeTaken',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 11,
              'char' => 84,
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
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 13,
                    'char' => 37,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 13,
                  'char' => 37,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 14,
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
                  'property' => '_httpCode',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'httpCode',
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 14,
                    'char' => 39,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 14,
                  'char' => 39,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 15,
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
                  'property' => '_body',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'body',
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 15,
                    'char' => 31,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 15,
                  'char' => 31,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 16,
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
                  'property' => '_timeTaken',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'timeTaken',
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 16,
                    'char' => 41,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 16,
                  'char' => 41,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 17,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
          'line' => 11,
          'last-line' => 19,
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
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 21,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_headers',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 21,
                  'char' => 30,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 21,
                'char' => 30,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 22,
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
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 20,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
            'line' => 20,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
          'line' => 19,
          'last-line' => 24,
          'char' => 19,
        ),
        2 => 
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
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 26,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_httpCode',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 26,
                  'char' => 31,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 26,
                'char' => 31,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
                'data-type' => 'int',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 25,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
            'line' => 25,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
          'line' => 24,
          'last-line' => 29,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getHttpCodeDefinition',
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
                        'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                        'line' => 31,
                        'char' => 24,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => '_httpCodeDefinitions',
                        'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                        'line' => 31,
                        'char' => 45,
                      ),
                      'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                      'line' => 31,
                      'char' => 45,
                    ),
                    'right' => 
                    array (
                      'type' => 'mcall',
                      'variable' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                        'line' => 31,
                        'char' => 51,
                      ),
                      'name' => 'getHttpCode',
                      'call-type' => 1,
                      'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                      'line' => 31,
                      'char' => 65,
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 31,
                    'char' => 67,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 31,
                  'char' => 67,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 31,
                'char' => 67,
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
                          'value' => 'Invalid http code provided.',
                          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                          'line' => 32,
                          'char' => 68,
                        ),
                        'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                        'line' => 32,
                        'char' => 68,
                      ),
                    ),
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 32,
                    'char' => 69,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 33,
                  'char' => 9,
                ),
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 34,
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
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 34,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => '_httpCodeDefinitions',
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 34,
                    'char' => 42,
                  ),
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 34,
                  'char' => 42,
                ),
                'right' => 
                array (
                  'type' => 'mcall',
                  'variable' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                    'line' => 34,
                    'char' => 48,
                  ),
                  'name' => 'getHttpCode',
                  'call-type' => 1,
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 34,
                  'char' => 62,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 34,
                'char' => 63,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
                'data-type' => 'string',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 30,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
            'line' => 30,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
          'line' => 29,
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
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 39,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_body',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 39,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 39,
                'char' => 27,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
                'data-type' => 'string',
                'mandatory' => 0,
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 38,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
            'line' => 38,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
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
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 44,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_type',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 44,
                  'char' => 27,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 44,
                'char' => 27,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 45,
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
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 43,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
            'line' => 43,
            'char' => 5,
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
          'line' => 42,
          'last-line' => 47,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getTimeTaken',
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
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 49,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => '_timeTaken',
                  'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                  'line' => 49,
                  'char' => 32,
                ),
                'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
                'line' => 49,
                'char' => 32,
              ),
              'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
              'line' => 50,
              'char' => 5,
            ),
          ),
          'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
          'line' => 47,
          'last-line' => 52,
          'char' => 19,
        ),
      ),
      'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
      'line' => 3,
      'char' => 5,
    ),
    'file' => '/data/arangodb-zep/arangodbclient/traceresponse.zep',
    'line' => 3,
    'char' => 5,
  ),
);