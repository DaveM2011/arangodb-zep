
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
#include "kernel/operators.h"
#include "kernel/exception.h"
#include "kernel/memory.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_UpdatePolicy) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, UpdatePolicy, arangodbclient, updatepolicy, arangodbclient_updatepolicy_method_entry, 0);

	zephir_declare_class_constant_string(arangodbclient_updatepolicy_ce, SL("LAST"), "last");

	zephir_declare_class_constant_string(arangodbclient_updatepolicy_ce, SL("ERROR"), "error");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_UpdatePolicy, validate) {

	zend_bool _0;
	zval *value_param = NULL;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	_0 = !ZEPHIR_IS_STRING_IDENTICAL(&value, "last");
	if (_0) {
		_0 = !ZEPHIR_IS_STRING_IDENTICAL(&value, "error");
	}
	if (_0) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid update policy", "arangodbclient/updatepolicy.zep", 11);
		return;
	}
	ZEPHIR_MM_RESTORE();

}

