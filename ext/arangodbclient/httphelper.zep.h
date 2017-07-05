
extern zend_class_entry *arangodbclient_httphelper_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_HttpHelper);

PHP_METHOD(ArangoDBClient_HttpHelper, createConnection);
PHP_METHOD(ArangoDBClient_HttpHelper, buildRequest);
PHP_METHOD(ArangoDBClient_HttpHelper, validateMethod);
PHP_METHOD(ArangoDBClient_HttpHelper, transfer);
PHP_METHOD(ArangoDBClient_HttpHelper, parseHttpMessage);
PHP_METHOD(ArangoDBClient_HttpHelper, parseHeaders);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httphelper_createconnection, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, options, ArangoDBClient\\ConnectionOptions, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httphelper_buildrequest, 0, 0, 5)
	ZEND_ARG_OBJ_INFO(0, options, ArangoDBClient\\ConnectionOptions, 0)
	ZEND_ARG_INFO(0, connectionHeader)
	ZEND_ARG_INFO(0, method)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, body)
	ZEND_ARG_ARRAY_INFO(0, customHeaders, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httphelper_validatemethod, 0, 0, 1)
	ZEND_ARG_INFO(0, method)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httphelper_transfer, 0, 0, 3)
	ZEND_ARG_INFO(0, socket)
	ZEND_ARG_INFO(0, request)
	ZEND_ARG_INFO(0, method)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httphelper_parsehttpmessage, 0, 0, 1)
	ZEND_ARG_INFO(0, httpMessage)
	ZEND_ARG_INFO(0, originUrl)
	ZEND_ARG_INFO(0, originMethod)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_httphelper_parseheaders, 0, 0, 1)
	ZEND_ARG_INFO(0, headers)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_httphelper_method_entry) {
	PHP_ME(ArangoDBClient_HttpHelper, createConnection, arginfo_arangodbclient_httphelper_createconnection, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_HttpHelper, buildRequest, arginfo_arangodbclient_httphelper_buildrequest, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_HttpHelper, validateMethod, arginfo_arangodbclient_httphelper_validatemethod, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_HttpHelper, transfer, arginfo_arangodbclient_httphelper_transfer, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_HttpHelper, parseHttpMessage, arginfo_arangodbclient_httphelper_parsehttpmessage, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_HttpHelper, parseHeaders, arginfo_arangodbclient_httphelper_parseheaders, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
