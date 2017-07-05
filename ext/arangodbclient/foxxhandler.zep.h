
extern zend_class_entry *arangodbclient_foxxhandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_FoxxHandler);

PHP_METHOD(ArangoDBClient_FoxxHandler, installFoxxZip);
PHP_METHOD(ArangoDBClient_FoxxHandler, removeFoxxApp);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_foxxhandler_installfoxxzip, 0, 0, 2)
	ZEND_ARG_INFO(0, localZip)
	ZEND_ARG_INFO(0, mountPoint)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_foxxhandler_removefoxxapp, 0, 0, 1)
	ZEND_ARG_INFO(0, mountPoint)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_foxxhandler_method_entry) {
	PHP_ME(ArangoDBClient_FoxxHandler, installFoxxZip, arginfo_arangodbclient_foxxhandler_installfoxxzip, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_FoxxHandler, removeFoxxApp, arginfo_arangodbclient_foxxhandler_removefoxxapp, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
