[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "QueryHandler",
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
                    "name": "clearSlow",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 7,
                                    "char": 16
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                        "line": 9,
                                                        "char": 55
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                        "line": 9,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 9,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 9,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "slow",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                                "line": 9,
                                                                "char": 64
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                            "line": 9,
                                                            "char": 64
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 9,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 9,
                                                "char": 65
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 9,
                                        "char": 66
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 9,
                                    "char": 66
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 10,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 10,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 10,
                                    "char": 31
                                },
                                "name": "delete",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                            "line": 10,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 10,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                "line": 10,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 11,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                        "line": 6,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                    "line": 5,
                    "last-line": 13,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getSlow",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 15,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 15,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 17,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                        "line": 17,
                                                        "char": 55
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                        "line": 17,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 17,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 17,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "slow",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                                "line": 17,
                                                                "char": 64
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                            "line": 17,
                                                            "char": 64
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 17,
                                                    "char": 65
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 17,
                                                "char": 65
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 17,
                                        "char": 66
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 17,
                                    "char": 66
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 18,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 18,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                            "line": 18,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 18,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 18,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 18,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 18,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 19,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 19,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                "line": 19,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 20,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                "line": 14,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                        "line": 14,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                    "line": 13,
                    "last-line": 22,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getCurrent",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 24,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 24,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 26,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                        "line": 26,
                                                        "char": 55
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                        "line": 26,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 26,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 26,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "current",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                                "line": 26,
                                                                "char": 67
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                            "line": 26,
                                                            "char": 67
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 26,
                                                    "char": 68
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 26,
                                                "char": 68
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 26,
                                        "char": 69
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 26,
                                    "char": 69
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 27,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 27,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                            "line": 27,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 27,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 27,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 27,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 27,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 28,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 28,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                "line": 28,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 29,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                "line": 23,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                        "line": 23,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                    "line": 22,
                    "last-line": 31,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "kill",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "id",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 31,
                            "char": 35
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 33,
                                    "char": 16
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                        "line": 35,
                                                        "char": 55
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_QUERY",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                        "line": 35,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 35,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 35,
                                                "char": 55
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "id",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                                "line": 35,
                                                                "char": 60
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                            "line": 35,
                                                            "char": 60
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                    "line": 35,
                                                    "char": 61
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                                "line": 35,
                                                "char": 61
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 35,
                                        "char": 62
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                    "line": 35,
                                    "char": 62
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 36,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                            "line": 36,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                        "line": 36,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                "line": 36,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 37,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                "line": 37,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                            "line": 38,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                                "line": 32,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                        "line": 32,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
                    "line": 31,
                    "last-line": 40,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/queryhandler.zep",
        "line": 3,
        "char": 5
    }
]