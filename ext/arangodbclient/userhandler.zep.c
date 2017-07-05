
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
#include "kernel/exception.h"
#include "kernel/operators.h"
#include "kernel/array.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_UserHandler) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, UserHandler, arangodbclient, userhandler, arangodbclient_handler_ce, arangodbclient_userhandler_method_entry, 0);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_UserHandler, addUser) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval extra;
	zval *username_param = NULL, *passwd = NULL, passwd_sub, *active = NULL, active_sub, *extra_param = NULL, __$null, userDocument, data, e, _0, _1, _2, _3$$3, _4$$3;
	zval username;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&username);
	ZVAL_UNDEF(&passwd_sub);
	ZVAL_UNDEF(&active_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&userDocument);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&extra);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 3, &username_param, &passwd, &active, &extra_param);

	zephir_get_strval(&username, username_param);
	if (!passwd) {
		passwd = &passwd_sub;
		passwd = &__$null;
	}
	if (!active) {
		active = &active_sub;
		active = &__$null;
	}
	if (!extra_param) {
		ZEPHIR_INIT_VAR(&extra);
		array_init(&extra);
	} else {
		zephir_get_arrval(&extra, extra_param);
	}


	ZEPHIR_INIT_VAR(&userDocument);
	object_init_ex(&userDocument, arangodbclient_user_ce);
	ZEPHIR_CALL_METHOD(NULL, &userDocument, "__construct", NULL, 1);
	zephir_check_call_status();
	zephir_update_property_zval(&userDocument, SL("user"), &username);
	zephir_update_property_zval(&userDocument, SL("passwd"), passwd);
	zephir_update_property_zval(&userDocument, SL("active"), active);
	zephir_update_property_zval(&userDocument, SL("extra"), &extra);
	ZEPHIR_CALL_METHOD(&data, &userDocument, "getall", NULL, 64);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/user");
	ZEPHIR_CALL_METHOD(NULL, &_0, "post", NULL, 0, &_2, &_1);
	zephir_check_call_status();

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(&_3$$3, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&_4$$3, &_3$$3, "getdatabase", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "grantpermissions", NULL, 0, &username, &_4$$3);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_NVAR(&_2);
		ZVAL_OBJ(&_2, EG(exception));
		Z_ADDREF_P(&_2);
		if (zephir_instance_of_ev(&_2, zend_exception_get_default(TSRMLS_C) TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_2);
			zephir_throw_exception_debug(&e, "arangodbclient/userhandler.zep", 19 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_UserHandler, replaceUser) {

	zephir_fcall_cache_entry *_0 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval extra, _1;
	zval *username_param = NULL, *passwd = NULL, passwd_sub, *active = NULL, active_sub, *extra_param = NULL, __$null, userDocument, data, url, _2, _3, _4;
	zval username;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&username);
	ZVAL_UNDEF(&passwd_sub);
	ZVAL_UNDEF(&active_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&userDocument);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&extra);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 3, &username_param, &passwd, &active, &extra_param);

	zephir_get_strval(&username, username_param);
	if (!passwd) {
		passwd = &passwd_sub;
		passwd = &__$null;
	}
	if (!active) {
		active = &active_sub;
		active = &__$null;
	}
	if (!extra_param) {
		ZEPHIR_INIT_VAR(&extra);
		array_init(&extra);
	} else {
		zephir_get_arrval(&extra, extra_param);
	}


	ZEPHIR_INIT_VAR(&userDocument);
	object_init_ex(&userDocument, arangodbclient_user_ce);
	ZEPHIR_CALL_METHOD(NULL, &userDocument, "__construct", NULL, 1);
	zephir_check_call_status();
	zephir_update_property_zval(&userDocument, SL("passwd"), passwd);
	zephir_update_property_zval(&userDocument, SL("active"), active);
	zephir_update_property_zval(&userDocument, SL("extra"), &extra);
	ZEPHIR_CALL_METHOD(&data, &userDocument, "getall", NULL, 64);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &username);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/user");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "put", NULL, 0, &url, &_4);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_UserHandler, updateUser) {

	zephir_fcall_cache_entry *_0 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval extra, _1;
	zval *username_param = NULL, *passwd = NULL, passwd_sub, *active = NULL, active_sub, *extra_param = NULL, __$null, userDocument, url, _2, _3, _4, _5;
	zval username;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&username);
	ZVAL_UNDEF(&passwd_sub);
	ZVAL_UNDEF(&active_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&userDocument);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&extra);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 3, &username_param, &passwd, &active, &extra_param);

	zephir_get_strval(&username, username_param);
	if (!passwd) {
		passwd = &passwd_sub;
		passwd = &__$null;
	}
	if (!active) {
		active = &active_sub;
		active = &__$null;
	}
	if (!extra_param) {
		ZEPHIR_INIT_VAR(&extra);
		array_init(&extra);
	} else {
		zephir_get_arrval(&extra, extra_param);
	}


	ZEPHIR_INIT_VAR(&userDocument);
	object_init_ex(&userDocument, arangodbclient_user_ce);
	ZEPHIR_CALL_METHOD(NULL, &userDocument, "__construct", NULL, 1);
	zephir_check_call_status();
	zephir_update_property_zval(&userDocument, SL("active"), active);
	if (Z_TYPE_P(passwd) != IS_NULL) {
		zephir_update_property_zval(&userDocument, SL("passwd"), passwd);
	}
	if (Z_TYPE_P(active) != IS_NULL) {
		zephir_update_property_zval(&userDocument, SL("active"), active);
	}
	if (!ZEPHIR_IS_STRING_IDENTICAL(&extra, "")) {
		zephir_update_property_zval(&userDocument, SL("extra"), &extra);
	}
	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &username);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/user");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_5, &userDocument, "getall", NULL, 64);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &_5);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "patch", NULL, 0, &url, &_4);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_UserHandler, get) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL, *_4 = NULL;
	zval *username_param = NULL, __$false, url, response, data, options, _2, _3;
	zval username;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&username);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &username_param);

	zephir_get_strval(&username, username_param);


	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &username);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/user");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_3, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&options);
	zephir_create_array(&options, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_RETURN_CALL_CE_STATIC(arangodbclient_user_ce, "createfromarray", &_4, 0, &data, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_UserHandler, removeUser) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL, *_4 = NULL;
	zval *username_param = NULL, params, url, _2, _3;
	zval username;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&username);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &username_param);

	zephir_get_strval(&username, username_param);


	ZEPHIR_INIT_VAR(&params);
	array_init(&params);
	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &username);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/user");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_3, arangodbclient_urlhelper_ce, "appendparamsurl", &_4, 0, &url, &params);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_3);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "delete", NULL, 0, &url);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_UserHandler, grantPermissions) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *username_param = NULL, *databaseName_param = NULL, data, url, _2, _3, _4;
	zval username, databaseName;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&username);
	ZVAL_UNDEF(&databaseName);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &username_param, &databaseName_param);

	zephir_get_strval(&username, username_param);
	zephir_get_strval(&databaseName, databaseName_param);


	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 1, 0 TSRMLS_CC);
	add_assoc_stringl_ex(&data, SL("grant"), SL("rw"));
	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 3, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &username);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "database");
	zephir_array_fast_append(&_1, &_2);
	zephir_array_fast_append(&_1, &databaseName);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/user");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "put", NULL, 0, &url, &_4);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_UserHandler, revokePermissions) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *username_param = NULL, *databaseName_param = NULL, data, url, _2, _3, _4;
	zval username, databaseName;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&username);
	ZVAL_UNDEF(&databaseName);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &username_param, &databaseName_param);

	zephir_get_strval(&username, username_param);
	zephir_get_strval(&databaseName, databaseName_param);


	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 1, 0 TSRMLS_CC);
	add_assoc_stringl_ex(&data, SL("grant"), SL("none"));
	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 3, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &username);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "database");
	zephir_array_fast_append(&_1, &_2);
	zephir_array_fast_append(&_1, &databaseName);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/user");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_3, "put", NULL, 0, &url, &_4);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_UserHandler, getDatabases) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *username_param = NULL, url, response, data, _2, _3, _4;
	zval username;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&username);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &username_param);

	zephir_get_strval(&username, username_param);


	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &username);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "database");
	zephir_array_fast_append(&_1, &_2);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/user");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_3, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_4, &data, SL("result"), PH_NOISY | PH_READONLY, "arangodbclient/userhandler.zep", 107 TSRMLS_CC);
	RETURN_CTOR(&_4);

}

