
extern zend_class_entry *arangodbclient_edgehandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_EdgeHandler);

PHP_METHOD(ArangoDBClient_EdgeHandler, createFromArrayWithContext);
PHP_METHOD(ArangoDBClient_EdgeHandler, save);
PHP_METHOD(ArangoDBClient_EdgeHandler, saveEdge);
PHP_METHOD(ArangoDBClient_EdgeHandler, edges);
PHP_METHOD(ArangoDBClient_EdgeHandler, inEdges);
PHP_METHOD(ArangoDBClient_EdgeHandler, outEdges);
PHP_METHOD(ArangoDBClient_EdgeHandler, createCollectionIfOptions);
PHP_METHOD(ArangoDBClient_EdgeHandler, get);
PHP_METHOD(ArangoDBClient_EdgeHandler, has);
PHP_METHOD(ArangoDBClient_EdgeHandler, getById);
PHP_METHOD(ArangoDBClient_EdgeHandler, getDocument);
PHP_METHOD(ArangoDBClient_EdgeHandler, getHead);
PHP_METHOD(ArangoDBClient_EdgeHandler, head);
PHP_METHOD(ArangoDBClient_EdgeHandler, store);
PHP_METHOD(ArangoDBClient_EdgeHandler, update);
PHP_METHOD(ArangoDBClient_EdgeHandler, updateById);
PHP_METHOD(ArangoDBClient_EdgeHandler, patch);
PHP_METHOD(ArangoDBClient_EdgeHandler, replace);
PHP_METHOD(ArangoDBClient_EdgeHandler, replaceById);
PHP_METHOD(ArangoDBClient_EdgeHandler, put);
PHP_METHOD(ArangoDBClient_EdgeHandler, remove);
PHP_METHOD(ArangoDBClient_EdgeHandler, removeById);
PHP_METHOD(ArangoDBClient_EdgeHandler, erase);
PHP_METHOD(ArangoDBClient_EdgeHandler, getDocumentId);
PHP_METHOD(ArangoDBClient_EdgeHandler, getRevision);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_createfromarraywithcontext, 0, 0, 2)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_INFO(0, options)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_save, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, document)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_saveedge, 0, 0, 4)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, from)
	ZEND_ARG_INFO(0, to)
	ZEND_ARG_INFO(0, document)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_edges, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, vertexHandle)
	ZEND_ARG_INFO(0, direction)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_inedges, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, vertexHandle)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_outedges, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, vertexHandle)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_createcollectionifoptions, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_ARRAY_INFO(0, options, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_get, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_has, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_getbyid, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_getdocument, 0, 0, 3)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_gethead, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_INFO(0, ifMatch)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_head, 0, 0, 3)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_INFO(0, ifMatch)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_store, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_update, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_updatebyid, 0, 0, 3)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_patch, 0, 0, 4)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_replace, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_replacebyid, 0, 0, 3)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_put, 0, 0, 4)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_remove, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, document, ArangoDBClient\\Document, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_removebyid, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_erase, 0, 0, 3)
	ZEND_ARG_INFO(0, url)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, documentId)
	ZEND_ARG_INFO(0, revision)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_getdocumentid, 0, 0, 1)
	ZEND_ARG_INFO(0, document)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgehandler_getrevision, 0, 0, 1)
	ZEND_ARG_INFO(0, document)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_edgehandler_method_entry) {
	PHP_ME(ArangoDBClient_EdgeHandler, createFromArrayWithContext, arginfo_arangodbclient_edgehandler_createfromarraywithcontext, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, save, arginfo_arangodbclient_edgehandler_save, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, saveEdge, arginfo_arangodbclient_edgehandler_saveedge, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, edges, arginfo_arangodbclient_edgehandler_edges, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, inEdges, arginfo_arangodbclient_edgehandler_inedges, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, outEdges, arginfo_arangodbclient_edgehandler_outedges, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, createCollectionIfOptions, arginfo_arangodbclient_edgehandler_createcollectionifoptions, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_EdgeHandler, get, arginfo_arangodbclient_edgehandler_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, has, arginfo_arangodbclient_edgehandler_has, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, getById, arginfo_arangodbclient_edgehandler_getbyid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, getDocument, arginfo_arangodbclient_edgehandler_getdocument, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_EdgeHandler, getHead, arginfo_arangodbclient_edgehandler_gethead, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, head, arginfo_arangodbclient_edgehandler_head, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_EdgeHandler, store, arginfo_arangodbclient_edgehandler_store, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, update, arginfo_arangodbclient_edgehandler_update, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, updateById, arginfo_arangodbclient_edgehandler_updatebyid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, patch, arginfo_arangodbclient_edgehandler_patch, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_EdgeHandler, replace, arginfo_arangodbclient_edgehandler_replace, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, replaceById, arginfo_arangodbclient_edgehandler_replacebyid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, put, arginfo_arangodbclient_edgehandler_put, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_EdgeHandler, remove, arginfo_arangodbclient_edgehandler_remove, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, removeById, arginfo_arangodbclient_edgehandler_removebyid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeHandler, erase, arginfo_arangodbclient_edgehandler_erase, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_EdgeHandler, getDocumentId, arginfo_arangodbclient_edgehandler_getdocumentid, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_EdgeHandler, getRevision, arginfo_arangodbclient_edgehandler_getrevision, ZEND_ACC_PROTECTED)
	PHP_FE_END
};
