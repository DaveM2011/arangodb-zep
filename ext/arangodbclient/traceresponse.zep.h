
extern zend_class_entry *arangodbclient_traceresponse_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_TraceResponse);

PHP_METHOD(ArangoDBClient_TraceResponse, __construct);
PHP_METHOD(ArangoDBClient_TraceResponse, getHeaders);
PHP_METHOD(ArangoDBClient_TraceResponse, getHttpCode);
PHP_METHOD(ArangoDBClient_TraceResponse, getHttpCodeDefinition);
PHP_METHOD(ArangoDBClient_TraceResponse, getBody);
PHP_METHOD(ArangoDBClient_TraceResponse, getType);
PHP_METHOD(ArangoDBClient_TraceResponse, getTimeTaken);
zend_object *zephir_init_properties_ArangoDBClient_TraceResponse(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_traceresponse___construct, 0, 0, 4)
	ZEND_ARG_ARRAY_INFO(0, headers, 0)
	ZEND_ARG_INFO(0, httpCode)
	ZEND_ARG_INFO(0, body)
	ZEND_ARG_INFO(0, timeTaken)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_traceresponse_method_entry) {
	PHP_ME(ArangoDBClient_TraceResponse, __construct, arginfo_arangodbclient_traceresponse___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_TraceResponse, getHeaders, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceResponse, getHttpCode, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceResponse, getHttpCodeDefinition, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceResponse, getBody, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceResponse, getType, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceResponse, getTimeTaken, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
