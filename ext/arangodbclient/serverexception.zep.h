
extern zend_class_entry *arangodbclient_serverexception_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_ServerException);

PHP_METHOD(ArangoDBClient_ServerException, __toString);
PHP_METHOD(ArangoDBClient_ServerException, setDetails);
PHP_METHOD(ArangoDBClient_ServerException, getDetails);
PHP_METHOD(ArangoDBClient_ServerException, getServerCode);
PHP_METHOD(ArangoDBClient_ServerException, getServerMessage);
zend_object *zephir_init_properties_ArangoDBClient_ServerException(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_serverexception_setdetails, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, details, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_serverexception_method_entry) {
	PHP_ME(ArangoDBClient_ServerException, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ServerException, setDetails, arginfo_arangodbclient_serverexception_setdetails, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ServerException, getDetails, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ServerException, getServerCode, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ServerException, getServerMessage, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
