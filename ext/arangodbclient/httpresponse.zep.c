
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
#include "kernel/exception.h"
#include "kernel/memory.h"
#include "kernel/fcall.h"
#include "kernel/concat.h"
#include "kernel/array.h"
#include "kernel/string.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_HttpResponse) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, HttpResponse, arangodbclient, httpresponse, arangodbclient_httpresponse_method_entry, 0);

	zend_declare_property_string(arangodbclient_httpresponse_ce, SL("_header"), "", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_httpresponse_ce, SL("_body"), "", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_httpresponse_ce, SL("_headers"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_httpresponse_ce, SL("_result"), "", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(arangodbclient_httpresponse_ce, SL("_httpCode"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_bool(arangodbclient_httpresponse_ce, SL("_wasAsync"), 0, ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_httpresponse_ce, SL("batchPart"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_httpresponse_ce->create_object = zephir_init_properties_ArangoDBClient_HttpResponse;
	zephir_declare_class_constant_string(arangodbclient_httpresponse_ce, SL("HEADER_LOCATION"), "location");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_HttpResponse, __construct) {

	zephir_fcall_cache_entry *_3 = NULL, *_6 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool wasAsync, _0, _12, _14, _16, _17$$5;
	zval *responseString_param = NULL, *originUrl_param = NULL, *originMethod_param = NULL, *wasAsync_param = NULL, __$true, __$false, _headers, _body, _4, _5, _7, _8, _9, _10, _11, _13, _15, _1$$4, _18$$6;
	zval responseString, originUrl, originMethod, _2$$4, _19$$6;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&responseString);
	ZVAL_UNDEF(&originUrl);
	ZVAL_UNDEF(&originMethod);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&_19$$6);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_headers);
	ZVAL_UNDEF(&_body);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_15);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_18$$6);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 3, &responseString_param, &originUrl_param, &originMethod_param, &wasAsync_param);

	zephir_get_strval(&responseString, responseString_param);
	if (!originUrl_param) {
		ZEPHIR_INIT_VAR(&originUrl);
		ZVAL_STRING(&originUrl, "");
	} else {
		zephir_get_strval(&originUrl, originUrl_param);
	}
	if (!originMethod_param) {
		ZEPHIR_INIT_VAR(&originMethod);
		ZVAL_STRING(&originMethod, "");
	} else {
		zephir_get_strval(&originMethod, originMethod_param);
	}
	if (!wasAsync_param) {
		wasAsync = 0;
	} else {
		wasAsync = zephir_get_boolval(wasAsync_param);
	}


	if (wasAsync) {
		zephir_update_property_zval(this_ptr, SL("_wasAsync"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_wasAsync"), &__$false);
	}
	_0 = !ZEPHIR_IS_STRING_IDENTICAL(&originUrl, "");
	if (_0) {
		_0 = !ZEPHIR_IS_STRING_IDENTICAL(&originMethod, "");
	}
	if (_0) {
		if (ZEPHIR_IS_STRING(&responseString, "")) {
			ZEPHIR_INIT_VAR(&_1$$4);
			object_init_ex(&_1$$4, arangodbclient_clientexception_ce);
			ZEPHIR_INIT_VAR(&_2$$4);
			ZEPHIR_CONCAT_SVSVS(&_2$$4, "Got no response from the server after request to ", &originMethod, " ", &originUrl, " - Note: this may be a timeout issue");
			ZEPHIR_CALL_METHOD(NULL, &_1$$4, "__construct", NULL, 37, &_2$$4);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_1$$4, "arangodbclient/httpresponse.zep", 20 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	ZEPHIR_CALL_CE_STATIC(&_body, arangodbclient_httphelper_ce, "parsehttpmessage", &_3, 0, &responseString, &originUrl, &originMethod);
	zephir_check_call_status();
	zephir_array_fetch_long(&_4, &_body, 0, PH_NOISY | PH_READONLY, "arangodbclient/httpresponse.zep", 24 TSRMLS_CC);
	zephir_update_property_zval(this_ptr, SL("_header"), &_4);
	zephir_array_fetch_long(&_5, &_body, 1, PH_NOISY | PH_READONLY, "arangodbclient/httpresponse.zep", 25 TSRMLS_CC);
	zephir_update_property_zval(this_ptr, SL("_body"), &_5);
	zephir_read_property(&_7, this_ptr, SL("_header"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_CE_STATIC(&_headers, arangodbclient_httphelper_ce, "parseheaders", &_6, 0, &_7);
	zephir_check_call_status();
	zephir_array_fetch_long(&_8, &_headers, 0, PH_NOISY | PH_READONLY, "arangodbclient/httpresponse.zep", 27 TSRMLS_CC);
	zephir_update_property_zval(this_ptr, SL("_httpCode"), &_8);
	zephir_array_fetch_long(&_9, &_headers, 1, PH_NOISY | PH_READONLY, "arangodbclient/httpresponse.zep", 28 TSRMLS_CC);
	zephir_update_property_zval(this_ptr, SL("_result"), &_9);
	zephir_array_fetch_long(&_10, &_headers, 2, PH_NOISY | PH_READONLY, "arangodbclient/httpresponse.zep", 29 TSRMLS_CC);
	zephir_update_property_zval(this_ptr, SL("_headers"), &_10);
	zephir_read_property(&_11, this_ptr, SL("_body"), PH_NOISY_CC | PH_READONLY);
	_12 = Z_TYPE_P(&_11) == IS_NULL;
	if (_12) {
		zephir_read_property(&_13, this_ptr, SL("_httpCode"), PH_NOISY_CC | PH_READONLY);
		_14 = !ZEPHIR_IS_LONG_IDENTICAL(&_13, 204);
		if (_14) {
			zephir_read_property(&_15, this_ptr, SL("_httpCode"), PH_NOISY_CC | PH_READONLY);
			_14 = !ZEPHIR_IS_LONG_IDENTICAL(&_15, 304);
		}
		_16 = _14;
		if (_16) {
			_16 = !wasAsync;
		}
		_12 = _16;
	}
	if (_12) {
		_17$$5 = !ZEPHIR_IS_STRING_IDENTICAL(&originUrl, "");
		if (_17$$5) {
			_17$$5 = !ZEPHIR_IS_STRING_IDENTICAL(&originMethod, "");
		}
		if (_17$$5) {
			ZEPHIR_INIT_VAR(&_18$$6);
			object_init_ex(&_18$$6, arangodbclient_clientexception_ce);
			ZEPHIR_INIT_VAR(&_19$$6);
			ZEPHIR_CONCAT_SVSV(&_19$$6, "Got an invalid response from the server after request to ", &originMethod, " ", &originUrl);
			ZEPHIR_CALL_METHOD(NULL, &_18$$6, "__construct", NULL, 37, &_19$$6);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_18$$6, "arangodbclient/httpresponse.zep", 32 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Got an invalid response from the server", "arangodbclient/httpresponse.zep", 34);
		return;
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_HttpResponse, getHttpCode) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_httpCode");

}

PHP_METHOD(ArangoDBClient_HttpResponse, getHeader) {

	zval *name_param = NULL, _0, _1, _2$$3, _3$$3;
	zval name;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_3$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &name_param);

	zephir_get_strval(&name, name_param);


	ZEPHIR_INIT_VAR(&_0);
	zephir_fast_strtolower(&_0, &name);
	zephir_get_strval(&name, &_0);
	zephir_read_property(&_1, this_ptr, SL("_headers"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset(&_1, &name)) {
		zephir_read_property(&_2$$3, this_ptr, SL("_headers"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch(&_3$$3, &_2$$3, &name, PH_NOISY | PH_READONLY, "arangodbclient/httpresponse.zep", 48 TSRMLS_CC);
		RETURN_CTOR(&_3$$3);
	}
	RETURN_MM_NULL();

}

PHP_METHOD(ArangoDBClient_HttpResponse, getHeaders) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_headers");

}

PHP_METHOD(ArangoDBClient_HttpResponse, getLocationHeader) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "location");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getheader", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_HttpResponse, getBody) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_body");

}

PHP_METHOD(ArangoDBClient_HttpResponse, getResult) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_result");

}

PHP_METHOD(ArangoDBClient_HttpResponse, getJson) {

	zval __$true, body, json, _0$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&_0$$3);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(&body, this_ptr, "getbody", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&json);
	zephir_json_decode(&json, &body, zephir_get_intval(&__$true) );
	if (!(Z_TYPE_P(&json) == IS_ARRAY)) {
		zephir_read_property(&_0$$3, this_ptr, SL("_wasAsync"), PH_NOISY_CC | PH_READONLY);
		if (zephir_is_true(&_0$$3)) {
			array_init(return_value);
			RETURN_MM();
		}
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Got a malformed result from the server", "arangodbclient/httpresponse.zep", 83);
		return;
	}
	RETURN_CCTOR(&json);

}

PHP_METHOD(ArangoDBClient_HttpResponse, setBatchPart) {

	zval *batchPart, batchPart_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&batchPart_sub);

	zephir_fetch_params(0, 1, 0, &batchPart);



	zephir_update_property_zval(this_ptr, SL("batchPart"), batchPart);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_HttpResponse, getBatchPart) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "batchPart");

}

zend_object *zephir_init_properties_ArangoDBClient_HttpResponse(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _1$$3;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_headers"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_headers"), &_1$$3);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

