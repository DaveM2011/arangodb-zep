[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "ServerException",
        "abstract": 0,
        "final": 0,
        "extends": "Exception",
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_details",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                        "line": 5,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
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
                    "name": "__toString",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "concat",
                                "left": {
                                    "type": "concat",
                                    "left": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "constant",
                                                "value": "__CLASS__",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 10,
                                                "char": 26
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": ": ",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 10,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 10,
                                            "char": 33
                                        },
                                        "right": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 10,
                                                "char": 40
                                            },
                                            "name": "getServerCode",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 10,
                                            "char": 57
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 10,
                                        "char": 57
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": " ",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 10,
                                        "char": 63
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 10,
                                    "char": 63
                                },
                                "right": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 10,
                                        "char": 70
                                    },
                                    "name": "getMessage",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 10,
                                    "char": 83
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 10,
                                "char": 83
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                            "line": 11,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 9,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                        "line": 9,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                    "line": 8,
                    "last-line": 13,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setDetails",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "details",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                            "line": 13,
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
                                    "property": "_details",
                                    "expr": {
                                        "type": "variable",
                                        "value": "details",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 15,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 15,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                            "line": 16,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                    "line": 13,
                    "last-line": 18,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getDetails",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 20,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_details",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 20,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 20,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                            "line": 21,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 19,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                        "line": 19,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                    "line": 18,
                    "last-line": 23,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getServerCode",
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 25,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_details",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 25,
                                            "char": 32
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 25,
                                        "char": 32
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 25,
                                            "char": 49
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_CODE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 25,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 25,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 25,
                                    "char": 51
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 25,
                                "char": 51
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 26,
                                                "char": 25
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_details",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 26,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 26,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 26,
                                                "char": 51
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_CODE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 26,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 26,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 26,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 27,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                            "line": 28,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 28,
                                    "char": 21
                                },
                                "name": "getCode",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 28,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                            "line": 29,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 24,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                        "line": 24,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                    "line": 23,
                    "last-line": 31,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getServerMessage",
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 33,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_details",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 33,
                                            "char": 32
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 33,
                                        "char": 32
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 33,
                                            "char": 52
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_MESSAGE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 33,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 33,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 33,
                                    "char": 54
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 33,
                                "char": 54
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 34,
                                                "char": 25
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_details",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 34,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 34,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 34,
                                                "char": 54
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_MESSAGE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                                "line": 34,
                                                "char": 54
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                            "line": 34,
                                            "char": 54
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                        "line": 34,
                                        "char": 55
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                    "line": 35,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                            "line": 36,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                            "line": 37,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                                "line": 32,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                        "line": 32,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                    "line": 31,
                    "last-line": 39,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_CODE",
                    "default": {
                        "type": "string",
                        "value": "errorNum",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                        "line": 6,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_MESSAGE",
                    "default": {
                        "type": "string",
                        "value": "errorMessage",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                        "line": 7,
                        "char": 41
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
                    "line": 8,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/serverexception.zep",
        "line": 3,
        "char": 5
    }
]