
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
#include "kernel/fcall.h"
#include "kernel/memory.h"
#include "kernel/operators.h"
#include "kernel/array.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_AqlUserFunction) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, AqlUserFunction, arangodbclient, aqluserfunction, arangodbclient_aqluserfunction_method_entry, 0);

	zend_declare_property_null(arangodbclient_aqluserfunction_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_aqluserfunction_ce, SL("attributes"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_aqluserfunction_ce, SL("_action"), "", ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_aqluserfunction_ce->create_object = zephir_init_properties_ArangoDBClient_AqlUserFunction;
	zephir_declare_class_constant_string(arangodbclient_aqluserfunction_ce, SL("ENTRY_NAME"), "name");

	zephir_declare_class_constant_string(arangodbclient_aqluserfunction_ce, SL("ENTRY_CODE"), "code");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval attributesArray;
	zval *connection, connection_sub, *attributesArray_param = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&attributesArray);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &connection, &attributesArray_param);

	if (!attributesArray_param) {
		ZEPHIR_INIT_VAR(&attributesArray);
		array_init(&attributesArray);
	} else {
		zephir_get_arrval(&attributesArray, attributesArray_param);
	}


	zephir_update_property_zval(this_ptr, SL("_connection"), connection);
	if (Z_TYPE_P(&attributesArray) == IS_ARRAY) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "buildattributesfromarray", NULL, 0, &attributesArray);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, register) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *name = NULL, name_sub, *code = NULL, code_sub, __$null, attributes, response, _0, _1, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name_sub);
	ZVAL_UNDEF(&code_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&attributes);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 2, &name, &code);

	if (!name) {
		name = &name_sub;
		name = &__$null;
	}
	if (!code) {
		code = &code_sub;
		code = &__$null;
	}


	zephir_read_property(&_0, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&attributes, &_0);
	if (zephir_is_true(name)) {
		zephir_array_update_string(&attributes, SL("name"), name, PH_COPY | PH_SEPARATE);
	}
	if (zephir_is_true(code)) {
		zephir_array_update_string(&attributes, SL("code"), code, PH_COPY | PH_SEPARATE);
	}
	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, &_1, "json_encode_wrapper", NULL, 0, &attributes);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/aqlfunction");
	ZEPHIR_CALL_METHOD(&response, &_0, "post", NULL, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, unregister) {

	zval _1, _5$$4;
	zephir_fcall_cache_entry *_0 = NULL, *_4 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool namespacee;
	zval *name = NULL, name_sub, *namespacee_param = NULL, __$true, __$null, url, response, _2, _6, _3$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_5$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 2, &name, &namespacee_param);

	if (!name) {
		name = &name_sub;
		ZEPHIR_CPY_WRT(name, &__$null);
	} else {
		ZEPHIR_SEPARATE_PARAM(name);
	}
	if (!namespacee_param) {
		namespacee = 0;
	} else {
		namespacee = zephir_get_boolval(namespacee_param);
	}


	if (Z_TYPE_P(name) == IS_NULL) {
		ZEPHIR_CALL_METHOD(name, this_ptr, "getname", NULL, 0);
		zephir_check_call_status();
	}
	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, name);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/aqlfunction");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	if (namespacee) {
		ZEPHIR_INIT_VAR(&_5$$4);
		zephir_create_array(&_5$$4, 1, 0 TSRMLS_CC);
		zephir_array_update_string(&_5$$4, SL("group"), &__$true, PH_COPY | PH_SEPARATE);
		ZEPHIR_CALL_CE_STATIC(&_3$$4, arangodbclient_urlhelper_ce, "appendparamsurl", &_4, 0, &url, &_5$$4);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(&url, &_3$$4);
	}
	zephir_read_property(&_6, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&response, &_6, "delete", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, getRegisteredUserFunctions) {

	zval _5$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL, *_4 = NULL;
	zval *namespacee = NULL, namespacee_sub, __$null, url, response, _1, _2, _6, _3$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&namespacee_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_5$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &namespacee);

	if (!namespacee) {
		namespacee = &namespacee_sub;
		namespacee = &__$null;
	}


	ZEPHIR_INIT_VAR(&_1);
	array_init(&_1);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/aqlfunction");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	if (Z_TYPE_P(namespacee) != IS_NULL) {
		ZEPHIR_INIT_VAR(&_5$$3);
		zephir_create_array(&_5$$3, 1, 0 TSRMLS_CC);
		zephir_array_update_string(&_5$$3, SL("namespace"), namespacee, PH_COPY | PH_SEPARATE);
		ZEPHIR_CALL_CE_STATIC(&_3$$3, arangodbclient_urlhelper_ce, "appendparamsurl", &_4, 0, &url, &_5$$3);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(&url, &_3$$3);
	}
	zephir_read_property(&_6, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&response, &_6, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, getConnection) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_connection");

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, setName) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, _1;
	zval value, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	zephir_get_strval(&_0, &value);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "name");
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_1, &_0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, getName) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "name");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, setCode) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, _1;
	zval value, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	zephir_get_strval(&_0, &value);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "code");
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_1, &_0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, getCode) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "code");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, set) {

	zval *key, key_sub, *value, value_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key_sub);
	ZVAL_UNDEF(&value_sub);

	zephir_fetch_params(0, 2, 0, &key, &value);



	if (!(Z_TYPE_P(key) == IS_STRING)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STRW(arangodbclient_clientexception_ce, "Invalid attribute key", "arangodbclient/aqluserfunction.zep", 88);
		return;
	}
	zephir_update_property_array(this_ptr, SL("attributes"), key, value TSRMLS_CC);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, __set) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key_param = NULL, *value, value_sub;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &key_param, &value);

	zephir_get_strval(&key, key_param);


	if (ZEPHIR_IS_STRING(&key, "name")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setname", NULL, 0, value);
		zephir_check_call_status();
	} else if (ZEPHIR_IS_STRING(&key, "code")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setcode", NULL, 0, value);
		zephir_check_call_status();
	} else {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &key, value);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, get) {

	zval *key_param = NULL, _0, _1$$3, _2$$3;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &key_param);

	zephir_get_strval(&key, key_param);


	zephir_read_property(&_0, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset(&_0, &key)) {
		zephir_read_property(&_1$$3, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch(&_2$$3, &_1$$3, &key, PH_NOISY | PH_READONLY, "arangodbclient/aqluserfunction.zep", 108 TSRMLS_CC);
		RETURN_CTOR(&_2$$3);
	}
	RETURN_MM_NULL();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, __isset) {

	zval *key_param = NULL, _0;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &key_param);

	zephir_get_strval(&key, key_param);


	zephir_read_property(&_0, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset(&_0, &key)) {
		RETURN_MM_BOOL(1);
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, __get) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key_param = NULL;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &key_param);

	zephir_get_strval(&key, key_param);


	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &key);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, __toString) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_action");

}

PHP_METHOD(ArangoDBClient_AqlUserFunction, buildAttributesFromArray) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options, options_sub, _0$$3, _1$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &options);



	if (zephir_array_isset_string(options, SL("name"))) {
		zephir_array_fetch_string(&_0$$3, options, SL("name"), PH_NOISY | PH_READONLY, "arangodbclient/aqluserfunction.zep", 134 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setname", NULL, 0, &_0$$3);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(options, SL("code"))) {
		zephir_array_fetch_string(&_1$$4, options, SL("code"), PH_NOISY | PH_READONLY, "arangodbclient/aqluserfunction.zep", 137 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setcode", NULL, 0, &_1$$4);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

zend_object *zephir_init_properties_ArangoDBClient_AqlUserFunction(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _1$$3;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("attributes"), &_1$$3);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

