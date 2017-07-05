
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
#include "kernel/object.h"
#include "kernel/operators.h"
#include "kernel/file.h"
#include "kernel/exception.h"
#include "kernel/concat.h"
#include "kernel/string.h"
#include "kernel/array.h"
#include "kernel/time.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Connection) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Connection, arangodbclient, connection, arangodbclient_connection_method_entry, 0);

	zend_declare_property_null(arangodbclient_connection_ce, SL("_options"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_connection_ce, SL("_httpHeader"), "", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_connection_ce, SL("_baseUrl"), "", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_connection_ce, SL("_handle"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_connection_ce, SL("_useKeepAlive"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_connection_ce, SL("_batches"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_connection_ce, SL("_activeBatch"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_connection_ce, SL("_captureBatch"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_connection_ce, SL("_batchRequest"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_connection_ce, SL("_database"), "", ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_connection_ce->create_object = zephir_init_properties_ArangoDBClient_Connection;
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Connection, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options_param = NULL, __$true, __$false, _0, _1, _2, _3, _4, _5;
	zval options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &options_param);

	zephir_get_arrval(&options, options_param);


	ZEPHIR_INIT_VAR(&_0);
	object_init_ex(&_0, arangodbclient_connectionoptions_ce);
	ZEPHIR_CALL_METHOD(NULL, &_0, "__construct", NULL, 39, &options);
	zephir_check_call_status();
	zephir_update_property_zval(this_ptr, SL("_options"), &_0);
	zephir_read_property(&_1, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "Connection");
	ZEPHIR_CALL_METHOD(&_2, &_1, "offsetget", NULL, 0, &_3);
	zephir_check_call_status();
	if (ZEPHIR_IS_STRING(&_2, "Keep-Alive")) {
		zephir_update_property_zval(this_ptr, SL("_useKeepAlive"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_useKeepAlive"), &__$false);
	}
	zephir_read_property(&_4, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "database");
	ZEPHIR_CALL_METHOD(&_5, &_4, "offsetget", NULL, 0, &_3);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setdatabase", NULL, 0, &_5);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Connection, __destruct) {

	zend_bool _1;
	zval _0, _2, _3$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3$$3);


	zephir_read_property(&_0, this_ptr, SL("_useKeepAlive"), PH_NOISY_CC | PH_READONLY);
	_1 = zephir_is_true(&_0);
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_handle"), PH_NOISY_CC | PH_READONLY);
		_1 = Z_TYPE_P(&_2) == IS_RESOURCE;
	}
	if (_1) {
		zephir_read_property(&_3$$3, this_ptr, SL("_handle"), PH_NOISY_CC | PH_READONLY);
		zephir_fclose(&_3$$3 TSRMLS_CC);
	}

}

PHP_METHOD(ArangoDBClient_Connection, setOption) {

	zend_bool _0, _1, _2, _3, _4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *name_param = NULL, *value, value_sub, __$true, __$false, _7, _5$$3, _6$$3, _8$$4, _9$$5, _10$$7;
	zval name;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&value_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_5$$3);
	ZVAL_UNDEF(&_6$$3);
	ZVAL_UNDEF(&_8$$4);
	ZVAL_UNDEF(&_9$$5);
	ZVAL_UNDEF(&_10$$7);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &name_param, &value);

	zephir_get_strval(&name, name_param);


	_0 = ZEPHIR_IS_STRING_IDENTICAL(&name, "endpoint");
	if (!(_0)) {
		_0 = ZEPHIR_IS_STRING_IDENTICAL(&name, "host");
	}
	_1 = _0;
	if (!(_1)) {
		_1 = ZEPHIR_IS_STRING_IDENTICAL(&name, "port");
	}
	_2 = _1;
	if (!(_2)) {
		_2 = ZEPHIR_IS_STRING_IDENTICAL(&name, "verifyCert");
	}
	_3 = _2;
	if (!(_3)) {
		_3 = ZEPHIR_IS_STRING_IDENTICAL(&name, "ciphers");
	}
	_4 = _3;
	if (!(_4)) {
		_4 = ZEPHIR_IS_STRING_IDENTICAL(&name, "allowSelfSigned");
	}
	if (_4) {
		ZEPHIR_INIT_VAR(&_5$$3);
		object_init_ex(&_5$$3, arangodbclient_clientexception_ce);
		ZEPHIR_INIT_VAR(&_6$$3);
		ZEPHIR_CONCAT_SVS(&_6$$3, "Must not set option ", value, " after connection is created.");
		ZEPHIR_CALL_METHOD(NULL, &_5$$3, "__construct", NULL, 37, &_6$$3);
		zephir_check_call_status();
		zephir_throw_exception_debug(&_5$$3, "arangodbclient/connection.zep", 32 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	zephir_read_property(&_7, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(NULL, &_7, "offsetset", NULL, 0, &name, value);
	zephir_check_call_status();
	if (ZEPHIR_IS_STRING_IDENTICAL(&name, "timeout")) {
		zephir_read_property(&_8$$4, this_ptr, SL("_handle"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_8$$4) == IS_RESOURCE) {
			zephir_read_property(&_9$$5, this_ptr, SL("_handle"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_FUNCTION(NULL, "stream_set_timeout", NULL, 40, &_9$$5, value);
			zephir_check_call_status();
		}
	} else {
		if (ZEPHIR_IS_STRING_IDENTICAL(&name, "Connection")) {
			ZEPHIR_INIT_VAR(&_10$$7);
			zephir_fast_strtolower(&_10$$7, value);
			if (ZEPHIR_IS_STRING_IDENTICAL(&_10$$7, "keep-alive")) {
				zephir_update_property_zval(this_ptr, SL("_useKeepAlive"), &__$true);
			} else {
				zephir_update_property_zval(this_ptr, SL("_useKeepAlive"), &__$false);
			}
		} else {
			if (ZEPHIR_IS_STRING_IDENTICAL(&name, "database")) {
				ZEPHIR_CALL_METHOD(NULL, this_ptr, "setdatabase", NULL, 0, value);
				zephir_check_call_status();
			}
		}
	}
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "updatehttpheader", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Connection, getOptions) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_options");

}

PHP_METHOD(ArangoDBClient_Connection, getOption) {

	zval *name_param = NULL, _0, _1;
	zval name;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &name_param);

	zephir_get_strval(&name, name_param);


	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch(&_1, &_0, &name, PH_NOISY | PH_READONLY, "arangodbclient/connection.zep", 59 TSRMLS_CC);
	RETURN_CTOR(&_1);

}

PHP_METHOD(ArangoDBClient_Connection, get) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval customHeaders;
	zval *url_param = NULL, *customHeaders_param = NULL, response, _0, _1;
	zval url;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&customHeaders);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &url_param, &customHeaders_param);

	zephir_get_strval(&url, url_param);
	if (!customHeaders_param) {
		ZEPHIR_INIT_VAR(&customHeaders);
		array_init(&customHeaders);
	} else {
		zephir_get_arrval(&customHeaders, customHeaders_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "GET");
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "");
	ZEPHIR_CALL_METHOD(&response, this_ptr, "executerequest", NULL, 0, &_0, &url, &_1, &customHeaders);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "parseresponse", NULL, 0, &response);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Connection, post) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval customHeaders;
	zval *url_param = NULL, *data_param = NULL, *customHeaders_param = NULL, response, _0;
	zval url, data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&customHeaders);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &url_param, &data_param, &customHeaders_param);

	zephir_get_strval(&url, url_param);
	zephir_get_strval(&data, data_param);
	if (!customHeaders_param) {
		ZEPHIR_INIT_VAR(&customHeaders);
		array_init(&customHeaders);
	} else {
		zephir_get_arrval(&customHeaders, customHeaders_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "POST");
	ZEPHIR_CALL_METHOD(&response, this_ptr, "executerequest", NULL, 0, &_0, &url, &data, &customHeaders);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "parseresponse", NULL, 0, &response);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Connection, put) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval customHeaders;
	zval *url_param = NULL, *data_param = NULL, *customHeaders_param = NULL, response, _0;
	zval url, data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&customHeaders);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &url_param, &data_param, &customHeaders_param);

	zephir_get_strval(&url, url_param);
	zephir_get_strval(&data, data_param);
	if (!customHeaders_param) {
		ZEPHIR_INIT_VAR(&customHeaders);
		array_init(&customHeaders);
	} else {
		zephir_get_arrval(&customHeaders, customHeaders_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "PUT");
	ZEPHIR_CALL_METHOD(&response, this_ptr, "executerequest", NULL, 0, &_0, &url, &data, &customHeaders);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "parseresponse", NULL, 0, &response);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Connection, head) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval customHeaders;
	zval *url_param = NULL, *customHeaders_param = NULL, response, _0, _1;
	zval url;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&customHeaders);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &url_param, &customHeaders_param);

	zephir_get_strval(&url, url_param);
	if (!customHeaders_param) {
		ZEPHIR_INIT_VAR(&customHeaders);
		array_init(&customHeaders);
	} else {
		zephir_get_arrval(&customHeaders, customHeaders_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "HEAD");
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "");
	ZEPHIR_CALL_METHOD(&response, this_ptr, "executerequest", NULL, 0, &_0, &url, &_1, &customHeaders);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "parseresponse", NULL, 0, &response);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Connection, patch) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval customHeaders;
	zval *url_param = NULL, *data_param = NULL, *customHeaders_param = NULL, response, _0;
	zval url, data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&customHeaders);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &url_param, &data_param, &customHeaders_param);

	zephir_get_strval(&url, url_param);
	zephir_get_strval(&data, data_param);
	if (!customHeaders_param) {
		ZEPHIR_INIT_VAR(&customHeaders);
		array_init(&customHeaders);
	} else {
		zephir_get_arrval(&customHeaders, customHeaders_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "PATCH");
	ZEPHIR_CALL_METHOD(&response, this_ptr, "executerequest", NULL, 0, &_0, &url, &data, &customHeaders);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "parseresponse", NULL, 0, &response);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Connection, delete) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval customHeaders;
	zval *url_param = NULL, *customHeaders_param = NULL, response, _0, _1;
	zval url;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&customHeaders);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &url_param, &customHeaders_param);

	zephir_get_strval(&url, url_param);
	if (!customHeaders_param) {
		ZEPHIR_INIT_VAR(&customHeaders);
		array_init(&customHeaders);
	} else {
		zephir_get_arrval(&customHeaders, customHeaders_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "DELETE");
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "");
	ZEPHIR_CALL_METHOD(&response, this_ptr, "executerequest", NULL, 0, &_0, &url, &_1, &customHeaders);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "parseresponse", NULL, 0, &response);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Connection, updateHttpHeader) {

	zend_bool _12;
	zval endpoint, authorizationValue, _httpHeader, _0, _1, _2, _10, _11, _13, _14, _25, _26, _32, _4$$3, _6$$3, _7$$3, _8$$3, _15$$4, _16$$4, _17$$4, _18$$4, _19$$4, _20$$4, _21$$4, _22$$4, _23$$4, _24$$4, _27$$5, _28$$5, _29$$5, _30$$5, _31$$5, _33$$6, _34$$7, _35$$7, _36$$7;
	zephir_fcall_cache_entry *_3 = NULL, *_5 = NULL, *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&endpoint);
	ZVAL_UNDEF(&authorizationValue);
	ZVAL_UNDEF(&_httpHeader);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_25);
	ZVAL_UNDEF(&_26);
	ZVAL_UNDEF(&_32);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&_6$$3);
	ZVAL_UNDEF(&_7$$3);
	ZVAL_UNDEF(&_8$$3);
	ZVAL_UNDEF(&_15$$4);
	ZVAL_UNDEF(&_16$$4);
	ZVAL_UNDEF(&_17$$4);
	ZVAL_UNDEF(&_18$$4);
	ZVAL_UNDEF(&_19$$4);
	ZVAL_UNDEF(&_20$$4);
	ZVAL_UNDEF(&_21$$4);
	ZVAL_UNDEF(&_22$$4);
	ZVAL_UNDEF(&_23$$4);
	ZVAL_UNDEF(&_24$$4);
	ZVAL_UNDEF(&_27$$5);
	ZVAL_UNDEF(&_28$$5);
	ZVAL_UNDEF(&_29$$5);
	ZVAL_UNDEF(&_30$$5);
	ZVAL_UNDEF(&_31$$5);
	ZVAL_UNDEF(&_33$$6);
	ZVAL_UNDEF(&_34$$7);
	ZVAL_UNDEF(&_35$$7);
	ZVAL_UNDEF(&_36$$7);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_httpHeader);
	ZVAL_STRING(&_httpHeader, "");
	ZEPHIR_INIT_NVAR(&_httpHeader);
	ZVAL_STRING(&_httpHeader, "\r\n");
	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "endpoint");
	ZEPHIR_CALL_METHOD(&endpoint, &_0, "offsetget", NULL, 0, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_2, arangodbclient_endpoint_ce, "gettype", &_3, 0, &endpoint);
	zephir_check_call_status();
	if (!ZEPHIR_IS_STRING(&_2, "unix")) {
		ZEPHIR_CALL_CE_STATIC(&_4$$3, arangodbclient_endpoint_ce, "gethost", &_5, 0, &endpoint);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&_6$$3);
		ZVAL_STRING(&_6$$3, "Host: %s%s");
		ZEPHIR_INIT_VAR(&_7$$3);
		ZVAL_STRING(&_7$$3, "\r\n");
		ZEPHIR_CALL_FUNCTION(&_8$$3, "sprintf", &_9, 41, &_6$$3, &_4$$3, &_7$$3);
		zephir_check_call_status();
		zephir_concat_self(&_httpHeader, &_8$$3 TSRMLS_CC);
	}
	zephir_read_property(&_10, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "AuthType");
	ZEPHIR_CALL_METHOD(&_11, &_10, "offsetexists", NULL, 0, &_1);
	zephir_check_call_status();
	_12 = zephir_is_true(&_11);
	if (_12) {
		zephir_read_property(&_13, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_NVAR(&_1);
		ZVAL_STRING(&_1, "AuthUser");
		ZEPHIR_CALL_METHOD(&_14, &_13, "offsetexists", NULL, 0, &_1);
		zephir_check_call_status();
		_12 = zephir_is_true(&_14);
	}
	if (_12) {
		zephir_read_property(&_15$$4, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_VAR(&_17$$4);
		ZVAL_STRING(&_17$$4, "AuthUser");
		ZEPHIR_CALL_METHOD(&_16$$4, &_15$$4, "offsetget", NULL, 0, &_17$$4);
		zephir_check_call_status();
		zephir_read_property(&_18$$4, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_NVAR(&_17$$4);
		ZVAL_STRING(&_17$$4, "AuthPasswd");
		ZEPHIR_CALL_METHOD(&_19$$4, &_18$$4, "offsetget", NULL, 0, &_17$$4);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&_20$$4);
		ZEPHIR_CONCAT_VSV(&_20$$4, &_16$$4, ":", &_19$$4);
		ZEPHIR_CALL_FUNCTION(&authorizationValue, "base64_encode", NULL, 42, &_20$$4);
		zephir_check_call_status();
		zephir_read_property(&_21$$4, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_NVAR(&_17$$4);
		ZVAL_STRING(&_17$$4, "AuthType");
		ZEPHIR_CALL_METHOD(&_22$$4, &_21$$4, "offsetget", NULL, 0, &_17$$4);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&_17$$4);
		ZVAL_STRING(&_17$$4, "Authorization: %s %s%s");
		ZEPHIR_INIT_VAR(&_23$$4);
		ZVAL_STRING(&_23$$4, "\r\n");
		ZEPHIR_CALL_FUNCTION(&_24$$4, "sprintf", &_9, 41, &_17$$4, &_22$$4, &authorizationValue, &_23$$4);
		zephir_check_call_status();
		zephir_concat_self(&_httpHeader, &_24$$4 TSRMLS_CC);
	}
	zephir_read_property(&_25, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "Connection");
	ZEPHIR_CALL_METHOD(&_26, &_25, "offsetexists", NULL, 0, &_1);
	zephir_check_call_status();
	if (zephir_is_true(&_26)) {
		zephir_read_property(&_27$$5, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_VAR(&_29$$5);
		ZVAL_STRING(&_29$$5, "Connection");
		ZEPHIR_CALL_METHOD(&_28$$5, &_27$$5, "offsetget", NULL, 0, &_29$$5);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&_29$$5);
		ZVAL_STRING(&_29$$5, "Connection: %s%s");
		ZEPHIR_INIT_VAR(&_30$$5);
		ZVAL_STRING(&_30$$5, "\r\n");
		ZEPHIR_CALL_FUNCTION(&_31$$5, "sprintf", &_9, 41, &_29$$5, &_28$$5, &_30$$5);
		zephir_check_call_status();
		zephir_concat_self(&_httpHeader, &_31$$5 TSRMLS_CC);
	}
	zephir_update_property_zval(this_ptr, SL("_httpHeader"), &_httpHeader);
	zephir_read_property(&_32, this_ptr, SL("_database"), PH_NOISY_CC | PH_READONLY);
	if (ZEPHIR_IS_STRING(&_32, "")) {
		ZEPHIR_INIT_VAR(&_33$$6);
		ZEPHIR_INIT_NVAR(&_33$$6);
		ZVAL_STRING(&_33$$6, "/_db/_system");
		zephir_update_property_zval(this_ptr, SL("_baseUrl"), &_33$$6);
	} else {
		zephir_read_property(&_34$$7, this_ptr, SL("_database"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_FUNCTION(&_35$$7, "urlencode", NULL, 43, &_34$$7);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&_36$$7);
		ZEPHIR_CONCAT_SV(&_36$$7, "/_db/", &_35$$7);
		zephir_update_property_zval(this_ptr, SL("_baseUrl"), &_36$$7);
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Connection, getHandle) {

	zend_bool _1, _3, _12;
	zval handle, _0, _2, _4, _10, _11, _5$$3, _6$$3, _7$$3, _8$$3;
	zephir_fcall_cache_entry *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&handle);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_5$$3);
	ZVAL_UNDEF(&_6$$3);
	ZVAL_UNDEF(&_7$$3);
	ZVAL_UNDEF(&_8$$3);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_useKeepAlive"), PH_NOISY_CC | PH_READONLY);
	_1 = zephir_is_true(&_0);
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_handle"), PH_NOISY_CC | PH_READONLY);
		_1 = zephir_is_true(&_2);
	}
	_3 = _1;
	if (_3) {
		zephir_read_property(&_4, this_ptr, SL("_handle"), PH_NOISY_CC | PH_READONLY);
		_3 = Z_TYPE_P(&_4) == IS_RESOURCE;
	}
	if (_3) {
		ZEPHIR_OBS_VAR(&handle);
		zephir_read_property(&handle, this_ptr, SL("_handle"), PH_NOISY_CC);
		if (!(zephir_feof(&handle TSRMLS_CC))) {
			RETURN_CCTOR(&handle);
		}
		zephir_read_property(&_5$$3, this_ptr, SL("_handle"), PH_NOISY_CC | PH_READONLY);
		zephir_fclose(&_5$$3 TSRMLS_CC);
		ZEPHIR_INIT_ZVAL_NREF(_6$$3);
		ZVAL_LONG(&_6$$3, 0);
		zephir_update_property_zval(this_ptr, SL("_handle"), &_6$$3);
		zephir_read_property(&_6$$3, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_VAR(&_8$$3);
		ZVAL_STRING(&_8$$3, "Reconnect");
		ZEPHIR_CALL_METHOD(&_7$$3, &_6$$3, "offsetget", NULL, 0, &_8$$3);
		zephir_check_call_status();
		if (!(zephir_is_true(&_7$$3))) {
			ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Server has closed the connection already.", "arangodbclient/connection.zep", 145);
			return;
		}
	}
	zephir_read_property(&_10, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_CE_STATIC(&handle, arangodbclient_httphelper_ce, "createconnection", &_9, 0, &_10);
	zephir_check_call_status();
	zephir_read_property(&_11, this_ptr, SL("_useKeepAlive"), PH_NOISY_CC | PH_READONLY);
	_12 = zephir_is_true(&_11);
	if (_12) {
		_12 = Z_TYPE_P(&handle) == IS_RESOURCE;
	}
	if (_12) {
		zephir_update_property_zval(this_ptr, SL("_handle"), &handle);
	}
	RETURN_CCTOR(&handle);

}

PHP_METHOD(ArangoDBClient_Connection, executeRequest) {

	zend_bool wasAsync = 0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL, *_8 = NULL, *_26 = NULL, *_27 = NULL, *_31 = NULL;
	zval customHeaders;
	zval *method_param = NULL, *url_param = NULL, *data_param = NULL, *customHeaders_param = NULL, __$true, __$false, request, batchPart, traceFunc, header, tmpListHeader, headers, handle, startTime, result, timeTaken, status, response, _1, _2, _3, _21, _22, _4$$4, _14$$4, _5$$5, _6$$5, _7$$5, _9$$5, _10$$5, _11$$5, _12$$6, _13$$6, _15$$9, _16$$9, _17$$9, _18$$9, _19$$9, _20$$9, _23$$10, _24$$10, _25$$10, _28$$11, _29$$11, _30$$12, _32$$15, _33$$13, _37$$13, _38$$13, _34$$16, _35$$16, _36$$16, _39$$18, _40$$18, _41$$18, _42$$19, _43$$19, _44$$19, _45$$19, _46$$20;
	zval method, url, data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&method);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&data);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&request);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&traceFunc);
	ZVAL_UNDEF(&header);
	ZVAL_UNDEF(&tmpListHeader);
	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&handle);
	ZVAL_UNDEF(&startTime);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&timeTaken);
	ZVAL_UNDEF(&status);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_21);
	ZVAL_UNDEF(&_22);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_14$$4);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_9$$5);
	ZVAL_UNDEF(&_10$$5);
	ZVAL_UNDEF(&_11$$5);
	ZVAL_UNDEF(&_12$$6);
	ZVAL_UNDEF(&_13$$6);
	ZVAL_UNDEF(&_15$$9);
	ZVAL_UNDEF(&_16$$9);
	ZVAL_UNDEF(&_17$$9);
	ZVAL_UNDEF(&_18$$9);
	ZVAL_UNDEF(&_19$$9);
	ZVAL_UNDEF(&_20$$9);
	ZVAL_UNDEF(&_23$$10);
	ZVAL_UNDEF(&_24$$10);
	ZVAL_UNDEF(&_25$$10);
	ZVAL_UNDEF(&_28$$11);
	ZVAL_UNDEF(&_29$$11);
	ZVAL_UNDEF(&_30$$12);
	ZVAL_UNDEF(&_32$$15);
	ZVAL_UNDEF(&_33$$13);
	ZVAL_UNDEF(&_37$$13);
	ZVAL_UNDEF(&_38$$13);
	ZVAL_UNDEF(&_34$$16);
	ZVAL_UNDEF(&_35$$16);
	ZVAL_UNDEF(&_36$$16);
	ZVAL_UNDEF(&_39$$18);
	ZVAL_UNDEF(&_40$$18);
	ZVAL_UNDEF(&_41$$18);
	ZVAL_UNDEF(&_42$$19);
	ZVAL_UNDEF(&_43$$19);
	ZVAL_UNDEF(&_44$$19);
	ZVAL_UNDEF(&_45$$19);
	ZVAL_UNDEF(&_46$$20);
	ZVAL_UNDEF(&customHeaders);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &method_param, &url_param, &data_param, &customHeaders_param);

	zephir_get_strval(&method, method_param);
	zephir_get_strval(&url, url_param);
	zephir_get_strval(&data, data_param);
	if (!customHeaders_param) {
		ZEPHIR_INIT_VAR(&customHeaders);
		array_init(&customHeaders);
	} else {
		zephir_get_arrval(&customHeaders, customHeaders_param);
	}


	wasAsync = 0;
	if (zephir_array_isset_string(&customHeaders, SL("X-Arango-Async"))) {
		wasAsync = 1;
	}
	ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_httphelper_ce, "validatemethod", &_0, 0, &method);
	zephir_check_call_status();
	zephir_read_property(&_1, this_ptr, SL("_baseUrl"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&_2);
	ZEPHIR_CONCAT_VV(&_2, &_1, &url);
	zephir_get_strval(&url, &_2);
	zephir_read_property(&_3, this_ptr, SL("_batchRequest"), PH_NOISY_CC | PH_READONLY);
	if (ZEPHIR_IS_FALSE(&_3)) {
		zephir_read_property(&_4$$4, this_ptr, SL("_captureBatch"), PH_NOISY_CC | PH_READONLY);
		if (ZEPHIR_IS_TRUE(&_4$$4)) {
			zephir_read_property(&_5$$5, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_INIT_VAR(&_6$$5);
			ZVAL_STRING(&_6$$5, "BatchPart");
			ZVAL_BOOL(&_7$$5, 1);
			ZEPHIR_CALL_METHOD(NULL, &_5$$5, "offsetset", NULL, 0, &_6$$5, &_7$$5);
			zephir_check_call_status();
			zephir_read_property(&_7$$5, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
			zephir_read_property(&_9$$5, this_ptr, SL("_httpHeader"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_CE_STATIC(&request, arangodbclient_httphelper_ce, "buildrequest", &_8, 0, &_7$$5, &_9$$5, &method, &url, &data, &customHeaders);
			zephir_check_call_status();
			zephir_read_property(&_10$$5, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_INIT_NVAR(&_6$$5);
			ZVAL_STRING(&_6$$5, "BatchPart");
			ZVAL_BOOL(&_11$$5, 0);
			ZEPHIR_CALL_METHOD(NULL, &_10$$5, "offsetset", NULL, 0, &_6$$5, &_11$$5);
			zephir_check_call_status();
		} else {
			zephir_read_property(&_12$$6, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
			zephir_read_property(&_13$$6, this_ptr, SL("_httpHeader"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_CE_STATIC(&request, arangodbclient_httphelper_ce, "buildrequest", &_8, 0, &_12$$6, &_13$$6, &method, &url, &data, &customHeaders);
			zephir_check_call_status();
		}
		zephir_read_property(&_14$$4, this_ptr, SL("_captureBatch"), PH_NOISY_CC | PH_READONLY);
		if (ZEPHIR_IS_TRUE(&_14$$4)) {
			ZEPHIR_CALL_METHOD(&batchPart, this_ptr, "dobatch", NULL, 0, &method, &request);
			zephir_check_call_status();
			if (Z_TYPE_P(&batchPart) != IS_NULL) {
				RETURN_CCTOR(&batchPart);
			}
		}
	} else {
		if (0) {
			zephir_update_property_zval(this_ptr, SL("_batchRequest"), &__$true);
		} else {
			zephir_update_property_zval(this_ptr, SL("_batchRequest"), &__$false);
		}
		zephir_read_property(&_15$$9, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_VAR(&_16$$9);
		ZVAL_STRING(&_16$$9, "Batch");
		ZVAL_BOOL(&_17$$9, 1);
		ZEPHIR_CALL_METHOD(NULL, &_15$$9, "offsetset", NULL, 0, &_16$$9, &_17$$9);
		zephir_check_call_status();
		zephir_read_property(&_17$$9, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		zephir_read_property(&_18$$9, this_ptr, SL("_httpHeader"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_CE_STATIC(&request, arangodbclient_httphelper_ce, "buildrequest", &_8, 0, &_17$$9, &_18$$9, &method, &url, &data, &customHeaders);
		zephir_check_call_status();
		zephir_read_property(&_19$$9, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_NVAR(&_16$$9);
		ZVAL_STRING(&_16$$9, "Batch");
		ZVAL_BOOL(&_20$$9, 0);
		ZEPHIR_CALL_METHOD(NULL, &_19$$9, "offsetset", NULL, 0, &_16$$9, &_20$$9);
		zephir_check_call_status();
	}
	zephir_read_property(&_21, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&_22);
	ZVAL_STRING(&_22, "trace");
	ZEPHIR_CALL_METHOD(&traceFunc, &_21, "offsetget", NULL, 0, &_22);
	zephir_check_call_status();
	if (zephir_is_true(&traceFunc)) {
		zephir_read_property(&_23$$10, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_INIT_VAR(&_25$$10);
		ZVAL_STRING(&_25$$10, "enhancedTrace");
		ZEPHIR_CALL_METHOD(&_24$$10, &_23$$10, "offsetget", NULL, 0, &_25$$10);
		zephir_check_call_status();
		if (zephir_is_true(&_24$$10)) {
			ZEPHIR_CALL_CE_STATIC(&tmpListHeader, arangodbclient_httphelper_ce, "parsehttpmessage", &_26, 0, &request, &url, &method);
			zephir_check_call_status();
			ZEPHIR_OBS_VAR(&header);
			zephir_array_fetch_long(&header, &tmpListHeader, 0, PH_NOISY, "arangodbclient/connection.zep", 190 TSRMLS_CC);
			ZEPHIR_CALL_CE_STATIC(&headers, arangodbclient_httphelper_ce, "parseheaders", &_27, 0, &header);
			zephir_check_call_status();
			ZEPHIR_INIT_VAR(&_28$$11);
			object_init_ex(&_28$$11, arangodbclient_tracerequest_ce);
			zephir_array_fetch_long(&_29$$11, &headers, 2, PH_NOISY | PH_READONLY, "arangodbclient/connection.zep", 192 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(NULL, &_28$$11, "__construct", NULL, 44, &_29$$11, &method, &url, &data);
			zephir_check_call_status();
			ZEPHIR_CALL_ZVAL_FUNCTION(NULL, &traceFunc, NULL, 0, &_28$$11);
			zephir_check_call_status();
		} else {
			ZEPHIR_INIT_VAR(&_30$$12);
			ZVAL_STRING(&_30$$12, "send");
			ZEPHIR_CALL_ZVAL_FUNCTION(NULL, &traceFunc, NULL, 0, &_30$$12, &request);
			zephir_check_call_status();
		}
	}
	ZEPHIR_CALL_METHOD(&handle, this_ptr, "gethandle", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&handle)) {
		if (zephir_is_true(&traceFunc)) {
			ZEPHIR_INIT_VAR(&startTime);
			zephir_microtime(&startTime, &__$true TSRMLS_CC);
		}
		ZEPHIR_CALL_CE_STATIC(&result, arangodbclient_httphelper_ce, "transfer", &_31, 0, &handle, &request, &method);
		zephir_check_call_status();
		if (zephir_is_true(&traceFunc)) {
			ZEPHIR_INIT_VAR(&_32$$15);
			zephir_microtime(&_32$$15, &__$true TSRMLS_CC);
			ZEPHIR_INIT_VAR(&timeTaken);
			zephir_sub_function(&timeTaken, &_32$$15, &startTime);
		}
		ZEPHIR_CALL_FUNCTION(&status, "socket_get_status", NULL, 45, &handle);
		zephir_check_call_status();
		zephir_array_fetch_string(&_33$$13, &status, SL("timed_out"), PH_NOISY | PH_READONLY, "arangodbclient/connection.zep", 207 TSRMLS_CC);
		if (zephir_is_true(&_33$$13)) {
			ZEPHIR_INIT_VAR(&_34$$16);
			object_init_ex(&_34$$16, arangodbclient_clientexception_ce);
			ZEPHIR_INIT_VAR(&_35$$16);
			ZVAL_STRING(&_35$$16, "Got a timeout while waiting for the server's response");
			ZVAL_LONG(&_36$$16, 408);
			ZEPHIR_CALL_METHOD(NULL, &_34$$16, "__construct", NULL, 37, &_35$$16, &_36$$16);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_34$$16, "arangodbclient/connection.zep", 208 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
		zephir_read_property(&_37$$13, this_ptr, SL("_useKeepAlive"), PH_NOISY_CC | PH_READONLY);
		if (!(zephir_is_true(&_37$$13))) {
			zephir_fclose(&handle TSRMLS_CC);
		}
		ZEPHIR_INIT_VAR(&response);
		object_init_ex(&response, arangodbclient_httpresponse_ce);
		if (wasAsync) {
			ZVAL_BOOL(&_38$$13, 1);
		} else {
			ZVAL_BOOL(&_38$$13, 0);
		}
		ZEPHIR_CALL_METHOD(NULL, &response, "__construct", NULL, 14, &result, &url, &method, &_38$$13);
		zephir_check_call_status();
		if (zephir_is_true(&traceFunc)) {
			zephir_read_property(&_39$$18, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_INIT_VAR(&_41$$18);
			ZVAL_STRING(&_41$$18, "enhancedTrace");
			ZEPHIR_CALL_METHOD(&_40$$18, &_39$$18, "offsetget", NULL, 0, &_41$$18);
			zephir_check_call_status();
			if (zephir_is_true(&_40$$18)) {
				ZEPHIR_INIT_VAR(&_42$$19);
				object_init_ex(&_42$$19, arangodbclient_traceresponse_ce);
				ZEPHIR_CALL_METHOD(&_43$$19, &response, "getheaders", NULL, 46);
				zephir_check_call_status();
				ZEPHIR_CALL_METHOD(&_44$$19, &response, "gethttpcode", NULL, 47);
				zephir_check_call_status();
				ZEPHIR_CALL_METHOD(&_45$$19, &response, "getbody", NULL, 18);
				zephir_check_call_status();
				ZEPHIR_CALL_METHOD(NULL, &_42$$19, "__construct", NULL, 48, &_43$$19, &_44$$19, &_45$$19, &timeTaken);
				zephir_check_call_status();
				ZEPHIR_CALL_ZVAL_FUNCTION(NULL, &traceFunc, NULL, 0, &_42$$19);
				zephir_check_call_status();
			} else {
				ZEPHIR_INIT_VAR(&_46$$20);
				ZVAL_STRING(&_46$$20, "receive");
				ZEPHIR_CALL_ZVAL_FUNCTION(NULL, &traceFunc, NULL, 0, &_46$$20, &result);
				zephir_check_call_status();
			}
		}
		RETURN_CCTOR(&response);
	}
	ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Whoops, this should never happen", "arangodbclient/connection.zep", 223);
	return;

}

PHP_METHOD(ArangoDBClient_Connection, parseResponse) {

	zend_bool _0, _1$$4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *response, response_sub, __$true, httpCode, body, details, exception, _2$$5, _3$$5, _4$$3, _5$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&response_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&httpCode);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&details);
	ZVAL_UNDEF(&exception);
	ZVAL_UNDEF(&_2$$5);
	ZVAL_UNDEF(&_3$$5);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&_5$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &response);



	ZEPHIR_CALL_METHOD(&httpCode, response, "gethttpcode", NULL, 0);
	zephir_check_call_status();
	_0 = ZEPHIR_LT_LONG(&httpCode, 200);
	if (!(_0)) {
		_0 = ZEPHIR_GE_LONG(&httpCode, 400);
	}
	if (_0) {
		ZEPHIR_CALL_METHOD(&body, response, "getbody", NULL, 0);
		zephir_check_call_status();
		if (!ZEPHIR_IS_STRING_IDENTICAL(&body, "")) {
			ZEPHIR_INIT_VAR(&details);
			zephir_json_decode(&details, &body, zephir_get_intval(&__$true) );
			_1$$4 = Z_TYPE_P(&details) == IS_ARRAY;
			if (_1$$4) {
				_1$$4 = zephir_array_isset_string(&details, SL("errorMessage"));
			}
			if (_1$$4) {
				ZEPHIR_INIT_VAR(&exception);
				object_init_ex(&exception, arangodbclient_serverexception_ce);
				zephir_array_fetch_string(&_2$$5, &details, SL("errorMessage"), PH_NOISY | PH_READONLY, "arangodbclient/connection.zep", 236 TSRMLS_CC);
				zephir_array_fetch_string(&_3$$5, &details, SL("code"), PH_NOISY | PH_READONLY, "arangodbclient/connection.zep", 236 TSRMLS_CC);
				ZEPHIR_CALL_METHOD(NULL, &exception, "__construct", NULL, 37, &_2$$5, &_3$$5);
				zephir_check_call_status();
				ZEPHIR_CALL_METHOD(NULL, &exception, "setdetails", NULL, 49, &details);
				zephir_check_call_status();
				zephir_throw_exception_debug(&exception, "arangodbclient/connection.zep", 238 TSRMLS_CC);
				ZEPHIR_MM_RESTORE();
				return;
			}
		}
		ZEPHIR_INIT_VAR(&_4$$3);
		object_init_ex(&_4$$3, arangodbclient_serverexception_ce);
		ZEPHIR_CALL_METHOD(&_5$$3, response, "getresult", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, &_4$$3, "__construct", NULL, 37, &_5$$3, &httpCode);
		zephir_check_call_status();
		zephir_throw_exception_debug(&_4$$3, "arangodbclient/connection.zep", 241 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	RETVAL_ZVAL(response, 1, 0);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Connection, stopCaptureBatch) {

	zval __$true, __$false;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);


	if (0) {
		zephir_update_property_zval(this_ptr, SL("_captureBatch"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_captureBatch"), &__$false);
	}
	RETURN_MEMBER(getThis(), "_activeBatch");

}

PHP_METHOD(ArangoDBClient_Connection, setActiveBatch) {

	zval *batch, batch_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&batch_sub);

	zephir_fetch_params(0, 1, 0, &batch);



	zephir_update_property_zval(this_ptr, SL("_activeBatch"), batch);
	RETURN_MEMBER(getThis(), "_activeBatch");

}

PHP_METHOD(ArangoDBClient_Connection, getActiveBatch) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_activeBatch");

}

PHP_METHOD(ArangoDBClient_Connection, setCaptureBatch) {

	zval *state_param = NULL, __$true, __$false;
	zend_bool state;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &state_param);

	state = zephir_get_boolval(state_param);


	if (state) {
		zephir_update_property_zval(this_ptr, SL("_captureBatch"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_captureBatch"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Connection, setBatchRequest) {

	zval *state_param = NULL, __$true, __$false;
	zend_bool state;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &state_param);

	state = zephir_get_boolval(state_param);


	if (state) {
		zephir_update_property_zval(this_ptr, SL("_batchRequest"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_batchRequest"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Connection, isInBatchCaptureMode) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_captureBatch");

}

PHP_METHOD(ArangoDBClient_Connection, getBatches) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_batches");

}

PHP_METHOD(ArangoDBClient_Connection, doBatch) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval request;
	zval *method, method_sub, *request_param = NULL, batchPart, batch, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&method_sub);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&batch);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&request);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &method, &request_param);

	zephir_get_strval(&request, request_param);


	ZEPHIR_INIT_VAR(&batchPart);
	ZVAL_NULL(&batchPart);
	zephir_read_property(&_0, this_ptr, SL("_captureBatch"), PH_NOISY_CC | PH_READONLY);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_0)) {
		ZEPHIR_CALL_METHOD(&batch, this_ptr, "getactivebatch", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&batchPart, &batch, "append", NULL, 0, method, &request);
		zephir_check_call_status();
	}
	RETURN_CCTOR(&batchPart);

}

PHP_METHOD(ArangoDBClient_Connection, detect_utf) {

	zval *stringg_param = NULL, _0, _1, _2;
	zval stringg;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&stringg);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &stringg_param);

	zephir_get_arrval(&stringg, stringg_param);


	ZEPHIR_INIT_VAR(&_0);
	ZEPHIR_INIT_VAR(&_1);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "//u");
	zephir_preg_match(&_1, &_2, &stringg, &_0, 0, 0 , 0  TSRMLS_CC);
	if (zephir_is_true(&_1)) {
		RETURN_MM_BOOL(1);
	} else {
		RETURN_MM_BOOL(0);
	}

}

PHP_METHOD(ArangoDBClient_Connection, check_encoding) {

	zend_bool _3$$6, _10$$6, _14$$9, _19$$9;
	zend_string *_2;
	zend_ulong _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_6 = NULL, *_9 = NULL, *_16 = NULL, *_23 = NULL;
	zval *data_param = NULL, __$true, key, value, *_0, _4$$6, _5$$6, _11$$6, _7$$7, _8$$7, _12$$8, _13$$8, _15$$9, _20$$9, _17$$10, _18$$10, _21$$11, _22$$11;
	zval data;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_4$$6);
	ZVAL_UNDEF(&_5$$6);
	ZVAL_UNDEF(&_11$$6);
	ZVAL_UNDEF(&_7$$7);
	ZVAL_UNDEF(&_8$$7);
	ZVAL_UNDEF(&_12$$8);
	ZVAL_UNDEF(&_13$$8);
	ZVAL_UNDEF(&_15$$9);
	ZVAL_UNDEF(&_20$$9);
	ZVAL_UNDEF(&_17$$10);
	ZVAL_UNDEF(&_18$$10);
	ZVAL_UNDEF(&_21$$11);
	ZVAL_UNDEF(&_22$$11);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &data_param);

	zephir_get_arrval(&data, data_param);


	if (!(Z_TYPE_P(&data) == IS_ARRAY)) {
		RETURN_MM_NULL();
	}
	zephir_is_iterable(&data, 0, "arangodbclient/connection.zep", 332);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&data), _1, _2, _0)
	{
		ZEPHIR_INIT_NVAR(&key);
		if (_2 != NULL) { 
			ZVAL_STR_COPY(&key, _2);
		} else {
			ZVAL_LONG(&key, _1);
		}
		ZEPHIR_INIT_NVAR(&value);
		ZVAL_COPY(&value, _0);
		if (!(Z_TYPE_P(&value) == IS_ARRAY)) {
			if ((zephir_function_exists_ex(SL("mb_detect_encoding") TSRMLS_CC) == SUCCESS)) {
				_3$$6 = Z_TYPE_P(&key) == IS_STRING;
				if (_3$$6) {
					ZEPHIR_INIT_NVAR(&_4$$6);
					ZVAL_STRING(&_4$$6, "UTF-8");
					ZEPHIR_CALL_FUNCTION(&_5$$6, "mb_detect_encoding", &_6, 50, &key, &_4$$6, &__$true);
					zephir_check_call_status();
					_3$$6 = ZEPHIR_IS_FALSE_IDENTICAL(&_5$$6);
				}
				if (_3$$6) {
					ZEPHIR_INIT_NVAR(&_7$$7);
					object_init_ex(&_7$$7, arangodbclient_clientexception_ce);
					ZEPHIR_INIT_LNVAR(_8$$7);
					ZEPHIR_CONCAT_SV(&_8$$7, "Only UTF-8 encoded keys allowed. Wrong encoding in key string: ", &key);
					ZEPHIR_CALL_METHOD(NULL, &_7$$7, "__construct", &_9, 37, &_8$$7);
					zephir_check_call_status();
					zephir_throw_exception_debug(&_7$$7, "arangodbclient/connection.zep", 315 TSRMLS_CC);
					ZEPHIR_MM_RESTORE();
					return;
				}
				_10$$6 = Z_TYPE_P(&value) == IS_STRING;
				if (_10$$6) {
					ZEPHIR_INIT_NVAR(&_4$$6);
					ZVAL_STRING(&_4$$6, "UTF-8");
					ZEPHIR_CALL_FUNCTION(&_11$$6, "mb_detect_encoding", &_6, 50, &value, &_4$$6, &__$true);
					zephir_check_call_status();
					_10$$6 = ZEPHIR_IS_FALSE_IDENTICAL(&_11$$6);
				}
				if (_10$$6) {
					ZEPHIR_INIT_NVAR(&_12$$8);
					object_init_ex(&_12$$8, arangodbclient_clientexception_ce);
					ZEPHIR_INIT_LNVAR(_13$$8);
					ZEPHIR_CONCAT_SV(&_13$$8, "Only UTF-8 encoded values allowed. Wrong encoding in value string: ", &value);
					ZEPHIR_CALL_METHOD(NULL, &_12$$8, "__construct", &_9, 37, &_13$$8);
					zephir_check_call_status();
					zephir_throw_exception_debug(&_12$$8, "arangodbclient/connection.zep", 318 TSRMLS_CC);
					ZEPHIR_MM_RESTORE();
					return;
				}
			} else {
				_14$$9 = Z_TYPE_P(&key) == IS_STRING;
				if (_14$$9) {
					ZEPHIR_CALL_SELF(&_15$$9, "detect_utf", &_16, 0, &key);
					zephir_check_call_status();
					_14$$9 = ZEPHIR_IS_FALSE_IDENTICAL(&_15$$9);
				}
				if (_14$$9) {
					ZEPHIR_INIT_NVAR(&_17$$10);
					object_init_ex(&_17$$10, arangodbclient_clientexception_ce);
					ZEPHIR_INIT_LNVAR(_18$$10);
					ZEPHIR_CONCAT_SV(&_18$$10, "Only UTF-8 encoded keys allowed. Wrong encoding in key string: ", &key);
					ZEPHIR_CALL_METHOD(NULL, &_17$$10, "__construct", &_9, 37, &_18$$10);
					zephir_check_call_status();
					zephir_throw_exception_debug(&_17$$10, "arangodbclient/connection.zep", 322 TSRMLS_CC);
					ZEPHIR_MM_RESTORE();
					return;
				}
				_19$$9 = Z_TYPE_P(&value) == IS_STRING;
				if (_19$$9) {
					ZEPHIR_CALL_SELF(&_20$$9, "detect_utf", &_16, 0, &value);
					zephir_check_call_status();
					_19$$9 = ZEPHIR_IS_FALSE_IDENTICAL(&_20$$9);
				}
				if (_19$$9) {
					ZEPHIR_INIT_NVAR(&_21$$11);
					object_init_ex(&_21$$11, arangodbclient_clientexception_ce);
					ZEPHIR_INIT_LNVAR(_22$$11);
					ZEPHIR_CONCAT_SV(&_22$$11, "Only UTF-8 encoded values allowed. Wrong encoding in value string: ", &value);
					ZEPHIR_CALL_METHOD(NULL, &_21$$11, "__construct", &_9, 37, &_22$$11);
					zephir_check_call_status();
					zephir_throw_exception_debug(&_21$$11, "arangodbclient/connection.zep", 325 TSRMLS_CC);
					ZEPHIR_MM_RESTORE();
					return;
				}
			}
		} else {
			ZEPHIR_CALL_SELF(NULL, "check_encoding", &_23, 0, &value);
			zephir_check_call_status();
		}
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&value);
	ZEPHIR_INIT_NVAR(&key);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Connection, json_encode_wrapper) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *data, data_sub, *options = NULL, options_sub, response, _0, _1, _2, _3$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data_sub);
	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &data, &options);

	if (!options) {
		options = &options_sub;
		ZEPHIR_INIT_VAR(options);
		ZVAL_LONG(options, 0);
	}


	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "CheckUtf8Conform");
	ZEPHIR_CALL_METHOD(&_1, &_0, "offsetget", NULL, 0, &_2);
	zephir_check_call_status();
	if (ZEPHIR_IS_TRUE(&_1)) {
		ZEPHIR_CALL_SELF(NULL, "check_encoding", NULL, 0, data);
		zephir_check_call_status();
	}
	if (ZEPHIR_IS_EMPTY(data)) {
		ZVAL_LONG(&_3$$4, ((int) (zephir_get_numberval(options)) | 16));
		ZEPHIR_INIT_VAR(&response);
		zephir_json_encode(&response, data, zephir_get_intval(&_3$$4) );
	} else {
		ZEPHIR_INIT_NVAR(&response);
		zephir_json_encode(&response, data, zephir_get_intval(options) );
	}
	RETURN_CCTOR(&response);

}

PHP_METHOD(ArangoDBClient_Connection, setDatabase) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *database_param = NULL, _0, _1;
	zval database;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&database);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &database_param);

	zephir_get_strval(&database, database_param);


	zephir_read_property(&_0, this_ptr, SL("_options"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "database");
	ZEPHIR_CALL_METHOD(NULL, &_0, "offsetset", NULL, 0, &_1, &database);
	zephir_check_call_status();
	zephir_update_property_zval(this_ptr, SL("_database"), &database);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "updatehttpheader", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Connection, getDatabase) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_database");

}

zend_object *zephir_init_properties_ArangoDBClient_Connection(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _1$$3;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_batches"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_batches"), &_1$$3);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

