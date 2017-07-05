
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
#include "kernel/fcall.h"
#include "kernel/memory.h"
#include "kernel/operators.h"
#include "kernel/exception.h"
#include "kernel/concat.h"
#include "kernel/string.h"
#include "kernel/file.h"
#include "kernel/array.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_HttpHelper) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, HttpHelper, arangodbclient, httphelper, arangodbclient_httphelper_method_entry, 0);

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("METHOD_POST"), "POST");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("METHOD_PUT"), "PUT");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("METHOD_DELETE"), "DELETE");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("METHOD_GET"), "GET");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("METHOD_HEAD"), "HEAD");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("METHOD_PATCH"), "PATCH");

	zephir_declare_class_constant_long(arangodbclient_httphelper_ce, SL("CHUNK_SIZE"), 8192);

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("EOL"), "\r\n");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("SEPARATOR"), "\r\n\r\n");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("PROTOCOL"), "HTTP/1.1");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("MIME_BOUNDARY"), "XXXsubpartXXX");

	zephir_declare_class_constant_string(arangodbclient_httphelper_ce, SL("ASYNC_HEADER"), "X-Arango-Async");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_HttpHelper, createConnection) {

	zephir_fcall_cache_entry *_2 = NULL, *_6 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options, options_sub, endpoint, context, fp, errNo, message, _0, _1, _12, _13, _18, _3$$3, _4$$3, _5$$3, _7$$3, _8$$3, _9$$4, _10$$4, _11$$4, _14$$5, _15$$5, _16$$5, _17$$5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&endpoint);
	ZVAL_UNDEF(&context);
	ZVAL_UNDEF(&fp);
	ZVAL_UNDEF(&errNo);
	ZVAL_UNDEF(&message);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_18);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&_5$$3);
	ZVAL_UNDEF(&_7$$3);
	ZVAL_UNDEF(&_8$$3);
	ZVAL_UNDEF(&_9$$4);
	ZVAL_UNDEF(&_10$$4);
	ZVAL_UNDEF(&_11$$4);
	ZVAL_UNDEF(&_14$$5);
	ZVAL_UNDEF(&_15$$5);
	ZVAL_UNDEF(&_16$$5);
	ZVAL_UNDEF(&_17$$5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &options);



	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "endpoint");
	ZEPHIR_CALL_METHOD(&endpoint, options, "offsetget", NULL, 0, &_0);
	zephir_check_call_status();
	ZEPHIR_CALL_FUNCTION(&context, "stream_context_create", NULL, 56);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_1, arangodbclient_endpoint_ce, "gettype", &_2, 0, &endpoint);
	zephir_check_call_status();
	if (ZEPHIR_IS_STRING(&_1, "ssl")) {
		ZEPHIR_INIT_VAR(&_4$$3);
		ZVAL_STRING(&_4$$3, "verifyCert");
		ZEPHIR_CALL_METHOD(&_3$$3, options, "offsetget", NULL, 0, &_4$$3);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&_4$$3);
		ZVAL_STRING(&_4$$3, "ssl");
		ZEPHIR_INIT_VAR(&_5$$3);
		ZVAL_STRING(&_5$$3, "verify_peer");
		ZEPHIR_CALL_FUNCTION(NULL, "stream_context_set_option", &_6, 57, &context, &_4$$3, &_5$$3, &_3$$3);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&_4$$3);
		ZVAL_STRING(&_4$$3, "allowSelfSigned");
		ZEPHIR_CALL_METHOD(&_7$$3, options, "offsetget", NULL, 0, &_4$$3);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&_4$$3);
		ZVAL_STRING(&_4$$3, "ssl");
		ZEPHIR_INIT_NVAR(&_5$$3);
		ZVAL_STRING(&_5$$3, "allow_self_signed");
		ZEPHIR_CALL_FUNCTION(NULL, "stream_context_set_option", &_6, 57, &context, &_4$$3, &_5$$3, &_7$$3);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&_4$$3);
		ZVAL_STRING(&_4$$3, "ciphers");
		ZEPHIR_CALL_METHOD(&_8$$3, options, "offsetget", NULL, 0, &_4$$3);
		zephir_check_call_status();
		if (Z_TYPE_P(&_8$$3) != IS_NULL) {
			ZEPHIR_INIT_VAR(&_10$$4);
			ZVAL_STRING(&_10$$4, "ciphers");
			ZEPHIR_CALL_METHOD(&_9$$4, options, "offsetget", NULL, 0, &_10$$4);
			zephir_check_call_status();
			ZEPHIR_INIT_NVAR(&_10$$4);
			ZVAL_STRING(&_10$$4, "ssl");
			ZEPHIR_INIT_VAR(&_11$$4);
			ZVAL_STRING(&_11$$4, "ciphers");
			ZEPHIR_CALL_FUNCTION(NULL, "stream_context_set_option", &_6, 57, &context, &_10$$4, &_11$$4, &_9$$4);
			zephir_check_call_status();
		}
	}
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_STRING(&_0, "timeout");
	ZEPHIR_CALL_METHOD(&_12, options, "offsetget", NULL, 0, &_0);
	zephir_check_call_status();
	ZVAL_LONG(&_13, 4);
	ZEPHIR_MAKE_REF(&errNo);
	ZEPHIR_MAKE_REF(&message);
	ZEPHIR_CALL_FUNCTION(&fp, "stream_socket_client", NULL, 58, &endpoint, &errNo, &message, &_12, &_13, &context);
	ZEPHIR_UNREF(&errNo);
	ZEPHIR_UNREF(&message);
	zephir_check_call_status();
	if (!(zephir_is_true(&fp))) {
		ZEPHIR_INIT_VAR(&_14$$5);
		object_init_ex(&_14$$5, arangodbclient_connectexception_ce);
		ZEPHIR_INIT_VAR(&_16$$5);
		ZVAL_STRING(&_16$$5, "endpoint");
		ZEPHIR_CALL_METHOD(&_15$$5, options, "offsetget", NULL, 0, &_16$$5);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&_17$$5);
		ZEPHIR_CONCAT_SVSV(&_17$$5, "cannot connect to endpoint '", &_15$$5, "': ", &message);
		ZEPHIR_CALL_METHOD(NULL, &_14$$5, "__construct", NULL, 37, &_17$$5, &errNo);
		zephir_check_call_status();
		zephir_throw_exception_debug(&_14$$5, "arangodbclient/httphelper.zep", 32 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_STRING(&_0, "timeout");
	ZEPHIR_CALL_METHOD(&_18, options, "offsetget", NULL, 0, &_0);
	zephir_check_call_status();
	ZEPHIR_CALL_FUNCTION(NULL, "stream_set_timeout", NULL, 40, &fp, &_18);
	zephir_check_call_status();
	RETURN_CCTOR(&fp);

}

PHP_METHOD(ArangoDBClient_HttpHelper, buildRequest) {

	zend_bool _6$$5;
	zend_string *_12;
	zend_ulong _11;
	zephir_fcall_cache_entry *_16 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval customHeaders;
	zval connectionHeader, method, url, body, _5$$4, _9$$6;
	zval *options, options_sub, *connectionHeader_param = NULL, *method_param = NULL, *url_param = NULL, *body_param = NULL, *customHeaders_param = NULL, length, contentType, customHeader, headerKey, headerValue, request, _3, _4, *_10, _14, _15, _17, _0$$3, _1$$3, _2$$3, _7$$5, _8$$5, _13$$7;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&length);
	ZVAL_UNDEF(&contentType);
	ZVAL_UNDEF(&customHeader);
	ZVAL_UNDEF(&headerKey);
	ZVAL_UNDEF(&headerValue);
	ZVAL_UNDEF(&request);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_15);
	ZVAL_UNDEF(&_17);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&_13$$7);
	ZVAL_UNDEF(&connectionHeader);
	ZVAL_UNDEF(&method);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_9$$6);
	ZVAL_UNDEF(&customHeaders);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 5, 1, &options, &connectionHeader_param, &method_param, &url_param, &body_param, &customHeaders_param);

	zephir_get_strval(&connectionHeader, connectionHeader_param);
	zephir_get_strval(&method, method_param);
	zephir_get_strval(&url, url_param);
	zephir_get_strval(&body, body_param);
	if (!customHeaders_param) {
		ZEPHIR_INIT_VAR(&customHeaders);
		array_init(&customHeaders);
	} else {
		zephir_get_arrval(&customHeaders, customHeaders_param);
	}


	if (!(Z_TYPE_P(&body) == IS_STRING)) {
		ZEPHIR_INIT_VAR(&_0$$3);
		object_init_ex(&_0$$3, arangodbclient_clientexception_ce);
		ZEPHIR_INIT_VAR(&_1$$3);
		zephir_gettype(&_1$$3, &body TSRMLS_CC);
		ZEPHIR_INIT_VAR(&_2$$3);
		ZEPHIR_CONCAT_SV(&_2$$3, "Invalid value for body. Expecting string, got ", &_1$$3);
		ZEPHIR_CALL_METHOD(NULL, &_0$$3, "__construct", NULL, 37, &_2$$3);
		zephir_check_call_status();
		zephir_throw_exception_debug(&_0$$3, "arangodbclient/httphelper.zep", 43 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	ZEPHIR_INIT_VAR(&length);
	ZVAL_LONG(&length, zephir_fast_strlen_ev(&body));
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "Batch");
	ZEPHIR_CALL_METHOD(&_3, options, "offsetget", NULL, 0, &_4);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&contentType);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_3)) {
		ZEPHIR_INIT_VAR(&_5$$4);
		ZEPHIR_CONCAT_SSS(&_5$$4, "Content-Type: multipart/form-data; boundary=", "XXXsubpartXXX", "\r\n");
		ZEPHIR_CPY_WRT(&contentType, &_5$$4);
	} else {
		ZVAL_STRING(&contentType, "");
		_6$$5 = ZEPHIR_GT_LONG(&length, 0);
		if (_6$$5) {
			ZEPHIR_INIT_VAR(&_8$$5);
			ZVAL_STRING(&_8$$5, "BatchPart");
			ZEPHIR_CALL_METHOD(&_7$$5, options, "offsetget", NULL, 0, &_8$$5);
			zephir_check_call_status();
			_6$$5 = ZEPHIR_IS_FALSE_IDENTICAL(&_7$$5);
		}
		if (_6$$5) {
			ZEPHIR_INIT_VAR(&_9$$6);
			ZEPHIR_CONCAT_SS(&_9$$6, "Content-Type: application/json", "\r\n");
			ZEPHIR_CPY_WRT(&contentType, &_9$$6);
		}
	}
	ZEPHIR_INIT_VAR(&customHeader);
	ZVAL_STRING(&customHeader, "");
	zephir_is_iterable(&customHeaders, 0, "arangodbclient/httphelper.zep", 58);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&customHeaders), _11, _12, _10)
	{
		ZEPHIR_INIT_NVAR(&headerKey);
		if (_12 != NULL) { 
			ZVAL_STR_COPY(&headerKey, _12);
		} else {
			ZVAL_LONG(&headerKey, _11);
		}
		ZEPHIR_INIT_NVAR(&headerValue);
		ZVAL_COPY(&headerValue, _10);
		ZEPHIR_INIT_LNVAR(_13$$7);
		ZEPHIR_CONCAT_VSVS(&_13$$7, &headerKey, ": ", &headerValue, "\r\n");
		zephir_concat_self(&customHeader, &_13$$7 TSRMLS_CC);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&headerValue);
	ZEPHIR_INIT_NVAR(&headerKey);
	ZEPHIR_INIT_NVAR(&_4);
	ZVAL_STRING(&_4, "%s %s %s");
	ZEPHIR_INIT_VAR(&_14);
	ZVAL_STRING(&_14, "HTTP/1.1");
	ZEPHIR_CALL_FUNCTION(&_15, "sprintf", &_16, 41, &_4, &method, &url, &_14);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_4);
	ZVAL_STRING(&_4, "Content-Length: %s");
	ZEPHIR_CALL_FUNCTION(&_17, "sprintf", &_16, 41, &_4, &length);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&request);
	ZEPHIR_CONCAT_VVVVVSSV(&request, &_15, &connectionHeader, &customHeader, &contentType, &_17, "\r\n", "\r\n", &body);
	RETURN_CCTOR(&request);

}

PHP_METHOD(ArangoDBClient_HttpHelper, validateMethod) {

	zend_bool _0, _1, _2, _3, _4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *method_param = NULL, _5;
	zval method, _6;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&method);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &method_param);

	zephir_get_strval(&method, method_param);


	_0 = ZEPHIR_IS_STRING_IDENTICAL(&method, "POST");
	if (!(_0)) {
		_0 = ZEPHIR_IS_STRING_IDENTICAL(&method, "PUT");
	}
	_1 = _0;
	if (!(_1)) {
		_1 = ZEPHIR_IS_STRING_IDENTICAL(&method, "DELETE");
	}
	_2 = _1;
	if (!(_2)) {
		_2 = ZEPHIR_IS_STRING_IDENTICAL(&method, "GET");
	}
	_3 = _2;
	if (!(_3)) {
		_3 = ZEPHIR_IS_STRING_IDENTICAL(&method, "HEAD");
	}
	_4 = _3;
	if (!(_4)) {
		_4 = ZEPHIR_IS_STRING_IDENTICAL(&method, "PATCH");
	}
	if (_4) {
		RETURN_MM_BOOL(1);
	}
	ZEPHIR_INIT_VAR(&_5);
	object_init_ex(&_5, arangodbclient_clientexception_ce);
	ZEPHIR_INIT_VAR(&_6);
	ZEPHIR_CONCAT_SVS(&_6, "Invalid request method '", &method, "'");
	ZEPHIR_CALL_METHOD(NULL, &_5, "__construct", NULL, 37, &_6);
	zephir_check_call_status();
	zephir_throw_exception_debug(&_5, "arangodbclient/httphelper.zep", 67 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();
	return;

}

PHP_METHOD(ArangoDBClient_HttpHelper, transfer) {

	zend_bool first = 0, _0, _3$$4, _11$$4, _15$$4;
	zephir_fcall_cache_entry *_2 = NULL, *_7 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS, contentLengthPos = 0;
	zval request, method;
	zval *socket, socket_sub, *request_param = NULL, *method_param = NULL, contentLength, expectedLength, totalRead, result, read, pos, bodyStart, _1$$4, _4$$4, _5$$8, _6$$8, _8$$9, _9$$9, _10$$9, _12$$11, _13$$11, _14$$12;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&socket_sub);
	ZVAL_UNDEF(&contentLength);
	ZVAL_UNDEF(&expectedLength);
	ZVAL_UNDEF(&totalRead);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&read);
	ZVAL_UNDEF(&pos);
	ZVAL_UNDEF(&bodyStart);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$8);
	ZVAL_UNDEF(&_6$$8);
	ZVAL_UNDEF(&_8$$9);
	ZVAL_UNDEF(&_9$$9);
	ZVAL_UNDEF(&_10$$9);
	ZVAL_UNDEF(&_12$$11);
	ZVAL_UNDEF(&_13$$11);
	ZVAL_UNDEF(&_14$$12);
	ZVAL_UNDEF(&request);
	ZVAL_UNDEF(&method);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 0, &socket, &request_param, &method_param);

	zephir_get_strval(&request, request_param);
	zephir_get_strval(&method, method_param);


	if (!(Z_TYPE_P(socket) == IS_RESOURCE)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid socket used", "arangodbclient/httphelper.zep", 75);
		return;
	}
	zephir_fwrite(NULL, socket, &request TSRMLS_CC);
	ZEPHIR_CALL_FUNCTION(NULL, "fflush", NULL, 59, socket);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&contentLength);
	ZVAL_NULL(&contentLength);
	ZEPHIR_INIT_VAR(&expectedLength);
	ZVAL_NULL(&expectedLength);
	ZEPHIR_INIT_VAR(&totalRead);
	ZVAL_LONG(&totalRead, 0);
	contentLengthPos = 0;
	ZEPHIR_INIT_VAR(&result);
	ZVAL_STRING(&result, "");
	first = 1;
	while (1) {
		_0 = first;
		if (!(_0)) {
			_0 = !(zephir_feof(socket TSRMLS_CC));
		}
		if (!(_0)) {
			break;
		}
		ZVAL_LONG(&_1$$4, 8192);
		ZEPHIR_CALL_FUNCTION(&read, "fread", &_2, 60, socket, &_1$$4);
		zephir_check_call_status();
		_3$$4 = ZEPHIR_IS_FALSE_IDENTICAL(&read);
		if (!(_3$$4)) {
			_3$$4 = ZEPHIR_IS_STRING_IDENTICAL(&read, "");
		}
		if (_3$$4) {
			break;
		}
		ZEPHIR_INIT_NVAR(&_4$$4);
		ZVAL_LONG(&_4$$4, zephir_fast_strlen_ev(&read));
		ZEPHIR_ADD_ASSIGN(&totalRead, &_4$$4);
		if (first) {
			ZEPHIR_CPY_WRT(&result, &read);
			first = 0;
		} else {
			zephir_concat_self(&result, &read TSRMLS_CC);
		}
		if (Z_TYPE_P(&contentLength) == IS_NULL) {
			ZEPHIR_INIT_NVAR(&_5$$8);
			ZVAL_STRING(&_5$$8, "content-length: ");
			ZVAL_LONG(&_6$$8, 12);
			ZEPHIR_CALL_FUNCTION(&pos, "stripos", &_7, 61, &result, &_5$$8, &_6$$8);
			zephir_check_call_status();
			if (!ZEPHIR_IS_FALSE_IDENTICAL(&pos)) {
				ZVAL_LONG(&_8$$9, (zephir_get_numberval(&pos) + 16));
				ZVAL_LONG(&_9$$9, 10);
				ZEPHIR_INIT_NVAR(&_10$$9);
				zephir_substr(&_10$$9, &result, zephir_get_intval(&_8$$9), 10 , 0);
				ZEPHIR_INIT_NVAR(&contentLength);
				ZVAL_LONG(&contentLength, zephir_get_intval(&_10$$9));
				contentLengthPos = (zephir_get_numberval(&pos) + 17);
				if (ZEPHIR_IS_STRING_IDENTICAL(&method, "HEAD")) {
					ZEPHIR_INIT_NVAR(&contentLength);
					ZVAL_LONG(&contentLength, 0);
				}
			}
		}
		_11$$4 = Z_TYPE_P(&contentLength) != IS_NULL;
		if (_11$$4) {
			_11$$4 = Z_TYPE_P(&expectedLength) == IS_NULL;
		}
		if (_11$$4) {
			ZEPHIR_INIT_NVAR(&_12$$11);
			ZVAL_STRING(&_12$$11, "\r\n\r\n");
			ZVAL_LONG(&_13$$11, contentLengthPos);
			ZEPHIR_INIT_NVAR(&bodyStart);
			zephir_fast_strpos(&bodyStart, &result, &_12$$11, zephir_get_intval(&_13$$11) );
			if (!ZEPHIR_IS_FALSE_IDENTICAL(&bodyStart)) {
				ZEPHIR_INIT_NVAR(&_14$$12);
				ZVAL_LONG(&_14$$12, 4);
				ZEPHIR_ADD_ASSIGN(&bodyStart, &_14$$12);
				ZEPHIR_INIT_NVAR(&expectedLength);
				zephir_add_function(&expectedLength, &bodyStart, &contentLength);
			}
		}
		_15$$4 = Z_TYPE_P(&expectedLength) != IS_NULL;
		if (_15$$4) {
			_15$$4 = ZEPHIR_GE(&totalRead, &expectedLength);
		}
		if (_15$$4) {
			break;
		}
	}
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_HttpHelper, parseHttpMessage) {

	zval *httpMessage_param = NULL, *originUrl_param = NULL, *originMethod_param = NULL, _0;
	zval httpMessage, originUrl, originMethod;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&httpMessage);
	ZVAL_UNDEF(&originUrl);
	ZVAL_UNDEF(&originMethod);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 2, &httpMessage_param, &originUrl_param, &originMethod_param);

	zephir_get_strval(&httpMessage, httpMessage_param);
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


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "\r\n\r\n");
	zephir_fast_explode(return_value, &_0, &httpMessage, 2  TSRMLS_CC);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_HttpHelper, parseHeaders) {

	zend_string *_4;
	zend_ulong _3;
	zval *headers_param = NULL, httpCode, result, processed, lineNumber, line, key, value, tmpListKeyValue, matches, _0, _1, *_2, _5$$4, _6$$4, _7$$5, _8$$6, _9$$6, _10$$6;
	zval headers;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&httpCode);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&processed);
	ZVAL_UNDEF(&lineNumber);
	ZVAL_UNDEF(&line);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&tmpListKeyValue);
	ZVAL_UNDEF(&matches);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$6);
	ZVAL_UNDEF(&_9$$6);
	ZVAL_UNDEF(&_10$$6);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &headers_param);

	zephir_get_strval(&headers, headers_param);


	ZEPHIR_INIT_VAR(&httpCode);
	ZVAL_NULL(&httpCode);
	ZEPHIR_INIT_VAR(&result);
	ZVAL_NULL(&result);
	ZEPHIR_INIT_VAR(&processed);
	array_init(&processed);
	ZEPHIR_INIT_VAR(&_0);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "\r\n");
	zephir_fast_explode(&_0, &_1, &headers, LONG_MAX TSRMLS_CC);
	zephir_is_iterable(&_0, 0, "arangodbclient/httphelper.zep", 153);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&_0), _3, _4, _2)
	{
		ZEPHIR_INIT_NVAR(&lineNumber);
		if (_4 != NULL) { 
			ZVAL_STR_COPY(&lineNumber, _4);
		} else {
			ZVAL_LONG(&lineNumber, _3);
		}
		ZEPHIR_INIT_NVAR(&line);
		ZVAL_COPY(&line, _2);
		if (ZEPHIR_IS_LONG_IDENTICAL(&lineNumber, 0)) {
			ZEPHIR_INIT_NVAR(&_5$$4);
			ZEPHIR_INIT_NVAR(&_6$$4);
			ZVAL_STRING(&_6$$4, "/^HTTP\\/\\d+\\.\\d+\\s+(\\d+)/");
			zephir_preg_match(&_5$$4, &_6$$4, &line, &matches, 0, 0 , 0  TSRMLS_CC);
			if (zephir_is_true(&_5$$4)) {
				ZEPHIR_OBS_NVAR(&_7$$5);
				zephir_array_fetch_long(&_7$$5, &matches, 1, PH_NOISY, "arangodbclient/httphelper.zep", 137 TSRMLS_CC);
				ZEPHIR_INIT_NVAR(&httpCode);
				ZVAL_LONG(&httpCode, zephir_get_intval(&_7$$5));
			}
			ZEPHIR_CPY_WRT(&result, &line);
		} else {
			ZEPHIR_INIT_NVAR(&_8$$6);
			ZVAL_STRING(&_8$$6, ": ");
			ZEPHIR_INIT_NVAR(&_9$$6);
			zephir_fast_strpos(&_9$$6, &line, &_8$$6, 0 );
			if (!ZEPHIR_IS_FALSE_IDENTICAL(&_9$$6)) {
				ZEPHIR_INIT_NVAR(&tmpListKeyValue);
				zephir_fast_explode_str(&tmpListKeyValue, SL(": "), &line, 2  TSRMLS_CC);
				ZEPHIR_OBS_NVAR(&key);
				zephir_array_fetch_long(&key, &tmpListKeyValue, 0, PH_NOISY, "arangodbclient/httphelper.zep", 143 TSRMLS_CC);
				ZEPHIR_OBS_NVAR(&value);
				zephir_array_fetch_long(&value, &tmpListKeyValue, 1, PH_NOISY, "arangodbclient/httphelper.zep", 144 TSRMLS_CC);
			} else {
				ZEPHIR_INIT_NVAR(&tmpListKeyValue);
				zephir_fast_explode_str(&tmpListKeyValue, SL(":"), &line, 2  TSRMLS_CC);
				ZEPHIR_OBS_NVAR(&key);
				zephir_array_fetch_long(&key, &tmpListKeyValue, 0, PH_NOISY, "arangodbclient/httphelper.zep", 147 TSRMLS_CC);
				ZEPHIR_OBS_NVAR(&value);
				zephir_array_fetch_long(&value, &tmpListKeyValue, 1, PH_NOISY, "arangodbclient/httphelper.zep", 148 TSRMLS_CC);
			}
			ZEPHIR_INIT_NVAR(&_10$$6);
			zephir_fast_strtolower(&_10$$6, &key);
			zephir_array_update_zval(&processed, &_10$$6, &value, PH_COPY | PH_SEPARATE);
		}
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&line);
	ZEPHIR_INIT_NVAR(&lineNumber);
	zephir_create_array(return_value, 3, 0 TSRMLS_CC);
	zephir_array_fast_append(return_value, &httpCode);
	zephir_array_fast_append(return_value, &result);
	zephir_array_fast_append(return_value, &processed);
	RETURN_MM();

}

