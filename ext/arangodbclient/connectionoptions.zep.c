
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
#include "kernel/object.h"
#include "kernel/operators.h"
#include "kernel/exception.h"
#include "kernel/concat.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_ConnectionOptions) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, ConnectionOptions, arangodbclient, connectionoptions, arangodbclient_connectionoptions_method_entry, 0);

	zend_declare_property_null(arangodbclient_connectionoptions_ce, SL("_values"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_connectionoptions_ce, SL("_endpoint"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_connectionoptions_ce->create_object = zephir_init_properties_ArangoDBClient_ConnectionOptions;
	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_ENDPOINT"), "endpoint");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_HOST"), "host");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_PORT"), "port");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_TIMEOUT"), "timeout");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_TRACE"), "trace");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_VERIFY_CERT"), "verifyCert");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_ALLOW_SELF_SIGNED"), "allowSelfSigned");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_CIPHERS"), "ciphers");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_ENHANCED_TRACE"), "enhancedTrace");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_CREATE"), "createCollection");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_REVISION"), "rev");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_UPDATE_POLICY"), "policy");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_UPDATE_KEEPNULL"), "keepNull");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_REPLACE_POLICY"), "policy");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_DELETE_POLICY"), "policy");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_WAIT_SYNC"), "waitForSync");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_LIMIT"), "limit");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_SKIP"), "skip");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_BATCHSIZE"), "batchSize");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_JOURNAL_SIZE"), "journalSize");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_IS_SYSTEM"), "isSystem");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_IS_VOLATILE"), "isVolatile");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_AUTH_USER"), "AuthUser");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_AUTH_PASSWD"), "AuthPasswd");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_AUTH_TYPE"), "AuthType");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_CONNECTION"), "Connection");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_RECONNECT"), "Reconnect");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_BATCH"), "Batch");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_BATCHPART"), "BatchPart");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_DATABASE"), "database");

	zephir_declare_class_constant_string(arangodbclient_connectionoptions_ce, SL("OPTION_CHECK_UTF8_CONFORM"), "CheckUtf8Conform");

	zend_class_implements(arangodbclient_connectionoptions_ce TSRMLS_CC, 1, zend_ce_arrayaccess);
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, __construct) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *options_param = NULL, _0, _1;
	zval options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &options_param);

	zephir_get_arrval(&options, options_param);


	ZEPHIR_INIT_VAR(&_0);
	ZEPHIR_CALL_SELF(&_1, "getdefaults", NULL, 0);
	zephir_check_call_status();
	zephir_fast_array_merge(&_0, &_1, &options TSRMLS_CC);
	zephir_update_property_zval(this_ptr, SL("_values"), &_0);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "validate", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, getAll) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_values");

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, offsetSet) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *offset, offset_sub, *value, value_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&offset_sub);
	ZVAL_UNDEF(&value_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &offset, &value);



	zephir_update_property_array(this_ptr, SL("_values"), offset, value TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "validate", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, offsetExists) {

	zval *offset, offset_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&offset_sub);
	ZVAL_UNDEF(&_0);

	zephir_fetch_params(0, 1, 0, &offset);



	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	RETURN_BOOL(zephir_array_isset(&_0, offset));

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, offsetUnset) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *offset, offset_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&offset_sub);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &offset);



	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_unset(&_0, offset, PH_SEPARATE);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "validate", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, offsetGet) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *offset, offset_sub, _0, _3, _4, _1$$3, _2$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&offset_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &offset);



	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	if (!(zephir_array_key_exists(&_0, offset TSRMLS_CC))) {
		ZEPHIR_INIT_VAR(&_1$$3);
		object_init_ex(&_1$$3, arangodbclient_clientexception_ce);
		ZEPHIR_INIT_VAR(&_2$$3);
		ZEPHIR_CONCAT_SV(&_2$$3, "Invalid option ", offset);
		ZEPHIR_CALL_METHOD(NULL, &_1$$3, "__construct", NULL, 37, &_2$$3);
		zephir_check_call_status();
		zephir_throw_exception_debug(&_1$$3, "arangodbclient/connectionoptions.zep", 70 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	zephir_read_property(&_3, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch(&_4, &_3, offset, PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 72 TSRMLS_CC);
	RETURN_CTOR(&_4);

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, getEndpoint) {

	zval _0, _1$$3, _2$$3, _3$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_3$$3);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_endpoint"), PH_NOISY_CC | PH_READONLY);
	if (Z_TYPE_P(&_0) == IS_NULL) {
		ZEPHIR_INIT_VAR(&_1$$3);
		object_init_ex(&_1$$3, arangodbclient_endpoint_ce);
		zephir_read_property(&_2$$3, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_3$$3, &_2$$3, SL("endpoint"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 78 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, &_1$$3, "__construct", NULL, 51, &_3$$3);
		zephir_check_call_status();
		zephir_update_property_zval(this_ptr, SL("_endpoint"), &_1$$3);
	}
	RETURN_MM_MEMBER(getThis(), "_endpoint");

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, getDefaults) {

	zval __$null, __$false, __$true;
	zval *this_ptr = getThis();

	ZVAL_NULL(&__$null);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_BOOL(&__$true, 1);


	zephir_create_array(return_value, 28, 0 TSRMLS_CC);
	zephir_array_update_string(return_value, SL("endpoint"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("host"), &__$null, PH_COPY | PH_SEPARATE);
	add_assoc_long_ex(return_value, SL("port"), 8529);
	add_assoc_long_ex(return_value, SL("timeout"), 30);
	zephir_array_update_string(return_value, SL("createCollection"), &__$false, PH_COPY | PH_SEPARATE);
	add_assoc_stringl_ex(return_value, SL("policy"), SL("error"));
	add_assoc_stringl_ex(return_value, SL("policy"), SL("error"));
	add_assoc_stringl_ex(return_value, SL("policy"), SL("error"));
	zephir_array_update_string(return_value, SL("rev"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("waitForSync"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("batchSize"), &__$null, PH_COPY | PH_SEPARATE);
	add_assoc_long_ex(return_value, SL("journalSize"), 33554432);
	zephir_array_update_string(return_value, SL("isSystem"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("isVolatile"), &__$false, PH_COPY | PH_SEPARATE);
	add_assoc_stringl_ex(return_value, SL("Connection"), SL("Keep-Alive"));
	zephir_array_update_string(return_value, SL("trace"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("enhancedTrace"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("verifyCert"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("allowSelfSigned"), &__$true, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("ciphers"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("AuthUser"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("AuthPasswd"), &__$null, PH_COPY | PH_SEPARATE);
	add_assoc_stringl_ex(return_value, SL("AuthType"), SL("Basic"));
	zephir_array_update_string(return_value, SL("Reconnect"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("Batch"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(return_value, SL("BatchPart"), &__$false, PH_COPY | PH_SEPARATE);
	add_assoc_stringl_ex(return_value, SL("database"), SL("_system"));
	zephir_array_update_string(return_value, SL("CheckUtf8Conform"), &__$false, PH_COPY | PH_SEPARATE);
	return;

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, getSupportedAuthTypes) {

	zval _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	zephir_create_array(return_value, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "Basic");
	zephir_array_fast_append(return_value, &_0);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, getSupportedConnectionTypes) {

	zval _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	zephir_create_array(return_value, 2, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "Close");
	zephir_array_fast_append(return_value, &_0);
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_STRING(&_0, "Keep-Alive");
	zephir_array_fast_append(return_value, &_0);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_ConnectionOptions, validate) {

	zend_bool _2, _7, _12, _36, _44, _17$$6;
	zval __$true, type, _0, _1, _3, _4, _5, _6, _8, _9, _10, _11, _13, _14, _28, _29, _34, _35, _37, _38, _39, _40, _42, _43, _45, _46, _47, _48, _55, _56, _57, _58, _59, _60, _15$$6, _16$$6, _18$$6, _19$$6, _20$$7, _21$$7, _22$$7, _23$$7, _24$$7, _25$$7, _26$$7, _30$$8, _31$$8, _32$$9, _33$$9, _49$$11, _50$$11, _51$$11, _52$$11, _53$$11;
	zephir_fcall_cache_entry *_27 = NULL, *_41 = NULL, *_54 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&type);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14);
	ZVAL_UNDEF(&_28);
	ZVAL_UNDEF(&_29);
	ZVAL_UNDEF(&_34);
	ZVAL_UNDEF(&_35);
	ZVAL_UNDEF(&_37);
	ZVAL_UNDEF(&_38);
	ZVAL_UNDEF(&_39);
	ZVAL_UNDEF(&_40);
	ZVAL_UNDEF(&_42);
	ZVAL_UNDEF(&_43);
	ZVAL_UNDEF(&_45);
	ZVAL_UNDEF(&_46);
	ZVAL_UNDEF(&_47);
	ZVAL_UNDEF(&_48);
	ZVAL_UNDEF(&_55);
	ZVAL_UNDEF(&_56);
	ZVAL_UNDEF(&_57);
	ZVAL_UNDEF(&_58);
	ZVAL_UNDEF(&_59);
	ZVAL_UNDEF(&_60);
	ZVAL_UNDEF(&_15$$6);
	ZVAL_UNDEF(&_16$$6);
	ZVAL_UNDEF(&_18$$6);
	ZVAL_UNDEF(&_19$$6);
	ZVAL_UNDEF(&_20$$7);
	ZVAL_UNDEF(&_21$$7);
	ZVAL_UNDEF(&_22$$7);
	ZVAL_UNDEF(&_23$$7);
	ZVAL_UNDEF(&_24$$7);
	ZVAL_UNDEF(&_25$$7);
	ZVAL_UNDEF(&_26$$7);
	ZVAL_UNDEF(&_30$$8);
	ZVAL_UNDEF(&_31$$8);
	ZVAL_UNDEF(&_32$$9);
	ZVAL_UNDEF(&_33$$9);
	ZVAL_UNDEF(&_49$$11);
	ZVAL_UNDEF(&_50$$11);
	ZVAL_UNDEF(&_51$$11);
	ZVAL_UNDEF(&_52$$11);
	ZVAL_UNDEF(&_53$$11);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_1, &_0, SL("host"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 131 TSRMLS_CC);
	_2 = zephir_is_true(&_1);
	if (_2) {
		zephir_read_property(&_3, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_4, &_3, SL("host"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 131 TSRMLS_CC);
		_2 = !(Z_TYPE_P(&_4) == IS_STRING);
	}
	if (_2) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "host should be a string", "arangodbclient/connectionoptions.zep", 132);
		return;
	}
	zephir_read_property(&_5, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_6, &_5, SL("port"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 134 TSRMLS_CC);
	_7 = zephir_is_true(&_6);
	if (_7) {
		zephir_read_property(&_8, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_9, &_8, SL("port"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 134 TSRMLS_CC);
		_7 = !(Z_TYPE_P(&_9) == IS_LONG);
	}
	if (_7) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "port should be an integer", "arangodbclient/connectionoptions.zep", 135);
		return;
	}
	zephir_read_property(&_10, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_11, &_10, SL("host"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 137 TSRMLS_CC);
	_12 = zephir_is_true(&_11);
	if (_12) {
		zephir_read_property(&_13, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_14, &_13, SL("endpoint"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 137 TSRMLS_CC);
		_12 = zephir_is_true(&_14);
	}
	if (_12) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "must not specify both host and endpoint", "arangodbclient/connectionoptions.zep", 138);
		return;
	} else {
		zephir_read_property(&_15$$6, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_16$$6, &_15$$6, SL("host"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 140 TSRMLS_CC);
		_17$$6 = zephir_is_true(&_16$$6);
		if (_17$$6) {
			zephir_read_property(&_18$$6, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch_string(&_19$$6, &_18$$6, SL("endpoint"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 140 TSRMLS_CC);
			_17$$6 = !zephir_is_true(&_19$$6);
		}
		if (_17$$6) {
			zephir_read_property(&_20$$7, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch_string(&_21$$7, &_20$$7, SL("host"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 141 TSRMLS_CC);
			zephir_read_property(&_22$$7, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
			zephir_array_fetch_string(&_23$$7, &_22$$7, SL("port"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 141 TSRMLS_CC);
			ZEPHIR_INIT_VAR(&_24$$7);
			ZEPHIR_CONCAT_SVSV(&_24$$7, "tcp://", &_21$$7, ":", &_23$$7);
			ZEPHIR_INIT_VAR(&_25$$7);
			ZVAL_STRING(&_25$$7, "endpoint");
			zephir_update_property_array(this_ptr, SL("_values"), &_25$$7, &_24$$7 TSRMLS_CC);
			zephir_read_property(&_26$$7, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
			zephir_array_unset_string(&_26$$7, SL("host"), PH_SEPARATE);
		}
	}
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "getendpoint", NULL, 0);
	zephir_check_call_status();
	zephir_read_property(&_28, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_29, &_28, SL("endpoint"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 146 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&type, arangodbclient_endpoint_ce, "gettype", &_27, 0, &_29);
	zephir_check_call_status();
	if (ZEPHIR_IS_STRING(&type, "unix")) {
		ZEPHIR_INIT_VAR(&_30$$8);
		ZVAL_STRING(&_30$$8, "port");
		ZEPHIR_INIT_VAR(&_31$$8);
		ZVAL_LONG(&_31$$8, 0);
		zephir_update_property_array(this_ptr, SL("_values"), &_30$$8, &_31$$8 TSRMLS_CC);
	} else if (ZEPHIR_IS_STRING(&type, "ssl")) {
		ZEPHIR_INIT_VAR(&_32$$9);
		ZVAL_STRING(&_32$$9, "port");
		ZEPHIR_INIT_VAR(&_33$$9);
		ZVAL_LONG(&_33$$9, 0);
		zephir_update_property_array(this_ptr, SL("_values"), &_32$$9, &_33$$9 TSRMLS_CC);
	}
	zephir_read_property(&_34, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_35, &_34, SL("AuthType"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 152 TSRMLS_CC);
	_36 = zephir_is_true(&_35);
	if (_36) {
		zephir_read_property(&_37, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_38, &_37, SL("AuthType"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 152 TSRMLS_CC);
		ZEPHIR_CALL_SELF(&_39, "getsupportedauthtypes", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CALL_FUNCTION(&_40, "in_array", &_41, 5, &_38, &_39, &__$true);
		zephir_check_call_status();
		_36 = !zephir_is_true(&_40);
	}
	if (_36) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "unsupported authorization method", "arangodbclient/connectionoptions.zep", 153);
		return;
	}
	zephir_read_property(&_42, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_43, &_42, SL("Connection"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 155 TSRMLS_CC);
	_44 = zephir_is_true(&_43);
	if (_44) {
		zephir_read_property(&_45, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_46, &_45, SL("Connection"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 155 TSRMLS_CC);
		ZEPHIR_CALL_SELF(&_47, "getsupportedconnectiontypes", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CALL_FUNCTION(&_48, "in_array", &_41, 5, &_46, &_47, &__$true);
		zephir_check_call_status();
		_44 = !zephir_is_true(&_48);
	}
	if (_44) {
		ZEPHIR_INIT_VAR(&_49$$11);
		object_init_ex(&_49$$11, arangodbclient_clientexception_ce);
		zephir_read_property(&_50$$11, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		zephir_array_fetch_string(&_51$$11, &_50$$11, SL("Connection"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 156 TSRMLS_CC);
		ZEPHIR_INIT_VAR(&_52$$11);
		ZVAL_STRING(&_52$$11, "unsupported connection value '%s'");
		ZEPHIR_CALL_FUNCTION(&_53$$11, "sprintf", NULL, 41, &_52$$11, &_51$$11);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, &_49$$11, "__construct", NULL, 37, &_53$$11);
		zephir_check_call_status();
		zephir_throw_exception_debug(&_49$$11, "arangodbclient/connectionoptions.zep", 156 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	zephir_read_property(&_55, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_56, &_55, SL("policy"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 158 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_updatepolicy_ce, "validate", &_54, 0, &_56);
	zephir_check_call_status();
	zephir_read_property(&_57, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_58, &_57, SL("policy"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 159 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_updatepolicy_ce, "validate", &_54, 0, &_58);
	zephir_check_call_status();
	zephir_read_property(&_59, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
	zephir_array_fetch_string(&_60, &_59, SL("policy"), PH_NOISY | PH_READONLY, "arangodbclient/connectionoptions.zep", 160 TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_updatepolicy_ce, "validate", &_54, 0, &_60);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

zend_object *zephir_init_properties_ArangoDBClient_ConnectionOptions(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _1$$3;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_values"), &_1$$3);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

