
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
#include "kernel/array.h"
#include "kernel/fcall.h"
#include "kernel/operators.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Database) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Database, arangodbclient, database, arangodbclient_database_method_entry, 0);

	zephir_declare_class_constant_string(arangodbclient_database_ce, SL("ENTRY_DATABASE_NAME"), "name");

	zephir_declare_class_constant_string(arangodbclient_database_ce, SL("ENTRY_DATABASE_USERS"), "users");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Database, create) {

	zval _0, _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval name;
	zval *connection, connection_sub, *name_param = NULL, payload, response, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&payload);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &connection, &name_param);

	zephir_get_strval(&name, name_param);


	ZEPHIR_INIT_VAR(&payload);
	zephir_create_array(&payload, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&payload, SL("name"), &name, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_0);
	zephir_create_array(&_0, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 2, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "AuthUser");
	ZEPHIR_CALL_METHOD(&_2, connection, "getoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&_1, SL("username"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "AuthPasswd");
	ZEPHIR_CALL_METHOD(&_2, connection, "getoption", NULL, 0, &_3);
	zephir_check_call_status();
	zephir_array_update_string(&_1, SL("passwd"), &_2, PH_COPY | PH_SEPARATE);
	zephir_array_fast_append(&_0, &_1);
	zephir_array_update_string(&payload, SL("users"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_2, connection, "json_encode_wrapper", NULL, 0, &payload);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/database");
	ZEPHIR_CALL_METHOD(&response, connection, "post", NULL, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Database, delete) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval name;
	zval *connection, connection_sub, *name_param = NULL, url, response, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &connection, &name_param);

	zephir_get_strval(&name, name_param);


	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &name);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/database");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, connection, "delete", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Database, listDatabases) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *connection, connection_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &connection);



	ZEPHIR_RETURN_CALL_SELF("databases", NULL, 0, connection);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Database, databases) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *connection, connection_sub, response, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &connection);



	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "/_api/database");
	ZEPHIR_CALL_METHOD(&response, connection, "get", NULL, 0, &_0);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Database, listUserDatabases) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *connection, connection_sub, url, response, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &connection);



	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "user");
	zephir_array_fast_append(&_1, &_2);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/database");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, connection, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Database, getInfo) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *connection, connection_sub, url, response, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &connection);



	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "current");
	zephir_array_fast_append(&_1, &_2);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/database");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, connection, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

