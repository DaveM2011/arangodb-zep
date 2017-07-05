
extern zend_class_entry *arangodbclient_exception_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Exception);

PHP_METHOD(ArangoDBClient_Exception, __construct);
PHP_METHOD(ArangoDBClient_Exception, enableLogging);
PHP_METHOD(ArangoDBClient_Exception, disableLogging);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_exception___construct, 0, 0, 0)
	ZEND_ARG_INFO(0, message)
	ZEND_ARG_INFO(0, code)
	ZEND_ARG_OBJ_INFO(0, previous, ArangoDBClient\\Exception, 1)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_exception_method_entry) {
	PHP_ME(ArangoDBClient_Exception, __construct, arginfo_arangodbclient_exception___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Exception, enableLogging, NULL, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Exception, disableLogging, NULL, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
