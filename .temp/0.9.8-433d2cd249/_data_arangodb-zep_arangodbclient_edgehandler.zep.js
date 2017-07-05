[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "EdgeHandler",
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
                    "name": "createFromArrayWithContext",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "data",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 11,
                            "char": 52
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 11,
                            "char": 61
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "scall",
                                "dynamic-class": 0,
                                "class": "Edge",
                                "dynamic": 0,
                                "name": "createFromArray",
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 13,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 13,
                                        "char": 42
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 13,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 13,
                                        "char": 51
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 13,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 14,
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
                                    "value": "Edge",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 12,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 12,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 12,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 11,
                    "last-line": 16,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 16,
                            "char": 36
                        },
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 16,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 16,
                                "char": 66
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 16,
                            "char": 66
                        }
                    ],
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
                                            "value": "Edges don't have a save() method. Please use saveEdge()",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 18,
                                            "char": 92
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 18,
                                        "char": 92
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 18,
                                "char": 93
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 19,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 16,
                    "last-line": 21,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "saveEdge",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 21,
                            "char": 40
                        },
                        {
                            "type": "parameter",
                            "name": "from",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 21,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "to",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 21,
                            "char": 50
                        },
                        {
                            "type": "parameter",
                            "name": "document",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 21,
                            "char": 60
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 21,
                                "char": 80
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 21,
                            "char": 80
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 23,
                                    "char": 19
                                },
                                {
                                    "variable": "tmpArrayeba825deba0c7f862f47e71190656430",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 23,
                                    "char": 61
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 23,
                                    "char": 67
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 23,
                                    "char": 72
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 23,
                                    "char": 82
                                },
                                {
                                    "variable": "location",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 23,
                                    "char": 92
                                },
                                {
                                    "variable": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 23,
                                    "char": 98
                                },
                                {
                                    "variable": "id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 23,
                                    "char": 102
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 25,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 25,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 25,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 25,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 25,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 25,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 26,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 26,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 26,
                                        "char": 29
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 26,
                                "char": 31
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "document",
                                            "expr": {
                                                "type": "scall",
                                                "dynamic-class": 0,
                                                "class": "Edge",
                                                "dynamic": 0,
                                                "name": "createFromArray",
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "document",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 27,
                                                            "char": 59
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 27,
                                                        "char": 59
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 27,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 27,
                                            "char": 60
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 28,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 29,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 29,
                                    "char": 18
                                },
                                "name": "setFrom",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "from",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 29,
                                            "char": 31
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 29,
                                        "char": 31
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 29,
                                "char": 32
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 30,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 30,
                                    "char": 18
                                },
                                "name": "setTo",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "to",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 30,
                                            "char": 27
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 30,
                                        "char": 27
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 30,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 31,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArrayeba825deba0c7f862f47e71190656430",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "waitForSync",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 31,
                                                    "char": 71
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 31,
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 31,
                                                                    "char": 134
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_WAIT_SYNC",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 31,
                                                                    "char": 134
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 31,
                                                                "char": 134
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 31,
                                                            "char": 134
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 31,
                                                    "char": 135
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 31,
                                                "char": 135
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "createCollection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 31,
                                                    "char": 156
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 31,
                                                        "char": 163
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 31,
                                                                    "char": 216
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_CREATE",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 31,
                                                                    "char": 216
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 31,
                                                                "char": 216
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 31,
                                                            "char": 216
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 31,
                                                    "char": 217
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 31,
                                                "char": 217
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 31,
                                        "char": 218
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 31,
                                    "char": 218
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 32,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 32,
                                            "char": 28
                                        },
                                        "name": "includeOptionsInParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 32,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 32,
                                                "char": 59
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArrayeba825deba0c7f862f47e71190656430",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 32,
                                                    "char": 101
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 32,
                                                "char": 101
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 32,
                                        "char": 102
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 32,
                                    "char": 102
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 33,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 33,
                                    "char": 14
                                },
                                "name": "createCollectionIfOptions",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 33,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 33,
                                        "char": 51
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 33,
                                            "char": 59
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 33,
                                        "char": 59
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 33,
                                "char": 60
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 34,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 34,
                                            "char": 30
                                        },
                                        "name": "getAllForInsertUpdate",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 34,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 34,
                                    "char": 54
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 35,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 35,
                                                                "char": 62
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "URL_EDGE",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 35,
                                                                "char": 62
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 35,
                                                            "char": 62
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\/",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 35,
                                                            "char": 68
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 35,
                                                        "char": 68
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "collection",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 35,
                                                        "char": 80
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 35,
                                                    "char": 80
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 35,
                                                "char": 80
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 35,
                                                    "char": 88
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 35,
                                                "char": 88
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 35,
                                        "char": 89
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 35,
                                    "char": 89
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 36,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 36,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 36,
                                            "char": 47
                                        },
                                        "name": "post",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 36,
                                                    "char": 56
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 36,
                                                "char": 56
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 36,
                                                        "char": 63
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 36,
                                                                "char": 88
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 36,
                                                            "char": 88
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 36,
                                                    "char": 89
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 36,
                                                "char": 89
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 36,
                                        "char": 90
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 36,
                                    "char": 90
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 37,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 37,
                                            "char": 34
                                        },
                                        "name": "getLocationHeader",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 37,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 37,
                                    "char": 54
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 38,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "variable",
                                    "value": "location",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 38,
                                    "char": 22
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 38,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 39,
                                                    "char": 88
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 39,
                                                "char": 88
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 39,
                                        "char": 89
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 40,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 41,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 41,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 41,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 41,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 42,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 42,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 42,
                                                "char": 64
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 42,
                                        "char": 65
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 42,
                                    "char": 65
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 43,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 43,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 43,
                                                "char": 37
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "Edge",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 43,
                                                    "char": 52
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_ID",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 43,
                                                    "char": 52
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 43,
                                                "char": 52
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 43,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 43,
                                        "char": 53
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 43,
                                "char": 54
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 44,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 44,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 44,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "Edge",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 44,
                                                    "char": 51
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_REV",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 44,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 44,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 44,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 44,
                                        "char": 52
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 44,
                                "char": 53
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 45,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "variable",
                                    "value": "id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 45,
                                    "char": 17
                                },
                                "right": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 45,
                                        "char": 28
                                    },
                                    "name": "getId",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 45,
                                    "char": 37
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 45,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 46,
                                                    "char": 80
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 46,
                                                "char": 80
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 46,
                                        "char": 81
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 47,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 48,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 48,
                                    "char": 18
                                },
                                "name": "setIsNew",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "bool",
                                            "value": "false",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 48,
                                            "char": 33
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 48,
                                        "char": 33
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 48,
                                "char": 34
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 49,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 49,
                                    "char": 25
                                },
                                "name": "getId",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 49,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 50,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 21,
                    "last-line": 52,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "edges",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 52,
                            "char": 37
                        },
                        {
                            "type": "parameter",
                            "name": "vertexHandle",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 52,
                            "char": 51
                        },
                        {
                            "type": "parameter",
                            "name": "direction",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "any",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 52,
                                "char": 77
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 52,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 52,
                                "char": 97
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 52,
                            "char": 97
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 54,
                                    "char": 19
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 54,
                                    "char": 24
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 54,
                                    "char": 34
                                },
                                {
                                    "variable": "batchPart",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 54,
                                    "char": 45
                                },
                                {
                                    "variable": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 54,
                                    "char": 51
                                },
                                {
                                    "variable": "edges",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 54,
                                    "char": 58
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 54,
                                    "char": 64
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 56,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 56,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 56,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 56,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 56,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 56,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 57,
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
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 57,
                                                        "char": 44
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "OPTION_VERTEX",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 57,
                                                        "char": 44
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 57,
                                                    "char": 44
                                                },
                                                "value": {
                                                    "type": "variable",
                                                    "value": "vertexHandle",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 57,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 57,
                                                "char": 58
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 57,
                                                        "char": 83
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "OPTION_DIRECTION",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 57,
                                                        "char": 83
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 57,
                                                    "char": 83
                                                },
                                                "value": {
                                                    "type": "variable",
                                                    "value": "direction",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 57,
                                                    "char": 94
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 57,
                                                "char": 94
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 57,
                                        "char": 95
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 57,
                                    "char": 95
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 58,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 58,
                                                                "char": 63
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "URL_EDGES",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 58,
                                                                "char": 63
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 58,
                                                            "char": 63
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\/",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 58,
                                                            "char": 69
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 58,
                                                        "char": 69
                                                    },
                                                    "right": {
                                                        "type": "fcall",
                                                        "name": "urlencode",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "collection",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 58,
                                                                    "char": 91
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 58,
                                                                "char": 91
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 58,
                                                        "char": 92
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 58,
                                                    "char": 92
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 58,
                                                "char": 92
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 58,
                                                    "char": 100
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 58,
                                                "char": 100
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 58,
                                        "char": 101
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 58,
                                    "char": 101
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 59,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 59,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 59,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 59,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 59,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 59,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 59,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 60,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 60,
                                            "char": 35
                                        },
                                        "name": "getBatchPart",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 60,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 60,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 61,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "batchPart",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 61,
                                "char": 22
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "batchPart",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 62,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 63,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 64,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 64,
                                            "char": 29
                                        }
                                    ],
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 64,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 64,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 65,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 65,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 65,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 65,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 66,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "edges",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 66,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 66,
                                    "char": 24
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 67,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "variable",
                                    "value": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 67,
                                    "char": 25
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 67,
                                        "char": 43
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_EDGES",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 67,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 67,
                                    "char": 43
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 67,
                                "char": 45
                            },
                            "value": "data",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable-append",
                                            "operator": "assign",
                                            "variable": "edges",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 68,
                                                    "char": 33
                                                },
                                                "name": "createFromArrayWithContext",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "data",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 68,
                                                            "char": 65
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 68,
                                                        "char": 65
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "options",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 68,
                                                            "char": 74
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 68,
                                                        "char": 74
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 68,
                                                "char": 75
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 68,
                                            "char": 75
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 69,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 70,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "edges",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 70,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 71,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 53,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 53,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 52,
                    "last-line": 73,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "inEdges",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 73,
                            "char": 39
                        },
                        {
                            "type": "parameter",
                            "name": "vertexHandle",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 73,
                            "char": 53
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 75,
                                    "char": 21
                                },
                                "name": "edges",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 75,
                                            "char": 38
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 75,
                                        "char": 38
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "vertexHandle",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 75,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 75,
                                        "char": 52
                                    },
                                    {
                                        "parameter": {
                                            "type": "string",
                                            "value": "in",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 75,
                                            "char": 58
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 75,
                                        "char": 58
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 75,
                                "char": 59
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 76,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 74,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 74,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 73,
                    "last-line": 78,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "outEdges",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 78,
                            "char": 40
                        },
                        {
                            "type": "parameter",
                            "name": "vertexHandle",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 78,
                            "char": 54
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 80,
                                    "char": 21
                                },
                                "name": "edges",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 80,
                                            "char": 38
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 80,
                                        "char": 38
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "vertexHandle",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 80,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 80,
                                        "char": 52
                                    },
                                    {
                                        "parameter": {
                                            "type": "string",
                                            "value": "out",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 80,
                                            "char": 59
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 80,
                                        "char": 59
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 80,
                                "char": 60
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 81,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 79,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 79,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 78,
                    "last-line": 83,
                    "char": 19
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 83,
                            "char": 60
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 83,
                            "char": 75
                        }
                    ],
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
                                            "value": "createCollectionType",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 85,
                                            "char": 43
                                        }
                                    ],
                                    "expr": {
                                        "type": "int",
                                        "value": "3",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 85,
                                        "char": 48
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 85,
                                    "char": 48
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 86,
                            "char": 11
                        },
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 86,
                                    "char": 18
                                },
                                {
                                    "variable": "collectionHandler",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 86,
                                    "char": 37
                                },
                                {
                                    "variable": "e",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 86,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 88,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 88,
                                                    "char": 73
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_CREATE_COLLECTION",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 88,
                                                    "char": 73
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 88,
                                                "char": 73
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 88,
                                            "char": 73
                                        },
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 88,
                                                "char": 82
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 88,
                                            "char": 82
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 88,
                                    "char": 84
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 88,
                                "char": 84
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 90,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 91,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 91,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "CollectionHandler",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 91,
                                                    "char": 80
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_CREATE_COLLECTION",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 91,
                                                    "char": 80
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 91,
                                                "char": 80
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 91,
                                            "char": 81
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 91,
                                        "char": 81
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 91,
                                    "char": 81
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 92,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "variable",
                                    "value": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 92,
                                    "char": 19
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 92,
                                "char": 19
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 94,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 95,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 95,
                                                        "char": 61
                                                    },
                                                    "name": "getConnection",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 95,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 95,
                                                "char": 77
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 95,
                                        "char": 78
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 95,
                                    "char": 78
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 96,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 96,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 96,
                                        "char": 51
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 96,
                                            "char": 60
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 96,
                                        "char": 60
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 96,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 97,
                                                    "char": 31
                                                }
                                            ],
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 97,
                                                    "char": 42
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "createCollectionType",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 97,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 97,
                                                "char": 66
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 97,
                                            "char": 66
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 98,
                                    "char": 17
                                },
                                {
                                    "type": "unset",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 98,
                                            "char": 26
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "createCollectionType",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 98,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 98,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 100,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 101,
                            "char": 13
                        },
                        {
                            "type": "unset",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "variable",
                                    "value": "options",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 101,
                                    "char": 22
                                },
                                "right": {
                                    "type": "string",
                                    "value": "createCollection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 101,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 101,
                                "char": 42
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 103,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 104,
                                            "char": 31
                                        },
                                        "name": "create",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 104,
                                                    "char": 49
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 104,
                                                "char": 49
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 104,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 104,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 104,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 105,
                                    "char": 9
                                }
                            ],
                            "catches": [
                                {
                                    "classes": [
                                        {
                                            "type": "variable",
                                            "value": "Exception",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 105,
                                            "char": 26
                                        }
                                    ],
                                    "variable": {
                                        "type": "variable",
                                        "value": "e",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 108,
                                        "char": 5
                                    },
                                    "statements": [
                                        {
                                            "type": "throw",
                                            "expr": {
                                                "type": "variable",
                                                "value": "e",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 106,
                                                "char": 20
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 107,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 108,
                                    "char": 5
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 108,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 84,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 83,
                    "last-line": 110,
                    "char": 22
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
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 110,
                            "char": 42
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 110,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 110,
                                "char": 74
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 110,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 112,
                                    "char": 21
                                },
                                "name": "getById",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 112,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 112,
                                        "char": 40
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 112,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 112,
                                        "char": 52
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 112,
                                            "char": 61
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 112,
                                        "char": 61
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 112,
                                "char": 62
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 113,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 111,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 111,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 111,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 110,
                    "last-line": 115,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 115,
                            "char": 42
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 115,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 117,
                                    "char": 14
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 119,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 120,
                                            "char": 18
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 120,
                                                    "char": 33
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 120,
                                                "char": 33
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "documentId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 120,
                                                    "char": 45
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 120,
                                                "char": 45
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 120,
                                        "char": 46
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 121,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 121,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 122,
                                    "char": 9
                                }
                            ],
                            "catches": [
                                {
                                    "classes": [
                                        {
                                            "type": "variable",
                                            "value": "ServerException",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 122,
                                            "char": 32
                                        }
                                    ],
                                    "variable": {
                                        "type": "variable",
                                        "value": "e",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 128,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 123,
                                                        "char": 18
                                                    },
                                                    "name": "getCode",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 123,
                                                    "char": 31
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "404",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 123,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 123,
                                                "char": 37
                                            },
                                            "statements": [
                                                {
                                                    "type": "return",
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 124,
                                                        "char": 29
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 125,
                                                    "char": 13
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 126,
                                            "char": 17
                                        },
                                        {
                                            "type": "throw",
                                            "expr": {
                                                "type": "variable",
                                                "value": "e",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 126,
                                                "char": 20
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 127,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 128,
                                    "char": 14
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 128,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 128,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 129,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 116,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 116,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 115,
                    "last-line": 131,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 131,
                            "char": 43
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 131,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 131,
                                "char": 79
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 131,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 133,
                                    "char": 40
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 133,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 135,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 135,
                                                "char": 29
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 135,
                                            "char": 29
                                        },
                                        {
                                            "parameter": {
                                                "type": "string",
                                                "value": "\/",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 135,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 135,
                                            "char": 34
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 135,
                                    "char": 38
                                },
                                "right": {
                                    "type": "bool",
                                    "value": "false",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 135,
                                    "char": 46
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 135,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 136,
                                                            "char": 58
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 136,
                                                        "char": 58
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "documentId",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 136,
                                                            "char": 70
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 136,
                                                        "char": 70
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 136,
                                                "char": 71
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 136,
                                            "char": 71
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 137,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 137,
                                                    "char": 57
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 137,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 137,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 137,
                                            "char": 60
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 138,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 138,
                                                    "char": 57
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "1",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 138,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 138,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 138,
                                            "char": 60
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 139,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 140,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 140,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 140,
                                                        "char": 57
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_DOCUMENT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 140,
                                                        "char": 57
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 140,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 140,
                                                "char": 57
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 140,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 140,
                                                "char": 69
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "documentId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 140,
                                                    "char": 81
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 140,
                                                "char": 81
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 140,
                                                    "char": 90
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 140,
                                                "char": 90
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 140,
                                        "char": 91
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 140,
                                    "char": 91
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 141,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 141,
                                            "char": 29
                                        }
                                    ],
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 141,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 141,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 142,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 142,
                                    "char": 21
                                },
                                "name": "createFromArrayWithContext",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 142,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 142,
                                        "char": 53
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 142,
                                            "char": 62
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 142,
                                        "char": 62
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 142,
                                "char": 63
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 143,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 132,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 132,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 132,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 131,
                    "last-line": 145,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 145,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 145,
                            "char": 65
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 145,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 145,
                                "char": 97
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 145,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 147,
                                    "char": 27
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 147,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 149,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 149,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 149,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 149,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 149,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 149,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 150,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 150,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 150,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 150,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 150,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 150,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 150,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 150,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 150,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 150,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 150,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 151,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 151,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 151,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 152,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 152,
                                                "char": 38
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 152,
                                            "char": 38
                                        },
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 152,
                                                "char": 47
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 152,
                                            "char": 47
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 152,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 152,
                                                "char": 79
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 152,
                                            "char": 79
                                        },
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 152,
                                                "char": 88
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 152,
                                            "char": 88
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 152,
                                    "char": 90
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 152,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 153,
                                                "char": 23
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "ifMatch",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 153,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 153,
                                            "char": 37
                                        },
                                        "right": {
                                            "type": "bool",
                                            "value": "true",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 153,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 153,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 154,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 154,
                                                                "char": 56
                                                            },
                                                            "right": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "options",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 154,
                                                                    "char": 65
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "revision",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 154,
                                                                    "char": 76
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 154,
                                                                "char": 78
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 154,
                                                            "char": 78
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 154,
                                                            "char": 84
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 154,
                                                        "char": 84
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 154,
                                                    "char": 84
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 155,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 156,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 156,
                                                                "char": 61
                                                            },
                                                            "right": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "options",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 156,
                                                                    "char": 70
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "revision",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 156,
                                                                    "char": 81
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 156,
                                                                "char": 83
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 156,
                                                            "char": 83
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 156,
                                                            "char": 89
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 156,
                                                        "char": 89
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 156,
                                                    "char": 89
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 157,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 158,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 159,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 159,
                                                "char": 29
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 159,
                                            "char": 46
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 159,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 159,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "headerElements",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 159,
                                                    "char": 70
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 159,
                                                "char": 70
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 159,
                                        "char": 71
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 159,
                                    "char": 71
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 160,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 160,
                                        "char": 21
                                    },
                                    "name": "getHttpCode",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 160,
                                    "char": 38
                                },
                                "right": {
                                    "type": "int",
                                    "value": "304",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 160,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 160,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 161,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 161,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 161,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 162,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 163,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 163,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 163,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 164,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 146,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 146,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 145,
                    "last-line": 166,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 166,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 166,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 166,
                                "char": 82
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 166,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 166,
                                "char": 103
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 166,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 168,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 168,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_DOCUMENT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 168,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 168,
                                            "char": 45
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 168,
                                        "char": 45
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 168,
                                            "char": 57
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 168,
                                        "char": 57
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 168,
                                            "char": 69
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 168,
                                        "char": 69
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 168,
                                            "char": 79
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 168,
                                        "char": 79
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "ifMatch",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 168,
                                            "char": 88
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 168,
                                        "char": 88
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 168,
                                "char": 89
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 169,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 167,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 167,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 166,
                    "last-line": 171,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 171,
                            "char": 39
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 171,
                            "char": 58
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 171,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 171,
                                "char": 87
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 171,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 171,
                                "char": 108
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 171,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 173,
                                    "char": 27
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 173,
                                    "char": 37
                                },
                                {
                                    "variable": "headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 173,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 175,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 175,
                                            "char": 31
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 175,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 175,
                                                "char": 57
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 175,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 175,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 176,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 176,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 176,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 176,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 176,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 176,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 176,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 176,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 176,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 176,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 176,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 177,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 177,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 177,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 178,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 178,
                                        "char": 23
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 178,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 178,
                                    "char": 31
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "ifMatch",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 178,
                                        "char": 43
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 178,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 178,
                                    "char": 50
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 178,
                                "char": 50
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "variable",
                                        "value": "ifMatch",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 179,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 180,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 180,
                                                                "char": 56
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "revision",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 180,
                                                                "char": 67
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 180,
                                                            "char": 67
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 180,
                                                            "char": 73
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 180,
                                                        "char": 73
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 180,
                                                    "char": 73
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 181,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 182,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 182,
                                                                "char": 61
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "revision",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 182,
                                                                "char": 72
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 182,
                                                            "char": 72
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 182,
                                                            "char": 78
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 182,
                                                        "char": 78
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 182,
                                                    "char": 78
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 183,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 184,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 185,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 185,
                                                "char": 29
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 185,
                                            "char": 46
                                        },
                                        "name": "head",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 185,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 185,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "headerElements",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 185,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 185,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 185,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 185,
                                    "char": 72
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 186,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 186,
                                            "char": 32
                                        },
                                        "name": "getHeaders",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 186,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 186,
                                    "char": 45
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 187,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 187,
                                            "char": 31
                                        }
                                    ],
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 187,
                                            "char": 45
                                        },
                                        "name": "getHttpCode",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 187,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 187,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 188,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "headers",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 188,
                                "char": 23
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 189,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 172,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 172,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 171,
                    "last-line": 191,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 191,
                                "char": 45
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 191,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 191,
                                "char": 65
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 191,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 191,
                                "char": 85
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 191,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 193,
                                    "char": 19
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 195,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 195,
                                    "char": 21
                                },
                                "name": "getIsNew",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 195,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 196,
                                            "char": 29
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 196,
                                            "char": 36
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 196,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 197,
                                                            "char": 97
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 197,
                                                        "char": 97
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 197,
                                                "char": 98
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 198,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 199,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 199,
                                                    "char": 31
                                                },
                                                "name": "save",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "collection",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 199,
                                                            "char": 47
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 199,
                                                        "char": 47
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "document",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 199,
                                                            "char": 57
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 199,
                                                        "char": 57
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "options",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 199,
                                                            "char": 66
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 199,
                                                        "char": 66
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 199,
                                                "char": 67
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 199,
                                            "char": 67
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 200,
                                    "char": 20
                                },
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 200,
                                            "char": 22
                                        },
                                        "name": "setIsNew",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 200,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 200,
                                                "char": 37
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 200,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 201,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "result",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 201,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 202,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "variable",
                                        "value": "collection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 203,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 204,
                                                            "char": 104
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 204,
                                                        "char": 104
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 204,
                                                "char": 105
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 205,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 206,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 206,
                                            "char": 25
                                        },
                                        "name": "replace",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 206,
                                                    "char": 42
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 206,
                                                "char": 42
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 206,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 206,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 206,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 207,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 208,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 191,
                    "last-line": 210,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 210,
                                "char": 46
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 210,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 210,
                                "char": 67
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 210,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 212,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 214,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 214,
                                            "char": 32
                                        },
                                        "name": "getDocumentId",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 214,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 214,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 214,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 214,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 215,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 215,
                                    "char": 21
                                },
                                "name": "updateById",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 215,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 215,
                                        "char": 41
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 215,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 215,
                                        "char": 53
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 215,
                                            "char": 63
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 215,
                                        "char": 63
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 215,
                                            "char": 72
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 215,
                                        "char": 72
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 215,
                                "char": 73
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 216,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 211,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 211,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 210,
                    "last-line": 218,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 218,
                            "char": 49
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 218,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 218,
                                "char": 81
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 218,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 218,
                                "char": 102
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 218,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 220,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 220,
                                                "char": 46
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_DOCUMENT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 220,
                                                "char": 46
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 220,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 220,
                                        "char": 46
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 220,
                                            "char": 58
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 220,
                                        "char": 58
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 220,
                                            "char": 70
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 220,
                                        "char": 70
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 220,
                                            "char": 80
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 220,
                                        "char": 80
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 220,
                                            "char": 89
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 220,
                                        "char": 89
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 220,
                                "char": 90
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 221,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 219,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 219,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 218,
                    "last-line": 223,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 223,
                            "char": 40
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 223,
                            "char": 59
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 223,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 223,
                                "char": 91
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 223,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 223,
                                "char": 112
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 223,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 225,
                                    "char": 27
                                },
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 225,
                                    "char": 35
                                },
                                {
                                    "variable": "tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 225,
                                    "char": 77
                                },
                                {
                                    "variable": "headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 225,
                                    "char": 86
                                },
                                {
                                    "variable": "revision",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 225,
                                    "char": 96
                                },
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 225,
                                    "char": 104
                                },
                                {
                                    "variable": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 225,
                                    "char": 110
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 227,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 227,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 227,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 227,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 227,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 227,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 228,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 228,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 228,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 228,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 228,
                                    "char": 51
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 229,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 71
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 229,
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 229,
                                                                    "char": 134
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_WAIT_SYNC",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 229,
                                                                    "char": 134
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 229,
                                                                "char": 134
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 229,
                                                            "char": 134
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 135
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 229,
                                                "char": 135
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "keepNull",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 148
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 154
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 229,
                                                "char": 154
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "silent",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 165
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 172
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 229,
                                                "char": 172
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "ignoreRevs",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 187
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 193
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 229,
                                                "char": 193
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "policy",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 204
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 229,
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 229,
                                                                    "char": 271
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_UPDATE_POLICY",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 229,
                                                                    "char": 271
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 229,
                                                                "char": 271
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 229,
                                                            "char": 271
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 229,
                                                    "char": 272
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 229,
                                                "char": 272
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 229,
                                        "char": 273
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 229,
                                    "char": 273
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 230,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 230,
                                            "char": 28
                                        },
                                        "name": "includeOptionsInParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 230,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 230,
                                                "char": 59
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 230,
                                                    "char": 101
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 230,
                                                "char": 101
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 230,
                                        "char": 102
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 230,
                                    "char": 102
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 231,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 231,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 231,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 232,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 232,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 232,
                                                "char": 64
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_UPDATE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 232,
                                                "char": 64
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 232,
                                            "char": 64
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 232,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 232,
                                    "char": 67
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 232,
                                            "char": 75
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 232,
                                                "char": 115
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_UPDATE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 232,
                                                "char": 115
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 232,
                                            "char": 115
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 232,
                                        "char": 119
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "UpdatePolicy",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 232,
                                            "char": 141
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ERROR",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 232,
                                            "char": 141
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 232,
                                        "char": 141
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 232,
                                    "char": 141
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 232,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 233,
                                                    "char": 38
                                                },
                                                "name": "getRevision",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 233,
                                                "char": 52
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 233,
                                            "char": 52
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 234,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 234,
                                            "char": 27
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 234,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 234,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 235,
                                                            "char": 40
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 235,
                                                        "char": 49
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 235,
                                                    "char": 49
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 236,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 236,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 236,
                                                                "char": 49
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "revision",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 236,
                                                                "char": 60
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 236,
                                                            "char": 60
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 236,
                                                            "char": 66
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 236,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 236,
                                                    "char": 66
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 237,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 238,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 239,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 239,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 239,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 239,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 239,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 239,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 239,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 239,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 239,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 239,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 239,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 240,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 240,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 240,
                                                "char": 50
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 240,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 240,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 240,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 240,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 241,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 241,
                                                "char": 28
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 241,
                                            "char": 45
                                        },
                                        "name": "patch",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 241,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 241,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 241,
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 241,
                                                                    "char": 92
                                                                },
                                                                "name": "getAllForInsertUpdate",
                                                                "call-type": 1,
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 241,
                                                                "char": 116
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 241,
                                                            "char": 116
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 241,
                                                    "char": 117
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 241,
                                                "char": 117
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "headers",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 241,
                                                    "char": 126
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 241,
                                                "char": 126
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 241,
                                        "char": 127
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 241,
                                    "char": 127
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 242,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 242,
                                            "char": 28
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 242,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 242,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 243,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 243,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 243,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 243,
                                                                "char": 60
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "::ENTRY_REV",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 243,
                                                                "char": 75
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 243,
                                                            "char": 75
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 243,
                                                        "char": 75
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 243,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 243,
                                            "char": 77
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 243,
                                        "char": 77
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 243,
                                "char": 78
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 244,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 244,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 245,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 224,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 224,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 223,
                    "last-line": 247,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 247,
                                "char": 47
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 247,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 247,
                                "char": 68
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 247,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 249,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 251,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 251,
                                            "char": 32
                                        },
                                        "name": "getDocumentId",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 251,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 251,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 251,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 251,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 252,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 252,
                                    "char": 21
                                },
                                "name": "replaceById",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 252,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 252,
                                        "char": 42
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 252,
                                            "char": 54
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 252,
                                        "char": 54
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 252,
                                            "char": 64
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 252,
                                        "char": 64
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 252,
                                            "char": 73
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 252,
                                        "char": 73
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 252,
                                "char": 74
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 253,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 248,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 248,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 247,
                    "last-line": 255,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 255,
                            "char": 43
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 255,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 255,
                                "char": 75
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 255,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 255,
                                "char": 96
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 255,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 257,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 257,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_DOCUMENT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 257,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 257,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 257,
                                        "char": 44
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 257,
                                            "char": 56
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 257,
                                        "char": 56
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 257,
                                            "char": 68
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 257,
                                        "char": 68
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 257,
                                            "char": 78
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 257,
                                        "char": 78
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 257,
                                            "char": 87
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 257,
                                        "char": 87
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 257,
                                "char": 88
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 258,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 256,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 256,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 255,
                    "last-line": 260,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 260,
                            "char": 38
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 260,
                            "char": 57
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 260,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 260,
                                "char": 89
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 260,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 260,
                                "char": 110
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 260,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 262,
                                    "char": 27
                                },
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 262,
                                    "char": 35
                                },
                                {
                                    "variable": "tmpArray6cb2004c711821f8e0e9777e41742c7f",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 262,
                                    "char": 77
                                },
                                {
                                    "variable": "headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 262,
                                    "char": 86
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 262,
                                    "char": 92
                                },
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 262,
                                    "char": 100
                                },
                                {
                                    "variable": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 262,
                                    "char": 106
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 264,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 264,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 264,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 264,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 264,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 264,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 265,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 265,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 265,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 265,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 265,
                                    "char": 51
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 266,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 266,
                                                    "char": 71
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 266,
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 266,
                                                                    "char": 134
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_WAIT_SYNC",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 266,
                                                                    "char": 134
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 266,
                                                                "char": 134
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 266,
                                                            "char": 134
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 266,
                                                    "char": 135
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 266,
                                                "char": 135
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "silent",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 266,
                                                    "char": 146
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 266,
                                                    "char": 153
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 266,
                                                "char": 153
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "ignoreRevs",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 266,
                                                    "char": 168
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 266,
                                                    "char": 174
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 266,
                                                "char": 174
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "policy",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 266,
                                                    "char": 185
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 266,
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 266,
                                                                    "char": 253
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_REPLACE_POLICY",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 266,
                                                                    "char": 253
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 266,
                                                                "char": 253
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 266,
                                                            "char": 253
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 266,
                                                    "char": 254
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 266,
                                                "char": 254
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 266,
                                        "char": 255
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 266,
                                    "char": 255
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 267,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 267,
                                            "char": 28
                                        },
                                        "name": "includeOptionsInParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 267,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 267,
                                                "char": 59
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray6cb2004c711821f8e0e9777e41742c7f",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 267,
                                                    "char": 101
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 267,
                                                "char": 101
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 267,
                                        "char": 102
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 267,
                                    "char": 102
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 268,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 268,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 268,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 269,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 269,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 269,
                                                "char": 65
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_REPLACE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 269,
                                                "char": 65
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 269,
                                            "char": 65
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 269,
                                        "char": 68
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 269,
                                    "char": 68
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 269,
                                            "char": 76
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 269,
                                                "char": 117
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_REPLACE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 269,
                                                "char": 117
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 269,
                                            "char": 117
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 269,
                                        "char": 121
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "UpdatePolicy",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 269,
                                            "char": 143
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ERROR",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 269,
                                            "char": 143
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 269,
                                        "char": 143
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 269,
                                    "char": 143
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 269,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 270,
                                                "char": 23
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "revision",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 270,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 270,
                                            "char": 38
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 270,
                                            "char": 45
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 270,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 271,
                                                            "char": 40
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 271,
                                                        "char": 49
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 271,
                                                    "char": 49
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 272,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 272,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 272,
                                                                "char": 49
                                                            },
                                                            "right": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "options",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 272,
                                                                    "char": 58
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "revision",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 272,
                                                                    "char": 69
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 272,
                                                                "char": 71
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 272,
                                                            "char": 71
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 272,
                                                            "char": 77
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 272,
                                                        "char": 77
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 272,
                                                    "char": 77
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 273,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 274,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 275,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 275,
                                            "char": 30
                                        },
                                        "name": "getAllForInsertUpdate",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 275,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 275,
                                    "char": 54
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 276,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 276,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 276,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 276,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 276,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 276,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 276,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 276,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 276,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 276,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 276,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 277,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 277,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 277,
                                                "char": 50
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 277,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 277,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 277,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 277,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 278,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 278,
                                                "char": 28
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 278,
                                            "char": 45
                                        },
                                        "name": "put",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 278,
                                                    "char": 53
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 278,
                                                "char": 53
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 278,
                                                        "char": 60
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 278,
                                                                "char": 85
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 278,
                                                            "char": 85
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 278,
                                                    "char": 86
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 278,
                                                "char": 86
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "headers",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 278,
                                                    "char": 95
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 278,
                                                "char": 95
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 278,
                                        "char": 96
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 278,
                                    "char": 96
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 279,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 279,
                                            "char": 28
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 279,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 279,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 280,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 280,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 280,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 280,
                                                                "char": 60
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "::ENTRY_REV",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 280,
                                                                "char": 75
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 280,
                                                            "char": 75
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 280,
                                                        "char": 75
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 280,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 280,
                                            "char": 77
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 280,
                                        "char": 77
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 280,
                                "char": 78
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 281,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 281,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 282,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 261,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 261,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 260,
                    "last-line": 284,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 284,
                                "char": 46
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 284,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 284,
                                "char": 67
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 284,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 286,
                                    "char": 23
                                },
                                {
                                    "variable": "revision",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 286,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 288,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 288,
                                            "char": 32
                                        },
                                        "name": "getDocumentId",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 288,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 288,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 288,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 288,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 289,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 289,
                                            "char": 30
                                        },
                                        "name": "getRevision",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 289,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 289,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 289,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 289,
                                    "char": 52
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 290,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 290,
                                    "char": 21
                                },
                                "name": "removeById",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 290,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 290,
                                        "char": 41
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 290,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 290,
                                        "char": 53
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 290,
                                            "char": 63
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 290,
                                        "char": 63
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 290,
                                            "char": 72
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 290,
                                        "char": 72
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 290,
                                "char": 73
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 291,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 285,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 285,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 284,
                    "last-line": 293,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 293,
                            "char": 42
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 293,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 293,
                                "char": 71
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 293,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 293,
                                "char": 91
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 293,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 295,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 295,
                                                "char": 46
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_DOCUMENT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 295,
                                                "char": 46
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 295,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 295,
                                        "char": 46
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 295,
                                            "char": 58
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 295,
                                        "char": 58
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "documentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 295,
                                            "char": 70
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 295,
                                        "char": 70
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "revision",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 295,
                                            "char": 80
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 295,
                                        "char": 80
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 295,
                                            "char": 89
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 295,
                                        "char": 89
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 295,
                                "char": 90
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 296,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 294,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 294,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 293,
                    "last-line": 298,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 298,
                            "char": 40
                        },
                        {
                            "type": "parameter",
                            "name": "collection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 298,
                            "char": 59
                        },
                        {
                            "type": "parameter",
                            "name": "documentId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 298,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 298,
                                "char": 88
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 298,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 298,
                                "char": 108
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 298,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 300,
                                    "char": 19
                                },
                                {
                                    "variable": "tmpArray0da0ce704ed03b9443cf7d3447b85431",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 300,
                                    "char": 61
                                },
                                {
                                    "variable": "headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 300,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 302,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 302,
                                            "char": 32
                                        },
                                        "name": "makeCollection",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 302,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 302,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 302,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 302,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 303,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 303,
                                                    "char": 71
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 303,
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 303,
                                                                    "char": 134
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_WAIT_SYNC",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 303,
                                                                    "char": 134
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 303,
                                                                "char": 134
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 303,
                                                            "char": 134
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 303,
                                                    "char": 135
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 303,
                                                "char": 135
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "silent",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 303,
                                                    "char": 146
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 303,
                                                    "char": 153
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 303,
                                                "char": 153
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "ignoreRevs",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 303,
                                                    "char": 168
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 303,
                                                    "char": 174
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 303,
                                                "char": 174
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "policy",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 303,
                                                    "char": 185
                                                },
                                                "value": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 303,
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 303,
                                                                    "char": 252
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_DELETE_POLICY",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                    "line": 303,
                                                                    "char": 252
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 303,
                                                                "char": 252
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 303,
                                                            "char": 252
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 303,
                                                    "char": 253
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 303,
                                                "char": 253
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 303,
                                        "char": 254
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 303,
                                    "char": 254
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 304,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 304,
                                            "char": 28
                                        },
                                        "name": "includeOptionsInParams",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 304,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 304,
                                                "char": 59
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray0da0ce704ed03b9443cf7d3447b85431",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 304,
                                                    "char": 101
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 304,
                                                "char": 101
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 304,
                                        "char": 102
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 304,
                                    "char": 102
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 305,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 305,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 305,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 306,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 306,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 306,
                                                "char": 64
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_DELETE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 306,
                                                "char": 64
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 306,
                                            "char": 64
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 306,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 306,
                                    "char": 67
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "params",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 306,
                                            "char": 75
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "ConnectionOptions",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 306,
                                                "char": 115
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_DELETE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 306,
                                                "char": 115
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 306,
                                            "char": 115
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 306,
                                        "char": 119
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "UpdatePolicy",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 306,
                                            "char": 141
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ERROR",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 306,
                                            "char": 141
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 306,
                                        "char": 141
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 306,
                                    "char": 141
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 306,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 307,
                                            "char": 27
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 307,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 307,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 308,
                                                            "char": 40
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 308,
                                                        "char": 49
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 308,
                                                    "char": 49
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 309,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 309,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 309,
                                                                "char": 49
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "revision",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 309,
                                                                "char": 60
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 309,
                                                            "char": 60
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\"",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 309,
                                                            "char": 66
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 309,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 309,
                                                    "char": 66
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 310,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 311,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 312,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 312,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 312,
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 312,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 312,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "documentId",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                                "line": 312,
                                                                "char": 68
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 312,
                                                            "char": 68
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 312,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 312,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 312,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 312,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 313,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 313,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 313,
                                                "char": 50
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 313,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 313,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 313,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 313,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 314,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 314,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 314,
                                    "char": 31
                                },
                                "name": "delete",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 314,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 314,
                                        "char": 42
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "headers",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 314,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 314,
                                        "char": 51
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 314,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 315,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 315,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 316,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 299,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 299,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 298,
                    "last-line": 318,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 318,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 320,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 322,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 322,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 322,
                                    "char": 34
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 323,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 323,
                                        "char": 31
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "Document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 323,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 323,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 323,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 324,
                                                    "char": 40
                                                },
                                                "name": "getId",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 324,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 324,
                                            "char": 48
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 325,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 326,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                            "line": 326,
                                                            "char": 30
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 326,
                                                        "char": 30
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 326,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 326,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                        "line": 326,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 326,
                                                    "char": 55
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 326,
                                            "char": 58
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 326,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 326,
                                                    "char": 79
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 326,
                                                "char": 79
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 326,
                                        "char": 82
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 326,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 326,
                                                    "char": 99
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 326,
                                                "char": 99
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 326,
                                        "char": 103
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 326,
                                        "char": 108
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 326,
                                    "char": 108
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 326,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 327,
                                                    "char": 86
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 327,
                                                "char": 86
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 327,
                                        "char": 87
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 328,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 329,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "documentId",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 329,
                                "char": 26
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 330,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 318,
                    "last-line": 332,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 332,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 334,
                                    "char": 21
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 336,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 336,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 336,
                                    "char": 29
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 337,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 337,
                                        "char": 31
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "Document",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                        "line": 337,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 337,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 337,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                    "line": 338,
                                                    "char": 38
                                                },
                                                "name": "getRevision",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                                "line": 338,
                                                "char": 52
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                            "line": 338,
                                            "char": 52
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                    "line": 339,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 340,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "revision",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                                "line": 340,
                                "char": 24
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                            "line": 341,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 332,
                    "last-line": 342,
                    "char": 22
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_DOCUMENTS",
                    "default": {
                        "type": "string",
                        "value": "edge",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 5,
                        "char": 35
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 6,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_EDGES",
                    "default": {
                        "type": "string",
                        "value": "edges",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 6,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_FROM",
                    "default": {
                        "type": "string",
                        "value": "from",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 7,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_TO",
                    "default": {
                        "type": "string",
                        "value": "to",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 8,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_VERTEX",
                    "default": {
                        "type": "string",
                        "value": "vertex",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 9,
                        "char": 35
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 10,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_DIRECTION",
                    "default": {
                        "type": "string",
                        "value": "direction",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                        "line": 10,
                        "char": 41
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
                    "line": 11,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/edgehandler.zep",
        "line": 3,
        "char": 5
    }
]