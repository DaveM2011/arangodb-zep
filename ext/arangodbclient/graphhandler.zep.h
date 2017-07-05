
extern zend_class_entry *arangodbclient_graphhandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_GraphHandler);

PHP_METHOD(ArangoDBClient_GraphHandler, createGraph);
PHP_METHOD(ArangoDBClient_GraphHandler, getGraph);
PHP_METHOD(ArangoDBClient_GraphHandler, setBatchsize);
PHP_METHOD(ArangoDBClient_GraphHandler, setCount);
PHP_METHOD(ArangoDBClient_GraphHandler, setLimit);
PHP_METHOD(ArangoDBClient_GraphHandler, properties);
PHP_METHOD(ArangoDBClient_GraphHandler, dropGraph);
PHP_METHOD(ArangoDBClient_GraphHandler, addOrphanCollection);
PHP_METHOD(ArangoDBClient_GraphHandler, deleteOrphanCollection);
PHP_METHOD(ArangoDBClient_GraphHandler, getVertexCollections);
PHP_METHOD(ArangoDBClient_GraphHandler, addEdgeDefinition);
PHP_METHOD(ArangoDBClient_GraphHandler, deleteEdgeDefinition);
PHP_METHOD(ArangoDBClient_GraphHandler, getEdgeCollections);
PHP_METHOD(ArangoDBClient_GraphHandler, replaceEdgeDefinition);
PHP_METHOD(ArangoDBClient_GraphHandler, saveVertex);
PHP_METHOD(ArangoDBClient_GraphHandler, getVertex);
PHP_METHOD(ArangoDBClient_GraphHandler, hasVertex);
PHP_METHOD(ArangoDBClient_GraphHandler, replaceVertex);
PHP_METHOD(ArangoDBClient_GraphHandler, updateVertex);
PHP_METHOD(ArangoDBClient_GraphHandler, removeVertex);
PHP_METHOD(ArangoDBClient_GraphHandler, saveEdge);
PHP_METHOD(ArangoDBClient_GraphHandler, getEdge);
PHP_METHOD(ArangoDBClient_GraphHandler, hasEdge);
PHP_METHOD(ArangoDBClient_GraphHandler, replaceEdge);
PHP_METHOD(ArangoDBClient_GraphHandler, updateEdge);
PHP_METHOD(ArangoDBClient_GraphHandler, removeEdge);
PHP_METHOD(ArangoDBClient_GraphHandler, clearCache);
PHP_METHOD(ArangoDBClient_GraphHandler, getCacheEnabled);
PHP_METHOD(ArangoDBClient_GraphHandler, setCacheEnabled);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_creategraph, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, graph, ArangoDBClient\\Graph, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_getgraph, 0, 0, 1)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_setbatchsize, 0, 0, 1)
	ZEND_ARG_INFO(0, batchsize)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_setcount, 0, 0, 1)
	ZEND_ARG_INFO(0, count)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_setlimit, 0, 0, 1)
	ZEND_ARG_INFO(0, limit)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_properties, 0, 0, 1)
	ZEND_ARG_INFO(0, graph)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_dropgraph, 0, 0, 1)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, dropCollections)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_addorphancollection, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, orphanCollection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_deleteorphancollection, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, orphanCollection)
	ZEND_ARG_INFO(0, dropCollection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_getvertexcollections, 0, 0, 1)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_addedgedefinition, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_OBJ_INFO(0, edgeDefinition, ArangoDBClient\\EdgeDefinition, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_deleteedgedefinition, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, edgeDefinition)
	ZEND_ARG_INFO(0, dropCollection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_getedgecollections, 0, 0, 1)
	ZEND_ARG_INFO(0, graph)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_replaceedgedefinition, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_OBJ_INFO(0, edgeDefinition, ArangoDBClient\\EdgeDefinition, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_savevertex, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, document)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_getvertex, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, vertexId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_hasvertex, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, vertexId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_replacevertex, 0, 0, 3)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, vertexId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_updatevertex, 0, 0, 3)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, vertexId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_removevertex, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, vertexId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_saveedge, 0, 0, 4)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, from)
	ZEND_ARG_INFO(0, to)
	ZEND_ARG_INFO(0, label)
	ZEND_ARG_INFO(0, document)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_getedge, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, edgeId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_hasedge, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, edgeId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_replaceedge, 0, 0, 4)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, edgeId)
	ZEND_ARG_INFO(0, label)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Edge, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_updateedge, 0, 0, 4)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, edgeId)
	ZEND_ARG_INFO(0, label)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Edge, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_removeedge, 0, 0, 2)
	ZEND_ARG_INFO(0, graph)
	ZEND_ARG_INFO(0, edgeId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graphhandler_setcacheenabled, 0, 0, 1)
	ZEND_ARG_INFO(0, useCache)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_graphhandler_method_entry) {
	PHP_ME(ArangoDBClient_GraphHandler, createGraph, arginfo_arangodbclient_graphhandler_creategraph, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, getGraph, arginfo_arangodbclient_graphhandler_getgraph, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, setBatchsize, arginfo_arangodbclient_graphhandler_setbatchsize, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, setCount, arginfo_arangodbclient_graphhandler_setcount, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, setLimit, arginfo_arangodbclient_graphhandler_setlimit, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, properties, arginfo_arangodbclient_graphhandler_properties, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, dropGraph, arginfo_arangodbclient_graphhandler_dropgraph, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, addOrphanCollection, arginfo_arangodbclient_graphhandler_addorphancollection, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, deleteOrphanCollection, arginfo_arangodbclient_graphhandler_deleteorphancollection, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, getVertexCollections, arginfo_arangodbclient_graphhandler_getvertexcollections, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, addEdgeDefinition, arginfo_arangodbclient_graphhandler_addedgedefinition, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, deleteEdgeDefinition, arginfo_arangodbclient_graphhandler_deleteedgedefinition, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, getEdgeCollections, arginfo_arangodbclient_graphhandler_getedgecollections, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, replaceEdgeDefinition, arginfo_arangodbclient_graphhandler_replaceedgedefinition, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, saveVertex, arginfo_arangodbclient_graphhandler_savevertex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, getVertex, arginfo_arangodbclient_graphhandler_getvertex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, hasVertex, arginfo_arangodbclient_graphhandler_hasvertex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, replaceVertex, arginfo_arangodbclient_graphhandler_replacevertex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, updateVertex, arginfo_arangodbclient_graphhandler_updatevertex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, removeVertex, arginfo_arangodbclient_graphhandler_removevertex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, saveEdge, arginfo_arangodbclient_graphhandler_saveedge, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, getEdge, arginfo_arangodbclient_graphhandler_getedge, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, hasEdge, arginfo_arangodbclient_graphhandler_hasedge, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, replaceEdge, arginfo_arangodbclient_graphhandler_replaceedge, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, updateEdge, arginfo_arangodbclient_graphhandler_updateedge, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, removeEdge, arginfo_arangodbclient_graphhandler_removeedge, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, clearCache, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, getCacheEnabled, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_GraphHandler, setCacheEnabled, arginfo_arangodbclient_graphhandler_setcacheenabled, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
