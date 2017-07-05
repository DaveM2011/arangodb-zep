
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
#include "kernel/array.h"
#include "kernel/operators.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_QueryCacheHandler) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, QueryCacheHandler, arangodbclient, querycachehandler, arangodbclient_handler_ce, arangodbclient_querycachehandler_method_entry, 0);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_QueryCacheHandler, enable) {

	zval _1;
	zval url, tmpArray949570a20cb34992178c70964942133b, _2, _3, _4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&tmpArray949570a20cb34992178c70964942133b);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "properties");
	zephir_array_fast_append(&_1, &_2);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/query-cache");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray949570a20cb34992178c70964942133b);
	zephir_create_array(&tmpArray949570a20cb34992178c70964942133b, 1, 0 TSRMLS_CC);
	add_assoc_stringl_ex(&tmpArray949570a20cb34992178c70964942133b, SL("mode"), SL("on"));
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &tmpArray949570a20cb34992178c70964942133b);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "put", NULL, 0, &url, &_4);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_QueryCacheHandler, disable) {

	zval _1;
	zval url, tmpArray1e5379e6ef331668a17ddca849ca0954, _2, _3, _4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&tmpArray1e5379e6ef331668a17ddca849ca0954);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "properties");
	zephir_array_fast_append(&_1, &_2);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/query-cache");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray1e5379e6ef331668a17ddca849ca0954);
	zephir_create_array(&tmpArray1e5379e6ef331668a17ddca849ca0954, 1, 0 TSRMLS_CC);
	add_assoc_stringl_ex(&tmpArray1e5379e6ef331668a17ddca849ca0954, SL("mode"), SL("off"));
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &tmpArray1e5379e6ef331668a17ddca849ca0954);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "put", NULL, 0, &url, &_4);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_QueryCacheHandler, enableDemandMode) {

	zval _1;
	zval url, tmpArray970d639034f788c5330c7cdaa9d03458, _2, _3, _4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&tmpArray970d639034f788c5330c7cdaa9d03458);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "properties");
	zephir_array_fast_append(&_1, &_2);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/query-cache");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray970d639034f788c5330c7cdaa9d03458);
	zephir_create_array(&tmpArray970d639034f788c5330c7cdaa9d03458, 1, 0 TSRMLS_CC);
	add_assoc_stringl_ex(&tmpArray970d639034f788c5330c7cdaa9d03458, SL("mode"), SL("demand"));
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &tmpArray970d639034f788c5330c7cdaa9d03458);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "put", NULL, 0, &url, &_4);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_QueryCacheHandler, clear) {

	zval url, _1, _2, _3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_1);
	array_init(&_1);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/query-cache");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "delete", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_QueryCacheHandler, setProperties) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *properties_param = NULL, bodyParams, url, response, _1, _2, _3;
	zval properties;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&properties);
	ZVAL_UNDEF(&bodyParams);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &properties_param);

	zephir_get_arrval(&properties, properties_param);


	ZEPHIR_CPY_WRT(&bodyParams, &properties);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "/_api/query-cache");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "json_encode_wrapper", NULL, 0, &bodyParams);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_2, "put", NULL, 0, &url, &_3);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_QueryCacheHandler, getProperties) {

	zval url, response, _1, _2;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "/_api/query-cache");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_2, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

