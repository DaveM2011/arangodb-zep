
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
#include "kernel/fcall.h"
#include "kernel/array.h"
#include "kernel/operators.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Statement) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Statement, arangodbclient, statement, arangodbclient_statement_method_entry, 0);

	zend_declare_property_null(arangodbclient_statement_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_statement_ce, SL("_bindVars"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_statement_ce, SL("_batchSize"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_statement_ce, SL("_doCount"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_statement_ce, SL("_fullCount"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_statement_ce, SL("_query"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_statement_ce, SL("_flat"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_statement_ce, SL("_sanitize"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(arangodbclient_statement_ce, SL("_retries"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_statement_ce, SL("_cache"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_statement_ce, SL("resultType"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_statement_ce, SL("_documentClass"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zephir_declare_class_constant_string(arangodbclient_statement_ce, SL("ENTRY_QUERY"), "query");

	zephir_declare_class_constant_string(arangodbclient_statement_ce, SL("ENTRY_COUNT"), "count");

	zephir_declare_class_constant_string(arangodbclient_statement_ce, SL("ENTRY_BATCHSIZE"), "batchSize");

	zephir_declare_class_constant_string(arangodbclient_statement_ce, SL("ENTRY_RETRIES"), "retries");

	zephir_declare_class_constant_string(arangodbclient_statement_ce, SL("ENTRY_BINDVARS"), "bindVars");

	zephir_declare_class_constant_string(arangodbclient_statement_ce, SL("FULL_COUNT"), "fullCount");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Statement, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval data;
	zval *connection, connection_sub, *data_param = NULL, __$true, __$false, _0, _1$$3, _2$$4, _3$$5, _4$$6, _5$$6, _6$$7, _7$$8, _8$$9, _9$$9, _10$$10, _11$$11;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&_3$$5);
	ZVAL_UNDEF(&_4$$6);
	ZVAL_UNDEF(&_5$$6);
	ZVAL_UNDEF(&_6$$7);
	ZVAL_UNDEF(&_7$$8);
	ZVAL_UNDEF(&_8$$9);
	ZVAL_UNDEF(&_9$$9);
	ZVAL_UNDEF(&_10$$10);
	ZVAL_UNDEF(&_11$$11);
	ZVAL_UNDEF(&data);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &connection, &data_param);

	zephir_get_arrval(&data, data_param);


	zephir_update_property_zval(this_ptr, SL("_connection"), connection);
	ZEPHIR_INIT_VAR(&_0);
	object_init_ex(&_0, arangodbclient_bindvars_ce);
	if (zephir_has_constructor(&_0 TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(NULL, &_0, "__construct", NULL, 0);
		zephir_check_call_status();
	}
	zephir_update_property_zval(this_ptr, SL("_bindVars"), &_0);
	if (zephir_array_isset_string(&data, SL("query"))) {
		zephir_array_fetch_string(&_1$$3, &data, SL("query"), PH_NOISY | PH_READONLY, "arangodbclient/statement.zep", 28 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setquery", NULL, 0, &_1$$3);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(&data, SL("count"))) {
		zephir_array_fetch_string(&_2$$4, &data, SL("count"), PH_NOISY | PH_READONLY, "arangodbclient/statement.zep", 31 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setcount", NULL, 0, &_2$$4);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(&data, SL("batchSize"))) {
		zephir_array_fetch_string(&_3$$5, &data, SL("batchSize"), PH_NOISY | PH_READONLY, "arangodbclient/statement.zep", 34 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setbatchsize", NULL, 0, &_3$$5);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(&data, SL("bindVars"))) {
		zephir_read_property(&_4$$6, this_ptr, SL("_bindVars"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_5$$6, &data, SL("bindVars"), PH_NOISY | PH_READONLY, "arangodbclient/statement.zep", 37 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, &_4$$6, "set", NULL, 0, &_5$$6);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(&data, SL("fullCount"))) {
		ZEPHIR_OBS_VAR(&_6$$7);
		zephir_array_fetch_string(&_6$$7, &data, SL("fullCount"), PH_NOISY, "arangodbclient/statement.zep", 40 TSRMLS_CC);
		if (zephir_get_boolval(&_6$$7)) {
			zephir_update_property_zval(this_ptr, SL("_fullCount"), &__$true);
		} else {
			zephir_update_property_zval(this_ptr, SL("_fullCount"), &__$false);
		}
	}
	if (zephir_array_isset_string(&data, SL("_sanitize"))) {
		ZEPHIR_OBS_VAR(&_7$$8);
		zephir_array_fetch_string(&_7$$8, &data, SL("_sanitize"), PH_NOISY, "arangodbclient/statement.zep", 43 TSRMLS_CC);
		if (zephir_get_boolval(&_7$$8)) {
			zephir_update_property_zval(this_ptr, SL("_sanitize"), &__$true);
		} else {
			zephir_update_property_zval(this_ptr, SL("_sanitize"), &__$false);
		}
	}
	if (zephir_array_isset_string(&data, SL("retries"))) {
		ZEPHIR_OBS_VAR(&_8$$9);
		zephir_array_fetch_string(&_8$$9, &data, SL("retries"), PH_NOISY, "arangodbclient/statement.zep", 46 TSRMLS_CC);
		ZEPHIR_INIT_ZVAL_NREF(_9$$9);
		ZVAL_LONG(&_9$$9, zephir_get_intval(&_8$$9));
		zephir_update_property_zval(this_ptr, SL("_retries"), &_9$$9);
	}
	if (zephir_array_isset_string(&data, SL("_flat"))) {
		ZEPHIR_OBS_VAR(&_10$$10);
		zephir_array_fetch_string(&_10$$10, &data, SL("_flat"), PH_NOISY, "arangodbclient/statement.zep", 49 TSRMLS_CC);
		if (zephir_get_boolval(&_10$$10)) {
			zephir_update_property_zval(this_ptr, SL("_flat"), &__$true);
		} else {
			zephir_update_property_zval(this_ptr, SL("_flat"), &__$false);
		}
	}
	if (zephir_array_isset_string(&data, SL("cache"))) {
		ZEPHIR_OBS_VAR(&_11$$11);
		zephir_array_fetch_string(&_11$$11, &data, SL("cache"), PH_NOISY, "arangodbclient/statement.zep", 52 TSRMLS_CC);
		if (zephir_get_boolval(&_11$$11)) {
			zephir_update_property_zval(this_ptr, SL("_cache"), &__$true);
		} else {
			zephir_update_property_zval(this_ptr, SL("_cache"), &__$false);
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Statement, getConnection) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_connection");

}

PHP_METHOD(ArangoDBClient_Statement, execute) {

	zval data, response, tmpArray40cd750bba9870f18aada2478b24840a, e, _0, _1$$5, _2$$5, _4$$5, _6$$5, _7$$5, _8$$5, _9$$5, _12$$4, _13$$6, _14$$6;
	zephir_fcall_cache_entry *_3 = NULL, *_5 = NULL, *_10 = NULL, *_11 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS, tries = 0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray40cd750bba9870f18aada2478b24840a);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$5);
	ZVAL_UNDEF(&_2$$5);
	ZVAL_UNDEF(&_4$$5);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&_9$$5);
	ZVAL_UNDEF(&_12$$4);
	ZVAL_UNDEF(&_13$$6);
	ZVAL_UNDEF(&_14$$6);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_query"), PH_NOISY_CC | PH_READONLY);
	if (!(Z_TYPE_P(&_0) == IS_STRING)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Query should be a string", "arangodbclient/statement.zep", 66);
		return;
	}
	ZEPHIR_CALL_METHOD(&data, this_ptr, "builddata", NULL, 0);
	zephir_check_call_status();
	tries = 0;
	while (1) {
		if (!(1)) {
			break;
		}

		/* try_start_1: */

			ZEPHIR_INIT_NVAR(&tmpArray40cd750bba9870f18aada2478b24840a);
			array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
			zephir_read_property(&_1$$5, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_METHOD(&_2$$5, this_ptr, "getconnection", &_3, 0);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_CALL_METHOD(&_4$$5, &_2$$5, "json_encode_wrapper", &_5, 0, &data);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_INIT_NVAR(&_6$$5);
			ZVAL_STRING(&_6$$5, "/_api/cursor");
			ZEPHIR_CALL_METHOD(&response, &_1$$5, "post", NULL, 0, &_6$$5, &_4$$5, &tmpArray40cd750bba9870f18aada2478b24840a);
			zephir_check_call_status_or_jump(try_end_1);
			object_init_ex(return_value, arangodbclient_cursor_ce);
			zephir_read_property(&_7$$5, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_METHOD(&_8$$5, &response, "getjson", NULL, 0);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_CALL_METHOD(&_9$$5, this_ptr, "getcursoroptions", &_10, 0);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", &_11, 19, &_7$$5, &_8$$5, &_9$$5);
			zephir_check_call_status_or_jump(try_end_1);
			RETURN_MM();

		try_end_1:

		if (EG(exception)) {
			ZEPHIR_INIT_NVAR(&_12$$4);
			ZVAL_OBJ(&_12$$4, EG(exception));
			Z_ADDREF_P(&_12$$4);
			if (zephir_instance_of_ev(&_12$$4, arangodbclient_serverexception_ce TSRMLS_CC)) {
				zend_clear_exception(TSRMLS_C);
				ZEPHIR_CPY_WRT(&e, &_12$$4);
				tries++;
				zephir_read_property(&_13$$6, this_ptr, SL("_retries"), PH_NOISY_CC | PH_READONLY);
				if (ZEPHIR_LE_LONG(&_13$$6, tries)) {
					zephir_throw_exception_debug(&e, "arangodbclient/statement.zep", 78 TSRMLS_CC);
					ZEPHIR_MM_RESTORE();
					return;
				}
				ZEPHIR_CALL_METHOD(&_14$$6, &e, "getservercode", NULL, 0);
				zephir_check_call_status();
				if (!ZEPHIR_IS_LONG_IDENTICAL(&_14$$6, 29)) {
					zephir_throw_exception_debug(&e, "arangodbclient/statement.zep", 81 TSRMLS_CC);
					ZEPHIR_MM_RESTORE();
					return;
				}
			}
		}
	}
	RETURN_MM_NULL();

}

PHP_METHOD(ArangoDBClient_Statement, explain) {

	zval data, response, tmpArray40cd750bba9870f18aada2478b24840a, _0, _1, _2, _3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray40cd750bba9870f18aada2478b24840a);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(&data, this_ptr, "builddata", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray40cd750bba9870f18aada2478b24840a);
	array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, &_1, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/explain");
	ZEPHIR_CALL_METHOD(&response, &_0, "post", NULL, 0, &_3, &_2, &tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Statement, validate) {

	zval data, response, tmpArray40cd750bba9870f18aada2478b24840a, _0, _1, _2, _3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray40cd750bba9870f18aada2478b24840a);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(&data, this_ptr, "builddata", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray40cd750bba9870f18aada2478b24840a);
	array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, &_1, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/query");
	ZEPHIR_CALL_METHOD(&response, &_0, "post", NULL, 0, &_3, &_2, &tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Statement, __invoke) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *args, args_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&args_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &args);



	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "execute", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Statement, __toString) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_query");

}

PHP_METHOD(ArangoDBClient_Statement, bind) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key, key_sub, *value = NULL, value_sub, __$null, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key_sub);
	ZVAL_UNDEF(&value_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &key, &value);

	if (!value) {
		value = &value_sub;
		value = &__$null;
	}


	zephir_read_property(&_0, this_ptr, SL("_bindVars"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(NULL, &_0, "set", NULL, 0, key, value);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Statement, getBindVars) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_bindVars"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_RETURN_CALL_METHOD(&_0, "getall", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Statement, setQuery) {

	zval *query_param = NULL;
	zval query;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&query);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &query_param);

	zephir_get_strval(&query, query_param);


	if (!(Z_TYPE_P(&query) == IS_STRING)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Query should be a string", "arangodbclient/statement.zep", 131);
		return;
	}
	zephir_update_property_zval(this_ptr, SL("_query"), &query);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Statement, getQuery) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_query");

}

PHP_METHOD(ArangoDBClient_Statement, setResultType) {

	zval *resultType, resultType_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&resultType_sub);

	zephir_fetch_params(0, 1, 0, &resultType);



	zephir_update_property_zval(this_ptr, SL("resultType"), resultType);
	RETURN_MEMBER(getThis(), "resultType");

}

PHP_METHOD(ArangoDBClient_Statement, setCount) {

	zval *value_param = NULL, __$true, __$false;
	zend_bool value;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_boolval(value_param);


	if (value) {
		zephir_update_property_zval(this_ptr, SL("_doCount"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_doCount"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Statement, getCount) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_doCount");

}

PHP_METHOD(ArangoDBClient_Statement, setFullCount) {

	zval *value_param = NULL, __$true, __$false;
	zend_bool value;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_boolval(value_param);


	if (value) {
		zephir_update_property_zval(this_ptr, SL("_fullCount"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_fullCount"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Statement, getFullCount) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_fullCount");

}

PHP_METHOD(ArangoDBClient_Statement, setCache) {

	zval *value_param = NULL, __$true, __$false;
	zend_bool value;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_boolval(value_param);


	if (value) {
		zephir_update_property_zval(this_ptr, SL("_cache"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_cache"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Statement, getCache) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_cache");

}

PHP_METHOD(ArangoDBClient_Statement, setBatchSize) {

	zend_bool _1;
	zval *value_param = NULL, _0, _2;
	zend_long value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_intval(value_param);


	ZVAL_LONG(&_0, value);
	_1 = !(Z_TYPE_P(&_0) == IS_LONG);
	if (!(_1)) {
		_1 = value <= 0;
	}
	if (_1) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STRW(arangodbclient_clientexception_ce, "Batch size should be a positive integer", "arangodbclient/statement.zep", 180);
		return;
	}
	ZEPHIR_INIT_ZVAL_NREF(_2);
	ZVAL_LONG(&_2, value);
	zephir_update_property_zval(this_ptr, SL("_batchSize"), &_2);

}

PHP_METHOD(ArangoDBClient_Statement, getBatchSize) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_batchSize");

}

PHP_METHOD(ArangoDBClient_Statement, buildData) {

	zval _1;
	zval data, _0, _2, _4, _5, _8, _3$$3, _6$$4, _7$$4, _9$$5;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&_7$$4);
	ZVAL_UNDEF(&_9$$5);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 3, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_query"), PH_NOISY_CC);
	zephir_array_update_string(&data, SL("query"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_doCount"), PH_NOISY_CC);
	zephir_array_update_string(&data, SL("count"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_fullCount"), PH_NOISY_CC);
	zephir_array_update_string(&_1, SL("fullCount"), &_0, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&data, SL("options"), &_1, PH_COPY | PH_SEPARATE);
	zephir_read_property(&_2, this_ptr, SL("_cache"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_2) != IS_NULL) {
		zephir_read_property(&_3$$3, this_ptr, SL("_cache"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&data, SL("cache"), &_3$$3, PH_COPY | PH_SEPARATE);
	}
	zephir_read_property(&_4, this_ptr, SL("_bindVars"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_5, &_4, "getcount", NULL, 0);
	zephir_check_call_status();
	if (ZEPHIR_GT_LONG(&_5, 0)) {
		zephir_read_property(&_6$$4, this_ptr, SL("_bindVars"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_METHOD(&_7$$4, &_6$$4, "getall", NULL, 0);
		zephir_check_call_status();
		zephir_array_update_string(&data, SL("bindVars"), &_7$$4, PH_COPY | PH_SEPARATE);
	}
	zephir_read_property(&_8, this_ptr, SL("_batchSize"), PH_NOISY_CC | PH_READONLY);
	if (ZEPHIR_GT_LONG(&_8, 0)) {
		zephir_read_property(&_9$$5, this_ptr, SL("_batchSize"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&data, SL("batchSize"), &_9$$5, PH_COPY | PH_SEPARATE);
	}
	RETURN_CCTOR(&data);

}

PHP_METHOD(ArangoDBClient_Statement, getCursorOptions) {

	zend_bool _4;
	zval __$false, result, _0, _1, _3, _5, _2$$3, _6$$4;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_6$$4);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&result);
	zephir_create_array(&result, 3, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_sanitize"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("_sanitize"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_flat"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("_flat"), &__$false, PH_COPY | PH_SEPARATE);
	add_assoc_stringl_ex(&result, SL("baseurl"), SL("/_api/cursor"));
	zephir_read_property(&_1, this_ptr, SL("resultType"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_1) != IS_NULL) {
		zephir_read_property(&_2$$3, this_ptr, SL("resultType"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&result, SL("objectType"), &_2$$3, PH_COPY | PH_SEPARATE);
	}
	zephir_read_property(&_3, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	_4 = Z_TYPE_P(&_3) != IS_NULL;
	if (_4) {
		zephir_read_property(&_5, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
		_4 = !ZEPHIR_IS_STRING_IDENTICAL(&_5, "");
	}
	if (_4) {
		zephir_read_property(&_6$$4, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&result, SL("_documentClass"), &_6$$4, PH_COPY | PH_SEPARATE);
	}
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_Statement, setDocumentClass) {

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

