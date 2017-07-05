
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
#include "kernel/operators.h"
#include "kernel/fcall.h"
#include "kernel/array.h"
#include "kernel/memory.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Edge) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, Edge, arangodbclient, edge, arangodbclient_document_ce, arangodbclient_edge_method_entry, 0);

	zend_declare_property_null(arangodbclient_edge_ce, SL("_from"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_edge_ce, SL("_to"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zephir_declare_class_constant_string(arangodbclient_edge_ce, SL("ENTRY_FROM"), "_from");

	zephir_declare_class_constant_string(arangodbclient_edge_ce, SL("ENTRY_TO"), "_to");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Edge, set) {

	zend_bool _5$$10;
	unsigned char _2;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_1 = NULL;
	zval *key_param = NULL, *value, value_sub, __$true, __$false, _0, _3, _4$$10, _6$$10, _7$$10;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4$$10);
	ZVAL_UNDEF(&_6$$10);
	ZVAL_UNDEF(&_7$$10);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &key_param, &value);

	zephir_get_strval(&key, key_param);


	zephir_read_property(&_0, this_ptr, SL("_doValidate"), PH_NOISY_CC | PH_READONLY);
	if (zephir_is_true(&_0)) {
		ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_valuevalidator_ce, "validate", &_1, 0, value);
		zephir_check_call_status();
	}
	_2 = ZEPHIR_STRING_OFFSET(&key, 0);
	if (_2 == '_') {
		if (ZEPHIR_IS_STRING_IDENTICAL(&key, "_id")) {
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setinternalid", NULL, 0, value);
			zephir_check_call_status();
			RETURN_MM_NULL();
		}
		if (ZEPHIR_IS_STRING_IDENTICAL(&key, "_key")) {
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setinternalkey", NULL, 0, value);
			zephir_check_call_status();
			RETURN_MM_NULL();
		}
		if (ZEPHIR_IS_STRING_IDENTICAL(&key, "_rev")) {
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setrevision", NULL, 0, value);
			zephir_check_call_status();
			RETURN_MM_NULL();
		}
		if (ZEPHIR_IS_STRING_IDENTICAL(&key, "_from")) {
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setfrom", NULL, 0, value);
			zephir_check_call_status();
			RETURN_MM_NULL();
		}
		if (ZEPHIR_IS_STRING_IDENTICAL(&key, "_to")) {
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setto", NULL, 0, value);
			zephir_check_call_status();
			RETURN_MM_NULL();
		}
	}
	zephir_read_property(&_3, this_ptr, SL("_changed"), PH_NOISY_CC | PH_READONLY);
	if (!(zephir_is_true(&_3))) {
		zephir_read_property(&_4$$10, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		_5$$10 = !((zephir_array_isset(&_4$$10, &key)));
		if (!(_5$$10)) {
			zephir_read_property(&_6$$10, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch(&_7$$10, &_6$$10, &key, PH_NOISY | PH_READONLY, "arangodbclient/edge.zep", 37 TSRMLS_CC);
			_5$$10 = !ZEPHIR_IS_IDENTICAL(&_7$$10, value);
		}
		if (_5$$10) {
			if (1) {
				zephir_update_property_zval(this_ptr, SL("_changed"), &__$true);
			} else {
				zephir_update_property_zval(this_ptr, SL("_changed"), &__$false);
			}
		}
	}
	zephir_update_property_array(this_ptr, SL("_values"), &key, value TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Edge, setFrom) {

	zval *from, from_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&from_sub);

	zephir_fetch_params(0, 1, 0, &from);



	zephir_update_property_zval(this_ptr, SL("_from"), from);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_Edge, getFrom) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_from");

}

PHP_METHOD(ArangoDBClient_Edge, setTo) {

	zval *to, to_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&to_sub);

	zephir_fetch_params(0, 1, 0, &to);



	zephir_update_property_zval(this_ptr, SL("_to"), to);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_Edge, getTo) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_to");

}

PHP_METHOD(ArangoDBClient_Edge, getAllForInsertUpdate) {

	zval data, _1, _2;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_PARENT(&data, arangodbclient_edge_ce, getThis(), "getallforinsertupdate", &_0, 0);
	zephir_check_call_status();
	zephir_read_property(&_1, this_ptr, SL("_from"), PH_NOISY_CC | PH_READONLY);
	zephir_array_update_string(&data, SL("_from"), &_1, PH_COPY | PH_SEPARATE);
	zephir_read_property(&_2, this_ptr, SL("_to"), PH_NOISY_CC | PH_READONLY);
	zephir_array_update_string(&data, SL("_to"), &_2, PH_COPY | PH_SEPARATE);
	RETURN_CCTOR(&data);

}

