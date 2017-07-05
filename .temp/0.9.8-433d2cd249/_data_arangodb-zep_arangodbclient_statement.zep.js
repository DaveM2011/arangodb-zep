[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Statement",
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
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_bindVars",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_batchSize",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 8,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_doCount",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 8,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 9,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_fullCount",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 9,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 10,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_query",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 11,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_flat",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 11,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 12,
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
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 12,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 13,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_retries",
                    "default": {
                        "type": "int",
                        "value": "0",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 13,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 14,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_cache",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 15,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "resultType",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 16,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_documentClass",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 17,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 23,
                                "char": 55
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 23,
                            "char": 56
                        },
                        {
                            "type": "parameter",
                            "name": "data",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 23,
                            "char": 68
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 25,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 25,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 26,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_bindVars",
                                    "expr": {
                                        "type": "new",
                                        "class": "BindVars",
                                        "dynamic": 0,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 26,
                                        "char": 46
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 26,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 27,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 27,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 27,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_QUERY",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 27,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 27,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 27,
                                    "char": 42
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 27,
                                "char": 42
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 28,
                                            "char": 18
                                        },
                                        "name": "setQuery",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 28,
                                                        "char": 32
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 28,
                                                            "char": 50
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_QUERY",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 28,
                                                            "char": 50
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 28,
                                                        "char": 50
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 28,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 28,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 28,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 29,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 30,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 30,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_COUNT",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 30,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 30,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 30,
                                    "char": 42
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 30,
                                "char": 42
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 31,
                                            "char": 18
                                        },
                                        "name": "setCount",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 31,
                                                        "char": 32
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 31,
                                                            "char": 50
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_COUNT",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 31,
                                                            "char": 50
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 31,
                                                        "char": 50
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 31,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 31,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 31,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 32,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 33,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 33,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 33,
                                            "char": 44
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_BATCHSIZE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 33,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 33,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 33,
                                    "char": 46
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 33,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 34,
                                            "char": 18
                                        },
                                        "name": "setBatchSize",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 34,
                                                        "char": 36
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 34,
                                                            "char": 58
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_BATCHSIZE",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 34,
                                                            "char": 58
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 34,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 34,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 34,
                                                "char": 59
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 34,
                                        "char": 60
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 35,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 36,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 36,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 36,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_BINDVARS",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 36,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 36,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 36,
                                    "char": 45
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 36,
                                "char": 45
                            },
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 37,
                                                "char": 18
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_bindVars",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 37,
                                                "char": 29
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 37,
                                            "char": 29
                                        },
                                        "name": "set",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 37,
                                                        "char": 38
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 37,
                                                            "char": 59
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_BINDVARS",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 37,
                                                            "char": 59
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 37,
                                                        "char": 59
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 37,
                                                    "char": 60
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 37,
                                                "char": 60
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 37,
                                        "char": 61
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 38,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 39,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 39,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 39,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FULL_COUNT",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 39,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 39,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 39,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 39,
                                "char": 41
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_fullCount",
                                            "expr": {
                                                "type": "cast",
                                                "left": "bool",
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 40,
                                                        "char": 48
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Cursor",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 40,
                                                            "char": 67
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FULL_COUNT",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 40,
                                                            "char": 67
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 40,
                                                        "char": 67
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 40,
                                                    "char": 68
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 40,
                                                "char": 68
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 40,
                                            "char": 68
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 41,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 42,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 42,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Cursor",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 42,
                                            "char": 45
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_SANITIZE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 42,
                                            "char": 45
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 42,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 42,
                                    "char": 47
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 42,
                                "char": 47
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_sanitize",
                                            "expr": {
                                                "type": "cast",
                                                "left": "bool",
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 43,
                                                        "char": 47
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Cursor",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 43,
                                                            "char": 70
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_SANITIZE",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 43,
                                                            "char": 70
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 43,
                                                        "char": 70
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 43,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 43,
                                                "char": 71
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 43,
                                            "char": 71
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 44,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 45,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 45,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 45,
                                            "char": 42
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_RETRIES",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 45,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 45,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 45,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 45,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_retries",
                                            "expr": {
                                                "type": "cast",
                                                "left": "int",
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 46,
                                                        "char": 45
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 46,
                                                            "char": 65
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_RETRIES",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 46,
                                                            "char": 65
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 46,
                                                        "char": 65
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 46,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 46,
                                                "char": 66
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 46,
                                            "char": 66
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 47,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 48,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 48,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Cursor",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 48,
                                            "char": 41
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_FLAT",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 48,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 48,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 48,
                                    "char": 43
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 48,
                                "char": 43
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_flat",
                                            "expr": {
                                                "type": "cast",
                                                "left": "bool",
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 49,
                                                        "char": 43
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Cursor",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 49,
                                                            "char": 62
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_FLAT",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 49,
                                                            "char": 62
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 49,
                                                        "char": 62
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 49,
                                                    "char": 63
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 49,
                                                "char": 63
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 49,
                                            "char": 63
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 50,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 51,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 51,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Cursor",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 51,
                                            "char": 42
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_CACHE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 51,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 51,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 51,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 51,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_cache",
                                            "expr": {
                                                "type": "cast",
                                                "left": "bool",
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 52,
                                                        "char": 44
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Cursor",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 52,
                                                            "char": 64
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_CACHE",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 52,
                                                            "char": 64
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 52,
                                                        "char": 64
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 52,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 52,
                                                "char": 65
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 52,
                                            "char": 65
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 53,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 54,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 24,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 23,
                    "last-line": 56,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 58,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 58,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 58,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
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
                                    "value": "Connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 57,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 57,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 57,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 56,
                    "last-line": 61,
                    "char": 22
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
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 63,
                                    "char": 17
                                },
                                {
                                    "variable": "tries",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 63,
                                    "char": 24
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 63,
                                    "char": 34
                                },
                                {
                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 63,
                                    "char": 76
                                },
                                {
                                    "variable": "e",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 63,
                                    "char": 79
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 65,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_string",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 65,
                                                        "char": 29
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_query",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 65,
                                                        "char": 36
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 65,
                                                    "char": 36
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 65,
                                                "char": 36
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 65,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 65,
                                    "char": 39
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 65,
                                "char": 39
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
                                                    "value": "Query should be a string",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 66,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 66,
                                                "char": 65
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 66,
                                        "char": 66
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 67,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 68,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 68,
                                            "char": 26
                                        },
                                        "name": "buildData",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 68,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 68,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 69,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tries",
                                    "expr": {
                                        "type": "int",
                                        "value": "0",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 69,
                                        "char": 22
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 69,
                                    "char": 22
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 70,
                            "char": 13
                        },
                        {
                            "type": "while",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "bool",
                                    "value": "true",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 70,
                                    "char": 20
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 70,
                                "char": 22
                            },
                            "statements": [
                                {
                                    "type": "try-catch",
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                                    "expr": {
                                                        "type": "empty-array",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 72,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 72,
                                                    "char": 66
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 73,
                                            "char": 19
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 73,
                                                                "char": 38
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "_connection",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 73,
                                                                "char": 51
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 73,
                                                            "char": 51
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
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                        "line": 73,
                                                                        "char": 73
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "URL_CURSOR",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                        "line": 73,
                                                                        "char": 73
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                    "line": 73,
                                                                    "char": 73
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 73,
                                                                "char": 73
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "mcall",
                                                                    "variable": {
                                                                        "type": "mcall",
                                                                        "variable": {
                                                                            "type": "variable",
                                                                            "value": "this",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                            "line": 73,
                                                                            "char": 80
                                                                        },
                                                                        "name": "getConnection",
                                                                        "call-type": 1,
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                        "line": 73,
                                                                        "char": 97
                                                                    },
                                                                    "name": "json_encode_wrapper",
                                                                    "call-type": 1,
                                                                    "parameters": [
                                                                        {
                                                                            "parameter": {
                                                                                "type": "variable",
                                                                                "value": "data",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                                "line": 73,
                                                                                "char": 122
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                            "line": 73,
                                                                            "char": 122
                                                                        }
                                                                    ],
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                    "line": 73,
                                                                    "char": 123
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 73,
                                                                "char": 123
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "tmpArray40cd750bba9870f18aada2478b24840a",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                    "line": 73,
                                                                    "char": 165
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 73,
                                                                "char": 165
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 73,
                                                        "char": 166
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 73,
                                                    "char": 166
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 74,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "new",
                                                "class": "Cursor",
                                                "dynamic": 0,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 74,
                                                                "char": 40
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "_connection",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 74,
                                                                "char": 52
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 74,
                                                            "char": 52
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 74,
                                                        "char": 52
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "response",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 74,
                                                                "char": 63
                                                            },
                                                            "name": "getJson",
                                                            "call-type": 1,
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 74,
                                                            "char": 73
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 74,
                                                        "char": 73
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 74,
                                                                "char": 80
                                                            },
                                                            "name": "getCursorOptions",
                                                            "call-type": 1,
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 74,
                                                            "char": 99
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 74,
                                                        "char": 99
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 74,
                                                "char": 100
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 75,
                                            "char": 13
                                        }
                                    ],
                                    "catches": [
                                        {
                                            "classes": [
                                                {
                                                    "type": "variable",
                                                    "value": "ServerException",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 75,
                                                    "char": 36
                                                }
                                            ],
                                            "variable": {
                                                "type": "variable",
                                                "value": "e",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 84,
                                                "char": 9
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "incr",
                                                            "variable": "tries",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 76,
                                                            "char": 28
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 77,
                                                    "char": 18
                                                },
                                                {
                                                    "type": "if",
                                                    "expr": {
                                                        "type": "greater-equal",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "tries",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 77,
                                                            "char": 26
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 77,
                                                                "char": 33
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "_retries",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 77,
                                                                "char": 43
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 77,
                                                            "char": 43
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 77,
                                                        "char": 43
                                                    },
                                                    "statements": [
                                                        {
                                                            "type": "throw",
                                                            "expr": {
                                                                "type": "variable",
                                                                "value": "e",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 78,
                                                                "char": 28
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 79,
                                                            "char": 17
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 80,
                                                    "char": 18
                                                },
                                                {
                                                    "type": "if",
                                                    "expr": {
                                                        "type": "not-identical",
                                                        "left": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "e",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 80,
                                                                "char": 22
                                                            },
                                                            "name": "getServerCode",
                                                            "call-type": 1,
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 80,
                                                            "char": 41
                                                        },
                                                        "right": {
                                                            "type": "int",
                                                            "value": "29",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 80,
                                                            "char": 46
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 80,
                                                        "char": 46
                                                    },
                                                    "statements": [
                                                        {
                                                            "type": "throw",
                                                            "expr": {
                                                                "type": "variable",
                                                                "value": "e",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 81,
                                                                "char": 28
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 82,
                                                            "char": 17
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 83,
                                                    "char": 13
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 84,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 84,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 85,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 86,
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
                                    "value": "Cursor",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 62,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 62,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 62,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 61,
                    "last-line": 88,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "explain",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 90,
                                    "char": 17
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 90,
                                    "char": 27
                                },
                                {
                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 90,
                                    "char": 69
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 92,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 92,
                                            "char": 26
                                        },
                                        "name": "buildData",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 92,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 92,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 93,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 93,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 93,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 94,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 94,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 94,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 94,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 94,
                                                        "char": 66
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_EXPLAIN",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 94,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 94,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 94,
                                                "char": 66
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 94,
                                                            "char": 73
                                                        },
                                                        "name": "getConnection",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 94,
                                                        "char": 90
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 94,
                                                                "char": 115
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 94,
                                                            "char": 115
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 94,
                                                    "char": 116
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 94,
                                                "char": 116
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray40cd750bba9870f18aada2478b24840a",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 94,
                                                    "char": 158
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 94,
                                                "char": 158
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 94,
                                        "char": 159
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 94,
                                    "char": 159
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 95,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 95,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 95,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 96,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 89,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 89,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 88,
                    "last-line": 98,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "validate",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 100,
                                    "char": 17
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 100,
                                    "char": 27
                                },
                                {
                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 100,
                                    "char": 69
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 102,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 102,
                                            "char": 26
                                        },
                                        "name": "buildData",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 102,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 102,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 103,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 103,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 103,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 104,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 104,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 104,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 104,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 104,
                                                        "char": 64
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 104,
                                                        "char": 64
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 104,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 104,
                                                "char": 64
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 104,
                                                            "char": 71
                                                        },
                                                        "name": "getConnection",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 104,
                                                        "char": 88
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 104,
                                                                "char": 113
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 104,
                                                            "char": 113
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 104,
                                                    "char": 114
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 104,
                                                "char": 114
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray40cd750bba9870f18aada2478b24840a",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 104,
                                                    "char": 156
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 104,
                                                "char": 156
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 104,
                                        "char": 157
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 104,
                                    "char": 157
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 105,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 105,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 105,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 106,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 99,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 99,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 98,
                    "last-line": 108,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__invoke",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "args",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 108,
                            "char": 34
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 110,
                                    "char": 21
                                },
                                "name": "execute",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 110,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 111,
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
                                    "value": "Cursor",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 109,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 109,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 109,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 108,
                    "last-line": 113,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 115,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_query",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 115,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 115,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 116,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 114,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 114,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 113,
                    "last-line": 118,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "bind",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 118,
                            "char": 29
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 118,
                                "char": 43
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 118,
                            "char": 43
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 120,
                                        "char": 14
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_bindVars",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 120,
                                        "char": 25
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 120,
                                    "char": 25
                                },
                                "name": "set",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 120,
                                            "char": 33
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 120,
                                        "char": 33
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 120,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 120,
                                        "char": 40
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 120,
                                "char": 41
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 121,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 118,
                    "last-line": 123,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getBindVars",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 125,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_bindVars",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 125,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 125,
                                    "char": 32
                                },
                                "name": "getAll",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 125,
                                "char": 41
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 126,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 124,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 124,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 123,
                    "last-line": 128,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setQuery",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "query",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 128,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_string",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "query",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 130,
                                                    "char": 29
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 130,
                                                "char": 29
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 130,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 130,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 130,
                                "char": 32
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
                                                    "value": "Query should be a string",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 131,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 131,
                                                "char": 65
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 131,
                                        "char": 66
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 132,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 133,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_query",
                                    "expr": {
                                        "type": "variable",
                                        "value": "query",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 133,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 133,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 134,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 128,
                    "last-line": 136,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getQuery",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 138,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_query",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 138,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 138,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 139,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 137,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 137,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 136,
                    "last-line": 141,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setResultType",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "resultType",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 141,
                            "char": 45
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
                                    "property": "resultType",
                                    "expr": {
                                        "type": "variable",
                                        "value": "resultType",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 143,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 143,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 144,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 144,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "resultType",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 144,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 144,
                                "char": 32
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 145,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 142,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 142,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 141,
                    "last-line": 147,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setCount",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 147,
                            "char": 40
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
                                    "property": "_doCount",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 149,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 149,
                                    "char": 35
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 150,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 147,
                    "last-line": 152,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getCount",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 154,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_doCount",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 154,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 154,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 155,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 153,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 153,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 152,
                    "last-line": 157,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setFullCount",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 157,
                            "char": 44
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
                                    "property": "_fullCount",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 159,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 159,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 160,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 157,
                    "last-line": 162,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getFullCount",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 164,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_fullCount",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 164,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 164,
                                "char": 32
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 163,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 163,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 162,
                    "last-line": 167,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setCache",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 167,
                            "char": 40
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
                                    "property": "_cache",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 169,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 169,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 170,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 167,
                    "last-line": 172,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getCache",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 174,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_cache",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 174,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 174,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 175,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 173,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 173,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 172,
                    "last-line": 177,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setBatchSize",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 177,
                            "char": 43
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
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
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 179,
                                                    "char": 25
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 179,
                                                "char": 25
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 179,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 179,
                                    "char": 28
                                },
                                "right": {
                                    "type": "less-equal",
                                    "left": {
                                        "type": "cast",
                                        "left": "int",
                                        "right": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 179,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 179,
                                        "char": 42
                                    },
                                    "right": {
                                        "type": "int",
                                        "value": "0",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 179,
                                        "char": 46
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 179,
                                    "char": 46
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 179,
                                "char": 46
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
                                                    "value": "Batch size should be a positive integer",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 180,
                                                    "char": 80
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 180,
                                                "char": 80
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 180,
                                        "char": 81
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 181,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 182,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_batchSize",
                                    "expr": {
                                        "type": "cast",
                                        "left": "int",
                                        "right": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 182,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 182,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 182,
                                    "char": 44
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 183,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 177,
                    "last-line": 185,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getBatchSize",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 187,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_batchSize",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 187,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 187,
                                "char": 32
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 188,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 186,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 186,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 185,
                    "last-line": 190,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "buildData",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 192,
                                    "char": 17
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 194,
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
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 194,
                                                        "char": 40
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_QUERY",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 194,
                                                        "char": 40
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 194,
                                                    "char": 40
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 194,
                                                        "char": 47
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_query",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 194,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 194,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 194,
                                                "char": 54
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 194,
                                                        "char": 74
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_COUNT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 194,
                                                        "char": 74
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 194,
                                                    "char": 74
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 194,
                                                        "char": 81
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_doCount",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 194,
                                                        "char": 90
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 194,
                                                    "char": 90
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 194,
                                                "char": 90
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 194,
                                                    "char": 102
                                                },
                                                "value": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "key": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                    "line": 194,
                                                                    "char": 122
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "FULL_COUNT",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                    "line": 194,
                                                                    "char": 122
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 194,
                                                                "char": 122
                                                            },
                                                            "value": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                    "line": 194,
                                                                    "char": 129
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "_fullCount",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                    "line": 194,
                                                                    "char": 140
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                                "line": 194,
                                                                "char": 140
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 194,
                                                            "char": 140
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 194,
                                                    "char": 141
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 194,
                                                "char": 141
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 194,
                                        "char": 142
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 194,
                                    "char": 142
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 195,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 195,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_cache",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 195,
                                        "char": 27
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 195,
                                    "char": 27
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 195,
                                    "char": 34
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 195,
                                "char": 34
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "data",
                                            "index-expr": [
                                                {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Cursor",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 196,
                                                        "char": 41
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_CACHE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 196,
                                                        "char": 41
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 196,
                                                    "char": 41
                                                }
                                            ],
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 196,
                                                    "char": 50
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_cache",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 196,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 196,
                                                "char": 57
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 196,
                                            "char": 57
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 197,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 198,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "greater",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 198,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_bindVars",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 198,
                                            "char": 28
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 198,
                                        "char": 28
                                    },
                                    "name": "getCount",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 198,
                                    "char": 40
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 198,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 198,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "data",
                                            "index-expr": [
                                                {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 199,
                                                        "char": 42
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_BINDVARS",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 199,
                                                        "char": 42
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 199,
                                                    "char": 42
                                                }
                                            ],
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 199,
                                                        "char": 52
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_bindVars",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 199,
                                                        "char": 63
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 199,
                                                    "char": 63
                                                },
                                                "name": "getAll",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 199,
                                                "char": 72
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 199,
                                            "char": 72
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 200,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 201,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 201,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_batchSize",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 201,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 201,
                                    "char": 29
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 201,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 201,
                                "char": 33
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "data",
                                            "index-expr": [
                                                {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 202,
                                                        "char": 43
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_BATCHSIZE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 202,
                                                        "char": 43
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 202,
                                                    "char": 43
                                                }
                                            ],
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 202,
                                                    "char": 52
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_batchSize",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 202,
                                                    "char": 63
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 202,
                                                "char": 63
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 202,
                                            "char": 63
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 203,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 204,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "data",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 204,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 205,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 191,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 191,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 190,
                    "last-line": 207,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getCursorOptions",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 209,
                                    "char": 19
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 211,
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
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Cursor",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 47
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_SANITIZE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 47
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 211,
                                                    "char": 47
                                                },
                                                "value": {
                                                    "type": "cast",
                                                    "left": "bool",
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 211,
                                                            "char": 61
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_sanitize",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 211,
                                                            "char": 71
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 71
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 211,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 211,
                                                "char": 71
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Cursor",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 92
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_FLAT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 92
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 211,
                                                    "char": 92
                                                },
                                                "value": {
                                                    "type": "cast",
                                                    "left": "bool",
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 211,
                                                            "char": 106
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_flat",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                            "line": 211,
                                                            "char": 112
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 112
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 211,
                                                    "char": 112
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 211,
                                                "char": 112
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Cursor",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 136
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_BASEURL",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 136
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 211,
                                                    "char": 136
                                                },
                                                "value": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Urls",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 154
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_CURSOR",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 211,
                                                        "char": 154
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 211,
                                                    "char": 154
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 211,
                                                "char": 154
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 211,
                                        "char": 155
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 211,
                                    "char": 155
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 212,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 212,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "resultType",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 212,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 212,
                                    "char": 31
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 212,
                                    "char": 38
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 212,
                                "char": 38
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "result",
                                            "index-expr": [
                                                {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Cursor",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 213,
                                                        "char": 42
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_TYPE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                        "line": 213,
                                                        "char": 42
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 213,
                                                    "char": 42
                                                }
                                            ],
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 213,
                                                    "char": 51
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "resultType",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 213,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 213,
                                                "char": 62
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 213,
                                            "char": 62
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 214,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 215,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 215,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 215,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 215,
                                        "char": 35
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 215,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 215,
                                    "char": 43
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 215,
                                            "char": 50
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 215,
                                            "char": 68
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 215,
                                        "char": 68
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 215,
                                        "char": 73
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 215,
                                    "char": 73
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 215,
                                "char": 73
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "result",
                                            "index-expr": [
                                                {
                                                    "type": "string",
                                                    "value": "_documentClass",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 216,
                                                    "char": 40
                                                }
                                            ],
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 216,
                                                    "char": 49
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_documentClass",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                    "line": 216,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                                "line": 216,
                                                "char": 64
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                            "line": 216,
                                            "char": 64
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 217,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 218,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "result",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 218,
                                "char": 22
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 219,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 208,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 208,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 207,
                    "last-line": 221,
                    "char": 22
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 221,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                        "line": 223,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 223,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 224,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 224,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                            "line": 225,
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
                                    "value": "Statement",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                    "line": 222,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                                "line": 222,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 222,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 221,
                    "last-line": 227,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_QUERY",
                    "default": {
                        "type": "string",
                        "value": "query",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 17,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 18,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_COUNT",
                    "default": {
                        "type": "string",
                        "value": "count",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 18,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 19,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_BATCHSIZE",
                    "default": {
                        "type": "string",
                        "value": "batchSize",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 19,
                        "char": 40
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 20,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_RETRIES",
                    "default": {
                        "type": "string",
                        "value": "retries",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 20,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 21,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_BINDVARS",
                    "default": {
                        "type": "string",
                        "value": "bindVars",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 21,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 22,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FULL_COUNT",
                    "default": {
                        "type": "string",
                        "value": "fullCount",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                        "line": 22,
                        "char": 35
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
                    "line": 23,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/statement.zep",
        "line": 3,
        "char": 5
    }
]