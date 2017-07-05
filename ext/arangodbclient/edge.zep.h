
extern zend_class_entry *arangodbclient_edge_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Edge);

PHP_METHOD(ArangoDBClient_Edge, set);
PHP_METHOD(ArangoDBClient_Edge, setFrom);
PHP_METHOD(ArangoDBClient_Edge, getFrom);
PHP_METHOD(ArangoDBClient_Edge, setTo);
PHP_METHOD(ArangoDBClient_Edge, getTo);
PHP_METHOD(ArangoDBClient_Edge, getAllForInsertUpdate);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edge_set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edge_setfrom, 0, 0, 1)
	ZEND_ARG_INFO(0, from)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edge_setto, 0, 0, 1)
	ZEND_ARG_INFO(0, to)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_edge_method_entry) {
	PHP_ME(ArangoDBClient_Edge, set, arginfo_arangodbclient_edge_set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Edge, setFrom, arginfo_arangodbclient_edge_setfrom, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Edge, getFrom, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Edge, setTo, arginfo_arangodbclient_edge_setto, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Edge, getTo, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Edge, getAllForInsertUpdate, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
