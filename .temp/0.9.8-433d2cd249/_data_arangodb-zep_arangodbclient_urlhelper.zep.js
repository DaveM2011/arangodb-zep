[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
        "line": 3,
        "char": 8
    },
    {
        "type": "class",
        "name": "UrlHelper",
        "abstract": 1,
        "final": 0,
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "getDocumentIdFromLocation",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "location",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 5,
                            "char": 69
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "collectionName",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 7,
                                    "char": 27
                                },
                                {
                                    "variable": "id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 7,
                                    "char": 31
                                },
                                {
                                    "variable": "tmpListCollectionNameId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 7,
                                    "char": 56
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 9,
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
                                                "value": "location",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 9,
                                                "char": 31
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 9,
                                            "char": 31
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 9,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 9,
                                "char": 33
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 11,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 12,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 12,
                                    "char": 16
                                },
                                "right": {
                                    "type": "fcall",
                                    "name": "strpos",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "location",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 12,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 12,
                                            "char": 33
                                        },
                                        {
                                            "parameter": {
                                                "type": "string",
                                                "value": "\/_db\/",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 12,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 12,
                                            "char": 42
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 12,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 12,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "tmpListCollectionNameId",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "explode",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "\/",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                            "line": 13,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 13,
                                                        "char": 54
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "location",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                            "line": 13,
                                                            "char": 64
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 13,
                                                        "char": 64
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 13,
                                                "char": 65
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 13,
                                            "char": 65
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 14,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "collectionName",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "tmpListCollectionNameId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 14,
                                                    "char": 57
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "5",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 14,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 14,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 14,
                                            "char": 60
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 15,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "id",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "tmpListCollectionNameId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 15,
                                                    "char": 45
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "6",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 15,
                                                    "char": 47
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 15,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 15,
                                            "char": 48
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 16,
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
                                            "variable": "tmpListCollectionNameId",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "explode",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "\/",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                            "line": 17,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 17,
                                                        "char": 54
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "location",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                            "line": 17,
                                                            "char": 64
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 17,
                                                        "char": 64
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 17,
                                                "char": 65
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 17,
                                            "char": 65
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 18,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "collectionName",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "tmpListCollectionNameId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 18,
                                                    "char": 57
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "3",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 18,
                                                    "char": 59
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 18,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 18,
                                            "char": 60
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 19,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "id",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "tmpListCollectionNameId",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 19,
                                                    "char": 45
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "4",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 19,
                                                    "char": 47
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 19,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 19,
                                            "char": 48
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 20,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 21,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "is_string",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "id",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 21,
                                            "char": 24
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                        "line": 21,
                                        "char": 24
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 21,
                                "char": 26
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "id",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "urldecode",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "id",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                            "line": 22,
                                                            "char": 35
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 22,
                                                        "char": 35
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 22,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 22,
                                            "char": 36
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 23,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 24,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "concat",
                                "left": {
                                    "type": "concat",
                                    "left": {
                                        "type": "variable",
                                        "value": "collectionName",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                        "line": 24,
                                        "char": 31
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "\/",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                        "line": 24,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 24,
                                    "char": 37
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 24,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 24,
                                "char": 41
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 6,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                        "line": 6,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                    "line": 5,
                    "last-line": 27,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "buildUrl",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "baseUrl",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 27,
                            "char": 51
                        },
                        {
                            "type": "parameter",
                            "name": "parts",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 27,
                                "char": 69
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 27,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 29,
                                    "char": 16
                                },
                                {
                                    "variable": "part",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 29,
                                    "char": 22
                                },
                                {
                                    "variable": "tmpListPart",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 29,
                                    "char": 35
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 31,
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
                                        "type": "variable",
                                        "value": "baseUrl",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                        "line": 31,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 31,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 32,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "parts",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 32,
                                "char": 27
                            },
                            "value": "part",
                            "reverse": 0,
                            "statements": [
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
                                                        "value": "part",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 33,
                                                        "char": 27
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 33,
                                                    "char": 27
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "string",
                                                        "value": "\/",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 33,
                                                        "char": 32
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 33,
                                                    "char": 32
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 33,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "bool",
                                            "value": "false",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 33,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                        "line": 33,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "tmpListPart",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "explode",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "string",
                                                                    "value": "\/",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                                    "line": 34,
                                                                    "char": 46
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                                "line": 34,
                                                                "char": 46
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "part",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                                    "line": 34,
                                                                    "char": 52
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                                "line": 34,
                                                                "char": 52
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 34,
                                                        "char": 53
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 34,
                                                    "char": 53
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 35,
                                            "char": 19
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "part",
                                                    "expr": {
                                                        "type": "array-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "tmpListPart",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                            "line": 35,
                                                            "char": 39
                                                        },
                                                        "right": {
                                                            "type": "int",
                                                            "value": "1",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                            "line": 35,
                                                            "char": 41
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 35,
                                                        "char": 42
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 35,
                                                    "char": 42
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 36,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 37,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "url",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "string",
                                                    "value": "\/",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 37,
                                                    "char": 27
                                                },
                                                "right": {
                                                    "type": "fcall",
                                                    "name": "urlencode",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "part",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                                "line": 37,
                                                                "char": 43
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                            "line": 37,
                                                            "char": 43
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 37,
                                                    "char": 44
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 37,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 37,
                                            "char": 44
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 38,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 39,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "url",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 39,
                                "char": 19
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 40,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 28,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                        "line": 28,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                    "line": 27,
                    "last-line": 42,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "appendParamsUrl",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "baseUrl",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 42,
                            "char": 58
                        },
                        {
                            "type": "parameter",
                            "name": "params",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 42,
                            "char": 72
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 44,
                                    "char": 18
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 46,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "params",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 46,
                                "char": 32
                            },
                            "key": "_",
                            "value": "value",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "is_bool",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 47,
                                                    "char": 29
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 47,
                                                "char": 29
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                        "line": 47,
                                        "char": 31
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "value",
                                                    "expr": {
                                                        "type": "scall",
                                                        "dynamic-class": 0,
                                                        "class": "self",
                                                        "dynamic": 0,
                                                        "name": "getBoolString",
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "value",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                                    "line": 48,
                                                                    "char": 55
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                                "line": 48,
                                                                "char": 55
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                        "line": 48,
                                                        "char": 56
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                    "line": 48,
                                                    "char": 56
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 49,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 50,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 51,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "concat",
                                "left": {
                                    "type": "concat",
                                    "left": {
                                        "type": "variable",
                                        "value": "baseUrl",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                        "line": 51,
                                        "char": 24
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "?",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                        "line": 51,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 51,
                                    "char": 30
                                },
                                "right": {
                                    "type": "fcall",
                                    "name": "http_build_query",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "params",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                                "line": 51,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                            "line": 51,
                                            "char": 55
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 51,
                                    "char": 56
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 51,
                                "char": 56
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 52,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 43,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                        "line": 43,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                    "line": 42,
                    "last-line": 54,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "getBoolString",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 54,
                            "char": 47
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "ternary",
                                "left": {
                                    "type": "variable",
                                    "value": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 56,
                                    "char": 23
                                },
                                "right": {
                                    "type": "string",
                                    "value": "true",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 56,
                                    "char": 33
                                },
                                "extra": {
                                    "type": "string",
                                    "value": "false",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                    "line": 56,
                                    "char": 42
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 56,
                                "char": 42
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                            "line": 57,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                                "line": 55,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                        "line": 55,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
                    "line": 54,
                    "last-line": 59,
                    "char": 26
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
            "line": 3,
            "char": 14
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/urlhelper.zep",
        "line": 3,
        "char": 14
    }
]