
extern zend_class_entry *arangodbclient_connection_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Connection);

PHP_METHOD(ArangoDBClient_Connection, __construct);
PHP_METHOD(ArangoDBClient_Connection, __destruct);
PHP_METHOD(ArangoDBClient_Connection, setOption);
PHP_METHOD(ArangoDBClient_Connection, getOptions);
PHP_METHOD(ArangoDBClient_Connection, getOption);
PHP_METHOD(ArangoDBClient_Connection, get);
PHP_METHOD(ArangoDBClient_Connection, post);
PHP_METHOD(ArangoDBClient_Connection, put);
PHP_METHOD(ArangoDBClient_Connection, head);
PHP_METHOD(ArangoDBClient_Connection, patch);
PHP_METHOD(ArangoDBClient_Connection, delete);
PHP_METHOD(ArangoDBClient_Connection, updateHttpHeader);
PHP_METHOD(ArangoDBClient_Connection, getHandle);
PHP_METHOD(ArangoDBClient_Connection, executeRequest);
PHP_METHOD(ArangoDBClient_Connection, parseResponse);
PHP_METHOD(ArangoDBClient_Connection, stopCaptureBatch);
PHP_METHOD(ArangoDBClient_Connection, setActiveBatch);
PHP_METHOD(ArangoDBClient_Connection, getActiveBatch);
PHP_METHOD(ArangoDBClient_Connection, setCaptureBatch);
PHP_METHOD(ArangoDBClient_Connection, setBatchRequest);
PHP_METHOD(ArangoDBClient_Connection, isInBatchCaptureMode);
PHP_METHOD(ArangoDBClient_Connection, getBatches);
PHP_METHOD(ArangoDBClient_Connection, doBatch);
PHP_METHOD(ArangoDBClient_Connection, detect_utf);
PHP_METHOD(ArangoDBClient_Connection, check_encoding);
PHP_METHOD(ArangoDBClient_Connection, json_encode_wrapper);
PHP_METHOD(ArangoDBClient_Connection, setDatabase);
PHP_METHOD(ArangoDBClient_Connection, getDatabase);
zend_object *zephir_init_properties_ArangoDBClient_Connection(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection___construct, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, options, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_setoption, 0, 0, 2)
	ZEND_ARG_INFO(0, name)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_getoption, 0, 0, 1)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_get, 0, 0, 1)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_ARRAY_INFO(0, customHeaders, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_post, 0, 0, 2)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_ARRAY_INFO(0, customHeaders, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_put, 0, 0, 2)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_ARRAY_INFO(0, customHeaders, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_head, 0, 0, 1)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_ARRAY_INFO(0, customHeaders, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_patch, 0, 0, 2)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_ARRAY_INFO(0, customHeaders, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_delete, 0, 0, 1)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_ARRAY_INFO(0, customHeaders, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_executerequest, 0, 0, 3)
	ZEND_ARG_INFO(0, method)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_ARRAY_INFO(0, customHeaders, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_parseresponse, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, response, ArangoDBClient\\HttpResponse, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_setactivebatch, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, batch, ArangoDBClient\\Batch, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_setcapturebatch, 0, 0, 1)
	ZEND_ARG_INFO(0, state)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_setbatchrequest, 0, 0, 1)
	ZEND_ARG_INFO(0, state)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_dobatch, 0, 0, 2)
	ZEND_ARG_INFO(0, method)
	ZEND_ARG_INFO(0, request)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_detect_utf, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, stringg, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_check_encoding, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_json_encode_wrapper, 0, 0, 1)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_INFO(0, options)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connection_setdatabase, 0, 0, 1)
	ZEND_ARG_INFO(0, database)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_connection_method_entry) {
	PHP_ME(ArangoDBClient_Connection, __construct, arginfo_arangodbclient_connection___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Connection, __destruct, NULL, ZEND_ACC_PUBLIC|ZEND_ACC_DTOR)
	PHP_ME(ArangoDBClient_Connection, setOption, arginfo_arangodbclient_connection_setoption, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, getOptions, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, getOption, arginfo_arangodbclient_connection_getoption, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, get, arginfo_arangodbclient_connection_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, post, arginfo_arangodbclient_connection_post, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, put, arginfo_arangodbclient_connection_put, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, head, arginfo_arangodbclient_connection_head, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, patch, arginfo_arangodbclient_connection_patch, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, delete, arginfo_arangodbclient_connection_delete, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, updateHttpHeader, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Connection, getHandle, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Connection, executeRequest, arginfo_arangodbclient_connection_executerequest, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Connection, parseResponse, arginfo_arangodbclient_connection_parseresponse, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, stopCaptureBatch, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, setActiveBatch, arginfo_arangodbclient_connection_setactivebatch, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, getActiveBatch, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, setCaptureBatch, arginfo_arangodbclient_connection_setcapturebatch, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, setBatchRequest, arginfo_arangodbclient_connection_setbatchrequest, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, isInBatchCaptureMode, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, getBatches, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, doBatch, arginfo_arangodbclient_connection_dobatch, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Connection, detect_utf, arginfo_arangodbclient_connection_detect_utf, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Connection, check_encoding, arginfo_arangodbclient_connection_check_encoding, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Connection, json_encode_wrapper, arginfo_arangodbclient_connection_json_encode_wrapper, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, setDatabase, arginfo_arangodbclient_connection_setdatabase, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Connection, getDatabase, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
