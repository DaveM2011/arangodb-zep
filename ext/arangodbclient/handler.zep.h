
extern zend_class_entry *arangodbclient_handler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Handler);

PHP_METHOD(ArangoDBClient_Handler, __construct);
PHP_METHOD(ArangoDBClient_Handler, getConnection);
PHP_METHOD(ArangoDBClient_Handler, getConnectionOption);
PHP_METHOD(ArangoDBClient_Handler, json_encode_wrapper);
PHP_METHOD(ArangoDBClient_Handler, includeOptionsInParams);
PHP_METHOD(ArangoDBClient_Handler, includeOptionsInBody);
PHP_METHOD(ArangoDBClient_Handler, makeCollection);
PHP_METHOD(ArangoDBClient_Handler, setDocumentClass);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_handler___construct, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_handler_getconnectionoption, 0, 0, 1)
	ZEND_ARG_INFO(0, optionName)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_handler_json_encode_wrapper, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, body, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_handler_includeoptionsinparams, 0, 0, 1)
	ZEND_ARG_INFO(0, options)
	ZEND_ARG_ARRAY_INFO(0, includeArray, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_handler_includeoptionsinbody, 0, 0, 2)
	ZEND_ARG_INFO(0, options)
	ZEND_ARG_INFO(0, body)
	ZEND_ARG_ARRAY_INFO(0, includeArray, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_handler_makecollection, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_handler_setdocumentclass, 0, 0, 1)
	ZEND_ARG_INFO(0, classs)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_handler_method_entry) {
	PHP_ME(ArangoDBClient_Handler, __construct, arginfo_arangodbclient_handler___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Handler, getConnection, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Handler, getConnectionOption, arginfo_arangodbclient_handler_getconnectionoption, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Handler, json_encode_wrapper, arginfo_arangodbclient_handler_json_encode_wrapper, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Handler, includeOptionsInParams, arginfo_arangodbclient_handler_includeoptionsinparams, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Handler, includeOptionsInBody, arginfo_arangodbclient_handler_includeoptionsinbody, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Handler, makeCollection, arginfo_arangodbclient_handler_makecollection, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Handler, setDocumentClass, arginfo_arangodbclient_handler_setdocumentclass, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
