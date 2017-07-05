
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


ZEPHIR_INIT_CLASS(ArangoDBClient_Export) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Export, arangodbclient, export, arangodbclient_export_method_entry, 0);

	zend_declare_property_null(arangodbclient_export_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_export_ce, SL("_collection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_export_ce, SL("_batchSize"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_export_ce, SL("_flat"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_export_ce, SL("_flush"), 1, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_export_ce, SL("_type"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_export_ce, SL("_restrictions"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(arangodbclient_export_ce, SL("_limit"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_export_ce, SL("_documentClass"), "\\ArangoDBClient\\Document", ZEND_ACC_PROTECTED TSRMLS_CC);

	zephir_declare_class_constant_string(arangodbclient_export_ce, SL("ENTRY_COUNT"), "count");

	zephir_declare_class_constant_string(arangodbclient_export_ce, SL("ENTRY_BATCHSIZE"), "batchSize");

	zephir_declare_class_constant_string(arangodbclient_export_ce, SL("ENTRY_FLUSH"), "flush");

	zephir_declare_class_constant_string(arangodbclient_export_ce, SL("ENTRY_RESTRICT"), "restrict");

	zephir_declare_class_constant_string(arangodbclient_export_ce, SL("ENTRY_LIMIT"), "limit");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Export, __construct) {

	zend_bool _8, _11$$7, _14$$7;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval data;
	zval *connection, connection_sub, *collection = NULL, collection_sub, *data_param = NULL, __$true, __$false, collectionHandler, restrictions, tmpArray1ad93cd458ab50bc8b784be1f82fa4b3, _2, _3, _9, _0$$3, _1$$3, _4$$4, _5$$5, _6$$6, _7$$6, _10$$7, _12$$7, _13$$7, _15$$7, _16$$10;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&collection_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&collectionHandler);
	ZVAL_UNDEF(&restrictions);
	ZVAL_UNDEF(&tmpArray1ad93cd458ab50bc8b784be1f82fa4b3);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&_6$$6);
	ZVAL_UNDEF(&_7$$6);
	ZVAL_UNDEF(&_10$$7);
	ZVAL_UNDEF(&_12$$7);
	ZVAL_UNDEF(&_13$$7);
	ZVAL_UNDEF(&_15$$7);
	ZVAL_UNDEF(&_16$$10);
	ZVAL_UNDEF(&data);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &connection, &collection, &data_param);

	ZEPHIR_SEPARATE_PARAM(collection);
	if (!data_param) {
		ZEPHIR_INIT_VAR(&data);
		array_init(&data);
	} else {
		zephir_get_arrval(&data, data_param);
	}


	zephir_update_property_zval(this_ptr, SL("_connection"), connection);
	if (zephir_instance_of_ev(collection, arangodbclient_collection_ce TSRMLS_CC)) {
	} else {
		ZEPHIR_INIT_VAR(&collectionHandler);
		object_init_ex(&collectionHandler, arangodbclient_collectionhandler_ce);
		zephir_read_property(&_0$$3, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_METHOD(NULL, &collectionHandler, "__construct", NULL, 9, &_0$$3);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&_1$$3, &collectionHandler, "get", NULL, 53, collection);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(collection, &_1$$3);
	}
	zephir_update_property_zval(this_ptr, SL("_collection"), collection);
	zephir_read_property(&_2, this_ptr, SL("_collection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_3, &_2, "gettype", NULL, 0);
	zephir_check_call_status();
	zephir_update_property_zval(this_ptr, SL("_type"), &_3);
	if (zephir_array_isset_string(&data, SL("flush"))) {
		zephir_array_fetch_string(&_4$$4, &data, SL("flush"), PH_NOISY | PH_READONLY, "arangodbclient/export.zep", 33 TSRMLS_CC);
		zephir_update_property_zval(this_ptr, SL("_flush"), &_4$$4);
	}
	if (zephir_array_isset_string(&data, SL("batchSize"))) {
		zephir_array_fetch_string(&_5$$5, &data, SL("batchSize"), PH_NOISY | PH_READONLY, "arangodbclient/export.zep", 36 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setbatchsize", NULL, 0, &_5$$5);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(&data, SL("limit"))) {
		ZEPHIR_OBS_VAR(&_6$$6);
		zephir_array_fetch_string(&_6$$6, &data, SL("limit"), PH_NOISY, "arangodbclient/export.zep", 39 TSRMLS_CC);
		ZEPHIR_INIT_ZVAL_NREF(_7$$6);
		ZVAL_LONG(&_7$$6, zephir_get_intval(&_6$$6));
		zephir_update_property_zval(this_ptr, SL("_limit"), &_7$$6);
	}
	_8 = zephir_array_isset_string(&data, SL("restrict"));
	if (_8) {
		zephir_array_fetch_string(&_9, &data, SL("restrict"), PH_NOISY | PH_READONLY, "arangodbclient/export.zep", 41 TSRMLS_CC);
		_8 = Z_TYPE_P(&_9) == IS_ARRAY;
	}
	if (_8) {
		ZEPHIR_OBS_VAR(&restrictions);
		zephir_array_fetch_string(&restrictions, &data, SL("restrict"), PH_NOISY, "arangodbclient/export.zep", 42 TSRMLS_CC);
		ZEPHIR_INIT_VAR(&tmpArray1ad93cd458ab50bc8b784be1f82fa4b3);
		zephir_create_array(&tmpArray1ad93cd458ab50bc8b784be1f82fa4b3, 2, 0 TSRMLS_CC);
		ZEPHIR_INIT_VAR(&_10$$7);
		ZVAL_STRING(&_10$$7, "include");
		zephir_array_fast_append(&tmpArray1ad93cd458ab50bc8b784be1f82fa4b3, &_10$$7);
		ZEPHIR_INIT_NVAR(&_10$$7);
		ZVAL_STRING(&_10$$7, "exclude");
		zephir_array_fast_append(&tmpArray1ad93cd458ab50bc8b784be1f82fa4b3, &_10$$7);
		_11$$7 = !(zephir_array_isset_string(&restrictions, SL("type")));
		if (!(_11$$7)) {
			zephir_array_fetch_string(&_12$$7, &restrictions, SL("type"), PH_NOISY | PH_READONLY, "arangodbclient/export.zep", 44 TSRMLS_CC);
			ZEPHIR_CALL_FUNCTION(&_13$$7, "in_array", NULL, 5, &_12$$7, &tmpArray1ad93cd458ab50bc8b784be1f82fa4b3, &__$true);
			zephir_check_call_status();
			_11$$7 = !zephir_is_true(&_13$$7);
		}
		if (_11$$7) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid restrictions type definition", "arangodbclient/export.zep", 45);
			return;
		}
		_14$$7 = !(zephir_array_isset_string(&restrictions, SL("fields")));
		if (!(_14$$7)) {
			zephir_array_fetch_string(&_15$$7, &restrictions, SL("fields"), PH_NOISY | PH_READONLY, "arangodbclient/export.zep", 47 TSRMLS_CC);
			_14$$7 = !(Z_TYPE_P(&_15$$7) == IS_ARRAY);
		}
		if (_14$$7) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid restrictions fields definition", "arangodbclient/export.zep", 48);
			return;
		}
		zephir_update_property_zval(this_ptr, SL("_restrictions"), &restrictions);
	}
	if (zephir_array_isset_string(&data, SL("_flat"))) {
		ZEPHIR_OBS_VAR(&_16$$10);
		zephir_array_fetch_string(&_16$$10, &data, SL("_flat"), PH_NOISY, "arangodbclient/export.zep", 53 TSRMLS_CC);
		if (zephir_get_boolval(&_16$$10)) {
			zephir_update_property_zval(this_ptr, SL("_flat"), &__$true);
		} else {
			zephir_update_property_zval(this_ptr, SL("_flat"), &__$false);
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Export, getConnection) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_connection");

}

PHP_METHOD(ArangoDBClient_Export, execute) {

	zval _9;
	zephir_fcall_cache_entry *_8 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval __$true, data, collection, url, response, _0, _1, _3, _5, _10, _11, _12, _13, _14, _15, _16, _2$$3, _4$$4, _6$$5, _7$$6;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_15);
	ZVAL_UNDEF(&_16);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$6);
	ZVAL_UNDEF(&_9);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 2, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_flush"), PH_NOISY_CC);
	zephir_array_update_string(&data, SL("flush"), &_0, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&data, SL("count"), &__$true, PH_COPY | PH_SEPARATE);
	zephir_read_property(&_1, this_ptr, SL("_batchSize"), PH_NOISY_CC | PH_READONLY);
	if (ZEPHIR_GT_LONG(&_1, 0)) {
		zephir_read_property(&_2$$3, this_ptr, SL("_batchSize"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&data, SL("batchSize"), &_2$$3, PH_COPY | PH_SEPARATE);
	}
	zephir_read_property(&_3, this_ptr, SL("_limit"), PH_NOISY_CC | PH_READONLY);
	if (ZEPHIR_GT_LONG(&_3, 0)) {
		zephir_read_property(&_4$$4, this_ptr, SL("_limit"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&data, SL("limit"), &_4$$4, PH_COPY | PH_SEPARATE);
	}
	zephir_read_property(&_5, this_ptr, SL("_restrictions"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_5) == IS_ARRAY) {
		zephir_read_property(&_6$$5, this_ptr, SL("_restrictions"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&data, SL("restrict"), &_6$$5, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_OBS_VAR(&collection);
	zephir_read_property(&collection, this_ptr, SL("_collection"), PH_NOISY_CC);
	if (zephir_instance_of_ev(&collection, arangodbclient_collection_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&_7$$6, &collection, "getname", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(&collection, &_7$$6);
	}
	ZEPHIR_INIT_VAR(&_9);
	zephir_create_array(&_9, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&_9, SL("collection"), &collection, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_10);
	ZVAL_STRING(&_10, "/_api/export");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "appendparamsurl", &_8, 0, &_10, &_9);
	zephir_check_call_status();
	zephir_read_property(&_11, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_12, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_13, &_12, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_11, "post", NULL, 0, &url, &_13);
	zephir_check_call_status();
	object_init_ex(return_value, arangodbclient_exportcursor_ce);
	zephir_read_property(&_14, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_15, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_16, this_ptr, "getcursoroptions", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 54, &_14, &_15, &_16);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Export, setBatchSize) {

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
		ZEPHIR_THROW_EXCEPTION_DEBUG_STRW(arangodbclient_clientexception_ce, "Batch size should be a positive integer", "arangodbclient/export.zep", 88);
		return;
	}
	ZEPHIR_INIT_ZVAL_NREF(_2);
	ZVAL_LONG(&_2, value);
	zephir_update_property_zval(this_ptr, SL("_batchSize"), &_2);

}

PHP_METHOD(ArangoDBClient_Export, getBatchSize) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_batchSize");

}

PHP_METHOD(ArangoDBClient_Export, getCursorOptions) {

	zval __$false, result, _0;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&result);
	zephir_create_array(&result, 4, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_flat"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("_flat"), &__$false, PH_COPY | PH_SEPARATE);
	add_assoc_stringl_ex(&result, SL("baseurl"), SL("/_api/export"));
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_type"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("type"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("_documentClass"), &_0, PH_COPY | PH_SEPARATE);
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_Export, setDocumentClass) {

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

