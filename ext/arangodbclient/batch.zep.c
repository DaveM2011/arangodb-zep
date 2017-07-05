
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
#include "ext/spl/spl_fixedarray.h"
#include "kernel/exception.h"
#include "kernel/string.h"
#include "kernel/concat.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Batch) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Batch, arangodbclient, batch, arangodbclient_batch_method_entry, 0);

	zend_declare_property_null(arangodbclient_batch_ce, SL("_batchResponse"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_batch_ce, SL("_processed"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batch_ce, SL("_batchParts"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batch_ce, SL("_nextBatchPartId"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batch_ce, SL("_batchPartCursorOptions"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batch_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_batch_ce, SL("_sanitize"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(arangodbclient_batch_ce, SL("_nextId"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_batch_ce, SL("batchSize"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_batch_ce, SL("_documentClass"), "\\ArangoDBClient\\Document", ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_batch_ce->create_object = zephir_init_properties_ArangoDBClient_Batch;
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Batch, __construct) {

	zend_bool startCapture = 0, sanitize = 0;
	zend_long ZEPHIR_LAST_CALL_STATUS, batchSize = 0;
	zval options, _5;
	zval *connection, connection_sub, *options_param = NULL, __$true, __$false, _0, _1, _2, _6, _3$$3, _4$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &connection, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	startCapture = 1;
	sanitize = 0;
	batchSize = 0;
	ZEPHIR_INIT_VAR(&_0);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getcursoroptions", NULL, 0);
	zephir_check_call_status();
	zephir_fast_array_merge(&_0, &options, &_1 TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_0);
	ZVAL_LONG(&_2, 6);
	ZEPHIR_MAKE_REF(&options);
	ZEPHIR_CALL_FUNCTION(NULL, "extract", NULL, 11, &options, &_2);
	ZEPHIR_UNREF(&options);
	zephir_check_call_status();
	if (sanitize) {
		zephir_update_property_zval(this_ptr, SL("_sanitize"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_sanitize"), &__$false);
	}
	ZEPHIR_INIT_ZVAL_NREF(_2);
	ZVAL_LONG(&_2, batchSize);
	zephir_update_property_zval(this_ptr, SL("batchSize"), &_2);
	zephir_read_property(&_2, this_ptr, SL("batchSize"), PH_NOISY_CC | PH_READONLY);
	if (ZEPHIR_GT_LONG(&_2, 0)) {
		ZEPHIR_INIT_VAR(&_3$$3);
		object_init_ex(&_3$$3, spl_ce_SplFixedArray);
		zephir_read_property(&_4$$3, this_ptr, SL("batchSize"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_METHOD(NULL, &_3$$3, "__construct", NULL, 12, &_4$$3);
		zephir_check_call_status();
		zephir_update_property_zval(this_ptr, SL("_batchParts"), &_3$$3);
	}
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setconnection", NULL, 0, connection);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_5);
	zephir_create_array(&_5, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_6);
	zephir_read_property(&_6, this_ptr, SL("_sanitize"), PH_NOISY_CC);
	zephir_array_update_string(&_5, SL("_sanitize"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_update_property_zval(this_ptr, SL("_batchPartCursorOptions"), &_5);
	if (startCapture == 1) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "startcapture", NULL, 0);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Batch, setConnection) {

	zval *connection, connection_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);

	zephir_fetch_params(0, 1, 0, &connection);



	zephir_update_property_zval(this_ptr, SL("_connection"), connection);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_Batch, startCapture) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();


	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(NULL, this_ptr, "activate", NULL, 0);
	zephir_check_call_status();
	RETURN_THIS();

}

PHP_METHOD(ArangoDBClient_Batch, stopCapture) {

	zend_bool _1;
	zval _0, _2, _3$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3$$3);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(&_0, this_ptr, "isactive", NULL, 0);
	zephir_check_call_status();
	_1 = zephir_is_true(&_0);
	if (_1) {
		ZEPHIR_CALL_METHOD(&_2, this_ptr, "iscapturing", NULL, 0);
		zephir_check_call_status();
		_1 = zephir_is_true(&_2);
	}
	if (_1) {
		ZVAL_BOOL(&_3$$3, 0);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setcapture", NULL, 0, &_3$$3);
		zephir_check_call_status();
		RETURN_THIS();
	} else {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Cannot stop capturing with this batch. Batch is not active...", "arangodbclient/batch.zep", 54);
		return;
	}

}

PHP_METHOD(ArangoDBClient_Batch, isActive) {

	zval activeBatch, _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&activeBatch);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&activeBatch, this_ptr, "getactive", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM_BOOL(ZEPHIR_IS_IDENTICAL(&activeBatch, this_ptr));

}

PHP_METHOD(ArangoDBClient_Batch, isCapturing) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getconnectioncapturemode", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Batch, activate) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setactive", NULL, 0);
	zephir_check_call_status();
	ZVAL_BOOL(&_0, 1);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setcapture", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_THIS();

}

PHP_METHOD(ArangoDBClient_Batch, setActive) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(NULL, &_0, "setactivebatch", NULL, 0, this_ptr);
	zephir_check_call_status();
	RETURN_THIS();

}

PHP_METHOD(ArangoDBClient_Batch, setCapture) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *state_param = NULL, _0, _1;
	zend_bool state;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &state_param);

	state = zephir_get_boolval(state_param);


	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	if (state) {
		ZVAL_BOOL(&_1, 1);
	} else {
		ZVAL_BOOL(&_1, 0);
	}
	ZEPHIR_CALL_METHOD(NULL, &_0, "setcapturebatch", NULL, 0, &_1);
	zephir_check_call_status();
	RETURN_THIS();

}

PHP_METHOD(ArangoDBClient_Batch, getActive) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *connection, connection_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &connection);



	ZEPHIR_CALL_METHOD(NULL, connection, "getactivebatch", NULL, 0);
	zephir_check_call_status();
	RETURN_THIS();

}

PHP_METHOD(ArangoDBClient_Batch, getConnectionCaptureMode) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *connection, connection_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &connection);



	ZEPHIR_RETURN_CALL_METHOD(connection, "isinbatchcapturemode", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Batch, setBatchRequest) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *state_param = NULL, __$true, __$false, _0, _1;
	zend_bool state;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &state_param);

	state = zephir_get_boolval(state_param);


	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	if (state) {
		ZVAL_BOOL(&_1, 1);
	} else {
		ZVAL_BOOL(&_1, 0);
	}
	ZEPHIR_CALL_METHOD(NULL, &_0, "setbatchrequest", NULL, 0, &_1);
	zephir_check_call_status();
	if (1) {
		zephir_update_property_zval(this_ptr, SL("_processed"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_processed"), &__$false);
	}
	RETURN_THIS();

}

PHP_METHOD(ArangoDBClient_Batch, nextBatchPartId) {

	zval *batchPartId, batchPartId_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&batchPartId_sub);

	zephir_fetch_params(0, 1, 0, &batchPartId);



	zephir_update_property_zval(this_ptr, SL("_nextBatchPartId"), batchPartId);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_Batch, nextBatchPartCursorOptions) {

	zval *batchPartCursorOptions, batchPartCursorOptions_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&batchPartCursorOptions_sub);

	zephir_fetch_params(0, 1, 0, &batchPartCursorOptions);



	zephir_update_property_zval(this_ptr, SL("_batchPartCursorOptions"), batchPartCursorOptions);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_Batch, append) {

	zval _17;
	zend_bool _4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *method, method_sub, *request, request_sub, __$null, type, nextNumeric, batchPartId, eol, result, response, batchPart, regs, _0, _1, _3, _5, _7, _12, _13, _14, _15, _16, _18, _2$$3, _6$$4, _8$$5, _9$$5, _10$$5, _11$$7;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&method_sub);
	ZVAL_UNDEF(&request_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&type);
	ZVAL_UNDEF(&nextNumeric);
	ZVAL_UNDEF(&batchPartId);
	ZVAL_UNDEF(&eol);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&regs);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_15);
	ZVAL_UNDEF(&_16);
	ZVAL_UNDEF(&_18);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&_9$$5);
	ZVAL_UNDEF(&_10$$5);
	ZVAL_UNDEF(&_11$$7);
	ZVAL_UNDEF(&_17);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &method, &request);



	ZEPHIR_INIT_VAR(&_0);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "%/_api/simple/(?P<simple>\\w*)|/_api/(?P<direct>\\w*)%ix");
	zephir_preg_match(&_0, &_1, request, &regs, 0, 0 , 0  TSRMLS_CC);
	if (!(zephir_array_isset_string(&regs, SL("direct")))) {
		ZEPHIR_INIT_VAR(&_2$$3);
		ZVAL_STRING(&_2$$3, "");
		zephir_array_update_string(&regs, SL("direct"), &_2$$3, PH_COPY | PH_SEPARATE);
	}
	zephir_array_fetch_string(&_3, &regs, SL("direct"), PH_NOISY | PH_READONLY, "arangodbclient/batch.zep", 128 TSRMLS_CC);
	if (!ZEPHIR_IS_STRING_IDENTICAL(&_3, "")) {
		ZEPHIR_OBS_VAR(&type);
		zephir_array_fetch_string(&type, &regs, SL("direct"), PH_NOISY, "arangodbclient/batch.zep", 128 TSRMLS_CC);
	} else {
		ZEPHIR_OBS_NVAR(&type);
		zephir_array_fetch_string(&type, &regs, SL("simple"), PH_NOISY, "arangodbclient/batch.zep", 128 TSRMLS_CC);
	}
	_4 = ZEPHIR_IS_STRING_IDENTICAL(method, "GET");
	if (_4) {
		zephir_array_fetch_string(&_5, &regs, SL("direct"), PH_NOISY | PH_READONLY, "arangodbclient/batch.zep", 129 TSRMLS_CC);
		_4 = ZEPHIR_IS_IDENTICAL(&type, &_5);
	}
	if (_4) {
		ZEPHIR_INIT_VAR(&_6$$4);
		ZEPHIR_CONCAT_SV(&_6$$4, "get", &type);
		ZEPHIR_CPY_WRT(&type, &_6$$4);
	}
	zephir_read_property(&_7, this_ptr, SL("_nextBatchPartId"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_7) == IS_NULL) {
		zephir_read_property(&_8$$5, this_ptr, SL("_batchParts"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_VAR(&_9$$5);
		ZVAL_STRING(&_9$$5, "\\SplFixedArray");
		ZEPHIR_CALL_FUNCTION(&_10$$5, "is_a", NULL, 13, &_8$$5, &_9$$5);
		zephir_check_call_status();
		if (zephir_is_true(&_10$$5)) {
			ZEPHIR_OBS_VAR(&nextNumeric);
			zephir_read_property(&nextNumeric, this_ptr, SL("_nextId"), PH_NOISY_CC);
			RETURN_ON_FAILURE(zephir_property_incr(this_ptr, SL("_nextId") TSRMLS_CC));
		} else {
			zephir_read_property(&_11$$7, this_ptr, SL("_batchParts"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_INIT_NVAR(&nextNumeric);
			ZVAL_LONG(&nextNumeric, zephir_fast_count_int(&_11$$7 TSRMLS_CC));
		}
		ZEPHIR_CPY_WRT(&batchPartId, &nextNumeric);
	} else {
		ZEPHIR_OBS_NVAR(&batchPartId);
		zephir_read_property(&batchPartId, this_ptr, SL("_nextBatchPartId"), PH_NOISY_CC);
		zephir_update_property_zval(this_ptr, SL("_nextBatchPartId"), &__$null);
	}
	ZEPHIR_INIT_VAR(&eol);
	ZVAL_STRING(&eol, "\r\n");
	ZEPHIR_INIT_VAR(&result);
	ZEPHIR_CONCAT_SV(&result, "HTTP/1.1 202 Accepted", &eol);
	ZEPHIR_INIT_VAR(&_12);
	ZEPHIR_CONCAT_SV(&_12, "location: /_db/_system/_api/document/0/0", &eol);
	zephir_concat_self(&result, &_12 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_13);
	ZEPHIR_CONCAT_SV(&_13, "content-type: application/json; charset=utf-8", &eol);
	zephir_concat_self(&result, &_13 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_14);
	ZEPHIR_CONCAT_SV(&_14, "etag: \"0\"", &eol);
	zephir_concat_self(&result, &_14 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_15);
	ZEPHIR_CONCAT_SVV(&_15, "connection: Close", &eol, &eol);
	zephir_concat_self(&result, &_15 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_16);
	ZEPHIR_CONCAT_SVV(&_16, "{\"error\":false,\"_id\":\"0/0\",\"id\":\"0\",\"_rev\":0,\"hasMore\":1, \"result\":[{}], \"documents\":[{}]}", &eol, &eol);
	zephir_concat_self(&result, &_16 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&response);
	object_init_ex(&response, arangodbclient_httpresponse_ce);
	ZEPHIR_CALL_METHOD(NULL, &response, "__construct", NULL, 14, &result);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&batchPart);
	object_init_ex(&batchPart, arangodbclient_batchpart_ce);
	ZEPHIR_INIT_VAR(&_17);
	zephir_create_array(&_17, 2, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_18);
	zephir_read_property(&_18, this_ptr, SL("_batchPartCursorOptions"), PH_NOISY_CC);
	zephir_array_update_string(&_17, SL("cursorOptions"), &_18, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_18);
	zephir_read_property(&_18, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&_17, SL("_documentClass"), &_18, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(NULL, &batchPart, "__construct", NULL, 15, this_ptr, &batchPartId, &type, request, &response, &_17);
	zephir_check_call_status();
	zephir_update_property_array(this_ptr, SL("_batchParts"), &batchPartId, &batchPart TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, &response, "setbatchpart", NULL, 16, &batchPart);
	zephir_check_call_status();
	RETURN_CCTOR(&response);

}

PHP_METHOD(ArangoDBClient_Batch, splitWithContentIdKey) {

	zend_string *_2;
	zend_ulong _1;
	zephir_fcall_cache_entry *_3 = NULL, *_5 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *pattern, pattern_sub, *stringg, stringg_sub, myArray, exploded, key, value, response, contentId, *_0, _4$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&pattern_sub);
	ZVAL_UNDEF(&stringg_sub);
	ZVAL_UNDEF(&myArray);
	ZVAL_UNDEF(&exploded);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&contentId);
	ZVAL_UNDEF(&_4$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &pattern, &stringg);



	ZEPHIR_INIT_VAR(&myArray);
	array_init(&myArray);
	ZEPHIR_INIT_VAR(&exploded);
	zephir_fast_explode(&exploded, pattern, stringg, LONG_MAX TSRMLS_CC);
	zephir_is_iterable(&exploded, 0, "arangodbclient/batch.zep", 173);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&exploded), _1, _2, _0)
	{
		ZEPHIR_INIT_NVAR(&key);
		if (_2 != NULL) { 
			ZVAL_STR_COPY(&key, _2);
		} else {
			ZVAL_LONG(&key, _1);
		}
		ZEPHIR_INIT_NVAR(&value);
		ZVAL_COPY(&value, _0);
		ZEPHIR_INIT_NVAR(&response);
		object_init_ex(&response, arangodbclient_httpresponse_ce);
		ZEPHIR_CALL_METHOD(NULL, &response, "__construct", &_3, 14, &value);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&_4$$3);
		ZVAL_STRING(&_4$$3, "Content-Id");
		ZEPHIR_CALL_METHOD(&contentId, &response, "getheader", &_5, 17, &_4$$3);
		zephir_check_call_status();
		if (Z_TYPE_P(&contentId) != IS_NULL) {
			zephir_array_update_zval(&myArray, &contentId, &value, PH_COPY | PH_SEPARATE);
		} else {
			zephir_array_update_zval(&myArray, &key, &value, PH_COPY | PH_SEPARATE);
		}
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&value);
	ZEPHIR_INIT_NVAR(&key);
	RETURN_CCTOR(&myArray);

}

PHP_METHOD(ArangoDBClient_Batch, process) {

	zend_string *_20;
	zend_ulong _19;
	zval _2, _9, _16, _17, _4$$7, _5$$7, _7$$6, _8$$6;
	zval data, batchParts, batchPartResponses, combinedDataHeader, partValue, partValueId, params, url, body, partKey, response, _0, _1, *_3, _11, _12, _13, _14, _15, *_18, _6$$6, _23$$10, _25$$10;
	zephir_fcall_cache_entry *_10 = NULL, *_21 = NULL, *_22 = NULL, *_24 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&batchParts);
	ZVAL_UNDEF(&batchPartResponses);
	ZVAL_UNDEF(&combinedDataHeader);
	ZVAL_UNDEF(&partValue);
	ZVAL_UNDEF(&partValueId);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&partKey);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_15);
	ZVAL_UNDEF(&_6$$6);
	ZVAL_UNDEF(&_23$$10);
	ZVAL_UNDEF(&_25$$10);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_16);
	ZVAL_UNDEF(&_17);
	ZVAL_UNDEF(&_4$$7);
	ZVAL_UNDEF(&_5$$7);
	ZVAL_UNDEF(&_7$$6);
	ZVAL_UNDEF(&_8$$6);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&batchPartResponses);
	array_init(&batchPartResponses);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "iscapturing", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&_0)) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "stopcapture", NULL, 0);
		zephir_check_call_status();
	}
	ZVAL_BOOL(&_1, 1);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setbatchrequest", NULL, 0, &_1);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&data);
	ZVAL_STRING(&data, "");
	ZEPHIR_CALL_METHOD(&batchParts, this_ptr, "getbatchparts", NULL, 0);
	zephir_check_call_status();
	if (zephir_fast_count_int(&batchParts TSRMLS_CC) == 0) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Can't process empty batch.", "arangodbclient/batch.zep", 187);
		return;
	}
	ZEPHIR_INIT_VAR(&_2);
	ZEPHIR_CONCAT_SSS(&_2, "--", "XXXsubpartXXX", "\r\n");
	ZEPHIR_CPY_WRT(&combinedDataHeader, &_2);
	ZEPHIR_INIT_LNVAR(_2);
	ZEPHIR_CONCAT_SS(&_2, "Content-Type: application/x-arango-batchpart", "\r\n");
	zephir_concat_self(&combinedDataHeader, &_2 TSRMLS_CC);
	zephir_is_iterable(&batchParts, 0, "arangodbclient/batch.zep", 203);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&batchParts), _3)
	{
		ZEPHIR_INIT_NVAR(&partValue);
		ZVAL_COPY(&partValue, _3);
		if (Z_TYPE_P(&partValue) != IS_NULL) {
			zephir_concat_self(&data, &combinedDataHeader TSRMLS_CC);
			ZEPHIR_CALL_METHOD(&partValueId, &partValue, "getid", NULL, 0);
			zephir_check_call_status();
			if (Z_TYPE_P(&partValueId) != IS_NULL) {
				zephir_get_strval(&_4$$7, &partValueId);
				ZEPHIR_INIT_LNVAR(_5$$7);
				ZEPHIR_CONCAT_SVS(&_5$$7, "Content-Id: ", &_4$$7, "\r\n\r\n");
				zephir_concat_self(&data, &_5$$7 TSRMLS_CC);
			} else {
				zephir_concat_self_str(&data, SL("\r\n") TSRMLS_CC);
			}
			ZEPHIR_CALL_METHOD(&_6$$6, &partValue, "getrequest", NULL, 0);
			zephir_check_call_status();
			zephir_get_strval(&_7$$6, &_6$$6);
			ZEPHIR_INIT_LNVAR(_8$$6);
			ZEPHIR_CONCAT_VS(&_8$$6, &_7$$6, "\r\n");
			zephir_concat_self(&data, &_8$$6 TSRMLS_CC);
		}
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&partValue);
	ZEPHIR_INIT_VAR(&_9);
	ZEPHIR_CONCAT_SSSS(&_9, "--", "XXXsubpartXXX", "--", "\r\n\r\n");
	zephir_concat_self(&data, &_9 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&params);
	array_init(&params);
	ZEPHIR_INIT_VAR(&_11);
	ZVAL_STRING(&_11, "/_api/batch");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "appendparamsurl", &_10, 0, &_11, &params);
	zephir_check_call_status();
	zephir_read_property(&_1, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_12, &_1, "post", NULL, 0, &url, &data);
	zephir_check_call_status();
	zephir_update_property_zval(this_ptr, SL("_batchResponse"), &_12);
	zephir_read_property(&_13, this_ptr, SL("_batchResponse"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_14, &_13, "gethttpcode", NULL, 0);
	zephir_check_call_status();
	if (!ZEPHIR_IS_LONG_IDENTICAL(&_14, 200)) {
		RETURN_MM_MEMBER(getThis(), "_batchResponse");
	}
	zephir_read_property(&_15, this_ptr, SL("_batchResponse"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&body, &_15, "getbody", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_11);
	ZEPHIR_INIT_VAR(&_16);
	ZEPHIR_CONCAT_SSS(&_16, "--", "XXXsubpartXXX", "--");
	zephir_fast_trim(&_11, &body, &_16, ZEPHIR_TRIM_BOTH TSRMLS_CC);
	ZEPHIR_CPY_WRT(&body, &_11);
	ZEPHIR_INIT_VAR(&_17);
	ZEPHIR_CONCAT_SSS(&_17, "--", "XXXsubpartXXX", "\r\n");
	ZEPHIR_CALL_METHOD(&batchParts, this_ptr, "splitwithcontentidkey", NULL, 0, &_17, &body);
	zephir_check_call_status();
	zephir_is_iterable(&batchParts, 0, "arangodbclient/batch.zep", 220);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&batchParts), _19, _20, _18)
	{
		ZEPHIR_INIT_NVAR(&partKey);
		if (_20 != NULL) { 
			ZVAL_STR_COPY(&partKey, _20);
		} else {
			ZVAL_LONG(&partKey, _19);
		}
		ZEPHIR_INIT_NVAR(&partValue);
		ZVAL_COPY(&partValue, _18);
		ZEPHIR_INIT_NVAR(&response);
		object_init_ex(&response, arangodbclient_httpresponse_ce);
		ZEPHIR_CALL_METHOD(NULL, &response, "__construct", &_21, 14, &partValue);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&body, &response, "getbody", &_22, 18);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&response);
		object_init_ex(&response, arangodbclient_httpresponse_ce);
		ZEPHIR_CALL_METHOD(NULL, &response, "__construct", &_21, 14, &body);
		zephir_check_call_status();
		zephir_array_update_zval(&batchPartResponses, &partKey, &response, PH_COPY | PH_SEPARATE);
		ZEPHIR_CALL_METHOD(&_23$$10, this_ptr, "getpart", &_24, 0, &partKey);
		zephir_check_call_status();
		zephir_array_fetch(&_25$$10, &batchPartResponses, &partKey, PH_NOISY | PH_READONLY, "arangodbclient/batch.zep", 218 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, &_23$$10, "setresponse", NULL, 0, &_25$$10);
		zephir_check_call_status();
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&partValue);
	ZEPHIR_INIT_NVAR(&partKey);
	RETURN_THIS();

}

PHP_METHOD(ArangoDBClient_Batch, countParts) {

	zval _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);


	zephir_read_property(&_0, this_ptr, SL("_batchParts"), PH_NOISY_CC | PH_READONLY);
	RETURN_LONG(zephir_fast_count_int(&_0 TSRMLS_CC));

}

PHP_METHOD(ArangoDBClient_Batch, getPart) {

	zval *partId, partId_sub, _0, _1, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&partId_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);

	zephir_fetch_params(0, 1, 0, &partId);



	zephir_read_property(&_0, this_ptr, SL("_batchParts"), PH_NOISY_CC | PH_READONLY);
	if (!(zephir_array_isset(&_0, partId))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STRW(arangodbclient_clientexception_ce, "Request batch part does not exist.", "arangodbclient/batch.zep", 231);
		return;
	}
	zephir_read_property(&_1, this_ptr, SL("_batchParts"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch(&_2, &_1, partId, PH_NOISY | PH_READONLY, "arangodbclient/batch.zep", 233 TSRMLS_CC);
	RETURN_CTORW(&_2);

}

PHP_METHOD(ArangoDBClient_Batch, getPartResponse) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *partId, partId_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&partId_sub);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &partId);



	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getpart", NULL, 0, partId);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&_0, "getresponse", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Batch, getProcessedPartResponse) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *partId, partId_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&partId_sub);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &partId);



	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getpart", NULL, 0, partId);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&_0, "getprocessedresponse", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Batch, getBatchParts) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_batchParts");

}

PHP_METHOD(ArangoDBClient_Batch, getCursorOptions) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_batchPartCursorOptions");

}

PHP_METHOD(ArangoDBClient_Batch, getConnection) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_connection");

}

PHP_METHOD(ArangoDBClient_Batch, setDocumentClass) {

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

zend_object *zephir_init_properties_ArangoDBClient_Batch(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _2, _1$$3, _3$$4;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_3$$4);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_batchPartCursorOptions"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_batchPartCursorOptions"), &_1$$3);
		}
		zephir_read_property(&_2, this_ptr, SL("_batchParts"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_2) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_3$$4);
			array_init(&_3$$4);
			zephir_update_property_zval(this_ptr, SL("_batchParts"), &_3$$4);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

