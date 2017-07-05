
extern zend_class_entry *arangodbclient_urlhelper_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_UrlHelper);

PHP_METHOD(ArangoDBClient_UrlHelper, getDocumentIdFromLocation);
PHP_METHOD(ArangoDBClient_UrlHelper, buildUrl);
PHP_METHOD(ArangoDBClient_UrlHelper, appendParamsUrl);
PHP_METHOD(ArangoDBClient_UrlHelper, getBoolString);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_urlhelper_getdocumentidfromlocation, 0, 0, 1)
	ZEND_ARG_INFO(0, location)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_urlhelper_buildurl, 0, 0, 1)
	ZEND_ARG_INFO(0, baseUrl)
	ZEND_ARG_ARRAY_INFO(0, parts, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_urlhelper_appendparamsurl, 0, 0, 2)
	ZEND_ARG_INFO(0, baseUrl)
	ZEND_ARG_ARRAY_INFO(0, params, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_urlhelper_getboolstring, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_urlhelper_method_entry) {
	PHP_ME(ArangoDBClient_UrlHelper, getDocumentIdFromLocation, arginfo_arangodbclient_urlhelper_getdocumentidfromlocation, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_UrlHelper, buildUrl, arginfo_arangodbclient_urlhelper_buildurl, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_UrlHelper, appendParamsUrl, arginfo_arangodbclient_urlhelper_appendparamsurl, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_UrlHelper, getBoolString, arginfo_arangodbclient_urlhelper_getboolstring, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
