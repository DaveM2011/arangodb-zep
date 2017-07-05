
extern zend_class_entry *arangodbclient_querycachehandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_QueryCacheHandler);

PHP_METHOD(ArangoDBClient_QueryCacheHandler, enable);
PHP_METHOD(ArangoDBClient_QueryCacheHandler, disable);
PHP_METHOD(ArangoDBClient_QueryCacheHandler, enableDemandMode);
PHP_METHOD(ArangoDBClient_QueryCacheHandler, clear);
PHP_METHOD(ArangoDBClient_QueryCacheHandler, setProperties);
PHP_METHOD(ArangoDBClient_QueryCacheHandler, getProperties);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_querycachehandler_setproperties, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, properties, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_querycachehandler_method_entry) {
	PHP_ME(ArangoDBClient_QueryCacheHandler, enable, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_QueryCacheHandler, disable, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_QueryCacheHandler, enableDemandMode, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_QueryCacheHandler, clear, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_QueryCacheHandler, setProperties, arginfo_arangodbclient_querycachehandler_setproperties, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_QueryCacheHandler, getProperties, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
