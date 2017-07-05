
extern zend_class_entry *arangodbclient_traversal_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Traversal);

PHP_METHOD(ArangoDBClient_Traversal, __construct);
PHP_METHOD(ArangoDBClient_Traversal, getResult);
PHP_METHOD(ArangoDBClient_Traversal, getConnection);
PHP_METHOD(ArangoDBClient_Traversal, setStartVertex);
PHP_METHOD(ArangoDBClient_Traversal, getStartVertex);
PHP_METHOD(ArangoDBClient_Traversal, setEdgeCollection);
PHP_METHOD(ArangoDBClient_Traversal, getEdgeCollection);
PHP_METHOD(ArangoDBClient_Traversal, set);
PHP_METHOD(ArangoDBClient_Traversal, __set);
PHP_METHOD(ArangoDBClient_Traversal, get);
PHP_METHOD(ArangoDBClient_Traversal, __get);
PHP_METHOD(ArangoDBClient_Traversal, __isset);
PHP_METHOD(ArangoDBClient_Traversal, __toString);
zend_object *zephir_init_properties_ArangoDBClient_Traversal(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traversal___construct, 0, 0, 3)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_INFO(0, startVertex)
	ZEND_ARG_INFO(0, edgeCollection)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traversal_setstartvertex, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traversal_setedgecollection, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traversal_set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traversal___set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traversal_get, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traversal___get, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traversal___isset, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_traversal_method_entry) {
	PHP_ME(ArangoDBClient_Traversal, __construct, arginfo_arangodbclient_traversal___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Traversal, getResult, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, getConnection, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Traversal, setStartVertex, arginfo_arangodbclient_traversal_setstartvertex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, getStartVertex, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, setEdgeCollection, arginfo_arangodbclient_traversal_setedgecollection, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, getEdgeCollection, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, set, arginfo_arangodbclient_traversal_set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, __set, arginfo_arangodbclient_traversal___set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, get, arginfo_arangodbclient_traversal_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, __get, arginfo_arangodbclient_traversal___get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, __isset, arginfo_arangodbclient_traversal___isset, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Traversal, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
