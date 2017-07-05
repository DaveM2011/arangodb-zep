
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
#include "kernel/memory.h"
#include "kernel/array.h"
#include "kernel/operators.h"
#include "kernel/fcall.h"
#include "kernel/concat.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Cursor) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Cursor, arangodbclient, cursor, arangodbclient_cursor_method_entry, 0);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_options"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("data"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_result"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_hasMore"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_id"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_position"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_length"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_fullCount"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_extra"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(arangodbclient_cursor_ce, SL("_fetches"), 1, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_cursor_ce, SL("_cached"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_cursor_ce, SL("_documentClass"), "\\ArangoDBClient\\Document", ZEND_ACC_PROTECTED TSRMLS_CC);

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_ID"), "id");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_HASMORE"), "hasMore");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_RESULT"), "result");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_EXTRA"), "extra");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_STATS"), "stats");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("FULL_COUNT"), "fullCount");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_CACHE"), "cache");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_CACHED"), "cached");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_SANITIZE"), "_sanitize");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_FLAT"), "_flat");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_TYPE"), "objectType");

	zephir_declare_class_constant_string(arangodbclient_cursor_ce, SL("ENTRY_BASEURL"), "baseurl");

	zend_class_implements(arangodbclient_cursor_ce TSRMLS_CC, 1, zend_ce_iterator);
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Cursor, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval data, options, _12;
	zval *connection, connection_sub, *data_param = NULL, *options_param = NULL, __$null, __$true, __$false, _0, _9, _11, _1$$3, _2$$4, _3$$4, _4$$4, _5$$5, _6$$5, _7$$5, _8$$6, _10$$7;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_NULL(&__$null);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$6);
	ZVAL_UNDEF(&_10$$7);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_12);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 0, &connection, &data_param, &options_param);

	zephir_get_arrval(&data, data_param);
	zephir_get_arrval(&options, options_param);


	zephir_update_property_zval(this_ptr, SL("_connection"), connection);
	zephir_update_property_zval(this_ptr, SL("data"), &data);
	zephir_update_property_zval(this_ptr, SL("_id"), &__$null);
	ZEPHIR_INIT_VAR(&_0);
	array_init(&_0);
	zephir_update_property_zval(this_ptr, SL("_extra"), &_0);
	if (0) {
		zephir_update_property_zval(this_ptr, SL("_cached"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_cached"), &__$false);
	}
	if (zephir_array_isset_string(&data, SL("id"))) {
		zephir_array_fetch_string(&_1$$3, &data, SL("id"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 38 TSRMLS_CC);
		zephir_update_property_zval(this_ptr, SL("_id"), &_1$$3);
	}
	if (zephir_array_isset_string(&data, SL("extra"))) {
		zephir_array_fetch_string(&_2$$4, &data, SL("extra"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 41 TSRMLS_CC);
		zephir_update_property_zval(this_ptr, SL("_extra"), &_2$$4);
		zephir_read_property(&_3$$4, this_ptr, SL("_extra"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_4$$4, &_3$$4, SL("stats"), PH_READONLY, "arangodbclient/cursor.zep", 42 TSRMLS_CC);
		if (zephir_array_isset_string(&_4$$4, SL("fullCount"))) {
			zephir_read_property(&_5$$5, this_ptr, SL("_extra"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch_string(&_6$$5, &_5$$5, SL("stats"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 43 TSRMLS_CC);
			zephir_array_fetch_string(&_7$$5, &_6$$5, SL("fullCount"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 43 TSRMLS_CC);
			zephir_update_property_zval(this_ptr, SL("_fullCount"), &_7$$5);
		}
	}
	if (zephir_array_isset_string(&data, SL("cached"))) {
		zephir_array_fetch_string(&_8$$6, &data, SL("cached"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 47 TSRMLS_CC);
		zephir_update_property_zval(this_ptr, SL("_cached"), &_8$$6);
	}
	ZEPHIR_OBS_VAR(&_9);
	zephir_array_fetch_string(&_9, &data, SL("hasMore"), PH_NOISY, "arangodbclient/cursor.zep", 50 TSRMLS_CC);
	if (zephir_get_boolval(&_9)) {
		zephir_update_property_zval(this_ptr, SL("_hasMore"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_hasMore"), &__$false);
	}
	if (zephir_array_isset_string(&options, SL("_documentClass"))) {
		zephir_array_fetch_string(&_10$$7, &options, SL("_documentClass"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 52 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setdocumentclass", NULL, 0, &_10$$7);
		zephir_check_call_status();
	}
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_update_property_zval(this_ptr, SL("_options"), &options);
	ZEPHIR_INIT_VAR(&_11);
	array_init(&_11);
	zephir_update_property_zval(this_ptr, SL("_result"), &_11);
	ZEPHIR_OBS_NVAR(&_9);
	zephir_array_fetch_string(&_9, &data, SL("result"), PH_NOISY, "arangodbclient/cursor.zep", 57 TSRMLS_CC);
	zephir_get_arrval(&_12, &_9);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "add", NULL, 0, &_12);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "updatelength", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "rewind", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, delete) {

	zval tmpArray40cd750bba9870f18aada2478b24840a, e, _0, _1$$4, _2$$4, _3$$4, _4$$4, _5$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&tmpArray40cd750bba9870f18aada2478b24840a);
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

			ZEPHIR_INIT_VAR(&tmpArray40cd750bba9870f18aada2478b24840a);
			array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
			zephir_read_property(&_1$$4, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_METHOD(&_2$$4, this_ptr, "url", NULL, 0);
			zephir_check_call_status_or_jump(try_end_1);
			zephir_read_property(&_3$$4, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_INIT_VAR(&_4$$4);
			ZEPHIR_CONCAT_VSV(&_4$$4, &_2$$4, "/", &_3$$4);
			ZEPHIR_CALL_METHOD(NULL, &_1$$4, "delete", NULL, 0, &_4$$4, &tmpArray40cd750bba9870f18aada2478b24840a);
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
				zephir_throw_exception_debug(&e, "arangodbclient/cursor.zep", 72 TSRMLS_CC);
				ZEPHIR_MM_RESTORE();
				return;
			}
		}
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_Cursor, getCount) {

	zval _0;
	zephir_fcall_cache_entry *_1 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	while (1) {
		zephir_read_property(&_0, this_ptr, SL("_hasMore"), PH_NOISY_CC | PH_READONLY);
		if (!(zephir_is_true(&_0))) {
			break;
		}
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "fetchoutstanding", &_1, 0);
		zephir_check_call_status();
	}
	RETURN_MM_MEMBER(getThis(), "_length");

}

PHP_METHOD(ArangoDBClient_Cursor, getFullCount) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_fullCount");

}

PHP_METHOD(ArangoDBClient_Cursor, getCached) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_cached");

}

PHP_METHOD(ArangoDBClient_Cursor, getAll) {

	zval _0;
	zephir_fcall_cache_entry *_1 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	while (1) {
		zephir_read_property(&_0, this_ptr, SL("_hasMore"), PH_NOISY_CC | PH_READONLY);
		if (!(zephir_is_true(&_0))) {
			break;
		}
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "fetchoutstanding", &_1, 0);
		zephir_check_call_status();
	}
	RETURN_MM_MEMBER(getThis(), "_result");

}

PHP_METHOD(ArangoDBClient_Cursor, rewind) {

	zval _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);


	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_LONG(&_0, 0);
	zephir_update_property_zval(this_ptr, SL("_position"), &_0);

}

PHP_METHOD(ArangoDBClient_Cursor, current) {

	zval _0, _1, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_result"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_OBS_VAR(&_2);
	zephir_read_property(&_2, this_ptr, SL("_position"), PH_NOISY_CC);
	zephir_array_fetch(&_1, &_0, &_2, PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 111 TSRMLS_CC);
	RETURN_CTOR(&_1);

}

PHP_METHOD(ArangoDBClient_Cursor, key) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_position");

}

PHP_METHOD(ArangoDBClient_Cursor, next) {

	zval *this_ptr = getThis();


	RETURN_ON_FAILURE(zephir_property_incr(this_ptr, SL("_position") TSRMLS_CC));

}

PHP_METHOD(ArangoDBClient_Cursor, valid) {

	zend_bool _3;
	zval _0, _1, _2, _4, _5, _6;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_position"), PH_NOISY_CC | PH_READONLY);
	zephir_read_property(&_1, this_ptr, SL("_length"), PH_NOISY_CC | PH_READONLY);
	if (ZEPHIR_LE_LONG(&_0, (zephir_get_numberval(&_1) - 1))) {
		RETURN_MM_BOOL(1);
	}
	ZEPHIR_OBS_VAR(&_2);
	zephir_read_property(&_2, this_ptr, SL("_hasMore"), PH_NOISY_CC);
	_3 = !zephir_is_true(&_2);
	if (!(_3)) {
		ZEPHIR_OBS_VAR(&_4);
		zephir_read_property(&_4, this_ptr, SL("_id"), PH_NOISY_CC);
		_3 = !zephir_is_true(&_4);
	}
	if (_3) {
		RETURN_MM_BOOL(0);
	}
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "fetchoutstanding", NULL, 0);
	zephir_check_call_status();
	zephir_read_property(&_5, this_ptr, SL("_position"), PH_NOISY_CC | PH_READONLY);
	zephir_read_property(&_6, this_ptr, SL("_length"), PH_NOISY_CC | PH_READONLY);
	RETURN_MM_BOOL(ZEPHIR_LE_LONG(&_5, (zephir_get_numberval(&_6) - 1)));

}

PHP_METHOD(ArangoDBClient_Cursor, add) {

	zend_bool _2$$3, _4$$3;
	zephir_fcall_cache_entry *_7 = NULL, *_9 = NULL, *_12 = NULL, *_13 = NULL, *_14 = NULL, *_15 = NULL, *_16 = NULL, *_17 = NULL, *_18 = NULL, *_19 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *data_param = NULL, row, _0, *_1, _3$$3, _5$$3, _6$$3, _8$$5, _10$$7, _11$$7;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&row);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_5$$3);
	ZVAL_UNDEF(&_6$$3);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&_10$$7);
	ZVAL_UNDEF(&_11$$7);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "sanitize", NULL, 0, &data);
	zephir_check_call_status();
	zephir_is_iterable(&_0, 0, "arangodbclient/cursor.zep", 179);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_0), _1)
	{
		ZEPHIR_INIT_NVAR(&row);
		ZVAL_COPY(&row, _1);
		_2$$3 = !((Z_TYPE_P(&row) == IS_ARRAY));
		if (!(_2$$3)) {
			zephir_read_property(&_3$$3, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
			_4$$3 = zephir_array_isset_string(&_3$$3, SL("_flat"));
			if (_4$$3) {
				zephir_read_property(&_5$$3, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
				zephir_array_fetch_string(&_6$$3, &_5$$3, SL("_flat"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 141 TSRMLS_CC);
				_4$$3 = zephir_is_true(&_6$$3);
			}
			_2$$3 = _4$$3;
		}
		if (_2$$3) {
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "addflatfromarray", &_7, 0, &row);
			zephir_check_call_status();
		} else {
			zephir_read_property(&_8$$5, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
			if (!(zephir_array_isset_string(&_8$$5, SL("objectType")))) {
				ZEPHIR_CALL_METHOD(NULL, this_ptr, "adddocumentsfromarray", &_9, 0, &row);
				zephir_check_call_status();
			} else {
				zephir_read_property(&_10$$7, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
				ZEPHIR_OBS_NVAR(&_11$$7);
				zephir_array_fetch_string(&_11$$7, &_10$$7, SL("objectType"), PH_NOISY, "arangodbclient/cursor.zep", 147 TSRMLS_CC);
				do {
					if (ZEPHIR_IS_STRING(&_11$$7, "edge")) {
						ZEPHIR_CALL_METHOD(NULL, this_ptr, "addedgesfromarray", &_12, 0, &row);
						zephir_check_call_status();
						break;
					}
					if (ZEPHIR_IS_STRING(&_11$$7, "vertex")) {
						ZEPHIR_CALL_METHOD(NULL, this_ptr, "addverticesfromarray", &_13, 0, &row);
						zephir_check_call_status();
						break;
					}
					if (ZEPHIR_IS_STRING(&_11$$7, "path")) {
						ZEPHIR_CALL_METHOD(NULL, this_ptr, "addpathsfromarray", &_14, 0, &row);
						zephir_check_call_status();
						break;
					}
					if (ZEPHIR_IS_STRING(&_11$$7, "shortestPath")) {
						ZEPHIR_CALL_METHOD(NULL, this_ptr, "addshortestpathfromarray", &_15, 0, &row);
						zephir_check_call_status();
						break;
					}
					if (ZEPHIR_IS_STRING(&_11$$7, "distanceTo")) {
						ZEPHIR_CALL_METHOD(NULL, this_ptr, "adddistancetofromarray", &_16, 0, &row);
						zephir_check_call_status();
						break;
					}
					if (ZEPHIR_IS_STRING(&_11$$7, "commonNeighbors")) {
						ZEPHIR_CALL_METHOD(NULL, this_ptr, "addcommonneighborsfromarray", &_17, 0, &row);
						zephir_check_call_status();
						break;
					}
					if (ZEPHIR_IS_STRING(&_11$$7, "commonProperties")) {
						ZEPHIR_CALL_METHOD(NULL, this_ptr, "addcommonpropertiesfromarray", &_18, 0, &row);
						zephir_check_call_status();
						break;
					}
					if (ZEPHIR_IS_STRING(&_11$$7, "figure")) {
						ZEPHIR_CALL_METHOD(NULL, this_ptr, "addfigurefromarray", &_19, 0, &row);
						zephir_check_call_status();
						break;
					}
					ZEPHIR_CALL_METHOD(NULL, this_ptr, "adddocumentsfromarray", &_9, 0, &row);
					zephir_check_call_status();
					break;
				} while(0);

			}
		}
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&row);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addFlatFromArray) {

	zval *data_param = NULL;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_update_property_array_append(this_ptr, SL("_result"), &data TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addDocumentsFromArray) {

	zend_class_entry *_2;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *data_param = NULL, _documentClass, _0, _1;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	_2 = zephir_fetch_class(&_documentClass TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&_1, _2, "createfromarray", NULL, 0, &data, &_0);
	zephir_check_call_status();
	zephir_update_property_array_append(this_ptr, SL("_result"), &_1 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addPathsFromArray) {

	zend_class_entry *_4, *_7, *_12$$3;
	zephir_fcall_cache_entry *_16 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *data_param = NULL, _documentClass, entry, v, _0, _1, _2, _3, _5, _6, _8, *_9, _13, *_14, _10$$3, _11$$3, _15$$4, _17$$4;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&entry);
	ZVAL_UNDEF(&v);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_10$$3);
	ZVAL_UNDEF(&_11$$3);
	ZVAL_UNDEF(&_15$$4);
	ZVAL_UNDEF(&_17$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	ZEPHIR_INIT_VAR(&entry);
	zephir_create_array(&entry, 4, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_1);
	array_init(&_1);
	zephir_array_update_string(&entry, SL("vertices"), &_1, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_1);
	array_init(&_1);
	zephir_array_update_string(&entry, SL("edges"), &_1, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_3, &data, SL("source"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 199 TSRMLS_CC);
	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	_4 = zephir_fetch_class(&_documentClass TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&_2, _4, "createfromarray", NULL, 0, &_3, &_0);
	zephir_check_call_status();
	zephir_array_update_string(&entry, SL("source"), &_2, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_5, &data, SL("destination"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 199 TSRMLS_CC);
	zephir_read_property(&_6, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	_7 = zephir_fetch_class(&_documentClass TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&_2, _7, "createfromarray", NULL, 0, &_5, &_6);
	zephir_check_call_status();
	zephir_array_update_string(&entry, SL("destination"), &_2, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_8, &data, SL("vertices"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 200 TSRMLS_CC);
	zephir_is_iterable(&_8, 0, "arangodbclient/cursor.zep", 203);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_8), _9)
	{
		ZEPHIR_INIT_NVAR(&v);
		ZVAL_COPY(&v, _9);
		zephir_read_property(&_11$$3, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		_12$$3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_10$$3, _12$$3, "createfromarray", NULL, 0, &v, &_11$$3);
		zephir_check_call_status();
		zephir_array_update_multi(&entry, &_10$$3 TSRMLS_CC, SL("sa"), 3, SL("vertices"));
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&v);
	zephir_array_fetch_string(&_13, &data, SL("edges"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 203 TSRMLS_CC);
	zephir_is_iterable(&_13, 0, "arangodbclient/cursor.zep", 206);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_13), _14)
	{
		ZEPHIR_INIT_NVAR(&v);
		ZVAL_COPY(&v, _14);
		zephir_read_property(&_17$$4, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_CE_STATIC(&_15$$4, arangodbclient_edge_ce, "createfromarray", &_16, 0, &v, &_17$$4);
		zephir_check_call_status();
		zephir_array_update_multi(&entry, &_15$$4 TSRMLS_CC, SL("sa"), 3, SL("edges"));
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&v);
	zephir_update_property_array_append(this_ptr, SL("_result"), &entry TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addShortestPathFromArray) {

	zend_class_entry *_3, *_6;
	zephir_fcall_cache_entry *_12 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *data_param = NULL, _documentClass, vertices, startVertex, destination, entry, path, v, _0, _1, _2, _4, _5, _7, *_8, _9, *_10, _11$$5, _13$$5;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&vertices);
	ZVAL_UNDEF(&startVertex);
	ZVAL_UNDEF(&destination);
	ZVAL_UNDEF(&entry);
	ZVAL_UNDEF(&path);
	ZVAL_UNDEF(&v);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_11$$5);
	ZVAL_UNDEF(&_13$$5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	if (!(zephir_array_isset_string(&data, SL("vertices")))) {
		RETURN_MM_NULL();
	}
	ZEPHIR_OBS_VAR(&vertices);
	zephir_array_fetch_string(&vertices, &data, SL("vertices"), PH_NOISY, "arangodbclient/cursor.zep", 217 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&startVertex);
	zephir_array_fetch_long(&startVertex, &vertices, 0, PH_NOISY, "arangodbclient/cursor.zep", 218 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&destination);
	zephir_array_fetch_long(&destination, &vertices, (zephir_fast_count_int(&vertices TSRMLS_CC) - 1), PH_NOISY, "arangodbclient/cursor.zep", 219 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&entry);
	zephir_create_array(&entry, 4, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_1);
	array_init(&_1);
	zephir_array_update_string(&entry, SL("paths"), &_1, PH_COPY | PH_SEPARATE);
	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	_3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&_2, _3, "createfromarray", NULL, 0, &startVertex, &_0);
	zephir_check_call_status();
	zephir_array_update_string(&entry, SL("source"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_VAR(&_4);
	zephir_array_fetch_string(&_4, &data, SL("distance"), PH_NOISY, "arangodbclient/cursor.zep", 220 TSRMLS_CC);
	zephir_array_update_string(&entry, SL("distance"), &_4, PH_COPY | PH_SEPARATE);
	zephir_read_property(&_5, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	_6 = zephir_fetch_class(&_documentClass TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&_2, _6, "createfromarray", NULL, 0, &destination, &_5);
	zephir_check_call_status();
	zephir_array_update_string(&entry, SL("destination"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&path);
	zephir_create_array(&path, 2, 0 TSRMLS_CC);
	ZEPHIR_INIT_NVAR(&_1);
	array_init(&_1);
	zephir_array_update_string(&path, SL("vertices"), &_1, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_1);
	array_init(&_1);
	zephir_array_update_string(&path, SL("edges"), &_1, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_7, &data, SL("vertices"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 222 TSRMLS_CC);
	zephir_is_iterable(&_7, 0, "arangodbclient/cursor.zep", 225);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_7), _8)
	{
		ZEPHIR_INIT_NVAR(&v);
		ZVAL_COPY(&v, _8);
		zephir_array_update_multi(&path, &v TSRMLS_CC, SL("sa"), 3, SL("vertices"));
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&v);
	zephir_array_fetch_string(&_9, &data, SL("edges"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 225 TSRMLS_CC);
	zephir_is_iterable(&_9, 0, "arangodbclient/cursor.zep", 228);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_9), _10)
	{
		ZEPHIR_INIT_NVAR(&v);
		ZVAL_COPY(&v, _10);
		zephir_read_property(&_13$$5, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_CE_STATIC(&_11$$5, arangodbclient_edge_ce, "createfromarray", &_12, 0, &v, &_13$$5);
		zephir_check_call_status();
		zephir_array_update_multi(&path, &_11$$5 TSRMLS_CC, SL("sa"), 3, SL("edges"));
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&v);
	zephir_array_update_multi(&entry, &path TSRMLS_CC, SL("sa"), 3, SL("paths"));
	zephir_update_property_array_append(this_ptr, SL("_result"), &entry TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addDistanceToFromArray) {

	zval *data_param = NULL, entry, _0;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&entry);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	ZEPHIR_INIT_VAR(&entry);
	zephir_create_array(&entry, 3, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_0);
	zephir_array_fetch_string(&_0, &data, SL("startVertex"), PH_NOISY, "arangodbclient/cursor.zep", 236 TSRMLS_CC);
	zephir_array_update_string(&entry, SL("source"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_array_fetch_string(&_0, &data, SL("distance"), PH_NOISY, "arangodbclient/cursor.zep", 236 TSRMLS_CC);
	zephir_array_update_string(&entry, SL("distance"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_array_fetch_string(&_0, &data, SL("vertex"), PH_NOISY, "arangodbclient/cursor.zep", 236 TSRMLS_CC);
	zephir_array_update_string(&entry, SL("destination"), &_0, PH_COPY | PH_SEPARATE);
	zephir_update_property_array_append(this_ptr, SL("_result"), &entry TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addCommonNeighborsFromArray) {

	zend_class_entry *_8$$5;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *data_param = NULL, _documentClass, left, right, neighbor, _0, _2, _3, _5, *_6, _1$$3, _4$$4, _7$$5;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&left);
	ZVAL_UNDEF(&right);
	ZVAL_UNDEF(&neighbor);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_7$$5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	ZEPHIR_OBS_VAR(&left);
	zephir_array_fetch_string(&left, &data, SL("left"), PH_NOISY, "arangodbclient/cursor.zep", 245 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&right);
	zephir_array_fetch_string(&right, &data, SL("right"), PH_NOISY, "arangodbclient/cursor.zep", 246 TSRMLS_CC);
	zephir_read_property(&_0, this_ptr, SL("_result"), PH_NOISY_CC | PH_READONLY);
	if (!(zephir_array_isset(&_0, &left))) {
		ZEPHIR_INIT_VAR(&_1$$3);
		array_init(&_1$$3);
		zephir_update_property_array(this_ptr, SL("_result"), &left, &_1$$3 TSRMLS_CC);
	}
	zephir_read_property(&_2, this_ptr, SL("_result"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch(&_3, &_2, &left, PH_READONLY, "arangodbclient/cursor.zep", 250 TSRMLS_CC);
	if (!(zephir_array_isset(&_3, &right))) {
		ZEPHIR_INIT_VAR(&_4$$4);
		array_init(&_4$$4);
		zephir_update_property_array_multi(this_ptr, SL("_result"), &_4$$4 TSRMLS_CC, SL("zz"), 2, &left, &right);
	}
	zephir_array_fetch_string(&_5, &data, SL("neighbors"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 253 TSRMLS_CC);
	zephir_is_iterable(&_5, 0, "arangodbclient/cursor.zep", 256);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_5), _6)
	{
		ZEPHIR_INIT_NVAR(&neighbor);
		ZVAL_COPY(&neighbor, _6);
		_8$$5 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_7$$5, _8$$5, "createfromarray", NULL, 0, &neighbor);
		zephir_check_call_status();
		zephir_update_property_array_multi(this_ptr, SL("_result"), &_7$$5 TSRMLS_CC, SL("zza"), 3, &left, &right);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&neighbor);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addCommonPropertiesFromArray) {

	zval *data_param = NULL, k, c, id, _0, _1, *_2;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&k);
	ZVAL_UNDEF(&c);
	ZVAL_UNDEF(&id);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	ZEPHIR_INIT_VAR(&k);
	zephir_array_keys(&k, &data TSRMLS_CC);
	zephir_array_fetch_long(&_0, &k, 0, PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 263 TSRMLS_CC);
	ZEPHIR_CPY_WRT(&k, &_0);
	ZEPHIR_INIT_VAR(&_1);
	array_init(&_1);
	zephir_update_property_array(this_ptr, SL("_result"), &k, &_1 TSRMLS_CC);
	zephir_array_fetch(&_0, &data, &k, PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 265 TSRMLS_CC);
	zephir_is_iterable(&_0, 0, "arangodbclient/cursor.zep", 271);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_0), _2)
	{
		ZEPHIR_INIT_NVAR(&c);
		ZVAL_COPY(&c, _2);
		zephir_array_fetch_string(&id, &c, SL("_id"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 266 TSRMLS_CC);
		zephir_array_unset_string(&c, SL("_id"), PH_SEPARATE);
		zephir_update_property_array_multi(this_ptr, SL("_result"), &c TSRMLS_CC, SL("zz"), 2, &k, &id);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&c);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addFigureFromArray) {

	zval *data_param = NULL;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_update_property_zval(this_ptr, SL("_result"), &data);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addEdgesFromArray) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_1 = NULL;
	zval *data_param = NULL, _0, _2;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_read_property(&_2, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_CE_STATIC(&_0, arangodbclient_edge_ce, "createfromarray", &_1, 0, &data, &_2);
	zephir_check_call_status();
	zephir_update_property_array_append(this_ptr, SL("_result"), &_0 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, addVerticesFromArray) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_1 = NULL;
	zval *data_param = NULL, _0, _2;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_read_property(&_2, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_CE_STATIC(&_0, arangodbclient_vertex_ce, "createfromarray", &_1, 0, &data, &_2);
	zephir_check_call_status();
	zephir_update_property_array_append(this_ptr, SL("_result"), &_0 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, sanitize) {

	zend_string *_6$$3;
	zend_ulong _5$$3;
	zend_bool _1, _7$$4, _14$$4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_10 = NULL;
	zval *rows_param = NULL, _documentClass, key, value, _0, _2, _3, *_4$$3, _8$$4, _9$$4, _15$$4, _16$$4, _11$$5, _12$$5, _13$$5, _17$$6, _18$$6, _19$$6;
	zval rows;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&rows);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_8$$4);
	ZVAL_UNDEF(&_9$$4);
	ZVAL_UNDEF(&_15$$4);
	ZVAL_UNDEF(&_16$$4);
	ZVAL_UNDEF(&_11$$5);
	ZVAL_UNDEF(&_12$$5);
	ZVAL_UNDEF(&_13$$5);
	ZVAL_UNDEF(&_17$$6);
	ZVAL_UNDEF(&_18$$6);
	ZVAL_UNDEF(&_19$$6);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &rows_param);

	zephir_get_arrval(&rows, rows_param);


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	_1 = zephir_array_isset_string(&_0, SL("_sanitize"));
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_3, &_2, SL("_sanitize"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 293 TSRMLS_CC);
		_1 = zephir_is_true(&_3);
	}
	if (_1) {
		zephir_is_iterable(&rows, 0, "arangodbclient/cursor.zep", 304);
		ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&rows), _5$$3, _6$$3, _4$$3)
		{
			ZEPHIR_INIT_NVAR(&key);
			if (_6$$3 != NULL) { 
				ZVAL_STR_COPY(&key, _6$$3);
			} else {
				ZVAL_LONG(&key, _5$$3);
			}
			ZEPHIR_INIT_NVAR(&value);
			ZVAL_COPY(&value, _4$$3);
			_7$$4 = Z_TYPE_P(&value) == IS_ARRAY;
			if (_7$$4) {
				ZEPHIR_INIT_LNVAR(_8$$4);
				ZEPHIR_CONCAT_VS(&_8$$4, &_documentClass, "::ENTRY_ID");
				ZEPHIR_CALL_FUNCTION(&_9$$4, "constant", &_10, 7, &_8$$4);
				zephir_check_call_status();
				_7$$4 = zephir_array_isset(&value, &_9$$4);
			}
			if (_7$$4) {
				zephir_array_fetch(&_11$$5, &rows, &key, PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 296 TSRMLS_CC);
				ZEPHIR_INIT_LNVAR(_12$$5);
				ZEPHIR_CONCAT_VS(&_12$$5, &_documentClass, "::ENTRY_ID");
				ZEPHIR_CALL_FUNCTION(&_13$$5, "constant", &_10, 7, &_12$$5);
				zephir_check_call_status();
				zephir_array_unset(&_11$$5, &_13$$5, PH_SEPARATE);
			}
			_14$$4 = Z_TYPE_P(&value) == IS_ARRAY;
			if (_14$$4) {
				ZEPHIR_INIT_LNVAR(_15$$4);
				ZEPHIR_CONCAT_VS(&_15$$4, &_documentClass, "::ENTRY_REV");
				ZEPHIR_CALL_FUNCTION(&_16$$4, "constant", &_10, 7, &_15$$4);
				zephir_check_call_status();
				_14$$4 = zephir_array_isset(&value, &_16$$4);
			}
			if (_14$$4) {
				zephir_array_fetch(&_17$$6, &rows, &key, PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 300 TSRMLS_CC);
				ZEPHIR_INIT_LNVAR(_18$$6);
				ZEPHIR_CONCAT_VS(&_18$$6, &_documentClass, "::ENTRY_REV");
				ZEPHIR_CALL_FUNCTION(&_19$$6, "constant", &_10, 7, &_18$$6);
				zephir_check_call_status();
				zephir_array_unset(&_17$$6, &_19$$6, PH_SEPARATE);
			}
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&value);
		ZEPHIR_INIT_NVAR(&key);
	}
	RETURN_CTOR(&rows);

}

PHP_METHOD(ArangoDBClient_Cursor, fetchOutstanding) {

	zval __$true, __$false, __$null, response, tmpArray40cd750bba9870f18aada2478b24840a, data, _0, _1, _2, _3, _4, _5, _6, _7;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray40cd750bba9870f18aada2478b24840a);
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

	ZEPHIR_INIT_VAR(&tmpArray40cd750bba9870f18aada2478b24840a);
	array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "url", NULL, 0);
	zephir_check_call_status();
	zephir_read_property(&_2, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&_3);
	ZEPHIR_CONCAT_VSV(&_3, &_1, "/", &_2);
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "");
	ZEPHIR_CALL_METHOD(&response, &_0, "put", NULL, 0, &_3, &_4, &tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_check_call_status();
	RETURN_ON_FAILURE(zephir_property_incr(this_ptr, SL("_fetches") TSRMLS_CC));
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&_5);
	zephir_array_fetch_string(&_5, &data, SL("hasMore"), PH_NOISY, "arangodbclient/cursor.zep", 316 TSRMLS_CC);
	if (zephir_get_boolval(&_5)) {
		zephir_update_property_zval(this_ptr, SL("_hasMore"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_hasMore"), &__$false);
	}
	zephir_array_fetch_string(&_6, &data, SL("result"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 317 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "add", NULL, 0, &_6);
	zephir_check_call_status();
	zephir_read_property(&_7, this_ptr, SL("_hasMore"), PH_NOISY_CC | PH_READONLY);
	if (!(zephir_is_true(&_7))) {
		zephir_update_property_zval(this_ptr, SL("_id"), &__$null);
	}
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "updatelength", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Cursor, updateLength) {

	zval _0, _1;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);


	zephir_read_property(&_0, this_ptr, SL("_result"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_ZVAL_NREF(_1);
	ZVAL_LONG(&_1, zephir_fast_count_int(&_0 TSRMLS_CC));
	zephir_update_property_zval(this_ptr, SL("_length"), &_1);

}

PHP_METHOD(ArangoDBClient_Cursor, url) {

	zval _0, _1$$3, _2$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);


	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset_string(&_0, SL("baseurl"))) {
		zephir_read_property(&_1$$3, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_2$$3, &_1$$3, SL("baseurl"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 332 TSRMLS_CC);
		RETURN_CTORW(&_2$$3);
	}
	RETURN_STRING("/_api/cursor");

}

PHP_METHOD(ArangoDBClient_Cursor, getStatValue) {

	zval *name_param = NULL, _0, _1, _2$$3, _3$$3, _4$$3;
	zval name;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_4$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &name_param);

	zephir_get_strval(&name, name_param);


	zephir_read_property(&_0, this_ptr, SL("_extra"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_1, &_0, SL("stats"), PH_READONLY, "arangodbclient/cursor.zep", 339 TSRMLS_CC);
	if (zephir_array_isset(&_1, &name)) {
		zephir_read_property(&_2$$3, this_ptr, SL("_extra"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_3$$3, &_2$$3, SL("stats"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 340 TSRMLS_CC);
		zephir_array_fetch(&_4$$3, &_3$$3, &name, PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 340 TSRMLS_CC);
		RETURN_CTOR(&_4$$3);
	}
	RETURN_MM_LONG(0);

}

PHP_METHOD(ArangoDBClient_Cursor, getMetadata) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "data");

}

PHP_METHOD(ArangoDBClient_Cursor, getExtra) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_extra");

}

PHP_METHOD(ArangoDBClient_Cursor, getWarnings) {

	zval tmpArray40cd750bba9870f18aada2478b24840a, _0, _1$$3, _2$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&tmpArray40cd750bba9870f18aada2478b24840a);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_extra"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset_string(&_0, SL("warnings"))) {
		zephir_read_property(&_1$$3, this_ptr, SL("_extra"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_2$$3, &_1$$3, SL("warnings"), PH_NOISY | PH_READONLY, "arangodbclient/cursor.zep", 360 TSRMLS_CC);
		RETURN_CTOR(&_2$$3);
	}
	ZEPHIR_INIT_VAR(&tmpArray40cd750bba9870f18aada2478b24840a);
	array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
	RETURN_CCTOR(&tmpArray40cd750bba9870f18aada2478b24840a);

}

PHP_METHOD(ArangoDBClient_Cursor, getWritesExecuted) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "writesExecuted");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getstatvalue", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Cursor, getWritesIgnored) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "writesIgnored");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getstatvalue", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Cursor, getScannedFull) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "scannedFull");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getstatvalue", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Cursor, getScannedIndex) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "scannedIndex");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getstatvalue", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Cursor, getFiltered) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "filtered");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getstatvalue", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Cursor, getFetches) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_fetches");

}

PHP_METHOD(ArangoDBClient_Cursor, getId) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_id");

}

PHP_METHOD(ArangoDBClient_Cursor, setDocumentClass) {

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

