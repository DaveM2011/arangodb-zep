
extern zend_class_entry *arangodbclient_tracerequest_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_TraceRequest);

PHP_METHOD(ArangoDBClient_TraceRequest, __construct);
PHP_METHOD(ArangoDBClient_TraceRequest, getHeaders);
PHP_METHOD(ArangoDBClient_TraceRequest, getMethod);
PHP_METHOD(ArangoDBClient_TraceRequest, getRequestUrl);
PHP_METHOD(ArangoDBClient_TraceRequest, getBody);
PHP_METHOD(ArangoDBClient_TraceRequest, getType);
zend_object *zephir_init_properties_ArangoDBClient_TraceRequest(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_tracerequest___construct, 0, 0, 4)
	ZEND_ARG_ARRAY_INFO(0, headers, 0)
	ZEND_ARG_INFO(0, method)
	ZEND_ARG_INFO(0, requestUrl)
	ZEND_ARG_INFO(0, body)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_tracerequest_method_entry) {
	PHP_ME(ArangoDBClient_TraceRequest, __construct, arginfo_arangodbclient_tracerequest___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_TraceRequest, getHeaders, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceRequest, getMethod, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceRequest, getRequestUrl, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceRequest, getBody, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_TraceRequest, getType, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
