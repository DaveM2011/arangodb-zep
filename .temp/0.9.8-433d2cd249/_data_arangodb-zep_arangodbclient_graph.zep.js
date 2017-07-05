[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Graph",
        "abstract": 0,
        "final": 0,
        "extends": "Document",
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_edgeDefinitions",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 10,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 11,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_orphanCollections",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 11,
                        "char": 38
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 12,
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
                            "name": "name",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 12,
                                "char": 50
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 12,
                            "char": 50
                        },
                        {
                            "type": "parameter",
                            "name": "options",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 12,
                                "char": 70
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 12,
                            "char": 70
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
                                    "type": "not",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_array",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "name",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 14,
                                                    "char": 26
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 14,
                                                "char": 26
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 14,
                                        "char": 29
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 14,
                                    "char": 29
                                },
                                "right": {
                                    "type": "not-identical",
                                    "left": {
                                        "type": "variable",
                                        "value": "name",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 14,
                                        "char": 38
                                    },
                                    "right": {
                                        "type": "null",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 14,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 14,
                                    "char": 45
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 14,
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
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 15,
                                            "char": 18
                                        },
                                        "name": "set",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "_key",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 15,
                                                    "char": 29
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 15,
                                                "char": 29
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "name",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 15,
                                                    "char": 35
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 15,
                                                "char": 35
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 15,
                                        "char": 36
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 16,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 17,
                            "char": 14
                        },
                        {
                            "type": "scall",
                            "expr": {
                                "type": "scall",
                                "dynamic-class": 0,
                                "class": "parent",
                                "dynamic": 0,
                                "name": "__construct",
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "options",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 17,
                                            "char": 36
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 17,
                                        "char": 36
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 17,
                                "char": 37
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 18,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 12,
                    "last-line": 20,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addEdgeDefinition",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "edgeDefinition",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "EdgeDefinition",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 20,
                                "char": 69
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 20,
                            "char": 70
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-append",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_edgeDefinitions",
                                    "expr": {
                                        "type": "variable",
                                        "value": "edgeDefinition",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 22,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 22,
                                    "char": 54
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 23,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 23,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 24,
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
                                    "value": "Graph",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 21,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 21,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 21,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 20,
                    "last-line": 26,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getEdgeDefinitions",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 28,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_edgeDefinitions",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 28,
                                    "char": 38
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 28,
                                "char": 38
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 29,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 27,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 27,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 26,
                    "last-line": 31,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addOrphanCollection",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "orphanCollection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 31,
                            "char": 64
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-append",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_orphanCollections",
                                    "expr": {
                                        "type": "variable",
                                        "value": "orphanCollection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 33,
                                        "char": 58
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 33,
                                    "char": 58
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 34,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "this",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 34,
                                "char": 20
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 35,
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
                                    "value": "Graph",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 32,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 32,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 32,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 31,
                    "last-line": 37,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getOrphanCollections",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 39,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_orphanCollections",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 39,
                                    "char": 40
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 39,
                                "char": 40
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 40,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 38,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 38,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 37,
                    "last-line": 42,
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
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 42,
                            "char": 35
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 42,
                            "char": 42
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "edgeDefinitionBaseObject",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 44,
                                    "char": 37
                                },
                                {
                                    "variable": "ed",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 44,
                                    "char": 41
                                },
                                {
                                    "variable": "edgeDefinition",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 44,
                                    "char": 57
                                },
                                {
                                    "variable": "from",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 44,
                                    "char": 63
                                },
                                {
                                    "variable": "to",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 44,
                                    "char": 67
                                },
                                {
                                    "variable": "o",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 44,
                                    "char": 70
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 46,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "identical",
                                "left": {
                                    "type": "variable",
                                    "value": "key",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 46,
                                    "char": 18
                                },
                                "right": {
                                    "type": "static-constant-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "self",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 46,
                                        "char": 49
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "ENTRY_EDGE_DEFINITIONS",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 46,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 46,
                                    "char": 49
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 46,
                                "char": 49
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 47,
                                            "char": 21
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "_doValidate",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 47,
                                            "char": 34
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 47,
                                        "char": 34
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
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 48,
                                                            "char": 47
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 48,
                                                        "char": 47
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 48,
                                                "char": 48
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 49,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 50,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "edgeDefinitionBaseObject",
                                            "expr": {
                                                "type": "new",
                                                "class": "EdgeDefinition",
                                                "dynamic": 0,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 50,
                                                "char": 65
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 50,
                                            "char": 65
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 51,
                                    "char": 15
                                },
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 51,
                                        "char": 29
                                    },
                                    "value": "ed",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "edgeDefinition",
                                                    "expr": {
                                                        "type": "clone",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "edgeDefinitionBaseObject",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 52,
                                                            "char": 69
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 52,
                                                        "char": 69
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 52,
                                                    "char": 69
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 53,
                                            "char": 19
                                        },
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "ed",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 53,
                                                    "char": 31
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 53,
                                                        "char": 48
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_FROM",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 53,
                                                        "char": 48
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 53,
                                                    "char": 48
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 53,
                                                "char": 50
                                            },
                                            "value": "from",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "mcall",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "edgeDefinition",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 54,
                                                            "char": 36
                                                        },
                                                        "name": "addFromCollection",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "from",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                    "line": 54,
                                                                    "char": 59
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                "line": 54,
                                                                "char": 59
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 54,
                                                        "char": 60
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 55,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 56,
                                            "char": 19
                                        },
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "ed",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 56,
                                                    "char": 29
                                                },
                                                "right": {
                                                    "type": "static-constant-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "self",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 56,
                                                        "char": 44
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "ENTRY_TO",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 56,
                                                        "char": 44
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 56,
                                                    "char": 44
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 56,
                                                "char": 46
                                            },
                                            "value": "to",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "mcall",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "edgeDefinition",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 57,
                                                            "char": 36
                                                        },
                                                        "name": "addToCollection",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "to",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                    "line": 57,
                                                                    "char": 55
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                "line": 57,
                                                                "char": 55
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 57,
                                                        "char": 56
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 58,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 59,
                                            "char": 30
                                        },
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "edgeDefinition",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 59,
                                                    "char": 32
                                                },
                                                "name": "setRelation",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "ed",
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                "line": 59,
                                                                "char": 47
                                                            },
                                                            "right": {
                                                                "type": "static-constant-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "self",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                    "line": 59,
                                                                    "char": 70
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "ENTRY_COLLECTION",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                    "line": 59,
                                                                    "char": 70
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                "line": 59,
                                                                "char": 70
                                                            },
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 59,
                                                            "char": 71
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 59,
                                                        "char": 71
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 59,
                                                "char": 72
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 60,
                                            "char": 20
                                        },
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 60,
                                                    "char": 22
                                                },
                                                "name": "addEdgeDefinition",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "edgeDefinition",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 60,
                                                            "char": 55
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 60,
                                                        "char": 55
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 60,
                                                "char": 56
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 61,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 62,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "key",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 63,
                                            "char": 22
                                        },
                                        "right": {
                                            "type": "static-constant-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "self",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 63,
                                                "char": 55
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "ENTRY_ORPHAN_COLLECTIONS",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 63,
                                                "char": 55
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 63,
                                            "char": 55
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 63,
                                        "char": 55
                                    },
                                    "statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 64,
                                                    "char": 25
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "_doValidate",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 64,
                                                    "char": 38
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 64,
                                                "char": 38
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
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                    "line": 65,
                                                                    "char": 51
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                "line": 65,
                                                                "char": 51
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 65,
                                                        "char": 52
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 66,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 67,
                                            "char": 19
                                        },
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "variable",
                                                "value": "value",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 67,
                                                "char": 32
                                            },
                                            "value": "o",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "mcall",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 68,
                                                            "char": 26
                                                        },
                                                        "name": "addOrphanCollection",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "o",
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                    "line": 68,
                                                                    "char": 48
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                "line": 68,
                                                                "char": 48
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 68,
                                                        "char": 49
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 69,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 70,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "scall",
                                            "expr": {
                                                "type": "scall",
                                                "dynamic-class": 0,
                                                "class": "parent",
                                                "dynamic": 0,
                                                "name": "set",
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "key",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 71,
                                                            "char": 32
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 71,
                                                        "char": 32
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                            "line": 71,
                                                            "char": 39
                                                        },
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 71,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 71,
                                                "char": 40
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 72,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 73,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 74,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 42,
                    "last-line": 76,
                    "char": 19
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "getSingleUndirectedRelation",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "ed",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 78,
                                    "char": 15
                                },
                                {
                                    "variable": "a",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 78,
                                    "char": 18
                                },
                                {
                                    "variable": "b",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 78,
                                    "char": 21
                                },
                                {
                                    "variable": "c",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 78,
                                    "char": 24
                                },
                                {
                                    "variable": "eD",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 78,
                                    "char": 28
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 80,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "ed",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 80,
                                            "char": 24
                                        },
                                        "name": "getEdgeDefinitions",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 80,
                                        "char": 45
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 80,
                                    "char": 45
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 81,
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
                                                "value": "ed",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 81,
                                                "char": 20
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 81,
                                            "char": 20
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 81,
                                    "char": 22
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 81,
                                    "char": 26
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 81,
                                "char": 26
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "a",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "ed",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 82,
                                                    "char": 23
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 82,
                                                    "char": 25
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 82,
                                                "char": 26
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 82,
                                            "char": 26
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 83,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "b",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "a",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 83,
                                                    "char": 24
                                                },
                                                "name": "getFromCollections",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 83,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 83,
                                            "char": 45
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 84,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "c",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "a",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 84,
                                                    "char": 24
                                                },
                                                "name": "getToCollections",
                                                "call-type": 1,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 84,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 84,
                                            "char": 43
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 85,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 86,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "or",
                                "left": {
                                    "type": "greater",
                                    "left": {
                                        "type": "fcall",
                                        "name": "count",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "ed",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 86,
                                                    "char": 20
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 86,
                                                "char": 20
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 86,
                                        "char": 22
                                    },
                                    "right": {
                                        "type": "int",
                                        "value": "1",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 86,
                                        "char": 27
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 86,
                                    "char": 27
                                },
                                "right": {
                                    "type": "and",
                                    "left": {
                                        "type": "identical",
                                        "left": {
                                            "type": "fcall",
                                            "name": "count",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "ed",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 37
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 86,
                                                    "char": 37
                                                }
                                            ],
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 86,
                                            "char": 41
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "1",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 86,
                                            "char": 46
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 86,
                                        "char": 46
                                    },
                                    "right": {
                                        "type": "list",
                                        "left": {
                                            "type": "or",
                                            "left": {
                                                "type": "or",
                                                "left": {
                                                    "type": "greater",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "count",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "mcall",
                                                                    "variable": {
                                                                        "type": "variable",
                                                                        "value": "a",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                        "line": 86,
                                                                        "char": 57
                                                                    },
                                                                    "name": "getFromCollections",
                                                                    "call-type": 1,
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                    "line": 86,
                                                                    "char": 78
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                "line": 86,
                                                                "char": 78
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 80
                                                    },
                                                    "right": {
                                                        "type": "int",
                                                        "value": "1",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 85
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 86,
                                                    "char": 85
                                                },
                                                "right": {
                                                    "type": "greater",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "count",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "mcall",
                                                                    "variable": {
                                                                        "type": "variable",
                                                                        "value": "a",
                                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                        "line": 86,
                                                                        "char": 95
                                                                    },
                                                                    "name": "getToCollections",
                                                                    "call-type": 1,
                                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                    "line": 86,
                                                                    "char": 114
                                                                },
                                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                                "line": 86,
                                                                "char": 114
                                                            }
                                                        ],
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 116
                                                    },
                                                    "right": {
                                                        "type": "int",
                                                        "value": "1",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 121
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 86,
                                                    "char": 121
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 86,
                                                "char": 121
                                            },
                                            "right": {
                                                "type": "not-identical",
                                                "left": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "b",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 124
                                                    },
                                                    "right": {
                                                        "type": "int",
                                                        "value": "0",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 126
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 86,
                                                    "char": 130
                                                },
                                                "right": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "c",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 133
                                                    },
                                                    "right": {
                                                        "type": "int",
                                                        "value": "0",
                                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                        "line": 86,
                                                        "char": 135
                                                    },
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 86,
                                                    "char": 136
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 86,
                                                "char": 136
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 86,
                                            "char": 136
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 86,
                                        "char": 138
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 86,
                                    "char": 138
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 86,
                                "char": 138
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
                                                    "value": "This operation only supports graphs with one undirected single collection relation",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 87,
                                                    "char": 123
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 87,
                                                "char": 123
                                            }
                                        ],
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                        "line": 87,
                                        "char": 124
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 88,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 89,
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
                                                "value": "ed",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 89,
                                                "char": 20
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 89,
                                            "char": 20
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 89,
                                    "char": 24
                                },
                                "right": {
                                    "type": "int",
                                    "value": "1",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 89,
                                    "char": 28
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 89,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "eD",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "ed",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 90,
                                                    "char": 24
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                    "line": 90,
                                                    "char": 26
                                                },
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 90,
                                                "char": 27
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 90,
                                            "char": 27
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 91,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "_edgeDefinitions",
                                            "expr": {
                                                "type": "empty-array",
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 91,
                                                "char": 45
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 91,
                                            "char": 45
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 92,
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
                                            "variable": "eD",
                                            "expr": {
                                                "type": "new",
                                                "class": "EdgeDefinition",
                                                "dynamic": 0,
                                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                                "line": 93,
                                                "char": 43
                                            },
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                            "line": 93,
                                            "char": 43
                                        }
                                    ],
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 94,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 95,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "eD",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 95,
                                "char": 18
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                            "line": 96,
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
                                    "value": "EdgeDefinition",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                    "line": 77,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                                "line": 77,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 77,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 76,
                    "last-line": 98,
                    "char": 22
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "ENTRY_EDGE_DEFINITIONS",
                    "default": {
                        "type": "string",
                        "value": "edgeDefinitions",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 5,
                        "char": 53
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 6,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_FROM",
                    "default": {
                        "type": "string",
                        "value": "from",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 6,
                        "char": 30
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_TO",
                    "default": {
                        "type": "string",
                        "value": "to",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 7,
                        "char": 26
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_COLLECTION",
                    "default": {
                        "type": "string",
                        "value": "collection",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 8,
                        "char": 42
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ENTRY_ORPHAN_COLLECTIONS",
                    "default": {
                        "type": "string",
                        "value": "orphanCollections",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                        "line": 9,
                        "char": 57
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
                    "line": 10,
                    "char": 13
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/graph.zep",
        "line": 3,
        "char": 5
    }
]