
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
#include "kernel/operators.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"
#include "kernel/object.h"
#include "kernel/string.h"
#include "kernel/array.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Collection) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Collection, arangodbclient, collection, arangodbclient_collection_method_entry, 0);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_id"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_name"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_type"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_waitForSync"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_journalSize"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_isSystem"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_isVolatile"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_numberOfShards"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_shardKeys"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_status"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_collection_ce, SL("_keyOptions"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_ID"), "id");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_NAME"), "name");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_TYPE"), "type");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_WAIT_SYNC"), "waitForSync");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_JOURNAL_SIZE"), "journalSize");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_STATUS"), "status");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_KEY_OPTIONS"), "keyOptions");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_IS_SYSTEM"), "isSystem");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_IS_VOLATILE"), "isVolatile");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_NUMBER_OF_SHARDS"), "numberOfShards");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("ENTRY_SHARD_KEYS"), "shardKeys");

	zephir_declare_class_constant_string(arangodbclient_collection_ce, SL("OPTION_PROPERTIES"), "properties");

	zephir_declare_class_constant_long(arangodbclient_collection_ce, SL("TYPE_DOCUMENT"), 2);

	zephir_declare_class_constant_long(arangodbclient_collection_ce, SL("TYPE_EDGE"), 3);

	zephir_declare_class_constant_long(arangodbclient_collection_ce, SL("STATUS_NEW_BORN"), 1);

	zephir_declare_class_constant_long(arangodbclient_collection_ce, SL("STATUS_UNLOADED"), 2);

	zephir_declare_class_constant_long(arangodbclient_collection_ce, SL("STATUS_LOADED"), 3);

	zephir_declare_class_constant_long(arangodbclient_collection_ce, SL("STATUS_BEING_UNLOADED"), 4);

	zephir_declare_class_constant_long(arangodbclient_collection_ce, SL("STATUS_DELETED"), 5);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Collection, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *name_param = NULL;
	zval name;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &name_param);

	if (!name_param) {
		ZEPHIR_INIT_VAR(&name);
		ZVAL_STRING(&name, "");
	} else {
		zephir_get_strval(&name, name_param);
	}


	if (!ZEPHIR_IS_STRING_IDENTICAL(&name, "")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setname", NULL, 0, &name);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Collection, createFromArray) {

	zend_string *_2;
	zend_ulong _1;
	zephir_fcall_cache_entry *_3 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *values_param = NULL, collection, key, value, *_0;
	zval values;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&values);
	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &values_param);

	zephir_get_arrval(&values, values_param);


	ZEPHIR_INIT_VAR(&collection);
	object_init_ex(&collection, arangodbclient_collection_ce);
	ZEPHIR_CALL_METHOD(NULL, &collection, "__construct", NULL, 20);
	zephir_check_call_status();
	zephir_is_iterable(&values, 0, "arangodbclient/collection.zep", 50);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&values), _1, _2, _0)
	{
		ZEPHIR_INIT_NVAR(&key);
		if (_2 != NULL) { 
			ZVAL_STR_COPY(&key, _2);
		} else {
			ZVAL_LONG(&key, _1);
		}
		ZEPHIR_INIT_NVAR(&value);
		ZVAL_COPY(&value, _0);
		ZEPHIR_CALL_METHOD(NULL, &collection, "set", &_3, 21, &key, &value);
		zephir_check_call_status();
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&value);
	ZEPHIR_INIT_NVAR(&key);
	RETURN_CCTOR(&collection);

}

PHP_METHOD(ArangoDBClient_Collection, getDefaultType) {

	zval *this_ptr = getThis();


	RETURN_LONG(2);

}

PHP_METHOD(ArangoDBClient_Collection, __clone) {

	zval __$null;
	zval *this_ptr = getThis();

	ZVAL_NULL(&__$null);


	zephir_update_property_zval(this_ptr, SL("_id"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_name"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_waitForSync"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_journalSize"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_isSystem"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_isVolatile"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_numberOfShards"), &__$null);
	zephir_update_property_zval(this_ptr, SL("_shardKeys"), &__$null);

}

PHP_METHOD(ArangoDBClient_Collection, __toString) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();


	ZEPHIR_MM_GROW();

	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "tojson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Collection, toJson) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getall", NULL, 0);
	zephir_check_call_status();
	zephir_json_encode(return_value, &_0, 0 );
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Collection, toSerialized) {

	zval _0;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getall", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_FUNCTION("serialize", NULL, 4, &_0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_Collection, getAll) {

	zval result, _0, _1, _3, _2$$3, _4$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_4$$4);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&result);
	zephir_create_array(&result, 9, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_id"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("id"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_name"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("name"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_waitForSync"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("waitForSync"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_journalSize"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("journalSize"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_isSystem"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("isSystem"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_isVolatile"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("isVolatile"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_type"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("type"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_status"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("status"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_read_property(&_0, this_ptr, SL("_keyOptions"), PH_NOISY_CC);
	zephir_array_update_string(&result, SL("keyOptions"), &_0, PH_COPY | PH_SEPARATE);
	zephir_read_property(&_1, this_ptr, SL("_numberOfShards"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_1) != IS_NULL) {
		zephir_read_property(&_2$$3, this_ptr, SL("_numberOfShards"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&result, SL("numberOfShards"), &_2$$3, PH_COPY | PH_SEPARATE);
	}
	zephir_read_property(&_3, this_ptr, SL("_shardKeys"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_3) == IS_ARRAY) {
		zephir_read_property(&_4$$4, this_ptr, SL("_shardKeys"), PH_NOISY_CC | PH_READONLY);
		zephir_array_update_string(&result, SL("shardKeys"), &_4$$4, PH_COPY | PH_SEPARATE);
	}
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_Collection, set) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *key_param = NULL, *value, value_sub;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &key_param, &value);

	zephir_get_strval(&key, key_param);


	if (!(Z_TYPE_P(&key) == IS_STRING)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid collection attribute type", "arangodbclient/collection.zep", 102);
		return;
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "id")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setid", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "name")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setname", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "waitForSync")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setwaitforsync", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "journalSize")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setjournalsize", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "isSystem")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setissystem", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "isVolatile")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setisvolatile", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "type")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "settype", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "status")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setstatus", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "keyOptions")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setkeyoptions", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "numberOfShards")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setnumberofshards", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "shardKeys")) {
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "setshardkeys", NULL, 0, value);
		zephir_check_call_status();
		RETURN_MM_NULL();
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Collection, setId) {

	zval _3;
	zend_bool _1;
	zval *id, id_sub, _0, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&id_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &id);



	zephir_read_property(&_0, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
	_1 = Z_TYPE_P(&_0) != IS_NULL;
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_id"), PH_NOISY_CC | PH_READONLY);
		_1 = !ZEPHIR_IS_IDENTICAL(&_2, id);
	}
	if (_1) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Should not update the id of an existing collection", "arangodbclient/collection.zep", 153);
		return;
	}
	zephir_get_strval(&_3, id);
	zephir_update_property_zval(this_ptr, SL("_id"), &_3);
	RETURN_MM_MEMBER(getThis(), "_id");

}

PHP_METHOD(ArangoDBClient_Collection, getId) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_id");

}

PHP_METHOD(ArangoDBClient_Collection, setName) {

	zend_bool _1;
	zval *name_param = NULL, _0, _2;
	zval name, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &name_param);

	zephir_get_strval(&name, name_param);


	zephir_read_property(&_0, this_ptr, SL("_name"), PH_NOISY_CC | PH_READONLY);
	_1 = Z_TYPE_P(&_0) != IS_NULL;
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_name"), PH_NOISY_CC | PH_READONLY);
		_1 = !ZEPHIR_IS_IDENTICAL(&_2, &name);
	}
	if (_1) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Should not update the name of an existing collection", "arangodbclient/collection.zep", 168);
		return;
	}
	zephir_get_strval(&_3, &name);
	zephir_update_property_zval(this_ptr, SL("_name"), &_3);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Collection, getName) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_name");

}

PHP_METHOD(ArangoDBClient_Collection, setType) {

	zend_bool _1, _3;
	zval *type_param = NULL, _0, _2, _4;
	zend_long type;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);

	zephir_fetch_params(0, 1, 0, &type_param);

	type = zephir_get_intval(type_param);


	zephir_read_property(&_0, this_ptr, SL("_type"), PH_NOISY_CC | PH_READONLY);
	_1 = Z_TYPE_P(&_0) != IS_NULL;
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_type"), PH_NOISY_CC | PH_READONLY);
		_1 = !ZEPHIR_IS_LONG_IDENTICAL(&_2, type);
	}
	if (_1) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STRW(arangodbclient_clientexception_ce, "Should not update the type of an existing collection", "arangodbclient/collection.zep", 182);
		return;
	}
	_3 = type != 2;
	if (_3) {
		_3 = type != 3;
	}
	if (_3) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STRW(arangodbclient_clientexception_ce, "Invalid type used for collection", "arangodbclient/collection.zep", 185);
		return;
	}
	ZEPHIR_INIT_ZVAL_NREF(_4);
	ZVAL_LONG(&_4, type);
	zephir_update_property_zval(this_ptr, SL("_type"), &_4);

}

PHP_METHOD(ArangoDBClient_Collection, getType) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_type");

}

PHP_METHOD(ArangoDBClient_Collection, setStatus) {

	zend_bool _1;
	zval *status_param = NULL, __$true, tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, _0, _2, _3, _4, _5;
	zend_long status, ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &status_param);

	status = zephir_get_intval(status_param);


	zephir_read_property(&_0, this_ptr, SL("_status"), PH_NOISY_CC | PH_READONLY);
	_1 = Z_TYPE_P(&_0) != IS_NULL;
	if (_1) {
		zephir_read_property(&_2, this_ptr, SL("_status"), PH_NOISY_CC | PH_READONLY);
		_1 = !ZEPHIR_IS_LONG_IDENTICAL(&_2, status);
	}
	if (_1) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Should not update the status of an existing collection", "arangodbclient/collection.zep", 201);
		return;
	}
	ZEPHIR_INIT_VAR(&tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c);
	zephir_create_array(&tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, 5, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_LONG(&_3, 1);
	zephir_array_fast_append(&tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_LONG(&_3, 2);
	zephir_array_fast_append(&tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_LONG(&_3, 3);
	zephir_array_fast_append(&tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_LONG(&_3, 4);
	zephir_array_fast_append(&tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_LONG(&_3, 5);
	zephir_array_fast_append(&tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, &_3);
	ZVAL_LONG(&_4, status);
	ZEPHIR_CALL_FUNCTION(&_5, "in_array", NULL, 5, &_4, &tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, &__$true);
	zephir_check_call_status();
	if (!(zephir_is_true(&_5))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid status used for collection", "arangodbclient/collection.zep", 205);
		return;
	}
	ZEPHIR_INIT_ZVAL_NREF(_4);
	ZVAL_LONG(&_4, status);
	zephir_update_property_zval(this_ptr, SL("_status"), &_4);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Collection, getStatus) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_status");

}

PHP_METHOD(ArangoDBClient_Collection, setKeyOptions) {

	zval *keyOptions_param = NULL;
	zval keyOptions;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&keyOptions);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &keyOptions_param);

	zephir_get_arrval(&keyOptions, keyOptions_param);


	zephir_update_property_zval(this_ptr, SL("_keyOptions"), &keyOptions);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Collection, getKeyOptions) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_keyOptions");

}

PHP_METHOD(ArangoDBClient_Collection, setWaitForSync) {

	zval *value_param = NULL, __$true, __$false;
	zend_bool value;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_boolval(value_param);


	if (value) {
		zephir_update_property_zval(this_ptr, SL("_waitForSync"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_waitForSync"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Collection, getWaitForSync) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_waitForSync");

}

PHP_METHOD(ArangoDBClient_Collection, setJournalSize) {

	zval *value_param = NULL, _0;
	zend_long value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_intval(value_param);


	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_LONG(&_0, value);
	zephir_update_property_zval(this_ptr, SL("_journalSize"), &_0);

}

PHP_METHOD(ArangoDBClient_Collection, getJournalSize) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_journalSize");

}

PHP_METHOD(ArangoDBClient_Collection, setIsSystem) {

	zval *value_param = NULL, __$true, __$false;
	zend_bool value;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_boolval(value_param);


	if (value) {
		zephir_update_property_zval(this_ptr, SL("_isSystem"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_isSystem"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Collection, getIsSystem) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_isSystem");

}

PHP_METHOD(ArangoDBClient_Collection, setIsVolatile) {

	zval *value_param = NULL, __$true, __$false;
	zend_bool value;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_BOOL(&__$false, 0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_boolval(value_param);


	if (value) {
		zephir_update_property_zval(this_ptr, SL("_isVolatile"), &__$true);
	} else {
		zephir_update_property_zval(this_ptr, SL("_isVolatile"), &__$false);
	}

}

PHP_METHOD(ArangoDBClient_Collection, getIsVolatile) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_isVolatile");

}

PHP_METHOD(ArangoDBClient_Collection, setNumberOfShards) {

	zval *value_param = NULL, _0;
	zend_long value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	zephir_fetch_params(0, 1, 0, &value_param);

	value = zephir_get_intval(value_param);


	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_LONG(&_0, value);
	zephir_update_property_zval(this_ptr, SL("_numberOfShards"), &_0);

}

PHP_METHOD(ArangoDBClient_Collection, getNumberOfShards) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_numberOfShards");

}

PHP_METHOD(ArangoDBClient_Collection, setShardKeys) {

	zval *value_param = NULL;
	zval value;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value_param);

	zephir_get_arrval(&value, value_param);


	zephir_update_property_zval(this_ptr, SL("_shardKeys"), &value);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Collection, getShardKeys) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_shardKeys");

}

