[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "ConnectionOptions",
        "abstract": 0,
        "final": 0,
        "implements": [
            {
                "type": "variable",
                "value": "\\ArrayAccess",
                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                "line": 4,
                "char": 1
            }
        ],
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
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 5,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_endpoint",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
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
                    "name": "__construct",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 38,
                            "char": 46
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
                                    "property": "_values",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "array_merge",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "scall",
                                                    "dynamic-class": 0,
                                                    "class": "self",
                                                    "dynamic": 0,
                                                    "name": "getDefaults",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 40,
                                                    "char": 60
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 40,
                                                "char": 60
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 40,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 40,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 40,
                                        "char": 70
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 40,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 41,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 41,
                                    "char": 14
                                },
                                "name": "validate",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 41,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 42,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 38,
                    "last-line": 44,
                    "char": 19
                },
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 46,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_values",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 46,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 46,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 47,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 45,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 45,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 44,
                    "last-line": 49,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "offsetSet",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "offset",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 49,
                            "char": 37
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 49,
                            "char": 44
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
                                    "property": "_values",
                                    "index-expr": [
                                        {
                                            "type": "variable",
                                            "value": "offset",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 51,
                                            "char": 33
                                        }
                                    ],
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 51,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 51,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 52,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 52,
                                    "char": 14
                                },
                                "name": "validate",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 52,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 53,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 49,
                    "last-line": 55,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "offsetExists",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "offset",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 55,
                            "char": 40
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 57,
                                            "char": 27
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 57,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 57,
                                        "char": 35
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "offset",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 57,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 57,
                                    "char": 43
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 57,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 58,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 56,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 56,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 55,
                    "last-line": 60,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "offsetUnset",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "offset",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 60,
                            "char": 39
                        }
                    ],
                    "statements": [
                        {
                            "type": "unset",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 62,
                                        "char": 20
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_values",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 62,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 62,
                                    "char": 28
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "offset",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 62,
                                    "char": 35
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 62,
                                "char": 36
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 64,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 64,
                                    "char": 14
                                },
                                "name": "validate",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 64,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 65,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 60,
                    "last-line": 67,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "offsetGet",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "offset",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 67,
                            "char": 37
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
                                                "value": "offset",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 69,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 69,
                                            "char": 36
                                        },
                                        {
                                            "parameter": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 69,
                                                    "char": 43
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_values",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 69,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 69,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 69,
                                            "char": 51
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 69,
                                    "char": 53
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 69,
                                "char": 53
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
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "Invalid option ",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 70,
                                                        "char": 57
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "offset",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 70,
                                                        "char": 65
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 70,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 70,
                                                "char": 65
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 70,
                                        "char": 66
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 71,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 72,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 72,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_values",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 72,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 72,
                                    "char": 29
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "offset",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 72,
                                    "char": 36
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 72,
                                "char": 37
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 73,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 67,
                    "last-line": 75,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getEndpoint",
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 77,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_endpoint",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 77,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 77,
                                    "char": 29
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 77,
                                    "char": 36
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 77,
                                "char": 36
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_endpoint",
                                            "expr": {
                                                "type": "new",
                                                "class": "Endpoint",
                                                "dynamic": 0,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 78,
                                                                    "char": 53
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "_values",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 78,
                                                                    "char": 61
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 78,
                                                                "char": 61
                                                            },
                                                            "right": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 78,
                                                                    "char": 83
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_ENDPOINT",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 78,
                                                                    "char": 83
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 78,
                                                                "char": 83
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 78,
                                                            "char": 84
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 78,
                                                        "char": 84
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 78,
                                                "char": 85
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 78,
                                            "char": 85
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 79,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 80,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 80,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_endpoint",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 80,
                                    "char": 31
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 80,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 81,
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
                                    "value": "Endpoint",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 76,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 76,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 76,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 75,
                    "last-line": 83,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected",
                        "static"
                    ],
                    "type": "method",
                    "name": "getDefaults",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "array",
                                "left": [
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 86,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_ENDPOINT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 86,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 86,
                                            "char": 35
                                        },
                                        "value": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 86,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 86,
                                        "char": 41
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 87,
                                                "char": 31
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_HOST",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 87,
                                                "char": 31
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 87,
                                            "char": 31
                                        },
                                        "value": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 87,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 87,
                                        "char": 37
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 88,
                                                "char": 31
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_PORT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 88,
                                                "char": 31
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 88,
                                            "char": 31
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 88,
                                                "char": 60
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_PORT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 88,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 88,
                                            "char": 60
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 88,
                                        "char": 60
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 89,
                                                "char": 34
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_TIMEOUT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 89,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 89,
                                            "char": 34
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 89,
                                                "char": 66
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_TIMEOUT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 89,
                                                "char": 66
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 89,
                                            "char": 66
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 89,
                                        "char": 66
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 90,
                                                "char": 33
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_CREATE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 90,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 90,
                                            "char": 33
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 90,
                                                "char": 64
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_CREATE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 90,
                                                "char": 64
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 90,
                                            "char": 64
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 90,
                                        "char": 64
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 91,
                                                "char": 40
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_UPDATE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 91,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 91,
                                            "char": 40
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 91,
                                                "char": 78
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_UPDATE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 91,
                                                "char": 78
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 91,
                                            "char": 78
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 91,
                                        "char": 78
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 92,
                                                "char": 41
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_REPLACE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 92,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 92,
                                            "char": 41
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 92,
                                                "char": 80
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_REPLACE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 92,
                                                "char": 80
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 92,
                                            "char": 80
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 92,
                                        "char": 80
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 93,
                                                "char": 40
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_DELETE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 93,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 93,
                                            "char": 40
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 93,
                                                "char": 78
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_DELETE_POLICY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 93,
                                                "char": 78
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 93,
                                            "char": 78
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 93,
                                        "char": 78
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 94,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_REVISION",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 94,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 94,
                                            "char": 35
                                        },
                                        "value": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 94,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 94,
                                        "char": 41
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 95,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_WAIT_SYNC",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 95,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 95,
                                            "char": 36
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 95,
                                                "char": 70
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_WAIT_SYNC",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 95,
                                                "char": 70
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 95,
                                            "char": 70
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 95,
                                        "char": 70
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 96,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_BATCHSIZE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 96,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 96,
                                            "char": 36
                                        },
                                        "value": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 96,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 96,
                                        "char": 42
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 97,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_JOURNAL_SIZE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 97,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 97,
                                            "char": 39
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 97,
                                                "char": 76
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_JOURNAL_SIZE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 97,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 97,
                                            "char": 76
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 97,
                                        "char": 76
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 98,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_IS_SYSTEM",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 98,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 98,
                                            "char": 36
                                        },
                                        "value": {
                                            "type": "bool",
                                            "value": "false",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 98,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 98,
                                        "char": 43
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 99,
                                                "char": 38
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_IS_VOLATILE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 99,
                                                "char": 38
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 99,
                                            "char": 38
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 99,
                                                "char": 74
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_IS_VOLATILE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 99,
                                                "char": 74
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 99,
                                            "char": 74
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 99,
                                        "char": 74
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 100,
                                                "char": 37
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_CONNECTION",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 100,
                                                "char": 37
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 100,
                                            "char": 37
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 100,
                                                "char": 72
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_CONNECTION",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 100,
                                                "char": 72
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 100,
                                            "char": 72
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 100,
                                        "char": 72
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 101,
                                                "char": 32
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_TRACE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 101,
                                                "char": 32
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 101,
                                            "char": 32
                                        },
                                        "value": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 101,
                                            "char": 38
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 101,
                                        "char": 38
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 102,
                                                "char": 41
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_ENHANCED_TRACE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 102,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 102,
                                            "char": 41
                                        },
                                        "value": {
                                            "type": "bool",
                                            "value": "false",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 102,
                                            "char": 48
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 102,
                                        "char": 48
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 103,
                                                "char": 38
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_VERIFY_CERT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 103,
                                                "char": 38
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 103,
                                            "char": 38
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 103,
                                                "char": 74
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_VERIFY_CERT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 103,
                                                "char": 74
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 103,
                                            "char": 74
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 103,
                                        "char": 74
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 104,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_ALLOW_SELF_SIGNED",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 104,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 104,
                                            "char": 44
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 104,
                                                "char": 86
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_ALLOW_SELF_SIGNED",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 104,
                                                "char": 86
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 104,
                                            "char": 86
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 104,
                                        "char": 86
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 105,
                                                "char": 34
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_CIPHERS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 105,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 105,
                                            "char": 34
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 105,
                                                "char": 66
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_CIPHERS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 105,
                                                "char": 66
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 105,
                                            "char": 66
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 105,
                                        "char": 66
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 106,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_AUTH_USER",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 106,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 106,
                                            "char": 36
                                        },
                                        "value": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 106,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 106,
                                        "char": 42
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 107,
                                                "char": 38
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_AUTH_PASSWD",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 107,
                                                "char": 38
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 107,
                                            "char": 38
                                        },
                                        "value": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 107,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 107,
                                        "char": 44
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 108,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_AUTH_TYPE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 108,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 108,
                                            "char": 36
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 108,
                                                "char": 70
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_AUTH_TYPE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 108,
                                                "char": 70
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 108,
                                            "char": 70
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 108,
                                        "char": 70
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 109,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_RECONNECT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 109,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 109,
                                            "char": 36
                                        },
                                        "value": {
                                            "type": "bool",
                                            "value": "false",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 109,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 109,
                                        "char": 43
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 110,
                                                "char": 32
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_BATCH",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 110,
                                                "char": 32
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 110,
                                            "char": 32
                                        },
                                        "value": {
                                            "type": "bool",
                                            "value": "false",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 110,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 110,
                                        "char": 39
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 111,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_BATCHPART",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 111,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 111,
                                            "char": 36
                                        },
                                        "value": {
                                            "type": "bool",
                                            "value": "false",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 111,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 111,
                                        "char": 43
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 112,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_DATABASE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 112,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 112,
                                            "char": 35
                                        },
                                        "value": {
                                            "type": "string",
                                            "value": "_system",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 112,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 112,
                                        "char": 46
                                    },
                                    {
                                        "key": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 113,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "OPTION_CHECK_UTF8_CONFORM",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 113,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 113,
                                            "char": 45
                                        },
                                        "value": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "DefaultValues",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 114,
                                                "char": 9
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "DEFAULT_CHECK_UTF8_CONFORM",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 114,
                                                "char": 9
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 114,
                                            "char": 9
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 114,
                                        "char": 9
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 114,
                                "char": 10
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 115,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 84,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 84,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 83,
                    "last-line": 117,
                    "char": 29
                },
                {
                    "visibility": [
                        "protected",
                        "static"
                    ],
                    "type": "method",
                    "name": "getSupportedAuthTypes",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "array",
                                "left": [
                                    {
                                        "value": {
                                            "type": "string",
                                            "value": "Basic",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 119,
                                            "char": 24
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 119,
                                        "char": 24
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 119,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 120,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 118,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 118,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 117,
                    "last-line": 122,
                    "char": 29
                },
                {
                    "visibility": [
                        "protected",
                        "static"
                    ],
                    "type": "method",
                    "name": "getSupportedConnectionTypes",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "array",
                                "left": [
                                    {
                                        "value": {
                                            "type": "string",
                                            "value": "Close",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 124,
                                            "char": 24
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 124,
                                        "char": 24
                                    },
                                    {
                                        "value": {
                                            "type": "string",
                                            "value": "Keep-Alive",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 124,
                                            "char": 38
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 124,
                                        "char": 38
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 124,
                                "char": 39
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 125,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 123,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 123,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 122,
                    "last-line": 127,
                    "char": 29
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "validate",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "type",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 129,
                                    "char": 17
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 131,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 131,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 131,
                                            "char": 25
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 131,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 131,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "OPTION_HOST",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 131,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 131,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 131,
                                    "char": 46
                                },
                                "right": {
                                    "type": "not",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_string",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 131,
                                                            "char": 64
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_values",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 131,
                                                            "char": 72
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 131,
                                                        "char": 72
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 131,
                                                            "char": 90
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "OPTION_HOST",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 131,
                                                            "char": 90
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 131,
                                                        "char": 90
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 131,
                                                    "char": 91
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 131,
                                                "char": 91
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 131,
                                        "char": 93
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 131,
                                    "char": 93
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 131,
                                "char": 93
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
                                                    "value": "host should be a string",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 132,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 132,
                                                "char": 64
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 132,
                                        "char": 65
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 133,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 134,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 134,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 134,
                                            "char": 25
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 134,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 134,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "OPTION_PORT",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 134,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 134,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 134,
                                    "char": 46
                                },
                                "right": {
                                    "type": "not",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_int",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 134,
                                                            "char": 61
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_values",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 134,
                                                            "char": 69
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 134,
                                                        "char": 69
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 134,
                                                            "char": 87
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "OPTION_PORT",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 134,
                                                            "char": 87
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 134,
                                                        "char": 87
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 134,
                                                    "char": 88
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 134,
                                                "char": 88
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 134,
                                        "char": 90
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 134,
                                    "char": 90
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 134,
                                "char": 90
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
                                                    "value": "port should be an integer",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 135,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 135,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 135,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 136,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 137,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 137,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 137,
                                            "char": 25
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 137,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 137,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "OPTION_HOST",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 137,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 137,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 137,
                                    "char": 46
                                },
                                "right": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 137,
                                            "char": 53
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 137,
                                            "char": 61
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 137,
                                        "char": 61
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 137,
                                            "char": 83
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "OPTION_ENDPOINT",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 137,
                                            "char": 83
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 137,
                                        "char": 83
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 137,
                                    "char": 85
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 137,
                                "char": 85
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
                                                    "value": "must not specify both host and endpoint",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 138,
                                                    "char": 80
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 138,
                                                "char": 80
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 138,
                                        "char": 81
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 139,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "and",
                                        "left": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 140,
                                                    "char": 21
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_values",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 140,
                                                    "char": 29
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 140,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 140,
                                                    "char": 47
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_HOST",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 140,
                                                    "char": 47
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 140,
                                                "char": 47
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 140,
                                            "char": 50
                                        },
                                        "right": {
                                            "type": "not",
                                            "left": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 140,
                                                        "char": 58
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_values",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 140,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 140,
                                                    "char": 66
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 140,
                                                        "char": 88
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "OPTION_ENDPOINT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 140,
                                                        "char": 88
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 140,
                                                    "char": 88
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 140,
                                                "char": 90
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 140,
                                            "char": 90
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 140,
                                        "char": 90
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
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "self",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 141,
                                                                "char": 56
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "OPTION_ENDPOINT",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 141,
                                                                "char": 56
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 141,
                                                            "char": 56
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "string",
                                                                    "value": "tcp:\/\/",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 141,
                                                                    "char": 70
                                                                },
                                                                "right": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "property-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "this",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                            "line": 141,
                                                                            "char": 77
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "_values",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                            "line": 141,
                                                                            "char": 85
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                        "line": 141,
                                                                        "char": 85
                                                                    },
                                                                    "right": {
                                                                        "type": "static-constant-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "self",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                            "line": 141,
                                                                            "char": 103
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "OPTION_HOST",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                            "line": 141,
                                                                            "char": 103
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                        "line": 141,
                                                                        "char": 103
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 141,
                                                                    "char": 105
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 141,
                                                                "char": 105
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": ":",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 141,
                                                                "char": 111
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 141,
                                                            "char": 111
                                                        },
                                                        "right": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 141,
                                                                    "char": 118
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "_values",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 141,
                                                                    "char": 126
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 141,
                                                                "char": 126
                                                            },
                                                            "right": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 141,
                                                                    "char": 144
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_PORT",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 141,
                                                                    "char": 144
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 141,
                                                                "char": 144
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 141,
                                                            "char": 145
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 141,
                                                        "char": 145
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 141,
                                                    "char": 145
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 142,
                                            "char": 21
                                        },
                                        {
                                            "type": "unset",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 142,
                                                        "char": 28
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_values",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 142,
                                                        "char": 36
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 142,
                                                    "char": 36
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 142,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "OPTION_HOST",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 142,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 142,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 142,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 143,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 144,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 145,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 145,
                                    "char": 14
                                },
                                "name": "getEndpoint",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 145,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 146,
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
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "Endpoint",
                                        "dynamic": 0,
                                        "name": "getType",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 146,
                                                            "char": 43
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_values",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 146,
                                                            "char": 51
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 146,
                                                        "char": 51
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 146,
                                                            "char": 73
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "OPTION_ENDPOINT",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 146,
                                                            "char": 73
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 146,
                                                        "char": 73
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 146,
                                                    "char": 74
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 146,
                                                "char": 74
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 146,
                                        "char": 75
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 146,
                                    "char": 75
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 147,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "variable",
                                    "value": "type",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 147,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "Endpoint",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 147,
                                        "char": 40
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "TYPE_UNIX",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 147,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 147,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 147,
                                "char": 40
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
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 148,
                                                        "char": 48
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "OPTION_PORT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 148,
                                                        "char": 48
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 148,
                                                    "char": 48
                                                }
                                            ],
                                            "expr": {
                                                "type": "int",
                                                "value": "0",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 148,
                                                "char": 53
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 148,
                                            "char": 53
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 149,
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
                                            "value": "type",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 149,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "Endpoint",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 149,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "TYPE_SSL",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 149,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 149,
                                            "char": 45
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 149,
                                        "char": 45
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
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "self",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 150,
                                                                "char": 48
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "OPTION_PORT",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 150,
                                                                "char": 48
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 150,
                                                            "char": 48
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "int",
                                                        "value": "0",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 150,
                                                        "char": 53
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 150,
                                                    "char": 53
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 151,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 152,
                                    "char": 10
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 152,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 152,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 152,
                                            "char": 25
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 152,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 152,
                                            "char": 48
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "OPTION_AUTH_TYPE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 152,
                                            "char": 48
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 152,
                                        "char": 48
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 152,
                                    "char": 51
                                },
                                "right": {
                                    "type": "not",
                                    "left": {
                                        "type": "fcall",
                                        "name": "in_array",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 152,
                                                            "char": 68
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_values",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 152,
                                                            "char": 76
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 152,
                                                        "char": 76
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 152,
                                                            "char": 99
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "OPTION_AUTH_TYPE",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 152,
                                                            "char": 99
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 152,
                                                        "char": 99
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 152,
                                                    "char": 100
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 152,
                                                "char": 100
                                            },
                                            {
                                                "parameter": {
                                                    "type": "scall",
                                                    "dynamic-class": 0,
                                                    "class": "self",
                                                    "dynamic": 0,
                                                    "name": "getSupportedAuthTypes",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 152,
                                                    "char": 131
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 152,
                                                "char": 131
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 152,
                                                    "char": 137
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 152,
                                                "char": 137
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 152,
                                        "char": 139
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 152,
                                    "char": 139
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 152,
                                "char": 139
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
                                                    "value": "unsupported authorization method",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 153,
                                                    "char": 73
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 153,
                                                "char": 73
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 153,
                                        "char": 74
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 154,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 155,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 155,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 155,
                                            "char": 25
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 155,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 155,
                                            "char": 49
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "OPTION_CONNECTION",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 155,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 155,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 155,
                                    "char": 52
                                },
                                "right": {
                                    "type": "not",
                                    "left": {
                                        "type": "fcall",
                                        "name": "in_array",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 155,
                                                            "char": 69
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_values",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 155,
                                                            "char": 77
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 155,
                                                        "char": 77
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 155,
                                                            "char": 101
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "OPTION_CONNECTION",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 155,
                                                            "char": 101
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                        "line": 155,
                                                        "char": 101
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 155,
                                                    "char": 102
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 155,
                                                "char": 102
                                            },
                                            {
                                                "parameter": {
                                                    "type": "scall",
                                                    "dynamic-class": 0,
                                                    "class": "self",
                                                    "dynamic": 0,
                                                    "name": "getSupportedConnectionTypes",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 155,
                                                    "char": 139
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 155,
                                                "char": 139
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 155,
                                                    "char": 145
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 155,
                                                "char": 145
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 155,
                                        "char": 147
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 155,
                                    "char": 147
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 155,
                                "char": 147
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
                                                    "type": "fcall",
                                                    "name": "sprintf",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "unsupported connection value '%s'",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 156,
                                                                "char": 82
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 156,
                                                            "char": 82
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                        "line": 156,
                                                                        "char": 89
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "_values",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                        "line": 156,
                                                                        "char": 97
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 156,
                                                                    "char": 97
                                                                },
                                                                "right": {
                                                                    "type": "static-constant-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "self",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                        "line": 156,
                                                                        "char": 121
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "OPTION_CONNECTION",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                        "line": 156,
                                                                        "char": 121
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                    "line": 156,
                                                                    "char": 121
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                                "line": 156,
                                                                "char": 122
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                            "line": 156,
                                                            "char": 122
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 156,
                                                    "char": 123
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 156,
                                                "char": 123
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 156,
                                        "char": 124
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                    "line": 157,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 158,
                            "char": 20
                        },
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
                                            "type": "array-access",
                                            "left": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 158,
                                                    "char": 37
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_values",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 158,
                                                    "char": 45
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 158,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 158,
                                                    "char": 72
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_UPDATE_POLICY",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 158,
                                                    "char": 72
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 158,
                                                "char": 72
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 158,
                                            "char": 73
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 158,
                                        "char": 73
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 158,
                                "char": 74
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 159,
                            "char": 20
                        },
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
                                            "type": "array-access",
                                            "left": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 159,
                                                    "char": 37
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_values",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 159,
                                                    "char": 45
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 159,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 159,
                                                    "char": 73
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_REPLACE_POLICY",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 159,
                                                    "char": 73
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 159,
                                                "char": 73
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 159,
                                            "char": 74
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 159,
                                        "char": 74
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 159,
                                "char": 75
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 160,
                            "char": 20
                        },
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
                                            "type": "array-access",
                                            "left": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 160,
                                                    "char": 37
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_values",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 160,
                                                    "char": 45
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 160,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 160,
                                                    "char": 72
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_DELETE_POLICY",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                    "line": 160,
                                                    "char": 72
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                                "line": 160,
                                                "char": 72
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                            "line": 160,
                                            "char": 73
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                        "line": 160,
                                        "char": 73
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                                "line": 160,
                                "char": 74
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                            "line": 161,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 127,
                    "last-line": 163,
                    "char": 22
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "OPTION_ENDPOINT",
                    "default": {
                        "type": "string",
                        "value": "endpoint",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 7,
                        "char": 39
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_HOST",
                    "default": {
                        "type": "string",
                        "value": "host",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 8,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_PORT",
                    "default": {
                        "type": "string",
                        "value": "port",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 9,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 10,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_TIMEOUT",
                    "default": {
                        "type": "string",
                        "value": "timeout",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 10,
                        "char": 37
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 11,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_TRACE",
                    "default": {
                        "type": "string",
                        "value": "trace",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 11,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 12,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_VERIFY_CERT",
                    "default": {
                        "type": "string",
                        "value": "verifyCert",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 12,
                        "char": 44
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 13,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_ALLOW_SELF_SIGNED",
                    "default": {
                        "type": "string",
                        "value": "allowSelfSigned",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 13,
                        "char": 55
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 14,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_CIPHERS",
                    "default": {
                        "type": "string",
                        "value": "ciphers",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 14,
                        "char": 37
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 15,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_ENHANCED_TRACE",
                    "default": {
                        "type": "string",
                        "value": "enhancedTrace",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 15,
                        "char": 50
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 16,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_CREATE",
                    "default": {
                        "type": "string",
                        "value": "createCollection",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 16,
                        "char": 45
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 17,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_REVISION",
                    "default": {
                        "type": "string",
                        "value": "rev",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 17,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 18,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_UPDATE_POLICY",
                    "default": {
                        "type": "string",
                        "value": "policy",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 18,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 19,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_UPDATE_KEEPNULL",
                    "default": {
                        "type": "string",
                        "value": "keepNull",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 19,
                        "char": 46
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 20,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_REPLACE_POLICY",
                    "default": {
                        "type": "string",
                        "value": "policy",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 20,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 21,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_DELETE_POLICY",
                    "default": {
                        "type": "string",
                        "value": "policy",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 21,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 22,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_WAIT_SYNC",
                    "default": {
                        "type": "string",
                        "value": "waitForSync",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 22,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 23,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_LIMIT",
                    "default": {
                        "type": "string",
                        "value": "limit",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 23,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 24,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_SKIP",
                    "default": {
                        "type": "string",
                        "value": "skip",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 24,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 25,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_BATCHSIZE",
                    "default": {
                        "type": "string",
                        "value": "batchSize",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 25,
                        "char": 41
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 26,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_JOURNAL_SIZE",
                    "default": {
                        "type": "string",
                        "value": "journalSize",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 26,
                        "char": 46
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 27,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_IS_SYSTEM",
                    "default": {
                        "type": "string",
                        "value": "isSystem",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 27,
                        "char": 40
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 28,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_IS_VOLATILE",
                    "default": {
                        "type": "string",
                        "value": "isVolatile",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 28,
                        "char": 44
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 29,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_AUTH_USER",
                    "default": {
                        "type": "string",
                        "value": "AuthUser",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 29,
                        "char": 40
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 30,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_AUTH_PASSWD",
                    "default": {
                        "type": "string",
                        "value": "AuthPasswd",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 30,
                        "char": 44
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 31,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_AUTH_TYPE",
                    "default": {
                        "type": "string",
                        "value": "AuthType",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 31,
                        "char": 40
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 32,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_CONNECTION",
                    "default": {
                        "type": "string",
                        "value": "Connection",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 32,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 33,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_RECONNECT",
                    "default": {
                        "type": "string",
                        "value": "Reconnect",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 33,
                        "char": 41
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 34,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_BATCH",
                    "default": {
                        "type": "string",
                        "value": "Batch",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 34,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 35,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_BATCHPART",
                    "default": {
                        "type": "string",
                        "value": "BatchPart",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 35,
                        "char": 41
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 36,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_DATABASE",
                    "default": {
                        "type": "string",
                        "value": "database",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 36,
                        "char": 39
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 37,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_CHECK_UTF8_CONFORM",
                    "default": {
                        "type": "string",
                        "value": "CheckUtf8Conform",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                        "line": 37,
                        "char": 57
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
                    "line": 38,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/connectionoptions.zep",
        "line": 3,
        "char": 5
    }
]