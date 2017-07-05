[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Endpoint",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_value",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 6,
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
                            "name": "value",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 14,
                            "char": 45
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "scall",
                                    "dynamic-class": 0,
                                    "class": "self",
                                    "dynamic": 0,
                                    "name": "isValid",
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 16,
                                                "char": 32
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 16,
                                            "char": 32
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 16,
                                    "char": 34
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 16,
                                "char": 34
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
                                                                "value": "invalid endpoint specification '%s'",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                                "line": 17,
                                                                "char": 84
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                            "line": 17,
                                                            "char": 84
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "value",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                                "line": 17,
                                                                "char": 91
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                            "line": 17,
                                                            "char": 91
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                    "line": 17,
                                                    "char": 92
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 17,
                                                "char": 92
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 17,
                                        "char": 93
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 18,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 19,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_value",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 19,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 19,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 20,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 15,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 14,
                    "last-line": 22,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 24,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 24,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 24,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 23,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 23,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 22,
                    "last-line": 27,
                    "char": 19
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "getType",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 27,
                            "char": 48
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "preg_match",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 29,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "REGEXP_TCP",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 29,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 29,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 29,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 29,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 29,
                                        "char": 46
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 29,
                                "char": 48
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 30,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "TYPE_TCP",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 30,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 30,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 31,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 32,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "preg_match",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 32,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "REGEXP_SSL",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 32,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 32,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 32,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 32,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 32,
                                        "char": 46
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 32,
                                "char": 48
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 33,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "TYPE_SSL",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 33,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 33,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 34,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 35,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "preg_match",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 35,
                                                "char": 40
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "REGEXP_UNIX",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 35,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 35,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 35,
                                        "char": 40
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 35,
                                            "char": 47
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 35,
                                        "char": 47
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 35,
                                "char": 49
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 36,
                                            "char": 35
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "TYPE_UNIX",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 36,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 36,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 37,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 38,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 38,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 39,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 27,
                    "last-line": 41,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "getHost",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 41,
                            "char": 48
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "matches",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 43,
                                    "char": 20
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 44,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "preg_match",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 44,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "REGEXP_TCP",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 44,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 44,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 44,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 44,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 44,
                                        "char": 46
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "matches",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 44,
                                            "char": 55
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 44,
                                        "char": 55
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 44,
                                "char": 57
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "matches",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 45,
                                            "char": 27
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "1",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 45,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 45,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 46,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 47,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "preg_match",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 47,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "REGEXP_SSL",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 47,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 47,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 47,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 47,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 47,
                                        "char": 46
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "matches",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 47,
                                            "char": 55
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 47,
                                        "char": 55
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 47,
                                "char": 57
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "matches",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 48,
                                            "char": 27
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "1",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 48,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 48,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 49,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 50,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 50,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 51,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 41,
                    "last-line": 53,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "isValid",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 53,
                            "char": 48
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "type",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 55,
                                    "char": 17
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 57,
                            "char": 10
                        },
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
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 57,
                                                "char": 28
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 57,
                                            "char": 28
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 57,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 57,
                                "char": 30
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 58,
                                        "char": 25
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 59,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 60,
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
                                        "class": "self",
                                        "dynamic": 0,
                                        "name": "getType",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                    "line": 60,
                                                    "char": 39
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 60,
                                                "char": 39
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 60,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 60,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 61,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "not",
                                    "left": {
                                        "type": "variable",
                                        "value": "type",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 61,
                                        "char": 23
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 61,
                                    "char": 23
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 61,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 61,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 62,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 54,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 54,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 53,
                    "last-line": 64,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "listEndpoints",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 64,
                                "char": 64
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 64,
                            "char": 65
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 66,
                                    "char": 21
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 67,
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
                                            "type": "variable",
                                            "value": "connection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                            "line": 67,
                                            "char": 35
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Urls",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                        "line": 67,
                                                        "char": 58
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_ENDPOINT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                        "line": 67,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                    "line": 67,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                                "line": 67,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                        "line": 67,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 67,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 68,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                    "line": 68,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 68,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                            "line": 69,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                                "line": 65,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 65,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 64,
                    "last-line": 71,
                    "char": 26
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "TYPE_TCP",
                    "default": {
                        "type": "string",
                        "value": "tcp",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 6,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "TYPE_SSL",
                    "default": {
                        "type": "string",
                        "value": "ssl",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 7,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "TYPE_UNIX",
                    "default": {
                        "type": "string",
                        "value": "unix",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 8,
                        "char": 29
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "REGEXP_TCP",
                    "default": {
                        "type": "string",
                        "value": "\/^tcp:\\\\\/\\\\\/(.+?):(\\\\d+)\\\\\/?$\/",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 9,
                        "char": 56
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 10,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "REGEXP_SSL",
                    "default": {
                        "type": "string",
                        "value": "\/^ssl:\\\\\/\\\\\/(.+?):(\\\\d+)\\\\\/?$\/",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 10,
                        "char": 56
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 11,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "REGEXP_UNIX",
                    "default": {
                        "type": "string",
                        "value": "\/^unix:\\\\\/\\\\\/(.+)$\/",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 11,
                        "char": 46
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 12,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_ENDPOINT",
                    "default": {
                        "type": "string",
                        "value": "endpoint",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 12,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 13,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_DATABASES",
                    "default": {
                        "type": "string",
                        "value": "databases",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                        "line": 13,
                        "char": 40
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
                    "line": 14,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/endpoint.zep",
        "line": 3,
        "char": 5
    }
]