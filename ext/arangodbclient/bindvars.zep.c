
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
#include "kernel/operators.h"
#include "kernel/exception.h"
#include "kernel/array.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_BindVars) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, BindVars, arangodbclient, bindvars, arangodbclient_bindvars_method_entry, 0);

	zend_declare_property_null(arangodbclient_bindvars_ce, SL("_values"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_bindvars_ce->create_object = zephir_init_properties_ArangoDBClient_BindVars;
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_BindVars, getAll) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_values");

}

PHP_METHOD(ArangoDBClient_BindVars, getCount) {

	zval _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);


	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	RETURN_LONG(zephir_fast_count_int(&_0 TSRMLS_CC));

}

PHP_METHOD(ArangoDBClient_BindVars, set) {

	zval _3$$6;
	zend_bool _2$$5;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_1 = NULL;
	zval *name, name_sub, *value = NULL, value_sub, __$null, *_0$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name_sub);
	ZVAL_UNDEF(&value_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&_3$$6);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &name, &value);

	if (!value) {
		value = &value_sub;
		ZEPHIR_CPY_WRT(value, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(value);
	}


	if (Z_TYPE_P(name) == IS_ARRAY) {
		zephir_is_iterable(name, 0, "arangodbclient/bindvars.zep", 22);
		ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(name), _0$$3)
		{
			ZEPHIR_INIT_NVAR(value);
			ZVAL_COPY(value, _0$$3);
			ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_valuevalidator_ce, "validate", &_1, 0, value);
			zephir_check_call_status();
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(value);
		zephir_update_property_zval(this_ptr, SL("_values"), name);
	} else {
		_2$$5 = Z_TYPE_P(name) == IS_LONG;
		if (!(_2$$5)) {
			_2$$5 = Z_TYPE_P(name) == IS_STRING;
		}
		if (_2$$5) {
			zephir_get_strval(&_3$$6, name);
			zephir_update_property_array(this_ptr, SL("_values"), &_3$$6, value TSRMLS_CC);
			ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_valuevalidator_ce, "validate", &_1, 0, value);
			zephir_check_call_status();
		} else {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Bind variable name should be string or int", "arangodbclient/bindvars.zep", 28);
			return;
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_BindVars, get) {

	zval *name_param = NULL, _0, _1, _2;
	zval name;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &name_param);

	zephir_get_strval(&name, name_param);


	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	if (!(zephir_array_key_exists(&_0, &name TSRMLS_CC))) {
		RETURN_MM_NULL();
	}
	zephir_read_property(&_1, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch(&_2, &_1, &name, PH_NOISY | PH_READONLY, "arangodbclient/bindvars.zep", 38 TSRMLS_CC);
	RETURN_CTOR(&_2);

}

zend_object *zephir_init_properties_ArangoDBClient_BindVars(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _1$$3;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_values"), &_1$$3);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

