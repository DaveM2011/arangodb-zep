
extern zend_class_entry *arangodbclient_graph_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Graph);

PHP_METHOD(ArangoDBClient_Graph, __construct);
PHP_METHOD(ArangoDBClient_Graph, addEdgeDefinition);
PHP_METHOD(ArangoDBClient_Graph, getEdgeDefinitions);
PHP_METHOD(ArangoDBClient_Graph, addOrphanCollection);
PHP_METHOD(ArangoDBClient_Graph, getOrphanCollections);
PHP_METHOD(ArangoDBClient_Graph, set);
PHP_METHOD(ArangoDBClient_Graph, getSingleUndirectedRelation);
zend_object *zephir_init_properties_ArangoDBClient_Graph(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graph___construct, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, name, 1)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graph_addedgedefinition, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, edgeDefinition, ArangoDBClient\\EdgeDefinition, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graph_addorphancollection, 0, 0, 1)
	ZEND_ARG_INFO(0, orphanCollection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_graph_set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_graph_method_entry) {
	PHP_ME(ArangoDBClient_Graph, __construct, arginfo_arangodbclient_graph___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Graph, addEdgeDefinition, arginfo_arangodbclient_graph_addedgedefinition, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Graph, getEdgeDefinitions, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Graph, addOrphanCollection, arginfo_arangodbclient_graph_addorphancollection, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Graph, getOrphanCollections, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Graph, set, arginfo_arangodbclient_graph_set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Graph, getSingleUndirectedRelation, NULL, ZEND_ACC_PROTECTED)
	PHP_FE_END
};
