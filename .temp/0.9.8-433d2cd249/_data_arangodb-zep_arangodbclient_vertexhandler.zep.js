[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "VertexHandler",
        "abstract": 0,
        "final": 0,
        "extends": "DocumentHandler",
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "createFromArrayWithContext",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "data",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                            "line": 5,
                            "char": 52
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                            "line": 5,
                            "char": 61
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "scall",
                                "dynamic-class": 0,
                                "class": "Vertex",
                                "dynamic": 0,
                                "name": "createFromArray",
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                                            "line": 7,
                                            "char": 44
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                                        "line": 7,
                                        "char": 44
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                                            "line": 7,
                                            "char": 53
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                                        "line": 7,
                                        "char": 53
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                                "line": 7,
                                "char": 54
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                            "line": 8,
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
                                    "value": "Document",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                                    "line": 6,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                                "line": 6,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                        "line": 6,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
                    "line": 5,
                    "last-line": 10,
                    "char": 19
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/vertexhandler.zep",
        "line": 3,
        "char": 5
    }
]