
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
#include "kernel/array.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Handler) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Handler, arangodbclient, handler, arangodbclient_handler_method_entry, ZEND_ACC_EXPLICIT_ABSTRACT_CLASS);

	zend_declare_property_null(arangodbclient_handler_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_handler_ce, SL("_documentClass"), "\\ArangoDBClient\\Document", ZEND_ACC_PROTECTED TSRMLS_CC);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Handler, __construct) {

	zval *connection, connection_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);

	zephir_fetch_params(0, 1, 0, &connection);



	zephir_update_property_zval(this_ptr, SL("_connection"), connection);

}

PHP_METHOD(ArangoDBClient_Handler, getConnection) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_connection");

}

PHP_METHOD(ArangoDBClient_Handler, getConnectionOption) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *optionName, optionName_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&optionName_sub);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &optionName);



	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&_0, "getoption", NULL, 0, optionName);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Handler, json_encode_wrapper) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *body_param = NULL, _0;
	zval body;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &body_param);

	zephir_get_arrval(&body, body_param);


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&_0, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Handler, includeOptionsInParams) {

	zend_string *_2;
	zend_ulong _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_3 = NULL;
	zval includeArray;
	zval *options, options_sub, *includeArray_param = NULL, params, key, value, *_0, _4$$6;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_4$$6);
	ZVAL_UNDEF(&includeArray);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &options, &includeArray_param);

	if (!includeArray_param) {
		ZEPHIR_INIT_VAR(&includeArray);
		array_init(&includeArray);
	} else {
		zephir_get_arrval(&includeArray, includeArray_param);
	}


	ZEPHIR_INIT_VAR(&params);
	array_init(&params);
	zephir_is_iterable(options, 0, "arangodbclient/handler.zep", 43);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(options), _1, _2, _0)
	{
		ZEPHIR_INIT_NVAR(&key);
		if (_2 != NULL) { 
			ZVAL_STR_COPY(&key, _2);
		} else {
			ZVAL_LONG(&key, _1);
		}
		ZEPHIR_INIT_NVAR(&value);
		ZVAL_COPY(&value, _0);
		if (zephir_array_key_exists(&includeArray, &key TSRMLS_CC)) {
			if (ZEPHIR_IS_STRING_IDENTICAL(&key, "policy")) {
				ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_updatepolicy_ce, "validate", &_3, 0, &value);
				zephir_check_call_status();
			}
			zephir_array_update_zval(&params, &key, &value, PH_COPY | PH_SEPARATE);
			if (Z_TYPE_P(&value) == IS_NULL) {
				zephir_array_fetch(&_4$$6, &includeArray, &key, PH_NOISY | PH_READONLY, "arangodbclient/handler.zep", 39 TSRMLS_CC);
				zephir_array_update_zval(&params, &key, &_4$$6, PH_COPY | PH_SEPARATE);
			}
		}
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&value);
	ZEPHIR_INIT_NVAR(&key);
	RETURN_CCTOR(&params);

}

PHP_METHOD(ArangoDBClient_Handler, includeOptionsInBody) {

	zend_bool _3$$4;
	zend_string *_2;
	zend_ulong _1;
	zval includeArray;
	zval *options, options_sub, *body, body_sub, *includeArray_param = NULL, key, value, *_0, _4$$4, _5$$5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&body_sub);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&includeArray);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &options, &body, &includeArray_param);

	ZEPHIR_SEPARATE_PARAM(body);
	if (!includeArray_param) {
		ZEPHIR_INIT_VAR(&includeArray);
		array_init(&includeArray);
	} else {
		zephir_get_arrval(&includeArray, includeArray_param);
	}


	zephir_is_iterable(options, 0, "arangodbclient/handler.zep", 58);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(options), _1, _2, _0)
	{
		ZEPHIR_INIT_NVAR(&key);
		if (_2 != NULL) { 
			ZVAL_STR_COPY(&key, _2);
		} else {
			ZVAL_LONG(&key, _1);
		}
		ZEPHIR_INIT_NVAR(&value);
		ZVAL_COPY(&value, _0);
		if (zephir_array_key_exists(&includeArray, &key TSRMLS_CC)) {
			zephir_array_update_zval(body, &key, &value, PH_COPY | PH_SEPARATE);
			_3$$4 = Z_TYPE_P(&value) == IS_NULL;
			if (_3$$4) {
				zephir_array_fetch(&_4$$4, &includeArray, &key, PH_NOISY | PH_READONLY, "arangodbclient/handler.zep", 53 TSRMLS_CC);
				_3$$4 = Z_TYPE_P(&_4$$4) != IS_NULL;
			}
			if (_3$$4) {
				zephir_array_fetch(&_5$$5, &includeArray, &key, PH_NOISY | PH_READONLY, "arangodbclient/handler.zep", 54 TSRMLS_CC);
				zephir_array_update_zval(body, &key, &_5$$5, PH_COPY | PH_SEPARATE);
			}
		}
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&value);
	ZEPHIR_INIT_NVAR(&key);
	RETVAL_ZVAL(body, 1, 0);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Handler, makeCollection) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value, value_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value);



	if (zephir_instance_of_ev(value, arangodbclient_collection_ce TSRMLS_CC)) {
		ZEPHIR_RETURN_CALL_METHOD(value, "getname", NULL, 0);
		zephir_check_call_status();
		RETURN_MM();
	}
	if (zephir_instance_of_ev(value, arangodbclient_document_ce TSRMLS_CC)) {
		ZEPHIR_RETURN_CALL_METHOD(value, "getcollectionid", NULL, 0);
		zephir_check_call_status();
		RETURN_MM();
	}
	RETVAL_ZVAL(value, 1, 0);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Handler, setDocumentClass) {

	zval *classs_param = NULL;
	zval classs;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&classs);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &classs_param);

	zephir_get_strval(&classs, classs_param);


	zephir_update_property_zval(this_ptr, SL("_documentClass"), &classs);
	RETURN_THIS();

}

