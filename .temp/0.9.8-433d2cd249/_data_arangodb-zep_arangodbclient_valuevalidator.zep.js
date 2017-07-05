[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "ValueValidator",
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
                    "name": "validate",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                            "line": 5,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "subValue",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                    "line": 7,
                                    "char": 21
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                            "line": 9,
                            "char": 10
                        },
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
                                                "type": "fcall",
                                                "name": "is_string",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                            "line": 9,
                                                            "char": 27
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                        "line": 9,
                                                        "char": 27
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                "line": 9,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "fcall",
                                                "name": "is_int",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                            "line": 9,
                                                            "char": 44
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                        "line": 9,
                                                        "char": 44
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                "line": 9,
                                                "char": 47
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                            "line": 9,
                                            "char": 47
                                        },
                                        "right": {
                                            "type": "fcall",
                                            "name": "is_float",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "value",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                        "line": 9,
                                                        "char": 63
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                    "line": 9,
                                                    "char": 63
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                            "line": 9,
                                            "char": 66
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                        "line": 9,
                                        "char": 66
                                    },
                                    "right": {
                                        "type": "fcall",
                                        "name": "is_bool",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                    "line": 9,
                                                    "char": 81
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                "line": 9,
                                                "char": 81
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                        "line": 9,
                                        "char": 84
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                    "line": 9,
                                    "char": 84
                                },
                                "right": {
                                    "type": "identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                        "line": 9,
                                        "char": 94
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                        "line": 9,
                                        "char": 101
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                    "line": 9,
                                    "char": 101
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                "line": 9,
                                "char": 101
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                    "line": 11,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                            "line": 12,
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
                                            "value": "value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                            "line": 12,
                                            "char": 26
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                        "line": 12,
                                        "char": 26
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                "line": 12,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                        "line": 13,
                                        "char": 35
                                    },
                                    "value": "subValue",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "scall",
                                            "expr": {
                                                "type": "scall",
                                                "dynamic-class": 0,
                                                "class": "self",
                                                "dynamic": 0,
                                                "name": "validate",
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "subValue",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                            "line": 14,
                                                            "char": 40
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                        "line": 14,
                                                        "char": 40
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                                "line": 14,
                                                "char": 41
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                            "line": 15,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                    "line": 16,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                    "line": 17,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                            "line": 18,
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
                                            "type": "string",
                                            "value": "Invalid bind parameter value",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                            "line": 18,
                                            "char": 65
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                        "line": 18,
                                        "char": 65
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                                "line": 18,
                                "char": 66
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                            "line": 19,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
                    "line": 5,
                    "last-line": 21,
                    "char": 26
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/valuevalidator.zep",
        "line": 3,
        "char": 5
    }
]