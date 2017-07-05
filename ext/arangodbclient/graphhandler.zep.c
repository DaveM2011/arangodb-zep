
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
#include "kernel/memory.h"
#include "kernel/fcall.h"
#include "kernel/array.h"
#include "kernel/object.h"
#include "kernel/exception.h"
#include "kernel/operators.h"
#include "kernel/concat.h"
#include "kernel/string.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_GraphHandler) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, GraphHandler, arangodbclient, graphhandler, arangodbclient_handler_ce, arangodbclient_graphhandler_method_entry, 0);

	zend_declare_property_null(arangodbclient_graphhandler_ce, SL("cache"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_graphhandler_ce, SL("cacheEnabled"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_graphhandler_ce, SL("batchsize"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_graphhandler_ce, SL("count"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_graphhandler_ce, SL("limit"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("ENTRY_GRAPH"), "graph");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_REVISION"), "revision");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_VERTICES"), "vertices");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_EDGES"), "edges");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_KEY"), "_key");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_COLLECTION"), "collection");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_COLLECTIONS"), "collections");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("KEY_FROM"), "_from");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("KEY_TO"), "_to");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_NAME"), "name");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_EDGE_DEFINITION"), "edgeDefinition");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_EDGE_DEFINITIONS"), "edgeDefinitions");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_ORPHAN_COLLECTIONS"), "orphanCollections");

	zephir_declare_class_constant_string(arangodbclient_graphhandler_ce, SL("OPTION_DROP_COLLECTION"), "dropCollection");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_GraphHandler, createGraph) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph, graph_sub, edgeDefinitions, ed, params, url, response, json, _0, *_1, _3, _4, _5, _6, _7, _8, _9, _10, _11, _2$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&edgeDefinitions);
	ZVAL_UNDEF(&ed);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_2$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &graph);



	ZEPHIR_INIT_VAR(&edgeDefinitions);
	array_init(&edgeDefinitions);
	ZEPHIR_CALL_METHOD(&_0, graph, "getedgedefinitions", NULL, 0);
	zephir_check_call_status();
	zephir_is_iterable(&_0, 0, "arangodbclient/graphhandler.zep", 32);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_0), _1)
	{
		ZEPHIR_INIT_NVAR(&ed);
		ZVAL_COPY(&ed, _1);
		ZEPHIR_CALL_METHOD(&_2$$3, &ed, "transformtoarray", NULL, 0);
		zephir_check_call_status();
		zephir_array_append(&edgeDefinitions, &_2$$3, PH_SEPARATE, "arangodbclient/graphhandler.zep", 30);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&ed);
	ZEPHIR_INIT_VAR(&params);
	zephir_create_array(&params, 3, 0 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(&_3, graph, "getkey", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("name"), &_3, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&params, SL("edgeDefinitions"), &edgeDefinitions, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_3, graph, "getorphancollections", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("orphanCollections"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&url);
	ZVAL_STRING(&url, "/_api/gharial");
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &params);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_3, "post", NULL, 0, &url, &_4);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_5, &json, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 36 TSRMLS_CC);
	zephir_array_fetch_string(&_6, &_5, SL("_id"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 36 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, graph, "setinternalid", NULL, 0, &_6);
	zephir_check_call_status();
	zephir_array_fetch_string(&_7, &json, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 37 TSRMLS_CC);
	zephir_array_fetch_string(&_8, &_7, SL("name"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 37 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_9);
	ZVAL_STRING(&_9, "_key");
	ZEPHIR_CALL_METHOD(NULL, graph, "set", NULL, 0, &_9, &_8);
	zephir_check_call_status();
	zephir_array_fetch_string(&_10, &json, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 38 TSRMLS_CC);
	zephir_array_fetch_string(&_11, &_10, SL("_rev"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 38 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, graph, "setrevision", NULL, 0, &_11);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(graph, "getall", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_GraphHandler, getGraph) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL, *_4 = NULL;
	zval options, _1;
	zval *graph_param = NULL, *options_param = NULL, __$false, url, response, e, data, result, _2, _5, _6, _7, _8, _3$$3;
	zval graph;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &graph_param, &options_param);

	zephir_get_strval(&graph, graph_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &graph);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_3$$3, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&response, &_3$$3, "get", NULL, 0, &url);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_2);
		ZVAL_OBJ(&_2, EG(exception));
		Z_ADDREF_P(&_2);
		if (zephir_instance_of_ev(&_2, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_2);
			zephir_throw_exception_debug(&e, "arangodbclient/graphhandler.zep", 50 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
			RETURN_MM_BOOL(0);
		}
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_5, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 55 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&result, arangodbclient_graph_ce, "createfromarray", &_4, 0, &_5, &options);
	zephir_check_call_status();
	zephir_array_fetch_string(&_6, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 56 TSRMLS_CC);
	zephir_array_fetch_string(&_7, &_6, SL("name"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 56 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_8);
	ZVAL_STRING(&_8, "_key");
	ZEPHIR_CALL_METHOD(NULL, &result, "set", NULL, 0, &_8, &_7);
	zephir_check_call_status();
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_GraphHandler, setBatchsize) {

	zval *batchsize_param = NULL, _0;
	zend_long batchsize;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	zephir_fetch_params(0, 1, 0, &batchsize_param);

	batchsize = zephir_get_intval(batchsize_param);


	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_LONG(&_0, batchsize);
	zephir_update_property_zval(this_ptr, SL("batchsize"), &_0);

}

PHP_METHOD(ArangoDBClient_GraphHandler, setCount) {

	zval *count_param = NULL, _0;
	zend_long count;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	zephir_fetch_params(0, 1, 0, &count_param);

	count = zephir_get_intval(count_param);


	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_LONG(&_0, count);
	zephir_update_property_zval(this_ptr, SL("count"), &_0);

}

PHP_METHOD(ArangoDBClient_GraphHandler, setLimit) {

	zval *limit_param = NULL, _0;
	zend_long limit;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	zephir_fetch_params(0, 1, 0, &limit_param);

	limit = zephir_get_intval(limit_param);


	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_LONG(&_0, limit);
	zephir_update_property_zval(this_ptr, SL("limit"), &_0);

}

PHP_METHOD(ArangoDBClient_GraphHandler, properties) {

	zval _3;
	zval _2;
	zephir_fcall_cache_entry *_1 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph = NULL, graph_sub, url, result, _4, _0$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &graph);

	ZEPHIR_SEPARATE_PARAM(graph);


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&_2);
	ZEPHIR_CONCAT_SS(&_2, "/_api/document", "/_graphs");
	ZEPHIR_INIT_VAR(&_3);
	zephir_create_array(&_3, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_3, graph);
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_2, &_3);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&result, &_4, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&result, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_GraphHandler, dropGraph) {

	zval _2, _6;
	zephir_fcall_cache_entry *_1 = NULL, *_5 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool dropCollections;
	zval *graph = NULL, graph_sub, *dropCollections_param = NULL, url, _3, _4, _0$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_6);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &graph, &dropCollections_param);

	ZEPHIR_SEPARATE_PARAM(graph);
	if (!dropCollections_param) {
		dropCollections = 1;
	} else {
		dropCollections = zephir_get_boolval(dropCollections_param);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, graph);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_6);
	zephir_create_array(&_6, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_BOOL(&_3, dropCollections);
	zephir_array_update_string(&_6, SL("dropCollections"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_CE_STATIC(&_4, arangodbclient_urlhelper_ce, "appendparamsurl", &_5, 0, &url, &_6);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_4);
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_4, "delete", NULL, 0, &url);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_GraphHandler, addOrphanCollection) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL, *_8 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval orphanCollection;
	zval *graph = NULL, graph_sub, *orphanCollection_param = NULL, __$false, url, options, data, response, e, result, _3, _9, _10, _11, _12, _0$$3, _4$$4, _5$$4, _6$$5, _7$$5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&orphanCollection);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &graph, &orphanCollection_param);

	ZEPHIR_SEPARATE_PARAM(graph);
	zephir_get_strval(&orphanCollection, orphanCollection_param);


	ZEPHIR_INIT_VAR(&options);
	array_init(&options);
	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, graph);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "vertex");
	zephir_array_fast_append(&_2, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&data, SL("collection"), &orphanCollection, PH_COPY | PH_SEPARATE);

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_4$$4, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&_5$$4, this_ptr, "json_encode_wrapper", NULL, 0, &data);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&response, &_4$$4, "post", NULL, 0, &url, &_5$$4);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_3);
		ZVAL_OBJ(&_3, EG(exception));
		Z_ADDREF_P(&_3);
		if (zephir_instance_of_ev(&_3, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_3);
			ZEPHIR_INIT_VAR(&_6$$5);
			object_init_ex(&_6$$5, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_7$$5, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_6$$5, "__construct", NULL, 37, &_7$$5);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_6$$5, "arangodbclient/graphhandler.zep", 112 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_9, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 116 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&result, arangodbclient_graph_ce, "createfromarray", &_8, 0, &_9, &options);
	zephir_check_call_status();
	zephir_array_fetch_string(&_10, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 117 TSRMLS_CC);
	zephir_array_fetch_string(&_11, &_10, SL("name"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 117 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_12);
	ZVAL_STRING(&_12, "_key");
	ZEPHIR_CALL_METHOD(NULL, &result, "set", NULL, 0, &_12, &_11);
	zephir_check_call_status();
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_GraphHandler, deleteOrphanCollection) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL, *_5 = NULL, *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool dropCollection;
	zval orphanCollection;
	zval *graph = NULL, graph_sub, *orphanCollection_param = NULL, *dropCollection_param = NULL, __$false, url, options, data, response, e, result, _3, _4, _10, _11, _12, _13, _0$$3, _6$$4, _7$$5, _8$$5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&orphanCollection);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &graph, &orphanCollection_param, &dropCollection_param);

	ZEPHIR_SEPARATE_PARAM(graph);
	zephir_get_strval(&orphanCollection, orphanCollection_param);
	if (!dropCollection_param) {
		dropCollection = 0;
	} else {
		dropCollection = zephir_get_boolval(dropCollection_param);
	}


	ZEPHIR_INIT_VAR(&options);
	array_init(&options);
	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 3, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, graph);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "vertex");
	zephir_array_fast_append(&_2, &_3);
	zephir_array_fast_append(&_2, &orphanCollection);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_BOOL(&_3, dropCollection);
	zephir_array_update_string(&data, SL("dropCollection"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_CE_STATIC(&_4, arangodbclient_urlhelper_ce, "appendparamsurl", &_5, 0, &url, &data);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_4);

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_6$$4, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&response, &_6$$4, "delete", NULL, 0, &url);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_3);
		ZVAL_OBJ(&_3, EG(exception));
		Z_ADDREF_P(&_3);
		if (zephir_instance_of_ev(&_3, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_3);
			ZEPHIR_INIT_VAR(&_7$$5);
			object_init_ex(&_7$$5, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_8$$5, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_7$$5, "__construct", NULL, 37, &_8$$5);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_7$$5, "arangodbclient/graphhandler.zep", 134 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_10, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 138 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&result, arangodbclient_graph_ce, "createfromarray", &_9, 0, &_10, &options);
	zephir_check_call_status();
	zephir_array_fetch_string(&_11, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 139 TSRMLS_CC);
	zephir_array_fetch_string(&_12, &_11, SL("name"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 139 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_13);
	ZVAL_STRING(&_13, "_key");
	ZEPHIR_CALL_METHOD(NULL, &result, "set", NULL, 0, &_13, &_12);
	zephir_check_call_status();
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_GraphHandler, getVertexCollections) {

	zend_bool _1, _2, _6$$5, _35$$14;
	zephir_fcall_cache_entry *_4 = NULL, *_21 = NULL, *_25 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _22, _26$$9;
	zval *graph = NULL, graph_sub, *options_param = NULL, excludeOrphans, _useCache, url, connection, batchCaptureMode, response, e, data, _3, _23, _34, _0$$3, _5$$4, _7$$5, _8$$5, _9$$5, _10$$5, _11$$6, _12$$6, _13$$6, _14$$6, _15$$7, _16$$7, _17$$7, _18$$8, _19$$8, _20$$8, _24$$9, _27$$10, _28$$10, _29$$11, _30$$12, _31$$12, _32$$13, _33$$13, _36$$14, _37$$14, _38$$14, _39$$14;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&excludeOrphans);
	ZVAL_UNDEF(&_useCache);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&connection);
	ZVAL_UNDEF(&batchCaptureMode);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_23);
	ZVAL_UNDEF(&_34);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&_9$$5);
	ZVAL_UNDEF(&_10$$5);
	ZVAL_UNDEF(&_11$$6);
	ZVAL_UNDEF(&_12$$6);
	ZVAL_UNDEF(&_13$$6);
	ZVAL_UNDEF(&_14$$6);
	ZVAL_UNDEF(&_15$$7);
	ZVAL_UNDEF(&_16$$7);
	ZVAL_UNDEF(&_17$$7);
	ZVAL_UNDEF(&_18$$8);
	ZVAL_UNDEF(&_19$$8);
	ZVAL_UNDEF(&_20$$8);
	ZVAL_UNDEF(&_24$$9);
	ZVAL_UNDEF(&_27$$10);
	ZVAL_UNDEF(&_28$$10);
	ZVAL_UNDEF(&_29$$11);
	ZVAL_UNDEF(&_30$$12);
	ZVAL_UNDEF(&_31$$12);
	ZVAL_UNDEF(&_32$$13);
	ZVAL_UNDEF(&_33$$13);
	ZVAL_UNDEF(&_36$$14);
	ZVAL_UNDEF(&_37$$14);
	ZVAL_UNDEF(&_38$$14);
	ZVAL_UNDEF(&_39$$14);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_22);
	ZVAL_UNDEF(&_26$$9);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &graph, &options_param);

	ZEPHIR_SEPARATE_PARAM(graph);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&excludeOrphans);
	ZVAL_BOOL(&excludeOrphans, 0);
	ZEPHIR_OBS_VAR(&_useCache);
	zephir_read_property(&_useCache, this_ptr, SL("cacheEnabled"), PH_NOISY_CC);
	_1 = zephir_is_true(&options);
	if (_1) {
		_1 = zephir_array_isset_string(&options, SL("excludeOrphans"));
	}
	_2 = _1;
	if (_2) {
		zephir_array_fetch_string(&_3, &options, SL("excludeOrphans"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 152 TSRMLS_CC);
		_2 = !((Z_TYPE_P(&_3) == IS_TRUE || Z_TYPE_P(&_3) == IS_FALSE));
	}
	if (_2) {
		zephir_array_fetch_string(&_5$$4, &options, SL("excludeOrphans"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 153 TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&excludeOrphans, arangodbclient_urlhelper_ce, "getboolstring", &_4, 0, &_5$$4);
		zephir_check_call_status();
	}
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_useCache)) {
		_6$$5 = ZEPHIR_IS_TRUE_IDENTICAL(&excludeOrphans);
		if (_6$$5) {
			zephir_read_property(&_7$$5, this_ptr, SL("cache"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch(&_8$$5, &_7$$5, graph, PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 156 TSRMLS_CC);
			zephir_array_fetch_string(&_9$$5, &_8$$5, SL("excludeOrphans"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 156 TSRMLS_CC);
			zephir_array_fetch_string(&_10$$5, &_9$$5, SL("result"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 156 TSRMLS_CC);
			_6$$5 = !(ZEPHIR_IS_EMPTY(&_10$$5));
		}
		if (_6$$5) {
			zephir_read_property(&_11$$6, this_ptr, SL("cache"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch(&_12$$6, &_11$$6, graph, PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 157 TSRMLS_CC);
			zephir_array_fetch_string(&_13$$6, &_12$$6, SL("excludeOrphans"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 157 TSRMLS_CC);
			zephir_array_fetch_string(&_14$$6, &_13$$6, SL("vertexCollections"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 157 TSRMLS_CC);
			RETURN_CTOR(&_14$$6);
		} else {
			zephir_read_property(&_15$$7, this_ptr, SL("cache"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch(&_16$$7, &_15$$7, graph, PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 159 TSRMLS_CC);
			zephir_array_fetch_string(&_17$$7, &_16$$7, SL("vertexCollections"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 159 TSRMLS_CC);
			if (!(ZEPHIR_IS_EMPTY(&_17$$7))) {
				zephir_read_property(&_18$$8, this_ptr, SL("cache"), PH_NOISY_CC | PH_READONLY);
				zephir_array_fetch(&_19$$8, &_18$$8, graph, PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 160 TSRMLS_CC);
				zephir_array_fetch_string(&_20$$8, &_19$$8, SL("vertexCollections"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 160 TSRMLS_CC);
				RETURN_CTOR(&_20$$8);
			}
		}
	}
	ZEPHIR_INIT_VAR(&_22);
	zephir_create_array(&_22, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_22, graph);
	ZEPHIR_INIT_VAR(&_23);
	ZVAL_STRING(&_23, "vertex");
	zephir_array_fast_append(&_22, &_23);
	ZEPHIR_INIT_NVAR(&_23);
	ZVAL_STRING(&_23, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_21, 0, &_23, &_22);
	zephir_check_call_status();
	if (ZEPHIR_IS_TRUE_IDENTICAL(&excludeOrphans)) {
		ZEPHIR_INIT_VAR(&_26$$9);
		zephir_create_array(&_26$$9, 1, 0 TSRMLS_CC);
		zephir_array_update_string(&_26$$9, SL("excludeOrphans"), &excludeOrphans, PH_COPY | PH_SEPARATE);
		ZEPHIR_CALL_CE_STATIC(&_24$$9, arangodbclient_urlhelper_ce, "appendparamsurl", &_25, 0, &url, &_26$$9);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(&url, &_24$$9);
	}
	ZEPHIR_CALL_METHOD(&connection, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&batchCaptureMode, &connection, "isinbatchcapturemode", NULL, 0);
	zephir_check_call_status();
	if (ZEPHIR_IS_TRUE_IDENTICAL(&batchCaptureMode)) {
		ZEPHIR_CALL_METHOD(&_27$$10, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status();
		ZVAL_BOOL(&_28$$10, 0);
		ZEPHIR_CALL_METHOD(NULL, &_27$$10, "setbatchrequest", NULL, 0, &_28$$10);
		zephir_check_call_status();
	}

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_29$$11, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&response, &_29$$11, "get", NULL, 0, &url);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_23);
		ZVAL_OBJ(&_23, EG(exception));
		Z_ADDREF_P(&_23);
		if (zephir_instance_of_ev(&_23, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_23);
			ZEPHIR_INIT_VAR(&_30$$12);
			object_init_ex(&_30$$12, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_31$$12, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_30$$12, "__construct", NULL, 37, &_31$$12);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_30$$12, "arangodbclient/graphhandler.zep", 176 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	if (ZEPHIR_IS_TRUE_IDENTICAL(&batchCaptureMode)) {
		ZEPHIR_CALL_METHOD(&_32$$13, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status();
		ZVAL_BOOL(&_33$$13, 1);
		ZEPHIR_CALL_METHOD(NULL, &_32$$13, "setbatchrequest", NULL, 0, &_33$$13);
		zephir_check_call_status();
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_34, &data, SL("collections"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 182 TSRMLS_CC);
	ZEPHIR_CPY_WRT(&data, &_34);
	ZEPHIR_MAKE_REF(&data);
	ZEPHIR_CALL_FUNCTION(NULL, "sort", NULL, 55, &data);
	ZEPHIR_UNREF(&data);
	zephir_check_call_status();
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_useCache)) {
		_35$$14 = ZEPHIR_IS_TRUE_IDENTICAL(&excludeOrphans);
		if (_35$$14) {
			zephir_read_property(&_36$$14, this_ptr, SL("cache"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch(&_37$$14, &_36$$14, graph, PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 185 TSRMLS_CC);
			zephir_array_fetch_string(&_38$$14, &_37$$14, SL("excludeOrphans"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 185 TSRMLS_CC);
			zephir_array_fetch_string(&_39$$14, &_38$$14, SL("vertexCollections"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 185 TSRMLS_CC);
			_35$$14 = !(ZEPHIR_IS_EMPTY(&_39$$14));
		}
		if (_35$$14) {
			zephir_update_property_array_multi(this_ptr, SL("cache"), &data TSRMLS_CC, SL("zss"), 5, graph, SL("excludeOrphans"), SL("vertexCollections"));
		} else {
			zephir_update_property_array_multi(this_ptr, SL("cache"), &data TSRMLS_CC, SL("zs"), 3, graph, SL("vertexCollections"));
		}
	}
	RETURN_CCTOR(&data);

}

PHP_METHOD(ArangoDBClient_GraphHandler, addEdgeDefinition) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL, *_8 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph = NULL, graph_sub, *edgeDefinition, edgeDefinition_sub, __$false, url, options, data, response, e, result, _3, _9, _10, _11, _12, _0$$3, _4$$4, _5$$4, _6$$5, _7$$5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&edgeDefinition_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &graph, &edgeDefinition);

	ZEPHIR_SEPARATE_PARAM(graph);


	ZEPHIR_INIT_VAR(&options);
	array_init(&options);
	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, graph);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "edge");
	zephir_array_fast_append(&_2, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, edgeDefinition, "transformtoarray", NULL, 0);
	zephir_check_call_status();

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_4$$4, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&_5$$4, this_ptr, "json_encode_wrapper", NULL, 0, &data);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&response, &_4$$4, "post", NULL, 0, &url, &_5$$4);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_3);
		ZVAL_OBJ(&_3, EG(exception));
		Z_ADDREF_P(&_3);
		if (zephir_instance_of_ev(&_3, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_3);
			ZEPHIR_INIT_VAR(&_6$$5);
			object_init_ex(&_6$$5, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_7$$5, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_6$$5, "__construct", NULL, 37, &_7$$5);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_6$$5, "arangodbclient/graphhandler.zep", 206 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_9, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 210 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&result, arangodbclient_graph_ce, "createfromarray", &_8, 0, &_9, &options);
	zephir_check_call_status();
	zephir_array_fetch_string(&_10, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 211 TSRMLS_CC);
	zephir_array_fetch_string(&_11, &_10, SL("name"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 211 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_12);
	ZVAL_STRING(&_12, "_key");
	ZEPHIR_CALL_METHOD(NULL, &result, "set", NULL, 0, &_12, &_11);
	zephir_check_call_status();
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_GraphHandler, deleteEdgeDefinition) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL, *_5 = NULL, *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool dropCollection;
	zval edgeDefinition;
	zval *graph = NULL, graph_sub, *edgeDefinition_param = NULL, *dropCollection_param = NULL, __$false, url, options, data, response, e, result, _3, _4, _10, _11, _12, _13, _0$$3, _6$$4, _7$$5, _8$$5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&edgeDefinition);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &graph, &edgeDefinition_param, &dropCollection_param);

	ZEPHIR_SEPARATE_PARAM(graph);
	zephir_get_strval(&edgeDefinition, edgeDefinition_param);
	if (!dropCollection_param) {
		dropCollection = 0;
	} else {
		dropCollection = zephir_get_boolval(dropCollection_param);
	}


	ZEPHIR_INIT_VAR(&options);
	array_init(&options);
	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 3, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, graph);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "edge");
	zephir_array_fast_append(&_2, &_3);
	zephir_array_fast_append(&_2, &edgeDefinition);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_BOOL(&_3, dropCollection);
	zephir_array_update_string(&data, SL("dropCollection"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_CE_STATIC(&_4, arangodbclient_urlhelper_ce, "appendparamsurl", &_5, 0, &url, &data);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_4);

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_6$$4, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&response, &_6$$4, "delete", NULL, 0, &url);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_3);
		ZVAL_OBJ(&_3, EG(exception));
		Z_ADDREF_P(&_3);
		if (zephir_instance_of_ev(&_3, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_3);
			ZEPHIR_INIT_VAR(&_7$$5);
			object_init_ex(&_7$$5, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_8$$5, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_7$$5, "__construct", NULL, 37, &_8$$5);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_7$$5, "arangodbclient/graphhandler.zep", 228 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_10, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 232 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&result, arangodbclient_graph_ce, "createfromarray", &_9, 0, &_10, &options);
	zephir_check_call_status();
	zephir_array_fetch_string(&_11, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 233 TSRMLS_CC);
	zephir_array_fetch_string(&_12, &_11, SL("name"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 233 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_13);
	ZVAL_STRING(&_13, "_key");
	ZEPHIR_CALL_METHOD(NULL, &result, "set", NULL, 0, &_13, &_12);
	zephir_check_call_status();
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_GraphHandler, getEdgeCollections) {

	zval _9;
	zend_bool _1, _19;
	zephir_fcall_cache_entry *_8 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph = NULL, graph_sub, _useCache, url, connection, batchCaptureMode, response, e, data, _2, _3, _4, _10, _18, _20, _21, _0$$3, _5$$4, _6$$4, _7$$4, _11$$5, _12$$5, _13$$6, _14$$7, _15$$7, _16$$8, _17$$8;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&_useCache);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&connection);
	ZVAL_UNDEF(&batchCaptureMode);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_18);
	ZVAL_UNDEF(&_20);
	ZVAL_UNDEF(&_21);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&_7$$4);
	ZVAL_UNDEF(&_11$$5);
	ZVAL_UNDEF(&_12$$5);
	ZVAL_UNDEF(&_13$$6);
	ZVAL_UNDEF(&_14$$7);
	ZVAL_UNDEF(&_15$$7);
	ZVAL_UNDEF(&_16$$8);
	ZVAL_UNDEF(&_17$$8);
	ZVAL_UNDEF(&_9);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &graph);

	ZEPHIR_SEPARATE_PARAM(graph);


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_OBS_VAR(&_useCache);
	zephir_read_property(&_useCache, this_ptr, SL("cacheEnabled"), PH_NOISY_CC);
	_1 = ZEPHIR_IS_TRUE_IDENTICAL(&_useCache);
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("cache"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch(&_3, &_2, graph, PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 245 TSRMLS_CC);
		ZEPHIR_OBS_VAR(&_4);
		zephir_array_fetch_string(&_4, &_3, SL("edgeCollections"), PH_NOISY, "arangodbclient/graphhandler.zep", 245 TSRMLS_CC);
		_1 = !(ZEPHIR_IS_EMPTY(&_4));
	}
	if (_1) {
		zephir_read_property(&_5$$4, this_ptr, SL("cache"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch(&_6$$4, &_5$$4, graph, PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 246 TSRMLS_CC);
		zephir_array_fetch_string(&_7$$4, &_6$$4, SL("edgeCollections"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 246 TSRMLS_CC);
		RETURN_CTOR(&_7$$4);
	}
	ZEPHIR_INIT_VAR(&_9);
	zephir_create_array(&_9, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_9, graph);
	ZEPHIR_INIT_VAR(&_10);
	ZVAL_STRING(&_10, "edge");
	zephir_array_fast_append(&_9, &_10);
	ZEPHIR_INIT_NVAR(&_10);
	ZVAL_STRING(&_10, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_8, 0, &_10, &_9);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&connection, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&batchCaptureMode, &connection, "isinbatchcapturemode", NULL, 0);
	zephir_check_call_status();
	if (ZEPHIR_IS_TRUE_IDENTICAL(&batchCaptureMode)) {
		ZEPHIR_CALL_METHOD(&_11$$5, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status();
		ZVAL_BOOL(&_12$$5, 0);
		ZEPHIR_CALL_METHOD(NULL, &_11$$5, "setbatchrequest", NULL, 0, &_12$$5);
		zephir_check_call_status();
	}

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_13$$6, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&response, &_13$$6, "get", NULL, 0, &url);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_10);
		ZVAL_OBJ(&_10, EG(exception));
		Z_ADDREF_P(&_10);
		if (zephir_instance_of_ev(&_10, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_10);
			ZEPHIR_INIT_VAR(&_14$$7);
			object_init_ex(&_14$$7, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_15$$7, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_14$$7, "__construct", NULL, 37, &_15$$7);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_14$$7, "arangodbclient/graphhandler.zep", 257 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	if (ZEPHIR_IS_TRUE_IDENTICAL(&batchCaptureMode)) {
		ZEPHIR_CALL_METHOD(&_16$$8, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status();
		ZVAL_BOOL(&_17$$8, 1);
		ZEPHIR_CALL_METHOD(NULL, &_16$$8, "setbatchrequest", NULL, 0, &_17$$8);
		zephir_check_call_status();
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_18, &data, SL("collections"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 263 TSRMLS_CC);
	ZEPHIR_CPY_WRT(&data, &_18);
	ZEPHIR_MAKE_REF(&data);
	ZEPHIR_CALL_FUNCTION(NULL, "sort", NULL, 55, &data);
	ZEPHIR_UNREF(&data);
	zephir_check_call_status();
	_19 = ZEPHIR_IS_TRUE_IDENTICAL(&_useCache);
	if (_19) {
		zephir_read_property(&_20, this_ptr, SL("cache"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch(&_18, &_20, graph, PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 265 TSRMLS_CC);
		ZEPHIR_OBS_VAR(&_21);
		zephir_array_fetch_string(&_21, &_18, SL("edgeCollections"), PH_NOISY, "arangodbclient/graphhandler.zep", 265 TSRMLS_CC);
		_19 = !(ZEPHIR_IS_EMPTY(&_21));
	}
	if (_19) {
		zephir_update_property_array_multi(this_ptr, SL("cache"), &data TSRMLS_CC, SL("zs"), 3, graph, SL("edgeCollections"));
	}
	RETURN_CCTOR(&data);

}

PHP_METHOD(ArangoDBClient_GraphHandler, replaceEdgeDefinition) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL, *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph = NULL, graph_sub, *edgeDefinition, edgeDefinition_sub, __$false, url, options, data, response, e, result, _3, _4, _10, _11, _12, _13, _0$$3, _5$$4, _6$$4, _7$$5, _8$$5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&edgeDefinition_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &graph, &edgeDefinition);

	ZEPHIR_SEPARATE_PARAM(graph);


	ZEPHIR_INIT_VAR(&options);
	array_init(&options);
	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 3, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, graph);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "edge");
	zephir_array_fast_append(&_2, &_3);
	ZEPHIR_CALL_METHOD(&_4, edgeDefinition, "getrelation", NULL, 0);
	zephir_check_call_status();
	zephir_array_fast_append(&_2, &_4);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, edgeDefinition, "transformtoarray", NULL, 0);
	zephir_check_call_status();

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_5$$4, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&_6$$4, this_ptr, "json_encode_wrapper", NULL, 0, &data);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&response, &_5$$4, "put", NULL, 0, &url, &_6$$4);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_3);
		ZVAL_OBJ(&_3, EG(exception));
		Z_ADDREF_P(&_3);
		if (zephir_instance_of_ev(&_3, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_3);
			ZEPHIR_INIT_VAR(&_7$$5);
			object_init_ex(&_7$$5, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_8$$5, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_7$$5, "__construct", NULL, 37, &_8$$5);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_7$$5, "arangodbclient/graphhandler.zep", 283 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_10, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 287 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&result, arangodbclient_graph_ce, "createfromarray", &_9, 0, &_10, &options);
	zephir_check_call_status();
	zephir_array_fetch_string(&_11, &data, SL("graph"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 288 TSRMLS_CC);
	zephir_array_fetch_string(&_12, &_11, SL("name"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 288 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_13);
	ZVAL_STRING(&_13, "_key");
	ZEPHIR_CALL_METHOD(NULL, &result, "set", NULL, 0, &_13, &_12);
	zephir_check_call_status();
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_GraphHandler, saveVertex) {

	zval _4;
	zephir_fcall_cache_entry *_2 = NULL, *_3 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph = NULL, graph_sub, *document = NULL, document_sub, *collection = NULL, collection_sub, __$null, vertexCollections, vertexCollectionsCount, data, url, response, batchPart, jsonArray, vertex, _5, _6, _7, _8, _9, _10, _0$$3, _1$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&vertexCollections);
	ZVAL_UNDEF(&vertexCollectionsCount);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&jsonArray);
	ZVAL_UNDEF(&vertex);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &graph, &document, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(document);
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	if (Z_TYPE_P(document) == IS_ARRAY) {
		ZEPHIR_CALL_CE_STATIC(&_1$$4, arangodbclient_vertex_ce, "createfromarray", &_2, 0, document);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(document, &_1$$4);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&vertexCollections, this_ptr, "getvertexcollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&vertexCollectionsCount);
		ZVAL_LONG(&vertexCollectionsCount, zephir_fast_count_int(&vertexCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 306);
			return;
		} else {
			if (ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &vertexCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 309 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_CALL_METHOD(&data, document, "getall", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_4);
	zephir_create_array(&_4, 3, 0 TSRMLS_CC);
	zephir_array_fast_append(&_4, graph);
	ZEPHIR_INIT_VAR(&_5);
	ZVAL_STRING(&_5, "vertex");
	zephir_array_fast_append(&_4, &_5);
	zephir_array_fast_append(&_4, collection);
	ZEPHIR_INIT_NVAR(&_5);
	ZVAL_STRING(&_5, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_3, 0, &_5, &_4);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_6, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_7, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_6, "post", NULL, 0, &url, &_7);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&batchPart, &response, "getbatchpart", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&batchPart)) {
		RETURN_CCTOR(&batchPart);
	}
	ZEPHIR_CALL_METHOD(&jsonArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&vertex);
	zephir_array_fetch_string(&vertex, &jsonArray, SL("vertex"), PH_NOISY, "arangodbclient/graphhandler.zep", 321 TSRMLS_CC);
	zephir_array_fetch_string(&_8, &vertex, SL("_id"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 322 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setinternalid", NULL, 0, &_8);
	zephir_check_call_status();
	zephir_array_fetch_string(&_9, &vertex, SL("_rev"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 323 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_9);
	zephir_check_call_status();
	ZVAL_BOOL(&_10, 0);
	ZEPHIR_CALL_METHOD(NULL, document, "setisnew", NULL, 0, &_10);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(document, "getinternalid", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_GraphHandler, getVertex) {

	zephir_fcall_cache_entry *_1 = NULL, *_5 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _2;
	zval *graph = NULL, graph_sub, *vertexId = NULL, vertexId_sub, *options_param = NULL, *collection = NULL, collection_sub, __$false, __$null, parts, tmpListCollectionVertexId, vertexCollections, vertexCollectionsCount, url, response, jsonArray, vertex, _3, _4, _0$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&vertexId_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&parts);
	ZVAL_UNDEF(&tmpListCollectionVertexId);
	ZVAL_UNDEF(&vertexCollections);
	ZVAL_UNDEF(&vertexCollectionsCount);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&jsonArray);
	ZVAL_UNDEF(&vertex);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &graph, &vertexId, &options_param, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(vertexId);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&parts);
	zephir_fast_explode_str(&parts, SL("/"), vertexId, LONG_MAX TSRMLS_CC);
	if (zephir_fast_count_int(&parts TSRMLS_CC) == 2) {
		ZEPHIR_CPY_WRT(&tmpListCollectionVertexId, &parts);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionVertexId, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 338 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(vertexId);
		zephir_array_fetch_long(vertexId, &tmpListCollectionVertexId, 1, PH_NOISY, "arangodbclient/graphhandler.zep", 339 TSRMLS_CC);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&vertexCollections, this_ptr, "getvertexcollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&vertexCollectionsCount);
		ZVAL_LONG(&vertexCollectionsCount, zephir_fast_count_int(&vertexCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 345);
			return;
		} else {
			if (ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &vertexCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 348 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 4, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, graph);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "vertex");
	zephir_array_fast_append(&_2, &_3);
	zephir_array_fast_append(&_2, collection);
	zephir_array_fast_append(&_2, vertexId);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_4, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&jsonArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&vertex);
	zephir_array_fetch_string(&vertex, &jsonArray, SL("vertex"), PH_NOISY, "arangodbclient/graphhandler.zep", 355 TSRMLS_CC);
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_RETURN_CALL_CE_STATIC(arangodbclient_vertex_ce, "createfromarray", &_5, 0, &vertex, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_GraphHandler, hasVertex) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph, graph_sub, *vertexId, vertexId_sub, e, _0, _1$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&vertexId_sub);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &graph, &vertexId);




	/* try_start_1: */

		ZEPHIR_CALL_METHOD(NULL, this_ptr, "getvertex", NULL, 0, graph, vertexId);
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
			zephir_throw_exception_debug(&e, "arangodbclient/graphhandler.zep", 371 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_GraphHandler, replaceVertex) {

	zephir_fcall_cache_entry *_7 = NULL, *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _8;
	zval *graph = NULL, graph_sub, *vertexId = NULL, vertexId_sub, *document, document_sub, *options_param = NULL, *collection = NULL, collection_sub, __$false, __$null, parts, tmpListCollectionVertexId, vertexCollections, vertexCollectionsCount, tmpArrayec687f95f403cbdafaae714b3a682f94, params, tmpArrayfbbc675502cffa36ae0f2c29d390e2a6, revision, data, url, response, jsonArray, vertex, _1, _2, _3, _4, _5, _10, _11, _12, _0$$3, _6$$11;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&vertexId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&parts);
	ZVAL_UNDEF(&tmpListCollectionVertexId);
	ZVAL_UNDEF(&vertexCollections);
	ZVAL_UNDEF(&vertexCollectionsCount);
	ZVAL_UNDEF(&tmpArrayec687f95f403cbdafaae714b3a682f94);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArrayfbbc675502cffa36ae0f2c29d390e2a6);
	ZVAL_UNDEF(&revision);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&jsonArray);
	ZVAL_UNDEF(&vertex);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_6$$11);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_8);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 2, &graph, &vertexId, &document, &options_param, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(vertexId);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&parts);
	zephir_fast_explode_str(&parts, SL("/"), vertexId, LONG_MAX TSRMLS_CC);
	if (zephir_fast_count_int(&parts TSRMLS_CC) == 2) {
		ZEPHIR_CPY_WRT(&tmpListCollectionVertexId, &parts);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionVertexId, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 386 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(vertexId);
		zephir_array_fetch_long(vertexId, &tmpListCollectionVertexId, 1, PH_NOISY, "arangodbclient/graphhandler.zep", 387 TSRMLS_CC);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&vertexCollections, this_ptr, "getvertexcollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&vertexCollectionsCount);
		ZVAL_LONG(&vertexCollectionsCount, zephir_fast_count_int(&vertexCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 393);
			return;
		} else {
			if (ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &vertexCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 396 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(&tmpArrayec687f95f403cbdafaae714b3a682f94);
	zephir_create_array(&tmpArrayec687f95f403cbdafaae714b3a682f94, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArrayec687f95f403cbdafaae714b3a682f94, SL("revision"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_1);
	zephir_fast_array_merge(&_1, &tmpArrayec687f95f403cbdafaae714b3a682f94, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_1);
	ZEPHIR_INIT_VAR(&tmpArrayfbbc675502cffa36ae0f2c29d390e2a6);
	zephir_create_array(&tmpArrayfbbc675502cffa36ae0f2c29d390e2a6, 2, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "waitForSync");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArrayfbbc675502cffa36ae0f2c29d390e2a6, SL("waitForSync"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "policy");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArrayfbbc675502cffa36ae0f2c29d390e2a6, SL("policy"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArrayfbbc675502cffa36ae0f2c29d390e2a6);
	zephir_check_call_status();
	zephir_array_fetch_string(&_4, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 404 TSRMLS_CC);
	zephir_array_fetch_string(&_5, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 409 TSRMLS_CC);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_4)) {
		ZEPHIR_CALL_METHOD(&revision, document, "getrevision", NULL, 0);
		zephir_check_call_status();
		if (Z_TYPE_P(&revision) != IS_NULL) {
			zephir_array_update_string(&params, SL("rev"), &revision, PH_COPY | PH_SEPARATE);
		}
	} else if (zephir_is_true(&_5)) {
		zephir_array_fetch_string(&_6$$11, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 410 TSRMLS_CC);
		zephir_array_update_string(&params, SL("rev"), &_6$$11, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_CALL_METHOD(&data, document, "getall", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_8);
	zephir_create_array(&_8, 4, 0 TSRMLS_CC);
	zephir_array_fast_append(&_8, graph);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "vertex");
	zephir_array_fast_append(&_8, &_3);
	zephir_array_fast_append(&_8, collection);
	zephir_array_fast_append(&_8, vertexId);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_7, 0, &_3, &_8);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_2, arangodbclient_urlhelper_ce, "appendparamsurl", &_9, 0, &url, &params);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_2);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_10, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_2, "put", NULL, 0, &url, &_10);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&jsonArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&vertex);
	zephir_array_fetch_string(&vertex, &jsonArray, SL("vertex"), PH_NOISY, "arangodbclient/graphhandler.zep", 417 TSRMLS_CC);
	zephir_array_fetch_string(&_11, &vertex, SL("_id"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 418 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setinternalid", NULL, 0, &_11);
	zephir_check_call_status();
	zephir_array_fetch_string(&_12, &vertex, SL("_rev"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 419 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_12);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_GraphHandler, updateVertex) {

	zephir_fcall_cache_entry *_7 = NULL, *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _8;
	zval *graph = NULL, graph_sub, *vertexId = NULL, vertexId_sub, *document, document_sub, *options_param = NULL, *collection = NULL, collection_sub, __$false, __$true, __$null, parts, tmpListCollectionVertexId, vertexCollections, vertexCollectionsCount, tmpArray01ad48f8e07ecb793e62305636d8be8e, params, tmpArraye10a612e7942e8ec5540d0a6f302e409, revision, url, result, json, vertex, _1, _2, _3, _4, _5, _10, _11, _12, _0$$3, _6$$11;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&vertexId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&parts);
	ZVAL_UNDEF(&tmpListCollectionVertexId);
	ZVAL_UNDEF(&vertexCollections);
	ZVAL_UNDEF(&vertexCollectionsCount);
	ZVAL_UNDEF(&tmpArray01ad48f8e07ecb793e62305636d8be8e);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArraye10a612e7942e8ec5540d0a6f302e409);
	ZVAL_UNDEF(&revision);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&vertex);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_6$$11);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_8);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 2, &graph, &vertexId, &document, &options_param, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(vertexId);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&parts);
	zephir_fast_explode_str(&parts, SL("/"), vertexId, LONG_MAX TSRMLS_CC);
	if (zephir_fast_count_int(&parts TSRMLS_CC) == 2) {
		ZEPHIR_CPY_WRT(&tmpListCollectionVertexId, &parts);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionVertexId, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 433 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(vertexId);
		zephir_array_fetch_long(vertexId, &tmpListCollectionVertexId, 1, PH_NOISY, "arangodbclient/graphhandler.zep", 434 TSRMLS_CC);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&vertexCollections, this_ptr, "getvertexcollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&vertexCollectionsCount);
		ZVAL_LONG(&vertexCollectionsCount, zephir_fast_count_int(&vertexCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 440);
			return;
		} else {
			if (ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &vertexCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 443 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(&tmpArray01ad48f8e07ecb793e62305636d8be8e);
	zephir_create_array(&tmpArray01ad48f8e07ecb793e62305636d8be8e, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArray01ad48f8e07ecb793e62305636d8be8e, SL("revision"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_1);
	zephir_fast_array_merge(&_1, &tmpArray01ad48f8e07ecb793e62305636d8be8e, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_1);
	ZEPHIR_INIT_VAR(&tmpArraye10a612e7942e8ec5540d0a6f302e409);
	zephir_create_array(&tmpArraye10a612e7942e8ec5540d0a6f302e409, 3, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "waitForSync");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArraye10a612e7942e8ec5540d0a6f302e409, SL("waitForSync"), &_2, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArraye10a612e7942e8ec5540d0a6f302e409, SL("keepNull"), &__$true, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "policy");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArraye10a612e7942e8ec5540d0a6f302e409, SL("policy"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArraye10a612e7942e8ec5540d0a6f302e409);
	zephir_check_call_status();
	zephir_array_fetch_string(&_4, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 451 TSRMLS_CC);
	zephir_array_fetch_string(&_5, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 456 TSRMLS_CC);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_4)) {
		ZEPHIR_CALL_METHOD(&revision, document, "getrevision", NULL, 0);
		zephir_check_call_status();
		if (Z_TYPE_P(&revision) != IS_NULL) {
			zephir_array_update_string(&params, SL("rev"), &revision, PH_COPY | PH_SEPARATE);
		}
	} else if (zephir_is_true(&_5)) {
		zephir_array_fetch_string(&_6$$11, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 457 TSRMLS_CC);
		zephir_array_update_string(&params, SL("rev"), &_6$$11, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_8);
	zephir_create_array(&_8, 4, 0 TSRMLS_CC);
	zephir_array_fast_append(&_8, graph);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "vertex");
	zephir_array_fast_append(&_8, &_3);
	zephir_array_fast_append(&_8, collection);
	zephir_array_fast_append(&_8, vertexId);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_7, 0, &_3, &_8);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_2, arangodbclient_urlhelper_ce, "appendparamsurl", &_9, 0, &url, &params);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_2);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_11, document, "getall", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_10, this_ptr, "json_encode_wrapper", NULL, 0, &_11);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&result, &_2, "patch", NULL, 0, &url, &_10);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&json, &result, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&vertex);
	zephir_array_fetch_string(&vertex, &json, SL("vertex"), PH_NOISY, "arangodbclient/graphhandler.zep", 463 TSRMLS_CC);
	zephir_array_fetch_string(&_12, &vertex, SL("_rev"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 464 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_12);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_GraphHandler, removeVertex) {

	zephir_fcall_cache_entry *_3 = NULL, *_5 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _4;
	zval *graph = NULL, graph_sub, *vertexId = NULL, vertexId_sub, *revision = NULL, revision_sub, *options_param = NULL, *collection = NULL, collection_sub, __$true, __$null, parts, tmpListCollectionVertexId, vertexCollections, vertexCollectionsCount, params, tmpArrayfd67ccf8e2435652258796b4f6fb4281, url, _1, _2, _0$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&vertexId_sub);
	ZVAL_UNDEF(&revision_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&parts);
	ZVAL_UNDEF(&tmpListCollectionVertexId);
	ZVAL_UNDEF(&vertexCollections);
	ZVAL_UNDEF(&vertexCollectionsCount);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArrayfd67ccf8e2435652258796b4f6fb4281);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 3, &graph, &vertexId, &revision, &options_param, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(vertexId);
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
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&parts);
	zephir_fast_explode_str(&parts, SL("/"), vertexId, LONG_MAX TSRMLS_CC);
	if (zephir_fast_count_int(&parts TSRMLS_CC) == 2) {
		ZEPHIR_CPY_WRT(&tmpListCollectionVertexId, &parts);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionVertexId, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 478 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(vertexId);
		zephir_array_fetch_long(vertexId, &tmpListCollectionVertexId, 1, PH_NOISY, "arangodbclient/graphhandler.zep", 479 TSRMLS_CC);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&vertexCollections, this_ptr, "getvertexcollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&vertexCollectionsCount);
		ZVAL_LONG(&vertexCollectionsCount, zephir_fast_count_int(&vertexCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 485);
			return;
		} else {
			if (ZEPHIR_IS_LONG(&vertexCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &vertexCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 488 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(&tmpArrayfd67ccf8e2435652258796b4f6fb4281);
	zephir_create_array(&tmpArrayfd67ccf8e2435652258796b4f6fb4281, 3, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "waitForSync");
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnectionoption", NULL, 0, &_2);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArrayfd67ccf8e2435652258796b4f6fb4281, SL("waitForSync"), &_1, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArrayfd67ccf8e2435652258796b4f6fb4281, SL("keepNull"), &__$true, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "policy");
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnectionoption", NULL, 0, &_2);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArrayfd67ccf8e2435652258796b4f6fb4281, SL("policy"), &_1, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArrayfd67ccf8e2435652258796b4f6fb4281);
	zephir_check_call_status();
	if (Z_TYPE_P(revision) != IS_NULL) {
		zephir_array_update_string(&params, SL("rev"), revision, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_4);
	zephir_create_array(&_4, 4, 0 TSRMLS_CC);
	zephir_array_fast_append(&_4, graph);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "vertex");
	zephir_array_fast_append(&_4, &_2);
	zephir_array_fast_append(&_4, collection);
	zephir_array_fast_append(&_4, vertexId);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_3, 0, &_2, &_4);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_1, arangodbclient_urlhelper_ce, "appendparamsurl", &_5, 0, &url, &params);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_1);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_1, "delete", NULL, 0, &url);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_GraphHandler, saveEdge) {

	zval _5;
	zephir_fcall_cache_entry *_2 = NULL, *_4 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph = NULL, graph_sub, *from, from_sub, *to, to_sub, *label = NULL, label_sub, *document = NULL, document_sub, *collection = NULL, collection_sub, __$null, edgeCollections, edgeCollectionsCount, data, url, response, jsonArray, edge, _6, _7, _8, _9, _10, _11, _0$$3, _1$$8, _3$$9;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&from_sub);
	ZVAL_UNDEF(&to_sub);
	ZVAL_UNDEF(&label_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&edgeCollections);
	ZVAL_UNDEF(&edgeCollectionsCount);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&jsonArray);
	ZVAL_UNDEF(&edge);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$8);
	ZVAL_UNDEF(&_3$$9);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 2, &graph, &from, &to, &label, &document, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(document);
	if (!label) {
		label = &label_sub;
		label = &__$null;
	}
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&edgeCollections, this_ptr, "getedgecollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&edgeCollectionsCount);
		ZVAL_LONG(&edgeCollectionsCount, zephir_fast_count_int(&edgeCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 514);
			return;
		} else {
			if (ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &edgeCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 517 TSRMLS_CC);
			}
		}
	}
	if (Z_TYPE_P(document) == IS_ARRAY) {
		ZEPHIR_CALL_CE_STATIC(&_1$$8, arangodbclient_edge_ce, "createfromarray", &_2, 0, document);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(document, &_1$$8);
	}
	if (Z_TYPE_P(label) != IS_NULL) {
		ZEPHIR_INIT_VAR(&_3$$9);
		ZVAL_STRING(&_3$$9, "$label");
		ZEPHIR_CALL_METHOD(NULL, document, "set", NULL, 0, &_3$$9, label);
		zephir_check_call_status();
	}
	ZEPHIR_CALL_METHOD(NULL, document, "setfrom", NULL, 0, from);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, document, "setto", NULL, 0, to);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, document, "getall", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&data, SL("_from"), from, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&data, SL("_to"), to, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_5);
	zephir_create_array(&_5, 3, 0 TSRMLS_CC);
	zephir_array_fast_append(&_5, graph);
	ZEPHIR_INIT_VAR(&_6);
	ZVAL_STRING(&_6, "edge");
	zephir_array_fast_append(&_5, &_6);
	zephir_array_fast_append(&_5, collection);
	ZEPHIR_INIT_NVAR(&_6);
	ZVAL_STRING(&_6, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_4, 0, &_6, &_5);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_7, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_8, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_7, "post", NULL, 0, &url, &_8);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&jsonArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&edge);
	zephir_array_fetch_string(&edge, &jsonArray, SL("edge"), PH_NOISY, "arangodbclient/graphhandler.zep", 535 TSRMLS_CC);
	zephir_array_fetch_string(&_9, &edge, SL("_id"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 536 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setinternalid", NULL, 0, &_9);
	zephir_check_call_status();
	zephir_array_fetch_string(&_10, &edge, SL("_rev"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 537 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_10);
	zephir_check_call_status();
	ZVAL_BOOL(&_11, 0);
	ZEPHIR_CALL_METHOD(NULL, document, "setisnew", NULL, 0, &_11);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(document, "getinternalid", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_GraphHandler, getEdge) {

	zephir_fcall_cache_entry *_1 = NULL, *_5 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _2;
	zval *graph = NULL, graph_sub, *edgeId = NULL, edgeId_sub, *options_param = NULL, *collection = NULL, collection_sub, __$false, __$null, parts, tmpListCollectionEdgeId, edgeCollections, edgeCollectionsCount, url, response, jsonArray, edge, _3, _4, _0$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&edgeId_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&parts);
	ZVAL_UNDEF(&tmpListCollectionEdgeId);
	ZVAL_UNDEF(&edgeCollections);
	ZVAL_UNDEF(&edgeCollectionsCount);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&jsonArray);
	ZVAL_UNDEF(&edge);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &graph, &edgeId, &options_param, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(edgeId);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&parts);
	zephir_fast_explode_str(&parts, SL("/"), edgeId, LONG_MAX TSRMLS_CC);
	if (zephir_fast_count_int(&parts TSRMLS_CC) == 2) {
		ZEPHIR_CPY_WRT(&tmpListCollectionEdgeId, &parts);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionEdgeId, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 552 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(edgeId);
		zephir_array_fetch_long(edgeId, &tmpListCollectionEdgeId, 1, PH_NOISY, "arangodbclient/graphhandler.zep", 553 TSRMLS_CC);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&edgeCollections, this_ptr, "getedgecollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&edgeCollectionsCount);
		ZVAL_LONG(&edgeCollectionsCount, zephir_fast_count_int(&edgeCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 559);
			return;
		} else {
			if (ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &edgeCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 562 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 4, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, graph);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "edge");
	zephir_array_fast_append(&_2, &_3);
	zephir_array_fast_append(&_2, collection);
	zephir_array_fast_append(&_2, edgeId);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_4, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&jsonArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&edge);
	zephir_array_fetch_string(&edge, &jsonArray, SL("edge"), PH_NOISY, "arangodbclient/graphhandler.zep", 569 TSRMLS_CC);
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_RETURN_CALL_CE_STATIC(arangodbclient_edge_ce, "createfromarray", &_5, 0, &edge, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_GraphHandler, hasEdge) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *graph, graph_sub, *edgeId, edgeId_sub, e, _0, _1$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&edgeId_sub);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &graph, &edgeId);




	/* try_start_1: */

		ZEPHIR_CALL_METHOD(NULL, this_ptr, "getedge", NULL, 0, graph, edgeId);
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
			zephir_throw_exception_debug(&e, "arangodbclient/graphhandler.zep", 585 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_GraphHandler, replaceEdge) {

	zephir_fcall_cache_entry *_9 = NULL, *_11 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _10;
	zval *graph = NULL, graph_sub, *edgeId = NULL, edgeId_sub, *label, label_sub, *document, document_sub, *options_param = NULL, *collection = NULL, collection_sub, __$false, __$true, __$null, parts, tmpListCollectionEdgeId, edgeCollections, edgeCollectionsCount, tmpArray9a171814bae866c0cc8eb76de73e12f9, params, tmpArraybbe117b7d4080473a31c4ed228dafb2c, headers, revision, data, url, response, jsonArray, edge, _1, _2, _3, _4, _5, _12, _13, _14, _0$$3, _6$$10, _7$$11, _8$$12;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&edgeId_sub);
	ZVAL_UNDEF(&label_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&parts);
	ZVAL_UNDEF(&tmpListCollectionEdgeId);
	ZVAL_UNDEF(&edgeCollections);
	ZVAL_UNDEF(&edgeCollectionsCount);
	ZVAL_UNDEF(&tmpArray9a171814bae866c0cc8eb76de73e12f9);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArraybbe117b7d4080473a31c4ed228dafb2c);
	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&revision);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&jsonArray);
	ZVAL_UNDEF(&edge);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_6$$10);
	ZVAL_UNDEF(&_7$$11);
	ZVAL_UNDEF(&_8$$12);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_10);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 2, &graph, &edgeId, &label, &document, &options_param, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(edgeId);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&parts);
	zephir_fast_explode_str(&parts, SL("/"), edgeId, LONG_MAX TSRMLS_CC);
	if (zephir_fast_count_int(&parts TSRMLS_CC) == 2) {
		ZEPHIR_CPY_WRT(&tmpListCollectionEdgeId, &parts);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionEdgeId, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 600 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(edgeId);
		zephir_array_fetch_long(edgeId, &tmpListCollectionEdgeId, 1, PH_NOISY, "arangodbclient/graphhandler.zep", 601 TSRMLS_CC);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&edgeCollections, this_ptr, "getedgecollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&edgeCollectionsCount);
		ZVAL_LONG(&edgeCollectionsCount, zephir_fast_count_int(&edgeCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 607);
			return;
		} else {
			if (ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &edgeCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 610 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(&tmpArray9a171814bae866c0cc8eb76de73e12f9);
	zephir_create_array(&tmpArray9a171814bae866c0cc8eb76de73e12f9, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArray9a171814bae866c0cc8eb76de73e12f9, SL("revision"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_1);
	zephir_fast_array_merge(&_1, &tmpArray9a171814bae866c0cc8eb76de73e12f9, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_1);
	ZEPHIR_INIT_VAR(&tmpArraybbe117b7d4080473a31c4ed228dafb2c);
	zephir_create_array(&tmpArraybbe117b7d4080473a31c4ed228dafb2c, 4, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "waitForSync");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArraybbe117b7d4080473a31c4ed228dafb2c, SL("waitForSync"), &_2, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArraybbe117b7d4080473a31c4ed228dafb2c, SL("silent"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArraybbe117b7d4080473a31c4ed228dafb2c, SL("ignoreRevs"), &__$true, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "policy");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArraybbe117b7d4080473a31c4ed228dafb2c, SL("policy"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArraybbe117b7d4080473a31c4ed228dafb2c);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&headers);
	array_init(&headers);
	zephir_array_fetch_string(&_4, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 619 TSRMLS_CC);
	zephir_array_fetch_string(&_5, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 625 TSRMLS_CC);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_4)) {
		ZEPHIR_CALL_METHOD(&revision, document, "getrevision", NULL, 0);
		zephir_check_call_status();
		if (Z_TYPE_P(&revision) != IS_NULL) {
			zephir_array_update_string(&params, SL("ignoreRevs"), &__$false, PH_COPY | PH_SEPARATE);
			ZEPHIR_INIT_VAR(&_6$$10);
			ZEPHIR_CONCAT_SVS(&_6$$10, "\"", &revision, "\"");
			zephir_array_update_string(&headers, SL("if-match"), &_6$$10, PH_COPY | PH_SEPARATE);
		}
	} else if (zephir_is_true(&_5)) {
		ZEPHIR_OBS_NVAR(&revision);
		zephir_array_fetch_string(&revision, &options, SL("revision"), PH_NOISY, "arangodbclient/graphhandler.zep", 626 TSRMLS_CC);
		zephir_array_update_string(&params, SL("ignoreRevs"), &__$false, PH_COPY | PH_SEPARATE);
		ZEPHIR_INIT_VAR(&_7$$11);
		ZEPHIR_CONCAT_SVS(&_7$$11, "\"", &revision, "\"");
		zephir_array_update_string(&headers, SL("if-match"), &_7$$11, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_CALL_METHOD(&data, document, "getallforinsertupdate", NULL, 0);
	zephir_check_call_status();
	if (Z_TYPE_P(label) != IS_NULL) {
		ZEPHIR_INIT_VAR(&_8$$12);
		ZVAL_STRING(&_8$$12, "$label");
		ZEPHIR_CALL_METHOD(NULL, document, "set", NULL, 0, &_8$$12, label);
		zephir_check_call_status();
	}
	ZEPHIR_INIT_VAR(&_10);
	zephir_create_array(&_10, 4, 0 TSRMLS_CC);
	zephir_array_fast_append(&_10, graph);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "edge");
	zephir_array_fast_append(&_10, &_3);
	zephir_array_fast_append(&_10, collection);
	zephir_array_fast_append(&_10, edgeId);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_9, 0, &_3, &_10);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_2, arangodbclient_urlhelper_ce, "appendparamsurl", &_11, 0, &url, &params);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_2);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_12, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_2, "put", NULL, 0, &url, &_12, &headers);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&jsonArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&edge);
	zephir_array_fetch_string(&edge, &jsonArray, SL("edge"), PH_NOISY, "arangodbclient/graphhandler.zep", 638 TSRMLS_CC);
	zephir_array_fetch_string(&_13, &edge, SL("_id"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 639 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setinternalid", NULL, 0, &_13);
	zephir_check_call_status();
	zephir_array_fetch_string(&_14, &edge, SL("_rev"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 640 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_14);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_GraphHandler, updateEdge) {

	zephir_fcall_cache_entry *_8 = NULL, *_10 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _9;
	zval *graph = NULL, graph_sub, *edgeId = NULL, edgeId_sub, *label, label_sub, *document, document_sub, *options_param = NULL, *collection = NULL, collection_sub, __$false, __$true, __$null, parts, tmpListCollectionEdgeId, edgeCollections, edgeCollectionsCount, tmpArray63315bbb1e334d215d76517c969a943e, params, tmpArray8fb88a211506db9d5a99542ad5bc4ec1, revision, url, result, json, edge, _1, _2, _3, _4, _5, _11, _12, _13, _0$$3, _6$$11, _7$$12;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&edgeId_sub);
	ZVAL_UNDEF(&label_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&parts);
	ZVAL_UNDEF(&tmpListCollectionEdgeId);
	ZVAL_UNDEF(&edgeCollections);
	ZVAL_UNDEF(&edgeCollectionsCount);
	ZVAL_UNDEF(&tmpArray63315bbb1e334d215d76517c969a943e);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArray8fb88a211506db9d5a99542ad5bc4ec1);
	ZVAL_UNDEF(&revision);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&edge);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_6$$11);
	ZVAL_UNDEF(&_7$$12);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_9);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 2, &graph, &edgeId, &label, &document, &options_param, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(edgeId);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&parts);
	zephir_fast_explode_str(&parts, SL("/"), edgeId, LONG_MAX TSRMLS_CC);
	if (zephir_fast_count_int(&parts TSRMLS_CC) == 2) {
		ZEPHIR_CPY_WRT(&tmpListCollectionEdgeId, &parts);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionEdgeId, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 654 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(edgeId);
		zephir_array_fetch_long(edgeId, &tmpListCollectionEdgeId, 1, PH_NOISY, "arangodbclient/graphhandler.zep", 655 TSRMLS_CC);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&edgeCollections, this_ptr, "getedgecollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&edgeCollectionsCount);
		ZVAL_LONG(&edgeCollectionsCount, zephir_fast_count_int(&edgeCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 661);
			return;
		} else {
			if (ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &edgeCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 664 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(&tmpArray63315bbb1e334d215d76517c969a943e);
	zephir_create_array(&tmpArray63315bbb1e334d215d76517c969a943e, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArray63315bbb1e334d215d76517c969a943e, SL("revision"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_1);
	zephir_fast_array_merge(&_1, &tmpArray63315bbb1e334d215d76517c969a943e, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_1);
	ZEPHIR_INIT_VAR(&tmpArray8fb88a211506db9d5a99542ad5bc4ec1);
	zephir_create_array(&tmpArray8fb88a211506db9d5a99542ad5bc4ec1, 3, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "waitForSync");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray8fb88a211506db9d5a99542ad5bc4ec1, SL("waitForSync"), &_2, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray8fb88a211506db9d5a99542ad5bc4ec1, SL("keepNull"), &__$true, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "policy");
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnectionoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray8fb88a211506db9d5a99542ad5bc4ec1, SL("policy"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArray8fb88a211506db9d5a99542ad5bc4ec1);
	zephir_check_call_status();
	zephir_array_fetch_string(&_4, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 672 TSRMLS_CC);
	zephir_array_fetch_string(&_5, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 677 TSRMLS_CC);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_4)) {
		ZEPHIR_CALL_METHOD(&revision, document, "getrevision", NULL, 0);
		zephir_check_call_status();
		if (Z_TYPE_P(&revision) != IS_NULL) {
			zephir_array_update_string(&params, SL("rev"), &revision, PH_COPY | PH_SEPARATE);
		}
	} else if (zephir_is_true(&_5)) {
		zephir_array_fetch_string(&_6$$11, &options, SL("revision"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 678 TSRMLS_CC);
		zephir_array_update_string(&params, SL("rev"), &_6$$11, PH_COPY | PH_SEPARATE);
	}
	if (Z_TYPE_P(label) != IS_NULL) {
		ZEPHIR_INIT_VAR(&_7$$12);
		ZVAL_STRING(&_7$$12, "$label");
		ZEPHIR_CALL_METHOD(NULL, document, "set", NULL, 0, &_7$$12, label);
		zephir_check_call_status();
	}
	ZEPHIR_INIT_VAR(&_9);
	zephir_create_array(&_9, 4, 0 TSRMLS_CC);
	zephir_array_fast_append(&_9, graph);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "edge");
	zephir_array_fast_append(&_9, &_3);
	zephir_array_fast_append(&_9, collection);
	zephir_array_fast_append(&_9, edgeId);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_8, 0, &_3, &_9);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_2, arangodbclient_urlhelper_ce, "appendparamsurl", &_10, 0, &url, &params);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_2);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_12, document, "getall", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_11, this_ptr, "json_encode_wrapper", NULL, 0, &_12);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&result, &_2, "patch", NULL, 0, &url, &_11);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&json, &result, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&edge);
	zephir_array_fetch_string(&edge, &json, SL("edge"), PH_NOISY, "arangodbclient/graphhandler.zep", 687 TSRMLS_CC);
	zephir_array_fetch_string(&_13, &edge, SL("_rev"), PH_NOISY | PH_READONLY, "arangodbclient/graphhandler.zep", 688 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, document, "setrevision", NULL, 0, &_13);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_GraphHandler, removeEdge) {

	zephir_fcall_cache_entry *_3 = NULL, *_5 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _4;
	zval *graph = NULL, graph_sub, *edgeId = NULL, edgeId_sub, *revision = NULL, revision_sub, *options_param = NULL, *collection = NULL, collection_sub, __$true, __$null, parts, tmpListCollectionEdgeId, edgeCollections, edgeCollectionsCount, params, tmpArray9b9e6519b3d2ad0a1f13638bc199174e, url, _1, _2, _0$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&graph_sub);
	ZVAL_UNDEF(&edgeId_sub);
	ZVAL_UNDEF(&revision_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&parts);
	ZVAL_UNDEF(&tmpListCollectionEdgeId);
	ZVAL_UNDEF(&edgeCollections);
	ZVAL_UNDEF(&edgeCollectionsCount);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArray9b9e6519b3d2ad0a1f13638bc199174e);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 3, &graph, &edgeId, &revision, &options_param, &collection);

	ZEPHIR_SEPARATE_PARAM(graph);
	ZEPHIR_SEPARATE_PARAM(edgeId);
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
	if (!collection) {
		collection = &collection_sub;
		ZEPHIR_CPY_WRT(collection, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(collection);
	}


	if (zephir_instance_of_ev(graph, arangodbclient_graph_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_0$$3, graph, "getkey", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(graph, &_0$$3);
	}
	ZEPHIR_INIT_VAR(&parts);
	zephir_fast_explode_str(&parts, SL("/"), edgeId, LONG_MAX TSRMLS_CC);
	if (zephir_fast_count_int(&parts TSRMLS_CC) == 2) {
		ZEPHIR_CPY_WRT(&tmpListCollectionEdgeId, &parts);
		ZEPHIR_OBS_NVAR(collection);
		zephir_array_fetch_long(collection, &tmpListCollectionEdgeId, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 702 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(edgeId);
		zephir_array_fetch_long(edgeId, &tmpListCollectionEdgeId, 1, PH_NOISY, "arangodbclient/graphhandler.zep", 703 TSRMLS_CC);
	}
	if (Z_TYPE_P(collection) == IS_NULL) {
		ZEPHIR_CALL_METHOD(&edgeCollections, this_ptr, "getedgecollections", NULL, 0, graph);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&edgeCollectionsCount);
		ZVAL_LONG(&edgeCollectionsCount, zephir_fast_count_int(&edgeCollections TSRMLS_CC));
		if (!ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "A collection must be provided.", "arangodbclient/graphhandler.zep", 709);
			return;
		} else {
			if (ZEPHIR_IS_LONG_IDENTICAL(&edgeCollectionsCount, 1)) {
				ZEPHIR_OBS_NVAR(collection);
				zephir_array_fetch_long(collection, &edgeCollections, 0, PH_NOISY, "arangodbclient/graphhandler.zep", 712 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(&tmpArray9b9e6519b3d2ad0a1f13638bc199174e);
	zephir_create_array(&tmpArray9b9e6519b3d2ad0a1f13638bc199174e, 3, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "waitForSync");
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnectionoption", NULL, 0, &_2);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray9b9e6519b3d2ad0a1f13638bc199174e, SL("waitForSync"), &_1, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray9b9e6519b3d2ad0a1f13638bc199174e, SL("keepNull"), &__$true, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "policy");
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnectionoption", NULL, 0, &_2);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray9b9e6519b3d2ad0a1f13638bc199174e, SL("policy"), &_1, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&params, this_ptr, "includeoptionsinparams", NULL, 0, &options, &tmpArray9b9e6519b3d2ad0a1f13638bc199174e);
	zephir_check_call_status();
	if (Z_TYPE_P(revision) != IS_NULL) {
		zephir_array_update_string(&params, SL("rev"), revision, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_4);
	zephir_create_array(&_4, 4, 0 TSRMLS_CC);
	zephir_array_fast_append(&_4, graph);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "edge");
	zephir_array_fast_append(&_4, &_2);
	zephir_array_fast_append(&_4, collection);
	zephir_array_fast_append(&_4, edgeId);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/gharial");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_3, 0, &_2, &_4);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_1, arangodbclient_urlhelper_ce, "appendparamsurl", &_5, 0, &url, &params);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_1);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_1, "delete", NULL, 0, &url);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_GraphHandler, clearCache) {

	zval __$null;
	zval *this_ptr = getThis();

	ZVAL_NULL(&__$null);


	zephir_update_property_zval(this_ptr, SL("cache"), &__$null);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_GraphHandler, getCacheEnabled) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "cacheEnabled");

}

PHP_METHOD(ArangoDBClient_GraphHandler, setCacheEnabled) {

	zval *useCache_param = NULL, __$true, __$false;
	zend_bool useCache;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &useCache_param);

	useCache = zephir_get_boolval(useCache_param);


	if (useCache) {
		zephir_update_property_zval(this_ptr, SL("cacheEnabled"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("cacheEnabled"), &__$false);
	}
	RETURN_THISW();

}

