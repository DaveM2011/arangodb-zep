[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "UpdatePolicy",
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
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                            "line": 7,
                            "char": 49
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
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                        "line": 10,
                                        "char": 20
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                            "line": 10,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "LAST",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                            "line": 10,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                        "line": 10,
                                        "char": 34
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                    "line": 10,
                                    "char": 34
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                        "line": 10,
                                        "char": 44
                                    },
                                    "right": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "self",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                            "line": 10,
                                            "char": 58
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ERROR",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                            "line": 10,
                                            "char": 58
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                        "line": 10,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                    "line": 10,
                                    "char": 58
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                "line": 10,
                                "char": 58
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
                                                    "value": "Invalid update policy",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                                    "line": 11,
                                                    "char": 62
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                                "line": 11,
                                                "char": 62
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                        "line": 11,
                                        "char": 63
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                                    "line": 12,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                            "line": 13,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                    "line": 7,
                    "last-line": 15,
                    "char": 26
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "LAST",
                    "default": {
                        "type": "string",
                        "value": "last",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                        "line": 5,
                        "char": 24
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                    "line": 6,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ERROR",
                    "default": {
                        "type": "string",
                        "value": "error",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                        "line": 6,
                        "char": 26
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
                    "line": 7,
                    "char": 10
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/updatepolicy.zep",
        "line": 3,
        "char": 5
    }
]