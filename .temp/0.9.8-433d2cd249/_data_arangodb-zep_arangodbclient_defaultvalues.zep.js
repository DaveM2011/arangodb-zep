[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
        "line": 3,
        "char": 8
    },
    {
        "type": "class",
        "name": "DefaultValues",
        "abstract": 1,
        "final": 0,
        "definition": {
            "constants": [
                {
                    "type": "const",
                    "name": "DEFAULT_PORT",
                    "default": {
                        "type": "int",
                        "value": "8529",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 5,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 6,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_TIMEOUT",
                    "default": {
                        "type": "int",
                        "value": "30",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 6,
                        "char": 31
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_AUTH_TYPE",
                    "default": {
                        "type": "string",
                        "value": "Basic",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 7,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_WAIT_SYNC",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 8,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_JOURNAL_SIZE",
                    "default": {
                        "type": "int",
                        "value": "33554432",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 9,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 10,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_IS_VOLATILE",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 10,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 11,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_CREATE",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 11,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 12,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_CONNECTION",
                    "default": {
                        "type": "string",
                        "value": "Keep-Alive",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 12,
                        "char": 44
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 13,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_VERIFY_CERT",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 13,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 14,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_ALLOW_SELF_SIGNED",
                    "default": {
                        "type": "bool",
                        "value": "true",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 14,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 15,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_CIPHERS",
                    "default": {
                        "type": "null",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 15,
                        "char": 33
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 16,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_UPDATE_POLICY",
                    "default": {
                        "type": "static-constant-access",
                        "left": {
                            "type": "variable",
                            "value": "UpdatePolicy",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                            "line": 16,
                            "char": 54
                        },
                        "right": {
                            "type": "variable",
                            "value": "ERROR",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                            "line": 16,
                            "char": 54
                        },
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 16,
                        "char": 54
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 17,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_REPLACE_POLICY",
                    "default": {
                        "type": "static-constant-access",
                        "left": {
                            "type": "variable",
                            "value": "UpdatePolicy",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                            "line": 17,
                            "char": 55
                        },
                        "right": {
                            "type": "variable",
                            "value": "ERROR",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                            "line": 17,
                            "char": 55
                        },
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 17,
                        "char": 55
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 18,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_DELETE_POLICY",
                    "default": {
                        "type": "static-constant-access",
                        "left": {
                            "type": "variable",
                            "value": "UpdatePolicy",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                            "line": 18,
                            "char": 54
                        },
                        "right": {
                            "type": "variable",
                            "value": "ERROR",
                            "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                            "line": 18,
                            "char": 54
                        },
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 18,
                        "char": 54
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 19,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "DEFAULT_CHECK_UTF8_CONFORM",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                        "line": 19,
                        "char": 45
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
                    "line": 20,
                    "char": 1
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
            "line": 3,
            "char": 14
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/defaultvalues.zep",
        "line": 3,
        "char": 14
    }
]