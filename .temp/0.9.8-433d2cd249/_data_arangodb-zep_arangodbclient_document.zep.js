[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Document",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_id",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_key",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_rev",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 8,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_values",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 8,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 9,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_changed",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 9,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 10,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_isNew",
                    "default": {
                        "type": "bool",
                        "value": "true",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 10,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 11,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_doValidate",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 11,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 12,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_hiddenAttributes",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 12,
                        "char": 37
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 13,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_ignoreHiddenAttributes",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 13,
                        "char": 46
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 14,
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
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 23,
                                "char": 53
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 23,
                            "char": 53
                        }
                    ],
                    "statements": [
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
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 25,
                                            "char": 28
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 25,
                                        "char": 28
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 25,
                                "char": 30
                            },
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 26,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "hiddenAttributes",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 26,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 26,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 26,
                                        "char": 50
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 27,
                                                    "char": 22
                                                },
                                                "name": "setHiddenAttributes",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 27,
                                                                "char": 50
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "hiddenAttributes",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 27,
                                                                "char": 69
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 27,
                                                            "char": 70
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 27,
                                                        "char": 70
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 27,
                                                "char": 71
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 28,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 29,
                                    "char": 14
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 29,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 29,
                                                    "char": 58
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_HIDDENATTRIBUTES",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 29,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 29,
                                                "char": 58
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 29,
                                            "char": 60
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 29,
                                        "char": 60
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 30,
                                                    "char": 22
                                                },
                                                "name": "setHiddenAttributes",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 30,
                                                                "char": 50
                                                            },
                                                            "right": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 30,
                                                                    "char": 79
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "ENTRY_HIDDENATTRIBUTES",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 30,
                                                                    "char": 79
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 30,
                                                                "char": 79
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 30,
                                                            "char": 80
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 30,
                                                        "char": 80
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 30,
                                                "char": 81
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 31,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 32,
                                    "char": 14
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 32,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 32,
                                                    "char": 64
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_IGNOREHIDDENATTRIBUTES",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 32,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 32,
                                                "char": 64
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 32,
                                            "char": 66
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 32,
                                        "char": 66
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 33,
                                                    "char": 22
                                                },
                                                "name": "setIgnoreHiddenAttributes",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 33,
                                                                "char": 56
                                                            },
                                                            "right": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 33,
                                                                    "char": 91
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "ENTRY_IGNOREHIDDENATTRIBUTES",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 33,
                                                                    "char": 91
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 33,
                                                                "char": 91
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 33,
                                                            "char": 92
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 33,
                                                        "char": 92
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 33,
                                                "char": 93
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 34,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 35,
                                    "char": 14
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 35,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "self",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 35,
                                                    "char": 47
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ENTRY_ISNEW",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 35,
                                                    "char": 47
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 35,
                                                "char": 47
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 35,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 35,
                                        "char": 49
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 36,
                                                    "char": 22
                                                },
                                                "name": "setIsNew",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 36,
                                                                "char": 39
                                                            },
                                                            "right": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 36,
                                                                    "char": 57
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "ENTRY_ISNEW",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 36,
                                                                    "char": 57
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 36,
                                                                "char": 57
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 36,
                                                            "char": 58
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 36,
                                                        "char": 58
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 36,
                                                "char": 59
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 37,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 38,
                                    "char": 14
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 38,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "_validate",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 38,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 38,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 38,
                                        "char": 43
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "_doValidate",
                                                    "expr": {
                                                        "type": "array-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "options",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 39,
                                                            "char": 48
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "_validate",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 39,
                                                            "char": 60
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 39,
                                                        "char": 61
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 39,
                                                    "char": 61
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 40,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 41,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 42,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 23,
                    "last-line": 44,
                    "char": 19
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "createFromArray",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "values",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 44,
                            "char": 56
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 44,
                                "char": 76
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 44,
                            "char": 76
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 46,
                                    "char": 21
                                },
                                {
                                    "variable": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 46,
                                    "char": 26
                                },
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 46,
                                    "char": 33
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 48,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "document",
                                    "expr": {
                                        "type": "new",
                                        "class": "Document",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 48,
                                                    "char": 45
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 48,
                                                "char": 45
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 48,
                                        "char": 46
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 48,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 49,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "values",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 49,
                                "char": 34
                            },
                            "key": "key",
                            "value": "value",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "document",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 50,
                                            "char": 22
                                        },
                                        "name": "set",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 50,
                                                    "char": 30
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 50,
                                                "char": 30
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 50,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 50,
                                                "char": 37
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 50,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 51,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 52,
                            "char": 16
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 52,
                                    "char": 18
                                },
                                "name": "setChanged",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "bool",
                                            "value": "true",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 52,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 52,
                                        "char": 34
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 52,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 53,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "document",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 53,
                                "char": 24
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 54,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 44,
                    "last-line": 56,
                    "char": 26
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__clone",
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 58,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 58,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 59,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_key",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 59,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 59,
                                    "char": 31
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 60,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_rev",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 60,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 60,
                                    "char": 31
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 61,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 56,
                    "last-line": 63,
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
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 65,
                                    "char": 21
                                },
                                "name": "toJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 65,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 66,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 64,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 64,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 63,
                    "last-line": 68,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "toJson",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 68,
                                "char": 46
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 68,
                            "char": 46
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "json_encode",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 70,
                                                "char": 33
                                            },
                                            "name": "getAll",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 70,
                                                        "char": 48
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 70,
                                                    "char": 48
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 70,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 70,
                                        "char": 49
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 70,
                                "char": 50
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 71,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 69,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 69,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 68,
                    "last-line": 73,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "toSerialized",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 73,
                                "char": 52
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 73,
                            "char": 52
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "serialize",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 75,
                                                "char": 31
                                            },
                                            "name": "getAll",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 75,
                                                        "char": 46
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 75,
                                                    "char": 46
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 75,
                                            "char": 47
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 75,
                                        "char": 47
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 75,
                                "char": 48
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 76,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 74,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 74,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 73,
                    "last-line": 78,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "filterHiddenAttributes",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "attributes",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 78,
                            "char": 60
                        },
                        {
                            "type": "parameter",
                            "name": "_hiddenAttributes",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 78,
                                "char": 90
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 78,
                            "char": 90
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "hiddenAttributes",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 80,
                                    "char": 29
                                },
                                {
                                    "variable": "hiddenAttributeName",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 80,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 82,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "hiddenAttributes",
                                    "expr": {
                                        "type": "ternary",
                                        "left": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "_hiddenAttributes",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 82,
                                                "char": 53
                                            },
                                            "right": {
                                                "type": "null",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 82,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 82,
                                            "char": 60
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_hiddenAttributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 82,
                                            "char": 81
                                        },
                                        "extra": {
                                            "type": "mcall",
                                            "variable": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 82,
                                                "char": 88
                                            },
                                            "name": "getHiddenAttributes",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 82,
                                            "char": 110
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 82,
                                        "char": 110
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 82,
                                    "char": 110
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 83,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "greater",
                                "left": {
                                    "type": "fcall",
                                    "name": "count",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "hiddenAttributes",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 83,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 83,
                                            "char": 34
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 83,
                                    "char": 36
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 83,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 83,
                                "char": 40
                            },
                            "statements": [
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "variable",
                                        "value": "hiddenAttributes",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 84,
                                        "char": 57
                                    },
                                    "value": "hiddenAttributeName",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "isset",
                                                "left": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "attributes",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 85,
                                                        "char": 36
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "hiddenAttributeName",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 85,
                                                        "char": 56
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 85,
                                                    "char": 58
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 85,
                                                "char": 58
                                            },
                                            "statements": [
                                                {
                                                    "type": "unset",
                                                    "expr": {
                                                        "type": "array-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "attributes",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 86,
                                                            "char": 37
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "hiddenAttributeName",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 86,
                                                            "char": 57
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 86,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 88,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 89,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 90,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 91,
                            "char": 13
                        },
                        {
                            "type": "unset",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "variable",
                                    "value": "attributes",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 91,
                                    "char": 25
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 91,
                                        "char": 54
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_HIDDENATTRIBUTES",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 91,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 91,
                                    "char": 54
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 91,
                                "char": 55
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 93,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "attributes",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 93,
                                "char": 26
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 94,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 79,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 79,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 78,
                    "last-line": 96,
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
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 96,
                            "char": 35
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 96,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 98,
                                    "char": 17
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_doValidate",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 98,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 98,
                                "char": 30
                            },
                            "statements": [
                                {
                                    "type": "scall",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "ValueValidator",
                                        "dynamic": 0,
                                        "name": "validate",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 99,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 99,
                                                "char": 43
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 99,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 100,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 101,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "array-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 101,
                                        "char": 15
                                    },
                                    "right": {
                                        "type": "int",
                                        "value": "0",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 101,
                                        "char": 17
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 101,
                                    "char": 21
                                },
                                "right": {
                                    "type": "char",
                                    "value": "_",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 101,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 101,
                                "char": 27
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 102,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 102,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_ID",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 102,
                                                "char": 39
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 102,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 102,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 103,
                                                    "char": 22
                                                },
                                                "name": "setInternalId",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 103,
                                                            "char": 42
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 103,
                                                        "char": 42
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 103,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 104,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 105,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 106,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 106,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 106,
                                                "char": 40
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_KEY",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 106,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 106,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 106,
                                        "char": 40
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 107,
                                                    "char": 22
                                                },
                                                "name": "setInternalKey",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 107,
                                                            "char": 43
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 107,
                                                        "char": 43
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 107,
                                                "char": 44
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 108,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 109,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 110,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 110,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 110,
                                                "char": 40
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_REV",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 110,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 110,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 110,
                                        "char": 40
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 111,
                                                    "char": 22
                                                },
                                                "name": "setRevision",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 111,
                                                            "char": 40
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 111,
                                                        "char": 40
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 111,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 112,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 113,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 114,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 114,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 114,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_ISNEW",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 114,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 114,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 114,
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
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 115,
                                                    "char": 22
                                                },
                                                "name": "setIsNew",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 115,
                                                            "char": 37
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 115,
                                                        "char": 37
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 115,
                                                "char": 38
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 116,
                                            "char": 22
                                        },
                                        {
                                            "type": "return",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 117,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 118,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 119,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 119,
                                        "char": 18
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_changed",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 119,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 119,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 119,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "or",
                                        "left": {
                                            "type": "not",
                                            "left": {
                                                "type": "isset",
                                                "left": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 120,
                                                            "char": 28
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "_values",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 120,
                                                            "char": 36
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 120,
                                                        "char": 36
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "key",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 120,
                                                        "char": 40
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 120,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 120,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 120,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 120,
                                                        "char": 50
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_values",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 120,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 120,
                                                    "char": 58
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 120,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 120,
                                                "char": 66
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 120,
                                                "char": 74
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 120,
                                            "char": 74
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 120,
                                        "char": 74
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "_changed",
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "true",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 121,
                                                        "char": 43
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 121,
                                                    "char": 43
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 122,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 123,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 124,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-array-index",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_values",
                                    "index-expr": [
                                        {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 124,
                                            "char": 30
                                        }
                                    ],
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 124,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 124,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 125,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 96,
                    "last-line": 127,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 127,
                            "char": 37
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 127,
                            "char": 44
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 129,
                                    "char": 14
                                },
                                "name": "set",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 129,
                                            "char": 22
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 129,
                                        "char": 22
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 129,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 129,
                                        "char": 29
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 129,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 130,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 127,
                    "last-line": 132,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 132,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 134,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 134,
                                            "char": 31
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 134,
                                        "char": 31
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 134,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 134,
                                    "char": 37
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 134,
                                "char": 37
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 135,
                                                "char": 25
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_values",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 135,
                                                "char": 33
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 135,
                                            "char": 33
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 135,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 135,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 136,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 137,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 137,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 138,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 132,
                    "last-line": 140,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 140,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 142,
                                    "char": 21
                                },
                                "name": "get",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 142,
                                            "char": 29
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 142,
                                        "char": 29
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 142,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 143,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 140,
                    "last-line": 145,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 145,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 147,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 147,
                                            "char": 31
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 147,
                                        "char": 31
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 147,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 147,
                                    "char": 37
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 147,
                                "char": 37
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 148,
                                        "char": 24
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 149,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 150,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 150,
                                "char": 21
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 151,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 146,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 146,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 145,
                    "last-line": 153,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__unset",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 153,
                            "char": 32
                        }
                    ],
                    "statements": [
                        {
                            "type": "unset",
                            "expr": {
                                "type": "array-access",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 155,
                                        "char": 20
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_values",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 155,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 155,
                                    "char": 28
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 155,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 155,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 157,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 154,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 153,
                    "last-line": 159,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getAll",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 159,
                                "char": 46
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 159,
                            "char": 46
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "includeInternals",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 161,
                                    "char": 29
                                },
                                {
                                    "variable": "ignoreHiddenAttributes",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 161,
                                    "char": 53
                                },
                                {
                                    "variable": "_hiddenAttributes",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 161,
                                    "char": 72
                                },
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 161,
                                    "char": 78
                                },
                                {
                                    "variable": "nonInternals",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 161,
                                    "char": 92
                                },
                                {
                                    "variable": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 161,
                                    "char": 97
                                },
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 161,
                                    "char": 104
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 163,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "includeInternals",
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 163,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 163,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 164,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "ignoreHiddenAttributes",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 164,
                                            "char": 44
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_ignoreHiddenAttributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 164,
                                            "char": 68
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 164,
                                        "char": 68
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 164,
                                    "char": 68
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 165,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "_hiddenAttributes",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 165,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_hiddenAttributes",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 165,
                                            "char": 57
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 165,
                                        "char": 57
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 165,
                                    "char": 57
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 166,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "fcall",
                                    "name": "is_array",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 166,
                                                "char": 29
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 166,
                                            "char": 29
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 166,
                                    "char": 31
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 166,
                                "char": 31
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "includeInternals",
                                            "expr": {
                                                "type": "variable",
                                                "value": "options",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 167,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 167,
                                            "char": 43
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 168,
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
                                            "variable": "includeInternals",
                                            "expr": {
                                                "type": "ternary",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "array_key_exists",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "includeInternals",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 169,
                                                                "char": 72
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 169,
                                                            "char": 72
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 169,
                                                                "char": 81
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 169,
                                                            "char": 81
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 169,
                                                    "char": 83
                                                },
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 169,
                                                        "char": 92
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "includeInternals",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 169,
                                                        "char": 111
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 169,
                                                    "char": 114
                                                },
                                                "extra": {
                                                    "type": "variable",
                                                    "value": "includeInternals",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 169,
                                                    "char": 132
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 169,
                                                "char": 132
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 169,
                                            "char": 132
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 170,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "includeInternals",
                                            "expr": {
                                                "type": "ternary",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "array_key_exists",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "_includeInternals",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 170,
                                                                "char": 73
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 170,
                                                            "char": 73
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 170,
                                                                "char": 82
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 170,
                                                            "char": 82
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 170,
                                                    "char": 84
                                                },
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 170,
                                                        "char": 93
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "_includeInternals",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 170,
                                                        "char": 113
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 170,
                                                    "char": 116
                                                },
                                                "extra": {
                                                    "type": "variable",
                                                    "value": "includeInternals",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 170,
                                                    "char": 134
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 170,
                                                "char": 134
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 170,
                                            "char": 134
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 171,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "ignoreHiddenAttributes",
                                            "expr": {
                                                "type": "ternary",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "array_key_exists",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "ignoreHiddenAttributes",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 171,
                                                                "char": 84
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 171,
                                                            "char": 84
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 171,
                                                                "char": 93
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 171,
                                                            "char": 93
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 171,
                                                    "char": 95
                                                },
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 171,
                                                        "char": 104
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "ignoreHiddenAttributes",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 171,
                                                        "char": 129
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 171,
                                                    "char": 132
                                                },
                                                "extra": {
                                                    "type": "variable",
                                                    "value": "ignoreHiddenAttributes",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 171,
                                                    "char": 156
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 171,
                                                "char": 156
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 171,
                                            "char": 156
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 172,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "ignoreHiddenAttributes",
                                            "expr": {
                                                "type": "ternary",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "array_key_exists",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 172,
                                                                    "char": 94
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "ENTRY_IGNOREHIDDENATTRIBUTES",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 172,
                                                                    "char": 94
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 172,
                                                                "char": 94
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 172,
                                                            "char": 94
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 172,
                                                                "char": 103
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 172,
                                                            "char": 103
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 172,
                                                    "char": 105
                                                },
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 172,
                                                        "char": 114
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 172,
                                                            "char": 149
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_IGNOREHIDDENATTRIBUTES",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 172,
                                                            "char": 149
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 172,
                                                        "char": 149
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 172,
                                                    "char": 152
                                                },
                                                "extra": {
                                                    "type": "variable",
                                                    "value": "ignoreHiddenAttributes",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 172,
                                                    "char": 176
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 172,
                                                "char": 176
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 172,
                                            "char": 176
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 173,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "_hiddenAttributes",
                                            "expr": {
                                                "type": "ternary",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "array_key_exists",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 173,
                                                                    "char": 83
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "ENTRY_HIDDENATTRIBUTES",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 173,
                                                                    "char": 83
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 173,
                                                                "char": 83
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 173,
                                                            "char": 83
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "options",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 173,
                                                                "char": 92
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 173,
                                                            "char": 92
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 173,
                                                    "char": 94
                                                },
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "options",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 173,
                                                        "char": 103
                                                    },
                                                    "right": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "self",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 173,
                                                            "char": 132
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "ENTRY_HIDDENATTRIBUTES",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 173,
                                                            "char": 132
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 173,
                                                        "char": 132
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 173,
                                                    "char": 135
                                                },
                                                "extra": {
                                                    "type": "variable",
                                                    "value": "_hiddenAttributes",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 173,
                                                    "char": 154
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 173,
                                                "char": 154
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 173,
                                            "char": 154
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 174,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 175,
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
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 175,
                                            "char": 26
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_values",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 175,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 175,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 175,
                                    "char": 34
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 176,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "nonInternals",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "value": {
                                                    "type": "string",
                                                    "value": "_changed",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 176,
                                                    "char": 40
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 176,
                                                "char": 40
                                            },
                                            {
                                                "value": {
                                                    "type": "string",
                                                    "value": "_values",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 176,
                                                    "char": 51
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 176,
                                                "char": 51
                                            },
                                            {
                                                "value": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 176,
                                                        "char": 81
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_HIDDENATTRIBUTES",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 176,
                                                        "char": 81
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 176,
                                                    "char": 81
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 176,
                                                "char": 81
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 176,
                                        "char": 82
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 176,
                                    "char": 82
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 177,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "includeInternals",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 177,
                                    "char": 31
                                },
                                "right": {
                                    "type": "bool",
                                    "value": "true",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 177,
                                    "char": 38
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 177,
                                "char": 38
                            },
                            "statements": [
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 178,
                                        "char": 36
                                    },
                                    "key": "key",
                                    "value": "value",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "and",
                                                "left": {
                                                    "type": "and",
                                                    "left": {
                                                        "type": "identical",
                                                        "left": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "key",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 179,
                                                                "char": 23
                                                            },
                                                            "right": {
                                                                "type": "int",
                                                                "value": "0",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 179,
                                                                "char": 25
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 179,
                                                            "char": 29
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "_",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 179,
                                                            "char": 36
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 179,
                                                        "char": 36
                                                    },
                                                    "right": {
                                                        "type": "not-identical",
                                                        "left": {
                                                            "type": "int",
                                                            "value": "0",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 179,
                                                            "char": 42
                                                        },
                                                        "right": {
                                                            "type": "fcall",
                                                            "name": "strpos",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "variable",
                                                                        "value": "key",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                        "line": 179,
                                                                        "char": 54
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 179,
                                                                    "char": 54
                                                                },
                                                                {
                                                                    "parameter": {
                                                                        "type": "string",
                                                                        "value": "__",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                        "line": 179,
                                                                        "char": 60
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 179,
                                                                    "char": 60
                                                                }
                                                            ],
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 179,
                                                            "char": 63
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 179,
                                                        "char": 63
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 179,
                                                    "char": 63
                                                },
                                                "right": {
                                                    "type": "not",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "in_array",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "key",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 179,
                                                                    "char": 78
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 179,
                                                                "char": 78
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "nonInternals",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 179,
                                                                    "char": 92
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 179,
                                                                "char": 92
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "bool",
                                                                    "value": "true",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 179,
                                                                    "char": 98
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 179,
                                                                "char": 98
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 179,
                                                        "char": 100
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 179,
                                                    "char": 100
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 179,
                                                "char": 100
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "array-index",
                                                            "operator": "assign",
                                                            "variable": "data",
                                                            "index-expr": [
                                                                {
                                                                    "type": "variable",
                                                                    "value": "key",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                    "line": 180,
                                                                    "char": 33
                                                                }
                                                            ],
                                                            "expr": {
                                                                "type": "variable",
                                                                "value": "value",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                                "line": 180,
                                                                "char": 42
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 180,
                                                            "char": 42
                                                        }
                                                    ],
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 181,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 182,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 183,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 184,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "ignoreHiddenAttributes",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 184,
                                    "char": 37
                                },
                                "right": {
                                    "type": "bool",
                                    "value": "false",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 184,
                                    "char": 45
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 184,
                                "char": 45
                            },
                            "statements": [
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
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 185,
                                                    "char": 30
                                                },
                                                "name": "filterHiddenAttributes",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "data",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 185,
                                                            "char": 58
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 185,
                                                        "char": 58
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "_hiddenAttributes",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                            "line": 185,
                                                            "char": 77
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 185,
                                                        "char": 77
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 185,
                                                "char": 78
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 185,
                                            "char": 78
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 186,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 187,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 187,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 187,
                                        "char": 25
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 187,
                                    "char": 25
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 187,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 187,
                                "char": 32
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "data",
                                            "index-expr": [
                                                {
                                                    "type": "string",
                                                    "value": "_key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 188,
                                                    "char": 28
                                                }
                                            ],
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 188,
                                                    "char": 37
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 188,
                                                    "char": 42
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 188,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 188,
                                            "char": 42
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 189,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 190,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "data",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 190,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 191,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 160,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 160,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 159,
                    "last-line": 193,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getAllForInsertUpdate",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 195,
                                    "char": 17
                                },
                                {
                                    "variable": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 195,
                                    "char": 22
                                },
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 195,
                                    "char": 29
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 197,
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
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 197,
                                        "char": 23
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 197,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 198,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 198,
                                    "char": 32
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_values",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 198,
                                    "char": 41
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 198,
                                "char": 41
                            },
                            "key": "key",
                            "value": "value",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "or",
                                        "left": {
                                            "type": "identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "key",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 199,
                                                "char": 22
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "_id",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 199,
                                                "char": 31
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 199,
                                            "char": 31
                                        },
                                        "right": {
                                            "type": "identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "key",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 199,
                                                "char": 39
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "_rev",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 199,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 199,
                                            "char": 48
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 199,
                                        "char": 48
                                    },
                                    "statements": [
                                        {
                                            "type": "continue",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 201,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "and",
                                                "left": {
                                                    "type": "identical",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "key",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 202,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "_key",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 202,
                                                        "char": 36
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 202,
                                                    "char": 36
                                                },
                                                "right": {
                                                    "type": "identical",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 202,
                                                        "char": 46
                                                    },
                                                    "right": {
                                                        "type": "null",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 202,
                                                        "char": 53
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 202,
                                                    "char": 53
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 202,
                                                "char": 53
                                            },
                                            "statements": [
                                                {
                                                    "type": "continue",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 204,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 205,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 206,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "data",
                                            "index-expr": [
                                                {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 206,
                                                    "char": 25
                                                }
                                            ],
                                            "expr": {
                                                "type": "variable",
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 206,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 206,
                                            "char": 34
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 207,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 208,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 208,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 208,
                                        "char": 25
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 208,
                                    "char": 25
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 208,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 208,
                                "char": 32
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "data",
                                            "index-expr": [
                                                {
                                                    "type": "string",
                                                    "value": "_key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 209,
                                                    "char": 28
                                                }
                                            ],
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 209,
                                                    "char": 37
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 209,
                                                    "char": 42
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 209,
                                                "char": 42
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 209,
                                            "char": 42
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 210,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 211,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "data",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 211,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 212,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 193,
                    "last-line": 214,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getAllAsObject",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 214,
                                "char": 54
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 214,
                            "char": 54
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 216,
                                    "char": 19
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 218,
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
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 218,
                                            "char": 28
                                        },
                                        "name": "getAll",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "options",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 218,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 218,
                                                "char": 43
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 218,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 218,
                                    "char": 44
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 219,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "fcall",
                                    "name": "count",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "result",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 219,
                                                "char": 24
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 219,
                                            "char": 24
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 219,
                                    "char": 28
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 219,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 219,
                                "char": 32
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "new",
                                        "class": "\\stdClass",
                                        "dynamic": 0,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 220,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 221,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 222,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "result",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 222,
                                "char": 22
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 223,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 214,
                    "last-line": 225,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setHiddenAttributes",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "attributes",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 225,
                            "char": 57
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
                                    "property": "_hiddenAttributes",
                                    "expr": {
                                        "type": "variable",
                                        "value": "attributes",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 227,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 227,
                                    "char": 49
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 228,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 225,
                    "last-line": 230,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHiddenAttributes",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 232,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_hiddenAttributes",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 232,
                                    "char": 39
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 232,
                                "char": 39
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 233,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 231,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 231,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 230,
                    "last-line": 235,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "isIgnoreHiddenAttributes",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 237,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_ignoreHiddenAttributes",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 237,
                                    "char": 45
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 237,
                                "char": 45
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 238,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 236,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 236,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 235,
                    "last-line": 240,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setIgnoreHiddenAttributes",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "ignoreHiddenAttributes",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 240,
                            "char": 74
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
                                    "property": "_ignoreHiddenAttributes",
                                    "expr": {
                                        "type": "variable",
                                        "value": "ignoreHiddenAttributes",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 242,
                                        "char": 68
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 242,
                                    "char": 68
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 243,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 241,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 240,
                    "last-line": 245,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setChanged",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 245,
                            "char": 42
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
                                    "property": "_changed",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 247,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 247,
                                    "char": 36
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 248,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 248,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_changed",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 248,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 248,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 249,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 246,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 246,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 245,
                    "last-line": 251,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getChanged",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 253,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_changed",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 253,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 253,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 254,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 252,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 252,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 251,
                    "last-line": 256,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setIsNew",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "isNew",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 256,
                            "char": 40
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
                                    "property": "_isNew",
                                    "expr": {
                                        "type": "variable",
                                        "value": "isNew",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 258,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 258,
                                    "char": 34
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 259,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 256,
                    "last-line": 261,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getIsNew",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 263,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_isNew",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 263,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 263,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 264,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 262,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 262,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 261,
                    "last-line": 266,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setInternalId",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "id",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 266,
                            "char": 44
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 268,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_id",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 268,
                                            "char": 24
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 268,
                                        "char": 24
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 268,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 268,
                                    "char": 32
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 268,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_id",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 268,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 268,
                                        "char": 46
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "id",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 268,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 268,
                                    "char": 51
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 268,
                                "char": 51
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
                                                    "value": "Should not update the id of an existing document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 269,
                                                    "char": 89
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 269,
                                                "char": 89
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 269,
                                        "char": 90
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 270,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 271,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "fcall",
                                        "name": "preg_match",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "\/^[a-zA-Z0-9_-]{1,64}\\\\\/[a-zA-Z0-9_:.@\\\\-()+,=;$!*'%]{1,254}$\/",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 271,
                                                    "char": 89
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 271,
                                                "char": 89
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "id",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 271,
                                                    "char": 93
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 271,
                                                "char": 93
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 271,
                                        "char": 94
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 271,
                                    "char": 96
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 271,
                                "char": 96
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
                                                    "value": "Invalid format for document id",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 272,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 272,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 272,
                                        "char": 72
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 273,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 274,
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
                                        "type": "variable",
                                        "value": "id",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 274,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 274,
                                    "char": 28
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 275,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 266,
                    "last-line": 277,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setInternalKey",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 277,
                            "char": 46
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 279,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 279,
                                            "char": 25
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 279,
                                        "char": 25
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 279,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 279,
                                    "char": 33
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 279,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 279,
                                            "char": 48
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 279,
                                        "char": 48
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 279,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 279,
                                    "char": 54
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 279,
                                "char": 54
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
                                                    "value": "Should not update the key of an existing document",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 280,
                                                    "char": 90
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 280,
                                                "char": 90
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 280,
                                        "char": 91
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 281,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 282,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "fcall",
                                        "name": "preg_match",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "\/^[a-zA-Z0-9_:.@\\\\-()+,=;$!*'%]{1,254}$\/",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 282,
                                                    "char": 67
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 282,
                                                "char": 67
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 282,
                                                    "char": 72
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 282,
                                                "char": 72
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 282,
                                        "char": 73
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 282,
                                    "char": 75
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 282,
                                "char": 75
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
                                                    "value": "Invalid format for document key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 283,
                                                    "char": 72
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 283,
                                                "char": 72
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 283,
                                        "char": 73
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 284,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 285,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_key",
                                    "expr": {
                                        "type": "variable",
                                        "value": "key",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 285,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 285,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 286,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 277,
                    "last-line": 288,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getInternalId",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 290,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 290,
                                    "char": 25
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 290,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 291,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 289,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 289,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 288,
                    "last-line": 293,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getInternalKey",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 295,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 295,
                                    "char": 26
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 295,
                                "char": 26
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 296,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 294,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 294,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 293,
                    "last-line": 298,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHandle",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 300,
                                    "char": 21
                                },
                                "name": "getInternalId",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 300,
                                "char": 37
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 301,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 299,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 299,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 298,
                    "last-line": 303,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 305,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 305,
                                    "char": 25
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 305,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 306,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 303,
                    "last-line": 308,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getKey",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 310,
                                    "char": 21
                                },
                                "name": "getInternalKey",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 310,
                                "char": 38
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 311,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 308,
                    "last-line": 313,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getCollectionId",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "collectionId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 315,
                                    "char": 25
                                },
                                {
                                    "variable": "tmpListCollectionId",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 315,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 317,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpListCollectionId",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "explode",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "\/",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 317,
                                                    "char": 46
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 317,
                                                "char": 46
                                            },
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 317,
                                                        "char": 53
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_id",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                        "line": 317,
                                                        "char": 57
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 317,
                                                    "char": 57
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 317,
                                                "char": 57
                                            },
                                            {
                                                "parameter": {
                                                    "type": "int",
                                                    "value": "2",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                    "line": 317,
                                                    "char": 60
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                                "line": 317,
                                                "char": 60
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 317,
                                        "char": 61
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 317,
                                    "char": 61
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 318,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collectionId",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "tmpListCollectionId",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 318,
                                            "char": 47
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "0",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                            "line": 318,
                                            "char": 49
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 318,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 318,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 319,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "collectionId",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 319,
                                "char": 28
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 320,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 313,
                    "last-line": 322,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setRevision",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "rev",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 322,
                            "char": 43
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
                                    "property": "_rev",
                                    "expr": {
                                        "type": "variable",
                                        "value": "rev",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                        "line": 324,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 324,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 325,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 322,
                    "last-line": 327,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getRevision",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 329,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_rev",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                    "line": 329,
                                    "char": 26
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                                "line": 329,
                                "char": 26
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                            "line": 330,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 327,
                    "last-line": 332,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_ID",
                    "default": {
                        "type": "string",
                        "value": "_id",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 14,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 15,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_KEY",
                    "default": {
                        "type": "string",
                        "value": "_key",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 15,
                        "char": 29
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 16,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_REV",
                    "default": {
                        "type": "string",
                        "value": "_rev",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 16,
                        "char": 29
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 17,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_ISNEW",
                    "default": {
                        "type": "string",
                        "value": "_isNew",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 17,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 18,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_HIDDENATTRIBUTES",
                    "default": {
                        "type": "string",
                        "value": "_hiddenAttributes",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 18,
                        "char": 55
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 19,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_IGNOREHIDDENATTRIBUTES",
                    "default": {
                        "type": "string",
                        "value": "_ignoreHiddenAttributes",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 19,
                        "char": 67
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 20,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_WAIT_FOR_SYNC",
                    "default": {
                        "type": "string",
                        "value": "waitForSync",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 20,
                        "char": 47
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 21,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_POLICY",
                    "default": {
                        "type": "string",
                        "value": "policy",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 21,
                        "char": 35
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 22,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_KEEPNULL",
                    "default": {
                        "type": "string",
                        "value": "keepNull",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                        "line": 22,
                        "char": 39
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
                    "line": 23,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/document.zep",
        "line": 3,
        "char": 5
    }
]