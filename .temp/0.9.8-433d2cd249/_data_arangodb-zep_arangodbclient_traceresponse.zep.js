[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "TraceResponse",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_headers",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                        "line": 5,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_httpCode",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_body",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 8,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_type",
                    "default": {
                        "type": "string",
                        "value": "response",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                        "line": 8,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 9,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_timeTaken",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 10,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_httpCodeDefinitions",
                    "default": {
                        "type": "array",
                        "left": [
                            {
                                "key": {
                                    "type": "int",
                                    "value": "100",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 43
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Continue",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 55
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 55
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "101",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 61
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Switching Protocols",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 84
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 84
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "200",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 90
                                },
                                "value": {
                                    "type": "string",
                                    "value": "OK",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 96
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 96
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "201",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 102
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Created",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 113
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 113
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "202",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 119
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Accepted",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 131
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 131
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "203",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 137
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Non-Authoritative Information",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 170
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 170
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "204",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 176
                                },
                                "value": {
                                    "type": "string",
                                    "value": "No Content",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 190
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 190
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "205",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 196
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Reset Content",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 213
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 213
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "206",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 219
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Partial Content",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 238
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 238
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "300",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 244
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Multiple Choices",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 264
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 264
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "301",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 270
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Moved Permanently",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 291
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 291
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "302",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 297
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Found",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 306
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 306
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "303",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 312
                                },
                                "value": {
                                    "type": "string",
                                    "value": "See Other",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 325
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 325
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "304",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 331
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Not Modified",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 347
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 347
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "305",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 353
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Use Proxy",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 366
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 366
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "307",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 372
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Temporary Redirect",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 394
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 394
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "400",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 400
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Bad Request",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 415
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 415
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "401",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 421
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Unauthorized",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 437
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 437
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "402",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 443
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Payment Required",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 463
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 463
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "403",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 469
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Forbidden",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 482
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 482
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "404",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 488
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Not Found",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 501
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 501
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "405",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 507
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Method Not Allowed",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 529
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 529
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "406",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 535
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Not Acceptable",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 553
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 553
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "407",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 559
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Proxy Authentication Required",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 592
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 592
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "408",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 598
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Request Timeout",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 617
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 617
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "409",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 623
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Conflict",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 635
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 635
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "410",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 641
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Gone",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 649
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 649
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "411",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 655
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Length Required",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 674
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 674
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "412",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 680
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Precondition Failed",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 703
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 703
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "413",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 709
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Request Entity Too Large",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 737
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 737
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "414",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 743
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Request-URI Too Long",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 767
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 767
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "415",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 773
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Unsupported Media Type",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 799
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 799
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "416",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 805
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Requested Range Not Satisfiable",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 840
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 840
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "417",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 846
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Expectation Failed",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 868
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 868
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "418",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 874
                                },
                                "value": {
                                    "type": "string",
                                    "value": "I'm a teapot",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 890
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 890
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "500",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 896
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Internal Server Error",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 921
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 921
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "501",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 927
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Not Implemented",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 946
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 946
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "502",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 952
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Bad Gateway",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 967
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 967
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "503",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 973
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Service Unavailable",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 996
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 996
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "504",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 1002
                                },
                                "value": {
                                    "type": "string",
                                    "value": "Gateway Timeout",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 1021
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 1021
                            },
                            {
                                "key": {
                                    "type": "int",
                                    "value": "505",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 1027
                                },
                                "value": {
                                    "type": "string",
                                    "value": "HTTP Version Not Supported",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 10,
                                    "char": 1057
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 10,
                                "char": 1057
                            }
                        ],
                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                        "line": 10,
                        "char": 1058
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 11,
                    "char": 10
                }
            ],
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__construct",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "headers",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 11,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "httpCode",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 11,
                            "char": 60
                        },
                        {
                            "type": "parameter",
                            "name": "body",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 11,
                            "char": 73
                        },
                        {
                            "type": "parameter",
                            "name": "timeTaken",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 11,
                            "char": 84
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_headers",
                                    "expr": {
                                        "type": "variable",
                                        "value": "headers",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 13,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 13,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 14,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_httpCode",
                                    "expr": {
                                        "type": "variable",
                                        "value": "httpCode",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 14,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 14,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 15,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_body",
                                    "expr": {
                                        "type": "variable",
                                        "value": "body",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 15,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 15,
                                    "char": 31
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 16,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_timeTaken",
                                    "expr": {
                                        "type": "variable",
                                        "value": "timeTaken",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 16,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 16,
                                    "char": 41
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 17,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 11,
                    "last-line": 19,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHeaders",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 21,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 21,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 21,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 22,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "array",
                                "mandatory": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 20,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                        "line": 20,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 19,
                    "last-line": 24,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHttpCode",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 26,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_httpCode",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 26,
                                    "char": 31
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 26,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 27,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "int",
                                "mandatory": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 25,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                        "line": 25,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 24,
                    "last-line": 29,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHttpCodeDefinition",
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "isset",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                                "line": 31,
                                                "char": 24
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_httpCodeDefinitions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                                "line": 31,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                            "line": 31,
                                            "char": 45
                                        },
                                        "right": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                                "line": 31,
                                                "char": 51
                                            },
                                            "name": "getHttpCode",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                            "line": 31,
                                            "char": 65
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 31,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 31,
                                    "char": 67
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 31,
                                "char": 67
                            },
                            "statements": [
                                {
                                    "type": "throw",
                                    "expr": {
                                        "type": "new",
                                        "class": "ClientException",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "Invalid http code provided.",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                                    "line": 32,
                                                    "char": 68
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                                "line": 32,
                                                "char": 68
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 32,
                                        "char": 69
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 33,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 34,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 34,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_httpCodeDefinitions",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 34,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 34,
                                    "char": 42
                                },
                                "right": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                        "line": 34,
                                        "char": 48
                                    },
                                    "name": "getHttpCode",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 34,
                                    "char": 62
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 34,
                                "char": 63
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 35,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "string",
                                "mandatory": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 30,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                        "line": 30,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 29,
                    "last-line": 37,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getBody",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 39,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_body",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 39,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 39,
                                "char": 27
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 40,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "string",
                                "mandatory": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 38,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                        "line": 38,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 37,
                    "last-line": 42,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getType",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 44,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_type",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 44,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 44,
                                "char": 27
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 45,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "string",
                                "mandatory": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 43,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                        "line": 43,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 42,
                    "last-line": 47,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getTimeTaken",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 49,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_timeTaken",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                    "line": 49,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                                "line": 49,
                                "char": 32
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                            "line": 50,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
                    "line": 47,
                    "last-line": 52,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/traceresponse.zep",
        "line": 3,
        "char": 5
    }
]