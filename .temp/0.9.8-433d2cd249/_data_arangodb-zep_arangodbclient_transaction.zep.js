[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Transaction",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_connection",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "attributes",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 6,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_action",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 8,
                    "char": 9
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
                            "name": "connection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Connection",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 16,
                                "char": 55
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 16,
                            "char": 56
                        },
                        {
                            "type": "parameter",
                            "name": "transactionArray",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 16,
                                "char": 87
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 16,
                            "char": 87
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
                                    "property": "_connection",
                                    "expr": {
                                        "type": "variable",
                                        "value": "connection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 18,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 18,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 19,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "is_array",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "transactionArray",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 19,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 19,
                                        "char": 37
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 19,
                                "char": 39
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 20,
                                            "char": 18
                                        },
                                        "name": "buildTransactionAttributesFromArray",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "transactionArray",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 20,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 20,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 20,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 21,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 22,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 16,
                    "last-line": 24,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "execute",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 26,
                                    "char": 21
                                },
                                {
                                    "variable": "responseArray",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 26,
                                    "char": 36
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 28,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "response",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 28,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 28,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 28,
                                            "char": 43
                                        },
                                        "name": "post",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Urls",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 28,
                                                        "char": 70
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_TRANSACTION",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 28,
                                                        "char": 70
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 28,
                                                    "char": 70
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 28,
                                                "char": 70
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 28,
                                                            "char": 77
                                                        },
                                                        "name": "getConnection",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 28,
                                                        "char": 94
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                                    "line": 28,
                                                                    "char": 120
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "attributes",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                                    "line": 28,
                                                                    "char": 131
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                                "line": 28,
                                                                "char": 131
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 28,
                                                            "char": 131
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 28,
                                                    "char": 132
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 28,
                                                "char": 132
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 28,
                                        "char": 133
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 28,
                                    "char": 133
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 29,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "responseArray",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 29,
                                            "char": 39
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 29,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 29,
                                    "char": 49
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 30,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "responseArray",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 30,
                                        "char": 31
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "result",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 30,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 30,
                                    "char": 42
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 30,
                                "char": 42
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "responseArray",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 31,
                                            "char": 33
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "result",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 31,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 31,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 32,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 33,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 33,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 34,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 24,
                    "last-line": 36,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getConnection",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 38,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 38,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 38,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 39,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "cast": {
                                    "type": "variable",
                                    "value": "Connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 37,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 37,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 37,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 36,
                    "last-line": 41,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setCollections",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 41,
                            "char": 47
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "array_key_exists",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "string",
                                            "value": "read",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 43,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 43,
                                        "char": 35
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 43,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 43,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 43,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 44,
                                            "char": 18
                                        },
                                        "name": "setReadCollections",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 44,
                                                        "char": 43
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "read",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 44,
                                                        "char": 50
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 44,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 44,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 44,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 45,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 46,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "array_key_exists",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "string",
                                            "value": "write",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 46,
                                            "char": 36
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 46,
                                        "char": 36
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 46,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 46,
                                        "char": 43
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 46,
                                "char": 45
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 47,
                                            "char": 18
                                        },
                                        "name": "setWriteCollections",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 47,
                                                        "char": 44
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "write",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 47,
                                                        "char": 52
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 47,
                                                    "char": 53
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 47,
                                                "char": 53
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 47,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 48,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 49,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 42,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 41,
                    "last-line": 51,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getCollections",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 53,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 53,
                                                "char": 49
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_COLLECTIONS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 53,
                                                "char": 49
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 53,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 53,
                                        "char": 49
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 53,
                                "char": 50
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 54,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 52,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 52,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 51,
                    "last-line": 56,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setAction",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 56,
                            "char": 43
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 58,
                                    "char": 14
                                },
                                "name": "set",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 58,
                                                "char": 37
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_ACTION",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 58,
                                                "char": 37
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 58,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 58,
                                        "char": 37
                                    },
                                    {
                                        "parameter": {
                                            "type": "cast",
                                            "left": "string",
                                            "right": {
                                                "type": "variable",
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 58,
                                                "char": 53
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 58,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 58,
                                        "char": 53
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 58,
                                "char": 54
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 59,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 57,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 56,
                    "last-line": 61,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getAction",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 63,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 63,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_ACTION",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 63,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 63,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 63,
                                        "char": 44
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 63,
                                "char": 45
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 64,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 62,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 62,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 61,
                    "last-line": 66,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setWaitForSync",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 66,
                            "char": 46
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 68,
                                    "char": 14
                                },
                                "name": "set",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 68,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_WAIT_FOR_SYNC",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 68,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 68,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 68,
                                        "char": 44
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 68,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 68,
                                        "char": 51
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 68,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 69,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 67,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 66,
                    "last-line": 71,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getWaitForSync",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 73,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 73,
                                                "char": 51
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_WAIT_FOR_SYNC",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 73,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 73,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 73,
                                        "char": 51
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 73,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 74,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "bool",
                                "mandatory": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 72,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 72,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 71,
                    "last-line": 76,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setLockTimeout",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 76,
                            "char": 45
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 78,
                                    "char": 14
                                },
                                "name": "set",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 78,
                                                "char": 43
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_LOCK_TIMEOUT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 78,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 78,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 78,
                                        "char": 43
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 78,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 78,
                                        "char": 50
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 78,
                                "char": 51
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 79,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 77,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 76,
                    "last-line": 81,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getLockTimeout",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 83,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 83,
                                                "char": 50
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_LOCK_TIMEOUT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 83,
                                                "char": 50
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 83,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 83,
                                        "char": 50
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 83,
                                "char": 51
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 84,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 82,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 82,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 81,
                    "last-line": 86,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setParams",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 86,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 88,
                                    "char": 14
                                },
                                "name": "set",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 88,
                                                "char": 37
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_PARAMS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 88,
                                                "char": 37
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 88,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 88,
                                        "char": 37
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 88,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 88,
                                        "char": 44
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 88,
                                "char": 45
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 89,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 87,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 86,
                    "last-line": 91,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getParams",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 93,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 93,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_PARAMS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 93,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 93,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 93,
                                        "char": 44
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 93,
                                "char": 45
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 94,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 92,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 92,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 91,
                    "last-line": 96,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setWriteCollections",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 96,
                            "char": 52
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-array-index",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "attributes",
                                    "index-expr": [
                                        {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 98,
                                                "char": 53
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_COLLECTIONS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 98,
                                                "char": 53
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 98,
                                            "char": 53
                                        },
                                        {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 98,
                                                "char": 72
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_WRITE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 98,
                                                "char": 72
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 98,
                                            "char": 72
                                        }
                                    ],
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 98,
                                        "char": 81
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 98,
                                    "char": 81
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 99,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 97,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 96,
                    "last-line": 101,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getWriteCollections",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 103,
                                            "char": 21
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "attributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 103,
                                            "char": 32
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 103,
                                        "char": 32
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 103,
                                            "char": 56
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_COLLECTIONS",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 103,
                                            "char": 56
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 103,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 103,
                                    "char": 57
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 103,
                                        "char": 75
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_WRITE",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 103,
                                        "char": 75
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 103,
                                    "char": 75
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 103,
                                "char": 76
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 104,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 102,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 102,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 101,
                    "last-line": 106,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setReadCollections",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 106,
                            "char": 51
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-array-index",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "attributes",
                                    "index-expr": [
                                        {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 108,
                                                "char": 53
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_COLLECTIONS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 108,
                                                "char": 53
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 108,
                                            "char": 53
                                        },
                                        {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 108,
                                                "char": 71
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_READ",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 108,
                                                "char": 71
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 108,
                                            "char": 71
                                        }
                                    ],
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 108,
                                        "char": 80
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 108,
                                    "char": 80
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 109,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 107,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 106,
                    "last-line": 111,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getReadCollections",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 113,
                                            "char": 21
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "attributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 113,
                                            "char": 32
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 113,
                                        "char": 32
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 113,
                                            "char": 56
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_COLLECTIONS",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 113,
                                            "char": 56
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 113,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 113,
                                    "char": 57
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 113,
                                        "char": 74
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_READ",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 113,
                                        "char": 74
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 113,
                                    "char": 74
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 113,
                                "char": 75
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 114,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 112,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 112,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 111,
                    "last-line": 116,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "set",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 116,
                            "char": 28
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 116,
                            "char": 35
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "fcall",
                                    "name": "is_string",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "key",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 118,
                                                "char": 26
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 118,
                                            "char": 26
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 118,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 118,
                                "char": 28
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
                                                    "value": "Invalid document attribute key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 119,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 119,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 119,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 120,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 121,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-array-index",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "attributes",
                                    "index-expr": [
                                        {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 121,
                                            "char": 33
                                        }
                                    ],
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 121,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 121,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 122,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 117,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 116,
                    "last-line": 124,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__set",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 124,
                            "char": 37
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 124,
                            "char": 44
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 126,
                                    "char": 17
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 126,
                                        "char": 43
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_COLLECTIONS",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 126,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 126,
                                    "char": 43
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 126,
                                "char": 43
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 127,
                                            "char": 18
                                        },
                                        "name": "setCollections",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 127,
                                                    "char": 39
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 127,
                                                "char": 39
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 127,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 128,
                                    "char": 9
                                }
                            ],
                            "elseif_statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "equals",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 128,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 128,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_PARAMS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 128,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 128,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 128,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 129,
                                                    "char": 18
                                                },
                                                "name": "setParams",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 129,
                                                            "char": 34
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 129,
                                                        "char": 34
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 129,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 130,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 130,
                                    "char": 16
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "equals",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 130,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 130,
                                                "char": 50
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_LOCK_TIMEOUT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 130,
                                                "char": 50
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 130,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 130,
                                        "char": 50
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 131,
                                                    "char": 18
                                                },
                                                "name": "setLockTimeout",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 131,
                                                            "char": 39
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 131,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 131,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 132,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 132,
                                    "char": 16
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "equals",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 132,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 132,
                                                "char": 51
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_WAIT_FOR_SYNC",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 132,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 132,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 132,
                                        "char": 51
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 133,
                                                    "char": 18
                                                },
                                                "name": "setWaitForSync",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 133,
                                                            "char": 39
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 133,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 133,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 134,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 134,
                                    "char": 16
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "equals",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 134,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 134,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_ACTION",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 134,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 134,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 134,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 135,
                                                    "char": 18
                                                },
                                                "name": "setAction",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 135,
                                                            "char": 34
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 135,
                                                        "char": 34
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 135,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 136,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 136,
                                    "char": 16
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "equals",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 136,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "readCollections",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 136,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 136,
                                        "char": 43
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 137,
                                                    "char": 18
                                                },
                                                "name": "setReadCollections",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 137,
                                                            "char": 43
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 137,
                                                        "char": 43
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 137,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 138,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 138,
                                    "char": 16
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "equals",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 138,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "writeCollections",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 138,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 138,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 139,
                                                    "char": 18
                                                },
                                                "name": "setWriteCollections",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 139,
                                                            "char": 44
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 139,
                                                        "char": 44
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 139,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 140,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 140,
                                    "char": 14
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 141,
                                            "char": 18
                                        },
                                        "name": "set",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 141,
                                                    "char": 26
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 141,
                                                "char": 26
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 141,
                                                    "char": 33
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 141,
                                                "char": 33
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 141,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 142,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 143,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 124,
                    "last-line": 145,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "get",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 145,
                            "char": 35
                        }
                    ],
                    "statements": [
                        {
                            "type": "switch",
                            "expr": {
                                "type": "variable",
                                "value": "key",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 147,
                                "char": 20
                            },
                            "clauses": [
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "string",
                                        "value": "writeCollections",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 148,
                                        "char": 36
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 149,
                                                    "char": 29
                                                },
                                                "name": "getWriteCollections",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 149,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 150,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 150,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "string",
                                        "value": "readCollections",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 150,
                                        "char": 35
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 151,
                                                    "char": 29
                                                },
                                                "name": "getReadCollections",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 151,
                                                "char": 50
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 152,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 152,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 153,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 153,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "attributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 153,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 153,
                                        "char": 34
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 153,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 153,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 153,
                                "char": 40
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 154,
                                                "char": 25
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "attributes",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 154,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 154,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 154,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 154,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 155,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 156,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 156,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 157,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 145,
                    "last-line": 159,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__get",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 159,
                            "char": 37
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 161,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 161,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 161,
                                        "char": 29
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 161,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 162,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 159,
                    "last-line": 164,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__isset",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 164,
                            "char": 39
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 166,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "attributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 166,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 166,
                                        "char": 34
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 166,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 166,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 166,
                                "char": 40
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 167,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 168,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 169,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 169,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 170,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "bool",
                                "mandatory": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 165,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 165,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 164,
                    "last-line": 172,
                    "char": 19
                },
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
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 174,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_action",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 174,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 174,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 175,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 173,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 173,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 172,
                    "last-line": 177,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "buildTransactionAttributesFromArray",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 177,
                            "char": 64
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 179,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 179,
                                            "char": 49
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_COLLECTIONS",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 179,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 179,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 179,
                                    "char": 51
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 179,
                                "char": 51
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 180,
                                            "char": 18
                                        },
                                        "name": "setCollections",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 180,
                                                        "char": 41
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 180,
                                                            "char": 65
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_COLLECTIONS",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 180,
                                                            "char": 65
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 180,
                                                        "char": 65
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 180,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 180,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 180,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 181,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 182,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 182,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 182,
                                            "char": 44
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_ACTION",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 182,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 182,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 182,
                                    "char": 46
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 182,
                                "char": 46
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 183,
                                            "char": 18
                                        },
                                        "name": "setAction",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 183,
                                                        "char": 36
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 183,
                                                            "char": 55
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_ACTION",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 183,
                                                            "char": 55
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 183,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 183,
                                                    "char": 56
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 183,
                                                "char": 56
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 183,
                                        "char": 57
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 184,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 185,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 185,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 185,
                                            "char": 51
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_WAIT_FOR_SYNC",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 185,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 185,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 185,
                                    "char": 53
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 185,
                                "char": 53
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 186,
                                            "char": 18
                                        },
                                        "name": "setWaitForSync",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 186,
                                                        "char": 41
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 186,
                                                            "char": 67
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_WAIT_FOR_SYNC",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 186,
                                                            "char": 67
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 186,
                                                        "char": 67
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 186,
                                                    "char": 68
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 186,
                                                "char": 68
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 186,
                                        "char": 69
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 187,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 188,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 188,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 188,
                                            "char": 50
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_LOCK_TIMEOUT",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 188,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 188,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 188,
                                    "char": 52
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 188,
                                "char": 52
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 189,
                                            "char": 18
                                        },
                                        "name": "setLockTimeout",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 189,
                                                        "char": 41
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 189,
                                                            "char": 66
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_LOCK_TIMEOUT",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 189,
                                                            "char": 66
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 189,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 189,
                                                    "char": 67
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 189,
                                                "char": 67
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 189,
                                        "char": 68
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 190,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 191,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 191,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 191,
                                            "char": 44
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_PARAMS",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 191,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 191,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 191,
                                    "char": 46
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                "line": 191,
                                "char": 46
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                            "line": 192,
                                            "char": 18
                                        },
                                        "name": "setParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 192,
                                                        "char": 36
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 192,
                                                            "char": 55
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_PARAMS",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                            "line": 192,
                                                            "char": 55
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                        "line": 192,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                    "line": 192,
                                                    "char": 56
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                                "line": 192,
                                                "char": 56
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                        "line": 192,
                                        "char": 57
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                                    "line": 193,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                            "line": 194,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 178,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 177,
                    "last-line": 196,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_COLLECTIONS",
                    "default": {
                        "type": "string",
                        "value": "collections",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 8,
                        "char": 44
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_ACTION",
                    "default": {
                        "type": "string",
                        "value": "action",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 9,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 10,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_WAIT_FOR_SYNC",
                    "default": {
                        "type": "string",
                        "value": "waitForSync",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 10,
                        "char": 46
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 11,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_LOCK_TIMEOUT",
                    "default": {
                        "type": "string",
                        "value": "lockTimeout",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 11,
                        "char": 45
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 12,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_PARAMS",
                    "default": {
                        "type": "string",
                        "value": "params",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 12,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 13,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_READ",
                    "default": {
                        "type": "string",
                        "value": "read",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 13,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 14,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_WRITE",
                    "default": {
                        "type": "string",
                        "value": "write",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                        "line": 14,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
                    "line": 16,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/transaction.zep",
        "line": 3,
        "char": 5
    }
]