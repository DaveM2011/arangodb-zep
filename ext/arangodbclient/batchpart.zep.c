
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
#include "kernel/array.h"
#include "kernel/fcall.h"
#include "kernel/object.h"
#include "kernel/operators.h"
#include "kernel/concat.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_BatchPart) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, BatchPart, arangodbclient, batchpart, arangodbclient_batchpart_method_entry, 0);

	zend_declare_property_null(arangodbclient_batchpart_ce, SL("_cursorOptions"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batchpart_ce, SL("_id"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batchpart_ce, SL("_type"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batchpart_ce, SL("_request"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batchpart_ce, SL("_response"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batchpart_ce, SL("_batch"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_batchpart_ce, SL("_documentClass"), "\\ArangoDBClient\\Document", ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_batchpart_ce->create_object = zephir_init_properties_ArangoDBClient_BatchPart;
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_BatchPart, __construct) {

	zend_bool sanitize = 0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *batch, batch_sub, *id, id_sub, *type, type_sub, *request, request_sub, *response, response_sub, *options = NULL, options_sub, _0, _1, _3, _4, _2$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&batch_sub);
	ZVAL_UNDEF(&id_sub);
	ZVAL_UNDEF(&type_sub);
	ZVAL_UNDEF(&request_sub);
	ZVAL_UNDEF(&response_sub);
	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_2$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 6, 0, &batch, &id, &type, &request, &response, &options);

	ZEPHIR_SEPARATE_PARAM(options);


	sanitize = 0;
	ZEPHIR_INIT_VAR(&_0);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getcursoroptions", NULL, 0);
	zephir_check_call_status();
	zephir_fast_array_merge(&_0, options, &_1 TSRMLS_CC);
	ZEPHIR_CPY_WRT(options, &_0);
	if (zephir_array_isset_string(options, SL("_documentClass"))) {
		zephir_array_fetch_string(&_2$$3, options, SL("_documentClass"), PH_NOISY | PH_READONLY, "arangodbclient/batchpart.zep", 19 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setdocumentclass", NULL, 0, &_2$$3);
		zephir_check_call_status();
	}
	ZVAL_LONG(&_3, 6);
	ZEPHIR_MAKE_REF(options);
	ZEPHIR_CALL_FUNCTION(NULL, "extract", NULL, 11, options, &_3);
	ZEPHIR_UNREF(options);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setbatch", NULL, 0, batch);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setid", NULL, 0, id);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "settype", NULL, 0, type);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setrequest", NULL, 0, request);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setresponse", NULL, 0, response);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_STRING(&_0, "_sanitize");
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_BOOL(&_4, sanitize);
	zephir_update_property_array(this_ptr, SL("_cursorOptions"), &_0, &_4 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_BatchPart, setBatch) {

	zval *batch, batch_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&batch_sub);

	zephir_fetch_params(0, 1, 0, &batch);



	zephir_update_property_zval(this_ptr, SL("_batch"), batch);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_BatchPart, setId) {

	zval *id, id_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&id_sub);

	zephir_fetch_params(0, 1, 0, &id);



	zephir_update_property_zval(this_ptr, SL("_id"), id);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_BatchPart, getId) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_id");

}

PHP_METHOD(ArangoDBClient_BatchPart, setType) {

	zval *type, type_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&type_sub);

	zephir_fetch_params(0, 1, 0, &type);



	zephir_update_property_zval(this_ptr, SL("_type"), type);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_BatchPart, getType) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_type");

}

PHP_METHOD(ArangoDBClient_BatchPart, setRequest) {

	zval *request, request_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&request_sub);

	zephir_fetch_params(0, 1, 0, &request);



	zephir_update_property_zval(this_ptr, SL("_request"), request);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_BatchPart, getRequest) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_request");

}

PHP_METHOD(ArangoDBClient_BatchPart, setResponse) {

	zval *response, response_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&response_sub);

	zephir_fetch_params(0, 1, 0, &response);



	zephir_update_property_zval(this_ptr, SL("_response"), response);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_BatchPart, getResponse) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_response");

}

PHP_METHOD(ArangoDBClient_BatchPart, getHttpCode) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getresponse", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&_0, "gethttpcode", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_BatchPart, getProcessedResponse) {

	zend_class_entry *_5$$4, *_6$$6;
	zend_bool _1$$3, _7$$7, _12$$10, _18$$15;
	zval __$false, _documentClass, response, json, options, id, data, tmpArray9652f742a399008c9c81204e76ce67c6, _0, _2$$3, _4$$4, _8$$7, _9$$8, _10$$8, _13$$10, _14$$12, *_15$$12, _16$$13, _19$$15, _20$$17, _21$$17, _22$$17, _23$$17, _24$$17, _25$$18;
	zephir_fcall_cache_entry *_3 = NULL, *_11 = NULL, *_17 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&id);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&tmpArray9652f742a399008c9c81204e76ce67c6);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_8$$7);
	ZVAL_UNDEF(&_9$$8);
	ZVAL_UNDEF(&_10$$8);
	ZVAL_UNDEF(&_13$$10);
	ZVAL_UNDEF(&_14$$12);
	ZVAL_UNDEF(&_16$$13);
	ZVAL_UNDEF(&_19$$15);
	ZVAL_UNDEF(&_20$$17);
	ZVAL_UNDEF(&_21$$17);
	ZVAL_UNDEF(&_22$$17);
	ZVAL_UNDEF(&_23$$17);
	ZVAL_UNDEF(&_24$$17);
	ZVAL_UNDEF(&_25$$18);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	ZEPHIR_CALL_METHOD(&response, this_ptr, "getresponse", NULL, 0);
	zephir_check_call_status();
	zephir_read_property(&_0, this_ptr, SL("_type"), PH_NOISY_CC | PH_READONLY);
	do {
		if (ZEPHIR_IS_STRING(&_0, "first")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			_1$$3 = !(zephir_array_isset_string(&json, SL("error")));
			if (!(_1$$3)) {
				zephir_array_fetch_string(&_2$$3, &json, SL("error"), PH_NOISY | PH_READONLY, "arangodbclient/batchpart.zep", 94 TSRMLS_CC);
				_1$$3 = ZEPHIR_IS_FALSE_IDENTICAL(&_2$$3);
			}
			if (_1$$3) {
				ZEPHIR_CALL_METHOD(&options, this_ptr, "getcursoroptions", &_3, 0);
				zephir_check_call_status();
				zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
				zephir_array_fetch_string(&_4$$4, &json, SL("document"), PH_NOISY | PH_READONLY, "arangodbclient/batchpart.zep", 97 TSRMLS_CC);
				_5$$4 = zephir_fetch_class(&_documentClass TSRMLS_CC);
				ZEPHIR_CALL_CE_STATIC(&response, _5$$4, "createfromarray", NULL, 0, &_4$$4, &options);
				zephir_check_call_status();
			} else {
				ZEPHIR_INIT_NVAR(&response);
				ZVAL_BOOL(&response, 0);
			}
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "getdocument")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(&options, this_ptr, "getcursoroptions", &_3, 0);
			zephir_check_call_status();
			zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
			_6$$6 = zephir_fetch_class(&_documentClass TSRMLS_CC);
			ZEPHIR_CALL_CE_STATIC(&response, _6$$6, "createfromarray", NULL, 0, &json, &options);
			zephir_check_call_status();
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "document")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			_7$$7 = !(zephir_array_isset_string(&json, SL("error")));
			if (!(_7$$7)) {
				zephir_array_fetch_string(&_8$$7, &json, SL("error"), PH_NOISY | PH_READONLY, "arangodbclient/batchpart.zep", 110 TSRMLS_CC);
				_7$$7 = ZEPHIR_IS_FALSE_IDENTICAL(&_8$$7);
			}
			if (_7$$7) {
				ZEPHIR_OBS_VAR(&id);
				ZEPHIR_INIT_VAR(&_9$$8);
				ZEPHIR_CONCAT_VS(&_9$$8, &_documentClass, "::ENTRY_ID");
				ZEPHIR_CALL_FUNCTION(&_10$$8, "constant", NULL, 7, &_9$$8);
				zephir_check_call_status();
				zephir_array_fetch(&id, &json, &_10$$8, PH_NOISY, "arangodbclient/batchpart.zep", 111 TSRMLS_CC);
				ZEPHIR_CPY_WRT(&response, &id);
			}
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "getedge")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(&options, this_ptr, "getcursoroptions", &_3, 0);
			zephir_check_call_status();
			zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
			ZEPHIR_CALL_CE_STATIC(&response, arangodbclient_edge_ce, "createfromarray", &_11, 0, &json, &options);
			zephir_check_call_status();
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "edge")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			_12$$10 = !(zephir_array_isset_string(&json, SL("error")));
			if (!(_12$$10)) {
				zephir_array_fetch_string(&_13$$10, &json, SL("error"), PH_NOISY | PH_READONLY, "arangodbclient/batchpart.zep", 123 TSRMLS_CC);
				_12$$10 = ZEPHIR_IS_FALSE_IDENTICAL(&_13$$10);
			}
			if (_12$$10) {
				ZEPHIR_OBS_NVAR(&id);
				zephir_array_fetch_string(&id, &json, SL("_id"), PH_NOISY, "arangodbclient/batchpart.zep", 124 TSRMLS_CC);
				ZEPHIR_CPY_WRT(&response, &id);
			}
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "getedges")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(&options, this_ptr, "getcursoroptions", &_3, 0);
			zephir_check_call_status();
			zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
			ZEPHIR_INIT_NVAR(&response);
			array_init(&response);
			zephir_array_fetch_string(&_14$$12, &json, SL("edges"), PH_NOISY | PH_READONLY, "arangodbclient/batchpart.zep", 133 TSRMLS_CC);
			zephir_is_iterable(&_14$$12, 0, "arangodbclient/batchpart.zep", 136);
			ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_14$$12), _15$$12)
			{
				ZEPHIR_INIT_NVAR(&data);
				ZVAL_COPY(&data, _15$$12);
				ZEPHIR_CALL_CE_STATIC(&_16$$13, arangodbclient_edge_ce, "createfromarray", &_11, 0, &data, &options);
				zephir_check_call_status();
				zephir_array_append(&response, &_16$$13, PH_SEPARATE, "arangodbclient/batchpart.zep", 134);
			} ZEND_HASH_FOREACH_END();
			ZEPHIR_INIT_NVAR(&data);
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "getcollection")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_CE_STATIC(&response, arangodbclient_collection_ce, "createfromarray", &_17, 0, &json);
			zephir_check_call_status();
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "collection")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			_18$$15 = !(zephir_array_isset_string(&json, SL("error")));
			if (!(_18$$15)) {
				zephir_array_fetch_string(&_19$$15, &json, SL("error"), PH_NOISY | PH_READONLY, "arangodbclient/batchpart.zep", 143 TSRMLS_CC);
				_18$$15 = ZEPHIR_IS_FALSE_IDENTICAL(&_19$$15);
			}
			if (_18$$15) {
				ZEPHIR_OBS_NVAR(&id);
				zephir_array_fetch_string(&id, &json, SL("id"), PH_NOISY, "arangodbclient/batchpart.zep", 144 TSRMLS_CC);
				ZEPHIR_CPY_WRT(&response, &id);
			}
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "cursor") || ZEPHIR_IS_STRING(&_0, "all") || ZEPHIR_IS_STRING(&_0, "by")) {
			ZEPHIR_CALL_METHOD(&options, this_ptr, "getcursoroptions", &_3, 0);
			zephir_check_call_status();
			zephir_array_update_string(&options, SL("isNew"), &__$false, PH_COPY | PH_SEPARATE);
			ZEPHIR_INIT_VAR(&tmpArray9652f742a399008c9c81204e76ce67c6);
			zephir_create_array(&tmpArray9652f742a399008c9c81204e76ce67c6, 1, 0 TSRMLS_CC);
			ZEPHIR_OBS_VAR(&_20$$17);
			zephir_read_property(&_20$$17, this_ptr, SL("_documentClass"), PH_NOISY_CC);
			zephir_array_update_string(&tmpArray9652f742a399008c9c81204e76ce67c6, SL("_documentClass"), &_20$$17, PH_COPY | PH_SEPARATE);
			ZEPHIR_INIT_VAR(&_21$$17);
			zephir_fast_array_merge(&_21$$17, &tmpArray9652f742a399008c9c81204e76ce67c6, &options TSRMLS_CC);
			ZEPHIR_CPY_WRT(&options, &_21$$17);
			ZEPHIR_INIT_NVAR(&response);
			object_init_ex(&response, arangodbclient_cursor_ce);
			zephir_read_property(&_22$$17, this_ptr, SL("_batch"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_METHOD(&_23$$17, &_22$$17, "getconnection", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(&_24$$17, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &response, "__construct", NULL, 19, &_23$$17, &_24$$17, &options);
			zephir_check_call_status();
			break;
		}
		if (ZEPHIR_IS_STRING(&_0, "remove")) {
			ZEPHIR_CALL_METHOD(&json, &response, "getjson", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_INIT_NVAR(&response);
			zephir_create_array(&response, 2, 0 TSRMLS_CC);
			ZEPHIR_OBS_VAR(&_25$$18);
			zephir_array_fetch_string(&_25$$18, &json, SL("removed"), PH_NOISY, "arangodbclient/batchpart.zep", 159 TSRMLS_CC);
			zephir_array_update_string(&response, SL("removed"), &_25$$18, PH_COPY | PH_SEPARATE);
			ZEPHIR_OBS_NVAR(&_25$$18);
			zephir_array_fetch_string(&_25$$18, &json, SL("ignored"), PH_NOISY, "arangodbclient/batchpart.zep", 159 TSRMLS_CC);
			zephir_array_update_string(&response, SL("ignored"), &_25$$18, PH_COPY | PH_SEPARATE);
			break;
		}
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Could not determine response data type.", "arangodbclient/batchpart.zep", 162);
		return;
		break;
	} while(0);

	RETURN_CCTOR(&response);

}

PHP_METHOD(ArangoDBClient_BatchPart, getCursorOptions) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_cursorOptions");

}

PHP_METHOD(ArangoDBClient_BatchPart, setDocumentClass) {

	zval *classs_param = NULL;
	zval classs;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&classs);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &classs_param);

	zephir_get_strval(&classs, classs_param);


	zephir_update_property_zval(this_ptr, SL("_documentClass"), &classs);
	RETURN_THIS();

}

zend_object *zephir_init_properties_ArangoDBClient_BatchPart(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _2, _4, _1$$3, _3$$4, _5$$5;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_5$$5);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_response"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_response"), &_1$$3);
		}
		zephir_read_property(&_2, this_ptr, SL("_request"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_2) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_3$$4);
			array_init(&_3$$4);
			zephir_update_property_zval(this_ptr, SL("_request"), &_3$$4);
		}
		zephir_read_property(&_4, this_ptr, SL("_cursorOptions"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_4) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_5$$5);
			array_init(&_5$$5);
			zephir_update_property_zval(this_ptr, SL("_cursorOptions"), &_5$$5);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

