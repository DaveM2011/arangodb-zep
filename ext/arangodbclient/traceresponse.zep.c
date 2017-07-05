
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
#include "kernel/operators.h"
#include "kernel/array.h"
#include "kernel/fcall.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_TraceResponse) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, TraceResponse, arangodbclient, traceresponse, arangodbclient_traceresponse_method_entry, 0);

	zend_declare_property_null(arangodbclient_traceresponse_ce, SL("_headers"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_traceresponse_ce, SL("_httpCode"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_traceresponse_ce, SL("_body"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_traceresponse_ce, SL("_type"), "response", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_traceresponse_ce, SL("_timeTaken"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_traceresponse_ce, SL("_httpCodeDefinitions"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_traceresponse_ce->create_object = zephir_init_properties_ArangoDBClient_TraceResponse;
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_TraceResponse, __construct) {

	zval body;
	zend_long httpCode;
	zval *headers_param = NULL, *httpCode_param = NULL, *body_param = NULL, *timeTaken, timeTaken_sub, _0;
	zval headers;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&timeTaken_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&body);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 0, &headers_param, &httpCode_param, &body_param, &timeTaken);

	zephir_get_arrval(&headers, headers_param);
	httpCode = zephir_get_intval(httpCode_param);
	zephir_get_strval(&body, body_param);


	zephir_update_property_zval(this_ptr, SL("_headers"), &headers);
	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_LONG(&_0, httpCode);
	zephir_update_property_zval(this_ptr, SL("_httpCode"), &_0);
	zephir_update_property_zval(this_ptr, SL("_body"), &body);
	zephir_update_property_zval(this_ptr, SL("_timeTaken"), timeTaken);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_TraceResponse, getHeaders) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_headers");

}

PHP_METHOD(ArangoDBClient_TraceResponse, getHttpCode) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_httpCode");

}

PHP_METHOD(ArangoDBClient_TraceResponse, getHttpCodeDefinition) {

	zval _0, _1, _2, _3, _4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_httpCodeDefinitions"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "gethttpcode", NULL, 0);
	zephir_check_call_status();
	if (!(zephir_array_isset(&_0, &_1))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid http code provided.", "arangodbclient/traceresponse.zep", 32);
		return;
	}
	zephir_read_property(&_2, this_ptr, SL("_httpCodeDefinitions"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "gethttpcode", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch(&_3, &_2, &_4, PH_NOISY | PH_READONLY, "arangodbclient/traceresponse.zep", 34 TSRMLS_CC);
	RETURN_CTOR(&_3);

}

PHP_METHOD(ArangoDBClient_TraceResponse, getBody) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_body");

}

PHP_METHOD(ArangoDBClient_TraceResponse, getType) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_type");

}

PHP_METHOD(ArangoDBClient_TraceResponse, getTimeTaken) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_timeTaken");

}

zend_object *zephir_init_properties_ArangoDBClient_TraceResponse(zend_class_entry *class_type TSRMLS_DC) {

		zval _1$$3;
	zval _0, _2, _3$$4;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_1$$3);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_httpCodeDefinitions"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			zephir_create_array(&_1$$3, 41, 0 TSRMLS_CC);
			add_index_stringl(&_1$$3, 100, SL("Continue"));
			add_index_stringl(&_1$$3, 101, SL("Switching Protocols"));
			add_index_stringl(&_1$$3, 200, SL("OK"));
			add_index_stringl(&_1$$3, 201, SL("Created"));
			add_index_stringl(&_1$$3, 202, SL("Accepted"));
			add_index_stringl(&_1$$3, 203, SL("Non-Authoritative Information"));
			add_index_stringl(&_1$$3, 204, SL("No Content"));
			add_index_stringl(&_1$$3, 205, SL("Reset Content"));
			add_index_stringl(&_1$$3, 206, SL("Partial Content"));
			add_index_stringl(&_1$$3, 300, SL("Multiple Choices"));
			add_index_stringl(&_1$$3, 301, SL("Moved Permanently"));
			add_index_stringl(&_1$$3, 302, SL("Found"));
			add_index_stringl(&_1$$3, 303, SL("See Other"));
			add_index_stringl(&_1$$3, 304, SL("Not Modified"));
			add_index_stringl(&_1$$3, 305, SL("Use Proxy"));
			add_index_stringl(&_1$$3, 307, SL("Temporary Redirect"));
			add_index_stringl(&_1$$3, 400, SL("Bad Request"));
			add_index_stringl(&_1$$3, 401, SL("Unauthorized"));
			add_index_stringl(&_1$$3, 402, SL("Payment Required"));
			add_index_stringl(&_1$$3, 403, SL("Forbidden"));
			add_index_stringl(&_1$$3, 404, SL("Not Found"));
			add_index_stringl(&_1$$3, 405, SL("Method Not Allowed"));
			add_index_stringl(&_1$$3, 406, SL("Not Acceptable"));
			add_index_stringl(&_1$$3, 407, SL("Proxy Authentication Required"));
			add_index_stringl(&_1$$3, 408, SL("Request Timeout"));
			add_index_stringl(&_1$$3, 409, SL("Conflict"));
			add_index_stringl(&_1$$3, 410, SL("Gone"));
			add_index_stringl(&_1$$3, 411, SL("Length Required"));
			add_index_stringl(&_1$$3, 412, SL("Precondition Failed"));
			add_index_stringl(&_1$$3, 413, SL("Request Entity Too Large"));
			add_index_stringl(&_1$$3, 414, SL("Request-URI Too Long"));
			add_index_stringl(&_1$$3, 415, SL("Unsupported Media Type"));
			add_index_stringl(&_1$$3, 416, SL("Requested Range Not Satisfiable"));
			add_index_stringl(&_1$$3, 417, SL("Expectation Failed"));
			add_index_stringl(&_1$$3, 418, SL("I'm a teapot"));
			add_index_stringl(&_1$$3, 500, SL("Internal Server Error"));
			add_index_stringl(&_1$$3, 501, SL("Not Implemented"));
			add_index_stringl(&_1$$3, 502, SL("Bad Gateway"));
			add_index_stringl(&_1$$3, 503, SL("Service Unavailable"));
			add_index_stringl(&_1$$3, 504, SL("Gateway Timeout"));
			add_index_stringl(&_1$$3, 505, SL("HTTP Version Not Supported"));
			zephir_update_property_zval(this_ptr, SL("_httpCodeDefinitions"), &_1$$3);
		}
		zephir_read_property(&_2, this_ptr, SL("_headers"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_2) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_3$$4);
			array_init(&_3$$4);
			zephir_update_property_zval(this_ptr, SL("_headers"), &_3$$4);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

