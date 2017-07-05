[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "FoxxHandler",
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
                    "name": "installFoxxZip",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "localZip",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 5,
                            "char": 51
                        },
                        {
                            "type": "parameter",
                            "name": "mountPoint",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 5,
                            "char": 70
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                "line": 5,
                                "char": 90
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 5,
                            "char": 90
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "post",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 7,
                                    "char": 17
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 7,
                                    "char": 27
                                },
                                {
                                    "variable": "tmpArrayd1b5116499c5b30ab1ea6541dd495788",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 7,
                                    "char": 69
                                },
                                {
                                    "variable": "e",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 7,
                                    "char": 72
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 9,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "fcall",
                                    "name": "file_exists",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "localZip",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 9,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 9,
                                            "char": 33
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 9,
                                    "char": 35
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                "line": 9,
                                "char": 35
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
                                                    "value": "Foxx-Zip {localZip} does not exist (or file is unreadable).",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 10,
                                                    "char": 100
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 10,
                                                "char": 100
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                        "line": 10,
                                        "char": 101
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 11,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 12,
                            "char": 11
                        },
                        {
                            "type": "try-catch",
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "post",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "file_get_contents",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "localZip",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 13,
                                                            "char": 51
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 13,
                                                        "char": 51
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 13,
                                                "char": 52
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 13,
                                            "char": 52
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 14,
                                    "char": 15
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 14,
                                                        "char": 34
                                                    },
                                                    "name": "getConnection",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 14,
                                                    "char": 51
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 14,
                                                                "char": 73
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "URL_UPLOAD",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 14,
                                                                "char": 73
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 14,
                                                            "char": 73
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 14,
                                                        "char": 73
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "post",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 14,
                                                            "char": 79
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 14,
                                                        "char": 79
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 14,
                                                "char": 80
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 14,
                                            "char": 80
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 15,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "less",
                                        "left": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "response",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 15,
                                                "char": 25
                                            },
                                            "name": "getHttpCode",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 15,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "400",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 15,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                        "line": 15,
                                        "char": 46
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "tmpArrayd1b5116499c5b30ab1ea6541dd495788",
                                                    "expr": {
                                                        "type": "array",
                                                        "left": [
                                                            {
                                                                "key": {
                                                                    "type": "string",
                                                                    "value": "appInfo",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 16,
                                                                    "char": 75
                                                                },
                                                                "value": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "mcall",
                                                                        "variable": {
                                                                            "type": "variable",
                                                                            "value": "response",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                            "line": 16,
                                                                            "char": 86
                                                                        },
                                                                        "name": "getJson",
                                                                        "call-type": 1,
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                        "line": 16,
                                                                        "char": 96
                                                                    },
                                                                    "right": {
                                                                        "type": "string",
                                                                        "value": "filename",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                        "line": 16,
                                                                        "char": 107
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 16,
                                                                    "char": 108
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 16,
                                                                "char": 108
                                                            },
                                                            {
                                                                "key": {
                                                                    "type": "string",
                                                                    "value": "mount",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 16,
                                                                    "char": 118
                                                                },
                                                                "value": {
                                                                    "type": "variable",
                                                                    "value": "mountPoint",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 16,
                                                                    "char": 130
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 16,
                                                                "char": 130
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 16,
                                                        "char": 131
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 16,
                                                    "char": 131
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 17,
                                            "char": 19
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
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 17,
                                                                "char": 38
                                                            },
                                                            "name": "getConnection",
                                                            "call-type": 1,
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 17,
                                                            "char": 55
                                                        },
                                                        "name": "put",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "static-constant-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "Urls",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                        "line": 17,
                                                                        "char": 82
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "URL_FOXX_INSTALL",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                        "line": 17,
                                                                        "char": 82
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 17,
                                                                    "char": 82
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 17,
                                                                "char": 82
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "fcall",
                                                                    "name": "json_encode",
                                                                    "call-type": 1,
                                                                    "parameters": [
                                                                        {
                                                                            "parameter": {
                                                                                "type": "variable",
                                                                                "value": "tmpArrayd1b5116499c5b30ab1ea6541dd495788",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                                "line": 17,
                                                                                "char": 136
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                            "line": 17,
                                                                            "char": 136
                                                                        }
                                                                    ],
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 17,
                                                                    "char": 137
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 17,
                                                                "char": 137
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 17,
                                                        "char": 138
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 17,
                                                    "char": 138
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 18,
                                            "char": 18
                                        },
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "less",
                                                "left": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "response",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 18,
                                                        "char": 29
                                                    },
                                                    "name": "getHttpCode",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 18,
                                                    "char": 44
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "400",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 18,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 18,
                                                "char": 50
                                            },
                                            "statements": [
                                                {
                                                    "type": "return",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "response",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 19,
                                                            "char": 37
                                                        },
                                                        "name": "getJson",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 19,
                                                        "char": 47
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 20,
                                                    "char": 17
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
                                                                    "value": "Foxx-Zip install failed",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 21,
                                                                    "char": 72
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 21,
                                                                "char": 72
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 21,
                                                        "char": 73
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 22,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 23,
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
                                                            "value": "Foxx-Zip upload failed",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 24,
                                                            "char": 67
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 24,
                                                        "char": 67
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 24,
                                                "char": 68
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 25,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 26,
                                    "char": 9
                                }
                            ],
                            "catches": [
                                {
                                    "classes": [
                                        {
                                            "type": "variable",
                                            "value": "ServerException",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 26,
                                            "char": 32
                                        }
                                    ],
                                    "variable": {
                                        "type": "variable",
                                        "value": "e",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                        "line": 29,
                                        "char": 14
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
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "e",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 27,
                                                                "char": 41
                                                            },
                                                            "name": "getMessage",
                                                            "call-type": 1,
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 27,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 27,
                                                        "char": 54
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 27,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 28,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 29,
                                    "char": 14
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 29,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                "line": 29,
                                "char": 18
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 30,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                "line": 6,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                        "line": 6,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                    "line": 5,
                    "last-line": 32,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "removeFoxxApp",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "mountPoint",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 32,
                            "char": 52
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                "line": 32,
                                "char": 72
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 32,
                            "char": 72
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 34,
                                    "char": 21
                                },
                                {
                                    "variable": "tmpArray2e91a2de584b196522ab83abc491c501",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 34,
                                    "char": 63
                                },
                                {
                                    "variable": "e",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 34,
                                    "char": 66
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 36,
                            "char": 11
                        },
                        {
                            "type": "try-catch",
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "tmpArray2e91a2de584b196522ab83abc491c501",
                                            "expr": {
                                                "type": "array",
                                                "left": [
                                                    {
                                                        "key": {
                                                            "type": "string",
                                                            "value": "mount",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 37,
                                                            "char": 69
                                                        },
                                                        "value": {
                                                            "type": "variable",
                                                            "value": "mountPoint",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 37,
                                                            "char": 81
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 37,
                                                        "char": 81
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 37,
                                                "char": 82
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 37,
                                            "char": 82
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 38,
                                    "char": 15
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 38,
                                                        "char": 34
                                                    },
                                                    "name": "getConnection",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 38,
                                                    "char": 51
                                                },
                                                "name": "put",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "static-constant-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "Urls",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 38,
                                                                "char": 80
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "URL_FOXX_UNINSTALL",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 38,
                                                                "char": 80
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 38,
                                                            "char": 80
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 38,
                                                        "char": 80
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "fcall",
                                                            "name": "json_encode",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "variable",
                                                                        "value": "tmpArray2e91a2de584b196522ab83abc491c501",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                        "line": 38,
                                                                        "char": 134
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 38,
                                                                    "char": 134
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 38,
                                                            "char": 135
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 38,
                                                        "char": 135
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 38,
                                                "char": 136
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 38,
                                            "char": 136
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 39,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "less",
                                        "left": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "response",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 39,
                                                "char": 25
                                            },
                                            "name": "getHttpCode",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 39,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "400",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 39,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                        "line": 39,
                                        "char": 46
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "response",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 40,
                                                    "char": 33
                                                },
                                                "name": "getJson",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 40,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 41,
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
                                                            "type": "fcall",
                                                            "name": "sprintf",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "string",
                                                                        "value": "Foxx uninstall failed (Code: %d)",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                        "line": 42,
                                                                        "char": 85
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 42,
                                                                    "char": 85
                                                                },
                                                                {
                                                                    "parameter": {
                                                                        "type": "mcall",
                                                                        "variable": {
                                                                            "type": "variable",
                                                                            "value": "response",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                            "line": 42,
                                                                            "char": 96
                                                                        },
                                                                        "name": "getHttpCode",
                                                                        "call-type": 1,
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                        "line": 42,
                                                                        "char": 110
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 42,
                                                                    "char": 110
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 42,
                                                            "char": 111
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 42,
                                                        "char": 111
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 42,
                                                "char": 112
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 43,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 44,
                                    "char": 9
                                }
                            ],
                            "catches": [
                                {
                                    "classes": [
                                        {
                                            "type": "variable",
                                            "value": "ServerException",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 44,
                                            "char": 32
                                        }
                                    ],
                                    "variable": {
                                        "type": "variable",
                                        "value": "e",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                        "line": 50,
                                        "char": 14
                                    },
                                    "statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "identical",
                                                "left": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "e",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 45,
                                                        "char": 18
                                                    },
                                                    "name": "getMessage",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 45,
                                                    "char": 34
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "Service not found",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 45,
                                                    "char": 56
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 45,
                                                "char": 56
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
                                                                                "value": "Mount point %s not present.",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                                "line": 46,
                                                                                "char": 80
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                            "line": 46,
                                                                            "char": 80
                                                                        },
                                                                        {
                                                                            "parameter": {
                                                                                "type": "variable",
                                                                                "value": "mountPoint",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                                "line": 46,
                                                                                "char": 92
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                            "line": 46,
                                                                            "char": 92
                                                                        }
                                                                    ],
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                    "line": 46,
                                                                    "char": 93
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 46,
                                                                "char": 93
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 46,
                                                        "char": 94
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                    "line": 47,
                                                    "char": 13
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 48,
                                            "char": 17
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
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "e",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                                "line": 48,
                                                                "char": 41
                                                            },
                                                            "name": "getMessage",
                                                            "call-type": 1,
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                            "line": 48,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                        "line": 48,
                                                        "char": 54
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                                "line": 48,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                            "line": 49,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                    "line": 50,
                                    "char": 14
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 50,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                "line": 50,
                                "char": 18
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                            "line": 51,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                                "line": 33,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                        "line": 33,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
                    "line": 32,
                    "last-line": 53,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/foxxhandler.zep",
        "line": 3,
        "char": 5
    }
]