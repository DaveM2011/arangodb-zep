[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Batch",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "_batchResponse",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_processed",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 6,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_batchParts",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 7,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 8,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_nextBatchPartId",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 9,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_batchPartCursorOptions",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 9,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 10,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_connection",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 11,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_sanitize",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 11,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 12,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_nextId",
                    "default": {
                        "type": "int",
                        "value": "0",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 12,
                        "char": 26
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 13,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "batchSize",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 14,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_documentClass",
                    "default": {
                        "type": "string",
                        "value": "\\\\ArangoDBClient\\\\Document",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 14,
                        "char": 60
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 15,
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
                            "name": "connection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Connection",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 15,
                                "char": 55
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 15,
                            "char": 56
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 15,
                                "char": 76
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 15,
                            "char": 76
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "startCapture",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 17,
                                    "char": 25
                                },
                                {
                                    "variable": "sanitize",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 17,
                                    "char": 35
                                },
                                {
                                    "variable": "batchSize",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 17,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 19,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "startCapture",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 19,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 19,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 20,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "sanitize",
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 20,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 20,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 21,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "batchSize",
                                    "expr": {
                                        "type": "int",
                                        "value": "0",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 21,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 21,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 22,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "options",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "array_merge",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 22,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 22,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 22,
                                                        "char": 50
                                                    },
                                                    "name": "getCursorOptions",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 22,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 22,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 22,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 22,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 23,
                            "char": 15
                        },
                        {
                            "type": "fcall",
                            "expr": {
                                "type": "fcall",
                                "name": "extract",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 23,
                                            "char": 24
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 23,
                                        "char": 24
                                    },
                                    {
                                        "parameter": {
                                            "type": "constant",
                                            "value": "EXTR_IF_EXISTS",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 23,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 23,
                                        "char": 40
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 23,
                                "char": 41
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 24,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_sanitize",
                                    "expr": {
                                        "type": "variable",
                                        "value": "sanitize",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 24,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 24,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 25,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "batchSize",
                                    "expr": {
                                        "type": "variable",
                                        "value": "batchSize",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 25,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 25,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 26,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "greater",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 26,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "batchSize",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 26,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 26,
                                    "char": 28
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 26,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 26,
                                "char": 32
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_batchParts",
                                            "expr": {
                                                "type": "new",
                                                "class": "\\SplFixedArray",
                                                "dynamic": 0,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 27,
                                                                "char": 62
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "batchSize",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 27,
                                                                "char": 72
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 27,
                                                            "char": 72
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 27,
                                                        "char": 72
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 27,
                                                "char": 73
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 27,
                                            "char": 73
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 28,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 29,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 29,
                                    "char": 14
                                },
                                "name": "setConnection",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "connection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 29,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 29,
                                        "char": 39
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 29,
                                "char": 40
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 30,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_batchPartCursorOptions",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Cursor",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 30,
                                                        "char": 70
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_SANITIZE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 30,
                                                        "char": 70
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 30,
                                                    "char": 70
                                                },
                                                "value": {
                                                    "type": "cast",
                                                    "left": "bool",
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 30,
                                                            "char": 84
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_sanitize",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 30,
                                                            "char": 94
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 30,
                                                        "char": 94
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 30,
                                                    "char": 94
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 30,
                                                "char": 94
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 30,
                                        "char": 95
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 30,
                                    "char": 95
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 31,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "startCapture",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 31,
                                    "char": 27
                                },
                                "right": {
                                    "type": "bool",
                                    "value": "true",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 31,
                                    "char": 34
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 31,
                                "char": 34
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 32,
                                            "char": 18
                                        },
                                        "name": "startCapture",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 32,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 33,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 34,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 15,
                    "last-line": 36,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setConnection",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 36,
                                "char": 57
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 36,
                            "char": 58
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 38,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 38,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 39,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 39,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 40,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 37,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 37,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 37,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 36,
                    "last-line": 42,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "startCapture",
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 44,
                                    "char": 14
                                },
                                "name": "activate",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 44,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 45,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 45,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 46,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 43,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 43,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 43,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 42,
                    "last-line": 48,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "stopCapture",
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 50,
                                        "char": 17
                                    },
                                    "name": "isActive",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 50,
                                    "char": 30
                                },
                                "right": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 50,
                                        "char": 37
                                    },
                                    "name": "isCapturing",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 50,
                                    "char": 52
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 50,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 51,
                                            "char": 18
                                        },
                                        "name": "setCapture",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 51,
                                                    "char": 35
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 51,
                                                "char": 35
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 51,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 52,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 52,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 53,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
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
                                                    "value": "Cannot stop capturing with this batch. Batch is not active...",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 54,
                                                    "char": 102
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 54,
                                                "char": 102
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 54,
                                        "char": 103
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 55,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 56,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 49,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 49,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 49,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 48,
                    "last-line": 58,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "isActive",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "activeBatch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 60,
                                    "char": 24
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 62,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "activeBatch",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 62,
                                            "char": 33
                                        },
                                        "name": "getActive",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 62,
                                                        "char": 49
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_connection",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 62,
                                                        "char": 61
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 62,
                                                    "char": 61
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 62,
                                                "char": 61
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 62,
                                        "char": 62
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 62,
                                    "char": 62
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 63,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "activeBatch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 63,
                                    "char": 30
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 63,
                                    "char": 36
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 63,
                                "char": 36
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 64,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 59,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 59,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 58,
                    "last-line": 66,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "isCapturing",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 68,
                                    "char": 21
                                },
                                "name": "getConnectionCaptureMode",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 68,
                                                "char": 52
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 68,
                                                "char": 64
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 68,
                                            "char": 64
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 68,
                                        "char": 64
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 68,
                                "char": 65
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 69,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 67,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 67,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 66,
                    "last-line": 71,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "activate",
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 73,
                                    "char": 14
                                },
                                "name": "setActive",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 73,
                                "char": 26
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 74,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 74,
                                    "char": 14
                                },
                                "name": "setCapture",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "bool",
                                            "value": "true",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 74,
                                            "char": 30
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 74,
                                        "char": 30
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 74,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 75,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 75,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 76,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 72,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 72,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 72,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 71,
                    "last-line": 78,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setActive",
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 80,
                                        "char": 14
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_connection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 80,
                                        "char": 27
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 80,
                                    "char": 27
                                },
                                "name": "setActiveBatch",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 80,
                                            "char": 47
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 80,
                                        "char": 47
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 80,
                                "char": 48
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 81,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 81,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 82,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 79,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 79,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 79,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 78,
                    "last-line": 84,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setCapture",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "state",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 84,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 86,
                                        "char": 14
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_connection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 86,
                                        "char": 27
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 86,
                                    "char": 27
                                },
                                "name": "setCaptureBatch",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "state",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 86,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 86,
                                        "char": 49
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 86,
                                "char": 50
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 87,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 87,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 88,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 85,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 85,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 85,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 84,
                    "last-line": 90,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getActive",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 90,
                                "char": 53
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 90,
                            "char": 54
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 92,
                                    "char": 20
                                },
                                "name": "getActiveBatch",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 92,
                                "char": 37
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 93,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 93,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 94,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 90,
                    "last-line": 96,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getConnectionCaptureMode",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 96,
                                "char": 68
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 96,
                            "char": 69
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 98,
                                    "char": 27
                                },
                                "name": "isInBatchCaptureMode",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 98,
                                "char": 50
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 99,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 97,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 97,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 96,
                    "last-line": 101,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "setBatchRequest",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "state",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 101,
                            "char": 50
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 103,
                                        "char": 14
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_connection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 103,
                                        "char": 27
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 103,
                                    "char": 27
                                },
                                "name": "setBatchRequest",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "state",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 103,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 103,
                                        "char": 49
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 103,
                                "char": 50
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 104,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_processed",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 104,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 104,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 105,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 105,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 106,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 101,
                    "last-line": 108,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "nextBatchPartId",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "batchPartId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 108,
                            "char": 48
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
                                    "property": "_nextBatchPartId",
                                    "expr": {
                                        "type": "variable",
                                        "value": "batchPartId",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 110,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 110,
                                    "char": 49
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 111,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 111,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 112,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 109,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 109,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 109,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 108,
                    "last-line": 114,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "nextBatchPartCursorOptions",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "batchPartCursorOptions",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 114,
                            "char": 70
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
                                    "property": "_batchPartCursorOptions",
                                    "expr": {
                                        "type": "variable",
                                        "value": "batchPartCursorOptions",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 116,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 116,
                                    "char": 67
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 117,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 117,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 118,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 115,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 115,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 115,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 114,
                    "last-line": 120,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "append",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "method",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 120,
                            "char": 34
                        },
                        {
                            "type": "parameter",
                            "name": "request",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 120,
                            "char": 43
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "type",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 122,
                                    "char": 17
                                },
                                {
                                    "variable": "nextNumeric",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 122,
                                    "char": 30
                                },
                                {
                                    "variable": "batchPartId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 122,
                                    "char": 43
                                },
                                {
                                    "variable": "eol",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 122,
                                    "char": 48
                                },
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 122,
                                    "char": 56
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 122,
                                    "char": 66
                                },
                                {
                                    "variable": "batchPart",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 122,
                                    "char": 77
                                },
                                {
                                    "variable": "regs",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 122,
                                    "char": 83
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 124,
                            "char": 18
                        },
                        {
                            "type": "fcall",
                            "expr": {
                                "type": "fcall",
                                "name": "preg_match",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "string",
                                            "value": "%\/_api\/simple\/(?P<simple>\\\\w*)|\/_api\/(?P<direct>\\\\w*)%ix",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 124,
                                            "char": 78
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 124,
                                        "char": 78
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "request",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 124,
                                            "char": 87
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 124,
                                        "char": 87
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "regs",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 124,
                                            "char": 93
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 124,
                                        "char": 93
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 124,
                                "char": 94
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 125,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "isset",
                                        "left": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "regs",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 125,
                                                "char": 24
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "direct",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 125,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 125,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 125,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 125,
                                    "char": 36
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 125,
                                "char": 36
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "regs",
                                            "index-expr": [
                                                {
                                                    "type": "string",
                                                    "value": "direct",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 126,
                                                    "char": 30
                                                }
                                            ],
                                            "expr": {
                                                "type": "string",
                                                "value": "",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 126,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 126,
                                            "char": 36
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 127,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 128,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "type",
                                    "expr": {
                                        "type": "ternary",
                                        "left": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "regs",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 128,
                                                    "char": 25
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "direct",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 128,
                                                    "char": 34
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 128,
                                                "char": 38
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 128,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 128,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "regs",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 128,
                                                "char": 49
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "direct",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 128,
                                                "char": 58
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 128,
                                            "char": 61
                                        },
                                        "extra": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "regs",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 128,
                                                "char": 67
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "simple",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 128,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 128,
                                            "char": 77
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 128,
                                        "char": 77
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 128,
                                    "char": 77
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 129,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "method",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 129,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "GET",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 129,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 129,
                                    "char": 30
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "type",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 129,
                                        "char": 39
                                    },
                                    "right": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "regs",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 129,
                                            "char": 45
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "direct",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 129,
                                            "char": 54
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 129,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 129,
                                    "char": 56
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 129,
                                "char": 56
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "type",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "string",
                                                    "value": "get",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 130,
                                                    "char": 31
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "type",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 130,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 130,
                                                "char": 37
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 130,
                                            "char": 37
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 131,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 132,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 132,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_nextBatchPartId",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 132,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 132,
                                    "char": 37
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 132,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 132,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "is_a",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 133,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_batchParts",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 133,
                                                        "char": 38
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 133,
                                                    "char": 38
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 133,
                                                "char": 38
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "\\\\SplFixedArray",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 133,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 133,
                                                "char": 57
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 133,
                                        "char": 59
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "nextNumeric",
                                                    "expr": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 134,
                                                            "char": 40
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_nextId",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 134,
                                                            "char": 48
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 134,
                                                        "char": 48
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 134,
                                                    "char": 48
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 135,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-incr",
                                                    "variable": "this",
                                                    "property": "_nextId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 135,
                                                    "char": 36
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 136,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "nextNumeric",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "count",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                        "line": 137,
                                                                        "char": 46
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "_batchParts",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                        "line": 137,
                                                                        "char": 58
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 137,
                                                                    "char": 58
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 137,
                                                                "char": 58
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 137,
                                                        "char": 59
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 137,
                                                    "char": 59
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 138,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 139,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "batchPartId",
                                            "expr": {
                                                "type": "variable",
                                                "value": "nextNumeric",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 139,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 139,
                                            "char": 42
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 140,
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
                                            "variable": "batchPartId",
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 141,
                                                    "char": 37
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_nextBatchPartId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 141,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 141,
                                                "char": 54
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 141,
                                            "char": 54
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 142,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_nextBatchPartId",
                                            "expr": {
                                                "type": "null",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 142,
                                                "char": 47
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 142,
                                            "char": 47
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 143,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 144,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "eol",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "HttpHelper",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 144,
                                            "char": 35
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "EOL",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 144,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 144,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 144,
                                    "char": 35
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 145,
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
                                        "type": "concat",
                                        "left": {
                                            "type": "string",
                                            "value": "HTTP\/1.1 202 Accepted",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 145,
                                            "char": 47
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "eol",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 145,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 145,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 145,
                                    "char": 52
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 146,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "string",
                                            "value": "location: \/_db\/_system\/_api\/document\/0\/0",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 146,
                                            "char": 65
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "eol",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 146,
                                            "char": 70
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 146,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 146,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 147,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "string",
                                            "value": "content-type: application\/json; charset=utf-8",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 147,
                                            "char": 70
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "eol",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 147,
                                            "char": 75
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 147,
                                        "char": 75
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 147,
                                    "char": 75
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 148,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "string",
                                            "value": "etag: \\\"0\\\"",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 148,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "eol",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 148,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 148,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 148,
                                    "char": 41
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 149,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "connection: Close",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 149,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "eol",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 149,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 149,
                                            "char": 48
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "eol",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 149,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 149,
                                        "char": 53
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 149,
                                    "char": 53
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 150,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "{\\\"error\\\":false,\\\"_id\\\":\\\"0\/0\\\",\\\"id\\\":\\\"0\\\",\\\"_rev\\\":0,\\\"hasMore\\\":1, \\\"result\\\":[{}], \\\"documents\\\":[{}]}",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 150,
                                                "char": 133
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "eol",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 150,
                                                "char": 139
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 150,
                                            "char": 139
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "eol",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 150,
                                            "char": 144
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 150,
                                        "char": 144
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 150,
                                    "char": 144
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 151,
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
                                        "type": "new",
                                        "class": "HttpResponse",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "result",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 151,
                                                    "char": 48
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 151,
                                                "char": 48
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 151,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 151,
                                    "char": 49
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 152,
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
                                        "type": "new",
                                        "class": "BatchPart",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 152,
                                                    "char": 44
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 152,
                                                "char": 44
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "batchPartId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 152,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 152,
                                                "char": 57
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "type",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 152,
                                                    "char": 63
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 152,
                                                "char": 63
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "request",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 152,
                                                    "char": 72
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 152,
                                                "char": 72
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "response",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 152,
                                                    "char": 82
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 152,
                                                "char": 82
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "key": {
                                                                "type": "string",
                                                                "value": "cursorOptions",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 152,
                                                                "char": 101
                                                            },
                                                            "value": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 152,
                                                                    "char": 108
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "_batchPartCursorOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 152,
                                                                    "char": 132
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 152,
                                                                "char": 132
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 152,
                                                            "char": 132
                                                        },
                                                        {
                                                            "key": {
                                                                "type": "string",
                                                                "value": "_documentClass",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 152,
                                                                "char": 151
                                                            },
                                                            "value": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 152,
                                                                    "char": 158
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "_documentClass",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 152,
                                                                    "char": 173
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 152,
                                                                "char": 173
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 152,
                                                            "char": 173
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 152,
                                                    "char": 174
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 152,
                                                "char": 174
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 152,
                                        "char": 175
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 152,
                                    "char": 175
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 153,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-array-index",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_batchParts",
                                    "index-expr": [
                                        {
                                            "type": "variable",
                                            "value": "batchPartId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 153,
                                            "char": 42
                                        }
                                    ],
                                    "expr": {
                                        "type": "variable",
                                        "value": "batchPart",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 153,
                                        "char": 55
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 153,
                                    "char": 55
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 154,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 154,
                                    "char": 18
                                },
                                "name": "setBatchPart",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "batchPart",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 154,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 154,
                                        "char": 41
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 154,
                                "char": 42
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 155,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "response",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 155,
                                "char": 24
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 156,
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
                                    "value": "HttpResponse",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 121,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 121,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 121,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 120,
                    "last-line": 158,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "splitWithContentIdKey",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "pattern",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 158,
                            "char": 50
                        },
                        {
                            "type": "parameter",
                            "name": "stringg",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 158,
                            "char": 59
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "myArray",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 160,
                                    "char": 20
                                },
                                {
                                    "variable": "exploded",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 160,
                                    "char": 30
                                },
                                {
                                    "variable": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 160,
                                    "char": 35
                                },
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 160,
                                    "char": 42
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 160,
                                    "char": 52
                                },
                                {
                                    "variable": "contentId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 160,
                                    "char": 63
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 162,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "myArray",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 162,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 162,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 163,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "exploded",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "explode",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "pattern",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 163,
                                                    "char": 40
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 163,
                                                "char": 40
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "stringg",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 163,
                                                    "char": 49
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 163,
                                                "char": 49
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 163,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 163,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 164,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "exploded",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 164,
                                "char": 36
                            },
                            "key": "key",
                            "value": "value",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "response",
                                            "expr": {
                                                "type": "new",
                                                "class": "HttpResponse",
                                                "dynamic": 0,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 165,
                                                            "char": 51
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 165,
                                                        "char": 51
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 165,
                                                "char": 52
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 165,
                                            "char": 52
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 166,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "contentId",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "response",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 166,
                                                    "char": 39
                                                },
                                                "name": "getHeader",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "Content-Id",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 166,
                                                            "char": 62
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 166,
                                                        "char": 62
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 166,
                                                "char": 63
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 166,
                                            "char": 63
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 167,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "contentId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 167,
                                            "char": 28
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 167,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 167,
                                        "char": 35
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "myArray",
                                                    "index-expr": [
                                                        {
                                                            "type": "variable",
                                                            "value": "contentId",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 168,
                                                            "char": 38
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 168,
                                                        "char": 47
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 168,
                                                    "char": 47
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 169,
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
                                                    "variable": "myArray",
                                                    "index-expr": [
                                                        {
                                                            "type": "variable",
                                                            "value": "key",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 170,
                                                            "char": 32
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 170,
                                                        "char": 41
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 170,
                                                    "char": 41
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 171,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 172,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 173,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "myArray",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 173,
                                "char": 23
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 174,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 159,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 159,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 158,
                    "last-line": 176,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "process",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 17
                                },
                                {
                                    "variable": "batchParts",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 29
                                },
                                {
                                    "variable": "batchPartResponses",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 178,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 54
                                },
                                {
                                    "variable": "combinedDataHeader",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 74
                                },
                                {
                                    "variable": "partValue",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 85
                                },
                                {
                                    "variable": "partValueId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 98
                                },
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 106
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 111
                                },
                                {
                                    "variable": "body",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 117
                                },
                                {
                                    "variable": "partKey",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 126
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 178,
                                    "char": 136
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 180,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 180,
                                    "char": 17
                                },
                                "name": "isCapturing",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 180,
                                "char": 32
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 181,
                                            "char": 18
                                        },
                                        "name": "stopCapture",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 181,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 182,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 183,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 183,
                                    "char": 14
                                },
                                "name": "setBatchRequest",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "bool",
                                            "value": "true",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 183,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 183,
                                        "char": 35
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 183,
                                "char": 36
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 184,
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
                                        "type": "string",
                                        "value": "",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 184,
                                        "char": 22
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 184,
                                    "char": 22
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 185,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "batchParts",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 185,
                                            "char": 32
                                        },
                                        "name": "getBatchParts",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 185,
                                        "char": 48
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 185,
                                    "char": 48
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 186,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "fcall",
                                    "name": "count",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "batchParts",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 186,
                                                "char": 28
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 186,
                                            "char": 28
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 186,
                                    "char": 32
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 186,
                                    "char": 36
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 186,
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
                                                    "value": "Can't process empty batch.",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 187,
                                                    "char": 67
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 187,
                                                "char": 67
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 187,
                                        "char": 68
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 188,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 189,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "combinedDataHeader",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "--",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 189,
                                                "char": 40
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "HttpHelper",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 189,
                                                    "char": 68
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "MIME_BOUNDARY",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 189,
                                                    "char": 68
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 189,
                                                "char": 68
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 189,
                                            "char": 68
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "HttpHelper",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 189,
                                                "char": 85
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "EOL",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 189,
                                                "char": 85
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 189,
                                            "char": 85
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 189,
                                        "char": 85
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 189,
                                    "char": 85
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 190,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "combinedDataHeader",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "string",
                                            "value": "Content-Type: application\/x-arango-batchpart",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 190,
                                            "char": 81
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "HttpHelper",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 190,
                                                "char": 98
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "EOL",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 190,
                                                "char": 98
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 190,
                                            "char": 98
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 190,
                                        "char": 98
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 190,
                                    "char": 98
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 191,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "batchParts",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 191,
                                "char": 37
                            },
                            "value": "partValue",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "partValue",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 192,
                                            "char": 28
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 192,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 192,
                                        "char": 35
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "data",
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "combinedDataHeader",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 193,
                                                        "char": 46
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 193,
                                                    "char": 46
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 194,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "partValueId",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "partValue",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 194,
                                                            "char": 46
                                                        },
                                                        "name": "getId",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 194,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 194,
                                                    "char": 54
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 195,
                                            "char": 18
                                        },
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "not-identical",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "partValueId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 195,
                                                    "char": 34
                                                },
                                                "right": {
                                                    "type": "null",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 195,
                                                    "char": 41
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 195,
                                                "char": 41
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "concat-assign",
                                                            "variable": "data",
                                                            "expr": {
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "concat",
                                                                    "left": {
                                                                        "type": "string",
                                                                        "value": "Content-Id: ",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                        "line": 196,
                                                                        "char": 47
                                                                    },
                                                                    "right": {
                                                                        "type": "cast",
                                                                        "left": "string",
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "partValueId",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                            "line": 196,
                                                                            "char": 70
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                        "line": 196,
                                                                        "char": 70
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 196,
                                                                    "char": 70
                                                                },
                                                                "right": {
                                                                    "type": "static-constant-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "HttpHelper",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                        "line": 196,
                                                                        "char": 93
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "SEPARATOR",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                        "line": 196,
                                                                        "char": 93
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 196,
                                                                    "char": 93
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 196,
                                                                "char": 93
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 196,
                                                            "char": 93
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 197,
                                                    "char": 17
                                                }
                                            ],
                                            "else_statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "concat-assign",
                                                            "variable": "data",
                                                            "expr": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "HttpHelper",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 198,
                                                                    "char": 47
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "EOL",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 198,
                                                                    "char": 47
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 198,
                                                                "char": 47
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 198,
                                                            "char": 47
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 199,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 200,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "data",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "cast",
                                                            "left": "string",
                                                            "right": {
                                                                "type": "mcall",
                                                                "variable": {
                                                                    "type": "variable",
                                                                    "value": "partValue",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                    "line": 200,
                                                                    "char": 47
                                                                },
                                                                "name": "getRequest",
                                                                "call-type": 1,
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 200,
                                                                "char": 61
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 200,
                                                            "char": 61
                                                        },
                                                        "right": {
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "HttpHelper",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 200,
                                                                "char": 78
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "EOL",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 200,
                                                                "char": 78
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 200,
                                                            "char": 78
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 200,
                                                        "char": 78
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 200,
                                                    "char": 78
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 201,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 202,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 203,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "data",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "string",
                                                    "value": "--",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 203,
                                                    "char": 25
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "HttpHelper",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 203,
                                                        "char": 53
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "MIME_BOUNDARY",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 203,
                                                        "char": 53
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 203,
                                                    "char": 53
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 203,
                                                "char": 53
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "--",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 203,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 203,
                                            "char": 60
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "HttpHelper",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 203,
                                                "char": 83
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "SEPARATOR",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 203,
                                                "char": 83
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 203,
                                            "char": 83
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 203,
                                        "char": 83
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 203,
                                    "char": 83
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 204,
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
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 204,
                                        "char": 25
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 204,
                                    "char": 25
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 205,
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
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Urls",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 205,
                                                        "char": 62
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_BATCH",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 205,
                                                        "char": 62
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 205,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 205,
                                                "char": 62
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 205,
                                                    "char": 70
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 205,
                                                "char": 70
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 205,
                                        "char": 71
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 205,
                                    "char": 71
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 206,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_batchResponse",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 206,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 206,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 206,
                                            "char": 55
                                        },
                                        "name": "post",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 206,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 206,
                                                "char": 64
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "data",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 206,
                                                    "char": 70
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 206,
                                                "char": 70
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 206,
                                        "char": 71
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 206,
                                    "char": 71
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 207,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 207,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_batchResponse",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 207,
                                            "char": 33
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 207,
                                        "char": 33
                                    },
                                    "name": "getHttpCode",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 207,
                                    "char": 50
                                },
                                "right": {
                                    "type": "int",
                                    "value": "200",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 207,
                                    "char": 56
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 207,
                                "char": 56
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 208,
                                            "char": 25
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_batchResponse",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 208,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 208,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 209,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 210,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "body",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 210,
                                                "char": 26
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_batchResponse",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 210,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 210,
                                            "char": 42
                                        },
                                        "name": "getBody",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 210,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 210,
                                    "char": 52
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 211,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "body",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "trim",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "body",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 211,
                                                    "char": 30
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 211,
                                                "char": 30
                                            },
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "--",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 211,
                                                            "char": 37
                                                        },
                                                        "right": {
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "HttpHelper",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 211,
                                                                "char": 65
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "MIME_BOUNDARY",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 211,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 211,
                                                            "char": 65
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 211,
                                                        "char": 65
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "--",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 211,
                                                        "char": 71
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 211,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 211,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 211,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 211,
                                    "char": 72
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 212,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "batchParts",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 212,
                                            "char": 32
                                        },
                                        "name": "splitWithContentIdKey",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "--",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 212,
                                                            "char": 60
                                                        },
                                                        "right": {
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "HttpHelper",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 212,
                                                                "char": 88
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "MIME_BOUNDARY",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                                "line": 212,
                                                                "char": 88
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 212,
                                                            "char": 88
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 212,
                                                        "char": 88
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "HttpHelper",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 212,
                                                            "char": 105
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "EOL",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 212,
                                                            "char": 105
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 212,
                                                        "char": 105
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 212,
                                                    "char": 105
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 212,
                                                "char": 105
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "body",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 212,
                                                    "char": 111
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 212,
                                                "char": 111
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 212,
                                        "char": 112
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 212,
                                    "char": 112
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 213,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "batchParts",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 213,
                                "char": 46
                            },
                            "key": "partKey",
                            "value": "partValue",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "response",
                                            "expr": {
                                                "type": "new",
                                                "class": "HttpResponse",
                                                "dynamic": 0,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "partValue",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 214,
                                                            "char": 55
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 214,
                                                        "char": 55
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 214,
                                                "char": 56
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 214,
                                            "char": 56
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 215,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "body",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "response",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 215,
                                                    "char": 34
                                                },
                                                "name": "getBody",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 215,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 215,
                                            "char": 44
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 216,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "response",
                                            "expr": {
                                                "type": "new",
                                                "class": "HttpResponse",
                                                "dynamic": 0,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "body",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                            "line": 216,
                                                            "char": 50
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 216,
                                                        "char": 50
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 216,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 216,
                                            "char": 51
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 217,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "batchPartResponses",
                                            "index-expr": [
                                                {
                                                    "type": "variable",
                                                    "value": "partKey",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 217,
                                                    "char": 43
                                                }
                                            ],
                                            "expr": {
                                                "type": "variable",
                                                "value": "response",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 217,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 217,
                                            "char": 55
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 218,
                                    "char": 16
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 218,
                                                "char": 18
                                            },
                                            "name": "getPart",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "partKey",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 218,
                                                        "char": 34
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 218,
                                                    "char": 34
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 218,
                                            "char": 36
                                        },
                                        "name": "setResponse",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "batchPartResponses",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 218,
                                                        "char": 67
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "partKey",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                        "line": 218,
                                                        "char": 75
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 218,
                                                    "char": 76
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 218,
                                                "char": 76
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 218,
                                        "char": 77
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 219,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 220,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 220,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 221,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 176,
                    "last-line": 223,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "countParts",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "count",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 225,
                                                "char": 27
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_batchParts",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 225,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 225,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 225,
                                        "char": 39
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 225,
                                "char": 40
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 226,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 224,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 224,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 223,
                    "last-line": 228,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getPart",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "partId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 228,
                            "char": 35
                        }
                    ],
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 230,
                                                "char": 24
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_batchParts",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 230,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 230,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "partId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 230,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 230,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 230,
                                    "char": 45
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 230,
                                "char": 45
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
                                                    "value": "Request batch part does not exist.",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                    "line": 231,
                                                    "char": 75
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 231,
                                                "char": 75
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 231,
                                        "char": 76
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 232,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 233,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 233,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_batchParts",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 233,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 233,
                                    "char": 33
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "partId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 233,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 233,
                                "char": 41
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 234,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 228,
                    "last-line": 236,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getPartResponse",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "partId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 236,
                            "char": 43
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 238,
                                        "char": 21
                                    },
                                    "name": "getPart",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "partId",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 238,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 238,
                                            "char": 36
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 238,
                                    "char": 38
                                },
                                "name": "getResponse",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 238,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 239,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 236,
                    "last-line": 241,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getProcessedPartResponse",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "partId",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 241,
                            "char": 52
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 243,
                                        "char": 21
                                    },
                                    "name": "getPart",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "partId",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                                "line": 243,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                            "line": 243,
                                            "char": 36
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 243,
                                    "char": 38
                                },
                                "name": "getProcessedResponse",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 243,
                                "char": 61
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 244,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 241,
                    "last-line": 246,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getBatchParts",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 248,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_batchParts",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 248,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 248,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 249,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 247,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 247,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 246,
                    "last-line": 251,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getCursorOptions",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 253,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_batchPartCursorOptions",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 253,
                                    "char": 45
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 253,
                                "char": 45
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 254,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 252,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 252,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 251,
                    "last-line": 256,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 258,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 258,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 258,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 259,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 257,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 257,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 257,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 256,
                    "last-line": 261,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setDocumentClass",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "classs",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 261,
                            "char": 51
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
                                    "property": "_documentClass",
                                    "expr": {
                                        "type": "variable",
                                        "value": "classs",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                        "line": 263,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 263,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 264,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 264,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                            "line": 265,
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
                                    "value": "Batch",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                    "line": 262,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                                "line": 262,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                        "line": 262,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
                    "line": 261,
                    "last-line": 267,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/batch.zep",
        "line": 3,
        "char": 5
    }
]