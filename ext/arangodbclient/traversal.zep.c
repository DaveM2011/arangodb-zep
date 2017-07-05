
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
#include "kernel/array.h"
#include "kernel/operators.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Traversal) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Traversal, arangodbclient, traversal, arangodbclient_traversal_method_entry, 0);

	zend_declare_property_null(arangodbclient_traversal_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_traversal_ce, SL("attributes"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_traversal_ce, SL("_action"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_traversal_ce->create_object = zephir_init_properties_ArangoDBClient_Traversal;
	zephir_declare_class_constant_string(arangodbclient_traversal_ce, SL("OPTION_FIELDS"), "fields");

	zephir_declare_class_constant_string(arangodbclient_traversal_ce, SL("ENTRY_STARTVERTEX"), "startVertex");

	zephir_declare_class_constant_string(arangodbclient_traversal_ce, SL("ENTRY_EDGECOLLECTION"), "edgeCollection");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Traversal, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval startVertex, edgeCollection;
	zval *connection, connection_sub, *startVertex_param = NULL, *edgeCollection_param = NULL, *options_param = NULL, _0$$3, _1$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&startVertex);
	ZVAL_UNDEF(&edgeCollection);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &connection, &startVertex_param, &edgeCollection_param, &options_param);

	zephir_get_strval(&startVertex, startVertex_param);
	zephir_get_strval(&edgeCollection, edgeCollection_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	zephir_update_property_zval(this_ptr, SL("_connection"), connection);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setstartvertex", NULL, 0, &startVertex);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setedgecollection", NULL, 0, &edgeCollection);
	zephir_check_call_status();
	if (Z_TYPE_P(&options) == IS_ARRAY) {
		ZEPHIR_INIT_VAR(&_0$$3);
		zephir_read_property(&_1$$3, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
		zephir_fast_array_merge(&_0$$3, &_1$$3, &options TSRMLS_CC);
		zephir_update_property_zval(this_ptr, SL("attributes"), &_0$$3);
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Traversal, getResult) {

	zval bodyParams, response, _0, _1, _2, _3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&bodyParams);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();

	ZEPHIR_OBS_VAR(&bodyParams);
	zephir_read_property(&bodyParams, this_ptr, SL("attributes"), PH_NOISY_CC);
	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, &_1, "json_encode_wrapper", NULL, 0, &bodyParams);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/traversal");
	ZEPHIR_CALL_METHOD(&response, &_0, "post", NULL, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Traversal, getConnection) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_connection");

}

PHP_METHOD(ArangoDBClient_Traversal, setStartVertex) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, _0;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "startVertex");
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_0, &value);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Traversal, getStartVertex) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "startVertex");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Traversal, setEdgeCollection) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, _0;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_strval(&value, value_param);


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "edgeCollection");
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_0, &value);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Traversal, getEdgeCollection) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "edgeCollection");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Traversal, set) {

	zval *key, key_sub, *value, value_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key_sub);
	ZVAL_UNDEF(&value_sub);

	zephir_fetch_params(0, 2, 0, &key, &value);



	if (!(Z_TYPE_P(key) == IS_STRING)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STRW(arangodbclient_clientexception_ce, "Invalid attribute key", "arangodbclient/traversal.zep", 58);
		return;
	}
	zephir_update_property_array(this_ptr, SL("attributes"), key, value TSRMLS_CC);

}

PHP_METHOD(ArangoDBClient_Traversal, __set) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key_param = NULL, *value, value_sub;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &key_param, &value);

	zephir_get_strval(&key, key_param);


	if (ZEPHIR_IS_STRING(&key, "startVertex")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setstartvertex", NULL, 0, value);
		zephir_check_call_status();
	} else if (ZEPHIR_IS_STRING(&key, "edgeCollection")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setedgecollection", NULL, 0, value);
		zephir_check_call_status();
	} else {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &key, value);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Traversal, get) {

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
		zephir_array_fetch(&_2$$3, &_1$$3, &key, PH_NOISY | PH_READONLY, "arangodbclient/traversal.zep", 77 TSRMLS_CC);
		RETURN_CTOR(&_2$$3);
	}
	RETURN_MM_NULL();

}

PHP_METHOD(ArangoDBClient_Traversal, __get) {

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

PHP_METHOD(ArangoDBClient_Traversal, __isset) {

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

PHP_METHOD(ArangoDBClient_Traversal, __toString) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_action");

}

zend_object *zephir_init_properties_ArangoDBClient_Traversal(zend_class_entry *class_type TSRMLS_DC) {

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

