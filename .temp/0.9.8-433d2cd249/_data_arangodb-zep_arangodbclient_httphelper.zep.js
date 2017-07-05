[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "HttpHelper",
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
                    "name": "createConnection",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "ConnectionOptions",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 17,
                                "char": 71
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 17,
                            "char": 72
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "endpoint",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 19,
                                    "char": 21
                                },
                                {
                                    "variable": "context",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 19,
                                    "char": 30
                                },
                                {
                                    "variable": "fp",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 19,
                                    "char": 34
                                },
                                {
                                    "variable": "errNo",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 19,
                                    "char": 41
                                },
                                {
                                    "variable": "message",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 19,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 21,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "endpoint",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 21,
                                            "char": 32
                                        },
                                        "name": "offsetGet",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "ConnectionOptions",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 21,
                                                        "char": 77
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "OPTION_ENDPOINT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 21,
                                                        "char": 77
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 21,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 21,
                                                "char": 77
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 21,
                                        "char": 78
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 21,
                                    "char": 78
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 22,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "context",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "stream_context_create",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 22,
                                        "char": 47
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 22,
                                    "char": 47
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 23,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "scall",
                                    "dynamic-class": 0,
                                    "class": "Endpoint",
                                    "dynamic": 0,
                                    "name": "getType",
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "endpoint",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 23,
                                                "char": 38
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 23,
                                            "char": 38
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 23,
                                    "char": 41
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "Endpoint",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 23,
                                        "char": 62
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "TYPE_SSL",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 23,
                                        "char": 62
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 23,
                                    "char": 62
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 23,
                                "char": 62
                            },
                            "statements": [
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "stream_context_set_option",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "context",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 24,
                                                    "char": 46
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 24,
                                                "char": 46
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "ssl",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 24,
                                                    "char": 53
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 24,
                                                "char": 53
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "verify_peer",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 24,
                                                    "char": 68
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 24,
                                                "char": 68
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 24,
                                                        "char": 78
                                                    },
                                                    "name": "offsetGet",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 24,
                                                                    "char": 126
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_VERIFY_CERT",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 24,
                                                                    "char": 126
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 24,
                                                                "char": 126
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 24,
                                                            "char": 126
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 24,
                                                    "char": 127
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 24,
                                                "char": 127
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 24,
                                        "char": 128
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 25,
                                    "char": 37
                                },
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "stream_context_set_option",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "context",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 25,
                                                    "char": 46
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 25,
                                                "char": 46
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "ssl",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 25,
                                                    "char": 53
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 25,
                                                "char": 53
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "allow_self_signed",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 25,
                                                    "char": 74
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 25,
                                                "char": 74
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 25,
                                                        "char": 84
                                                    },
                                                    "name": "offsetGet",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 25,
                                                                    "char": 138
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_ALLOW_SELF_SIGNED",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 25,
                                                                    "char": 138
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 25,
                                                                "char": 138
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 25,
                                                            "char": 138
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 25,
                                                    "char": 139
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 25,
                                                "char": 139
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 25,
                                        "char": 140
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 26,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-identical",
                                        "left": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 26,
                                                "char": 24
                                            },
                                            "name": "offsetGet",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "ConnectionOptions",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 26,
                                                            "char": 68
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "OPTION_CIPHERS",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 26,
                                                            "char": 68
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 26,
                                                        "char": 68
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 26,
                                                    "char": 68
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 26,
                                            "char": 72
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 26,
                                            "char": 79
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 26,
                                        "char": 79
                                    },
                                    "statements": [
                                        {
                                            "type": "fcall",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "stream_context_set_option",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "context",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 27,
                                                            "char": 50
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 27,
                                                        "char": 50
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "ssl",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 27,
                                                            "char": 57
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 27,
                                                        "char": 57
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "ciphers",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 27,
                                                            "char": 68
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 27,
                                                        "char": 68
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 27,
                                                                "char": 78
                                                            },
                                                            "name": "offsetGet",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "static-constant-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "ConnectionOptions",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 27,
                                                                            "char": 122
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "OPTION_CIPHERS",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 27,
                                                                            "char": 122
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 27,
                                                                        "char": 122
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 27,
                                                                    "char": 122
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 27,
                                                            "char": 123
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 27,
                                                        "char": 123
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 27,
                                                "char": 124
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 28,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 29,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 30,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "fp",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "stream_socket_client",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "endpoint",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 30,
                                                    "char": 48
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 30,
                                                "char": 48
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "errNo",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 30,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 30,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "message",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 30,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 30,
                                                "char": 64
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 30,
                                                        "char": 74
                                                    },
                                                    "name": "offsetGet",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "ConnectionOptions",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 30,
                                                                    "char": 118
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "OPTION_TIMEOUT",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 30,
                                                                    "char": 118
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 30,
                                                                "char": 118
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 30,
                                                            "char": 118
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 30,
                                                    "char": 119
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 30,
                                                "char": 119
                                            },
                                            {
                                                "parameter": {
                                                    "type": "constant",
                                                    "value": "STREAM_CLIENT_CONNECT",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 30,
                                                    "char": 142
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 30,
                                                "char": 142
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "context",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 30,
                                                    "char": 151
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 30,
                                                "char": 151
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 30,
                                        "char": 152
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 30,
                                    "char": 152
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 31,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "variable",
                                    "value": "fp",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 31,
                                    "char": 16
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 31,
                                "char": 16
                            },
                            "statements": [
                                {
                                    "type": "throw",
                                    "expr": {
                                        "type": "new",
                                        "class": "ConnectException",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "cannot connect to endpoint '",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 32,
                                                                "char": 71
                                                            },
                                                            "right": {
                                                                "type": "mcall",
                                                                "variable": {
                                                                    "type": "variable",
                                                                    "value": "options",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 32,
                                                                    "char": 81
                                                                },
                                                                "name": "offsetGet",
                                                                "call-type": 1,
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "static-constant-access",
                                                                            "left": {
                                                                                "type": "variable",
                                                                                "value": "ConnectionOptions",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 32,
                                                                                "char": 126
                                                                            },
                                                                            "right": {
                                                                                "type": "variable",
                                                                                "value": "OPTION_ENDPOINT",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 32,
                                                                                "char": 126
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 32,
                                                                            "char": 126
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 32,
                                                                        "char": 126
                                                                    }
                                                                ],
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 32,
                                                                "char": 128
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 32,
                                                            "char": 128
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "': ",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 32,
                                                            "char": 136
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 32,
                                                        "char": 136
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "message",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 32,
                                                        "char": 145
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 32,
                                                    "char": 145
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 32,
                                                "char": 145
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "errNo",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 32,
                                                    "char": 152
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 32,
                                                "char": 152
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 32,
                                        "char": 153
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 33,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 34,
                            "char": 26
                        },
                        {
                            "type": "fcall",
                            "expr": {
                                "type": "fcall",
                                "name": "stream_set_timeout",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "fp",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 34,
                                            "char": 30
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 34,
                                        "char": 30
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 34,
                                                "char": 40
                                            },
                                            "name": "offsetGet",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "ConnectionOptions",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 34,
                                                            "char": 84
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "OPTION_TIMEOUT",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 34,
                                                            "char": 84
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 34,
                                                        "char": 84
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 34,
                                                    "char": 84
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 34,
                                            "char": 85
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 34,
                                        "char": 85
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 34,
                                "char": 86
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 35,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "fp",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 35,
                                "char": 18
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 36,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 17,
                    "last-line": 38,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "buildRequest",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "ConnectionOptions",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 38,
                                "char": 67
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 38,
                            "char": 68
                        },
                        {
                            "type": "parameter",
                            "name": "connectionHeader",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 38,
                            "char": 93
                        },
                        {
                            "type": "parameter",
                            "name": "method",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 38,
                            "char": 108
                        },
                        {
                            "type": "parameter",
                            "name": "url",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 38,
                            "char": 120
                        },
                        {
                            "type": "parameter",
                            "name": "body",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 38,
                            "char": 133
                        },
                        {
                            "type": "parameter",
                            "name": "customHeaders",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 38,
                                "char": 159
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 38,
                            "char": 159
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "length",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 40,
                                    "char": 19
                                },
                                {
                                    "variable": "contentType",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 40,
                                    "char": 32
                                },
                                {
                                    "variable": "customHeader",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 40,
                                    "char": 46
                                },
                                {
                                    "variable": "headerKey",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 40,
                                    "char": 57
                                },
                                {
                                    "variable": "headerValue",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 40,
                                    "char": 70
                                },
                                {
                                    "variable": "request",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 40,
                                    "char": 79
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 42,
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
                                                "value": "body",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 42,
                                                "char": 27
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 42,
                                            "char": 27
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 42,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 42,
                                "char": 29
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
                                                        "value": "Invalid value for body. Expecting string, got ",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 43,
                                                        "char": 88
                                                    },
                                                    "right": {
                                                        "type": "fcall",
                                                        "name": "gettype",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "body",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 43,
                                                                    "char": 102
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 43,
                                                                "char": 102
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 43,
                                                        "char": 103
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 43,
                                                    "char": 103
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 43,
                                                "char": 103
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 43,
                                        "char": 104
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 44,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 45,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "length",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "strlen",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "body",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 45,
                                                    "char": 34
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 45,
                                                "char": 34
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 45,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 45,
                                    "char": 35
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 46,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 46,
                                        "char": 20
                                    },
                                    "name": "offsetGet",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "ConnectionOptions",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 46,
                                                    "char": 62
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "OPTION_BATCH",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 46,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 46,
                                                "char": 62
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 46,
                                            "char": 62
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 46,
                                    "char": 66
                                },
                                "right": {
                                    "type": "bool",
                                    "value": "true",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 46,
                                    "char": 73
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 46,
                                "char": 73
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "contentType",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "Content-Type: multipart\/form-data; boundary=",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 47,
                                                        "char": 79
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 47,
                                                            "char": 101
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "MIME_BOUNDARY",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 47,
                                                            "char": 101
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 47,
                                                        "char": 101
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 47,
                                                    "char": 101
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 47,
                                                        "char": 112
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "EOL",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 47,
                                                        "char": 112
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 47,
                                                    "char": 112
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 47,
                                                "char": 112
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 47,
                                            "char": 112
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 48,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "contentType",
                                            "expr": {
                                                "type": "string",
                                                "value": "",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 49,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 49,
                                            "char": 33
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 50,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "and",
                                        "left": {
                                            "type": "greater",
                                            "left": {
                                                "type": "variable",
                                                "value": "length",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 50,
                                                "char": 23
                                            },
                                            "right": {
                                                "type": "int",
                                                "value": "0",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 50,
                                                "char": 28
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 50,
                                            "char": 28
                                        },
                                        "right": {
                                            "type": "identical",
                                            "left": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 50,
                                                    "char": 38
                                                },
                                                "name": "offsetGet",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "ConnectionOptions",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 50,
                                                                "char": 84
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "OPTION_BATCHPART",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 50,
                                                                "char": 84
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 50,
                                                            "char": 84
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 50,
                                                        "char": 84
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 50,
                                                "char": 88
                                            },
                                            "right": {
                                                "type": "bool",
                                                "value": "false",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 50,
                                                "char": 96
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 50,
                                            "char": 96
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 50,
                                        "char": 96
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "contentType",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "Content-Type: application\/json",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 51,
                                                            "char": 69
                                                        },
                                                        "right": {
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "self",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 51,
                                                                "char": 80
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "EOL",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 51,
                                                                "char": 80
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 51,
                                                            "char": 80
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 51,
                                                        "char": 80
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 51,
                                                    "char": 80
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 52,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 53,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 54,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "customHeader",
                                    "expr": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 54,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 54,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 55,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "customHeaders",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 55,
                                "char": 53
                            },
                            "key": "headerKey",
                            "value": "headerValue",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "customHeader",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "headerKey",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 56,
                                                            "char": 42
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": ": ",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 56,
                                                            "char": 49
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 56,
                                                        "char": 49
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "headerValue",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 56,
                                                        "char": 63
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 56,
                                                    "char": 63
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 56,
                                                        "char": 74
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "EOL",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 56,
                                                        "char": 74
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 56,
                                                    "char": 74
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 56,
                                                "char": 74
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 56,
                                            "char": 74
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 57,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 58,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "request",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "fcall",
                                                                    "name": "sprintf",
                                                                    "call-type": 1,
                                                                    "parameters": [
                                                                        {
                                                                            "parameter": {
                                                                                "type": "string",
                                                                                "value": "%s %s %s",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 58,
                                                                                "char": 42
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 58,
                                                                            "char": 42
                                                                        },
                                                                        {
                                                                            "parameter": {
                                                                                "type": "variable",
                                                                                "value": "method",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 58,
                                                                                "char": 50
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 58,
                                                                            "char": 50
                                                                        },
                                                                        {
                                                                            "parameter": {
                                                                                "type": "variable",
                                                                                "value": "url",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 58,
                                                                                "char": 55
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 58,
                                                                            "char": 55
                                                                        },
                                                                        {
                                                                            "parameter": {
                                                                                "type": "static-constant-access",
                                                                                "left": {
                                                                                    "type": "variable",
                                                                                    "value": "self",
                                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                    "line": 58,
                                                                                    "char": 71
                                                                                },
                                                                                "right": {
                                                                                    "type": "variable",
                                                                                    "value": "PROTOCOL",
                                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                    "line": 58,
                                                                                    "char": 71
                                                                                },
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 58,
                                                                                "char": 71
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 58,
                                                                            "char": 71
                                                                        }
                                                                    ],
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 58,
                                                                    "char": 73
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "connectionHeader",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 58,
                                                                    "char": 92
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 58,
                                                                "char": 92
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "customHeader",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 58,
                                                                "char": 107
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 58,
                                                            "char": 107
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "contentType",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 58,
                                                            "char": 121
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 58,
                                                        "char": 121
                                                    },
                                                    "right": {
                                                        "type": "fcall",
                                                        "name": "sprintf",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "string",
                                                                    "value": "Content-Length: %s",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 58,
                                                                    "char": 151
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 58,
                                                                "char": 151
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "length",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 58,
                                                                    "char": 159
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 58,
                                                                "char": 159
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 58,
                                                        "char": 161
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 58,
                                                    "char": 161
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 58,
                                                        "char": 173
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "EOL",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 58,
                                                        "char": 173
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 58,
                                                    "char": 173
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 58,
                                                "char": 173
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 58,
                                                    "char": 185
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "EOL",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 58,
                                                    "char": 185
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 58,
                                                "char": 185
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 58,
                                            "char": 185
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "body",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 58,
                                            "char": 191
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 58,
                                        "char": 191
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 58,
                                    "char": 191
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 59,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "request",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 59,
                                "char": 23
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 60,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 39,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 39,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 38,
                    "last-line": 62,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "validateMethod",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "method",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 62,
                            "char": 56
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "or",
                                "left": {
                                    "type": "or",
                                    "left": {
                                        "type": "or",
                                        "left": {
                                            "type": "or",
                                            "left": {
                                                "type": "or",
                                                "left": {
                                                    "type": "identical",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "method",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 64,
                                                        "char": 21
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 64,
                                                            "char": 42
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "METHOD_POST",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 64,
                                                            "char": 42
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 64,
                                                        "char": 42
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 64,
                                                    "char": 42
                                                },
                                                "right": {
                                                    "type": "identical",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "method",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 64,
                                                        "char": 53
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 64,
                                                            "char": 73
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "METHOD_PUT",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 64,
                                                            "char": 73
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 64,
                                                        "char": 73
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 64,
                                                    "char": 73
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 64,
                                                "char": 73
                                            },
                                            "right": {
                                                "type": "identical",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "method",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 64,
                                                    "char": 84
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 64,
                                                        "char": 107
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "METHOD_DELETE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 64,
                                                        "char": 107
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 64,
                                                    "char": 107
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 64,
                                                "char": 107
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 64,
                                            "char": 107
                                        },
                                        "right": {
                                            "type": "identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "method",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 64,
                                                "char": 118
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 64,
                                                    "char": 138
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "METHOD_GET",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 64,
                                                    "char": 138
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 64,
                                                "char": 138
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 64,
                                            "char": 138
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 64,
                                        "char": 138
                                    },
                                    "right": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "method",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 64,
                                            "char": 149
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 64,
                                                "char": 170
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "METHOD_HEAD",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 64,
                                                "char": 170
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 64,
                                            "char": 170
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 64,
                                        "char": 170
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 64,
                                    "char": 170
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "method",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 64,
                                        "char": 181
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 64,
                                            "char": 202
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "METHOD_PATCH",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 64,
                                            "char": 202
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 64,
                                        "char": 202
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 64,
                                    "char": 202
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 64,
                                "char": 202
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 65,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 66,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 67,
                            "char": 13
                        },
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
                                                "type": "concat",
                                                "left": {
                                                    "type": "string",
                                                    "value": "Invalid request method '",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 67,
                                                    "char": 62
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "method",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 67,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 67,
                                                "char": 71
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "'",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 67,
                                                "char": 76
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 67,
                                            "char": 76
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 67,
                                        "char": 76
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 67,
                                "char": 77
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 68,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 63,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 63,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 62,
                    "last-line": 70,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "transfer",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "socket",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 70,
                            "char": 43
                        },
                        {
                            "type": "parameter",
                            "name": "request",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 70,
                            "char": 59
                        },
                        {
                            "type": "parameter",
                            "name": "method",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 70,
                            "char": 74
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "contentLength",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 26
                                },
                                {
                                    "variable": "expectedLength",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 42
                                },
                                {
                                    "variable": "totalRead",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 53
                                },
                                {
                                    "variable": "contentLengthPos",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 71
                                },
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 79
                                },
                                {
                                    "variable": "first",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 86
                                },
                                {
                                    "variable": "read",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 92
                                },
                                {
                                    "variable": "pos",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 97
                                },
                                {
                                    "variable": "bodyStart",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 72,
                                    "char": 108
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 74,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "fcall",
                                    "name": "is_resource",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "socket",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 74,
                                                "char": 31
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 74,
                                            "char": 31
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 74,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 74,
                                "char": 33
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
                                                    "value": "Invalid socket used",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 75,
                                                    "char": 60
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 75,
                                                "char": 60
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 75,
                                        "char": 61
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 76,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 78,
                            "char": 14
                        },
                        {
                            "type": "fcall",
                            "expr": {
                                "type": "fcall",
                                "name": "fwrite",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "socket",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 78,
                                            "char": 22
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 78,
                                        "char": 22
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "request",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 78,
                                            "char": 31
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 78,
                                        "char": 31
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 78,
                                "char": 32
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 79,
                            "char": 14
                        },
                        {
                            "type": "fcall",
                            "expr": {
                                "type": "fcall",
                                "name": "fflush",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "socket",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 79,
                                            "char": 22
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 79,
                                        "char": 22
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 79,
                                "char": 23
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 80,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "contentLength",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 80,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 80,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 81,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "expectedLength",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 81,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 81,
                                    "char": 34
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 82,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "totalRead",
                                    "expr": {
                                        "type": "int",
                                        "value": "0",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 82,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 82,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 83,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "contentLengthPos",
                                    "expr": {
                                        "type": "int",
                                        "value": "0",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 83,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 83,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 84,
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
                                        "type": "string",
                                        "value": "",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 84,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 84,
                                    "char": 24
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 85,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "first",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 85,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 85,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 86,
                            "char": 13
                        },
                        {
                            "type": "while",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "or",
                                    "left": {
                                        "type": "variable",
                                        "value": "first",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 86,
                                        "char": 23
                                    },
                                    "right": {
                                        "type": "not",
                                        "left": {
                                            "type": "fcall",
                                            "name": "feof",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "socket",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 86,
                                                        "char": 37
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 86,
                                                    "char": 37
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 86,
                                            "char": 38
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 86,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 86,
                                    "char": 38
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 86,
                                "char": 40
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "read",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "fread",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "socket",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 87,
                                                            "char": 36
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 87,
                                                        "char": 36
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "self",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 87,
                                                                "char": 54
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "CHUNK_SIZE",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 87,
                                                                "char": 54
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 87,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 87,
                                                        "char": 54
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 87,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 87,
                                            "char": 55
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 88,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "or",
                                        "left": {
                                            "type": "identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "read",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 88,
                                                "char": 23
                                            },
                                            "right": {
                                                "type": "bool",
                                                "value": "false",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 88,
                                                "char": 32
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 88,
                                            "char": 32
                                        },
                                        "right": {
                                            "type": "identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "read",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 88,
                                                "char": 41
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 88,
                                                "char": 46
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 88,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 88,
                                        "char": 46
                                    },
                                    "statements": [
                                        {
                                            "type": "break",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 90,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 91,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "add-assign",
                                            "variable": "totalRead",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "strlen",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "read",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 91,
                                                            "char": 40
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 91,
                                                        "char": 40
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 91,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 91,
                                            "char": 41
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 92,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "variable",
                                        "value": "first",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 92,
                                        "char": 22
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "result",
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "read",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 93,
                                                        "char": 34
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 93,
                                                    "char": 34
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 94,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "first",
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "false",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 94,
                                                        "char": 34
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 94,
                                                    "char": 34
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 95,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "result",
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "read",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 96,
                                                        "char": 34
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 96,
                                                    "char": 34
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 97,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 98,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "contentLength",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 98,
                                            "char": 32
                                        },
                                        "right": {
                                            "type": "null",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 98,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 98,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "pos",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "stripos",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "result",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 99,
                                                                    "char": 41
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 99,
                                                                "char": 41
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "string",
                                                                    "value": "content-length: ",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 99,
                                                                    "char": 61
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 99,
                                                                "char": 61
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "int",
                                                                    "value": "12",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 99,
                                                                    "char": 65
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 99,
                                                                "char": 65
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 99,
                                                        "char": 66
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 99,
                                                    "char": 66
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 100,
                                            "char": 18
                                        },
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "not-identical",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "pos",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 100,
                                                    "char": 26
                                                },
                                                "right": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 100,
                                                    "char": 34
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 100,
                                                "char": 34
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "contentLength",
                                                            "expr": {
                                                                "type": "cast",
                                                                "left": "int",
                                                                "right": {
                                                                    "type": "fcall",
                                                                    "name": "substr",
                                                                    "call-type": 1,
                                                                    "parameters": [
                                                                        {
                                                                            "parameter": {
                                                                                "type": "variable",
                                                                                "value": "result",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 101,
                                                                                "char": 60
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 101,
                                                                            "char": 60
                                                                        },
                                                                        {
                                                                            "parameter": {
                                                                                "type": "add",
                                                                                "left": {
                                                                                    "type": "variable",
                                                                                    "value": "pos",
                                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                    "line": 101,
                                                                                    "char": 66
                                                                                },
                                                                                "right": {
                                                                                    "type": "int",
                                                                                    "value": "16",
                                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                    "line": 101,
                                                                                    "char": 70
                                                                                },
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 101,
                                                                                "char": 70
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 101,
                                                                            "char": 70
                                                                        },
                                                                        {
                                                                            "parameter": {
                                                                                "type": "int",
                                                                                "value": "10",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                                "line": 101,
                                                                                "char": 74
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 101,
                                                                            "char": 74
                                                                        }
                                                                    ],
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 101,
                                                                    "char": 75
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 101,
                                                                "char": 75
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 101,
                                                            "char": 75
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 102,
                                                    "char": 23
                                                },
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "contentLengthPos",
                                                            "expr": {
                                                                "type": "add",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "pos",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 102,
                                                                    "char": 48
                                                                },
                                                                "right": {
                                                                    "type": "int",
                                                                    "value": "17",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 102,
                                                                    "char": 52
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 102,
                                                                "char": 52
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 102,
                                                            "char": 52
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 103,
                                                    "char": 22
                                                },
                                                {
                                                    "type": "if",
                                                    "expr": {
                                                        "type": "identical",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "method",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 103,
                                                            "char": 33
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "HEAD",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 103,
                                                            "char": 42
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 103,
                                                        "char": 42
                                                    },
                                                    "statements": [
                                                        {
                                                            "type": "let",
                                                            "assignments": [
                                                                {
                                                                    "assign-type": "variable",
                                                                    "operator": "assign",
                                                                    "variable": "contentLength",
                                                                    "expr": {
                                                                        "type": "int",
                                                                        "value": "0",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 104,
                                                                        "char": 46
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 104,
                                                                    "char": 46
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 105,
                                                            "char": 21
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 106,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 107,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 108,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "and",
                                        "left": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "contentLength",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 108,
                                                "char": 32
                                            },
                                            "right": {
                                                "type": "null",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 108,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 108,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "expectedLength",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 108,
                                                "char": 59
                                            },
                                            "right": {
                                                "type": "null",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 108,
                                                "char": 66
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 108,
                                            "char": 66
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 108,
                                        "char": 66
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "bodyStart",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "strpos",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "result",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 109,
                                                                    "char": 46
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 109,
                                                                "char": 46
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "string",
                                                                    "value": "\\r\\n\\r\\n",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 109,
                                                                    "char": 58
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 109,
                                                                "char": 58
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "contentLengthPos",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 109,
                                                                    "char": 76
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 109,
                                                                "char": 76
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 109,
                                                        "char": 77
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 109,
                                                    "char": 77
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 110,
                                            "char": 18
                                        },
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "not-identical",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "bodyStart",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 110,
                                                    "char": 32
                                                },
                                                "right": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 110,
                                                    "char": 40
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 110,
                                                "char": 40
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "add-assign",
                                                            "variable": "bodyStart",
                                                            "expr": {
                                                                "type": "int",
                                                                "value": "4",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 111,
                                                                "char": 38
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 111,
                                                            "char": 38
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 112,
                                                    "char": 23
                                                },
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "expectedLength",
                                                            "expr": {
                                                                "type": "add",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "bodyStart",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 112,
                                                                    "char": 52
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "contentLength",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 112,
                                                                    "char": 67
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 112,
                                                                "char": 67
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 112,
                                                            "char": 67
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 113,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 114,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 115,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "and",
                                        "left": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "expectedLength",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 115,
                                                "char": 33
                                            },
                                            "right": {
                                                "type": "null",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 115,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 115,
                                            "char": 41
                                        },
                                        "right": {
                                            "type": "greater-equal",
                                            "left": {
                                                "type": "variable",
                                                "value": "totalRead",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 115,
                                                "char": 53
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "expectedLength",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 115,
                                                "char": 70
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 115,
                                            "char": 70
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 115,
                                        "char": 70
                                    },
                                    "statements": [
                                        {
                                            "type": "break",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 117,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 118,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 119,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "result",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 119,
                                "char": 22
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 120,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 71,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 71,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 70,
                    "last-line": 122,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "parseHttpMessage",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "httpMessage",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 122,
                            "char": 63
                        },
                        {
                            "type": "parameter",
                            "name": "originUrl",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 122,
                                "char": 88
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 122,
                            "char": 88
                        },
                        {
                            "type": "parameter",
                            "name": "originMethod",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 122,
                                "char": 116
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 122,
                            "char": 116
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "explode",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 124,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "SEPARATOR",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 124,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 124,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 124,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "httpMessage",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 124,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 124,
                                        "char": 52
                                    },
                                    {
                                        "parameter": {
                                            "type": "int",
                                            "value": "2",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 124,
                                            "char": 55
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 124,
                                        "char": 55
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 124,
                                "char": 56
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 123,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 123,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 122,
                    "last-line": 127,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "parseHeaders",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "headers",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 127,
                            "char": 55
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "httpCode",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 21
                                },
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 29
                                },
                                {
                                    "variable": "processed",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 40
                                },
                                {
                                    "variable": "lineNumber",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 52
                                },
                                {
                                    "variable": "line",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 58
                                },
                                {
                                    "variable": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 63
                                },
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 70
                                },
                                {
                                    "variable": "tmpListKeyValue",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 87
                                },
                                {
                                    "variable": "matches",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 129,
                                    "char": 96
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 131,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "httpCode",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 131,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 131,
                                    "char": 29
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 132,
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
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 132,
                                        "char": 27
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 132,
                                    "char": 27
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 133,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "processed",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 133,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 133,
                                    "char": 28
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 134,
                            "char": 11
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
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "HttpHelper",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 134,
                                                "char": 56
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "EOL",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 134,
                                                "char": 56
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 134,
                                            "char": 56
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 134,
                                        "char": 56
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "headers",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 134,
                                            "char": 65
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 134,
                                        "char": 65
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 134,
                                "char": 67
                            },
                            "key": "lineNumber",
                            "value": "line",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "lineNumber",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 135,
                                            "char": 29
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "0",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 135,
                                            "char": 33
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 135,
                                        "char": 33
                                    },
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
                                                            "type": "string",
                                                            "value": "\/^HTTP\\\\\/\\\\d+\\\\.\\\\d+\\\\s+(\\\\d+)\/",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 136,
                                                            "char": 64
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 136,
                                                        "char": 64
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "line",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 136,
                                                            "char": 70
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 136,
                                                        "char": 70
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "matches",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 136,
                                                            "char": 79
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 136,
                                                        "char": 79
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 136,
                                                "char": 81
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "httpCode",
                                                            "expr": {
                                                                "type": "cast",
                                                                "left": "int",
                                                                "right": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "matches",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 137,
                                                                        "char": 50
                                                                    },
                                                                    "right": {
                                                                        "type": "int",
                                                                        "value": "1",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 137,
                                                                        "char": 52
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 137,
                                                                    "char": 53
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 137,
                                                                "char": 53
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 137,
                                                            "char": 53
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 138,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 139,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "result",
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "line",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 139,
                                                        "char": 34
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 139,
                                                    "char": 34
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 140,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "not-identical",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "strpos",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "line",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 141,
                                                                "char": 31
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 141,
                                                            "char": 31
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": ": ",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 141,
                                                                "char": 37
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 141,
                                                            "char": 37
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 141,
                                                    "char": 41
                                                },
                                                "right": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 141,
                                                    "char": 49
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                "line": 141,
                                                "char": 49
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "tmpListKeyValue",
                                                            "expr": {
                                                                "type": "fcall",
                                                                "name": "explode",
                                                                "call-type": 1,
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "string",
                                                                            "value": ": ",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 142,
                                                                            "char": 55
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 142,
                                                                        "char": 55
                                                                    },
                                                                    {
                                                                        "parameter": {
                                                                            "type": "variable",
                                                                            "value": "line",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 142,
                                                                            "char": 61
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 142,
                                                                        "char": 61
                                                                    },
                                                                    {
                                                                        "parameter": {
                                                                            "type": "int",
                                                                            "value": "2",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 142,
                                                                            "char": 64
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 142,
                                                                        "char": 64
                                                                    }
                                                                ],
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 142,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 142,
                                                            "char": 65
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 143,
                                                    "char": 23
                                                },
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "key",
                                                            "expr": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "tmpListKeyValue",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 143,
                                                                    "char": 46
                                                                },
                                                                "right": {
                                                                    "type": "int",
                                                                    "value": "0",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 143,
                                                                    "char": 48
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 143,
                                                                "char": 49
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 143,
                                                            "char": 49
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 144,
                                                    "char": 23
                                                },
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "value",
                                                            "expr": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "tmpListKeyValue",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 144,
                                                                    "char": 48
                                                                },
                                                                "right": {
                                                                    "type": "int",
                                                                    "value": "1",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 144,
                                                                    "char": 50
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 144,
                                                                "char": 51
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 144,
                                                            "char": 51
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 145,
                                                    "char": 17
                                                }
                                            ],
                                            "else_statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "tmpListKeyValue",
                                                            "expr": {
                                                                "type": "fcall",
                                                                "name": "explode",
                                                                "call-type": 1,
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "string",
                                                                            "value": ":",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 146,
                                                                            "char": 54
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 146,
                                                                        "char": 54
                                                                    },
                                                                    {
                                                                        "parameter": {
                                                                            "type": "variable",
                                                                            "value": "line",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 146,
                                                                            "char": 60
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 146,
                                                                        "char": 60
                                                                    },
                                                                    {
                                                                        "parameter": {
                                                                            "type": "int",
                                                                            "value": "2",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                            "line": 146,
                                                                            "char": 63
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 146,
                                                                        "char": 63
                                                                    }
                                                                ],
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 146,
                                                                "char": 64
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 146,
                                                            "char": 64
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 147,
                                                    "char": 23
                                                },
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "key",
                                                            "expr": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "tmpListKeyValue",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 147,
                                                                    "char": 46
                                                                },
                                                                "right": {
                                                                    "type": "int",
                                                                    "value": "0",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 147,
                                                                    "char": 48
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 147,
                                                                "char": 49
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 147,
                                                            "char": 49
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 148,
                                                    "char": 23
                                                },
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "variable",
                                                            "operator": "assign",
                                                            "variable": "value",
                                                            "expr": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "tmpListKeyValue",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 148,
                                                                    "char": 48
                                                                },
                                                                "right": {
                                                                    "type": "int",
                                                                    "value": "1",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 148,
                                                                    "char": 50
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                "line": 148,
                                                                "char": 51
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 148,
                                                            "char": 51
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 149,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 150,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "array-index",
                                                    "operator": "assign",
                                                    "variable": "processed",
                                                    "index-expr": [
                                                        {
                                                            "type": "fcall",
                                                            "name": "strtolower",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "variable",
                                                                        "value": "key",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                        "line": 150,
                                                                        "char": 45
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                                    "line": 150,
                                                                    "char": 45
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                            "line": 150,
                                                            "char": 46
                                                        }
                                                    ],
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                        "line": 150,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                                    "line": 150,
                                                    "char": 55
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 151,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                    "line": 152,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 153,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "array",
                                "left": [
                                    {
                                        "value": {
                                            "type": "variable",
                                            "value": "httpCode",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 153,
                                            "char": 25
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 153,
                                        "char": 25
                                    },
                                    {
                                        "value": {
                                            "type": "variable",
                                            "value": "result",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 153,
                                            "char": 33
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 153,
                                        "char": 33
                                    },
                                    {
                                        "value": {
                                            "type": "variable",
                                            "value": "processed",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                            "line": 153,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                        "line": 153,
                                        "char": 44
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 153,
                                "char": 45
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                            "line": 154,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                                "line": 128,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 128,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 127,
                    "last-line": 156,
                    "char": 26
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "METHOD_POST",
                    "default": {
                        "type": "string",
                        "value": "POST",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 5,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 6,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "METHOD_PUT",
                    "default": {
                        "type": "string",
                        "value": "PUT",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 6,
                        "char": 29
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "METHOD_DELETE",
                    "default": {
                        "type": "string",
                        "value": "DELETE",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 7,
                        "char": 35
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "METHOD_GET",
                    "default": {
                        "type": "string",
                        "value": "GET",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 8,
                        "char": 29
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "METHOD_HEAD",
                    "default": {
                        "type": "string",
                        "value": "HEAD",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 9,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 10,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "METHOD_PATCH",
                    "default": {
                        "type": "string",
                        "value": "PATCH",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 10,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 11,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "CHUNK_SIZE",
                    "default": {
                        "type": "int",
                        "value": "8192",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 11,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 12,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "EOL",
                    "default": {
                        "type": "string",
                        "value": "\\r\\n",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 12,
                        "char": 23
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 13,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "SEPARATOR",
                    "default": {
                        "type": "string",
                        "value": "\\r\\n\\r\\n",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 13,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 14,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "PROTOCOL",
                    "default": {
                        "type": "string",
                        "value": "HTTP\/1.1",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 14,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 15,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "MIME_BOUNDARY",
                    "default": {
                        "type": "string",
                        "value": "XXXsubpartXXX",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 15,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 16,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ASYNC_HEADER",
                    "default": {
                        "type": "string",
                        "value": "X-Arango-Async",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                        "line": 16,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
                    "line": 17,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/httphelper.zep",
        "line": 3,
        "char": 5
    }
]