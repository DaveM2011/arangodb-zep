[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "HttpResponse",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_header",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 5,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_body",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 6,
                        "char": 25
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_headers",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 7,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 8,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_result",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 8,
                        "char": 27
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 9,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_httpCode",
                    "default": {
                        "type": "int",
                        "value": "0",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 9,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 10,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_wasAsync",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 10,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 11,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "batchPart",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 12,
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
                            "name": "responseString",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 13,
                            "char": 54
                        },
                        {
                            "type": "parameter",
                            "name": "originUrl",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 13,
                                "char": 79
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 13,
                            "char": 79
                        },
                        {
                            "type": "parameter",
                            "name": "originMethod",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 13,
                                "char": 107
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 13,
                            "char": 107
                        },
                        {
                            "type": "parameter",
                            "name": "wasAsync",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 13,
                                "char": 130
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 13,
                            "char": 130
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "_headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 15,
                                    "char": 21
                                },
                                {
                                    "variable": "_body",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 15,
                                    "char": 28
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 17,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_wasAsync",
                                    "expr": {
                                        "type": "variable",
                                        "value": "wasAsync",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 17,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 17,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 18,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "originUrl",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 18,
                                        "char": 24
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 18,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 18,
                                    "char": 32
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "originMethod",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 18,
                                        "char": 49
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 18,
                                        "char": 56
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 18,
                                    "char": 56
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 18,
                                "char": 56
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "equals",
                                        "left": {
                                            "type": "variable",
                                            "value": "responseString",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 19,
                                            "char": 32
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 19,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 19,
                                        "char": 37
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
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "concat",
                                                                    "left": {
                                                                        "type": "concat",
                                                                        "left": {
                                                                            "type": "string",
                                                                            "value": "Got no response from the server after request to ",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                            "line": 20,
                                                                            "char": 95
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "originMethod",
                                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                            "line": 20,
                                                                            "char": 110
                                                                        },
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                        "line": 20,
                                                                        "char": 110
                                                                    },
                                                                    "right": {
                                                                        "type": "string",
                                                                        "value": " ",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                        "line": 20,
                                                                        "char": 116
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                    "line": 20,
                                                                    "char": 116
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "originUrl",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                    "line": 20,
                                                                    "char": 128
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                "line": 20,
                                                                "char": 128
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": " - Note: this may be a timeout issue",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                "line": 20,
                                                                "char": 168
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                            "line": 20,
                                                            "char": 168
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                        "line": 20,
                                                        "char": 168
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 20,
                                                "char": 169
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 21,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 22,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 23,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "_body",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "HttpHelper",
                                        "dynamic": 0,
                                        "name": "parseHttpMessage",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "responseString",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 23,
                                                    "char": 64
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 23,
                                                "char": 64
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "originUrl",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 23,
                                                    "char": 75
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 23,
                                                "char": 75
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "originMethod",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 23,
                                                    "char": 89
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 23,
                                                "char": 89
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 23,
                                        "char": 90
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 23,
                                    "char": 90
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
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
                                    "property": "_header",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "_body",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 24,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "0",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 24,
                                            "char": 36
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 24,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 24,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 25,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_body",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "_body",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 25,
                                            "char": 32
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "1",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 25,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 25,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 25,
                                    "char": 35
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 26,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "_headers",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 0,
                                        "class": "HttpHelper",
                                        "dynamic": 0,
                                        "name": "parseHeaders",
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                        "line": 26,
                                                        "char": 54
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_header",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                        "line": 26,
                                                        "char": 62
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 26,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 26,
                                                "char": 62
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 26,
                                        "char": 63
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 26,
                                    "char": 63
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 27,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_httpCode",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "_headers",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 27,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "0",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 27,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 27,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 27,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 28,
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
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "_headers",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 28,
                                            "char": 37
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "1",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 28,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 28,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 28,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 29,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_headers",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "_headers",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 29,
                                            "char": 38
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "2",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 29,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 29,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 29,
                                    "char": 41
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 30,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 30,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_body",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 30,
                                            "char": 26
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 30,
                                        "char": 26
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 30,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 30,
                                    "char": 34
                                },
                                "right": {
                                    "type": "list",
                                    "left": {
                                        "type": "and",
                                        "left": {
                                            "type": "and",
                                            "left": {
                                                "type": "not-identical",
                                                "left": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                        "line": 30,
                                                        "char": 42
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_httpCode",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                        "line": 30,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 30,
                                                    "char": 55
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "204",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 30,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 30,
                                                "char": 62
                                            },
                                            "right": {
                                                "type": "not-identical",
                                                "left": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                        "line": 30,
                                                        "char": 69
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_httpCode",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                        "line": 30,
                                                        "char": 82
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 30,
                                                    "char": 82
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "304",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 30,
                                                    "char": 89
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 30,
                                                "char": 89
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 30,
                                            "char": 89
                                        },
                                        "right": {
                                            "type": "not",
                                            "left": {
                                                "type": "variable",
                                                "value": "wasAsync",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 30,
                                                "char": 100
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 30,
                                            "char": 100
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 30,
                                        "char": 100
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 30,
                                    "char": 102
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 30,
                                "char": 102
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "and",
                                        "left": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "originUrl",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 31,
                                                "char": 28
                                            },
                                            "right": {
                                                "type": "null",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 31,
                                                "char": 36
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 31,
                                            "char": 36
                                        },
                                        "right": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "variable",
                                                "value": "originMethod",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 31,
                                                "char": 53
                                            },
                                            "right": {
                                                "type": "null",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 31,
                                                "char": 60
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 31,
                                            "char": 60
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 31,
                                        "char": 60
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
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "concat",
                                                                    "left": {
                                                                        "type": "string",
                                                                        "value": "Got an invalid response from the server after request to ",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                        "line": 32,
                                                                        "char": 103
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "originMethod",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                        "line": 32,
                                                                        "char": 118
                                                                    },
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                    "line": 32,
                                                                    "char": 118
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": " ",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                    "line": 32,
                                                                    "char": 124
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                "line": 32,
                                                                "char": 124
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "originUrl",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                                "line": 32,
                                                                "char": 135
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                            "line": 32,
                                                            "char": 135
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                        "line": 32,
                                                        "char": 135
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 32,
                                                "char": 136
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 33,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 34,
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
                                                    "type": "string",
                                                    "value": "Got an invalid response from the server",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 34,
                                                    "char": 80
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 34,
                                                "char": 80
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 34,
                                        "char": 81
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 35,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 36,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 13,
                    "last-line": 38,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHttpCode",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 40,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_httpCode",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 40,
                                    "char": 31
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 40,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 41,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 39,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 39,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 38,
                    "last-line": 43,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHeader",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "name",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 43,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "name",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "strtolower",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "name",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 46,
                                                    "char": 36
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 46,
                                                "char": 36
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 46,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 46,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 47,
                            "char": 10
                        },
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 47,
                                            "char": 23
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_headers",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 47,
                                            "char": 32
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 47,
                                        "char": 32
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "name",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 47,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 47,
                                    "char": 39
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 47,
                                "char": 39
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 48,
                                                "char": 25
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_headers",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 48,
                                                "char": 34
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 48,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "name",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 48,
                                            "char": 39
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 48,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 49,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 50,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 51,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 44,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 44,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 43,
                    "last-line": 53,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getHeaders",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 55,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 55,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 55,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 54,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 54,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 53,
                    "last-line": 58,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getLocationHeader",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 60,
                                    "char": 21
                                },
                                "name": "getHeader",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 60,
                                                "char": 53
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "HEADER_LOCATION",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 60,
                                                "char": 53
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 60,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 60,
                                        "char": 53
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 60,
                                "char": 54
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 61,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 59,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 59,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 58,
                    "last-line": 63,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getBody",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 65,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_body",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 65,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 65,
                                "char": 27
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 64,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 64,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 63,
                    "last-line": 68,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getResult",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 70,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 70,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 70,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 69,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 69,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 68,
                    "last-line": 73,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getJson",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "body",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 75,
                                    "char": 17
                                },
                                {
                                    "variable": "json",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 75,
                                    "char": 23
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 77,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "body",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 77,
                                            "char": 26
                                        },
                                        "name": "getBody",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 77,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 77,
                                    "char": 36
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 78,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "json",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "json_decode",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "body",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 78,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 78,
                                                "char": 37
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 78,
                                                    "char": 43
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 78,
                                                "char": 43
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 78,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 78,
                                    "char": 44
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 79,
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
                                                "value": "json",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 79,
                                                "char": 26
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 79,
                                            "char": 26
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 79,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 79,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 80,
                                            "char": 21
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_wasAsync",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 80,
                                            "char": 32
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 80,
                                        "char": 32
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "empty-array",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 81,
                                                "char": 26
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                            "line": 82,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 83,
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
                                                    "type": "string",
                                                    "value": "Got a malformed result from the server",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                    "line": 83,
                                                    "char": 79
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                                "line": 83,
                                                "char": 79
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 83,
                                        "char": 80
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 84,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 85,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "json",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 85,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 86,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 74,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 74,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 73,
                    "last-line": 88,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setBatchPart",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "batchPart",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 88,
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
                                    "property": "batchPart",
                                    "expr": {
                                        "type": "variable",
                                        "value": "batchPart",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                        "line": 90,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 90,
                                    "char": 40
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 91,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 91,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 92,
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
                                    "value": "HttpResponse",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 89,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 89,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 89,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 88,
                    "last-line": 94,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getBatchPart",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 96,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "batchPart",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                    "line": 96,
                                    "char": 31
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                                "line": 96,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                            "line": 97,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 94,
                    "last-line": 99,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "HEADER_LOCATION",
                    "default": {
                        "type": "string",
                        "value": "location",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                        "line": 12,
                        "char": 39
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
                    "line": 13,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/httpresponse.zep",
        "line": 3,
        "char": 5
    }
]