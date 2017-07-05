
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


ZEPHIR_INIT_CLASS(ArangoDBClient_Transaction) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Transaction, arangodbclient, transaction, arangodbclient_transaction_method_entry, 0);

	zend_declare_property_null(arangodbclient_transaction_ce, SL("_connection"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_transaction_ce, SL("attributes"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_transaction_ce, SL("_action"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_transaction_ce->create_object = zephir_init_properties_ArangoDBClient_Transaction;
	zephir_declare_class_constant_string(arangodbclient_transaction_ce, SL("ENTRY_COLLECTIONS"), "collections");

	zephir_declare_class_constant_string(arangodbclient_transaction_ce, SL("ENTRY_ACTION"), "action");

	zephir_declare_class_constant_string(arangodbclient_transaction_ce, SL("ENTRY_WAIT_FOR_SYNC"), "waitForSync");

	zephir_declare_class_constant_string(arangodbclient_transaction_ce, SL("ENTRY_LOCK_TIMEOUT"), "lockTimeout");

	zephir_declare_class_constant_string(arangodbclient_transaction_ce, SL("ENTRY_PARAMS"), "params");

	zephir_declare_class_constant_string(arangodbclient_transaction_ce, SL("ENTRY_READ"), "read");

	zephir_declare_class_constant_string(arangodbclient_transaction_ce, SL("ENTRY_WRITE"), "write");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Transaction, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval transactionArray;
	zval *connection, connection_sub, *transactionArray_param = NULL;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&connection_sub);
	ZVAL_UNDEF(&transactionArray);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &connection, &transactionArray_param);

	if (!transactionArray_param) {
		ZEPHIR_INIT_VAR(&transactionArray);
		array_init(&transactionArray);
	} else {
		zephir_get_arrval(&transactionArray, transactionArray_param);
	}


	zephir_update_property_zval(this_ptr, SL("_connection"), connection);
	if (Z_TYPE_P(&transactionArray) == IS_ARRAY) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "buildtransactionattributesfromarray", NULL, 0, &transactionArray);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, execute) {

	zval response, responseArray, _0, _1, _2, _3, _4, _5$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&responseArray);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5$$3);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_connection"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	zephir_read_property(&_3, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_2, &_1, "json_encode_wrapper", NULL, 0, &_3);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "/_api/transaction");
	ZEPHIR_CALL_METHOD(&response, &_0, "post", NULL, 0, &_4, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&responseArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	if (zephir_array_isset_string(&responseArray, SL("result"))) {
		zephir_array_fetch_string(&_5$$3, &responseArray, SL("result"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 31 TSRMLS_CC);
		RETURN_CTOR(&_5$$3);
	}
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_Transaction, getConnection) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_connection");

}

PHP_METHOD(ArangoDBClient_Transaction, setCollections) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, _0, _2, _1$$3, _3$$4;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_3$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_arrval(&value, value_param);


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "read");
	if (zephir_array_key_exists(&value, &_0 TSRMLS_CC)) {
		zephir_array_fetch_string(&_1$$3, &value, SL("read"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 44 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setreadcollections", NULL, 0, &_1$$3);
		zephir_check_call_status();
	}
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "write");
	if (zephir_array_key_exists(&value, &_2 TSRMLS_CC)) {
		zephir_array_fetch_string(&_3$$4, &value, SL("write"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 47 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setwritecollections", NULL, 0, &_3$$4);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, getCollections) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "collections");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Transaction, setAction) {

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
	ZVAL_STRING(&_1, "action");
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_1, &_0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, getAction) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "action");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Transaction, setWaitForSync) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, _0, _1;
	zend_bool value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	value = zephir_get_boolval(value_param);


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "waitForSync");
	if (value) {
		ZVAL_BOOL(&_1, 1);
	} else {
		ZVAL_BOOL(&_1, 0);
	}
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_0, &_1);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, getWaitForSync) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "waitForSync");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Transaction, setLockTimeout) {

	zval *value_param = NULL, _0, _1;
	zend_long value, ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	value = zephir_get_intval(value_param);


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "lockTimeout");
	ZVAL_LONG(&_1, value);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_0, &_1);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, getLockTimeout) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "lockTimeout");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Transaction, setParams) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *value_param = NULL, _0;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_arrval(&value, value_param);


	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "params");
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_0, &value);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, getParams) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "params");
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "get", NULL, 0, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Transaction, setWriteCollections) {

	zval *value_param = NULL;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_arrval(&value, value_param);


	zephir_update_property_array_multi(this_ptr, SL("attributes"), &value TSRMLS_CC, SL("ss"), 4, SL("collections"), SL("write"));
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, getWriteCollections) {

	zval _0, _1, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);


	zephir_read_property(&_0, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_1, &_0, SL("collections"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 103 TSRMLS_CC);
	zephir_array_fetch_string(&_2, &_1, SL("write"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 103 TSRMLS_CC);
	RETURN_CTORW(&_2);

}

PHP_METHOD(ArangoDBClient_Transaction, setReadCollections) {

	zval *value_param = NULL;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_arrval(&value, value_param);


	zephir_update_property_array_multi(this_ptr, SL("attributes"), &value TSRMLS_CC, SL("ss"), 4, SL("collections"), SL("read"));
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, getReadCollections) {

	zval _0, _1, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);


	zephir_read_property(&_0, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_1, &_0, SL("collections"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 113 TSRMLS_CC);
	zephir_array_fetch_string(&_2, &_1, SL("read"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 113 TSRMLS_CC);
	RETURN_CTORW(&_2);

}

PHP_METHOD(ArangoDBClient_Transaction, set) {

	zval *key, key_sub, *value, value_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key_sub);
	ZVAL_UNDEF(&value_sub);

	zephir_fetch_params(0, 2, 0, &key, &value);



	if (!(Z_TYPE_P(key) == IS_STRING)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STRW(arangodbclient_clientexception_ce, "Invalid document attribute key", "arangodbclient/transaction.zep", 119);
		return;
	}
	zephir_update_property_array(this_ptr, SL("attributes"), key, value TSRMLS_CC);

}

PHP_METHOD(ArangoDBClient_Transaction, __set) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key_param = NULL, *value, value_sub;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &key_param, &value);

	zephir_get_strval(&key, key_param);


	if (ZEPHIR_IS_STRING(&key, "collections")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setcollections", NULL, 0, value);
		zephir_check_call_status();
	} else if (ZEPHIR_IS_STRING(&key, "params")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setparams", NULL, 0, value);
		zephir_check_call_status();
	} else if (ZEPHIR_IS_STRING(&key, "lockTimeout")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setlocktimeout", NULL, 0, value);
		zephir_check_call_status();
	} else if (ZEPHIR_IS_STRING(&key, "waitForSync")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setwaitforsync", NULL, 0, value);
		zephir_check_call_status();
	} else if (ZEPHIR_IS_STRING(&key, "action")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setaction", NULL, 0, value);
		zephir_check_call_status();
	} else if (ZEPHIR_IS_STRING(&key, "readCollections")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setreadcollections", NULL, 0, value);
		zephir_check_call_status();
	} else if (ZEPHIR_IS_STRING(&key, "writeCollections")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setwritecollections", NULL, 0, value);
		zephir_check_call_status();
	} else {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &key, value);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Transaction, get) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key_param = NULL, _0, _1$$5, _2$$5;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$5);
	ZVAL_UNDEF(&_2$$5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &key_param);

	zephir_get_strval(&key, key_param);


	do {
		if (ZEPHIR_IS_STRING(&key, "writeCollections")) {
			ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getwritecollections", NULL, 0);
			zephir_check_call_status();
			RETURN_MM();
		}
		if (ZEPHIR_IS_STRING(&key, "readCollections")) {
			ZEPHIR_RETURN_CALL_METHOD(this_ptr, "getreadcollections", NULL, 0);
			zephir_check_call_status();
			RETURN_MM();
		}
	} while(0);

	zephir_read_property(&_0, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
	if (zephir_array_isset(&_0, &key)) {
		zephir_read_property(&_1$$5, this_ptr, SL("attributes"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch(&_2$$5, &_1$$5, &key, PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 154 TSRMLS_CC);
		RETURN_CTOR(&_2$$5);
	}
	RETURN_MM_NULL();

}

PHP_METHOD(ArangoDBClient_Transaction, __get) {

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

PHP_METHOD(ArangoDBClient_Transaction, __isset) {

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

PHP_METHOD(ArangoDBClient_Transaction, __toString) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_action");

}

PHP_METHOD(ArangoDBClient_Transaction, buildTransactionAttributesFromArray) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options, options_sub, _0$$3, _1$$4, _2$$5, _3$$6, _4$$7;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_2$$5);
	ZVAL_UNDEF(&_3$$6);
	ZVAL_UNDEF(&_4$$7);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &options);



	if (zephir_array_isset_string(options, SL("collections"))) {
		zephir_array_fetch_string(&_0$$3, options, SL("collections"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 180 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setcollections", NULL, 0, &_0$$3);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(options, SL("action"))) {
		zephir_array_fetch_string(&_1$$4, options, SL("action"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 183 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setaction", NULL, 0, &_1$$4);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(options, SL("waitForSync"))) {
		zephir_array_fetch_string(&_2$$5, options, SL("waitForSync"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 186 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setwaitforsync", NULL, 0, &_2$$5);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(options, SL("lockTimeout"))) {
		zephir_array_fetch_string(&_3$$6, options, SL("lockTimeout"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 189 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setlocktimeout", NULL, 0, &_3$$6);
		zephir_check_call_status();
	}
	if (zephir_array_isset_string(options, SL("params"))) {
		zephir_array_fetch_string(&_4$$7, options, SL("params"), PH_NOISY | PH_READONLY, "arangodbclient/transaction.zep", 192 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setparams", NULL, 0, &_4$$7);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

zend_object *zephir_init_properties_ArangoDBClient_Transaction(zend_class_entry *class_type TSRMLS_DC) {

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

