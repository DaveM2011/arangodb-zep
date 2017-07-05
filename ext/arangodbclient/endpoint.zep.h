
extern zend_class_entry *arangodbclient_endpoint_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Endpoint);

PHP_METHOD(ArangoDBClient_Endpoint, __construct);
PHP_METHOD(ArangoDBClient_Endpoint, __toString);
PHP_METHOD(ArangoDBClient_Endpoint, getType);
PHP_METHOD(ArangoDBClient_Endpoint, getHost);
PHP_METHOD(ArangoDBClient_Endpoint, isValid);
PHP_METHOD(ArangoDBClient_Endpoint, listEndpoints);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_endpoint___construct, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_endpoint_gettype, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_endpoint_gethost, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_endpoint_isvalid, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_endpoint_listendpoints, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_endpoint_method_entry) {
	PHP_ME(ArangoDBClient_Endpoint, __construct, arginfo_arangodbclient_endpoint___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Endpoint, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Endpoint, getType, arginfo_arangodbclient_endpoint_gettype, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Endpoint, getHost, arginfo_arangodbclient_endpoint_gethost, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Endpoint, isValid, arginfo_arangodbclient_endpoint_isvalid, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Endpoint, listEndpoints, arginfo_arangodbclient_endpoint_listendpoints, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
