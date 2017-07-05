[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "UserHandler",
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
                    "name": "addUser",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "username",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 5,
                            "char": 44
                        },
                        {
                            "type": "parameter",
                            "name": "passwd",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 5,
                                "char": 59
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 5,
                            "char": 59
                        },
                        {
                            "type": "parameter",
                            "name": "active",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 5,
                                "char": 74
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 5,
                            "char": 74
                        },
                        {
                            "type": "parameter",
                            "name": "extra",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 5,
                                "char": 94
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 5,
                            "char": 94
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "userDocument",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 7,
                                    "char": 25
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 7,
                                    "char": 31
                                },
                                {
                                    "variable": "e",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 7,
                                    "char": 34
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 9,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "expr": {
                                        "type": "new",
                                        "class": "User",
                                        "dynamic": 0,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 9,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 9,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 10,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "property": "user",
                                    "expr": {
                                        "type": "variable",
                                        "value": "username",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 10,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 10,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 11,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "property": "passwd",
                                    "expr": {
                                        "type": "variable",
                                        "value": "passwd",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 11,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 11,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 12,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "property": "active",
                                    "expr": {
                                        "type": "variable",
                                        "value": "active",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 12,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 12,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 13,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "property": "extra",
                                    "expr": {
                                        "type": "variable",
                                        "value": "extra",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 13,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 13,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 14,
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
                                            "value": "userDocument",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 14,
                                            "char": 34
                                        },
                                        "name": "getAll",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 14,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 14,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 15,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 15,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 15,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 15,
                                                "char": 51
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "URL_USER",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 15,
                                                "char": 51
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 15,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 15,
                                        "char": 51
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 15,
                                                "char": 58
                                            },
                                            "name": "json_encode_wrapper",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 15,
                                                        "char": 83
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 15,
                                                    "char": 83
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 15,
                                            "char": 84
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 15,
                                        "char": 84
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 15,
                                "char": 85
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 16,
                            "char": 11
                        },
                        {
                            "type": "try-catch",
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 17,
                                            "char": 18
                                        },
                                        "name": "grantPermissions",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "username",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 17,
                                                    "char": 44
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 17,
                                                "char": 44
                                            },
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 17,
                                                            "char": 51
                                                        },
                                                        "name": "getConnection",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 17,
                                                        "char": 68
                                                    },
                                                    "name": "getDatabase",
                                                    "call-type": 1,
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 17,
                                                    "char": 82
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 17,
                                                "char": 82
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 17,
                                        "char": 83
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 18,
                                    "char": 9
                                }
                            ],
                            "catches": [
                                {
                                    "classes": [
                                        {
                                            "type": "variable",
                                            "value": "\\Exception",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 18,
                                            "char": 27
                                        }
                                    ],
                                    "variable": {
                                        "type": "variable",
                                        "value": "e",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 21,
                                        "char": 14
                                    },
                                    "statements": [
                                        {
                                            "type": "throw",
                                            "expr": {
                                                "type": "variable",
                                                "value": "e",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 19,
                                                "char": 20
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 20,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 21,
                                    "char": 14
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 21,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 21,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 22,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 6,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                        "line": 6,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                    "line": 5,
                    "last-line": 24,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "replaceUser",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "username",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 24,
                            "char": 48
                        },
                        {
                            "type": "parameter",
                            "name": "passwd",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 24,
                                "char": 63
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 24,
                            "char": 63
                        },
                        {
                            "type": "parameter",
                            "name": "active",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 24,
                                "char": 78
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 24,
                            "char": 78
                        },
                        {
                            "type": "parameter",
                            "name": "extra",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 24,
                                "char": 98
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 24,
                            "char": 98
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "userDocument",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 26,
                                    "char": 25
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 26,
                                    "char": 31
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 26,
                                    "char": 36
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 28,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "expr": {
                                        "type": "new",
                                        "class": "User",
                                        "dynamic": 0,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 28,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 28,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 29,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "property": "passwd",
                                    "expr": {
                                        "type": "variable",
                                        "value": "passwd",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 29,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 29,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 30,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "property": "active",
                                    "expr": {
                                        "type": "variable",
                                        "value": "active",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 30,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 30,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 31,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "property": "extra",
                                    "expr": {
                                        "type": "variable",
                                        "value": "extra",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 31,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 31,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 32,
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
                                            "value": "userDocument",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 32,
                                            "char": 34
                                        },
                                        "name": "getAll",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 32,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 32,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 33,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 33,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_USER",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 33,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 33,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 33,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "username",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 33,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 33,
                                                            "char": 65
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 33,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 33,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 33,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 33,
                                    "char": 67
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 34,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 34,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 34,
                                    "char": 31
                                },
                                "name": "put",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 34,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 34,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 34,
                                                "char": 46
                                            },
                                            "name": "json_encode_wrapper",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 34,
                                                        "char": 71
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 34,
                                                    "char": 71
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 34,
                                            "char": 72
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 34,
                                        "char": 72
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 34,
                                "char": 73
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 35,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 35,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 36,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 25,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                        "line": 25,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                    "line": 24,
                    "last-line": 38,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "updateUser",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "username",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 38,
                            "char": 47
                        },
                        {
                            "type": "parameter",
                            "name": "passwd",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 38,
                                "char": 62
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 38,
                            "char": 62
                        },
                        {
                            "type": "parameter",
                            "name": "active",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 38,
                                "char": 77
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 38,
                            "char": 77
                        },
                        {
                            "type": "parameter",
                            "name": "extra",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 38,
                                "char": 97
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 38,
                            "char": 97
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "userDocument",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 40,
                                    "char": 25
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 40,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 42,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "expr": {
                                        "type": "new",
                                        "class": "User",
                                        "dynamic": 0,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 42,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 42,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 43,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "userDocument",
                                    "property": "active",
                                    "expr": {
                                        "type": "variable",
                                        "value": "active",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 43,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 43,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 44,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "variable",
                                    "value": "passwd",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 44,
                                    "char": 21
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 44,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 44,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "userDocument",
                                            "property": "passwd",
                                            "expr": {
                                                "type": "variable",
                                                "value": "passwd",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 45,
                                                "char": 46
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 45,
                                            "char": 46
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 46,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 47,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "variable",
                                    "value": "active",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 47,
                                    "char": 21
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 47,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 47,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "userDocument",
                                            "property": "active",
                                            "expr": {
                                                "type": "variable",
                                                "value": "active",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 48,
                                                "char": 46
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 48,
                                            "char": 46
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 49,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 50,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "variable",
                                    "value": "extra",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 50,
                                    "char": 20
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 50,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 50,
                                "char": 27
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "userDocument",
                                            "property": "extra",
                                            "expr": {
                                                "type": "variable",
                                                "value": "extra",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 51,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 51,
                                            "char": 44
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 52,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 53,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_USER",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 53,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 53,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 53,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "username",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 53,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 53,
                                                            "char": 65
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 53,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 53,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 53,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 53,
                                    "char": 67
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 54,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 54,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 54,
                                    "char": 31
                                },
                                "name": "patch",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 54,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 54,
                                        "char": 41
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 54,
                                                "char": 48
                                            },
                                            "name": "json_encode_wrapper",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "userDocument",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 54,
                                                            "char": 82
                                                        },
                                                        "name": "getAll",
                                                        "call-type": 1,
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 54,
                                                        "char": 91
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 54,
                                                    "char": 91
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 54,
                                            "char": 92
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 54,
                                        "char": 92
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 54,
                                "char": 93
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 55,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 55,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 56,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 39,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                        "line": 39,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                    "line": 38,
                    "last-line": 58,
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
                            "name": "username",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 58,
                            "char": 40
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 60,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 60,
                                    "char": 26
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 60,
                                    "char": 32
                                },
                                {
                                    "variable": "options",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 60,
                                    "char": 41
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 62,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 62,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_USER",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 62,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 62,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 62,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "username",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 62,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 62,
                                                            "char": 65
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 62,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 62,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 62,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 62,
                                    "char": 67
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 63,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 63,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 63,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 63,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 63,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 63,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 63,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 64,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 64,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 64,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 64,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 65,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "options",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "_isNew",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 65,
                                                    "char": 34
                                                },
                                                "value": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 65,
                                                    "char": 41
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 65,
                                                "char": 41
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 65,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 65,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 66,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "scall",
                                "dynamic-class": 0,
                                "class": "User",
                                "dynamic": 0,
                                "name": "createFromArray",
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 66,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 66,
                                        "char": 42
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 66,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 66,
                                        "char": 51
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 66,
                                "char": 52
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 67,
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
                                    "value": "User",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 59,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 59,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                        "line": 59,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                    "line": 58,
                    "last-line": 69,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "removeUser",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "username",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 69,
                            "char": 47
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "params",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 71,
                                    "char": 19
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 71,
                                    "char": 24
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 73,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "params",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 73,
                                        "char": 25
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 73,
                                    "char": 25
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 74,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 74,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_USER",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 74,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 74,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 74,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "username",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 74,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 74,
                                                            "char": 65
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 74,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 74,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 74,
                                        "char": 67
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 74,
                                    "char": 67
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 75,
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
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 75,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 75,
                                                "char": 50
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "params",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 75,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 75,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 75,
                                        "char": 59
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 75,
                                    "char": 59
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 76,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 76,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 76,
                                    "char": 31
                                },
                                "name": "delete",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 76,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 76,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 76,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 77,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 77,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 78,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 70,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                        "line": 70,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                    "line": 69,
                    "last-line": 80,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "grantPermissions",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "username",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 80,
                            "char": 53
                        },
                        {
                            "type": "parameter",
                            "name": "databaseName",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 80,
                            "char": 74
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 82,
                                    "char": 17
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 82,
                                    "char": 22
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 84,
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
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "grant",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 84,
                                                    "char": 30
                                                },
                                                "value": {
                                                    "type": "string",
                                                    "value": "rw",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 84,
                                                    "char": 36
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 84,
                                                "char": 36
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 84,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 84,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 85,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 85,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_USER",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 85,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 85,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 85,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "username",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 85,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 85,
                                                            "char": 65
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "database",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 85,
                                                                "char": 77
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 85,
                                                            "char": 77
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "databaseName",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 85,
                                                                "char": 91
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 85,
                                                            "char": 91
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 85,
                                                    "char": 92
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 85,
                                                "char": 92
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 85,
                                        "char": 93
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 85,
                                    "char": 93
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 86,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 86,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 86,
                                    "char": 31
                                },
                                "name": "put",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 86,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 86,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 86,
                                                "char": 46
                                            },
                                            "name": "json_encode_wrapper",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 86,
                                                        "char": 71
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 86,
                                                    "char": 71
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 86,
                                            "char": 72
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 86,
                                        "char": 72
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 86,
                                "char": 73
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 87,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 87,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 88,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 81,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                        "line": 81,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                    "line": 80,
                    "last-line": 90,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "revokePermissions",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "username",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 90,
                            "char": 54
                        },
                        {
                            "type": "parameter",
                            "name": "databaseName",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 90,
                            "char": 75
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 92,
                                    "char": 17
                                },
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 92,
                                    "char": 22
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 94,
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
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "grant",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 94,
                                                    "char": 30
                                                },
                                                "value": {
                                                    "type": "string",
                                                    "value": "none",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 94,
                                                    "char": 38
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 94,
                                                "char": 38
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 94,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 94,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 95,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 95,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_USER",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 95,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 95,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 95,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "username",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 95,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 95,
                                                            "char": 65
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "database",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 95,
                                                                "char": 77
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 95,
                                                            "char": 77
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "databaseName",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 95,
                                                                "char": 91
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 95,
                                                            "char": 91
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 95,
                                                    "char": 92
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 95,
                                                "char": 92
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 95,
                                        "char": 93
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 95,
                                    "char": 93
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 96,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 96,
                                        "char": 14
                                    },
                                    "name": "getConnection",
                                    "call-type": 1,
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 96,
                                    "char": 31
                                },
                                "name": "put",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "url",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 96,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 96,
                                        "char": 39
                                    },
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 96,
                                                "char": 46
                                            },
                                            "name": "json_encode_wrapper",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 96,
                                                        "char": 71
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 96,
                                                    "char": 71
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 96,
                                            "char": 72
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 96,
                                        "char": 72
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 96,
                                "char": 73
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 97,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 97,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 98,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 91,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                        "line": 91,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                    "line": 90,
                    "last-line": 100,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getDatabases",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "username",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 100,
                            "char": 49
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "url",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 102,
                                    "char": 16
                                },
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 102,
                                    "char": 26
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 102,
                                    "char": 32
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 104,
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
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 104,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "URL_USER",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                        "line": 104,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 104,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 104,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "variable",
                                                                "value": "username",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 104,
                                                                "char": 65
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 104,
                                                            "char": 65
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "database",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                                "line": 104,
                                                                "char": 77
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                            "line": 104,
                                                            "char": 77
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 104,
                                                    "char": 78
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 104,
                                                "char": 78
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 104,
                                        "char": 79
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 104,
                                    "char": 79
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 105,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 105,
                                                "char": 30
                                            },
                                            "name": "getConnection",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 105,
                                            "char": 47
                                        },
                                        "name": "get",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "url",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                    "line": 105,
                                                    "char": 55
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                                "line": 105,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 105,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 105,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 106,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                            "line": 106,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                        "line": 106,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 106,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 107,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "variable",
                                    "value": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 107,
                                    "char": 20
                                },
                                "right": {
                                    "type": "string",
                                    "value": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                    "line": 107,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 107,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                            "line": 108,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                                "line": 101,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                        "line": 101,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
                    "line": 100,
                    "last-line": 110,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/userhandler.zep",
        "line": 3,
        "char": 5
    }
]