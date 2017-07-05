[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "ExportCursor",
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
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_options",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_result",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 8,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_hasMore",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 9,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_id",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 10,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_fetches",
                    "default": {
                        "type": "int",
                        "value": "1",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 10,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 11,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_documentClass",
                    "default": {
                        "type": "string",
                        "value": "\\\\ArangoDBClient\\\\Document",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 11,
                        "char": 60
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 12,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "data",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 12,
                        "char": 24
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 13,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 20,
                                "char": 55
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 20,
                            "char": 56
                        },
                        {
                            "type": "parameter",
                            "name": "data",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 20,
                            "char": 68
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 20,
                            "char": 83
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 22,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 22,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 23,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "data",
                                    "expr": {
                                        "type": "variable",
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 23,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 23,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 24,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_id",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 24,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 24,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 25,
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
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 25,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 25,
                                            "char": 37
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_ID",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 25,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 25,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 25,
                                    "char": 39
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 25,
                                "char": 39
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_id",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "data",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 26,
                                                    "char": 33
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 26,
                                                        "char": 48
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_ID",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 26,
                                                        "char": 48
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 26,
                                                    "char": 48
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 26,
                                                "char": 49
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 26,
                                            "char": 49
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 27,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 28,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 28,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "_documentClass",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 28,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 28,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 28,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 29,
                                            "char": 18
                                        },
                                        "name": "setDocumentClass",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 29,
                                                        "char": 43
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "_documentClass",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 29,
                                                        "char": 60
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 29,
                                                    "char": 61
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 29,
                                                "char": 61
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 29,
                                        "char": 62
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 30,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 32,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_hasMore",
                                    "expr": {
                                        "type": "cast",
                                        "left": "bool",
                                        "right": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 32,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 32,
                                                    "char": 62
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_HASMORE",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 32,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 32,
                                                "char": 62
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 32,
                                            "char": 63
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 32,
                                        "char": 63
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 32,
                                    "char": 63
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 33,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_options",
                                    "expr": {
                                        "type": "variable",
                                        "value": "options",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 33,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 33,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 34,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_result",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 34,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 34,
                                    "char": 32
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 35,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 35,
                                    "char": 14
                                },
                                "name": "setData",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "cast",
                                            "left": "array",
                                            "right": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "data",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 35,
                                                    "char": 35
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 35,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_RESULT",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 35,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 35,
                                                    "char": 54
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 35,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 35,
                                            "char": 55
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 35,
                                        "char": 55
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 35,
                                "char": 56
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 36,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 20,
                    "last-line": 38,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "delete",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "e",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 40,
                                    "char": 14
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 42,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 42,
                                    "char": 17
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 42,
                                    "char": 22
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 42,
                                "char": 22
                            },
                            "statements": [
                                {
                                    "type": "try-catch",
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 44,
                                                        "char": 22
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_connection",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 44,
                                                        "char": 35
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 44,
                                                    "char": 35
                                                },
                                                "name": "delete",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "mcall",
                                                                    "variable": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                        "line": 44,
                                                                        "char": 48
                                                                    },
                                                                    "name": "url",
                                                                    "call-type": 1,
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                    "line": 44,
                                                                    "char": 55
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "\/",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                    "line": 44,
                                                                    "char": 61
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                "line": 44,
                                                                "char": 61
                                                            },
                                                            "right": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                    "line": 44,
                                                                    "char": 68
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "_id",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                    "line": 44,
                                                                    "char": 72
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                "line": 44,
                                                                "char": 72
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                            "line": 44,
                                                            "char": 72
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 44,
                                                        "char": 72
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 44,
                                                "char": 73
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 45,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "bool",
                                                "value": "true",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 45,
                                                "char": 28
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 46,
                                            "char": 13
                                        }
                                    ],
                                    "catches": [
                                        {
                                            "classes": [
                                                {
                                                    "type": "variable",
                                                    "value": "Exception",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 46,
                                                    "char": 30
                                                }
                                            ],
                                            "variable": {
                                                "type": "variable",
                                                "value": "e",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 49,
                                                "char": 9
                                            },
                                            "statements": [
                                                {
                                                    "type": "throw",
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "e",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 47,
                                                        "char": 24
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 48,
                                                    "char": 13
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 49,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 49,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 50,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 50,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 51,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 39,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 39,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 38,
                    "last-line": 53,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getCount",
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 55,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "data",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 55,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 55,
                                    "char": 26
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 55,
                                        "char": 44
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_COUNT",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 55,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 55,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 55,
                                "char": 45
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 56,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 54,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 54,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 53,
                    "last-line": 58,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getNextBatch",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 60,
                                    "char": 53
                                },
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 60,
                                    "char": 61
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 62,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 62,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 62,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 63,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 63,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_result",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 63,
                                            "char": 28
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 63,
                                        "char": 28
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "tmpArray40cd750bba9870f18aada2478b24840a",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 63,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 63,
                                    "char": 72
                                },
                                "right": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 63,
                                        "char": 79
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_hasMore",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 63,
                                        "char": 89
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 63,
                                    "char": 89
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 63,
                                "char": 89
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 64,
                                            "char": 18
                                        },
                                        "name": "fetchOutstanding",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 64,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 65,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 66,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 66,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 66,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 67,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 67,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_result",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 67,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 67,
                                    "char": 28
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "tmpArray40cd750bba9870f18aada2478b24840a",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 67,
                                    "char": 71
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 67,
                                "char": 71
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
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 68,
                                                    "char": 32
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_result",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 68,
                                                    "char": 40
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 68,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 68,
                                            "char": 40
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 69,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_result",
                                            "expr": {
                                                "type": "empty-array",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 69,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 69,
                                            "char": 36
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 70,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "result",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 70,
                                        "char": 26
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 71,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 72,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 72,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 73,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 58,
                    "last-line": 75,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "setData",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "data",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 75,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "_documentClass",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 77,
                                    "char": 27
                                },
                                {
                                    "variable": "row",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 77,
                                    "char": 32
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 79,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "_documentClass",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 79,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_documentClass",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 79,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 79,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 79,
                                    "char": 51
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 80,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "isset",
                                    "left": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 80,
                                                "char": 23
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 80,
                                                "char": 32
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 80,
                                            "char": 32
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 80,
                                                "char": 49
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_FLAT",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 80,
                                                "char": 49
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 80,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 80,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 80,
                                    "char": 52
                                },
                                "right": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 80,
                                            "char": 59
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 80,
                                            "char": 68
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 80,
                                        "char": 68
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 80,
                                            "char": 85
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_FLAT",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 80,
                                            "char": 85
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 80,
                                        "char": 85
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 80,
                                    "char": 87
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 80,
                                "char": 87
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_result",
                                            "expr": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 81,
                                                "char": 37
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 81,
                                            "char": 37
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 82,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_result",
                                            "expr": {
                                                "type": "empty-array",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 83,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 83,
                                            "char": 36
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 84,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 84,
                                                    "char": 21
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 84,
                                                    "char": 30
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 84,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 84,
                                                    "char": 47
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_TYPE",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 84,
                                                    "char": 47
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 84,
                                                "char": 47
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 84,
                                            "char": 51
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "Collection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 84,
                                                "char": 75
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "TYPE_EDGE",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 84,
                                                "char": 75
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 84,
                                            "char": 75
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 84,
                                        "char": 75
                                    },
                                    "statements": [
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 85,
                                                "char": 33
                                            },
                                            "value": "row",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "object-property-append",
                                                            "operator": "assign",
                                                            "variable": "this",
                                                            "property": "_result",
                                                            "expr": {
                                                                "type": "scall",
                                                                "dynamic-class": 0,
                                                                "class": "Edge",
                                                                "dynamic": 0,
                                                                "name": "createFromArray",
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "variable",
                                                                            "value": "row",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                            "line": 86,
                                                                            "char": 68
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                        "line": 86,
                                                                        "char": 68
                                                                    },
                                                                    {
                                                                        "parameter": {
                                                                            "type": "property-access",
                                                                            "left": {
                                                                                "type": "variable",
                                                                                "value": "this",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                                "line": 86,
                                                                                "char": 75
                                                                            },
                                                                            "right": {
                                                                                "type": "variable",
                                                                                "value": "_options",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                                "line": 86,
                                                                                "char": 84
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                            "line": 86,
                                                                            "char": 84
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                        "line": 86,
                                                                        "char": 84
                                                                    }
                                                                ],
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                "line": 86,
                                                                "char": 85
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                            "line": 86,
                                                            "char": 85
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 87,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 88,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 89,
                                                "char": 33
                                            },
                                            "value": "row",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "object-property-append",
                                                            "operator": "assign",
                                                            "variable": "this",
                                                            "property": "_result",
                                                            "expr": {
                                                                "type": "scall",
                                                                "dynamic-class": 1,
                                                                "class": "_documentClass",
                                                                "dynamic": 0,
                                                                "name": "createFromArray",
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "variable",
                                                                            "value": "row",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                            "line": 90,
                                                                            "char": 80
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                        "line": 90,
                                                                        "char": 80
                                                                    },
                                                                    {
                                                                        "parameter": {
                                                                            "type": "property-access",
                                                                            "left": {
                                                                                "type": "variable",
                                                                                "value": "this",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                                "line": 90,
                                                                                "char": 87
                                                                            },
                                                                            "right": {
                                                                                "type": "variable",
                                                                                "value": "_options",
                                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                                "line": 90,
                                                                                "char": 96
                                                                            },
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                            "line": 90,
                                                                            "char": 96
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                        "line": 90,
                                                                        "char": 96
                                                                    }
                                                                ],
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                "line": 90,
                                                                "char": 97
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                            "line": 90,
                                                            "char": 97
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 91,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 92,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 93,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 94,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 75,
                    "last-line": 96,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "fetchOutstanding",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "response",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 98,
                                    "char": 21
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 98,
                                    "char": 27
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 100,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 100,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_connection",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 100,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 100,
                                            "char": 43
                                        },
                                        "name": "put",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                                "line": 100,
                                                                "char": 53
                                                            },
                                                            "name": "url",
                                                            "call-type": 1,
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                            "line": 100,
                                                            "char": 60
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\/",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                            "line": 100,
                                                            "char": 66
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 100,
                                                        "char": 66
                                                    },
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                            "line": 100,
                                                            "char": 73
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_id",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                            "line": 100,
                                                            "char": 77
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                        "line": 100,
                                                        "char": 77
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 100,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 100,
                                                "char": 77
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 100,
                                                    "char": 81
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 100,
                                                "char": 81
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 100,
                                        "char": 82
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 100,
                                    "char": 82
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 101,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-incr",
                                    "variable": "this",
                                    "property": "_fetches",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 101,
                                    "char": 29
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 102,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 102,
                                            "char": 30
                                        },
                                        "name": "getJson",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 102,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 102,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 103,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_hasMore",
                                    "expr": {
                                        "type": "cast",
                                        "left": "bool",
                                        "right": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 103,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 103,
                                                    "char": 62
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_HASMORE",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 103,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 103,
                                                "char": 62
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 103,
                                            "char": 63
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 103,
                                        "char": 63
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 103,
                                    "char": 63
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 104,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 104,
                                    "char": 14
                                },
                                "name": "setData",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "array-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 104,
                                                "char": 27
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 104,
                                                    "char": 46
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_RESULT",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                    "line": 104,
                                                    "char": 46
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 104,
                                                "char": 46
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 104,
                                            "char": 47
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 104,
                                        "char": 47
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 104,
                                "char": 48
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 105,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 105,
                                            "char": 19
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_hasMore",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 105,
                                            "char": 28
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 105,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 105,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 105,
                                "char": 30
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_id",
                                            "expr": {
                                                "type": "null",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 106,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 106,
                                            "char": 34
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 107,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 108,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 96,
                    "last-line": 110,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "url",
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 112,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 112,
                                            "char": 32
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 112,
                                        "char": 32
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 112,
                                            "char": 52
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ENTRY_BASEURL",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 112,
                                            "char": 52
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 112,
                                        "char": 52
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 112,
                                    "char": 54
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 112,
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 113,
                                                "char": 25
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 113,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 113,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 113,
                                                "char": 54
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_BASEURL",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                                "line": 113,
                                                "char": 54
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                            "line": 113,
                                            "char": 54
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 113,
                                        "char": 55
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 114,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 115,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "static-constant-access",
                                "left": {
                                    "type": "variable",
                                    "value": "Urls",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 115,
                                    "char": 32
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "URL_EXPORT",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 115,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 115,
                                "char": 32
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 116,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 111,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 111,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 110,
                    "last-line": 118,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getFetches",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 120,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_fetches",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 120,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 120,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 121,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 119,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 119,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 118,
                    "last-line": 123,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getId",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 125,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 125,
                                    "char": 25
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 125,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 126,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 124,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 124,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 123,
                    "last-line": 128,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setDocumentClass",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "classs",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 128,
                            "char": 51
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
                                    "property": "_documentClass",
                                    "expr": {
                                        "type": "variable",
                                        "value": "classs",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                        "line": 130,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 130,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 131,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 131,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                            "line": 132,
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
                                    "value": "ExportCursor",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                    "line": 129,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                                "line": 129,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 129,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 128,
                    "last-line": 134,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_ID",
                    "default": {
                        "type": "string",
                        "value": "id",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 13,
                        "char": 26
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 14,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_HASMORE",
                    "default": {
                        "type": "string",
                        "value": "hasMore",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 14,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 15,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_RESULT",
                    "default": {
                        "type": "string",
                        "value": "result",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 15,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 16,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_FLAT",
                    "default": {
                        "type": "string",
                        "value": "_flat",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 16,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 17,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_COUNT",
                    "default": {
                        "type": "string",
                        "value": "count",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 17,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 18,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_TYPE",
                    "default": {
                        "type": "string",
                        "value": "type",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 18,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 19,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_BASEURL",
                    "default": {
                        "type": "string",
                        "value": "baseurl",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                        "line": 19,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
                    "line": 20,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/exportcursor.zep",
        "line": 3,
        "char": 5
    }
]