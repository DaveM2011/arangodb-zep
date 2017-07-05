
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
#include "kernel/operators.h"
#include "kernel/concat.h"
#include "kernel/memory.h"
#include "kernel/fcall.h"
#include "kernel/string.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Exception) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, Exception, arangodbclient, exception, zend_exception_get_default(TSRMLS_C), arangodbclient_exception_method_entry, 0);

	zend_declare_property_bool(arangodbclient_exception_ce, SL("enableLogging"), 0, ZEND_ACC_PROTECTED|ZEND_ACC_STATIC TSRMLS_CC);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Exception, __construct) {

	zend_string *_10$$3;
	zend_ulong _9$$3;
	zephir_fcall_cache_entry *_3 = NULL;
	zend_long code, ZEPHIR_LAST_CALL_STATUS;
	zval *message_param = NULL, *code_param = NULL, *previous = NULL, previous_sub, __$null, _0, _12, line$$3, _1$$3, _2$$3, _4$$3, _5$$3, _6$$3, _7$$3, *_8$$3, _11$$4;
	zval message;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&message);
	ZVAL_UNDEF(&previous_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_12);
	ZVAL_UNDEF(&line$$3);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&_5$$3);
	ZVAL_UNDEF(&_6$$3);
	ZVAL_UNDEF(&_7$$3);
	ZVAL_UNDEF(&_11$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 3, &message_param, &code_param, &previous);

	if (!message_param) {
		ZEPHIR_INIT_VAR(&message);
		ZVAL_STRING(&message, "");
	} else {
		zephir_get_strval(&message, message_param);
	}
	if (!code_param) {
		code = 0;
	} else {
		code = zephir_get_intval(code_param);
	}
	if (!previous) {
		previous = &previous_sub;
		previous = &__$null;
	}


	zephir_read_static_property_ce(&_0, arangodbclient_exception_ce, SL("enableLogging"), PH_NOISY_CC | PH_READONLY);
	if (zephir_is_true(&_0)) {
		ZEPHIR_INIT_VAR(&_1$$3);
		zephir_get_class(&_1$$3, this_ptr, 0 TSRMLS_CC);
		ZEPHIR_INIT_VAR(&_2$$3);
		ZEPHIR_CONCAT_VSV(&_2$$3, &_1$$3, ": ", &message);
		ZEPHIR_CALL_FUNCTION(NULL, "error_log", &_3, 6, &_2$$3);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&_4$$3);
		ZVAL_STRING(&_4$$3, "Stack trace:");
		ZEPHIR_CALL_FUNCTION(NULL, "error_log", &_3, 6, &_4$$3);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&_4$$3);
		ZEPHIR_INIT_VAR(&_5$$3);
		ZEPHIR_GET_CONSTANT(&_5$$3, "PHP_EOL");
		ZEPHIR_CALL_METHOD(&_6$$3, this_ptr, "gettraceasstring", NULL, 0);
		zephir_check_call_status();
		zephir_fast_explode(&_4$$3, &_5$$3, &_6$$3, LONG_MAX TSRMLS_CC);
		ZEPHIR_INIT_VAR(&_7$$3);
		zephir_is_iterable(&_4$$3, 0, "arangodbclient/exception.zep", 15);
		ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&_4$$3), _9$$3, _10$$3, _8$$3)
		{
			ZEPHIR_INIT_NVAR(&_7$$3);
			if (_10$$3 != NULL) { 
				ZVAL_STR_COPY(&_7$$3, _10$$3);
			} else {
				ZVAL_LONG(&_7$$3, _9$$3);
			}
			ZEPHIR_INIT_NVAR(&line$$3);
			ZVAL_COPY(&line$$3, _8$$3);
			ZEPHIR_INIT_LNVAR(_11$$4);
			ZEPHIR_CONCAT_SV(&_11$$4, "   ", &line$$3);
			ZEPHIR_CALL_FUNCTION(NULL, "error_log", &_3, 6, &_11$$4);
			zephir_check_call_status();
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&line$$3);
		ZEPHIR_INIT_NVAR(&_7$$3);
	}
	ZVAL_LONG(&_12, code);
	ZEPHIR_CALL_PARENT(NULL, arangodbclient_exception_ce, getThis(), "__construct", NULL, 0, &message, &_12, previous);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Exception, enableLogging) {

	zval __$true;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$true, 1);


	zend_update_static_property(arangodbclient_exception_ce, ZEND_STRL("enableLogging"), &__$true);

}

PHP_METHOD(ArangoDBClient_Exception, disableLogging) {

	zval __$false;
	zval *this_ptr = getThis();

	ZVAL_BOOL(&__$false, 0);


	zend_update_static_property(arangodbclient_exception_ce, ZEND_STRL("enableLogging"), &__$false);

}

