
extern zend_class_entry *arangodbclient_documenthandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_DocumentHandler);

PHP_METHOD(ArangoDBClient_DocumentHandler, get);
PHP_METHOD(ArangoDBClient_DocumentHandler, has);
PHP_METHOD(ArangoDBClient_DocumentHandler, getById);
PHP_METHOD(ArangoDBClient_DocumentHandler, getDocument);
PHP_METHOD(ArangoDBClient_DocumentHandler, getHead);
PHP_METHOD(ArangoDBClient_DocumentHandler, head);
PHP_METHOD(ArangoDBClient_DocumentHandler, createFromArrayWithContext);
PHP_METHOD(ArangoDBClient_DocumentHandler, store);
PHP_METHOD(ArangoDBClient_DocumentHandler, save);
PHP_METHOD(ArangoDBClient_DocumentHandler, update);
PHP_METHOD(ArangoDBClient_DocumentHandler, updateById);
PHP_METHOD(ArangoDBClient_DocumentHandler, patch);
PHP_METHOD(ArangoDBClient_DocumentHandler, replace);
PHP_METHOD(ArangoDBClient_DocumentHandler, replaceById);
PHP_METHOD(ArangoDBClient_DocumentHandler, put);
PHP_METHOD(ArangoDBClient_DocumentHandler, remove);
PHP_METHOD(ArangoDBClient_DocumentHandler, removeById);
PHP_METHOD(ArangoDBClient_DocumentHandler, erase);
PHP_METHOD(ArangoDBClient_DocumentHandler, getDocumentId);
PHP_METHOD(ArangoDBClient_DocumentHandler, getRevision);
PHP_METHOD(ArangoDBClient_DocumentHandler, createCollectionIfOptions);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_get, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_has, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_getbyid, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_getdocument, 0, 0, 3)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_gethead, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_INFO(0, ifMatch)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_head, 0, 0, 3)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_INFO(0, ifMatch)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_createfromarraywithcontext, 0, 0, 2)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_INFO(0, options)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_store, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_save, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, document)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_update, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_updatebyid, 0, 0, 3)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_patch, 0, 0, 4)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_replace, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_replacebyid, 0, 0, 3)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_put, 0, 0, 4)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_remove, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_removebyid, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_erase, 0, 0, 3)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_getdocumentid, 0, 0, 1)
	ZEND_ARG_INFO(0, document)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_getrevision, 0, 0, 1)
	ZEND_ARG_INFO(0, document)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_documenthandler_createcollectionifoptions, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_ARRAY_INFO(0, options, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_documenthandler_method_entry) {
	PHP_ME(ArangoDBClient_DocumentHandler, get, arginfo_arangodbclient_documenthandler_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, has, arginfo_arangodbclient_documenthandler_has, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, getById, arginfo_arangodbclient_documenthandler_getbyid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, getDocument, arginfo_arangodbclient_documenthandler_getdocument, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_DocumentHandler, getHead, arginfo_arangodbclient_documenthandler_gethead, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, head, arginfo_arangodbclient_documenthandler_head, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_DocumentHandler, createFromArrayWithContext, arginfo_arangodbclient_documenthandler_createfromarraywithcontext, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_DocumentHandler, store, arginfo_arangodbclient_documenthandler_store, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, save, arginfo_arangodbclient_documenthandler_save, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, update, arginfo_arangodbclient_documenthandler_update, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, updateById, arginfo_arangodbclient_documenthandler_updatebyid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, patch, arginfo_arangodbclient_documenthandler_patch, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_DocumentHandler, replace, arginfo_arangodbclient_documenthandler_replace, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, replaceById, arginfo_arangodbclient_documenthandler_replacebyid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, put, arginfo_arangodbclient_documenthandler_put, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_DocumentHandler, remove, arginfo_arangodbclient_documenthandler_remove, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, removeById, arginfo_arangodbclient_documenthandler_removebyid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_DocumentHandler, erase, arginfo_arangodbclient_documenthandler_erase, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_DocumentHandler, getDocumentId, arginfo_arangodbclient_documenthandler_getdocumentid, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_DocumentHandler, getRevision, arginfo_arangodbclient_documenthandler_getrevision, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_DocumentHandler, createCollectionIfOptions, arginfo_arangodbclient_documenthandler_createcollectionifoptions, ZEND_ACC_PROTECTED)
	PHP_FE_END
};
