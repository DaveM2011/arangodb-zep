
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
#include "kernel/array.h"
#include "kernel/fcall.h"
#include "kernel/object.h"
#include "kernel/memory.h"
#include "kernel/operators.h"
#include "kernel/string.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Document) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Document, arangodbclient, document, arangodbclient_document_method_entry, 0);

	zend_declare_property_null(arangodbclient_document_ce, SL("_id"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_document_ce, SL("_key"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_document_ce, SL("_rev"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_document_ce, SL("_values"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_document_ce, SL("_changed"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_document_ce, SL("_isNew"), 1, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_document_ce, SL("_doValidate"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_document_ce, SL("_hiddenAttributes"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_document_ce, SL("_ignoreHiddenAttributes"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_document_ce->create_object = zephir_init_properties_ArangoDBClient_Document;
	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("ENTRY_ID"), "_id");

	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("ENTRY_KEY"), "_key");

	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("ENTRY_REV"), "_rev");

	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("ENTRY_ISNEW"), "_isNew");

	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("ENTRY_HIDDENATTRIBUTES"), "_hiddenAttributes");

	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("ENTRY_IGNOREHIDDENATTRIBUTES"), "_ignoreHiddenAttributes");

	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("OPTION_WAIT_FOR_SYNC"), "waitForSync");

	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("OPTION_POLICY"), "policy");

	zephir_declare_class_constant_string(arangodbclient_document_ce, SL("OPTION_KEEPNULL"), "keepNull");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Document, __construct) {

	zephir_fcall_cache_entry *_1 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options_param = NULL, _0$$4, _2$$5, _3$$6, _4$$7, _5$$8;
	zval options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_0$$4);
	ZVAL_UNDEF(&_2$$5);
	ZVAL_UNDEF(&_3$$6);
	ZVAL_UNDEF(&_4$$7);
	ZVAL_UNDEF(&_5$$8);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	if (Z_TYPE_P(&options) == IS_ARRAY) {
		if (zephir_array_isset_string(&options, SL("hiddenAttributes"))) {
			zephir_array_fetch_string(&_0$$4, &options, SL("hiddenAttributes"), PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 27 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "sethiddenattributes", &_1, 0, &_0$$4);
			zephir_check_call_status();
		}
		if (zephir_array_isset_string(&options, SL("_hiddenAttributes"))) {
			zephir_array_fetch_string(&_2$$5, &options, SL("_hiddenAttributes"), PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 30 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "sethiddenattributes", &_1, 0, &_2$$5);
			zephir_check_call_status();
		}
		if (zephir_array_isset_string(&options, SL("_ignoreHiddenAttributes"))) {
			zephir_array_fetch_string(&_3$$6, &options, SL("_ignoreHiddenAttributes"), PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 33 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setignorehiddenattributes", NULL, 0, &_3$$6);
			zephir_check_call_status();
		}
		if (zephir_array_isset_string(&options, SL("_isNew"))) {
			zephir_array_fetch_string(&_4$$7, &options, SL("_isNew"), PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 36 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setisnew", NULL, 0, &_4$$7);
			zephir_check_call_status();
		}
		if (zephir_array_isset_string(&options, SL("_validate"))) {
			zephir_array_fetch_string(&_5$$8, &options, SL("_validate"), PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 39 TSRMLS_CC);
			zephir_update_property_zval(this_ptr, SL("_doValidate"), &_5$$8);
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Document, createFromArray) {

	zend_string *_2;
	zend_ulong _1;
	zephir_fcall_cache_entry *_3 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *values_param = NULL, *options_param = NULL, document, key, value, *_0, _4;
	zval values, options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&values);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&document);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &values_param, &options_param);

	zephir_get_arrval(&values, values_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&document);
	object_init_ex(&document, arangodbclient_document_ce);
	ZEPHIR_CALL_METHOD(NULL, &document, "__construct", NULL, 1, &options);
	zephir_check_call_status();
	zephir_is_iterable(&values, 0, "arangodbclient/document.zep", 52);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&values), _1, _2, _0)
	{
		ZEPHIR_INIT_NVAR(&key);
		if (_2 != NULL) { 
			ZVAL_STR_COPY(&key, _2);
		} else {
			ZVAL_LONG(&key, _1);
		}
		ZEPHIR_INIT_NVAR(&value);
		ZVAL_COPY(&value, _0);
		ZEPHIR_CALL_METHOD(NULL, &document, "set", &_3, 2, &key, &value);
		zephir_check_call_status();
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&value);
	ZEPHIR_INIT_NVAR(&key);
	ZVAL_BOOL(&_4, 1);
	ZEPHIR_CALL_METHOD(NULL, &document, "setchanged", NULL, 3, &_4);
	zephir_check_call_status();
	RETURN_CCTOR(&document);

}

PHP_METHOD(ArangoDBClient_Document, __clone) {

	zval __$null;
	zval *this_ptr = getThis();

	ZVAL_NULL(&__$null);


	zephir_update_property_zval(this_ptr, SL("_id"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_key"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_rev"), &__$null);

}

PHP_METHOD(ArangoDBClient_Document, __toString) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();


	ZEPHIR_MM_GROW();

	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "tojson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Document, toJson) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options_param = NULL, _0;
	zval options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getall", NULL, 0, &options);
	zephir_check_call_status();
	zephir_json_encode(return_value, &_0, 0 );
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Document, toSerialized) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options_param = NULL, _0;
	zval options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getall", NULL, 0, &options);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_FUNCTION("serialize", NULL, 4, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Document, filterHiddenAttributes) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *attributes_param = NULL, *_hiddenAttributes_param = NULL, hiddenAttributes, hiddenAttributeName, *_0$$3;
	zval attributes, _hiddenAttributes;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&attributes);
	ZVAL_UNDEF(&_hiddenAttributes);
	ZVAL_UNDEF(&hiddenAttributes);
	ZVAL_UNDEF(&hiddenAttributeName);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &attributes_param, &_hiddenAttributes_param);

	zephir_get_arrval(&attributes, attributes_param);
	if (!_hiddenAttributes_param) {
		ZEPHIR_INIT_VAR(&_hiddenAttributes);
		array_init(&_hiddenAttributes);
	} else {
		zephir_get_arrval(&_hiddenAttributes, _hiddenAttributes_param);
	}


	if (!ZEPHIR_IS_STRING_IDENTICAL(&_hiddenAttributes, "")) {
		ZEPHIR_CPY_WRT(&hiddenAttributes, &_hiddenAttributes);
	} else {
		ZEPHIR_CALL_METHOD(&hiddenAttributes, this_ptr, "gethiddenattributes", NULL, 0);
		zephir_check_call_status();
	}
	if (zephir_fast_count_int(&hiddenAttributes TSRMLS_CC) > 0) {
		zephir_is_iterable(&hiddenAttributes, 0, "arangodbclient/document.zep", 90);
		ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&hiddenAttributes), _0$$3)
		{
			ZEPHIR_INIT_NVAR(&hiddenAttributeName);
			ZVAL_COPY(&hiddenAttributeName, _0$$3);
			if (zephir_array_isset(&attributes, &hiddenAttributeName)) {
				zephir_array_unset(&attributes, &hiddenAttributeName, PH_SEPARATE);
			}
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&hiddenAttributeName);
	}
	zephir_array_unset_string(&attributes, SL("_hiddenAttributes"), PH_SEPARATE);
	RETURN_CTOR(&attributes);

}

PHP_METHOD(ArangoDBClient_Document, set) {

	zend_bool _5$$9;
	unsigned char _2;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_1 = NULL;
	zval *key_param = NULL, *value, value_sub, __$true, __$false, _0, _3, _4$$9, _6$$9, _7$$9;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4$$9);
	ZVAL_UNDEF(&_6$$9);
	ZVAL_UNDEF(&_7$$9);

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
		if (ZEPHIR_IS_STRING_IDENTICAL(&key, "_isNew")) {
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setisnew", NULL, 0, value);
			zephir_check_call_status();
			RETURN_MM_NULL();
		}
	}
	zephir_read_property(&_3, this_ptr, SL("_changed"), PH_NOISY_CC | PH_READONLY);
	if (!(zephir_is_true(&_3))) {
		zephir_read_property(&_4$$9, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		_5$$9 = !(zephir_array_isset(&_4$$9, &key));
		if (!(_5$$9)) {
			zephir_read_property(&_6$$9, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch(&_7$$9, &_6$$9, &key, PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 120 TSRMLS_CC);
			_5$$9 = !ZEPHIR_IS_IDENTICAL(&_7$$9, value);
		}
		if (_5$$9) {
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

PHP_METHOD(ArangoDBClient_Document, __set) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key_param = NULL, *value, value_sub;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &key_param, &value);

	zephir_get_strval(&key, key_param);


	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &key, value);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Document, get) {

	zval *key_param = NULL, _0, _1$$3, _2$$3;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &key_param);

	zephir_get_strval(&key, key_param);


	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset(&_0, &key)) {
		zephir_read_property(&_1$$3, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch(&_2$$3, &_1$$3, &key, PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 135 TSRMLS_CC);
		RETURN_CTOR(&_2$$3);
	}
	RETURN_MM_NULL();

}

PHP_METHOD(ArangoDBClient_Document, __get) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key_param = NULL;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &key_param);

	zephir_get_strval(&key, key_param);


	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &key);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Document, __isset) {

	zval *key_param = NULL, _0;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &key_param);

	zephir_get_strval(&key, key_param);


	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset(&_0, &key)) {
		RETURN_MM_BOOL(1);
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_Document, __unset) {

	zval *key, key_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key_sub);
	ZVAL_UNDEF(&_0);

	zephir_fetch_params(0, 1, 0, &key);



	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_unset(&_0, key, PH_SEPARATE);

}

PHP_METHOD(ArangoDBClient_Document, getAll) {

	zend_bool _11$$6, _14$$6;
	zend_string *_9$$5;
	zend_ulong _8$$5;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_16 = NULL;
	zval *options_param = NULL, __$true, includeInternals, ignoreHiddenAttributes, _hiddenAttributes, data, nonInternals, key, value, _0, _6, _1$$4, _2$$4, _3$$4, _4$$4, _5$$4, *_7$$5, _10$$6, _12$$6, _13$$6, _15$$6, _17$$8, _18$$9;
	zval options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&includeInternals);
	ZVAL_UNDEF(&ignoreHiddenAttributes);
	ZVAL_UNDEF(&_hiddenAttributes);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&nonInternals);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_10$$6);
	ZVAL_UNDEF(&_12$$6);
	ZVAL_UNDEF(&_13$$6);
	ZVAL_UNDEF(&_15$$6);
	ZVAL_UNDEF(&_17$$8);
	ZVAL_UNDEF(&_18$$9);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&includeInternals);
	ZVAL_BOOL(&includeInternals, 0);
	ZEPHIR_OBS_VAR(&ignoreHiddenAttributes);
	zephir_read_property(&ignoreHiddenAttributes, this_ptr, SL("_ignoreHiddenAttributes"), PH_NOISY_CC);
	zephir_read_property(&_0, this_ptr, SL("_hiddenAttributes"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_hiddenAttributes, &_0);
	if (!(Z_TYPE_P(&options) == IS_ARRAY)) {
		ZEPHIR_CPY_WRT(&includeInternals, &options);
	} else {
		ZEPHIR_INIT_VAR(&_1$$4);
		ZVAL_STRING(&_1$$4, "includeInternals");
		if (zephir_array_key_exists(&options, &_1$$4 TSRMLS_CC)) {
			ZEPHIR_OBS_NVAR(&includeInternals);
			zephir_array_fetch_string(&includeInternals, &options, SL("includeInternals"), PH_NOISY, "arangodbclient/document.zep", 169 TSRMLS_CC);
		} else {
		}
		ZEPHIR_INIT_VAR(&_2$$4);
		ZVAL_STRING(&_2$$4, "_includeInternals");
		if (zephir_array_key_exists(&options, &_2$$4 TSRMLS_CC)) {
			ZEPHIR_OBS_NVAR(&includeInternals);
			zephir_array_fetch_string(&includeInternals, &options, SL("_includeInternals"), PH_NOISY, "arangodbclient/document.zep", 170 TSRMLS_CC);
		} else {
		}
		ZEPHIR_INIT_VAR(&_3$$4);
		ZVAL_STRING(&_3$$4, "ignoreHiddenAttributes");
		if (zephir_array_key_exists(&options, &_3$$4 TSRMLS_CC)) {
			ZEPHIR_OBS_NVAR(&ignoreHiddenAttributes);
			zephir_array_fetch_string(&ignoreHiddenAttributes, &options, SL("ignoreHiddenAttributes"), PH_NOISY, "arangodbclient/document.zep", 171 TSRMLS_CC);
		} else {
		}
		ZEPHIR_INIT_VAR(&_4$$4);
		ZVAL_STRING(&_4$$4, "_ignoreHiddenAttributes");
		if (zephir_array_key_exists(&options, &_4$$4 TSRMLS_CC)) {
			ZEPHIR_OBS_NVAR(&ignoreHiddenAttributes);
			zephir_array_fetch_string(&ignoreHiddenAttributes, &options, SL("_ignoreHiddenAttributes"), PH_NOISY, "arangodbclient/document.zep", 172 TSRMLS_CC);
		} else {
		}
		ZEPHIR_INIT_VAR(&_5$$4);
		ZVAL_STRING(&_5$$4, "_hiddenAttributes");
		if (zephir_array_key_exists(&options, &_5$$4 TSRMLS_CC)) {
			ZEPHIR_OBS_NVAR(&_hiddenAttributes);
			zephir_array_fetch_string(&_hiddenAttributes, &options, SL("_hiddenAttributes"), PH_NOISY, "arangodbclient/document.zep", 173 TSRMLS_CC);
		} else {
		}
	}
	ZEPHIR_OBS_VAR(&data);
	zephir_read_property(&data, this_ptr, SL("_values"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(&nonInternals);
	zephir_create_array(&nonInternals, 3, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_6);
	ZVAL_STRING(&_6, "_changed");
	zephir_array_fast_append(&nonInternals, &_6);
	ZEPHIR_INIT_NVAR(&_6);
	ZVAL_STRING(&_6, "_values");
	zephir_array_fast_append(&nonInternals, &_6);
	ZEPHIR_INIT_NVAR(&_6);
	ZVAL_STRING(&_6, "_hiddenAttributes");
	zephir_array_fast_append(&nonInternals, &_6);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&includeInternals)) {
		zephir_is_iterable(this_ptr, 0, "arangodbclient/document.zep", 183);
		ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(this_ptr), _8$$5, _9$$5, _7$$5)
		{
			ZEPHIR_INIT_NVAR(&key);
			if (_9$$5 != NULL) { 
				ZVAL_STR_COPY(&key, _9$$5);
			} else {
				ZVAL_LONG(&key, _8$$5);
			}
			ZEPHIR_INIT_NVAR(&value);
			ZVAL_COPY(&value, _7$$5);
			zephir_array_fetch_long(&_10$$6, &key, 0, PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 179 TSRMLS_CC);
			_11$$6 = ZEPHIR_IS_STRING_IDENTICAL(&_10$$6, "_");
			if (_11$$6) {
				ZEPHIR_INIT_NVAR(&_12$$6);
				ZVAL_STRING(&_12$$6, "__");
				ZEPHIR_INIT_NVAR(&_13$$6);
				zephir_fast_strpos(&_13$$6, &key, &_12$$6, 0 );
				_11$$6 = !ZEPHIR_IS_LONG_IDENTICAL(&_13$$6, 0);
			}
			_14$$6 = _11$$6;
			if (_14$$6) {
				ZEPHIR_CALL_FUNCTION(&_15$$6, "in_array", &_16, 5, &key, &nonInternals, &__$true);
				zephir_check_call_status();
				_14$$6 = !zephir_is_true(&_15$$6);
			}
			if (_14$$6) {
				zephir_array_update_zval(&data, &key, &value, PH_COPY | PH_SEPARATE);
			}
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&value);
		ZEPHIR_INIT_NVAR(&key);
	}
	if (ZEPHIR_IS_FALSE_IDENTICAL(&ignoreHiddenAttributes)) {
		ZEPHIR_CALL_METHOD(&_17$$8, this_ptr, "filterhiddenattributes", NULL, 0, &data, &_hiddenAttributes);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(&data, &_17$$8);
	}
	zephir_read_property(&_0, this_ptr, SL("_key"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_0) != IS_NULL) {
		zephir_read_property(&_18$$9, this_ptr, SL("_key"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&data, SL("_key"), &_18$$9, PH_COPY | PH_SEPARATE);
	}
	RETURN_CCTOR(&data);

}

PHP_METHOD(ArangoDBClient_Document, getAllForInsertUpdate) {

	zend_bool _4$$3, _5$$5;
	zend_string *_3;
	zend_ulong _2;
	zval data, key, value, _0, *_1, _6, _7$$7;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7$$7);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&data);
	array_init(&data);
	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_is_iterable(&_0, 0, "arangodbclient/document.zep", 208);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&_0), _2, _3, _1)
	{
		ZEPHIR_INIT_NVAR(&key);
		if (_3 != NULL) { 
			ZVAL_STR_COPY(&key, _3);
		} else {
			ZVAL_LONG(&key, _2);
		}
		ZEPHIR_INIT_NVAR(&value);
		ZVAL_COPY(&value, _1);
		_4$$3 = ZEPHIR_IS_STRING_IDENTICAL(&key, "_id");
		if (!(_4$$3)) {
			_4$$3 = ZEPHIR_IS_STRING_IDENTICAL(&key, "_rev");
		}
		if (_4$$3) {
			continue;
		} else {
			_5$$5 = ZEPHIR_IS_STRING_IDENTICAL(&key, "_key");
			if (_5$$5) {
				_5$$5 = Z_TYPE_P(&value) == IS_NULL;
			}
			if (_5$$5) {
				continue;
			}
		}
		zephir_array_update_zval(&data, &key, &value, PH_COPY | PH_SEPARATE);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&value);
	ZEPHIR_INIT_NVAR(&key);
	zephir_read_property(&_6, this_ptr, SL("_key"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_6) != IS_NULL) {
		zephir_read_property(&_7$$7, this_ptr, SL("_key"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&data, SL("_key"), &_7$$7, PH_COPY | PH_SEPARATE);
	}
	RETURN_CCTOR(&data);

}

PHP_METHOD(ArangoDBClient_Document, getAllAsObject) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options_param = NULL, result;
	zval options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&result);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&result, this_ptr, "getall", NULL, 0, &options);
	zephir_check_call_status();
	if (zephir_fast_count_int(&result TSRMLS_CC) == 0) {
		object_init(return_value);
		RETURN_MM();
	}
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_Document, setHiddenAttributes) {

	zval *attributes_param = NULL;
	zval attributes;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&attributes);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &attributes_param);

	zephir_get_arrval(&attributes, attributes_param);


	zephir_update_property_zval(this_ptr, SL("_hiddenAttributes"), &attributes);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Document, getHiddenAttributes) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_hiddenAttributes");

}

PHP_METHOD(ArangoDBClient_Document, isIgnoreHiddenAttributes) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_ignoreHiddenAttributes");

}

PHP_METHOD(ArangoDBClient_Document, setIgnoreHiddenAttributes) {

	zval *ignoreHiddenAttributes_param = NULL, __$true, __$false;
	zend_bool ignoreHiddenAttributes;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &ignoreHiddenAttributes_param);

	ignoreHiddenAttributes = zephir_get_boolval(ignoreHiddenAttributes_param);


	if (ignoreHiddenAttributes) {
		zephir_update_property_zval(this_ptr, SL("_ignoreHiddenAttributes"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_ignoreHiddenAttributes"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Document, setChanged) {

	zval *value_param = NULL, __$true, __$false;
	zend_bool value;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_boolval(value_param);


	if (value) {
		zephir_update_property_zval(this_ptr, SL("_changed"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_changed"), &__$false);
	}
	RETURN_MEMBER(getThis(), "_changed");

}

PHP_METHOD(ArangoDBClient_Document, getChanged) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_changed");

}

PHP_METHOD(ArangoDBClient_Document, setIsNew) {

	zval *isNew_param = NULL, __$true, __$false;
	zend_bool isNew;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &isNew_param);

	isNew = zephir_get_boolval(isNew_param);


	if (isNew) {
		zephir_update_property_zval(this_ptr, SL("_isNew"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_isNew"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Document, getIsNew) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_isNew");

}

PHP_METHOD(ArangoDBClient_Document, setInternalId) {

	zend_bool _1;
	zval *id_param = NULL, _0, _2, _3, _4, _5;
	zval id;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&id);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &id_param);

	zephir_get_strval(&id, id_param);


	zephir_read_property(&_0, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
	_1 = Z_TYPE_P(&_0) != IS_NULL;
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
		_1 = !ZEPHIR_IS_IDENTICAL(&_2, &id);
	}
	if (_1) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Should not update the id of an existing document", "arangodbclient/document.zep", 269);
		return;
	}
	ZEPHIR_INIT_VAR(&_3);
	ZEPHIR_INIT_VAR(&_4);
	ZEPHIR_INIT_VAR(&_5);
	ZVAL_STRING(&_5, "/^[a-zA-Z0-9_-]{1,64}\\/[a-zA-Z0-9_:.@\\-()+,=;$!*'%]{1,254}$/");
	zephir_preg_match(&_4, &_5, &id, &_3, 0, 0 , 0  TSRMLS_CC);
	if (!(zephir_is_true(&_4))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid format for document id", "arangodbclient/document.zep", 272);
		return;
	}
	zephir_update_property_zval(this_ptr, SL("_id"), &id);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Document, setInternalKey) {

	zend_bool _1;
	zval *key_param = NULL, _0, _2, _3, _4, _5;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &key_param);

	zephir_get_strval(&key, key_param);


	zephir_read_property(&_0, this_ptr, SL("_key"), PH_NOISY_CC | PH_READONLY);
	_1 = Z_TYPE_P(&_0) != IS_NULL;
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_key"), PH_NOISY_CC | PH_READONLY);
		_1 = !ZEPHIR_IS_IDENTICAL(&_2, &key);
	}
	if (_1) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Should not update the key of an existing document", "arangodbclient/document.zep", 280);
		return;
	}
	ZEPHIR_INIT_VAR(&_3);
	ZEPHIR_INIT_VAR(&_4);
	ZEPHIR_INIT_VAR(&_5);
	ZVAL_STRING(&_5, "/^[a-zA-Z0-9_:.@\\-()+,=;$!*'%]{1,254}$/");
	zephir_preg_match(&_4, &_5, &key, &_3, 0, 0 , 0  TSRMLS_CC);
	if (!(zephir_is_true(&_4))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid format for document key", "arangodbclient/document.zep", 283);
		return;
	}
	zephir_update_property_zval(this_ptr, SL("_key"), &key);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Document, getInternalId) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_id");

}

PHP_METHOD(ArangoDBClient_Document, getInternalKey) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_key");

}

PHP_METHOD(ArangoDBClient_Document, getHandle) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();


	ZEPHIR_MM_GROW();

	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getinternalid", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Document, getId) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_id");

}

PHP_METHOD(ArangoDBClient_Document, getKey) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();


	ZEPHIR_MM_GROW();

	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getinternalkey", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Document, getCollectionId) {

	zval collectionId, tmpListCollectionId, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&tmpListCollectionId);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&tmpListCollectionId);
	zephir_fast_explode_str(&tmpListCollectionId, SL("/"), &_0, 2  TSRMLS_CC);
	zephir_array_fetch_long(&collectionId, &tmpListCollectionId, 0, PH_NOISY | PH_READONLY, "arangodbclient/document.zep", 318 TSRMLS_CC);
	RETURN_CTOR(&collectionId);

}

PHP_METHOD(ArangoDBClient_Document, setRevision) {

	zval *rev_param = NULL;
	zval rev;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&rev);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &rev_param);

	zephir_get_strval(&rev, rev_param);


	zephir_update_property_zval(this_ptr, SL("_rev"), &rev);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Document, getRevision) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_rev");

}

zend_object *zephir_init_properties_ArangoDBClient_Document(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _2, _1$$3, _3$$4;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_3$$4);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_hiddenAttributes"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_hiddenAttributes"), &_1$$3);
		}
		zephir_read_property(&_2, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_2) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_3$$4);
			array_init(&_3$$4);
			zephir_update_property_zval(this_ptr, SL("_values"), &_3$$4);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

