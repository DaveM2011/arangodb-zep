[
    {
        "type": "namespace",
        "name": "ArangoDBClient",
        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "EdgeDefinition",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_relation",
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 6,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_fromCollections",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 6,
                        "char": 36
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 7,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "_toCollections",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 7,
                        "char": 34
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 8,
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
                            "name": "relation",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 8,
                                "char": 55
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 8,
                            "char": 55
                        },
                        {
                            "type": "parameter",
                            "name": "fromCollections",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 8,
                                "char": 77
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 8,
                            "char": 77
                        },
                        {
                            "type": "parameter",
                            "name": "toCollections",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "empty-array",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 8,
                                "char": 97
                            },
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 8,
                            "char": 97
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
                                    "property": "_relation",
                                    "expr": {
                                        "type": "variable",
                                        "value": "relation",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 10,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 10,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 11,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "fromCollections",
                                    "expr": {
                                        "type": "cast",
                                        "left": "array",
                                        "right": {
                                            "type": "variable",
                                            "value": "fromCollections",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 11,
                                            "char": 55
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 11,
                                        "char": 55
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 11,
                                    "char": 55
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 12,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "toCollections",
                                    "expr": {
                                        "type": "cast",
                                        "left": "array",
                                        "right": {
                                            "type": "variable",
                                            "value": "toCollections",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 12,
                                            "char": 51
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 12,
                                        "char": 51
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 12,
                                    "char": 51
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
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
                                    "property": "_fromCollections",
                                    "expr": {
                                        "type": "variable",
                                        "value": "fromCollections",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 13,
                                        "char": 53
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 13,
                                    "char": 53
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
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
                                    "property": "_toCollections",
                                    "expr": {
                                        "type": "variable",
                                        "value": "toCollections",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 14,
                                        "char": 49
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 14,
                                    "char": 49
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 15,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 8,
                    "last-line": 17,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setRelation",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "relation",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 17,
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
                                    "property": "_relation",
                                    "expr": {
                                        "type": "variable",
                                        "value": "relation",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 19,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 19,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 20,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 18,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 17,
                    "last-line": 22,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getRelation",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 24,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_relation",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 24,
                                    "char": 31
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 24,
                                "char": 31
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 25,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 23,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 23,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 22,
                    "last-line": 27,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getToCollections",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 29,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_toCollections",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 29,
                                    "char": 36
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 29,
                                "char": 36
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 30,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 28,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 28,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 27,
                    "last-line": 32,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getFromCollections",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 34,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_fromCollections",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 34,
                                    "char": 38
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 34,
                                "char": 38
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 35,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 33,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 33,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 32,
                    "last-line": 37,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addToCollection",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "toCollection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 37,
                            "char": 56
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
                                    "property": "_toCollections",
                                    "expr": {
                                        "type": "variable",
                                        "value": "toCollection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 39,
                                        "char": 50
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 39,
                                    "char": 50
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 40,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 38,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 37,
                    "last-line": 42,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addFromCollection",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "fromCollection",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 42,
                            "char": 60
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
                                    "property": "_fromCollections",
                                    "expr": {
                                        "type": "variable",
                                        "value": "fromCollection",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 44,
                                        "char": 54
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 44,
                                    "char": 54
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 45,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 43,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 42,
                    "last-line": 47,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "clearToCollection",
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_toCollections",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 49,
                                        "char": 39
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 49,
                                    "char": 39
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 50,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 48,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 47,
                    "last-line": 52,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "clearFromCollection",
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "_fromCollections",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 54,
                                        "char": 41
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 54,
                                    "char": 41
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 55,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 55,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "_fromCollections",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 55,
                                    "char": 38
                                },
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 55,
                                "char": 38
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 56,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 52,
                    "last-line": 58,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "transformToArray",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "transformedEd",
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 60,
                                    "char": 26
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 62,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "transformedEd",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 62,
                                        "char": 32
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 62,
                                    "char": 32
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 63,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "array-index",
                                    "operator": "assign",
                                    "variable": "transformedEd",
                                    "index-expr": [
                                        {
                                            "type": "string",
                                            "value": "collection",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 63,
                                            "char": 39
                                        }
                                    ],
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 63,
                                            "char": 49
                                        },
                                        "name": "getRelation",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 63,
                                        "char": 63
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 63,
                                    "char": 63
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 64,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "array-index",
                                    "operator": "assign",
                                    "variable": "transformedEd",
                                    "index-expr": [
                                        {
                                            "type": "string",
                                            "value": "from",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 64,
                                            "char": 33
                                        }
                                    ],
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 64,
                                            "char": 43
                                        },
                                        "name": "getFromCollections",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 64,
                                        "char": 64
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 64,
                                    "char": 64
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 65,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "array-index",
                                    "operator": "assign",
                                    "variable": "transformedEd",
                                    "index-expr": [
                                        {
                                            "type": "string",
                                            "value": "to",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 65,
                                            "char": 31
                                        }
                                    ],
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 65,
                                            "char": 41
                                        },
                                        "name": "getToCollections",
                                        "call-type": 1,
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 65,
                                        "char": 60
                                    },
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 65,
                                    "char": 60
                                }
                            ],
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 66,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "transformedEd",
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 66,
                                "char": 29
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 67,
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
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 59,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 59,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 58,
                    "last-line": 69,
                    "char": 19
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "createUndirectedRelation",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "relation",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 69,
                            "char": 68
                        },
                        {
                            "type": "parameter",
                            "name": "vertexCollections",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 69,
                            "char": 93
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "new",
                                "class": "EdgeDefinition",
                                "dynamic": 0,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "relation",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 71,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 71,
                                        "char": 43
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "vertexCollections",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 71,
                                            "char": 62
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 71,
                                        "char": 62
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "vertexCollections",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 71,
                                            "char": 81
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 71,
                                        "char": 81
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 71,
                                "char": 82
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 72,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 70,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 70,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 70,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 69,
                    "last-line": 74,
                    "char": 26
                },
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "createDirectedRelation",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "relation",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 74,
                            "char": 66
                        },
                        {
                            "type": "parameter",
                            "name": "fromCollections",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 74,
                            "char": 83
                        },
                        {
                            "type": "parameter",
                            "name": "toCollections",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 74,
                            "char": 98
                        }
                    ],
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "new",
                                "class": "EdgeDefinition",
                                "dynamic": 0,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "relation",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 76,
                                            "char": 43
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 76,
                                        "char": 43
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "fromCollections",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 76,
                                            "char": 60
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 76,
                                        "char": 60
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "toCollections",
                                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                            "line": 76,
                                            "char": 75
                                        },
                                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                        "line": 76,
                                        "char": 75
                                    }
                                ],
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 76,
                                "char": 76
                            },
                            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                            "line": 77,
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
                                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                    "line": 75,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                                "line": 75,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                        "line": 75,
                        "char": 5
                    },
                    "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
                    "line": 74,
                    "last-line": 79,
                    "char": 26
                }
            ],
            "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/arangodb-zep\/arangodbclient\/edgedefinition.zep",
        "line": 3,
        "char": 5
    }
]