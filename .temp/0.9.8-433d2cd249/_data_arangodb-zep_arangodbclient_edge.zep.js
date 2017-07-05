[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Edge",
        "abstract": 0,
        "final": 0,
        "extends": "Document",
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_from",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_to",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 7,
                    "char": 9
                }
            ],
            "methods": [
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
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 9,
                            "char": 35
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 9,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 11,
                                    "char": 17
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_doValidate",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 11,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 11,
                                "char": 30
                            },
                            "statements": [
                                {
                                    "type": "scall",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "ValueValidator",
                                        "dynamic": 0,
                                        "name": "validate",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 12,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 12,
                                                "char": 43
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 12,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 13,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 14,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 14,
                                        "char": 15
                                    },
                                    "right": {
                                        "type": "int",
                                        "value": "0",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 14,
                                        "char": 17
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 14,
                                    "char": 21
                                },
                                "right": {
                                    "type": "char",
                                    "value": "_",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 14,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 14,
                                "char": 27
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 15,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 15,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_ID",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 15,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 15,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 15,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 16,
                                                    "char": 22
                                                },
                                                "name": "setInternalId",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                            "line": 16,
                                                            "char": 42
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 16,
                                                        "char": 42
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 16,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 17,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 18,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 19,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 19,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 19,
                                                "char": 40
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_KEY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 19,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 19,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 19,
                                        "char": 40
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 20,
                                                    "char": 22
                                                },
                                                "name": "setInternalKey",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                            "line": 20,
                                                            "char": 43
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 20,
                                                        "char": 43
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 20,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 21,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 22,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 23,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 23,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 23,
                                                "char": 40
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_REV",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 23,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 23,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 23,
                                        "char": 40
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 24,
                                                    "char": 22
                                                },
                                                "name": "setRevision",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                            "line": 24,
                                                            "char": 40
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 24,
                                                        "char": 40
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 24,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 25,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 26,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 27,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 27,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 27,
                                                "char": 41
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_FROM",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 27,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 27,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 27,
                                        "char": 41
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 28,
                                                    "char": 22
                                                },
                                                "name": "setFrom",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                            "line": 28,
                                                            "char": 36
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 28,
                                                        "char": 36
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 28,
                                                "char": 37
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 29,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 30,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 31,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 31,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 31,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_TO",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 31,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 31,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 31,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 32,
                                                    "char": 22
                                                },
                                                "name": "setTo",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                            "line": 32,
                                                            "char": 34
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 32,
                                                        "char": 34
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 32,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 33,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 34,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 35,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 36,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 36,
                                            "char": 19
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_changed",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 36,
                                            "char": 28
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 36,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 36,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 36,
                                "char": 30
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "or",
                                        "left": {
                                            "type": "not",
                                            "left": {
                                                "type": "list",
                                                "left": {
                                                    "type": "isset",
                                                    "left": {
                                                        "type": "array-access",
                                                        "left": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                                "line": 37,
                                                                "char": 29
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "_values",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                                "line": 37,
                                                                "char": 37
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                            "line": 37,
                                                            "char": 37
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "key",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                            "line": 37,
                                                            "char": 41
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 37,
                                                        "char": 42
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 37,
                                                    "char": 42
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 37,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 37,
                                            "char": 45
                                        },
                                        "right": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 37,
                                                        "char": 52
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_values",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 37,
                                                        "char": 60
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 37,
                                                    "char": 60
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 37,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 37,
                                                "char": 68
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                "line": 37,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 37,
                                            "char": 76
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 37,
                                        "char": 76
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "_changed",
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "true",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                        "line": 38,
                                                        "char": 43
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                                    "line": 38,
                                                    "char": 43
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 39,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 40,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 41,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-array-index",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_values",
                                    "index-expr": [
                                        {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 41,
                                            "char": 30
                                        }
                                    ],
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 41,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 41,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 42,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 9,
                    "last-line": 44,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setFrom",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "from",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 44,
                            "char": 33
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
                                    "property": "_from",
                                    "expr": {
                                        "type": "variable",
                                        "value": "from",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 46,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 46,
                                    "char": 31
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 47,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 47,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 48,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 45,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 45,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                        "line": 45,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 44,
                    "last-line": 50,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getFrom",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 52,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_from",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 52,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 52,
                                "char": 27
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 53,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 50,
                    "last-line": 55,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setTo",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "to",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 55,
                            "char": 29
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
                                    "property": "_to",
                                    "expr": {
                                        "type": "variable",
                                        "value": "to",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 57,
                                        "char": 27
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 57,
                                    "char": 27
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 58,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 58,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 59,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 56,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 56,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                        "line": 56,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 55,
                    "last-line": 61,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getTo",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 63,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_to",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 63,
                                    "char": 25
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 63,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 64,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 61,
                    "last-line": 66,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getAllForInsertUpdate",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 68,
                                    "char": 17
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 70,
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
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "parent",
                                        "dynamic": 0,
                                        "name": "getAllForInsertUpdate",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 70,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 70,
                                    "char": 52
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 71,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "array-index",
                                    "operator": "assign",
                                    "variable": "data",
                                    "index-expr": [
                                        {
                                            "type": "string",
                                            "value": "_from",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 71,
                                            "char": 25
                                        }
                                    ],
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 71,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_from",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 71,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 71,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 71,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 72,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "array-index",
                                    "operator": "assign",
                                    "variable": "data",
                                    "index-expr": [
                                        {
                                            "type": "string",
                                            "value": "_to",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 72,
                                            "char": 23
                                        }
                                    ],
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 72,
                                            "char": 32
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_to",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                            "line": 72,
                                            "char": 36
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                        "line": 72,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                    "line": 72,
                                    "char": 36
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 73,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "data",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                                "line": 73,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                            "line": 74,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 66,
                    "last-line": 76,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_FROM",
                    "default": {
                        "type": "string",
                        "value": "_from",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                        "line": 7,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_TO",
                    "default": {
                        "type": "string",
                        "value": "_to",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                        "line": 8,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
                    "line": 9,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/edge.zep",
        "line": 3,
        "char": 5
    }
]