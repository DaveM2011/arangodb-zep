
#ifdef HAVE_CONFIG_H
#include "../ext_config.h"
#endif

#include <php.h>
#include "../php_ext.h"
#include "../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"
#include "kernel/exception.h"
#include "kernel/operators.h"
#include "kernel/array.h"
#include "kernel/concat.h"
#include "kernel/object.h"
#include "kernel/string.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_EdgeHandler) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, EdgeHandler, arangodbclient, edgehandler, arangodbclient_handler_ce, arangodbclient_edgehandler_method_entry, 0);

	zephir_declare_class_constant_string(arangodbclient_edgehandler_ce, SL("ENTRY_DOCUMENTS"), "edge");

	zephir_declare_class_constant_string(arangodbclient_edgehandler_ce, SL("ENTRY_EDGES"), "edges");

	zephir_declare_class_constant_string(arangodbclient_edgehandler_ce, SL("OPTION_FROM"), "from");

	zephir_declare_class_constant_string(arangodbclient_edgehandler_ce, SL("OPTION_TO"), "to");

	zephir_declare_class_constant_string(arangodbclient_edgehandler_ce, SL("OPTION_VERTEX"), "vertex");

	zephir_declare_class_constant_string(arangodbclient_edgehandler_ce, SL("OPTION_DIRECTION"), "direction");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_EdgeHandler, createFromArrayWithContext) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *data, data_sub, *options, options_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data_sub);
	ZVAL_UNDEF(&options_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &data, &options);



	ZEPHIR_RETURN_CALL_CE_STATIC(arangodbclient_edge_ce, "createfromarray", &_0, 0, data, options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, save) {

	zval options;
	zval *collection, collection_sub, *document, document_sub, *options_param = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collection, &document, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Edges don't have a save() method. Please use saveEdge()", "arangodbclient/edgehandler.zep", 18);
	return;

}

PHP_METHOD(ArangoDBClient_EdgeHandler, saveEdge) {

	zephir_fcall_cache_entry *_2 = NULL, *_4 = NULL, *_7 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection = NULL, collection_sub, *from, from_sub, *to, to_sub, *document = NULL, document_sub, *options_param = NULL, params, tmpArrayeba825deba0c7f862f47e71190656430, data, url, response, location, json, id, _0, _3, _5, _6, _8, _9, _10, _11, _1$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&from_sub);
	ZVAL_UNDEF(&to_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArrayeba825deba0c7f862f47e71190656430);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&location);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&id);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 1, &collection, &from, &to, &document, &options_param);

	ZEPHIR_SEPARATE_PARAM(collection);
	ZEPHIR_SEPARATE_PARAM(document);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(collection, &_0);
	if (Z_TYPE_P(document) == IS_ARRAY) {
		ZEPHIR_CALL_CE_STATIC(&_1$$3, arangodbclient_edge_ce, "createfromarray", &_2, 0, document);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(document, &_1$$3);
	}
	ZEPHIR_CALL_METHOD(NULL, document, "setfrom", NULL, 0, from);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, document, "setto", NULL, 0, to);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArrayeba825deba0c7f862f47e71190656430);
	zephir_create_array(&tmpArrayeba825deba0c7f862f47e71190656430, 2, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "waitForSync");
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArrayeba825deba0c7f862f47e71190656430, SL("waitForSync"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "createCollection");
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArrayeba825deba0c7f862f47e71190656430, SL("createCollection"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArrayeba825deba0c7f862f47e71190656430);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "createcollectionifoptions", NULL, 0, collection, &params);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, document, "getallforinsertupdate", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_5);
	ZEPHIR_CONCAT_SSV(&_5, "/_api/document", "/", collection);
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "appendparamsurl", &_4, 0, &_5, &params);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_6, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_0, "post", NULL, 0, &url, &_6);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&location, &response, "getlocationheader", NULL, 0);
	zephir_check_call_status();
	if (!(zephir_is_true(&location))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Did not find location header in server response", "arangodbclient/edgehandler.zep", 39);
		return;
	}
	ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&id, arangodbclient_urlhelper_ce, "getdocumentidfromlocation", &_7, 0, &location);
	zephir_check_call_status();
	zephir_array_fetch_string(&_8, &json, SL("_id"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 43 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setinternalid", NULL, 0, &_8);
	zephir_check_call_status();
	zephir_array_fetch_string(&_9, &json, SL("_rev"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 44 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_9);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_10, document, "getid", NULL, 0);
	zephir_check_call_status();
	if (!ZEPHIR_IS_IDENTICAL(&id, &_10)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Got an invalid response from the server", "arangodbclient/edgehandler.zep", 46);
		return;
	}
	ZVAL_BOOL(&_11, 0);
	ZEPHIR_CALL_METHOD(NULL, document, "setisnew", NULL, 0, &_11);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(document, "getid", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, edges) {

	zephir_fcall_cache_entry *_1 = NULL, *_7 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval direction;
	zval *collection = NULL, collection_sub, *vertexHandle, vertexHandle_sub, *direction_param = NULL, *options_param = NULL, __$false, params, url, response, batchPart, json, edges, data, _0, _2, _3, _4, *_5, _6$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&vertexHandle_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&edges);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&direction);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &collection, &vertexHandle, &direction_param, &options_param);

	ZEPHIR_SEPARATE_PARAM(collection);
	if (!direction_param) {
		ZEPHIR_INIT_VAR(&direction);
		ZVAL_STRING(&direction, "any");
	} else {
		zephir_get_strval(&direction, direction_param);
	}
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(collection, &_0);
	ZEPHIR_INIT_VAR(&params);
	zephir_create_array(&params, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&params, SL("vertex"), vertexHandle, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&params, SL("direction"), &direction, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_FUNCTION(&_0, "urlencode", NULL, 43, collection);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_2);
	ZEPHIR_CONCAT_SSV(&_2, "/_api/edges", "/", &_0);
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "appendparamsurl", &_1, 0, &_2, &params);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_3, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&batchPart, &response, "getbatchpart", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&batchPart)) {
		RETURN_CCTOR(&batchPart);
	}
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&edges);
	array_init(&edges);
	zephir_array_fetch_string(&_4, &json, SL("edges"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 67 TSRMLS_CC);
	zephir_is_iterable(&_4, 0, "arangodbclient/edgehandler.zep", 70);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_4), _5)
	{
		ZEPHIR_INIT_NVAR(&data);
		ZVAL_COPY(&data, _5);
		ZEPHIR_CALL_METHOD(&_6$$4, this_ptr, "createfromarraywithcontext", &_7, 0, &data, &options);
		zephir_check_call_status();
		zephir_array_append(&edges, &_6$$4, PH_SEPARATE, "arangodbclient/edgehandler.zep", 68);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&data);
	RETURN_CCTOR(&edges);

}

PHP_METHOD(ArangoDBClient_EdgeHandler, inEdges) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, *vertexHandle, vertexHandle_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&vertexHandle_sub);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &collection, &vertexHandle);



	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "in");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "edges", NULL, 0, collection, vertexHandle, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, outEdges) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, *vertexHandle, vertexHandle_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&vertexHandle_sub);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &collection, &vertexHandle);



	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "out");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "edges", NULL, 0, collection, vertexHandle, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, createCollectionIfOptions) {

	zend_bool value = 0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection, collection_sub, *options_param = NULL, _0, collectionHandler, e, _1, _2, _3, _4, _6, _5$$5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&collectionHandler);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &collection, &options_param);

	zephir_get_arrval(&options, options_param);


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_LONG(&_0, 3);
	zephir_array_update_string(&options, SL("createCollectionType"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "createCollection");
	if (!(zephir_array_key_exists(&options, &_1 TSRMLS_CC))) {
		RETURN_MM_NULL();
	}
	ZEPHIR_OBS_VAR(&_2);
	zephir_array_fetch_string(&_2, &options, SL("createCollection"), PH_NOISY, "arangodbclient/edgehandler.zep", 91 TSRMLS_CC);
	value = zephir_get_boolval(&_2);
	if (!(value)) {
		RETURN_MM_NULL();
	}
	ZEPHIR_INIT_VAR(&collectionHandler);
	object_init_ex(&collectionHandler, arangodbclient_collectionhandler_ce);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &collectionHandler, "__construct", NULL, 9, &_3);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "createCollectionType");
	if (zephir_array_key_exists(&options, &_4 TSRMLS_CC)) {
		zephir_array_fetch_string(&_5$$5, &options, SL("createCollectionType"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 97 TSRMLS_CC);
		zephir_array_update_string(&options, SL("type"), &_5$$5, PH_COPY | PH_SEPARATE);
		zephir_array_unset_string(&options, SL("createCollectionType"), PH_SEPARATE);
	}
	zephir_array_unset_string(&options, SL("createCollection"), PH_SEPARATE);

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(NULL, &collectionHandler, "create", NULL, 10, collection, &options);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_VAR(&_6);
		ZVAL_OBJ(&_6, EG(exception));
		Z_ADDREF_P(&_6);
		if (zephir_instance_of_ev(&_6, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_6);
			zephir_throw_exception_debug(&e, "arangodbclient/edgehandler.zep", 106 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, get) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection_param = NULL, *documentId, documentId_sub, *options_param = NULL;
	zval collection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collection_param, &documentId, &options_param);

	zephir_get_strval(&collection, collection_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getbyid", NULL, 0, &collection, documentId, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, has) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection_param = NULL, *documentId, documentId_sub, e, _0, _1$$4;
	zval collection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &collection_param, &documentId);

	zephir_get_strval(&collection, collection_param);



	/* try_start_1: */

		ZEPHIR_CALL_METHOD(NULL, this_ptr, "get", NULL, 0, &collection, documentId);
		zephir_check_call_status_or_jump(try_end_1);
		RETURN_MM_BOOL(1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_VAR(&_0);
		ZVAL_OBJ(&_0, EG(exception));
		Z_ADDREF_P(&_0);
		if (zephir_instance_of_ev(&_0, arangodbclient_serverexception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_0);
			ZEPHIR_CALL_METHOD(&_1$$4, &e, "getcode", NULL, 0);
			zephir_check_call_status();
			if (ZEPHIR_IS_LONG_IDENTICAL(&_1$$4, 404)) {
				RETURN_MM_BOOL(0);
			}
			zephir_throw_exception_debug(&e, "arangodbclient/edgehandler.zep", 126 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_EdgeHandler, getById) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection = NULL, collection_sub, *documentId = NULL, documentId_sub, *options_param = NULL, __$false, tmpListCollectionDocumentId, data, _0, _1, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&tmpListCollectionDocumentId);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collection, &documentId, &options_param);

	ZEPHIR_SEPARATE_PARAM(collection);
	ZEPHIR_SEPARATE_PARAM(documentId);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "/");
	ZEPHIR_INIT_VAR(&_1);
	zephir_fast_strpos(&_1, documentId, &_0, 0 );
	if (!ZEPHIR_IS_FALSE_IDENTICAL(&_1)) {
		ZEPHIR_INIT_VAR(&tmpListCollectionDocumentId);
		zephir_fast_explode_str(&tmpListCollectionDocumentId, SL("/"), documentId, LONG_MAX TSRMLS_CC);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionDocumentId, 0, PH_NOISY, "arangodbclient/edgehandler.zep", 137 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(documentId);
		zephir_array_fetch_long(documentId, &tmpListCollectionDocumentId, 1, PH_NOISY, "arangodbclient/edgehandler.zep", 138 TSRMLS_CC);
	}
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/document");
	ZEPHIR_CALL_METHOD(&data, this_ptr, "getdocument", NULL, 0, &_2, collection, documentId, &options);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "createfromarraywithcontext", NULL, 0, &data, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, getDocument) {

	zend_bool _5;
	zephir_fcall_cache_entry *_2 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _3;
	zval *url_param = NULL, *collection_param = NULL, *documentId, documentId_sub, *options_param = NULL, headerElements, response, _0, _1, _4, _6, _12, _13, _7$$3, _8$$4, _9$$4, _10$$5, _11$$5;
	zval url, collection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&headerElements);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_7$$3);
	ZVAL_UNDEF(&_8$$4);
	ZVAL_UNDEF(&_9$$4);
	ZVAL_UNDEF(&_10$$5);
	ZVAL_UNDEF(&_11$$5);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &url_param, &collection_param, &documentId, &options_param);

	zephir_get_strval(&url, url_param);
	zephir_get_strval(&collection, collection_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, &collection);
	zephir_check_call_status();
	zephir_get_strval(&collection, &_0);
	ZEPHIR_INIT_VAR(&_3);
	zephir_create_array(&_3, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_3, &collection);
	zephir_array_fast_append(&_3, documentId);
	ZEPHIR_CALL_CE_STATIC(&_1, arangodbclient_urlhelper_ce, "buildurl", &_2, 0, &url, &_3);
	zephir_check_call_status();
	zephir_get_strval(&url, &_1);
	ZEPHIR_INIT_VAR(&headerElements);
	array_init(&headerElements);
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "ifMatch");
	_5 = zephir_array_key_exists(&options, &_4 TSRMLS_CC);
	if (_5) {
		ZEPHIR_INIT_VAR(&_6);
		ZVAL_STRING(&_6, "revision");
		_5 = zephir_array_key_exists(&options, &_6 TSRMLS_CC);
	}
	if (_5) {
		zephir_array_fetch_string(&_7$$3, &options, SL("ifMatch"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 153 TSRMLS_CC);
		if (ZEPHIR_IS_TRUE_IDENTICAL(&_7$$3)) {
			zephir_array_fetch_string(&_8$$4, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 154 TSRMLS_CC);
			ZEPHIR_INIT_VAR(&_9$$4);
			ZEPHIR_CONCAT_SVS(&_9$$4, "\"", &_8$$4, "\"");
			zephir_array_update_string(&headerElements, SL("If-Match"), &_9$$4, PH_COPY | PH_SEPARATE);
		} else {
			zephir_array_fetch_string(&_10$$5, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 156 TSRMLS_CC);
			ZEPHIR_INIT_VAR(&_11$$5);
			ZEPHIR_CONCAT_SVS(&_11$$5, "\"", &_10$$5, "\"");
			zephir_array_update_string(&headerElements, SL("If-None-Match"), &_11$$5, PH_COPY | PH_SEPARATE);
		}
	}
	ZEPHIR_CALL_METHOD(&_12, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_12, "get", NULL, 0, &url, &headerElements);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_13, &response, "gethttpcode", NULL, 0);
	zephir_check_call_status();
	if (ZEPHIR_IS_LONG_IDENTICAL(&_13, 304)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Document has not changed.", "arangodbclient/edgehandler.zep", 161);
		return;
	}
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, getHead) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool ifMatch;
	zval *collection_param = NULL, *documentId, documentId_sub, *revision_param = NULL, *ifMatch_param = NULL, _0, _1;
	zval collection, revision;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&revision);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &collection_param, &documentId, &revision_param, &ifMatch_param);

	zephir_get_strval(&collection, collection_param);
	if (!revision_param) {
		ZEPHIR_INIT_VAR(&revision);
		ZVAL_STRING(&revision, "");
	} else {
		zephir_get_strval(&revision, revision_param);
	}
	if (!ifMatch_param) {
		ifMatch = 0;
	} else {
		ifMatch = zephir_get_boolval(ifMatch_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "/_api/document");
	if (ifMatch) {
		ZVAL_BOOL(&_1, 1);
	} else {
		ZVAL_BOOL(&_1, 0);
	}
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "head", NULL, 0, &_0, &collection, documentId, &revision, &_1);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, head) {

	zval _3;
	zephir_fcall_cache_entry *_2 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool ifMatch, _4;
	zval *url_param = NULL, *collection_param = NULL, *documentId, documentId_sub, *revision = NULL, revision_sub, *ifMatch_param = NULL, __$null, headerElements, response, headers, _0, _1, _7, _8, _5$$4, _6$$5;
	zval url, collection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&revision_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&headerElements);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 2, &url_param, &collection_param, &documentId, &revision, &ifMatch_param);

	zephir_get_strval(&url, url_param);
	zephir_get_strval(&collection, collection_param);
	if (!revision) {
		revision = &revision_sub;
		revision = &__$null;
	}
	if (!ifMatch_param) {
		ifMatch = 0;
	} else {
		ifMatch = zephir_get_boolval(ifMatch_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, &collection);
	zephir_check_call_status();
	zephir_get_strval(&collection, &_0);
	ZEPHIR_INIT_VAR(&_3);
	zephir_create_array(&_3, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_3, &collection);
	zephir_array_fast_append(&_3, documentId);
	ZEPHIR_CALL_CE_STATIC(&_1, arangodbclient_urlhelper_ce, "buildurl", &_2, 0, &url, &_3);
	zephir_check_call_status();
	zephir_get_strval(&url, &_1);
	ZEPHIR_INIT_VAR(&headerElements);
	array_init(&headerElements);
	_4 = Z_TYPE_P(revision) != IS_NULL;
	if (_4) {
		_4 = ifMatch != 0;
	}
	if (_4) {
		if (ifMatch) {
			ZEPHIR_INIT_VAR(&_5$$4);
			ZEPHIR_CONCAT_SVS(&_5$$4, "\"", revision, "\"");
			zephir_array_update_string(&headerElements, SL("If-Match"), &_5$$4, PH_COPY | PH_SEPARATE);
		} else {
			ZEPHIR_INIT_VAR(&_6$$5);
			ZEPHIR_CONCAT_SVS(&_6$$5, "\"", revision, "\"");
			zephir_array_update_string(&headerElements, SL("If-None-Match"), &_6$$5, PH_COPY | PH_SEPARATE);
		}
	}
	ZEPHIR_CALL_METHOD(&_7, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_7, "head", NULL, 0, &url, &headerElements);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&headers, &response, "getheaders", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_8, &response, "gethttpcode", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&headers, SL("httpCode"), &_8, PH_COPY | PH_SEPARATE);
	RETURN_CCTOR(&headers);

}

PHP_METHOD(ArangoDBClient_EdgeHandler, store) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *document, document_sub, *collection = NULL, collection_sub, *options_param = NULL, __$null, result, _0, _1$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 2, &document, &collection, &options_param);

	if (!collection) {
		collection = &collection_sub;
		collection = &__$null;
	}
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, document, "getisnew", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&_0)) {
		if (Z_TYPE_P(collection) == IS_NULL) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection id is required to store a new document.", "arangodbclient/edgehandler.zep", 197);
			return;
		}
		ZEPHIR_CALL_METHOD(&result, this_ptr, "save", NULL, 0, collection, document, &options);
		zephir_check_call_status();
		ZVAL_BOOL(&_1$$3, 0);
		ZEPHIR_CALL_METHOD(NULL, document, "setisnew", NULL, 0, &_1$$3);
		zephir_check_call_status();
		RETURN_CCTOR(&result);
	} else {
		if (zephir_is_true(collection)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "An existing document cannot be stored into a new collection", "arangodbclient/edgehandler.zep", 204);
			return;
		}
		ZEPHIR_RETURN_CALL_METHOD(this_ptr, "replace", NULL, 0, document, &options);
		zephir_check_call_status();
		RETURN_MM();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, update) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *document, document_sub, *options_param = NULL, documentId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&documentId);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &document, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&documentId, this_ptr, "getdocumentid", NULL, 0, document);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "updatebyid", NULL, 0, document, &documentId, document, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, updateById) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection_param = NULL, *documentId, documentId_sub, *document, document_sub, *options_param = NULL, _0;
	zval collection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &collection_param, &documentId, &document, &options_param);

	zephir_get_strval(&collection, collection_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "/_api/document");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "patch", NULL, 0, &_0, &collection, documentId, document, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, patch) {

	zend_bool _4;
	zephir_fcall_cache_entry *_7 = NULL, *_10 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _8;
	zval *url_param = NULL, *collection_param = NULL, *documentId, documentId_sub, *document, document_sub, *options_param = NULL, __$true, __$false, _documentClass, params, tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5, headers, revision, result, json, _0, _1, _2, _3, _5, _9, _11, _12, _13, _14, _15, _16, _6$$4;
	zval url, collection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5);
	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&revision);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_15);
	ZVAL_UNDEF(&_16);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_8);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 1, &url_param, &collection_param, &documentId, &document, &options_param);

	zephir_get_strval(&url, url_param);
	zephir_get_strval(&collection, collection_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, &collection);
	zephir_check_call_status();
	zephir_get_strval(&collection, &_0);
	zephir_read_property(&_1, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_1);
	ZEPHIR_INIT_VAR(&tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5);
	zephir_create_array(&tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5, 5, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "waitForSync");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5, SL("waitForSync"), &_2, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5, SL("keepNull"), &__$true, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5, SL("silent"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5, SL("ignoreRevs"), &__$true, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "policy");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5, SL("policy"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&headers);
	array_init(&headers);
	_4 = zephir_array_isset_string(&params, SL("policy"));
	if (_4) {
		zephir_array_fetch_string(&_5, &params, SL("policy"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 232 TSRMLS_CC);
		_4 = ZEPHIR_IS_STRING_IDENTICAL(&_5, "error");
	}
	if (_4) {
		ZEPHIR_CALL_METHOD(&revision, document, "getrevision", NULL, 0);
		zephir_check_call_status();
		if (Z_TYPE_P(&revision) != IS_NULL) {
			zephir_array_update_string(&params, SL("ignoreRevs"), &__$false, PH_COPY | PH_SEPARATE);
			ZEPHIR_INIT_VAR(&_6$$4);
			ZEPHIR_CONCAT_SVS(&_6$$4, "\"", &revision, "\"");
			zephir_array_update_string(&headers, SL("if-match"), &_6$$4, PH_COPY | PH_SEPARATE);
		}
	}
	ZEPHIR_INIT_VAR(&_8);
	zephir_create_array(&_8, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_8, &collection);
	zephir_array_fast_append(&_8, documentId);
	ZEPHIR_CALL_CE_STATIC(&_2, arangodbclient_urlhelper_ce, "buildurl", &_7, 0, &url, &_8);
	zephir_check_call_status();
	zephir_get_strval(&url, &_2);
	ZEPHIR_CALL_CE_STATIC(&_9, arangodbclient_urlhelper_ce, "appendparamsurl", &_10, 0, &url, &params);
	zephir_check_call_status();
	zephir_get_strval(&url, &_9);
	ZEPHIR_CALL_METHOD(&_11, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_13, document, "getallforinsertupdate", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_12, this_ptr, "json_encode_wrapper", NULL, 0, &_13);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&result, &_11, "patch", NULL, 0, &url, &_12, &headers);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&json, &result, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_15);
	ZEPHIR_CONCAT_VS(&_15, &_documentClass, "::ENTRY_REV");
	ZEPHIR_CALL_FUNCTION(&_16, "constant", NULL, 7, &_15);
	zephir_check_call_status();
	zephir_array_fetch(&_14, &json, &_16, PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 243 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_14);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_EdgeHandler, replace) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *document, document_sub, *options_param = NULL, documentId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&documentId);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &document, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&documentId, this_ptr, "getdocumentid", NULL, 0, document);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "replacebyid", NULL, 0, document, &documentId, document, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, replaceById) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection, collection_sub, *documentId, documentId_sub, *document, document_sub, *options_param = NULL, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &collection, &documentId, &document, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "/_api/document");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "put", NULL, 0, &_0, collection, documentId, document, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, put) {

	zend_bool _4;
	zephir_fcall_cache_entry *_9 = NULL, *_12 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _10;
	zval *url_param = NULL, *collection_param = NULL, *documentId, documentId_sub, *document, document_sub, *options_param = NULL, __$false, __$true, _documentClass, params, tmpArray6cb2004c711821f8e0e9777e41742c7f, headers, data, result, json, _0, _1, _2, _3, _5, _11, _13, _14, _15, _16, _17, _6$$3, _7$$4, _8$$4;
	zval url, collection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArray6cb2004c711821f8e0e9777e41742c7f);
	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_15);
	ZVAL_UNDEF(&_16);
	ZVAL_UNDEF(&_17);
	ZVAL_UNDEF(&_6$$3);
	ZVAL_UNDEF(&_7$$4);
	ZVAL_UNDEF(&_8$$4);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_10);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 1, &url_param, &collection_param, &documentId, &document, &options_param);

	zephir_get_strval(&url, url_param);
	zephir_get_strval(&collection, collection_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, &collection);
	zephir_check_call_status();
	zephir_get_strval(&collection, &_0);
	zephir_read_property(&_1, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_1);
	ZEPHIR_INIT_VAR(&tmpArray6cb2004c711821f8e0e9777e41742c7f);
	zephir_create_array(&tmpArray6cb2004c711821f8e0e9777e41742c7f, 4, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "waitForSync");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray6cb2004c711821f8e0e9777e41742c7f, SL("waitForSync"), &_2, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray6cb2004c711821f8e0e9777e41742c7f, SL("silent"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray6cb2004c711821f8e0e9777e41742c7f, SL("ignoreRevs"), &__$true, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "policy");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray6cb2004c711821f8e0e9777e41742c7f, SL("policy"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArray6cb2004c711821f8e0e9777e41742c7f);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&headers);
	array_init(&headers);
	_4 = zephir_array_isset_string(&params, SL("policy"));
	if (_4) {
		zephir_array_fetch_string(&_5, &params, SL("policy"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 269 TSRMLS_CC);
		_4 = ZEPHIR_IS_STRING_IDENTICAL(&_5, "error");
	}
	if (_4) {
		zephir_array_fetch_string(&_6$$3, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 270 TSRMLS_CC);
		if (Z_TYPE_P(&_6$$3) != IS_NULL) {
			zephir_array_update_string(&params, SL("ignoreRevs"), &__$false, PH_COPY | PH_SEPARATE);
			zephir_array_fetch_string(&_7$$4, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 272 TSRMLS_CC);
			ZEPHIR_INIT_VAR(&_8$$4);
			ZEPHIR_CONCAT_SVS(&_8$$4, "\"", &_7$$4, "\"");
			zephir_array_update_string(&headers, SL("if-match"), &_8$$4, PH_COPY | PH_SEPARATE);
		}
	}
	ZEPHIR_CALL_METHOD(&data, document, "getallforinsertupdate", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_10);
	zephir_create_array(&_10, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_10, &collection);
	zephir_array_fast_append(&_10, documentId);
	ZEPHIR_CALL_CE_STATIC(&_2, arangodbclient_urlhelper_ce, "buildurl", &_9, 0, &url, &_10);
	zephir_check_call_status();
	zephir_get_strval(&url, &_2);
	ZEPHIR_CALL_CE_STATIC(&_11, arangodbclient_urlhelper_ce, "appendparamsurl", &_12, 0, &url, &params);
	zephir_check_call_status();
	zephir_get_strval(&url, &_11);
	ZEPHIR_CALL_METHOD(&_13, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_14, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&result, &_13, "put", NULL, 0, &url, &_14, &headers);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&json, &result, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_16);
	ZEPHIR_CONCAT_VS(&_16, &_documentClass, "::ENTRY_REV");
	ZEPHIR_CALL_FUNCTION(&_17, "constant", NULL, 7, &_16);
	zephir_check_call_status();
	zephir_array_fetch(&_15, &json, &_17, PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 280 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_15);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_EdgeHandler, remove) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *document, document_sub, *options_param = NULL, documentId, revision;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&documentId);
	ZVAL_UNDEF(&revision);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &document, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&documentId, this_ptr, "getdocumentid", NULL, 0, document);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&revision, this_ptr, "getrevision", NULL, 0, document);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "removebyid", NULL, 0, document, &documentId, &revision, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, removeById) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection, collection_sub, *documentId, documentId_sub, *revision = NULL, revision_sub, *options_param = NULL, __$null, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&revision_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &collection, &documentId, &revision, &options_param);

	if (!revision) {
		revision = &revision_sub;
		revision = &__$null;
	}
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "/_api/document");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "erase", NULL, 0, &_0, collection, documentId, revision, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeHandler, erase) {

	zend_bool _3;
	zephir_fcall_cache_entry *_6 = NULL, *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _7;
	zval *url_param = NULL, *collection_param = NULL, *documentId, documentId_sub, *revision = NULL, revision_sub, *options_param = NULL, __$false, __$true, __$null, params, tmpArray0da0ce704ed03b9443cf7d3447b85431, headers, _0, _1, _2, _4, _8, _10, _5$$4;
	zval url, collection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&documentId_sub);
	ZVAL_UNDEF(&revision_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArray0da0ce704ed03b9443cf7d3447b85431);
	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_7);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 2, &url_param, &collection_param, &documentId, &revision, &options_param);

	zephir_get_strval(&url, url_param);
	zephir_get_strval(&collection, collection_param);
	if (!revision) {
		revision = &revision_sub;
		revision = &__$null;
	}
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, &collection);
	zephir_check_call_status();
	zephir_get_strval(&collection, &_0);
	ZEPHIR_INIT_VAR(&tmpArray0da0ce704ed03b9443cf7d3447b85431);
	zephir_create_array(&tmpArray0da0ce704ed03b9443cf7d3447b85431, 4, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "waitForSync");
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnectionoption", NULL, 0, &_2);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray0da0ce704ed03b9443cf7d3447b85431, SL("waitForSync"), &_1, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray0da0ce704ed03b9443cf7d3447b85431, SL("silent"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray0da0ce704ed03b9443cf7d3447b85431, SL("ignoreRevs"), &__$true, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "policy");
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnectionoption", NULL, 0, &_2);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray0da0ce704ed03b9443cf7d3447b85431, SL("policy"), &_1, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArray0da0ce704ed03b9443cf7d3447b85431);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&headers);
	array_init(&headers);
	_3 = zephir_array_isset_string(&params, SL("policy"));
	if (_3) {
		zephir_array_fetch_string(&_4, &params, SL("policy"), PH_NOISY | PH_READONLY, "arangodbclient/edgehandler.zep", 306 TSRMLS_CC);
		_3 = ZEPHIR_IS_STRING_IDENTICAL(&_4, "error");
	}
	if (_3) {
		if (Z_TYPE_P(revision) != IS_NULL) {
			zephir_array_update_string(&params, SL("ignoreRevs"), &__$false, PH_COPY | PH_SEPARATE);
			ZEPHIR_INIT_VAR(&_5$$4);
			ZEPHIR_CONCAT_SVS(&_5$$4, "\"", revision, "\"");
			zephir_array_update_string(&headers, SL("if-match"), &_5$$4, PH_COPY | PH_SEPARATE);
		}
	}
	ZEPHIR_INIT_VAR(&_7);
	zephir_create_array(&_7, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_7, &collection);
	zephir_array_fast_append(&_7, documentId);
	ZEPHIR_CALL_CE_STATIC(&_1, arangodbclient_urlhelper_ce, "buildurl", &_6, 0, &url, &_7);
	zephir_check_call_status();
	zephir_get_strval(&url, &_1);
	ZEPHIR_CALL_CE_STATIC(&_8, arangodbclient_urlhelper_ce, "appendparamsurl", &_9, 0, &url, &params);
	zephir_check_call_status();
	zephir_get_strval(&url, &_8);
	ZEPHIR_CALL_METHOD(&_10, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_10, "delete", NULL, 0, &url, &headers);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_EdgeHandler, getDocumentId) {

	zend_bool _0, _1, _3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *document, document_sub, documentId, _2, _4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&documentId);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &document);



	ZEPHIR_CPY_WRT(&documentId, document);
	if (zephir_instance_of_ev(document, arangodbclient_document_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&documentId, document, "getid", NULL, 0);
		zephir_check_call_status();
	}
	_0 = !(Z_TYPE_P(&documentId) == IS_LONG);
	if (!(_0)) {
		_0 = Z_TYPE_P(&documentId) == IS_STRING;
	}
	_1 = _0;
	if (!(_1)) {
		ZEPHIR_CALL_FUNCTION(&_2, "is_float", NULL, 8, &documentId);
		zephir_check_call_status();
		_1 = zephir_is_true(&_2);
	}
	_3 = _1;
	if (!(_3)) {
		ZEPHIR_INIT_VAR(&_4);
		zephir_fast_trim(&_4, &documentId, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
		_3 = ZEPHIR_IS_STRING_IDENTICAL(&_4, "");
	}
	if (_3) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Cannot alter a document without a document id", "arangodbclient/edgehandler.zep", 327);
		return;
	}
	RETURN_CCTOR(&documentId);

}

PHP_METHOD(ArangoDBClient_EdgeHandler, getRevision) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *document, document_sub, revision;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&revision);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &document);



	ZEPHIR_INIT_VAR(&revision);
	ZVAL_NULL(&revision);
	if (zephir_instance_of_ev(document, arangodbclient_document_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&revision, document, "getrevision", NULL, 0);
		zephir_check_call_status();
	}
	RETURN_CCTOR(&revision);

}

