
extern zend_class_entry *arangodbclient_clientexception_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_ClientException);

PHP_METHOD(ArangoDBClient_ClientException, __toString);

ZEPHIR_INIT_FUNCS(arangodbclient_clientexception_method_entry) {
	PHP_ME(ArangoDBClient_ClientException, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
