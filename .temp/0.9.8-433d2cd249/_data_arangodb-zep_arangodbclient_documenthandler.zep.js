[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "DocumentHandler",
        "abstract": 0,
        "final": 0,
        "extends": "Handler",
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "get",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 8,
                            "char": 42
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 8,
                            "char": 54
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 8,
                                "char": 74
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 8,
                            "char": 74
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 10,
                                    "char": 21
                                },
                                "name": "getById",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 10,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 10,
                                        "char": 40
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 10,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 10,
                                        "char": 52
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 10,
                                            "char": 61
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 10,
                                        "char": 61
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 10,
                                "char": 62
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 11,
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
                                    "value": "Document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 9,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 9,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 9,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 8,
                    "last-line": 13,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "has",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 13,
                            "char": 42
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 13,
                            "char": 54
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "e",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 15,
                                    "char": 14
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 17,
                            "char": 11
                        },
                        {
                            "type": "try-catch",
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 18,
                                            "char": 18
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 18,
                                                    "char": 33
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 18,
                                                "char": 33
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "documentId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 18,
                                                    "char": 45
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 18,
                                                "char": 45
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 18,
                                        "char": 46
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 19,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 19,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 20,
                                    "char": 9
                                }
                            ],
                            "catches": [
                                {
                                    "classes": [
                                        {
                                            "type": "variable",
                                            "value": "ServerException",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 20,
                                            "char": 32
                                        }
                                    ],
                                    "variable": {
                                        "type": "variable",
                                        "value": "e",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 26,
                                        "char": 14
                                    },
                                    "statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "identical",
                                                "left": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "e",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 21,
                                                        "char": 18
                                                    },
                                                    "name": "getCode",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 21,
                                                    "char": 31
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "404",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 21,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 21,
                                                "char": 37
                                            },
                                            "statements": [
                                                {
                                                    "type": "return",
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 22,
                                                        "char": 29
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 23,
                                                    "char": 13
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 24,
                                            "char": 17
                                        },
                                        {
                                            "type": "throw",
                                            "expr": {
                                                "type": "variable",
                                                "value": "e",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 24,
                                                "char": 20
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 25,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 26,
                                    "char": 14
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 26,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 26,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 27,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 14,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 14,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 13,
                    "last-line": 29,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getById",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 29,
                            "char": 43
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 29,
                            "char": 59
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 29,
                                "char": 79
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 29,
                            "char": 79
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "tmpListCollectionDocumentId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 31,
                                    "char": 40
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 31,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 33,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "fcall",
                                    "name": "strpos",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "documentId",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 33,
                                                "char": 29
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 33,
                                            "char": 29
                                        },
                                        {
                                            "parameter": {
                                                "type": "string",
                                                "value": "\/",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 33,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 33,
                                            "char": 34
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 33,
                                    "char": 38
                                },
                                "right": {
                                    "type": "bool",
                                    "value": "false",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 33,
                                    "char": 46
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 33,
                                "char": 46
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "tmpListCollectionDocumentId",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "explode",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "\/",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 34,
                                                            "char": 58
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 34,
                                                        "char": 58
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "documentId",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 34,
                                                            "char": 70
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 34,
                                                        "char": 70
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 34,
                                                "char": 71
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 34,
                                            "char": 71
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 35,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "collection",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "tmpListCollectionDocumentId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 35,
                                                    "char": 57
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 35,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 35,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 35,
                                            "char": 60
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 36,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "documentId",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "tmpListCollectionDocumentId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 36,
                                                    "char": 57
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "1",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 36,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 36,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 36,
                                            "char": 60
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 37,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 38,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "data",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 38,
                                            "char": 26
                                        },
                                        "name": "getDocument",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Urls",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 38,
                                                        "char": 57
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_DOCUMENT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 38,
                                                        "char": 57
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 38,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 38,
                                                "char": 57
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 38,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 38,
                                                "char": 69
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "documentId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 38,
                                                    "char": 81
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 38,
                                                "char": 81
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 38,
                                                    "char": 90
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 38,
                                                "char": 90
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 38,
                                        "char": 91
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 38,
                                    "char": 91
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 39,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "array-index",
                                    "operator": "assign",
                                    "variable": "options",
                                    "index-expr": [
                                        {
                                            "type": "string",
                                            "value": "_isNew",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 39,
                                            "char": 29
                                        }
                                    ],
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 39,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 39,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 40,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 40,
                                    "char": 21
                                },
                                "name": "createFromArrayWithContext",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 40,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 40,
                                        "char": 53
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 40,
                                            "char": 62
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 40,
                                        "char": 62
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 40,
                                "char": 63
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 41,
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
                                    "value": "Document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 30,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 30,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 30,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 29,
                    "last-line": 43,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getDocument",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "url",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 43,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 43,
                            "char": 65
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 43,
                            "char": 77
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 43,
                                "char": 97
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 43,
                            "char": 97
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "headerElements",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 45,
                                    "char": 27
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 45,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 47,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collection",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 47,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 47,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 47,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 47,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 47,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 48,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "buildUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 48,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 48,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "collection",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 48,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 48,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 48,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 48,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 48,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 48,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 48,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 48,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 49,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "headerElements",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 49,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 49,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 50,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "fcall",
                                    "name": "array_key_exists",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "string",
                                                "value": "ifMatch",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 50,
                                                "char": 38
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 50,
                                            "char": 38
                                        },
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 50,
                                                "char": 47
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 50,
                                            "char": 47
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 50,
                                    "char": 50
                                },
                                "right": {
                                    "type": "fcall",
                                    "name": "array_key_exists",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "string",
                                                "value": "revision",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 50,
                                                "char": 79
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 50,
                                            "char": 79
                                        },
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 50,
                                                "char": 88
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 50,
                                            "char": 88
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 50,
                                    "char": 90
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 50,
                                "char": 90
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 51,
                                                "char": 23
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "ifMatch",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 51,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 51,
                                            "char": 37
                                        },
                                        "right": {
                                            "type": "bool",
                                            "value": "true",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 51,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 51,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "headerElements",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "If-Match",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 52,
                                                            "char": 46
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 52,
                                                                "char": 56
                                                            },
                                                            "right": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "options",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 52,
                                                                    "char": 65
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "revision",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 52,
                                                                    "char": 76
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 52,
                                                                "char": 78
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 52,
                                                            "char": 78
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 52,
                                                            "char": 84
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 52,
                                                        "char": 84
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 52,
                                                    "char": 84
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 53,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "headerElements",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "If-None-Match",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 54,
                                                            "char": 51
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 54,
                                                                "char": 61
                                                            },
                                                            "right": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "options",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 54,
                                                                    "char": 70
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "revision",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 54,
                                                                    "char": 81
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 54,
                                                                "char": 83
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 54,
                                                            "char": 83
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 54,
                                                            "char": 89
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 54,
                                                        "char": 89
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 54,
                                                    "char": 89
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 55,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 56,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 57,
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
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 57,
                                                "char": 29
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 57,
                                            "char": 46
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 57,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 57,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "headerElements",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 57,
                                                    "char": 70
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 57,
                                                "char": 70
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 57,
                                        "char": 71
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 57,
                                    "char": 71
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 58,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "response",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 58,
                                        "char": 21
                                    },
                                    "name": "getHttpCode",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 58,
                                    "char": 38
                                },
                                "right": {
                                    "type": "int",
                                    "value": "304",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 58,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 58,
                                "char": 44
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
                                                    "value": "Document has not changed.",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 59,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 59,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 59,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 60,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 61,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 61,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 61,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 62,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 44,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 44,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 43,
                    "last-line": 64,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHead",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 64,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 64,
                            "char": 58
                        },
                        {
                            "type": "parameter",
                            "name": "revision",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 64,
                                "char": 82
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 64,
                            "char": 82
                        },
                        {
                            "type": "parameter",
                            "name": "ifMatch",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 64,
                                "char": 103
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 64,
                            "char": 103
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 66,
                                    "char": 21
                                },
                                "name": "head",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "Urls",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 66,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_DOCUMENT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 66,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 66,
                                            "char": 45
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 66,
                                        "char": 45
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 66,
                                            "char": 57
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 66,
                                        "char": 57
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 66,
                                            "char": 69
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 66,
                                        "char": 69
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 66,
                                            "char": 79
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 66,
                                        "char": 79
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "ifMatch",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 66,
                                            "char": 88
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 66,
                                        "char": 88
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 66,
                                "char": 89
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 67,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 65,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 65,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 64,
                    "last-line": 69,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "head",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "url",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 69,
                            "char": 39
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 69,
                            "char": 58
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 69,
                            "char": 70
                        },
                        {
                            "type": "parameter",
                            "name": "revision",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 69,
                                "char": 87
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 69,
                            "char": 87
                        },
                        {
                            "type": "parameter",
                            "name": "ifMatch",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 69,
                                "char": 108
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 69,
                            "char": 108
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "headerElements",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 71,
                                    "char": 27
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 71,
                                    "char": 37
                                },
                                {
                                    "variable": "headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 71,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 73,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collection",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 73,
                                            "char": 31
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 73,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 73,
                                                "char": 57
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 73,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 73,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 74,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "buildUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 74,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 74,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "collection",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 74,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 74,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 74,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 74,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 74,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 74,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 74,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 74,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 75,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "headerElements",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 75,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 75,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 76,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "revision",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 76,
                                        "char": 23
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 76,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 76,
                                    "char": 31
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "ifMatch",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 76,
                                        "char": 43
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 76,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 76,
                                    "char": 50
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 76,
                                "char": 50
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "variable",
                                        "value": "ifMatch",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 77,
                                        "char": 24
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "headerElements",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "If-Match",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 78,
                                                            "char": 46
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 78,
                                                                "char": 56
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "revision",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 78,
                                                                "char": 67
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 78,
                                                            "char": 67
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 78,
                                                            "char": 73
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 78,
                                                        "char": 73
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 78,
                                                    "char": 73
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 79,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "headerElements",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "If-None-Match",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 80,
                                                            "char": 51
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 80,
                                                                "char": 61
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "revision",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 80,
                                                                "char": 72
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 80,
                                                            "char": 72
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 80,
                                                            "char": 78
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 80,
                                                        "char": 78
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 80,
                                                    "char": 78
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 81,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 82,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 83,
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
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 83,
                                                "char": 29
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 83,
                                            "char": 46
                                        },
                                        "name": "head",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 83,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 83,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "headerElements",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 83,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 83,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 83,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 83,
                                    "char": 72
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 84,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "headers",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 84,
                                            "char": 32
                                        },
                                        "name": "getHeaders",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 84,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 84,
                                    "char": 45
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 85,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "array-index",
                                    "operator": "assign",
                                    "variable": "headers",
                                    "index-expr": [
                                        {
                                            "type": "string",
                                            "value": "httpCode",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 85,
                                            "char": 31
                                        }
                                    ],
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 85,
                                            "char": 45
                                        },
                                        "name": "getHttpCode",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 85,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 85,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 86,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "headers",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 86,
                                "char": 23
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 87,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 70,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 70,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 69,
                    "last-line": 89,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "createFromArrayWithContext",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "data",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 89,
                            "char": 55
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 89,
                            "char": 64
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "_documentClass",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 91,
                                    "char": 27
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 93,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "_documentClass",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 93,
                                            "char": 35
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 93,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 93,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 93,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 94,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "scall",
                                "dynamic-class": 1,
                                "class": "_documentClass",
                                "dynamic": 0,
                                "name": "createFromArray",
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 94,
                                            "char": 54
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 94,
                                        "char": 54
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 94,
                                            "char": 63
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 94,
                                        "char": 63
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 94,
                                "char": 64
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 95,
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
                                    "value": "Document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 90,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 90,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 90,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 89,
                    "last-line": 97,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "store",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 97,
                                "char": 45
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 97,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 97,
                                "char": 65
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 97,
                            "char": 65
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 97,
                                "char": 85
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 97,
                            "char": 85
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 99,
                                    "char": 19
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 101,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 101,
                                    "char": 21
                                },
                                "name": "getIsNew",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 101,
                                "char": 33
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 102,
                                            "char": 29
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 102,
                                            "char": 36
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 102,
                                        "char": 36
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
                                                            "value": "A collection id is required to store a new document.",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 103,
                                                            "char": 97
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 103,
                                                        "char": 97
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 103,
                                                "char": 98
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 104,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 105,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "result",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 105,
                                                    "char": 31
                                                },
                                                "name": "save",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "collection",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 105,
                                                            "char": 47
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 105,
                                                        "char": 47
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "document",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 105,
                                                            "char": 57
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 105,
                                                        "char": 57
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "options",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 105,
                                                            "char": 66
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 105,
                                                        "char": 66
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 105,
                                                "char": 67
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 105,
                                            "char": 67
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 106,
                                    "char": 20
                                },
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 106,
                                            "char": 22
                                        },
                                        "name": "setIsNew",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 106,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 106,
                                                "char": 37
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 106,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 107,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "result",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 107,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 108,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "variable",
                                        "value": "collection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 109,
                                        "char": 27
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
                                                            "value": "An existing document cannot be stored into a new collection",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 110,
                                                            "char": 104
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 110,
                                                        "char": 104
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 110,
                                                "char": 105
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 111,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 112,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 112,
                                            "char": 25
                                        },
                                        "name": "replace",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 112,
                                                    "char": 42
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 112,
                                                "char": 42
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 112,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 112,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 112,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 113,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 114,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 97,
                    "last-line": 116,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "save",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 116,
                            "char": 36
                        },
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 116,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 116,
                                "char": 66
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 116,
                            "char": 66
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "_documentClass",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 27
                                },
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 35
                                },
                                {
                                    "variable": "tmpArrayd22098ace3d2df0c6462f27eeba25312",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 77
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 82
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 88
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 98
                                },
                                {
                                    "variable": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 104
                                },
                                {
                                    "variable": "batchPart",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 115
                                },
                                {
                                    "variable": "location",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 125
                                },
                                {
                                    "variable": "id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 118,
                                    "char": 129
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 120,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collection",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 120,
                                            "char": 31
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 120,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 120,
                                                "char": 57
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 120,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 120,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 121,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "_documentClass",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 121,
                                            "char": 35
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 121,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 121,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 121,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 122,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArrayd22098ace3d2df0c6462f27eeba25312",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "waitForSync",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 122,
                                                    "char": 71
                                                },
                                                "value": {
                                                    "type": "null",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 122,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 122,
                                                "char": 77
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "silent",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 122,
                                                    "char": 88
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 122,
                                                    "char": 95
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 122,
                                                "char": 95
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "createCollection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 122,
                                                    "char": 116
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 122,
                                                            "char": 123
                                                        },
                                                        "name": "getConnection",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 122,
                                                        "char": 140
                                                    },
                                                    "name": "getOption",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 122,
                                                                    "char": 183
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_CREATE",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 122,
                                                                    "char": 183
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 122,
                                                                "char": 183
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 122,
                                                            "char": 183
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 122,
                                                    "char": 184
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 122,
                                                "char": 184
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 122,
                                        "char": 185
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 122,
                                    "char": 185
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 123,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "params",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 123,
                                            "char": 27
                                        },
                                        "name": "includeOptionsInParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 123,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 123,
                                                "char": 58
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArrayd22098ace3d2df0c6462f27eeba25312",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 123,
                                                    "char": 100
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 123,
                                                "char": 100
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 123,
                                        "char": 101
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 123,
                                    "char": 101
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 124,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 124,
                                    "char": 14
                                },
                                "name": "createCollectionIfOptions",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 124,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 124,
                                        "char": 51
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 124,
                                            "char": 59
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 124,
                                        "char": 59
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 124,
                                "char": 60
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 125,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "appendParamsUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "Urls",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 125,
                                                                "char": 66
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "URL_DOCUMENT",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 125,
                                                                "char": 66
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 125,
                                                            "char": 66
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\/",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 125,
                                                            "char": 72
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 125,
                                                        "char": 72
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "collection",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 125,
                                                        "char": 84
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 125,
                                                    "char": 84
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 125,
                                                "char": 84
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 125,
                                                    "char": 92
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 125,
                                                "char": 92
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 125,
                                        "char": 93
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 125,
                                    "char": 93
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 126,
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
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 126,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 126,
                                        "char": 29
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 126,
                                "char": 31
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "data",
                                            "expr": {
                                                "type": "variable",
                                                "value": "document",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 127,
                                                "char": 32
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 127,
                                            "char": 32
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 128,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "data",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 129,
                                                    "char": 34
                                                },
                                                "name": "getAllForInsertUpdate",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 129,
                                                "char": 58
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 129,
                                            "char": 58
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 130,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 131,
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
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 131,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 131,
                                            "char": 47
                                        },
                                        "name": "post",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 131,
                                                    "char": 56
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 131,
                                                "char": 56
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 131,
                                                        "char": 63
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 131,
                                                                "char": 88
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 131,
                                                            "char": 88
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 131,
                                                    "char": 89
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 131,
                                                "char": 89
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 131,
                                        "char": 90
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 131,
                                    "char": 90
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 132,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "json",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 132,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 132,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 132,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 133,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "batchPart",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 133,
                                            "char": 35
                                        },
                                        "name": "getBatchPart",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 133,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 133,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 134,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "batchPart",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 134,
                                "char": 22
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "batchPart",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 135,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 136,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 137,
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
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 137,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 137,
                                        "char": 29
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 137,
                                "char": 31
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "json",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 138,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "fcall",
                                            "name": "constant",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "_documentClass",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 138,
                                                            "char": 49
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "::ENTRY_KEY",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 138,
                                                            "char": 64
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 138,
                                                        "char": 64
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 138,
                                                    "char": 64
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 138,
                                            "char": 65
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 138,
                                        "char": 66
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 139,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 140,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "location",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 140,
                                            "char": 34
                                        },
                                        "name": "getLocationHeader",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 140,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 140,
                                    "char": 54
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 141,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "variable",
                                    "value": "location",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 141,
                                    "char": 22
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 141,
                                "char": 22
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
                                                    "value": "Did not find location header in server response",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 142,
                                                    "char": 88
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 142,
                                                "char": 88
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 142,
                                        "char": 89
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 143,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 144,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "id",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "getDocumentIdFromLocation",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "location",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 144,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 144,
                                                "char": 64
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 144,
                                        "char": 65
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 144,
                                    "char": 65
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 145,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 145,
                                    "char": 18
                                },
                                "name": "setInternalId",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "json",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 145,
                                                "char": 37
                                            },
                                            "right": {
                                                "type": "fcall",
                                                "name": "constant",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "_documentClass",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 145,
                                                                "char": 62
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "::ENTRY_ID",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 145,
                                                                "char": 76
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 145,
                                                            "char": 76
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 145,
                                                        "char": 76
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 145,
                                                "char": 77
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 145,
                                            "char": 78
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 145,
                                        "char": 78
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 145,
                                "char": 79
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 146,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 146,
                                    "char": 18
                                },
                                "name": "setRevision",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "json",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 146,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "fcall",
                                                "name": "constant",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "_documentClass",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 146,
                                                                "char": 60
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "::ENTRY_REV",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 146,
                                                                "char": 75
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 146,
                                                            "char": 75
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 146,
                                                        "char": 75
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 146,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 146,
                                            "char": 77
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 146,
                                        "char": 77
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 146,
                                "char": 78
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 147,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "variable",
                                    "value": "id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 147,
                                    "char": 17
                                },
                                "right": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 147,
                                        "char": 28
                                    },
                                    "name": "getId",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 147,
                                    "char": 37
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 147,
                                "char": 37
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
                                                    "value": "Got an invalid response from the server",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 148,
                                                    "char": 80
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 148,
                                                "char": 80
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 148,
                                        "char": 81
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 149,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 150,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 150,
                                    "char": 18
                                },
                                "name": "setIsNew",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "bool",
                                            "value": "false",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 150,
                                            "char": 33
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 150,
                                        "char": 33
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 150,
                                "char": 34
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 151,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 151,
                                    "char": 25
                                },
                                "name": "getId",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 151,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 152,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 116,
                    "last-line": 154,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "update",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 154,
                                "char": 46
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 154,
                            "char": 47
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 154,
                                "char": 67
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 154,
                            "char": 67
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "documentId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 156,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 158,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "documentId",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 158,
                                            "char": 32
                                        },
                                        "name": "getDocumentId",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 158,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 158,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 158,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 158,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 159,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 159,
                                    "char": 21
                                },
                                "name": "updateById",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 159,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 159,
                                        "char": 41
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 159,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 159,
                                        "char": 53
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 159,
                                            "char": 63
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 159,
                                        "char": 63
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 159,
                                            "char": 72
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 159,
                                        "char": 72
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 159,
                                "char": 73
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 160,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 155,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 155,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 154,
                    "last-line": 162,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "updateById",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 162,
                            "char": 49
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 162,
                            "char": 61
                        },
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 162,
                                "char": 81
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 162,
                            "char": 82
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 162,
                                "char": 102
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 162,
                            "char": 102
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 164,
                                    "char": 21
                                },
                                "name": "patch",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "Urls",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 164,
                                                "char": 46
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_DOCUMENT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 164,
                                                "char": 46
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 164,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 164,
                                        "char": 46
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 164,
                                            "char": 58
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 164,
                                        "char": 58
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 164,
                                            "char": 70
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 164,
                                        "char": 70
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 164,
                                            "char": 80
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 164,
                                        "char": 80
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 164,
                                            "char": 89
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 164,
                                        "char": 89
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 164,
                                "char": 90
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 165,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 163,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 163,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 162,
                    "last-line": 167,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "patch",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "url",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 167,
                            "char": 40
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 167,
                            "char": 59
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 167,
                            "char": 71
                        },
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 167,
                                "char": 91
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 167,
                            "char": 92
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 167,
                                "char": 112
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 167,
                            "char": 112
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "_documentClass",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 169,
                                    "char": 27
                                },
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 169,
                                    "char": 35
                                },
                                {
                                    "variable": "tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 169,
                                    "char": 77
                                },
                                {
                                    "variable": "headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 169,
                                    "char": 86
                                },
                                {
                                    "variable": "revision",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 169,
                                    "char": 96
                                },
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 169,
                                    "char": 104
                                },
                                {
                                    "variable": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 169,
                                    "char": 110
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 171,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collection",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 171,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 171,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 171,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 171,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 171,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 172,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "_documentClass",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 172,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 172,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 172,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 172,
                                    "char": 51
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 173,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "waitForSync",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 71
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 173,
                                                        "char": 78
                                                    },
                                                    "name": "getConnectionOption",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 173,
                                                                    "char": 134
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_WAIT_SYNC",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 173,
                                                                    "char": 134
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 173,
                                                                "char": 134
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 173,
                                                            "char": 134
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 135
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 173,
                                                "char": 135
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "keepNull",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 148
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 154
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 173,
                                                "char": 154
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "silent",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 165
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 172
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 173,
                                                "char": 172
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "ignoreRevs",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 187
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 193
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 173,
                                                "char": 193
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "policy",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 204
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 173,
                                                        "char": 211
                                                    },
                                                    "name": "getConnectionOption",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 173,
                                                                    "char": 271
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_UPDATE_POLICY",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 173,
                                                                    "char": 271
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 173,
                                                                "char": 271
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 173,
                                                            "char": 271
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 173,
                                                    "char": 272
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 173,
                                                "char": 272
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 173,
                                        "char": 273
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 173,
                                    "char": 273
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 174,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "params",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 174,
                                            "char": 28
                                        },
                                        "name": "includeOptionsInParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 174,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 174,
                                                "char": 59
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 174,
                                                    "char": 101
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 174,
                                                "char": 101
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 174,
                                        "char": 102
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 174,
                                    "char": 102
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 175,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "headers",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 175,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 175,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 176,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "isset",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 176,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 176,
                                                "char": 64
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_UPDATE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 176,
                                                "char": 64
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 176,
                                            "char": 64
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 176,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 176,
                                    "char": 67
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 176,
                                            "char": 75
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 176,
                                                "char": 115
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_UPDATE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 176,
                                                "char": 115
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 176,
                                            "char": 115
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 176,
                                        "char": 119
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "UpdatePolicy",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 176,
                                            "char": 141
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ERROR",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 176,
                                            "char": 141
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 176,
                                        "char": 141
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 176,
                                    "char": 141
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 176,
                                "char": 141
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "revision",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 177,
                                                    "char": 38
                                                },
                                                "name": "getRevision",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 177,
                                                "char": 52
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 177,
                                            "char": 52
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 178,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 178,
                                            "char": 27
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 178,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 178,
                                        "char": 34
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "params",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "ignoreRevs",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 179,
                                                            "char": 40
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 179,
                                                        "char": 49
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 179,
                                                    "char": 49
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 180,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "headers",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "if-match",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 180,
                                                            "char": 39
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 180,
                                                                "char": 49
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "revision",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 180,
                                                                "char": 60
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 180,
                                                            "char": 60
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 180,
                                                            "char": 66
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 180,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 180,
                                                    "char": 66
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 181,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 182,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 183,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "buildUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 183,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 183,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "collection",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 183,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 183,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 183,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 183,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 183,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 183,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 183,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 183,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 184,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "appendParamsUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 184,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 184,
                                                "char": 50
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 184,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 184,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 184,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 184,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 185,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 185,
                                                "char": 28
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 185,
                                            "char": 45
                                        },
                                        "name": "patch",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 185,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 185,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 185,
                                                        "char": 62
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "mcall",
                                                                "variable": {
                                                                    "type": "variable",
                                                                    "value": "document",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 185,
                                                                    "char": 92
                                                                },
                                                                "name": "getAllForInsertUpdate",
                                                                "call-type": 1,
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 185,
                                                                "char": 116
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 185,
                                                            "char": 116
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 185,
                                                    "char": 117
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 185,
                                                "char": 117
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "headers",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 185,
                                                    "char": 126
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 185,
                                                "char": 126
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 185,
                                        "char": 127
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 185,
                                    "char": 127
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 186,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "json",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "result",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 186,
                                            "char": 28
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 186,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 186,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 187,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 187,
                                    "char": 18
                                },
                                "name": "setRevision",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "json",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 187,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "fcall",
                                                "name": "constant",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "_documentClass",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 187,
                                                                "char": 60
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "::ENTRY_REV",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 187,
                                                                "char": 75
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 187,
                                                            "char": 75
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 187,
                                                        "char": 75
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 187,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 187,
                                            "char": 77
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 187,
                                        "char": 77
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 187,
                                "char": 78
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 188,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 188,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 189,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 168,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 168,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 167,
                    "last-line": 191,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "replace",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 191,
                                "char": 47
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 191,
                            "char": 48
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 191,
                                "char": 68
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 191,
                            "char": 68
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "documentId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 193,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 195,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "documentId",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 195,
                                            "char": 32
                                        },
                                        "name": "getDocumentId",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 195,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 195,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 195,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 195,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 196,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 196,
                                    "char": 21
                                },
                                "name": "replaceById",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 196,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 196,
                                        "char": 42
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 196,
                                            "char": 54
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 196,
                                        "char": 54
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 196,
                                            "char": 64
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 196,
                                        "char": 64
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 196,
                                            "char": 73
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 196,
                                        "char": 73
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 196,
                                "char": 74
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 197,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 192,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 192,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 191,
                    "last-line": 199,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "replaceById",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 199,
                            "char": 43
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 199,
                            "char": 55
                        },
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 199,
                                "char": 75
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 199,
                            "char": 76
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 199,
                                "char": 96
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 199,
                            "char": 96
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 201,
                                    "char": 21
                                },
                                "name": "put",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "Urls",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 201,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_DOCUMENT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 201,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 201,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 201,
                                        "char": 44
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 201,
                                            "char": 56
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 201,
                                        "char": 56
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 201,
                                            "char": 68
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 201,
                                        "char": 68
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 201,
                                            "char": 78
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 201,
                                        "char": 78
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 201,
                                            "char": 87
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 201,
                                        "char": 87
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 201,
                                "char": 88
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 202,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 200,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 200,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 199,
                    "last-line": 204,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "put",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "url",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 204,
                            "char": 38
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 204,
                            "char": 57
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 204,
                            "char": 69
                        },
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 204,
                                "char": 89
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 204,
                            "char": 90
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 204,
                                "char": 110
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 204,
                            "char": 110
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "_documentClass",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 206,
                                    "char": 27
                                },
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 206,
                                    "char": 35
                                },
                                {
                                    "variable": "tmpArray6cb2004c711821f8e0e9777e41742c7f",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 206,
                                    "char": 77
                                },
                                {
                                    "variable": "headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 206,
                                    "char": 86
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 206,
                                    "char": 92
                                },
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 206,
                                    "char": 100
                                },
                                {
                                    "variable": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 206,
                                    "char": 106
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 208,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collection",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 208,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 208,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 208,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 208,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 208,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 209,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "_documentClass",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 209,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 209,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 209,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 209,
                                    "char": 51
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 210,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray6cb2004c711821f8e0e9777e41742c7f",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "waitForSync",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 210,
                                                    "char": 71
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 210,
                                                        "char": 78
                                                    },
                                                    "name": "getConnectionOption",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 210,
                                                                    "char": 134
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_WAIT_SYNC",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 210,
                                                                    "char": 134
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 210,
                                                                "char": 134
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 210,
                                                            "char": 134
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 210,
                                                    "char": 135
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 210,
                                                "char": 135
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "silent",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 210,
                                                    "char": 146
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 210,
                                                    "char": 153
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 210,
                                                "char": 153
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "ignoreRevs",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 210,
                                                    "char": 168
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 210,
                                                    "char": 174
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 210,
                                                "char": 174
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "policy",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 210,
                                                    "char": 185
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 210,
                                                        "char": 192
                                                    },
                                                    "name": "getConnectionOption",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 210,
                                                                    "char": 253
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_REPLACE_POLICY",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 210,
                                                                    "char": 253
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 210,
                                                                "char": 253
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 210,
                                                            "char": 253
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 210,
                                                    "char": 254
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 210,
                                                "char": 254
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 210,
                                        "char": 255
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 210,
                                    "char": 255
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 211,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "params",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 211,
                                            "char": 28
                                        },
                                        "name": "includeOptionsInParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 211,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 211,
                                                "char": 59
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray6cb2004c711821f8e0e9777e41742c7f",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 211,
                                                    "char": 101
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 211,
                                                "char": 101
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 211,
                                        "char": 102
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 211,
                                    "char": 102
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 212,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "headers",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 212,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 212,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 213,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "isset",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 213,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 213,
                                                "char": 65
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_REPLACE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 213,
                                                "char": 65
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 213,
                                            "char": 65
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 213,
                                        "char": 68
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 213,
                                    "char": 68
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 213,
                                            "char": 76
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 213,
                                                "char": 117
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_REPLACE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 213,
                                                "char": 117
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 213,
                                            "char": 117
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 213,
                                        "char": 121
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "UpdatePolicy",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 213,
                                            "char": 143
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ERROR",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 213,
                                            "char": 143
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 213,
                                        "char": 143
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 213,
                                    "char": 143
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 213,
                                "char": 143
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-identical",
                                        "left": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 214,
                                                "char": 23
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "revision",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 214,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 214,
                                            "char": 38
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 214,
                                            "char": 45
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 214,
                                        "char": 45
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "params",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "ignoreRevs",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 215,
                                                            "char": 40
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 215,
                                                        "char": 49
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 215,
                                                    "char": 49
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 216,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "headers",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "if-match",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 216,
                                                            "char": 39
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 216,
                                                                "char": 49
                                                            },
                                                            "right": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "options",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 216,
                                                                    "char": 58
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "revision",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 216,
                                                                    "char": 69
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 216,
                                                                "char": 71
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 216,
                                                            "char": 71
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 216,
                                                            "char": 77
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 216,
                                                        "char": 77
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 216,
                                                    "char": 77
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 217,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 218,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 219,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "data",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 219,
                                            "char": 30
                                        },
                                        "name": "getAllForInsertUpdate",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 219,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 219,
                                    "char": 54
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 220,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "buildUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 220,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 220,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "collection",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 220,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 220,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 220,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 220,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 220,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 220,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 220,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 220,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 221,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "appendParamsUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 221,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 221,
                                                "char": 50
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 221,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 221,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 221,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 221,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 222,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 222,
                                                "char": 28
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 222,
                                            "char": 45
                                        },
                                        "name": "put",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 222,
                                                    "char": 53
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 222,
                                                "char": 53
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 222,
                                                        "char": 60
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 222,
                                                                "char": 85
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 222,
                                                            "char": 85
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 222,
                                                    "char": 86
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 222,
                                                "char": 86
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "headers",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 222,
                                                    "char": 95
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 222,
                                                "char": 95
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 222,
                                        "char": 96
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 222,
                                    "char": 96
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 223,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "json",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "result",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 223,
                                            "char": 28
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 223,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 223,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 224,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 224,
                                    "char": 18
                                },
                                "name": "setRevision",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "json",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 224,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "fcall",
                                                "name": "constant",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "_documentClass",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 224,
                                                                "char": 60
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "::ENTRY_REV",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 224,
                                                                "char": 75
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 224,
                                                            "char": 75
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 224,
                                                        "char": 75
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 224,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 224,
                                            "char": 77
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 224,
                                        "char": 77
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 224,
                                "char": 78
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 225,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 225,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 226,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 205,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 205,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 204,
                    "last-line": 228,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "remove",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 228,
                                "char": 46
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 228,
                            "char": 47
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 228,
                                "char": 67
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 228,
                            "char": 67
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "documentId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 230,
                                    "char": 23
                                },
                                {
                                    "variable": "revision",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 230,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 232,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "documentId",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 232,
                                            "char": 32
                                        },
                                        "name": "getDocumentId",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 232,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 232,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 232,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 232,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 233,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "revision",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 233,
                                            "char": 30
                                        },
                                        "name": "getRevision",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 233,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 233,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 233,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 233,
                                    "char": 52
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 234,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 234,
                                    "char": 21
                                },
                                "name": "removeById",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 234,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 234,
                                        "char": 41
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 234,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 234,
                                        "char": 53
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 234,
                                            "char": 63
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 234,
                                        "char": 63
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 234,
                                            "char": 72
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 234,
                                        "char": 72
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 234,
                                "char": 73
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 235,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 229,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 229,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 228,
                    "last-line": 237,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "removeById",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 237,
                            "char": 42
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 237,
                            "char": 54
                        },
                        {
                            "type": "parameter",
                            "name": "revision",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 237,
                                "char": 71
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 237,
                            "char": 71
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 237,
                                "char": 91
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 237,
                            "char": 91
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 239,
                                    "char": 21
                                },
                                "name": "erase",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "Urls",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 239,
                                                "char": 46
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_DOCUMENT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 239,
                                                "char": 46
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 239,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 239,
                                        "char": 46
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 239,
                                            "char": 58
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 239,
                                        "char": 58
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 239,
                                            "char": 70
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 239,
                                        "char": 70
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 239,
                                            "char": 80
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 239,
                                        "char": 80
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 239,
                                            "char": 89
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 239,
                                        "char": 89
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 239,
                                "char": 90
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 240,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 238,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 238,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 237,
                    "last-line": 242,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "erase",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "url",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 242,
                            "char": 40
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 242,
                            "char": 59
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 242,
                            "char": 71
                        },
                        {
                            "type": "parameter",
                            "name": "revision",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 242,
                                "char": 88
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 242,
                            "char": 88
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 242,
                                "char": 108
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 242,
                            "char": 108
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 244,
                                    "char": 19
                                },
                                {
                                    "variable": "tmpArray0da0ce704ed03b9443cf7d3447b85431",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 244,
                                    "char": 61
                                },
                                {
                                    "variable": "headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 244,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 246,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collection",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 246,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 246,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 246,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 246,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 246,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 247,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray0da0ce704ed03b9443cf7d3447b85431",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "waitForSync",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 247,
                                                    "char": 71
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 247,
                                                        "char": 78
                                                    },
                                                    "name": "getConnectionOption",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 247,
                                                                    "char": 134
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_WAIT_SYNC",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 247,
                                                                    "char": 134
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 247,
                                                                "char": 134
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 247,
                                                            "char": 134
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 247,
                                                    "char": 135
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 247,
                                                "char": 135
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "silent",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 247,
                                                    "char": 146
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 247,
                                                    "char": 153
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 247,
                                                "char": 153
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "ignoreRevs",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 247,
                                                    "char": 168
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 247,
                                                    "char": 174
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 247,
                                                "char": 174
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "policy",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 247,
                                                    "char": 185
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 247,
                                                        "char": 192
                                                    },
                                                    "name": "getConnectionOption",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 247,
                                                                    "char": 252
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_DELETE_POLICY",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                    "line": 247,
                                                                    "char": 252
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 247,
                                                                "char": 252
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 247,
                                                            "char": 252
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 247,
                                                    "char": 253
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 247,
                                                "char": 253
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 247,
                                        "char": 254
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 247,
                                    "char": 254
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 248,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "params",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 248,
                                            "char": 28
                                        },
                                        "name": "includeOptionsInParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 248,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 248,
                                                "char": 59
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray0da0ce704ed03b9443cf7d3447b85431",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 248,
                                                    "char": 101
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 248,
                                                "char": 101
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 248,
                                        "char": 102
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 248,
                                    "char": 102
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 249,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "headers",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 249,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 249,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 250,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "isset",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 250,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 250,
                                                "char": 64
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_DELETE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 250,
                                                "char": 64
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 250,
                                            "char": 64
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 250,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 250,
                                    "char": 67
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 250,
                                            "char": 75
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 250,
                                                "char": 115
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_DELETE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 250,
                                                "char": 115
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 250,
                                            "char": 115
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 250,
                                        "char": 119
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "UpdatePolicy",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 250,
                                            "char": 141
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ERROR",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 250,
                                            "char": 141
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 250,
                                        "char": 141
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 250,
                                    "char": 141
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 250,
                                "char": 141
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 251,
                                            "char": 27
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 251,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 251,
                                        "char": 34
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "params",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "ignoreRevs",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 252,
                                                            "char": 40
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 252,
                                                        "char": 49
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 252,
                                                    "char": 49
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 253,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "headers",
                                                    "index-expr": [
                                                        {
                                                            "type": "string",
                                                            "value": "if-match",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 253,
                                                            "char": 39
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 253,
                                                                "char": 49
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "revision",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 253,
                                                                "char": 60
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 253,
                                                            "char": 60
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 253,
                                                            "char": 66
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 253,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 253,
                                                    "char": 66
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 254,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 255,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 256,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "buildUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 256,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 256,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "collection",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 256,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 256,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                                "line": 256,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 256,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 256,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 256,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 256,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 256,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 257,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "url",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "UrlHelper",
                                        "dynamic": 0,
                                        "name": "appendParamsUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 257,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 257,
                                                "char": 50
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 257,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 257,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 257,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 257,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 258,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 258,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 258,
                                    "char": 31
                                },
                                "name": "delete",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 258,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 258,
                                        "char": 42
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "headers",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 258,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 258,
                                        "char": 51
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 258,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 259,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 259,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 260,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 243,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 243,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 242,
                    "last-line": 262,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getDocumentId",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 262,
                            "char": 46
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "documentId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 264,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 266,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "documentId",
                                    "expr": {
                                        "type": "variable",
                                        "value": "document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 266,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 266,
                                    "char": 34
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 267,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "instanceof",
                                    "left": {
                                        "type": "variable",
                                        "value": "document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 267,
                                        "char": 31
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "Document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 267,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 267,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 267,
                                "char": 43
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "documentId",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 268,
                                                    "char": 40
                                                },
                                                "name": "getId",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 268,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 268,
                                            "char": 48
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 269,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 270,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "or",
                                "left": {
                                    "type": "or",
                                    "left": {
                                        "type": "or",
                                        "left": {
                                            "type": "not",
                                            "left": {
                                                "type": "fcall",
                                                "name": "is_int",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "documentId",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                            "line": 270,
                                                            "char": 30
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 270,
                                                        "char": 30
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 270,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 270,
                                            "char": 33
                                        },
                                        "right": {
                                            "type": "fcall",
                                            "name": "is_string",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "documentId",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 270,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 270,
                                                    "char": 55
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 270,
                                            "char": 58
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 270,
                                        "char": 58
                                    },
                                    "right": {
                                        "type": "fcall",
                                        "name": "is_float",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "documentId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 270,
                                                    "char": 79
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 270,
                                                "char": 79
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 270,
                                        "char": 82
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 270,
                                    "char": 82
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "fcall",
                                        "name": "trim",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "documentId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 270,
                                                    "char": 99
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 270,
                                                "char": 99
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 270,
                                        "char": 103
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 270,
                                        "char": 108
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 270,
                                    "char": 108
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 270,
                                "char": 108
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
                                                    "value": "Cannot alter a document without a document id",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 271,
                                                    "char": 86
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 271,
                                                "char": 86
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 271,
                                        "char": 87
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 272,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 273,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "documentId",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 273,
                                "char": 26
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 274,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 262,
                    "last-line": 276,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getRevision",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 276,
                            "char": 44
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "revision",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 278,
                                    "char": 21
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 280,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "revision",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 280,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 280,
                                    "char": 29
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 281,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "instanceof",
                                    "left": {
                                        "type": "variable",
                                        "value": "document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 281,
                                        "char": 31
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "Document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 281,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 281,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 281,
                                "char": 43
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "revision",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 282,
                                                    "char": 38
                                                },
                                                "name": "getRevision",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 282,
                                                "char": 52
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 282,
                                            "char": 52
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 283,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 284,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "revision",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 284,
                                "char": 24
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 285,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 276,
                    "last-line": 287,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "createCollectionIfOptions",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 287,
                            "char": 60
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 287,
                            "char": 75
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 289,
                                    "char": 18
                                },
                                {
                                    "variable": "collectionHandler",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 289,
                                    "char": 37
                                },
                                {
                                    "variable": "e",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 289,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 291,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "fcall",
                                    "name": "array_key_exists",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "CollectionHandler",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 291,
                                                    "char": 73
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_CREATE_COLLECTION",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 291,
                                                    "char": 73
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 291,
                                                "char": 73
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 291,
                                            "char": 73
                                        },
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 291,
                                                "char": 82
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 291,
                                            "char": 82
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 291,
                                    "char": 84
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 291,
                                "char": 84
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 293,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 294,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "value",
                                    "expr": {
                                        "type": "cast",
                                        "left": "bool",
                                        "right": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 294,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "CollectionHandler",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 294,
                                                    "char": 80
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_CREATE_COLLECTION",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 294,
                                                    "char": 80
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 294,
                                                "char": 80
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 294,
                                            "char": 81
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 294,
                                        "char": 81
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 294,
                                    "char": 81
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 295,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "variable",
                                    "value": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 295,
                                    "char": 19
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 295,
                                "char": 19
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 297,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 298,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collectionHandler",
                                    "expr": {
                                        "type": "new",
                                        "class": "CollectionHandler",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                        "line": 298,
                                                        "char": 61
                                                    },
                                                    "name": "getConnection",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 298,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 298,
                                                "char": 77
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 298,
                                        "char": 78
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 298,
                                    "char": 78
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 299,
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
                                            "value": "createCollectionType",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 299,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 299,
                                        "char": 51
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 299,
                                            "char": 60
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 299,
                                        "char": 60
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 299,
                                "char": 62
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "options",
                                            "index-expr": [
                                                {
                                                    "type": "string",
                                                    "value": "type",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 300,
                                                    "char": 31
                                                }
                                            ],
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 300,
                                                    "char": 42
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "createCollectionType",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 300,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 300,
                                                "char": 66
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 300,
                                            "char": 66
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 301,
                                    "char": 17
                                },
                                {
                                    "type": "unset",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 301,
                                            "char": 26
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "createCollectionType",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 301,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 301,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 303,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 304,
                            "char": 13
                        },
                        {
                            "type": "unset",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "variable",
                                    "value": "options",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 304,
                                    "char": 22
                                },
                                "right": {
                                    "type": "string",
                                    "value": "createCollection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 304,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                "line": 304,
                                "char": 42
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 306,
                            "char": 11
                        },
                        {
                            "type": "try-catch",
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "collectionHandler",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 307,
                                            "char": 31
                                        },
                                        "name": "create",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 307,
                                                    "char": 49
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 307,
                                                "char": 49
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                    "line": 307,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 307,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 307,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 308,
                                    "char": 9
                                }
                            ],
                            "catches": [
                                {
                                    "classes": [
                                        {
                                            "type": "variable",
                                            "value": "Exception",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 308,
                                            "char": 26
                                        }
                                    ],
                                    "variable": {
                                        "type": "variable",
                                        "value": "e",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                        "line": 311,
                                        "char": 5
                                    },
                                    "statements": [
                                        {
                                            "type": "throw",
                                            "expr": {
                                                "type": "variable",
                                                "value": "e",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                                "line": 309,
                                                "char": 20
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                            "line": 310,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                                    "line": 311,
                                    "char": 5
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                            "line": 311,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 287,
                    "last-line": 313,
                    "char": 22
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_DOCUMENTS",
                    "default": {
                        "type": "string",
                        "value": "documents",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 5,
                        "char": 40
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 6,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_COLLECTION",
                    "default": {
                        "type": "string",
                        "value": "collection",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 6,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_EXAMPLE",
                    "default": {
                        "type": "string",
                        "value": "example",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                        "line": 7,
                        "char": 37
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
                    "line": 8,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/documenthandler.zep",
        "line": 3,
        "char": 5
    }
]