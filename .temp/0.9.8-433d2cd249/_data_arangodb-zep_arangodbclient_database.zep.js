[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Database",
        "abstract": 0,
        "final": 0,
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "create",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 7,
                                "char": 57
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 7,
                            "char": 58
                        },
                        {
                            "type": "parameter",
                            "name": "name",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 7,
                            "char": 71
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "payload",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 9,
                                    "char": 20
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 9,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 11,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "payload",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 11,
                                                        "char": 51
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_DATABASE_NAME",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 11,
                                                        "char": 51
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 11,
                                                    "char": 51
                                                },
                                                "value": {
                                                    "type": "variable",
                                                    "value": "name",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 11,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 11,
                                                "char": 57
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 11,
                                                        "char": 86
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_DATABASE_USERS",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 11,
                                                        "char": 86
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 11,
                                                    "char": 86
                                                },
                                                "value": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "array",
                                                                "left": [
                                                                    {
                                                                        "key": {
                                                                            "type": "string",
                                                                            "value": "username",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                            "line": 11,
                                                                            "char": 101
                                                                        },
                                                                        "value": {
                                                                            "type": "mcall",
                                                                            "variable": {
                                                                                "type": "variable",
                                                                                "value": "connection",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                "line": 11,
                                                                                "char": 114
                                                                            },
                                                                            "name": "getOption",
                                                                            "call-type": 1,
                                                                            "parameters": [
                                                                                {
                                                                                    "parameter": {
                                                                                        "type": "static-constant-access",
                                                                                        "left": {
                                                                                            "type": "variable",
                                                                                            "value": "ConnectionOptions",
                                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                            "line": 11,
                                                                                            "char": 160
                                                                                        },
                                                                                        "right": {
                                                                                            "type": "variable",
                                                                                            "value": "OPTION_AUTH_USER",
                                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                            "line": 11,
                                                                                            "char": 160
                                                                                        },
                                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                        "line": 11,
                                                                                        "char": 160
                                                                                    },
                                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                    "line": 11,
                                                                                    "char": 160
                                                                                }
                                                                            ],
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                            "line": 11,
                                                                            "char": 161
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                        "line": 11,
                                                                        "char": 161
                                                                    },
                                                                    {
                                                                        "key": {
                                                                            "type": "string",
                                                                            "value": "passwd",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                            "line": 11,
                                                                            "char": 172
                                                                        },
                                                                        "value": {
                                                                            "type": "mcall",
                                                                            "variable": {
                                                                                "type": "variable",
                                                                                "value": "connection",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                "line": 11,
                                                                                "char": 185
                                                                            },
                                                                            "name": "getOption",
                                                                            "call-type": 1,
                                                                            "parameters": [
                                                                                {
                                                                                    "parameter": {
                                                                                        "type": "static-constant-access",
                                                                                        "left": {
                                                                                            "type": "variable",
                                                                                            "value": "ConnectionOptions",
                                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                            "line": 11,
                                                                                            "char": 233
                                                                                        },
                                                                                        "right": {
                                                                                            "type": "variable",
                                                                                            "value": "OPTION_AUTH_PASSWD",
                                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                            "line": 11,
                                                                                            "char": 233
                                                                                        },
                                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                        "line": 11,
                                                                                        "char": 233
                                                                                    },
                                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                                    "line": 11,
                                                                                    "char": 233
                                                                                }
                                                                            ],
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                            "line": 11,
                                                                            "char": 234
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                        "line": 11,
                                                                        "char": 234
                                                                    }
                                                                ],
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                "line": 11,
                                                                "char": 235
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                            "line": 11,
                                                            "char": 235
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 11,
                                                    "char": 236
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 11,
                                                "char": 236
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 11,
                                        "char": 237
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 11,
                                    "char": 237
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 12,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                            "line": 12,
                                            "char": 36
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 12,
                                                        "char": 60
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_DATABASE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 12,
                                                        "char": 60
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 12,
                                                    "char": 60
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 12,
                                                "char": 60
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "connection",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 12,
                                                        "char": 73
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "payload",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                "line": 12,
                                                                "char": 101
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                            "line": 12,
                                                            "char": 101
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 12,
                                                    "char": 102
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 12,
                                                "char": 102
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 12,
                                        "char": 103
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 12,
                                    "char": 103
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 13,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 13,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 13,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 14,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 8,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                        "line": 8,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                    "line": 7,
                    "last-line": 16,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "delete",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 16,
                                "char": 57
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 16,
                            "char": 58
                        },
                        {
                            "type": "parameter",
                            "name": "name",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 16,
                            "char": 71
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 18,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 18,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 20,
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
                                        "name": "buildUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Urls",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 20,
                                                        "char": 58
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_DATABASE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 20,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 20,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 20,
                                                "char": 58
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "name",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                "line": 20,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                            "line": 20,
                                                            "char": 65
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 20,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 20,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 20,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 20,
                                    "char": 67
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 21,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                            "line": 21,
                                            "char": 36
                                        },
                                        "name": "delete",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 21,
                                                    "char": 47
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 21,
                                                "char": 47
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 21,
                                        "char": 48
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 21,
                                    "char": 48
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 22,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 22,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 22,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 23,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 17,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                        "line": 17,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                    "line": 16,
                    "last-line": 25,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "listDatabases",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 25,
                                "char": 64
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 25,
                            "char": 65
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "scall",
                                "dynamic-class": 0,
                                "class": "self",
                                "dynamic": 0,
                                "name": "databases",
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "connection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                            "line": 27,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 27,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 27,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 28,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 26,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                        "line": 26,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                    "line": 25,
                    "last-line": 30,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "databases",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 30,
                                "char": 60
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 30,
                            "char": 61
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 32,
                                    "char": 21
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 34,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                            "line": 34,
                                            "char": 36
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 34,
                                                        "char": 59
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_DATABASE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 34,
                                                        "char": 59
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 34,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 34,
                                                "char": 59
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 34,
                                        "char": 60
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 34,
                                    "char": 60
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 35,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 35,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 35,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 36,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 31,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                        "line": 31,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                    "line": 30,
                    "last-line": 38,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "listUserDatabases",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 38,
                                "char": 68
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 38,
                            "char": 69
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 40,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 40,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 42,
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
                                        "name": "buildUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Urls",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 42,
                                                        "char": 58
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_DATABASE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 42,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 42,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 42,
                                                "char": 58
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "user",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                "line": 42,
                                                                "char": 67
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                            "line": 42,
                                                            "char": 67
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 42,
                                                    "char": 68
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 42,
                                                "char": 68
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 42,
                                        "char": 69
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 42,
                                    "char": 69
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 43,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                            "line": 43,
                                            "char": 36
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 43,
                                                    "char": 44
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 43,
                                                "char": 44
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 43,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 43,
                                    "char": 45
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 44,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 44,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 44,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 45,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 39,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                        "line": 39,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                    "line": 38,
                    "last-line": 47,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "getInfo",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 47,
                                "char": 58
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 47,
                            "char": 59
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 49,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 49,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 51,
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
                                        "name": "buildUrl",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "Urls",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 51,
                                                        "char": 58
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_DATABASE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                        "line": 51,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 51,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 51,
                                                "char": 58
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "current",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                                "line": 51,
                                                                "char": 70
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                            "line": 51,
                                                            "char": 70
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 51,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 51,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 51,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 51,
                                    "char": 72
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 52,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                            "line": 52,
                                            "char": 36
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                    "line": 52,
                                                    "char": 44
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                                "line": 52,
                                                "char": 44
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                        "line": 52,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 52,
                                    "char": 45
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 53,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                    "line": 53,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 53,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                            "line": 54,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                                "line": 48,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                        "line": 48,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                    "line": 47,
                    "last-line": 56,
                    "char": 26
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_DATABASE_NAME",
                    "default": {
                        "type": "string",
                        "value": "name",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                        "line": 5,
                        "char": 39
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                    "line": 6,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_DATABASE_USERS",
                    "default": {
                        "type": "string",
                        "value": "users",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                        "line": 6,
                        "char": 41
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
                    "line": 7,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/database.zep",
        "line": 3,
        "char": 5
    }
]