[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "QueryCacheHandler",
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
                    "name": "enable",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 7,
                                    "char": 16
                                },
                                {
                                    "variable": "tmpArray949570a20cb34992178c70964942133b",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 7,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 9,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 9,
                                                        "char": 61
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY_CACHE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 9,
                                                        "char": 61
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 9,
                                                    "char": 61
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 9,
                                                "char": 61
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "properties",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                                "line": 9,
                                                                "char": 76
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                            "line": 9,
                                                            "char": 76
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 9,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 9,
                                                "char": 77
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 9,
                                        "char": 78
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 9,
                                    "char": 78
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 10,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray949570a20cb34992178c70964942133b",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "mode",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 10,
                                                    "char": 64
                                                },
                                                "value": {
                                                    "type": "string",
                                                    "value": "on",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 10,
                                                    "char": 70
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 10,
                                                "char": 70
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 10,
                                        "char": 71
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 10,
                                    "char": 71
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 11,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 11,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 11,
                                    "char": 31
                                },
                                "name": "put",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 11,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 11,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 11,
                                                "char": 46
                                            },
                                            "name": "json_encode_wrapper",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "tmpArray949570a20cb34992178c70964942133b",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 11,
                                                        "char": 107
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 11,
                                                    "char": 107
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 11,
                                            "char": 108
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 11,
                                        "char": 108
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                "line": 11,
                                "char": 109
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 12,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                        "line": 6,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                    "line": 5,
                    "last-line": 14,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "disable",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 16,
                                    "char": 16
                                },
                                {
                                    "variable": "tmpArray1e5379e6ef331668a17ddca849ca0954",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 16,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 18,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 18,
                                                        "char": 61
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY_CACHE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 18,
                                                        "char": 61
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 18,
                                                    "char": 61
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 18,
                                                "char": 61
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "properties",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                                "line": 18,
                                                                "char": 76
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                            "line": 18,
                                                            "char": 76
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 18,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 18,
                                                "char": 77
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 18,
                                        "char": 78
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 18,
                                    "char": 78
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 19,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray1e5379e6ef331668a17ddca849ca0954",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "mode",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 19,
                                                    "char": 64
                                                },
                                                "value": {
                                                    "type": "string",
                                                    "value": "off",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 19,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 19,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 19,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 19,
                                    "char": 72
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 20,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 20,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 20,
                                    "char": 31
                                },
                                "name": "put",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 20,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 20,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 20,
                                                "char": 46
                                            },
                                            "name": "json_encode_wrapper",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "tmpArray1e5379e6ef331668a17ddca849ca0954",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 20,
                                                        "char": 107
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 20,
                                                    "char": 107
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 20,
                                            "char": 108
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 20,
                                        "char": 108
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                "line": 20,
                                "char": 109
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 21,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                        "line": 15,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                    "line": 14,
                    "last-line": 23,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "enableDemandMode",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 25,
                                    "char": 16
                                },
                                {
                                    "variable": "tmpArray970d639034f788c5330c7cdaa9d03458",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 25,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 27,
                                                        "char": 61
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY_CACHE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 27,
                                                        "char": 61
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 27,
                                                    "char": 61
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 27,
                                                "char": 61
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "properties",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                                "line": 27,
                                                                "char": 76
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                            "line": 27,
                                                            "char": 76
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 27,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 27,
                                                "char": 77
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 27,
                                        "char": 78
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 27,
                                    "char": 78
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 28,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray970d639034f788c5330c7cdaa9d03458",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "mode",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 28,
                                                    "char": 64
                                                },
                                                "value": {
                                                    "type": "string",
                                                    "value": "demand",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 28,
                                                    "char": 74
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 28,
                                                "char": 74
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 28,
                                        "char": 75
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 28,
                                    "char": 75
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 29,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 29,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 29,
                                    "char": 31
                                },
                                "name": "put",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 29,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 29,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 29,
                                                "char": 46
                                            },
                                            "name": "json_encode_wrapper",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "tmpArray970d639034f788c5330c7cdaa9d03458",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 29,
                                                        "char": 107
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 29,
                                                    "char": 107
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 29,
                                            "char": 108
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 29,
                                        "char": 108
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                "line": 29,
                                "char": 109
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 30,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                        "line": 24,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                    "line": 23,
                    "last-line": 32,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "clear",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 34,
                                    "char": 16
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 35,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 35,
                                                        "char": 60
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY_CACHE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 35,
                                                        "char": 60
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 35,
                                                    "char": 60
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 35,
                                                "char": 60
                                            },
                                            {
                                                "parameter": {
                                                    "type": "empty-array",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 35,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 35,
                                                "char": 64
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 35,
                                        "char": 65
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 35,
                                    "char": 65
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 36,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 36,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 36,
                                    "char": 31
                                },
                                "name": "delete",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 36,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 36,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                "line": 36,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 37,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                        "line": 33,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                    "line": 32,
                    "last-line": 39,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setProperties",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "properties",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 39,
                            "char": 51
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "bodyParams",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 41,
                                    "char": 23
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 41,
                                    "char": 28
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 41,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 43,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "bodyParams",
                                    "expr": {
                                        "type": "variable",
                                        "value": "properties",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 43,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 43,
                                    "char": 36
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 44,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 44,
                                                        "char": 61
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY_CACHE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 44,
                                                        "char": 61
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 44,
                                                    "char": 61
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 44,
                                                "char": 61
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 44,
                                        "char": 62
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 44,
                                    "char": 62
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 45,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 45,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 45,
                                            "char": 47
                                        },
                                        "name": "put",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 45,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 45,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 45,
                                                        "char": 62
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "bodyParams",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                                "line": 45,
                                                                "char": 93
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                            "line": 45,
                                                            "char": 93
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 45,
                                                    "char": 94
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 45,
                                                "char": 94
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 45,
                                        "char": 95
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 45,
                                    "char": 95
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 46,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 46,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                "line": 46,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                "line": 40,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                        "line": 40,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                    "line": 39,
                    "last-line": 49,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getProperties",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 51,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 51,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 53,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 53,
                                                        "char": 61
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY_CACHE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                        "line": 53,
                                                        "char": 61
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 53,
                                                    "char": 61
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 53,
                                                "char": 61
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 53,
                                        "char": 62
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 53,
                                    "char": 62
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 54,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 54,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                            "line": 54,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                    "line": 54,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                                "line": 54,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                        "line": 54,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 54,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 55,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                    "line": 55,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                "line": 55,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                            "line": 56,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                                "line": 50,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                        "line": 50,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
                    "line": 49,
                    "last-line": 58,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/querycachehandler.zep",
        "line": 3,
        "char": 5
    }
]