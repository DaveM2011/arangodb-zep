[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Exception",
        "abstract": 0,
        "final": 0,
        "extends": "\\Exception",
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected",
                        "static"
                    ],
                    "type": "property",
                    "name": "enableLogging",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                        "line": 5,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
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
                    "name": "__construct",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "message",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                "line": 6,
                                "char": 52
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                            "line": 6,
                            "char": 52
                        },
                        {
                            "type": "parameter",
                            "name": "code",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 0,
                            "default": {
                                "type": "int",
                                "value": "0",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                "line": 6,
                                "char": 66
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                            "line": 6,
                            "char": 66
                        },
                        {
                            "type": "parameter",
                            "name": "previous",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Exception",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                "line": 6,
                                "char": 87
                            },
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                "line": 6,
                                "char": 95
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                            "line": 6,
                            "char": 95
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "static-property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "self",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                    "line": 8,
                                    "char": 32
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "enableLogging",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                    "line": 8,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                "line": 8,
                                "char": 32
                            },
                            "statements": [
                                {
                                    "type": "declare",
                                    "data-type": "variable",
                                    "variables": [
                                        {
                                            "variable": "line",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                            "line": 9,
                                            "char": 21
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                    "line": 10,
                                    "char": 21
                                },
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "error_log",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "fcall",
                                                            "name": "get_class",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                                        "line": 10,
                                                                        "char": 37
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                                    "line": 10,
                                                                    "char": 37
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                            "line": 10,
                                                            "char": 39
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": ": ",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                            "line": 10,
                                                            "char": 46
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                        "line": 10,
                                                        "char": 46
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "message",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                        "line": 10,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                    "line": 10,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                "line": 10,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                        "line": 10,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                    "line": 11,
                                    "char": 21
                                },
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "error_log",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "Stack trace:",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                    "line": 11,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                "line": 11,
                                                "char": 37
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                        "line": 11,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                    "line": 12,
                                    "char": 15
                                },
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "explode",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "constant",
                                                    "value": "PHP_EOL",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                    "line": 12,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                "line": 12,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                        "line": 12,
                                                        "char": 50
                                                    },
                                                    "name": "getTraceAsString",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                    "line": 12,
                                                    "char": 69
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                "line": 12,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                        "line": 12,
                                        "char": 71
                                    },
                                    "key": "_",
                                    "value": "line",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "fcall",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "error_log",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "   ",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                                "line": 13,
                                                                "char": 33
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "line",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                                "line": 13,
                                                                "char": 39
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                            "line": 13,
                                                            "char": 39
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                        "line": 13,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                                "line": 13,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                            "line": 14,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                    "line": 15,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                            "line": 16,
                            "char": 14
                        },
                        {
                            "type": "scall",
                            "expr": {
                                "type": "scall",
                                "dynamic-class": 0,
                                "class": "parent",
                                "dynamic": 0,
                                "name": "__construct",
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "message",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                            "line": 16,
                                            "char": 36
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                        "line": 16,
                                        "char": 36
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "code",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                            "line": 16,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                        "line": 16,
                                        "char": 42
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "previous",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                            "line": 16,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                        "line": 16,
                                        "char": 52
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                "line": 16,
                                "char": 53
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                            "line": 17,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                    "line": 6,
                    "last-line": 19,
                    "char": 19
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "enableLogging",
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "static-property",
                                    "operator": "assign",
                                    "variable": "self",
                                    "property": "enableLogging",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                        "line": 21,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                    "line": 21,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                            "line": 22,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                        "line": 20,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                    "line": 19,
                    "last-line": 24,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "disableLogging",
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "static-property",
                                    "operator": "assign",
                                    "variable": "self",
                                    "property": "enableLogging",
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                        "line": 26,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                                    "line": 26,
                                    "char": 41
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                            "line": 27,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                        "line": 25,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
                    "line": 24,
                    "last-line": 29,
                    "char": 26
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/exception.zep",
        "line": 3,
        "char": 5
    }
]