[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "BindVars",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_values",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                        "line": 5,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                    "line": 6,
                    "char": 10
                }
            ],
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getAll",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 8,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_values",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 8,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                "line": 8,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                            "line": 9,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                "line": 7,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                        "line": 7,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                    "line": 6,
                    "last-line": 11,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                "line": 13,
                                                "char": 27
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_values",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                "line": 13,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 13,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                        "line": 13,
                                        "char": 35
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                "line": 13,
                                "char": 36
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                            "line": 14,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                "line": 12,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                        "line": 12,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                    "line": 11,
                    "last-line": 16,
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
                            "name": "name",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                            "line": 16,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                "line": 16,
                                "char": 47
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                            "line": 16,
                            "char": 47
                        }
                    ],
                    "statements": [
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
                                            "value": "name",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 18,
                                            "char": 25
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                        "line": 18,
                                        "char": 25
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                "line": 18,
                                "char": 27
                            },
                            "statements": [
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "variable",
                                        "value": "name",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                        "line": 19,
                                        "char": 31
                                    },
                                    "value": "value",
                                    "reverse": 0,
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                            "line": 20,
                                                            "char": 47
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                        "line": 20,
                                                        "char": 47
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                "line": 20,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 21,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 22,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_values",
                                            "expr": {
                                                "type": "variable",
                                                "value": "name",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                "line": 22,
                                                "char": 37
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 22,
                                            "char": 37
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 23,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "or",
                                        "left": {
                                            "type": "fcall",
                                            "name": "is_int",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "name",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                        "line": 24,
                                                        "char": 27
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                    "line": 24,
                                                    "char": 27
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 24,
                                            "char": 30
                                        },
                                        "right": {
                                            "type": "fcall",
                                            "name": "is_string",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "name",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                        "line": 24,
                                                        "char": 46
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                    "line": 24,
                                                    "char": 46
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 24,
                                            "char": 48
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                        "line": 24,
                                        "char": 48
                                    },
                                    "statements": [
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
                                                            "type": "cast",
                                                            "left": "string",
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "name",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                                "line": 25,
                                                                "char": 48
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                            "line": 25,
                                                            "char": 48
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                        "line": 25,
                                                        "char": 57
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                    "line": 25,
                                                    "char": 57
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 26,
                                            "char": 30
                                        },
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                            "line": 26,
                                                            "char": 47
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                        "line": 26,
                                                        "char": 47
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                "line": 26,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 27,
                                            "char": 13
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
                                                            "value": "Bind variable name should be string or int",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                            "line": 28,
                                                            "char": 87
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                        "line": 28,
                                                        "char": 87
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                "line": 28,
                                                "char": 88
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 29,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 30,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                            "line": 31,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                    "line": 16,
                    "last-line": 33,
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
                            "name": "name",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                            "line": 33,
                            "char": 36
                        }
                    ],
                    "statements": [
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
                                                "type": "variable",
                                                "value": "name",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                "line": 35,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 35,
                                            "char": 34
                                        },
                                        {
                                            "parameter": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                    "line": 35,
                                                    "char": 41
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_values",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                    "line": 35,
                                                    "char": 49
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                                "line": 35,
                                                "char": 49
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                            "line": 35,
                                            "char": 49
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 35,
                                    "char": 51
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                "line": 35,
                                "char": 51
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                        "line": 36,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 37,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                            "line": 38,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                        "line": 38,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_values",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                        "line": 38,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 38,
                                    "char": 29
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "name",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                    "line": 38,
                                    "char": 34
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                                "line": 38,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                            "line": 39,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
                    "line": 33,
                    "last-line": 41,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/bindvars.zep",
        "line": 3,
        "char": 5
    }
]