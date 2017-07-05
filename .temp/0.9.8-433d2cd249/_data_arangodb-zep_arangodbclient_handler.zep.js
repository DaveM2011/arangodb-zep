[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
        "line": 3,
        "char": 8
    },
    {
        "type": "class",
        "name": "Handler",
        "abstract": 1,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_connection",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 6,
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
                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                        "line": 6,
                        "char": 60
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 7,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 7,
                                "char": 55
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 7,
                            "char": 56
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 9,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 9,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 10,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 7,
                    "last-line": 12,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 14,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 14,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 14,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 15,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 13,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 13,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                        "line": 13,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 12,
                    "last-line": 17,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getConnectionOption",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "optionName",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 17,
                            "char": 54
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 19,
                                        "char": 21
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 19,
                                    "char": 38
                                },
                                "name": "getOption",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "optionName",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 19,
                                            "char": 59
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 19,
                                        "char": 59
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 19,
                                "char": 60
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 20,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 17,
                    "last-line": 22,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "json_encode_wrapper",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "body",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 22,
                            "char": 54
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 24,
                                        "char": 21
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 24,
                                    "char": 38
                                },
                                "name": "json_encode_wrapper",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "body",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 24,
                                            "char": 63
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 24,
                                        "char": 63
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 24,
                                "char": 64
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 25,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 23,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                        "line": 23,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 22,
                    "last-line": 27,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "includeOptionsInParams",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 27,
                            "char": 54
                        },
                        {
                            "type": "parameter",
                            "name": "includeArray",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 27,
                                "char": 79
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 27,
                            "char": 79
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 29,
                                    "char": 19
                                },
                                {
                                    "variable": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 29,
                                    "char": 24
                                },
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 29,
                                    "char": 31
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 31,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 31,
                                        "char": 25
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 31,
                                    "char": 25
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 32,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "options",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 32,
                                "char": 35
                            },
                            "key": "key",
                            "value": "value",
                            "reverse": 0,
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
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 33,
                                                    "char": 36
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                "line": 33,
                                                "char": 36
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "includeArray",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 33,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                "line": 33,
                                                "char": 50
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 33,
                                        "char": 52
                                    },
                                    "statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "identical",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 34,
                                                    "char": 26
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "ConnectionOptions",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 34,
                                                        "char": 68
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "OPTION_UPDATE_POLICY",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 34,
                                                        "char": 68
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 34,
                                                    "char": 68
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                "line": 34,
                                                "char": 68
                                            },
                                            "statements": [
                                                {
                                                    "type": "scall",
                                                    "expr": {
                                                        "type": "scall",
                                                        "dynamic-class": 0,
                                                        "class": "UpdatePolicy",
                                                        "dynamic": 0,
                                                        "name": "validate",
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "value",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                    "line": 35,
                                                                    "char": 49
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                "line": 35,
                                                                "char": 49
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 35,
                                                        "char": 50
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 36,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 37,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "params",
                                                    "index-expr": [
                                                        {
                                                            "type": "variable",
                                                            "value": "key",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                            "line": 37,
                                                            "char": 31
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 37,
                                                        "char": 40
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 37,
                                                    "char": 40
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 38,
                                            "char": 18
                                        },
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "identical",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 38,
                                                    "char": 28
                                                },
                                                "right": {
                                                    "type": "null",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 38,
                                                    "char": 35
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                "line": 38,
                                                "char": 35
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
                                                                    "type": "variable",
                                                                    "value": "key",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                    "line": 39,
                                                                    "char": 35
                                                                }
                                                            ],
                                                            "expr": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "includeArray",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                    "line": 39,
                                                                    "char": 51
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "key",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                    "line": 39,
                                                                    "char": 55
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                "line": 39,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                            "line": 39,
                                                            "char": 56
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 40,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 41,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 42,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 43,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "params",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 43,
                                "char": 22
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 44,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 27,
                    "last-line": 46,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "includeOptionsInBody",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 46,
                            "char": 52
                        },
                        {
                            "type": "parameter",
                            "name": "body",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 46,
                            "char": 58
                        },
                        {
                            "type": "parameter",
                            "name": "includeArray",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 46,
                                "char": 83
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 46,
                            "char": 83
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 48,
                                    "char": 16
                                },
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 48,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 50,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "options",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 50,
                                "char": 35
                            },
                            "key": "key",
                            "value": "value",
                            "reverse": 0,
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
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 51,
                                                    "char": 36
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                "line": 51,
                                                "char": 36
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "includeArray",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 51,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                "line": 51,
                                                "char": 50
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 51,
                                        "char": 52
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "body",
                                                    "index-expr": [
                                                        {
                                                            "type": "variable",
                                                            "value": "key",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                            "line": 52,
                                                            "char": 29
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 52,
                                                        "char": 38
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 52,
                                                    "char": 38
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 53,
                                            "char": 18
                                        },
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "and",
                                                "left": {
                                                    "type": "identical",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 53,
                                                        "char": 28
                                                    },
                                                    "right": {
                                                        "type": "null",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 53,
                                                        "char": 36
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 53,
                                                    "char": 36
                                                },
                                                "right": {
                                                    "type": "not-identical",
                                                    "left": {
                                                        "type": "array-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "includeArray",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                            "line": 53,
                                                            "char": 50
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "key",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                            "line": 53,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 53,
                                                        "char": 58
                                                    },
                                                    "right": {
                                                        "type": "null",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                        "line": 53,
                                                        "char": 65
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 53,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                "line": 53,
                                                "char": 65
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "array-index",
                                                            "operator": "assign",
                                                            "variable": "body",
                                                            "index-expr": [
                                                                {
                                                                    "type": "variable",
                                                                    "value": "key",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                    "line": 54,
                                                                    "char": 33
                                                                }
                                                            ],
                                                            "expr": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "includeArray",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                    "line": 54,
                                                                    "char": 49
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "key",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                    "line": 54,
                                                                    "char": 53
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                                "line": 54,
                                                                "char": 54
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                            "line": 54,
                                                            "char": 54
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                                    "line": 55,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 56,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 57,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 58,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "body",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 58,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 59,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 46,
                    "last-line": 61,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "makeCollection",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 61,
                            "char": 44
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "instanceof",
                                "left": {
                                    "type": "variable",
                                    "value": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 63,
                                    "char": 27
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "Collection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 63,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 63,
                                "char": 40
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 64,
                                            "char": 26
                                        },
                                        "name": "getName",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 64,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 65,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 66,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "instanceof",
                                "left": {
                                    "type": "variable",
                                    "value": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 66,
                                    "char": 27
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "Document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 66,
                                    "char": 38
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 66,
                                "char": 38
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                            "line": 67,
                                            "char": 26
                                        },
                                        "name": "getCollectionId",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 67,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 68,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 69,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "value",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 69,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 70,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 62,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                        "line": 62,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 61,
                    "last-line": 72,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 72,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                        "line": 74,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 74,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                            "line": 75,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 75,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
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
                                    "value": "Handler",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                    "line": 73,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                                "line": 73,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                        "line": 73,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
                    "line": 72,
                    "last-line": 78,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
            "line": 3,
            "char": 14
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/handler.zep",
        "line": 3,
        "char": 14
    }
]