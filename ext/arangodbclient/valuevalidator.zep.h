
extern zend_class_entry *arangodbclient_valuevalidator_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_ValueValidator);

PHP_METHOD(ArangoDBClient_ValueValidator, validate);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_valuevalidator_validate, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_valuevalidator_method_entry) {
	PHP_ME(ArangoDBClient_ValueValidator, validate, arginfo_arangodbclient_valuevalidator_validate, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
