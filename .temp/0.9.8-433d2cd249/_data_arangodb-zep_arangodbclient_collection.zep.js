[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Collection",
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
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_name",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_type",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 8,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_waitForSync",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 9,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_journalSize",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 10,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_isSystem",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 11,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_isVolatile",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 12,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_numberOfShards",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 13,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_shardKeys",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 14,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_status",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 15,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_keyOptions",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 16,
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
                            "name": "name",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 35,
                                "char": 51
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 35,
                            "char": 51
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-identical",
                                "left": {
                                    "type": "variable",
                                    "value": "name",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 37,
                                    "char": 19
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 37,
                                    "char": 26
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 37,
                                "char": 26
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 38,
                                            "char": 18
                                        },
                                        "name": "setName",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "name",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 38,
                                                    "char": 31
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 38,
                                                "char": 31
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 38,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 39,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 40,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 36,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 35,
                    "last-line": 42,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 42,
                            "char": 56
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "collection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 44,
                                    "char": 23
                                },
                                {
                                    "variable": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 44,
                                    "char": 28
                                },
                                {
                                    "variable": "value",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 44,
                                    "char": 35
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 46,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "collection",
                                    "expr": {
                                        "type": "new",
                                        "class": "self",
                                        "dynamic": 0,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 46,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 46,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 47,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "values",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 47,
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
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 48,
                                            "char": 24
                                        },
                                        "name": "set",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 48,
                                                    "char": 32
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 48,
                                                "char": 32
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 48,
                                                    "char": 39
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 48,
                                                "char": 39
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 48,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 49,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 50,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "collection",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 50,
                                "char": 26
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 51,
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
                                    "value": "Collection",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 43,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 43,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 43,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 42,
                    "last-line": 53,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "getDefaultType",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "static-constant-access",
                                "left": {
                                    "type": "variable",
                                    "value": "self",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 55,
                                    "char": 35
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "TYPE_DOCUMENT",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 55,
                                    "char": 35
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 55,
                                "char": 35
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 56,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 53,
                    "last-line": 58,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 60,
                                        "char": 30
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 60,
                                    "char": 30
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 61,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_name",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 61,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 61,
                                    "char": 32
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 62,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_waitForSync",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 62,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 62,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 63,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_journalSize",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 63,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 63,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 64,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_isSystem",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 64,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 64,
                                    "char": 36
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 65,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_isVolatile",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 65,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 65,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 66,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_numberOfShards",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 66,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 66,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 67,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_shardKeys",
                                    "expr": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 67,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 67,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 68,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 58,
                    "last-line": 70,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 72,
                                    "char": 21
                                },
                                "name": "toJson",
                                "call-type": 1,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 72,
                                "char": 30
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 71,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 71,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 70,
                    "last-line": 75,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "toJson",
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 77,
                                                "char": 33
                                            },
                                            "name": "getAll",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 77,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 77,
                                        "char": 42
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 77,
                                "char": 43
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 78,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 76,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 76,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 75,
                    "last-line": 80,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "toSerialized",
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
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 82,
                                                "char": 31
                                            },
                                            "name": "getAll",
                                            "call-type": 1,
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 82,
                                            "char": 40
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 82,
                                        "char": 40
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 82,
                                "char": 41
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 81,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 81,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 80,
                    "last-line": 85,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getAll",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "result",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 87,
                                    "char": 19
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 89,
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
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 39
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_ID",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 39
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 39
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 46
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_id",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 50
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 50
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 50
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 69
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_NAME",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 69
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 69
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 76
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_name",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 82
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 82
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 82
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 106
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_WAIT_SYNC",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 106
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 106
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 113
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_waitForSync",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 126
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 126
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 126
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 153
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_JOURNAL_SIZE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 153
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 153
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 160
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_journalSize",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 173
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 173
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 173
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 197
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_IS_SYSTEM",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 197
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 197
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 204
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_isSystem",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 214
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 214
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 214
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 240
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_IS_VOLATILE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 240
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 240
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 247
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_isVolatile",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 259
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 259
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 259
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 278
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_TYPE",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 278
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 278
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 285
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_type",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 291
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 291
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 291
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 312
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_STATUS",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 312
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 312
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 319
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_status",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 327
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 327
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 327
                                            },
                                            {
                                                "key": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 353
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_KEY_OPTIONS",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 353
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 353
                                                },
                                                "value": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 360
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "_keyOptions",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 89,
                                                        "char": 372
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 89,
                                                    "char": 372
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 89,
                                                "char": 372
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 89,
                                        "char": 373
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 89,
                                    "char": 373
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 90,
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
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 90,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "_numberOfShards",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 90,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 90,
                                    "char": 36
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 90,
                                    "char": 43
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 90,
                                "char": 43
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "result",
                                            "index-expr": [
                                                {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 91,
                                                        "char": 52
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_NUMBER_OF_SHARDS",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 91,
                                                        "char": 52
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 91,
                                                    "char": 52
                                                }
                                            ],
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 91,
                                                    "char": 61
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_numberOfShards",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 91,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 91,
                                                "char": 77
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 91,
                                            "char": 77
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 92,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 93,
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
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 93,
                                                "char": 26
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "_shardKeys",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 93,
                                                "char": 37
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 93,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 93,
                                        "char": 37
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 93,
                                "char": 39
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "array-index",
                                            "operator": "assign",
                                            "variable": "result",
                                            "index-expr": [
                                                {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 94,
                                                        "char": 46
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_SHARD_KEYS",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 94,
                                                        "char": 46
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 94,
                                                    "char": 46
                                                }
                                            ],
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 94,
                                                    "char": 55
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_shardKeys",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 94,
                                                    "char": 66
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 94,
                                                "char": 66
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 94,
                                            "char": 66
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 95,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 96,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "result",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 96,
                                "char": 22
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 97,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 86,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 86,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 85,
                    "last-line": 99,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 99,
                            "char": 35
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 99,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_string",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 101,
                                                    "char": 27
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 101,
                                                "char": 27
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 101,
                                        "char": 28
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 101,
                                    "char": 30
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 101,
                                "char": 30
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
                                                    "value": "Invalid collection attribute type",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 102,
                                                    "char": 74
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 102,
                                                "char": 74
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 102,
                                        "char": 75
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 103,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 104,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 104,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 104,
                                        "char": 35
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_ID",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 104,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 104,
                                    "char": 35
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 104,
                                "char": 35
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 105,
                                            "char": 18
                                        },
                                        "name": "setId",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 105,
                                                    "char": 30
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 105,
                                                "char": 30
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 105,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 106,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 107,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 108,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 108,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 108,
                                        "char": 37
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_NAME",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 108,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 108,
                                    "char": 37
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 108,
                                "char": 37
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 109,
                                            "char": 18
                                        },
                                        "name": "setName",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 109,
                                                    "char": 32
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 109,
                                                "char": 32
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 109,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 110,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 111,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 112,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 112,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 112,
                                        "char": 42
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_WAIT_SYNC",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 112,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 112,
                                    "char": 42
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 112,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 113,
                                            "char": 18
                                        },
                                        "name": "setWaitForSync",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 113,
                                                    "char": 39
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 113,
                                                "char": 39
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 113,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 114,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 115,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 116,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 116,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 116,
                                        "char": 45
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_JOURNAL_SIZE",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 116,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 116,
                                    "char": 45
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 116,
                                "char": 45
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 117,
                                            "char": 18
                                        },
                                        "name": "setJournalSize",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 117,
                                                    "char": 39
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 117,
                                                "char": 39
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 117,
                                        "char": 40
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 118,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 119,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 120,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 120,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 120,
                                        "char": 42
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_IS_SYSTEM",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 120,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 120,
                                    "char": 42
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 120,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 121,
                                            "char": 18
                                        },
                                        "name": "setIsSystem",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 121,
                                                    "char": 36
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 121,
                                                "char": 36
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 121,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 122,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 123,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 124,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 124,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 124,
                                        "char": 44
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_IS_VOLATILE",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 124,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 124,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 124,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 125,
                                            "char": 18
                                        },
                                        "name": "setIsVolatile",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 125,
                                                    "char": 38
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 125,
                                                "char": 38
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 125,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 126,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 127,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 128,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 128,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 128,
                                        "char": 37
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_TYPE",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 128,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 128,
                                    "char": 37
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 128,
                                "char": 37
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 129,
                                            "char": 18
                                        },
                                        "name": "setType",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 129,
                                                    "char": 32
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 129,
                                                "char": 32
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 129,
                                        "char": 33
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 130,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 131,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 132,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 132,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 132,
                                        "char": 39
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_STATUS",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 132,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 132,
                                    "char": 39
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 132,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 133,
                                            "char": 18
                                        },
                                        "name": "setStatus",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 133,
                                                    "char": 34
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 133,
                                                "char": 34
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 133,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 134,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 135,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 136,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 136,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 136,
                                        "char": 44
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_KEY_OPTIONS",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 136,
                                        "char": 44
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 136,
                                    "char": 44
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 137,
                                            "char": 18
                                        },
                                        "name": "setKeyOptions",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 137,
                                                    "char": 38
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 137,
                                                "char": 38
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 137,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 138,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 139,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 140,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 140,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 140,
                                        "char": 49
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_NUMBER_OF_SHARDS",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 140,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 140,
                                    "char": 49
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 140,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 141,
                                            "char": 18
                                        },
                                        "name": "setNumberOfShards",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 141,
                                                    "char": 42
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 141,
                                                "char": 42
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 141,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 142,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 143,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 144,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 144,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 144,
                                        "char": 43
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_SHARD_KEYS",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 144,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 144,
                                    "char": 43
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 144,
                                "char": 43
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 145,
                                            "char": 18
                                        },
                                        "name": "setShardKeys",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "value",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 145,
                                                    "char": 37
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 145,
                                                "char": 37
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 145,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 146,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 147,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 148,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 99,
                    "last-line": 150,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setId",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "id",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 150,
                            "char": 29
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 152,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_id",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 152,
                                            "char": 24
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 152,
                                        "char": 24
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 152,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 152,
                                    "char": 32
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 152,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_id",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 152,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 152,
                                        "char": 46
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "id",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 152,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 152,
                                    "char": 51
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 152,
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
                                                    "value": "Should not update the id of an existing collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 153,
                                                    "char": 91
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 153,
                                                "char": 91
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 153,
                                        "char": 92
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 154,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 155,
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
                                        "type": "cast",
                                        "left": "string",
                                        "right": {
                                            "type": "variable",
                                            "value": "id",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 155,
                                            "char": 37
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 155,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 155,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 156,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 156,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 156,
                                    "char": 25
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 156,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 157,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 151,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 151,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 150,
                    "last-line": 159,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 161,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_id",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 161,
                                    "char": 25
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 161,
                                "char": 25
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 162,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 159,
                    "last-line": 164,
                    "char": 19
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
                            "name": "name",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 164,
                            "char": 40
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 167,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_name",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 167,
                                            "char": 26
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 167,
                                        "char": 26
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 167,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 167,
                                    "char": 34
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 167,
                                            "char": 41
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_name",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 167,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 167,
                                        "char": 50
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "name",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 167,
                                        "char": 57
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 167,
                                    "char": 57
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 167,
                                "char": 57
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
                                                    "value": "Should not update the name of an existing collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 168,
                                                    "char": 93
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 168,
                                                "char": 93
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 168,
                                        "char": 94
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 169,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 170,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_name",
                                    "expr": {
                                        "type": "cast",
                                        "left": "string",
                                        "right": {
                                            "type": "variable",
                                            "value": "name",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 170,
                                            "char": 41
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 170,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 170,
                                    "char": 41
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 171,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 164,
                    "last-line": 173,
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
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 175,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_name",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 175,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 175,
                                "char": 27
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 176,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 174,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 174,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 173,
                    "last-line": 178,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setType",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "type",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 178,
                            "char": 37
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 181,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_type",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 181,
                                            "char": 26
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 181,
                                        "char": 26
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 181,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 181,
                                    "char": 34
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 181,
                                            "char": 41
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_type",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 181,
                                            "char": 50
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 181,
                                        "char": 50
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "type",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 181,
                                        "char": 57
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 181,
                                    "char": 57
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 181,
                                "char": 57
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
                                                    "value": "Should not update the type of an existing collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 182,
                                                    "char": 93
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 182,
                                                "char": 93
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 182,
                                        "char": 94
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 183,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 184,
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
                                        "value": "type",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 184,
                                        "char": 19
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 184,
                                            "char": 42
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "TYPE_DOCUMENT",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 184,
                                            "char": 42
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 184,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 184,
                                    "char": 42
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "type",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 184,
                                        "char": 51
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 184,
                                            "char": 69
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "TYPE_EDGE",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 184,
                                            "char": 69
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 184,
                                        "char": 69
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 184,
                                    "char": 69
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 184,
                                "char": 69
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
                                                    "value": "Invalid type used for collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 185,
                                                    "char": 73
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 185,
                                                "char": 73
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 185,
                                        "char": 74
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 186,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 187,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_type",
                                    "expr": {
                                        "type": "variable",
                                        "value": "type",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 187,
                                        "char": 31
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 187,
                                    "char": 31
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 188,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 178,
                    "last-line": 190,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 192,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_type",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 192,
                                    "char": 27
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 192,
                                "char": 27
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 193,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 191,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 191,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 190,
                    "last-line": 195,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setStatus",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "status",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 195,
                            "char": 41
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 197,
                                    "char": 53
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 200,
                            "char": 10
                        },
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 200,
                                            "char": 17
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_status",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 200,
                                            "char": 28
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 200,
                                        "char": 28
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 200,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 200,
                                    "char": 36
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 200,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_status",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                            "line": 200,
                                            "char": 54
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 200,
                                        "char": 54
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "status",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 200,
                                        "char": 63
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 200,
                                    "char": 63
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 200,
                                "char": 63
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
                                                    "value": "Should not update the status of an existing collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 201,
                                                    "char": 95
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 201,
                                                "char": 95
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 201,
                                        "char": 96
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 202,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 203,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "value": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 78
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "STATUS_NEW_BORN",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 78
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 203,
                                                    "char": 78
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 203,
                                                "char": 78
                                            },
                                            {
                                                "value": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 101
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "STATUS_UNLOADED",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 101
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 203,
                                                    "char": 101
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 203,
                                                "char": 101
                                            },
                                            {
                                                "value": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 122
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "STATUS_LOADED",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 122
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 203,
                                                    "char": 122
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 203,
                                                "char": 122
                                            },
                                            {
                                                "value": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 151
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "STATUS_BEING_UNLOADED",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 151
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 203,
                                                    "char": 151
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 203,
                                                "char": 151
                                            },
                                            {
                                                "value": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 173
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "STATUS_DELETED",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                        "line": 203,
                                                        "char": 173
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 203,
                                                    "char": 173
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 203,
                                                "char": 173
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 203,
                                        "char": 174
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 203,
                                    "char": 174
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 204,
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
                                        "name": "in_array",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "status",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 204,
                                                    "char": 29
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 204,
                                                "char": 29
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 204,
                                                    "char": 71
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 204,
                                                "char": 71
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 204,
                                                    "char": 77
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 204,
                                                "char": 77
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 204,
                                        "char": 78
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 204,
                                    "char": 80
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 204,
                                "char": 80
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
                                                    "value": "Invalid status used for collection",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                    "line": 205,
                                                    "char": 75
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                                "line": 205,
                                                "char": 75
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 205,
                                        "char": 76
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 206,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 207,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_status",
                                    "expr": {
                                        "type": "variable",
                                        "value": "status",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 207,
                                        "char": 35
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 207,
                                    "char": 35
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 208,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 195,
                    "last-line": 210,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getStatus",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 212,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_status",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 212,
                                    "char": 29
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 212,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 213,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 211,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 211,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 210,
                    "last-line": 215,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setKeyOptions",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "keyOptions",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 215,
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
                                    "property": "_keyOptions",
                                    "expr": {
                                        "type": "variable",
                                        "value": "keyOptions",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 218,
                                        "char": 43
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 218,
                                    "char": 43
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 219,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 215,
                    "last-line": 221,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getKeyOptions",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 223,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_keyOptions",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 223,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 223,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 224,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 222,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 222,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 221,
                    "last-line": 226,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setWaitForSync",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 226,
                            "char": 46
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
                                    "property": "_waitForSync",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 229,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 229,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 230,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 226,
                    "last-line": 232,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getWaitForSync",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 234,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_waitForSync",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 234,
                                    "char": 34
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 234,
                                "char": 34
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 235,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 233,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 233,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 232,
                    "last-line": 237,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setJournalSize",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 237,
                            "char": 45
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
                                    "property": "_journalSize",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 240,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 240,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 241,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 237,
                    "last-line": 243,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getJournalSize",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 245,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_journalSize",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 245,
                                    "char": 34
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 245,
                                "char": 34
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 246,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 244,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 244,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 243,
                    "last-line": 248,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setIsSystem",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 248,
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
                                    "property": "_isSystem",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 251,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 251,
                                    "char": 36
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 252,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 248,
                    "last-line": 254,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getIsSystem",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 256,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_isSystem",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 256,
                                    "char": 31
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 256,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 257,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 255,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 255,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 254,
                    "last-line": 259,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setIsVolatile",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 259,
                            "char": 45
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
                                    "property": "_isVolatile",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 262,
                                        "char": 38
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 262,
                                    "char": 38
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 263,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 259,
                    "last-line": 265,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getIsVolatile",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 267,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_isVolatile",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 267,
                                    "char": 33
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 267,
                                "char": 33
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 268,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 266,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 266,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 265,
                    "last-line": 270,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setNumberOfShards",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 270,
                            "char": 48
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
                                    "property": "_numberOfShards",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 273,
                                        "char": 42
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 273,
                                    "char": 42
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 274,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 270,
                    "last-line": 276,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getNumberOfShards",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 278,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_numberOfShards",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 278,
                                    "char": 37
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 278,
                                "char": 37
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 279,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 277,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 277,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 276,
                    "last-line": 281,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setShardKeys",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 281,
                            "char": 45
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
                                    "property": "_shardKeys",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                        "line": 284,
                                        "char": 37
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 284,
                                    "char": 37
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 285,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 281,
                    "last-line": 287,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getShardKeys",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 289,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_shardKeys",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                    "line": 289,
                                    "char": 32
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 289,
                                "char": 32
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                            "line": 290,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                                "line": 288,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 288,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 287,
                    "last-line": 292,
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
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 16,
                        "char": 26
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 17,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_NAME",
                    "default": {
                        "type": "string",
                        "value": "name",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 17,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 18,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_TYPE",
                    "default": {
                        "type": "string",
                        "value": "type",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 18,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 19,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_WAIT_SYNC",
                    "default": {
                        "type": "string",
                        "value": "waitForSync",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 19,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 20,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_JOURNAL_SIZE",
                    "default": {
                        "type": "string",
                        "value": "journalSize",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 20,
                        "char": 45
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 21,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_STATUS",
                    "default": {
                        "type": "string",
                        "value": "status",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 21,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 22,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_KEY_OPTIONS",
                    "default": {
                        "type": "string",
                        "value": "keyOptions",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 22,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 23,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_IS_SYSTEM",
                    "default": {
                        "type": "string",
                        "value": "isSystem",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 23,
                        "char": 39
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 24,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_IS_VOLATILE",
                    "default": {
                        "type": "string",
                        "value": "isVolatile",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 24,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 25,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_NUMBER_OF_SHARDS",
                    "default": {
                        "type": "string",
                        "value": "numberOfShards",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 25,
                        "char": 52
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 26,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_SHARD_KEYS",
                    "default": {
                        "type": "string",
                        "value": "shardKeys",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 26,
                        "char": 41
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 27,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "OPTION_PROPERTIES",
                    "default": {
                        "type": "string",
                        "value": "properties",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 27,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 28,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "TYPE_DOCUMENT",
                    "default": {
                        "type": "int",
                        "value": "2",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 28,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 29,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "TYPE_EDGE",
                    "default": {
                        "type": "int",
                        "value": "3",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 29,
                        "char": 24
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 30,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "STATUS_NEW_BORN",
                    "default": {
                        "type": "int",
                        "value": "1",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 30,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 31,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "STATUS_UNLOADED",
                    "default": {
                        "type": "int",
                        "value": "2",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 31,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 32,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "STATUS_LOADED",
                    "default": {
                        "type": "int",
                        "value": "3",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 32,
                        "char": 28
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 33,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "STATUS_BEING_UNLOADED",
                    "default": {
                        "type": "int",
                        "value": "4",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 33,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 34,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "STATUS_DELETED",
                    "default": {
                        "type": "int",
                        "value": "5",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                        "line": 34,
                        "char": 29
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
                    "line": 35,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/collection.zep",
        "line": 3,
        "char": 5
    }
]