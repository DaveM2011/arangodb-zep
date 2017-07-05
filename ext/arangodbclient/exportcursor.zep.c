
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
#include "kernel/object.h"
#include "kernel/array.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"
#include "kernel/operators.h"
#include "kernel/concat.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_ExportCursor) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, ExportCursor, arangodbclient, exportcursor, arangodbclient_exportcursor_method_entry, 0);

	zend_declare_property_null(arangodbclient_exportcursor_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_exportcursor_ce, SL("_options"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_exportcursor_ce, SL("_result"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_exportcursor_ce, SL("_hasMore"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_exportcursor_ce, SL("_id"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(arangodbclient_exportcursor_ce, SL("_fetches"), 1, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_exportcursor_ce, SL("_documentClass"), "\\ArangoDBClient\\Document", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_exportcursor_ce, SL("data"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_exportcursor_ce->create_object = zephir_init_properties_ArangoDBClient_ExportCursor;
	zephir_declare_class_constant_string(arangodbclient_exportcursor_ce, SL("ENTRY_ID"), "id");

	zephir_declare_class_constant_string(arangodbclient_exportcursor_ce, SL("ENTRY_HASMORE"), "hasMore");

	zephir_declare_class_constant_string(arangodbclient_exportcursor_ce, SL("ENTRY_RESULT"), "result");

	zephir_declare_class_constant_string(arangodbclient_exportcursor_ce, SL("ENTRY_FLAT"), "_flat");

	zephir_declare_class_constant_string(arangodbclient_exportcursor_ce, SL("ENTRY_COUNT"), "count");

	zephir_declare_class_constant_string(arangodbclient_exportcursor_ce, SL("ENTRY_TYPE"), "type");

	zephir_declare_class_constant_string(arangodbclient_exportcursor_ce, SL("ENTRY_BASEURL"), "baseurl");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_ExportCursor, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval data, options, _4;
	zval *connection, connection_sub, *data_param = NULL, *options_param = NULL, __$null, __$true, __$false, _0$$3, _1$$4, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_NULL(&__$null);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 0, &connection, &data_param, &options_param);

	zephir_get_arrval(&data, data_param);
	zephir_get_arrval(&options, options_param);


	zephir_update_property_zval(this_ptr, SL("_connection"), connection);
	zephir_update_property_zval(this_ptr, SL("data"), &data);
	zephir_update_property_zval(this_ptr, SL("_id"), &__$null);
	if (zephir_array_isset_string(&data, SL("id"))) {
		zephir_array_fetch_string(&_0$$3, &data, SL("id"), PH_NOISY | PH_READONLY, "arangodbclient/exportcursor.zep", 26 TSRMLS_CC);
		zephir_update_property_zval(this_ptr, SL("_id"), &_0$$3);
	}
	if (zephir_array_isset_string(&options, SL("_documentClass"))) {
		zephir_array_fetch_string(&_1$$4, &options, SL("_documentClass"), PH_NOISY | PH_READONLY, "arangodbclient/exportcursor.zep", 29 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setdocumentclass", NULL, 0, &_1$$4);
		zephir_check_call_status();
	}
	ZEPHIR_OBS_VAR(&_2);
	zephir_array_fetch_string(&_2, &data, SL("hasMore"), PH_NOISY, "arangodbclient/exportcursor.zep", 32 TSRMLS_CC);
	if (zephir_get_boolval(&_2)) {
		zephir_update_property_zval(this_ptr, SL("_hasMore"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_hasMore"), &__$false);
	}
	zephir_update_property_zval(this_ptr, SL("_options"), &options);
	ZEPHIR_INIT_VAR(&_3);
	array_init(&_3);
	zephir_update_property_zval(this_ptr, SL("_result"), &_3);
	ZEPHIR_OBS_NVAR(&_2);
	zephir_array_fetch_string(&_2, &data, SL("result"), PH_NOISY, "arangodbclient/exportcursor.zep", 35 TSRMLS_CC);
	zephir_get_arrval(&_4, &_2);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setdata", NULL, 0, &_4);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_ExportCursor, delete) {

	zval e, _0, _1$$4, _2$$4, _3$$4, _4$$4, _5$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$3);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
	if (zephir_is_true(&_0)) {

		/* try_start_1: */

			zephir_read_property(&_1$$4, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_METHOD(&_2$$4, this_ptr, "url", NULL, 0);
			zephir_check_call_status_or_jump(try_end_1);
			zephir_read_property(&_3$$4, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_INIT_VAR(&_4$$4);
			ZEPHIR_CONCAT_VSV(&_4$$4, &_2$$4, "/", &_3$$4);
			ZEPHIR_CALL_METHOD(NULL, &_1$$4, "delete", NULL, 0, &_4$$4);
			zephir_check_call_status_or_jump(try_end_1);
			RETURN_MM_BOOL(1);

		try_end_1:

		if (EG(exception)) {
			ZEPHIR_INIT_VAR(&_5$$3);
			ZVAL_OBJ(&_5$$3, EG(exception));
			Z_ADDREF_P(&_5$$3);
			if (zephir_instance_of_ev(&_5$$3, arangodbclient_exception_ce TSRMLS_CC)) {
				zend_clear_exception(TSRMLS_C);
				ZEPHIR_CPY_WRT(&e, &_5$$3);
				zephir_throw_exception_debug(&e, "arangodbclient/exportcursor.zep", 47 TSRMLS_CC);
				ZEPHIR_MM_RESTORE();
				return;
			}
		}
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_ExportCursor, getCount) {

	zval _0, _1;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);


	zephir_read_property(&_0, this_ptr, SL("data"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_1, &_0, SL("count"), PH_NOISY | PH_READONLY, "arangodbclient/exportcursor.zep", 55 TSRMLS_CC);
	RETURN_CTORW(&_1);

}

PHP_METHOD(ArangoDBClient_ExportCursor, getNextBatch) {

	zend_bool _1;
	zval tmpArray40cd750bba9870f18aada2478b24840a, result, _0, _2, _3, _4$$4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&tmpArray40cd750bba9870f18aada2478b24840a);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4$$4);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&tmpArray40cd750bba9870f18aada2478b24840a);
	array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_read_property(&_0, this_ptr, SL("_result"), PH_NOISY_CC | PH_READONLY);
	_1 = ZEPHIR_IS_IDENTICAL(&_0, &tmpArray40cd750bba9870f18aada2478b24840a);
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_hasMore"), PH_NOISY_CC | PH_READONLY);
		_1 = zephir_is_true(&_2);
	}
	if (_1) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "fetchoutstanding", NULL, 0);
		zephir_check_call_status();
	}
	ZEPHIR_INIT_NVAR(&tmpArray40cd750bba9870f18aada2478b24840a);
	array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_read_property(&_3, this_ptr, SL("_result"), PH_NOISY_CC | PH_READONLY);
	if (!ZEPHIR_IS_IDENTICAL(&_3, &tmpArray40cd750bba9870f18aada2478b24840a)) {
		zephir_read_property(&result, this_ptr, SL("_result"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_VAR(&_4$$4);
		array_init(&_4$$4);
		zephir_update_property_zval(this_ptr, SL("_result"), &_4$$4);
		RETURN_CTOR(&result);
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_ExportCursor, setData) {

	zend_class_entry *_14$$8;
	zend_bool _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_9 = NULL;
	zval *data_param = NULL, _documentClass, row, _0, _2, _3, _4$$4, _5$$4, _6$$4, *_7$$5, _8$$6, _10$$6, *_11$$7, _12$$8, _13$$8;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&row);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&_8$$6);
	ZVAL_UNDEF(&_10$$6);
	ZVAL_UNDEF(&_12$$8);
	ZVAL_UNDEF(&_13$$8);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	_1 = zephir_array_isset_string(&_0, SL("_flat"));
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_3, &_2, SL("_flat"), PH_NOISY | PH_READONLY, "arangodbclient/exportcursor.zep", 80 TSRMLS_CC);
		_1 = zephir_is_true(&_3);
	}
	if (_1) {
		zephir_update_property_zval(this_ptr, SL("_result"), &data);
	} else {
		ZEPHIR_INIT_VAR(&_4$$4);
		array_init(&_4$$4);
		zephir_update_property_zval(this_ptr, SL("_result"), &_4$$4);
		zephir_read_property(&_5$$4, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_6$$4, &_5$$4, SL("type"), PH_NOISY | PH_READONLY, "arangodbclient/exportcursor.zep", 84 TSRMLS_CC);
		if (ZEPHIR_IS_LONG_IDENTICAL(&_6$$4, 3)) {
			zephir_is_iterable(&data, 0, "arangodbclient/exportcursor.zep", 88);
			ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&data), _7$$5)
			{
				ZEPHIR_INIT_NVAR(&row);
				ZVAL_COPY(&row, _7$$5);
				zephir_read_property(&_10$$6, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
				ZEPHIR_CALL_CE_STATIC(&_8$$6, arangodbclient_edge_ce, "createfromarray", &_9, 0, &row, &_10$$6);
				zephir_check_call_status();
				zephir_update_property_array_append(this_ptr, SL("_result"), &_8$$6 TSRMLS_CC);
			} ZEND_HASH_FOREACH_END();
			ZEPHIR_INIT_NVAR(&row);
		} else {
			zephir_is_iterable(&data, 0, "arangodbclient/exportcursor.zep", 92);
			ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&data), _11$$7)
			{
				ZEPHIR_INIT_NVAR(&row);
				ZVAL_COPY(&row, _11$$7);
				zephir_read_property(&_13$$8, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
				_14$$8 = zephir_fetch_class(&_documentClass TSRMLS_CC);
				ZEPHIR_CALL_CE_STATIC(&_12$$8, _14$$8, "createfromarray", NULL, 0, &row, &_13$$8);
				zephir_check_call_status();
				zephir_update_property_array_append(this_ptr, SL("_result"), &_12$$8 TSRMLS_CC);
			} ZEND_HASH_FOREACH_END();
			ZEPHIR_INIT_NVAR(&row);
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_ExportCursor, fetchOutstanding) {

	zval __$true, __$false, __$null, response, data, _0, _1, _2, _3, _4, _5, _6, _7;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "url", NULL, 0);
	zephir_check_call_status();
	zephir_read_property(&_2, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&_3);
	ZEPHIR_CONCAT_VSV(&_3, &_1, "/", &_2);
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "");
	ZEPHIR_CALL_METHOD(&response, &_0, "put", NULL, 0, &_3, &_4);
	zephir_check_call_status();
	RETURN_ON_FAILURE(zephir_property_incr(this_ptr, SL("_fetches") TSRMLS_CC));
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&_5);
	zephir_array_fetch_string(&_5, &data, SL("hasMore"), PH_NOISY, "arangodbclient/exportcursor.zep", 103 TSRMLS_CC);
	if (zephir_get_boolval(&_5)) {
		zephir_update_property_zval(this_ptr, SL("_hasMore"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_hasMore"), &__$false);
	}
	zephir_array_fetch_string(&_6, &data, SL("result"), PH_NOISY | PH_READONLY, "arangodbclient/exportcursor.zep", 104 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setdata", NULL, 0, &_6);
	zephir_check_call_status();
	zephir_read_property(&_7, this_ptr, SL("_hasMore"), PH_NOISY_CC | PH_READONLY);
	if (!(zephir_is_true(&_7))) {
		zephir_update_property_zval(this_ptr, SL("_id"), &__$null);
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_ExportCursor, url) {

	zval _0, _1$$3, _2$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);


	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset_string(&_0, SL("baseurl"))) {
		zephir_read_property(&_1$$3, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_2$$3, &_1$$3, SL("baseurl"), PH_NOISY | PH_READONLY, "arangodbclient/exportcursor.zep", 113 TSRMLS_CC);
		RETURN_CTORW(&_2$$3);
	}
	RETURN_STRING("/_api/export");

}

PHP_METHOD(ArangoDBClient_ExportCursor, getFetches) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_fetches");

}

PHP_METHOD(ArangoDBClient_ExportCursor, getId) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_id");

}

PHP_METHOD(ArangoDBClient_ExportCursor, setDocumentClass) {

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

zend_object *zephir_init_properties_ArangoDBClient_ExportCursor(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _1$$3;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("data"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("data"), &_1$$3);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

