
extern zend_class_entry *arangodbclient_connectexception_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_ConnectException);

PHP_METHOD(ArangoDBClient_ConnectException, __toString);

ZEPHIR_INIT_FUNCS(arangodbclient_connectexception_method_entry) {
	PHP_ME(ArangoDBClient_ConnectException, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
