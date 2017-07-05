
extern zend_class_entry *arangodbclient_httpresponse_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_HttpResponse);

PHP_METHOD(ArangoDBClient_HttpResponse, __construct);
PHP_METHOD(ArangoDBClient_HttpResponse, getHttpCode);
PHP_METHOD(ArangoDBClient_HttpResponse, getHeader);
PHP_METHOD(ArangoDBClient_HttpResponse, getHeaders);
PHP_METHOD(ArangoDBClient_HttpResponse, getLocationHeader);
PHP_METHOD(ArangoDBClient_HttpResponse, getBody);
PHP_METHOD(ArangoDBClient_HttpResponse, getResult);
PHP_METHOD(ArangoDBClient_HttpResponse, getJson);
PHP_METHOD(ArangoDBClient_HttpResponse, setBatchPart);
PHP_METHOD(ArangoDBClient_HttpResponse, getBatchPart);
zend_object *zephir_init_properties_ArangoDBClient_HttpResponse(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httpresponse___construct, 0, 0, 1)
	ZEND_ARG_INFO(0, responseString)
	ZEND_ARG_INFO(0, originUrl)
	ZEND_ARG_INFO(0, originMethod)
	ZEND_ARG_INFO(0, wasAsync)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httpresponse_getheader, 0, 0, 1)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httpresponse_setbatchpart, 0, 0, 1)
	ZEND_ARG_INFO(0, batchPart)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_httpresponse_method_entry) {
	PHP_ME(ArangoDBClient_HttpResponse, __construct, arginfo_arangodbclient_httpresponse___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_HttpResponse, getHttpCode, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_HttpResponse, getHeader, arginfo_arangodbclient_httpresponse_getheader, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_HttpResponse, getHeaders, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_HttpResponse, getLocationHeader, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_HttpResponse, getBody, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_HttpResponse, getResult, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_HttpResponse, getJson, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_HttpResponse, setBatchPart, arginfo_arangodbclient_httpresponse_setbatchpart, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_HttpResponse, getBatchPart, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
