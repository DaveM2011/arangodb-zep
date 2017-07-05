[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "TraceRequest",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_headers",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                        "line": 5,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_method",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_requestUrl",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 8,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_body",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 9,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_type",
                    "default": {
                        "type": "string",
                        "value": "request",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                        "line": 9,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 10,
                    "char": 10
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
                            "name": "headers",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 10,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "method",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 10,
                            "char": 61
                        },
                        {
                            "type": "parameter",
                            "name": "requestUrl",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 10,
                            "char": 80
                        },
                        {
                            "type": "parameter",
                            "name": "body",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 10,
                            "char": 93
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
                                    "property": "_headers",
                                    "expr": {
                                        "type": "variable",
                                        "value": "headers",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                        "line": 12,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 12,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 13,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_method",
                                    "expr": {
                                        "type": "variable",
                                        "value": "method",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                        "line": 13,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 13,
                                    "char": 35
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 14,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_requestUrl",
                                    "expr": {
                                        "type": "variable",
                                        "value": "requestUrl",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                        "line": 14,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 14,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 15,
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
                                        "type": "variable",
                                        "value": "body",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                        "line": 15,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 15,
                                    "char": 31
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 16,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 10,
                    "last-line": 18,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 20,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_headers",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 20,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 20,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 21,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 19,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                        "line": 19,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 18,
                    "last-line": 23,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getMethod",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 25,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_method",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 25,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 25,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 26,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 24,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                        "line": 24,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 23,
                    "last-line": 28,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getRequestUrl",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 30,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_requestUrl",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 30,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 30,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 31,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 29,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                        "line": 29,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 28,
                    "last-line": 33,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 35,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_body",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 35,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 35,
                                "char": 27
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 36,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 34,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                        "line": 34,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 33,
                    "last-line": 38,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getType",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 40,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_type",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                    "line": 40,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 40,
                                "char": 27
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                            "line": 41,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                                "line": 39,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                        "line": 39,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
                    "line": 38,
                    "last-line": 43,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/tracerequest.zep",
        "line": 3,
        "char": 5
    }
]