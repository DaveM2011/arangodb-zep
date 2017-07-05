[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
        "line": 3,
        "char": 8
    },
    {
        "type": "class",
        "name": "Urls",
        "abstract": 1,
        "final": 0,
        "definition": {
            "constants": [
                {
                    "type": "const",
                    "name": "URL_DOCUMENT",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/document",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 5,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 6,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_EDGE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/document",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 6,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_EDGES",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/edges",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 7,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_GRAPH",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/gharial",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 8,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URLPART_VERTEX",
                    "default": {
                        "type": "string",
                        "value": "vertex",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 9,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 10,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URLPART_EDGE",
                    "default": {
                        "type": "string",
                        "value": "edge",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 10,
                        "char": 32
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 11,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_COLLECTION",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/collection",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 11,
                        "char": 46
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 12,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_INDEX",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/index",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 12,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 13,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_CURSOR",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/cursor",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 13,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 14,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_EXPORT",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/export",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 14,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 15,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_EXPLAIN",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/explain",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 15,
                        "char": 40
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 16,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_QUERY",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/query",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 16,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 17,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_EXAMPLE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/by-example",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 17,
                        "char": 50
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 18,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_FIRST_EXAMPLE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/first-example",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 18,
                        "char": 59
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 19,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ANY",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/any",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 19,
                        "char": 39
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 20,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_FULLTEXT",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/fulltext",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 20,
                        "char": 49
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 21,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_REMOVE_BY_EXAMPLE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/remove-by-example",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 21,
                        "char": 67
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 22,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_REMOVE_BY_KEYS",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/remove-by-keys",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 22,
                        "char": 61
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 23,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_UPDATE_BY_EXAMPLE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/update-by-example",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 23,
                        "char": 67
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 24,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_REPLACE_BY_EXAMPLE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/replace-by-example",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 24,
                        "char": 69
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 25,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_LOOKUP_BY_KEYS",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/lookup-by-keys",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 25,
                        "char": 61
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 26,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_RANGE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/range",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 26,
                        "char": 43
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 27,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ALL",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/all",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 27,
                        "char": 39
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 28,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ALL_KEYS",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/all-keys",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 28,
                        "char": 49
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 29,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_NEAR",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/near",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 29,
                        "char": 41
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 30,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_WITHIN",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/simple\/within",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 30,
                        "char": 45
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 31,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_IMPORT",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/import",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 31,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 32,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_BATCH",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/batch",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 32,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 33,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_TRANSACTION",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/transaction",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 33,
                        "char": 48
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 34,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ADMIN_VERSION",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/version",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 34,
                        "char": 48
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 35,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ADMIN_SERVER_ROLE",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/server\/role",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 35,
                        "char": 56
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 36,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ADMIN_TIME",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/time",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 36,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 37,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ADMIN_LOG",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/log",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 37,
                        "char": 40
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 38,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ADMIN_ROUTING_RELOAD",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/routing\/reload",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 38,
                        "char": 62
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 39,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ADMIN_STATISTICS",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/statistics",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 39,
                        "char": 54
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 40,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ADMIN_STATISTICS_DESCRIPTION",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/statistics-description",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 40,
                        "char": 78
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 41,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_AQL_USER_FUNCTION",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/aqlfunction",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 41,
                        "char": 54
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 42,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_USER",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/user",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 42,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 43,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_TRAVERSAL",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/traversal",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 43,
                        "char": 44
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 44,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_ENDPOINT",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/endpoint",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 44,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 45,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_DATABASE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/database",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 45,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 46,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_QUERY_CACHE",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/query-cache",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 46,
                        "char": 48
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 47,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_UPLOAD",
                    "default": {
                        "type": "string",
                        "value": "\/_api\/upload",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 47,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 48,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_FOXX_INSTALL",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/foxx\/install",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 48,
                        "char": 52
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 49,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "URL_FOXX_UNINSTALL",
                    "default": {
                        "type": "string",
                        "value": "\/_admin\/foxx\/uninstall",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                        "line": 49,
                        "char": 56
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
                    "line": 50,
                    "char": 1
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
            "line": 3,
            "char": 14
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/urls.zep",
        "line": 3,
        "char": 14
    }
]