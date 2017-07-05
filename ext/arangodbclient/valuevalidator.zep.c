
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
#include "kernel/operators.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_ValueValidator) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, ValueValidator, arangodbclient, valuevalidator, arangodbclient_valuevalidator_method_entry, 0);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_ValueValidator, validate) {

	zend_bool _0, _1, _3, _4;
	zephir_fcall_cache_entry *_6 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value, value_sub, subValue, _2, *_5$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value_sub);
	ZVAL_UNDEF(&subValue);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value);



	_0 = Z_TYPE_P(value) == IS_STRING;
	if (!(_0)) {
		_0 = Z_TYPE_P(value) == IS_LONG;
	}
	_1 = _0;
	if (!(_1)) {
		ZEPHIR_CALL_FUNCTION(&_2, "is_float", NULL, 8, value);
		zephir_check_call_status();
		_1 = zephir_is_true(&_2);
	}
	_3 = _1;
	if (!(_3)) {
		_3 = (Z_TYPE_P(value) == IS_TRUE || Z_TYPE_P(value) == IS_FALSE);
	}
	_4 = _3;
	if (!(_4)) {
		_4 = Z_TYPE_P(value) == IS_NULL;
	}
	if (_4) {
		RETURN_MM_NULL();
	}
	if (Z_TYPE_P(value) == IS_ARRAY) {
		zephir_is_iterable(value, 0, "arangodbclient/valuevalidator.zep", 16);
		ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(value), _5$$4)
		{
			ZEPHIR_INIT_NVAR(&subValue);
			ZVAL_COPY(&subValue, _5$$4);
			ZEPHIR_CALL_SELF(NULL, "validate", &_6, 0, &subValue);
			zephir_check_call_status();
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&subValue);
		RETURN_MM_NULL();
	}
	ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid bind parameter value", "arangodbclient/valuevalidator.zep", 18);
	return;

}

