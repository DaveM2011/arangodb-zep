
extern zend_class_entry *arangodbclient_batch_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Batch);

PHP_METHOD(ArangoDBClient_Batch, __construct);
PHP_METHOD(ArangoDBClient_Batch, setConnection);
PHP_METHOD(ArangoDBClient_Batch, startCapture);
PHP_METHOD(ArangoDBClient_Batch, stopCapture);
PHP_METHOD(ArangoDBClient_Batch, isActive);
PHP_METHOD(ArangoDBClient_Batch, isCapturing);
PHP_METHOD(ArangoDBClient_Batch, activate);
PHP_METHOD(ArangoDBClient_Batch, setActive);
PHP_METHOD(ArangoDBClient_Batch, setCapture);
PHP_METHOD(ArangoDBClient_Batch, getActive);
PHP_METHOD(ArangoDBClient_Batch, getConnectionCaptureMode);
PHP_METHOD(ArangoDBClient_Batch, setBatchRequest);
PHP_METHOD(ArangoDBClient_Batch, nextBatchPartId);
PHP_METHOD(ArangoDBClient_Batch, nextBatchPartCursorOptions);
PHP_METHOD(ArangoDBClient_Batch, append);
PHP_METHOD(ArangoDBClient_Batch, splitWithContentIdKey);
PHP_METHOD(ArangoDBClient_Batch, process);
PHP_METHOD(ArangoDBClient_Batch, countParts);
PHP_METHOD(ArangoDBClient_Batch, getPart);
PHP_METHOD(ArangoDBClient_Batch, getPartResponse);
PHP_METHOD(ArangoDBClient_Batch, getProcessedPartResponse);
PHP_METHOD(ArangoDBClient_Batch, getBatchParts);
PHP_METHOD(ArangoDBClient_Batch, getCursorOptions);
PHP_METHOD(ArangoDBClient_Batch, getConnection);
PHP_METHOD(ArangoDBClient_Batch, setDocumentClass);
zend_object *zephir_init_properties_ArangoDBClient_Batch(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch___construct, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_setconnection, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_setcapture, 0, 0, 1)
	ZEND_ARG_INFO(0, state)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_getactive, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_getconnectioncapturemode, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_setbatchrequest, 0, 0, 1)
	ZEND_ARG_INFO(0, state)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_nextbatchpartid, 0, 0, 1)
	ZEND_ARG_INFO(0, batchPartId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_nextbatchpartcursoroptions, 0, 0, 1)
	ZEND_ARG_INFO(0, batchPartCursorOptions)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_append, 0, 0, 2)
	ZEND_ARG_INFO(0, method)
	ZEND_ARG_INFO(0, request)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_splitwithcontentidkey, 0, 0, 2)
	ZEND_ARG_INFO(0, pattern)
	ZEND_ARG_INFO(0, stringg)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_getpart, 0, 0, 1)
	ZEND_ARG_INFO(0, partId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_getpartresponse, 0, 0, 1)
	ZEND_ARG_INFO(0, partId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_getprocessedpartresponse, 0, 0, 1)
	ZEND_ARG_INFO(0, partId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batch_setdocumentclass, 0, 0, 1)
	ZEND_ARG_INFO(0, classs)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_batch_method_entry) {
	PHP_ME(ArangoDBClient_Batch, __construct, arginfo_arangodbclient_batch___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Batch, setConnection, arginfo_arangodbclient_batch_setconnection, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, startCapture, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, stopCapture, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, isActive, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, isCapturing, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, activate, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, setActive, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, setCapture, arginfo_arangodbclient_batch_setcapture, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, getActive, arginfo_arangodbclient_batch_getactive, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, getConnectionCaptureMode, arginfo_arangodbclient_batch_getconnectioncapturemode, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, setBatchRequest, arginfo_arangodbclient_batch_setbatchrequest, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Batch, nextBatchPartId, arginfo_arangodbclient_batch_nextbatchpartid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, nextBatchPartCursorOptions, arginfo_arangodbclient_batch_nextbatchpartcursoroptions, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, append, arginfo_arangodbclient_batch_append, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, splitWithContentIdKey, arginfo_arangodbclient_batch_splitwithcontentidkey, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, process, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, countParts, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, getPart, arginfo_arangodbclient_batch_getpart, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, getPartResponse, arginfo_arangodbclient_batch_getpartresponse, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, getProcessedPartResponse, arginfo_arangodbclient_batch_getprocessedpartresponse, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, getBatchParts, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, getCursorOptions, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Batch, getConnection, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Batch, setDocumentClass, arginfo_arangodbclient_batch_setdocumentclass, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
