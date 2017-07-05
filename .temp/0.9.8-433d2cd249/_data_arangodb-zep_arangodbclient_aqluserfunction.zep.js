[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "AqlUserFunction",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_connection",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "attributes",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 6,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_action",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 7,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 8,
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
                            "name": "connection",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "Connection",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 10,
                                "char": 55
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 10,
                            "char": 56
                        },
                        {
                            "type": "parameter",
                            "name": "attributesArray",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 10,
                                "char": 86
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 10,
                            "char": 86
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
                                    "property": "_connection",
                                    "expr": {
                                        "type": "variable",
                                        "value": "connection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 12,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 12,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 13,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "is_array",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "attributesArray",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 13,
                                            "char": 36
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 13,
                                        "char": 36
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 13,
                                "char": 38
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 14,
                                            "char": 18
                                        },
                                        "name": "buildAttributesFromArray",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "attributesArray",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 14,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 14,
                                                "char": 59
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 14,
                                        "char": 60
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 15,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 16,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 10,
                    "last-line": 18,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "register",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "name",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 18,
                                "char": 45
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 18,
                            "char": 45
                        },
                        {
                            "type": "parameter",
                            "name": "code",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 18,
                                "char": 62
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 18,
                            "char": 62
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "attributes",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 20,
                                    "char": 23
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 20,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 22,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "attributes",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 22,
                                            "char": 32
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "attributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 22,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 22,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 22,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 23,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "name",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 23,
                                "char": 17
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "attributes",
                                            "index-expr": [
                                                {
                                                    "type": "string",
                                                    "value": "name",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 24,
                                                    "char": 34
                                                }
                                            ],
                                            "expr": {
                                                "type": "variable",
                                                "value": "name",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 24,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 24,
                                            "char": 42
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 25,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 26,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "code",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 26,
                                "char": 17
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "attributes",
                                            "index-expr": [
                                                {
                                                    "type": "string",
                                                    "value": "code",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 27,
                                                    "char": 34
                                                }
                                            ],
                                            "expr": {
                                                "type": "variable",
                                                "value": "code",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 27,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 27,
                                            "char": 42
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 28,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 29,
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
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 29,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 29,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 29,
                                            "char": 43
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 29,
                                                        "char": 76
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_AQL_USER_FUNCTION",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 29,
                                                        "char": 76
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 29,
                                                    "char": 76
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 29,
                                                "char": 76
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 29,
                                                            "char": 83
                                                        },
                                                        "name": "getConnection",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 29,
                                                        "char": 100
                                                    },
                                                    "name": "json_encode_wrapper",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "attributes",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                                "line": 29,
                                                                "char": 131
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 29,
                                                            "char": 131
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 29,
                                                    "char": 132
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 29,
                                                "char": 132
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 29,
                                        "char": 133
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 29,
                                    "char": 133
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 30,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 30,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 30,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 31,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 18,
                    "last-line": 33,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "unregister",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "name",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 33,
                                "char": 47
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 33,
                            "char": 47
                        },
                        {
                            "type": "parameter",
                            "name": "namespacee",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 33,
                                "char": 72
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 33,
                            "char": 72
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 35,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 35,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 37,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "name",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 37,
                                    "char": 19
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 37,
                                    "char": 26
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 37,
                                "char": 26
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "name",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 38,
                                                    "char": 30
                                                },
                                                "name": "getName",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 38,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 38,
                                            "char": 40
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 39,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 40,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 40,
                                                        "char": 67
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_AQL_USER_FUNCTION",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 40,
                                                        "char": 67
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 40,
                                                    "char": 67
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 40,
                                                "char": 67
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "name",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                                "line": 40,
                                                                "char": 74
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 40,
                                                            "char": 74
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 40,
                                                    "char": 75
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 40,
                                                "char": 75
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 40,
                                        "char": 76
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 40,
                                    "char": 76
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 41,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "namespacee",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 41,
                                "char": 23
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 42,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 42,
                                                        "char": 54
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "array",
                                                            "left": [
                                                                {
                                                                    "key": {
                                                                        "type": "string",
                                                                        "value": "group",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                                        "line": 42,
                                                                        "char": 65
                                                                    },
                                                                    "value": {
                                                                        "type": "bool",
                                                                        "value": "true",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                                        "line": 42,
                                                                        "char": 71
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                                    "line": 42,
                                                                    "char": 71
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 42,
                                                            "char": 72
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 42,
                                                        "char": 72
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 42,
                                                "char": 73
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 42,
                                            "char": 73
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 43,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 44,
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
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 44,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 44,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 44,
                                            "char": 43
                                        },
                                        "name": "delete",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 44,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 44,
                                                "char": 54
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 44,
                                        "char": 55
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 44,
                                    "char": 55
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 45,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 45,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 45,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 46,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 33,
                    "last-line": 48,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getRegisteredUserFunctions",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "namespacee",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 48,
                                "char": 69
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 48,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 50,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 50,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 52,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 52,
                                                        "char": 67
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_AQL_USER_FUNCTION",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 52,
                                                        "char": 67
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 52,
                                                    "char": 67
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 52,
                                                "char": 67
                                            },
                                            {
                                                "parameter": {
                                                    "type": "empty-array",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 52,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 52,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 52,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 52,
                                    "char": 72
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 53,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "variable",
                                    "value": "namespacee",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 53,
                                    "char": 25
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 53,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 53,
                                "char": 32
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 54,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 54,
                                                        "char": 54
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "array",
                                                            "left": [
                                                                {
                                                                    "key": {
                                                                        "type": "string",
                                                                        "value": "namespace",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                                        "line": 54,
                                                                        "char": 69
                                                                    },
                                                                    "value": {
                                                                        "type": "variable",
                                                                        "value": "namespacee",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                                        "line": 54,
                                                                        "char": 81
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                                    "line": 54,
                                                                    "char": 81
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 54,
                                                            "char": 82
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 54,
                                                        "char": 82
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 54,
                                                "char": 83
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 54,
                                            "char": 83
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 55,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 56,
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
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 56,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 56,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 56,
                                            "char": 43
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 56,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 56,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 56,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 56,
                                    "char": 52
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 57,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 57,
                                    "char": 25
                                },
                                "name": "getJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 57,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 58,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 48,
                    "last-line": 60,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getConnection",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 62,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 62,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 62,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 63,
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
                                    "value": "Connection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 61,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 61,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 61,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 60,
                    "last-line": 65,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setName",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 65,
                            "char": 41
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 67,
                                    "char": 14
                                },
                                "name": "set",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 67,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_NAME",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 67,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 67,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 67,
                                        "char": 35
                                    },
                                    {
                                        "parameter": {
                                            "type": "cast",
                                            "left": "string",
                                            "right": {
                                                "type": "variable",
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 67,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 67,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 67,
                                        "char": 51
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 67,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 68,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 66,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 65,
                    "last-line": 70,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getName",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 72,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 72,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_NAME",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 72,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 72,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 72,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 72,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 73,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 71,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 71,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 70,
                    "last-line": 75,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setCode",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 75,
                            "char": 41
                        }
                    ],
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 77,
                                    "char": 14
                                },
                                "name": "set",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 77,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_CODE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 77,
                                                "char": 35
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 77,
                                            "char": 35
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 77,
                                        "char": 35
                                    },
                                    {
                                        "parameter": {
                                            "type": "cast",
                                            "left": "string",
                                            "right": {
                                                "type": "variable",
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 77,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 77,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 77,
                                        "char": 51
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 77,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 78,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 76,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 75,
                    "last-line": 80,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getCode",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 82,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 82,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_CODE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 82,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 82,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 82,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 82,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 83,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 81,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 81,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 80,
                    "last-line": 85,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "set",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 85,
                            "char": 28
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 85,
                            "char": 35
                        }
                    ],
                    "statements": [
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
                                                "value": "key",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 87,
                                                "char": 26
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 87,
                                            "char": 26
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 87,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 87,
                                "char": 28
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
                                                    "value": "Invalid attribute key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 88,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 88,
                                                "char": 62
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 88,
                                        "char": 63
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 89,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 90,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-array-index",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "attributes",
                                    "index-expr": [
                                        {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 90,
                                            "char": 33
                                        }
                                    ],
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 90,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 90,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 91,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 91,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 92,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 85,
                    "last-line": 94,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__set",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 94,
                            "char": 37
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 94,
                            "char": 44
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 96,
                                    "char": 17
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 96,
                                        "char": 36
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_NAME",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 96,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 96,
                                    "char": 36
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 96,
                                "char": 36
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 97,
                                            "char": 18
                                        },
                                        "name": "setName",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 97,
                                                    "char": 32
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 97,
                                                "char": 32
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 97,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 98,
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
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 98,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 98,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_CODE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 98,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 98,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 98,
                                        "char": 42
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 99,
                                                    "char": 18
                                                },
                                                "name": "setCode",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 99,
                                                            "char": 32
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 99,
                                                        "char": 32
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 99,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 100,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 100,
                                    "char": 14
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 101,
                                            "char": 18
                                        },
                                        "name": "set",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 101,
                                                    "char": 26
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 101,
                                                "char": 26
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 101,
                                                    "char": 33
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 101,
                                                "char": 33
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 101,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 102,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 103,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 95,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 94,
                    "last-line": 105,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "get",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 105,
                            "char": 35
                        }
                    ],
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 107,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "attributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 107,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 107,
                                        "char": 34
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 107,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 107,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 107,
                                "char": 40
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 108,
                                                "char": 25
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "attributes",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 108,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 108,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 108,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 108,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 109,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 110,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 110,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 111,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 105,
                    "last-line": 113,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__isset",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 113,
                            "char": 39
                        }
                    ],
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 115,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "attributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 115,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 115,
                                        "char": 34
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 115,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 115,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 115,
                                "char": 40
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 116,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 117,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 118,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 118,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 119,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 114,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 114,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 113,
                    "last-line": 121,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__get",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 121,
                            "char": 37
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 123,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 123,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 123,
                                        "char": 29
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 123,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 124,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 121,
                    "last-line": 126,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 128,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_action",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 128,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 128,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 129,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 127,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 127,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 126,
                    "last-line": 131,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "buildAttributesFromArray",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 131,
                            "char": 53
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 133,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 133,
                                            "char": 42
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_NAME",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 133,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 133,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 133,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 133,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 134,
                                            "char": 18
                                        },
                                        "name": "setName",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 134,
                                                        "char": 34
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 134,
                                                            "char": 51
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_NAME",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 134,
                                                            "char": 51
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 134,
                                                        "char": 51
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 134,
                                                    "char": 52
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 134,
                                                "char": 52
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 134,
                                        "char": 53
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 135,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 136,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "isset",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 136,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 136,
                                            "char": 42
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_CODE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 136,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 136,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 136,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                "line": 136,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                            "line": 137,
                                            "char": 18
                                        },
                                        "name": "setCode",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 137,
                                                        "char": 34
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 137,
                                                            "char": 51
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_CODE",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                            "line": 137,
                                                            "char": 51
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                        "line": 137,
                                                        "char": 51
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                    "line": 137,
                                                    "char": 52
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                                "line": 137,
                                                "char": 52
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                        "line": 137,
                                        "char": 53
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                                    "line": 138,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                            "line": 139,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 132,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 131,
                    "last-line": 141,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_NAME",
                    "default": {
                        "type": "string",
                        "value": "name",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 8,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_CODE",
                    "default": {
                        "type": "string",
                        "value": "code",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                        "line": 9,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
                    "line": 10,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/aqluserfunction.zep",
        "line": 3,
        "char": 5
    }
]