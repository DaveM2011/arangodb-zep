
extern zend_class_entry *arangodbclient_export_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Export);

PHP_METHOD(ArangoDBClient_Export, __construct);
PHP_METHOD(ArangoDBClient_Export, getConnection);
PHP_METHOD(ArangoDBClient_Export, execute);
PHP_METHOD(ArangoDBClient_Export, setBatchSize);
PHP_METHOD(ArangoDBClient_Export, getBatchSize);
PHP_METHOD(ArangoDBClient_Export, getCursorOptions);
PHP_METHOD(ArangoDBClient_Export, setDocumentClass);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_export___construct, 0, 0, 2)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_ARRAY_INFO(0, data, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_export_setbatchsize, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_export_setdocumentclass, 0, 0, 1)
	ZEND_ARG_INFO(0, classs)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_export_method_entry) {
	PHP_ME(ArangoDBClient_Export, __construct, arginfo_arangodbclient_export___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Export, getConnection, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Export, execute, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Export, setBatchSize, arginfo_arangodbclient_export_setbatchsize, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Export, getBatchSize, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Export, getCursorOptions, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Export, setDocumentClass, arginfo_arangodbclient_export_setdocumentclass, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
