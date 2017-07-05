
extern zend_class_entry *arangodbclient_exportcursor_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_ExportCursor);

PHP_METHOD(ArangoDBClient_ExportCursor, __construct);
PHP_METHOD(ArangoDBClient_ExportCursor, delete);
PHP_METHOD(ArangoDBClient_ExportCursor, getCount);
PHP_METHOD(ArangoDBClient_ExportCursor, getNextBatch);
PHP_METHOD(ArangoDBClient_ExportCursor, setData);
PHP_METHOD(ArangoDBClient_ExportCursor, fetchOutstanding);
PHP_METHOD(ArangoDBClient_ExportCursor, url);
PHP_METHOD(ArangoDBClient_ExportCursor, getFetches);
PHP_METHOD(ArangoDBClient_ExportCursor, getId);
PHP_METHOD(ArangoDBClient_ExportCursor, setDocumentClass);
zend_object *zephir_init_properties_ArangoDBClient_ExportCursor(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_exportcursor___construct, 0, 0, 3)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_exportcursor_setdata, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_exportcursor_setdocumentclass, 0, 0, 1)
	ZEND_ARG_INFO(0, classs)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_exportcursor_method_entry) {
	PHP_ME(ArangoDBClient_ExportCursor, __construct, arginfo_arangodbclient_exportcursor___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_ExportCursor, delete, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ExportCursor, getCount, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ExportCursor, getNextBatch, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ExportCursor, setData, arginfo_arangodbclient_exportcursor_setdata, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_ExportCursor, fetchOutstanding, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_ExportCursor, url, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_ExportCursor, getFetches, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ExportCursor, getId, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ExportCursor, setDocumentClass, arginfo_arangodbclient_exportcursor_setdocumentclass, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
