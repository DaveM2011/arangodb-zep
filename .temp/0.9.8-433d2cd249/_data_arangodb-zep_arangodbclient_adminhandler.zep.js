[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "AdminHandler",
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
                    "name": "getServerVersion",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "details",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 6,
                                "char": 58
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 6,
                            "char": 58
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 8,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 8,
                                    "char": 26
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 8,
                                    "char": 32
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 10,
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
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Urls",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 10,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "URL_ADMIN_VERSION",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 10,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 10,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 10,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 11,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "details",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 11,
                                "char": 20
                            },
                            "statements": [
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                            "line": 12,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 12,
                                                        "char": 54
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "array",
                                                            "left": [
                                                                {
                                                                    "key": {
                                                                        "type": "string",
                                                                        "value": "details",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                                        "line": 12,
                                                                        "char": 67
                                                                    },
                                                                    "value": {
                                                                        "type": "bool",
                                                                        "value": "true",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                                        "line": 12,
                                                                        "char": 73
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                                    "line": 12,
                                                                    "char": 73
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                            "line": 12,
                                                            "char": 74
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 12,
                                                        "char": 74
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 12,
                                                "char": 75
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 12,
                                            "char": 75
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 13,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 14,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 14,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 14,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 14,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 14,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 14,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 14,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 15,
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
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 15,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 15,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 15,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 16,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "details",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 16,
                                "char": 20
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 17,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 18,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 19,
                                            "char": 24
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "version",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 19,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 19,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 20,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 21,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 7,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                        "line": 7,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                    "line": 6,
                    "last-line": 23,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getServerRole",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 25,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 25,
                                    "char": 26
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 25,
                                    "char": 32
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 27,
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
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Urls",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 27,
                                            "char": 47
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "URL_ADMIN_SERVER_ROLE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 27,
                                            "char": 47
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 27,
                                        "char": 47
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 27,
                                    "char": 47
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 28,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 28,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 28,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 28,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 28,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 28,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 28,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 29,
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
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 29,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 29,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 29,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 30,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "variable",
                                    "value": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 30,
                                    "char": 20
                                },
                                "right": {
                                    "type": "string",
                                    "value": "role",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 30,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 30,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 31,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 24,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                        "line": 24,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                    "line": 23,
                    "last-line": 33,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getServerTime",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 35,
                                    "char": 21
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 35,
                                    "char": 27
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 37,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 37,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 37,
                                            "char": 47
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 37,
                                                        "char": 72
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_ADMIN_TIME",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 37,
                                                        "char": 72
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 37,
                                                    "char": 72
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 37,
                                                "char": 72
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 37,
                                        "char": 73
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 37,
                                    "char": 73
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 38,
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
                                            "value": "response",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 38,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 38,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 38,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 39,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "variable",
                                    "value": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 39,
                                    "char": 20
                                },
                                "right": {
                                    "type": "string",
                                    "value": "time",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 39,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 39,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 40,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "double",
                                "mandatory": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 34,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                        "line": 34,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                    "line": 33,
                    "last-line": 42,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getServerLog",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 42,
                                "char": 52
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 42,
                            "char": 52
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 44,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 44,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 46,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 46,
                                                        "char": 66
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_ADMIN_LOG",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 46,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 46,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 46,
                                                "char": 66
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 46,
                                                    "char": 75
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 46,
                                                "char": 75
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 46,
                                        "char": 76
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 46,
                                    "char": 76
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 47,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 47,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 47,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 47,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 47,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 47,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 47,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 48,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 48,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 48,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 49,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 43,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                        "line": 43,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                    "line": 42,
                    "last-line": 51,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "reloadServerRouting",
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 53,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 53,
                                    "char": 31
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 53,
                                                "char": 67
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_ADMIN_ROUTING_RELOAD",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 53,
                                                "char": 67
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 53,
                                            "char": 67
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 53,
                                        "char": 67
                                    },
                                    {
                                        "parameter": {
                                            "type": "string",
                                            "value": "",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 53,
                                            "char": 71
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 53,
                                        "char": 71
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 53,
                                "char": 72
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 54,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 54,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 55,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 52,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                        "line": 52,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                    "line": 51,
                    "last-line": 57,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getServerStatistics",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 59,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 59,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 61,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 61,
                                                        "char": 73
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_ADMIN_STATISTICS",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 61,
                                                        "char": 73
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 61,
                                                    "char": 73
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 61,
                                                "char": 73
                                            },
                                            {
                                                "parameter": {
                                                    "type": "empty-array",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 61,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 61,
                                                "char": 77
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 61,
                                        "char": 78
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 61,
                                    "char": 78
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 62,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 62,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 62,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 62,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 62,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 62,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 62,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 63,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 63,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 63,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 64,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 58,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                        "line": 58,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                    "line": 57,
                    "last-line": 66,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getServerStatisticsDescription",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 66,
                                "char": 70
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 66,
                            "char": 70
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 68,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 68,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 70,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 70,
                                                        "char": 85
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_ADMIN_STATISTICS_DESCRIPTION",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                        "line": 70,
                                                        "char": 85
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 70,
                                                    "char": 85
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 70,
                                                "char": 85
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 70,
                                                    "char": 94
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 70,
                                                "char": 94
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 70,
                                        "char": 95
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 70,
                                    "char": 95
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 71,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 71,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                            "line": 71,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                    "line": 71,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                                "line": 71,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                        "line": 71,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 71,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 72,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                    "line": 72,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 72,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                            "line": 73,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                                "line": 67,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                        "line": 67,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                    "line": 66,
                    "last-line": 75,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "OPTION_DETAILS",
                    "default": {
                        "type": "string",
                        "value": "details",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                        "line": 5,
                        "char": 37
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
                    "line": 6,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/adminhandler.zep",
        "line": 3,
        "char": 5
    }
]