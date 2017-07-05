[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "ConnectException",
        "abstract": 0,
        "final": 0,
        "extends": "Exception",
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__toString",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "concat",
                                "left": {
                                    "type": "concat",
                                    "left": {
                                        "type": "constant",
                                        "value": "__CLASS__",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                                        "line": 7,
                                        "char": 26
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": ": ",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                                        "line": 7,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                                    "line": 7,
                                    "char": 33
                                },
                                "right": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                                        "line": 7,
                                        "char": 40
                                    },
                                    "name": "getMessage",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                                    "line": 7,
                                    "char": 53
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                                "line": 7,
                                "char": 53
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                            "line": 8,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                                "line": 6,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                        "line": 6,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
                    "line": 5,
                    "last-line": 10,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/connectexception.zep",
        "line": 3,
        "char": 5
    }
]