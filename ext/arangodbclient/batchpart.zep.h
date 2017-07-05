
extern zend_class_entry *arangodbclient_batchpart_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_BatchPart);

PHP_METHOD(ArangoDBClient_BatchPart, __construct);
PHP_METHOD(ArangoDBClient_BatchPart, setBatch);
PHP_METHOD(ArangoDBClient_BatchPart, setId);
PHP_METHOD(ArangoDBClient_BatchPart, getId);
PHP_METHOD(ArangoDBClient_BatchPart, setType);
PHP_METHOD(ArangoDBClient_BatchPart, getType);
PHP_METHOD(ArangoDBClient_BatchPart, setRequest);
PHP_METHOD(ArangoDBClient_BatchPart, getRequest);
PHP_METHOD(ArangoDBClient_BatchPart, setResponse);
PHP_METHOD(ArangoDBClient_BatchPart, getResponse);
PHP_METHOD(ArangoDBClient_BatchPart, getHttpCode);
PHP_METHOD(ArangoDBClient_BatchPart, getProcessedResponse);
PHP_METHOD(ArangoDBClient_BatchPart, getCursorOptions);
PHP_METHOD(ArangoDBClient_BatchPart, setDocumentClass);
zend_object *zephir_init_properties_ArangoDBClient_BatchPart(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batchpart___construct, 0, 0, 6)
	ZEND_ARG_OBJ_INFO(0, batch, ArangoDBClient\\Batch, 0)
	ZEND_ARG_INFO(0, id)
	ZEND_ARG_INFO(0, type)
	ZEND_ARG_INFO(0, request)
	ZEND_ARG_INFO(0, response)
	ZEND_ARG_INFO(0, options)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batchpart_setbatch, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, batch, ArangoDBClient\\Batch, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batchpart_setid, 0, 0, 1)
	ZEND_ARG_INFO(0, id)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batchpart_settype, 0, 0, 1)
	ZEND_ARG_INFO(0, type)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batchpart_setrequest, 0, 0, 1)
	ZEND_ARG_INFO(0, request)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batchpart_setresponse, 0, 0, 1)
	ZEND_ARG_INFO(0, response)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_batchpart_setdocumentclass, 0, 0, 1)
	ZEND_ARG_INFO(0, classs)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_batchpart_method_entry) {
	PHP_ME(ArangoDBClient_BatchPart, __construct, arginfo_arangodbclient_batchpart___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_BatchPart, setBatch, arginfo_arangodbclient_batchpart_setbatch, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, setId, arginfo_arangodbclient_batchpart_setid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, getId, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, setType, arginfo_arangodbclient_batchpart_settype, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, getType, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, setRequest, arginfo_arangodbclient_batchpart_setrequest, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, getRequest, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, setResponse, arginfo_arangodbclient_batchpart_setresponse, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, getResponse, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, getHttpCode, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, getProcessedResponse, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BatchPart, getCursorOptions, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_BatchPart, setDocumentClass, arginfo_arangodbclient_batchpart_setdocumentclass, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
