
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
#include "kernel/object.h"
#include "kernel/string.h"
#include "kernel/array.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Endpoint) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Endpoint, arangodbclient, endpoint, arangodbclient_endpoint_method_entry, 0);

	zend_declare_property_null(arangodbclient_endpoint_ce, SL("_value"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zephir_declare_class_constant_string(arangodbclient_endpoint_ce, SL("TYPE_TCP"), "tcp");

	zephir_declare_class_constant_string(arangodbclient_endpoint_ce, SL("TYPE_SSL"), "ssl");

	zephir_declare_class_constant_string(arangodbclient_endpoint_ce, SL("TYPE_UNIX"), "unix");

	zephir_declare_class_constant_string(arangodbclient_endpoint_ce, SL("REGEXP_TCP"), "/^tcp:\\/\\/(.+?):(\\d+)\\/?$/");

	zephir_declare_class_constant_string(arangodbclient_endpoint_ce, SL("REGEXP_SSL"), "/^ssl:\\/\\/(.+?):(\\d+)\\/?$/");

	zephir_declare_class_constant_string(arangodbclient_endpoint_ce, SL("REGEXP_UNIX"), "/^unix:\\/\\/(.+)$/");

	zephir_declare_class_constant_string(arangodbclient_endpoint_ce, SL("ENTRY_ENDPOINT"), "endpoint");

	zephir_declare_class_constant_string(arangodbclient_endpoint_ce, SL("ENTRY_DATABASES"), "databases");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Endpoint, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, _0, _1$$3, _2$$3, _3$$3;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_3$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	ZEPHIR_CALL_SELF(&_0, "isvalid", NULL, 0, &value);
	zephir_check_call_status();
	if (!(zephir_is_true(&_0))) {
		ZEPHIR_INIT_VAR(&_1$$3);
		object_init_ex(&_1$$3, arangodbclient_clientexception_ce);
		ZEPHIR_INIT_VAR(&_2$$3);
		ZVAL_STRING(&_2$$3, "invalid endpoint specification '%s'");
		ZEPHIR_CALL_FUNCTION(&_3$$3, "sprintf", NULL, 41, &_2$$3, &value);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, &_1$$3, "__construct", NULL, 37, &_3$$3);
		zephir_check_call_status();
		zephir_throw_exception_debug(&_1$$3, "arangodbclient/endpoint.zep", 17 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	zephir_update_property_zval(this_ptr, SL("_value"), &value);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Endpoint, __toString) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_value");

}

PHP_METHOD(ArangoDBClient_Endpoint, getType) {

	zval *value_param = NULL, _0, _1, _2, _3, _4, _5, _6, _7, _8;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	ZEPHIR_INIT_VAR(&_0);
	ZEPHIR_INIT_VAR(&_1);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/^tcp:\\/\\/(.+?):(\\d+)\\/?$/");
	zephir_preg_match(&_1, &_2, &value, &_0, 0, 0 , 0  TSRMLS_CC);
	if (zephir_is_true(&_1)) {
		RETURN_MM_STRING("tcp");
	}
	ZEPHIR_INIT_VAR(&_3);
	ZEPHIR_INIT_VAR(&_4);
	ZEPHIR_INIT_VAR(&_5);
	ZVAL_STRING(&_5, "/^ssl:\\/\\/(.+?):(\\d+)\\/?$/");
	zephir_preg_match(&_4, &_5, &value, &_3, 0, 0 , 0  TSRMLS_CC);
	if (zephir_is_true(&_4)) {
		RETURN_MM_STRING("ssl");
	}
	ZEPHIR_INIT_VAR(&_6);
	ZEPHIR_INIT_VAR(&_7);
	ZEPHIR_INIT_VAR(&_8);
	ZVAL_STRING(&_8, "/^unix:\\/\\/(.+)$/");
	zephir_preg_match(&_7, &_8, &value, &_6, 0, 0 , 0  TSRMLS_CC);
	if (zephir_is_true(&_7)) {
		RETURN_MM_STRING("unix");
	}
	RETURN_MM_NULL();

}

PHP_METHOD(ArangoDBClient_Endpoint, getHost) {

	zval *value_param = NULL, matches, _0, _1, _3, _4, _2$$3, _5$$4;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&matches);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_5$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	ZEPHIR_INIT_VAR(&_0);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "/^tcp:\\/\\/(.+?):(\\d+)\\/?$/");
	zephir_preg_match(&_0, &_1, &value, &matches, 0, 0 , 0  TSRMLS_CC);
	if (zephir_is_true(&_0)) {
		zephir_array_fetch_long(&_2$$3, &matches, 1, PH_NOISY | PH_READONLY, "arangodbclient/endpoint.zep", 45 TSRMLS_CC);
		RETURN_CTOR(&_2$$3);
	}
	ZEPHIR_INIT_VAR(&_3);
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "/^ssl:\\/\\/(.+?):(\\d+)\\/?$/");
	zephir_preg_match(&_3, &_4, &value, &matches, 0, 0 , 0  TSRMLS_CC);
	if (zephir_is_true(&_3)) {
		zephir_array_fetch_long(&_5$$4, &matches, 1, PH_NOISY | PH_READONLY, "arangodbclient/endpoint.zep", 48 TSRMLS_CC);
		RETURN_CTOR(&_5$$4);
	}
	RETURN_MM_NULL();

}

PHP_METHOD(ArangoDBClient_Endpoint, isValid) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, type;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&type);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	if (!(Z_TYPE_P(&value) == IS_STRING)) {
		RETURN_MM_BOOL(0);
	}
	ZEPHIR_CALL_SELF(&type, "gettype", NULL, 0, &value);
	zephir_check_call_status();
	RETURN_MM_BOOL(!zephir_is_true(&type) == 0);

}

PHP_METHOD(ArangoDBClient_Endpoint, listEndpoints) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *connection, connection_sub, response, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &connection);



	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "/_api/endpoint");
	ZEPHIR_CALL_METHOD(&response, connection, "get", NULL, 0, &_0);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

