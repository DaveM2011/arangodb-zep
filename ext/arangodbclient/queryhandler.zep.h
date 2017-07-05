
extern zend_class_entry *arangodbclient_queryhandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_QueryHandler);

PHP_METHOD(ArangoDBClient_QueryHandler, clearSlow);
PHP_METHOD(ArangoDBClient_QueryHandler, getSlow);
PHP_METHOD(ArangoDBClient_QueryHandler, getCurrent);
PHP_METHOD(ArangoDBClient_QueryHandler, kill);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_queryhandler_kill, 0, 0, 1)
	ZEND_ARG_INFO(0, id)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_queryhandler_method_entry) {
	PHP_ME(ArangoDBClient_QueryHandler, clearSlow, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_QueryHandler, getSlow, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_QueryHandler, getCurrent, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_QueryHandler, kill, arginfo_arangodbclient_queryhandler_kill, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
