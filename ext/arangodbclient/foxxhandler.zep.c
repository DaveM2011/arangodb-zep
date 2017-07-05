
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
#include "kernel/file.h"
#include "kernel/exception.h"
#include "kernel/memory.h"
#include "kernel/fcall.h"
#include "kernel/operators.h"
#include "kernel/array.h"
#include "kernel/string.h"
#include "kernel/object.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_FoxxHandler) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, FoxxHandler, arangodbclient, foxxhandler, arangodbclient_handler_ce, arangodbclient_foxxhandler_method_entry, 0);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_FoxxHandler, installFoxxZip) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *localZip_param = NULL, *mountPoint_param = NULL, *options_param = NULL, post, response, tmpArrayd1b5116499c5b30ab1ea6541dd495788, e, _13, _0$$4, _1$$4, _2$$4, _3$$5, _4$$5, _5$$5, _6$$5, _7$$5, _8$$5, _9$$7, _10$$7, _11$$8, _12$$8, _14$$9, _15$$9;
	zval localZip, mountPoint;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&localZip);
	ZVAL_UNDEF(&mountPoint);
	ZVAL_UNDEF(&post);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArrayd1b5116499c5b30ab1ea6541dd495788);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_0$$4);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&_3$$5);
	ZVAL_UNDEF(&_4$$5);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_8$$5);
	ZVAL_UNDEF(&_9$$7);
	ZVAL_UNDEF(&_10$$7);
	ZVAL_UNDEF(&_11$$8);
	ZVAL_UNDEF(&_12$$8);
	ZVAL_UNDEF(&_14$$9);
	ZVAL_UNDEF(&_15$$9);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &localZip_param, &mountPoint_param, &options_param);

	zephir_get_strval(&localZip, localZip_param);
	zephir_get_strval(&mountPoint, mountPoint_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	if (!((zephir_file_exists(&localZip TSRMLS_CC) == SUCCESS))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Foxx-Zip {localZip} does not exist (or file is unreadable).", "arangodbclient/foxxhandler.zep", 10);
		return;
	}

	/* try_start_1: */

		ZEPHIR_INIT_VAR(&post);
		zephir_file_get_contents(&post, &localZip TSRMLS_CC);
		ZEPHIR_CALL_METHOD(&_0$$4, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_INIT_VAR(&_1$$4);
		ZVAL_STRING(&_1$$4, "/_api/upload");
		ZEPHIR_CALL_METHOD(&response, &_0$$4, "post", NULL, 0, &_1$$4, &post);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&_2$$4, &response, "gethttpcode", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		if (ZEPHIR_LT_LONG(&_2$$4, 400)) {
			ZEPHIR_INIT_VAR(&tmpArrayd1b5116499c5b30ab1ea6541dd495788);
			zephir_create_array(&tmpArrayd1b5116499c5b30ab1ea6541dd495788, 2, 0 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(&_3$$5, &response, "getjson", NULL, 0);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_OBS_VAR(&_4$$5);
			zephir_array_fetch_string(&_4$$5, &_3$$5, SL("filename"), PH_NOISY, "arangodbclient/foxxhandler.zep", 16 TSRMLS_CC);
			zephir_array_update_string(&tmpArrayd1b5116499c5b30ab1ea6541dd495788, SL("appInfo"), &_4$$5, PH_COPY | PH_SEPARATE);
			zephir_array_update_string(&tmpArrayd1b5116499c5b30ab1ea6541dd495788, SL("mount"), &mountPoint, PH_COPY | PH_SEPARATE);
			ZEPHIR_CALL_METHOD(&_5$$5, this_ptr, "getconnection", NULL, 0);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_INIT_VAR(&_6$$5);
			zephir_json_encode(&_6$$5, &tmpArrayd1b5116499c5b30ab1ea6541dd495788, 0 );
			ZEPHIR_INIT_VAR(&_7$$5);
			ZVAL_STRING(&_7$$5, "/_admin/foxx/install");
			ZEPHIR_CALL_METHOD(&response, &_5$$5, "put", NULL, 0, &_7$$5, &_6$$5);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_CALL_METHOD(&_8$$5, &response, "gethttpcode", NULL, 47);
			zephir_check_call_status_or_jump(try_end_1);
			if (ZEPHIR_LT_LONG(&_8$$5, 400)) {
				ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
				zephir_check_call_status_or_jump(try_end_1);
				RETURN_MM();
			} else {
				ZEPHIR_INIT_VAR(&_9$$7);
				object_init_ex(&_9$$7, arangodbclient_clientexception_ce);
				ZEPHIR_INIT_VAR(&_10$$7);
				ZVAL_STRING(&_10$$7, "Foxx-Zip install failed");
				ZEPHIR_CALL_METHOD(NULL, &_9$$7, "__construct", NULL, 37, &_10$$7);
				zephir_check_call_status_or_jump(try_end_1);
				zephir_throw_exception_debug(&_9$$7, "arangodbclient/foxxhandler.zep", 21 TSRMLS_CC);
				goto try_end_1;

			}
		} else {
			ZEPHIR_INIT_VAR(&_11$$8);
			object_init_ex(&_11$$8, arangodbclient_clientexception_ce);
			ZEPHIR_INIT_VAR(&_12$$8);
			ZVAL_STRING(&_12$$8, "Foxx-Zip upload failed");
			ZEPHIR_CALL_METHOD(NULL, &_11$$8, "__construct", NULL, 37, &_12$$8);
			zephir_check_call_status_or_jump(try_end_1);
			zephir_throw_exception_debug(&_11$$8, "arangodbclient/foxxhandler.zep", 24 TSRMLS_CC);
			goto try_end_1;

		}

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_VAR(&_13);
		ZVAL_OBJ(&_13, EG(exception));
		Z_ADDREF_P(&_13);
		if (zephir_instance_of_ev(&_13, arangodbclient_serverexception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_13);
			ZEPHIR_INIT_VAR(&_14$$9);
			object_init_ex(&_14$$9, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_15$$9, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_14$$9, "__construct", NULL, 37, &_15$$9);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_14$$9, "arangodbclient/foxxhandler.zep", 27 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	array_init(return_value);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_FoxxHandler, removeFoxxApp) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *mountPoint_param = NULL, *options_param = NULL, response, tmpArray2e91a2de584b196522ab83abc491c501, e, _8, _0$$3, _1$$3, _2$$3, _3$$3, _4$$5, _5$$5, _6$$5, _7$$5, _9$$6, _13$$6, _14$$6, _10$$7, _11$$7, _12$$7;
	zval mountPoint;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&mountPoint);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray2e91a2de584b196522ab83abc491c501);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_4$$5);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$5);
	ZVAL_UNDEF(&_9$$6);
	ZVAL_UNDEF(&_13$$6);
	ZVAL_UNDEF(&_14$$6);
	ZVAL_UNDEF(&_10$$7);
	ZVAL_UNDEF(&_11$$7);
	ZVAL_UNDEF(&_12$$7);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &mountPoint_param, &options_param);

	zephir_get_strval(&mountPoint, mountPoint_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}



	/* try_start_1: */

		ZEPHIR_INIT_VAR(&tmpArray2e91a2de584b196522ab83abc491c501);
		zephir_create_array(&tmpArray2e91a2de584b196522ab83abc491c501, 1, 0 TSRMLS_CC);
		zephir_array_update_string(&tmpArray2e91a2de584b196522ab83abc491c501, SL("mount"), &mountPoint, PH_COPY | PH_SEPARATE);
		ZEPHIR_CALL_METHOD(&_0$$3, this_ptr, "getconnection", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_INIT_VAR(&_1$$3);
		zephir_json_encode(&_1$$3, &tmpArray2e91a2de584b196522ab83abc491c501, 0 );
		ZEPHIR_INIT_VAR(&_2$$3);
		ZVAL_STRING(&_2$$3, "/_admin/foxx/uninstall");
		ZEPHIR_CALL_METHOD(&response, &_0$$3, "put", NULL, 0, &_2$$3, &_1$$3);
		zephir_check_call_status_or_jump(try_end_1);
		ZEPHIR_CALL_METHOD(&_3$$3, &response, "gethttpcode", NULL, 0);
		zephir_check_call_status_or_jump(try_end_1);
		if (ZEPHIR_LT_LONG(&_3$$3, 400)) {
			ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
			zephir_check_call_status_or_jump(try_end_1);
			RETURN_MM();
		} else {
			ZEPHIR_INIT_VAR(&_4$$5);
			object_init_ex(&_4$$5, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_5$$5, &response, "gethttpcode", NULL, 47);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_INIT_VAR(&_6$$5);
			ZVAL_STRING(&_6$$5, "Foxx uninstall failed (Code: %d)");
			ZEPHIR_CALL_FUNCTION(&_7$$5, "sprintf", NULL, 41, &_6$$5, &_5$$5);
			zephir_check_call_status_or_jump(try_end_1);
			ZEPHIR_CALL_METHOD(NULL, &_4$$5, "__construct", NULL, 37, &_7$$5);
			zephir_check_call_status_or_jump(try_end_1);
			zephir_throw_exception_debug(&_4$$5, "arangodbclient/foxxhandler.zep", 42 TSRMLS_CC);
			goto try_end_1;

		}

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_VAR(&_8);
		ZVAL_OBJ(&_8, EG(exception));
		Z_ADDREF_P(&_8);
		if (zephir_instance_of_ev(&_8, arangodbclient_serverexception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_8);
			ZEPHIR_CALL_METHOD(&_9$$6, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			if (ZEPHIR_IS_STRING_IDENTICAL(&_9$$6, "Service not found")) {
				ZEPHIR_INIT_VAR(&_10$$7);
				object_init_ex(&_10$$7, arangodbclient_clientexception_ce);
				ZEPHIR_INIT_VAR(&_11$$7);
				ZVAL_STRING(&_11$$7, "Mount point %s not present.");
				ZEPHIR_CALL_FUNCTION(&_12$$7, "sprintf", NULL, 41, &_11$$7, &mountPoint);
				zephir_check_call_status();
				ZEPHIR_CALL_METHOD(NULL, &_10$$7, "__construct", NULL, 37, &_12$$7);
				zephir_check_call_status();
				zephir_throw_exception_debug(&_10$$7, "arangodbclient/foxxhandler.zep", 46 TSRMLS_CC);
				ZEPHIR_MM_RESTORE();
				return;
			}
			ZEPHIR_INIT_VAR(&_13$$6);
			object_init_ex(&_13$$6, arangodbclient_clientexception_ce);
			ZEPHIR_CALL_METHOD(&_14$$6, &e, "getmessage", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, &_13$$6, "__construct", NULL, 37, &_14$$6);
			zephir_check_call_status();
			zephir_throw_exception_debug(&_13$$6, "arangodbclient/foxxhandler.zep", 48 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	array_init(return_value);
	RETURN_MM();

}

