
extern zend_class_entry *arangodbclient_updatepolicy_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_UpdatePolicy);

PHP_METHOD(ArangoDBClient_UpdatePolicy, validate);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_updatepolicy_validate, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_updatepolicy_method_entry) {
	PHP_ME(ArangoDBClient_UpdatePolicy, validate, arginfo_arangodbclient_updatepolicy_validate, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
