
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
#include "kernel/concat.h"
#include "kernel/string.h"
#include "kernel/operators.h"
#include "kernel/array.h"
#include "kernel/object.h"
#include "kernel/exception.h"
#include "kernel/file.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_CollectionHandler) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, CollectionHandler, arangodbclient, collectionhandler, arangodbclient_handler_ce, arangodbclient_collectionhandler_method_entry, 0);

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("ENTRY_DOCUMENTS"), "documents");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_COLLECTION"), "collection");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_EXAMPLE"), "example");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_NEW_VALUE"), "newValue");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_CREATE_COLLECTION"), "createCollection");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_ATTRIBUTE"), "attribute");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_KEYS"), "keys");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_LEFT"), "left");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_RIGHT"), "right");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_CLOSED"), "closed");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_LATITUDE"), "latitude");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_LONGITUDE"), "longitude");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_DISTANCE"), "distance");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_RADIUS"), "radius");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_SKIP"), "skip");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_INDEX"), "index");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_LIMIT"), "limit");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_FIELDS"), "fields");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_UNIQUE"), "unique");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_TYPE"), "type");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_SIZE"), "size");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_GEO_INDEX"), "geo");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_IGNORE_NULL"), "ignoreNull");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_CONSTRAINT"), "constraint");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_GEOJSON"), "geoJson");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_HASH_INDEX"), "hash");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_FULLTEXT_INDEX"), "fulltext");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_MIN_LENGTH"), "minLength");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_SKIPLIST_INDEX"), "skiplist");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_PERSISTENT_INDEX"), "persistent");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_SPARSE"), "sparse");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_COUNT"), "count");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_QUERY"), "query");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_CHECKSUM"), "checksum");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_REVISION"), "revision");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_PROPERTIES"), "properties");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_FIGURES"), "figures");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_LOAD"), "load");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_UNLOAD"), "unload");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_TRUNCATE"), "truncate");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_RENAME"), "rename");

	zephir_declare_class_constant_string(arangodbclient_collectionhandler_ce, SL("OPTION_EXCLUDE_SYSTEM"), "excludeSystem");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_CollectionHandler, create) {

	zend_string *_2$$3;
	zend_ulong _1$$3;
	zephir_fcall_cache_entry *_17 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection = NULL, collection_sub, *options_param = NULL, name, key, value, meth, type, params, response, jsonResponse, id, _4, _7, _10, _13, _16, _18, _20, _22, _23, _24, *_0$$3, _3$$4, _5$$5, _6$$5, _8$$6, _9$$6, _11$$7, _12$$7, _14$$8, _15$$8, _19$$9, _21$$10;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&meth);
	ZVAL_UNDEF(&type);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&jsonResponse);
	ZVAL_UNDEF(&id);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_16);
	ZVAL_UNDEF(&_18);
	ZVAL_UNDEF(&_20);
	ZVAL_UNDEF(&_22);
	ZVAL_UNDEF(&_23);
	ZVAL_UNDEF(&_24);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_8$$6);
	ZVAL_UNDEF(&_9$$6);
	ZVAL_UNDEF(&_11$$7);
	ZVAL_UNDEF(&_12$$7);
	ZVAL_UNDEF(&_14$$8);
	ZVAL_UNDEF(&_15$$8);
	ZVAL_UNDEF(&_19$$9);
	ZVAL_UNDEF(&_21$$10);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &collection, &options_param);

	ZEPHIR_SEPARATE_PARAM(collection);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	if (Z_TYPE_P(collection) == IS_STRING) {
		ZEPHIR_CPY_WRT(&name, collection);
		ZEPHIR_INIT_NVAR(collection);
		object_init_ex(collection, arangodbclient_collection_ce);
		ZEPHIR_CALL_METHOD(NULL, collection, "__construct", NULL, 20);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, collection, "setname", NULL, 22, &name);
		zephir_check_call_status();
		zephir_is_iterable(&options, 0, "arangodbclient/collectionhandler.zep", 59);
		ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&options), _1$$3, _2$$3, _0$$3)
		{
			ZEPHIR_INIT_NVAR(&key);
			if (_2$$3 != NULL) { 
				ZVAL_STR_COPY(&key, _2$$3);
			} else {
				ZVAL_LONG(&key, _1$$3);
			}
			ZEPHIR_INIT_NVAR(&value);
			ZVAL_COPY(&value, _0$$3);
			ZEPHIR_INIT_NVAR(&_3$$4);
			zephir_ucfirst(&_3$$4, &key);
			ZEPHIR_INIT_NVAR(&meth);
			ZEPHIR_CONCAT_SV(&meth, "set", &_3$$4);
			ZEPHIR_CALL_METHOD_ZVAL(NULL, collection, &meth, NULL, 0, &value);
			zephir_check_call_status();
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&value);
		ZEPHIR_INIT_NVAR(&key);
	}
	ZEPHIR_CALL_METHOD(&_4, collection, "getwaitforsync", NULL, 23);
	zephir_check_call_status();
	if (Z_TYPE_P(&_4) == IS_NULL) {
		ZEPHIR_INIT_VAR(&_6$$5);
		ZVAL_STRING(&_6$$5, "waitForSync");
		ZEPHIR_CALL_METHOD(&_5$$5, this_ptr, "getconnectionoption", NULL, 0, &_6$$5);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, collection, "setwaitforsync", NULL, 24, &_5$$5);
		zephir_check_call_status();
	}
	ZEPHIR_CALL_METHOD(&_7, collection, "getjournalsize", NULL, 25);
	zephir_check_call_status();
	if (Z_TYPE_P(&_7) == IS_NULL) {
		ZEPHIR_INIT_VAR(&_9$$6);
		ZVAL_STRING(&_9$$6, "journalSize");
		ZEPHIR_CALL_METHOD(&_8$$6, this_ptr, "getconnectionoption", NULL, 0, &_9$$6);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, collection, "setjournalsize", NULL, 26, &_8$$6);
		zephir_check_call_status();
	}
	ZEPHIR_CALL_METHOD(&_10, collection, "getissystem", NULL, 27);
	zephir_check_call_status();
	if (Z_TYPE_P(&_10) == IS_NULL) {
		ZEPHIR_INIT_VAR(&_12$$7);
		ZVAL_STRING(&_12$$7, "isSystem");
		ZEPHIR_CALL_METHOD(&_11$$7, this_ptr, "getconnectionoption", NULL, 0, &_12$$7);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, collection, "setissystem", NULL, 28, &_11$$7);
		zephir_check_call_status();
	}
	ZEPHIR_CALL_METHOD(&_13, collection, "getisvolatile", NULL, 29);
	zephir_check_call_status();
	if (Z_TYPE_P(&_13) == IS_NULL) {
		ZEPHIR_INIT_VAR(&_15$$8);
		ZVAL_STRING(&_15$$8, "isVolatile");
		ZEPHIR_CALL_METHOD(&_14$$8, this_ptr, "getconnectionoption", NULL, 0, &_15$$8);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, collection, "setisvolatile", NULL, 30, &_14$$8);
		zephir_check_call_status();
	}
	ZEPHIR_CALL_METHOD(&_16, collection, "gettype", NULL, 31);
	zephir_check_call_status();
	if (zephir_is_true(&_16)) {
		ZEPHIR_CALL_METHOD(&type, collection, "gettype", NULL, 31);
		zephir_check_call_status();
	} else {
		ZEPHIR_CALL_CE_STATIC(&type, arangodbclient_collection_ce, "getdefaulttype", &_17, 0);
		zephir_check_call_status();
	}
	ZEPHIR_INIT_VAR(&params);
	zephir_create_array(&params, 7, 0 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(&_18, collection, "getname", NULL, 32);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("name"), &_18, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&params, SL("type"), &type, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_18, collection, "getwaitforsync", NULL, 23);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("waitForSync"), &_18, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_18, collection, "getjournalsize", NULL, 25);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("journalSize"), &_18, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_18, collection, "getissystem", NULL, 27);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("isSystem"), &_18, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_18, collection, "getisvolatile", NULL, 29);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("isVolatile"), &_18, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_18, collection, "getkeyoptions", NULL, 33);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("keyOptions"), &_18, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_18, collection, "getnumberofshards", NULL, 34);
	zephir_check_call_status();
	if (Z_TYPE_P(&_18) != IS_NULL) {
		ZEPHIR_CALL_METHOD(&_19$$9, collection, "getnumberofshards", NULL, 34);
		zephir_check_call_status();
		zephir_array_update_string(&params, SL("numberOfShards"), &_19$$9, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_CALL_METHOD(&_20, collection, "getshardkeys", NULL, 35);
	zephir_check_call_status();
	if (Z_TYPE_P(&_20) == IS_ARRAY) {
		ZEPHIR_CALL_METHOD(&_21$$10, collection, "getshardkeys", NULL, 35);
		zephir_check_call_status();
		zephir_array_update_string(&params, SL("shardKeys"), &_21$$10, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_CALL_METHOD(&_22, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_23, this_ptr, "json_encode_wrapper", NULL, 0, &params);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_24);
	ZVAL_STRING(&_24, "/_api/collection");
	ZEPHIR_CALL_METHOD(&response, &_22, "post", NULL, 0, &_24, &_23);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&jsonResponse, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_OBS_VAR(&id);
	zephir_array_fetch_string(&id, &jsonResponse, SL("id"), PH_NOISY, "arangodbclient/collectionhandler.zep", 82 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, collection, "setid", NULL, 36, &id);
	zephir_check_call_status();
	RETURN_CCTOR(&id);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, has) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection = NULL, collection_sub, e, _0, _1, _2$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);

	ZEPHIR_SEPARATE_PARAM(collection);


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(collection, &_0);

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(NULL, this_ptr, "get", NULL, 0, collection);
		zephir_check_call_status_or_jump(try_end_1);
		RETURN_MM_BOOL(1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_VAR(&_1);
		ZVAL_OBJ(&_1, EG(exception));
		Z_ADDREF_P(&_1);
		if (zephir_instance_of_ev(&_1, arangodbclient_serverexception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_1);
			ZEPHIR_CALL_METHOD(&_2$$4, &e, "getcode", NULL, 0);
			zephir_check_call_status();
			if (ZEPHIR_IS_LONG_IDENTICAL(&_2$$4, 404)) {
				RETURN_MM_BOOL(0);
			}
			zephir_throw_exception_debug(&e, "arangodbclient/collectionhandler.zep", 99 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	RETURN_MM_BOOL(0);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, count) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection = NULL, collection_sub, url, response, data, count, _0, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&count);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);

	ZEPHIR_SEPARATE_PARAM(collection);


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(collection, &_0);
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, collection);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "count");
	zephir_array_fast_append(&_2, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_0, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&count, &data, SL("count"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 112 TSRMLS_CC);
	RETURN_MM_LONG(zephir_get_intval(&count));

}

PHP_METHOD(ArangoDBClient_CollectionHandler, get) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL, *_4 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection = NULL, collection_sub, url, response, data, _0, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);

	ZEPHIR_SEPARATE_PARAM(collection);


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(collection, &_0);
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, collection);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_0, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_CE_STATIC(arangodbclient_collection_ce, "createfromarray", &_4, 0, &data);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getProperties) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL, *_4 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection = NULL, collection_sub, url, response, data, _0, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);

	ZEPHIR_SEPARATE_PARAM(collection);


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(collection, &_0);
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, collection);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "properties");
	zephir_array_fast_append(&_2, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_0, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_CE_STATIC(arangodbclient_collection_ce, "createfromarray", &_4, 0, &data);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, figures) {

	zval _2;
	zephir_fcall_cache_entry *_1 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection = NULL, collection_sub, url, response, data, _0, _3, _4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);

	ZEPHIR_SEPARATE_PARAM(collection);


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(collection, &_0);
	ZEPHIR_INIT_VAR(&_2);
	zephir_create_array(&_2, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_2, collection);
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "figures");
	zephir_array_fast_append(&_2, &_3);
	ZEPHIR_INIT_NVAR(&_3);
	ZVAL_STRING(&_3, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_1, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_0, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_4, &data, SL("figures"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 146 TSRMLS_CC);
	RETURN_CTOR(&_4);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getChecksum) {

	zval _1, _5;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL, *_4 = NULL;
	zend_bool withRevisions, withData;
	zval *collectionId, collectionId_sub, *withRevisions_param = NULL, *withData_param = NULL, url, response, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 2, &collectionId, &withRevisions_param, &withData_param);

	if (!withRevisions_param) {
		withRevisions = 0;
	} else {
		withRevisions = zephir_get_boolval(withRevisions_param);
	}
	if (!withData_param) {
		withData = 0;
	} else {
		withData = zephir_get_boolval(withData_param);
	}


	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, collectionId);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "checksum");
	zephir_array_fast_append(&_1, &_2);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_5);
	zephir_create_array(&_5, 2, 0 TSRMLS_CC);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_BOOL(&_2, withRevisions);
	zephir_array_update_string(&_5, SL("withRevisions"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_BOOL(&_2, withData);
	zephir_array_update_string(&_5, SL("withData"), &_2, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_CE_STATIC(&_3, arangodbclient_urlhelper_ce, "appendparamsurl", &_4, 0, &url, &_5);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&url, &_3);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_3, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getRevision) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *collectionId, collectionId_sub, url, response, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collectionId);



	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, collectionId);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "revision");
	zephir_array_fast_append(&_1, &_2);
	ZEPHIR_INIT_NVAR(&_2);
	ZVAL_STRING(&_2, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_3, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, rename) {

	zephir_fcall_cache_entry *_4 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval name;
	zval *collection, collection_sub, *name_param = NULL, collectionId, params, tmpArray43179846deff2277830599a700ed8fac, _0, _1, _2, _3, _5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArray43179846deff2277830599a700ed8fac);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&name);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &collection, &name_param);

	zephir_get_strval(&name, name_param);


	ZEPHIR_CALL_METHOD(&collectionId, this_ptr, "getcollectionid", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "isvalidcollectionid", NULL, 0, &collectionId);
	zephir_check_call_status();
	if (zephir_is_true(&_0)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Cannot alter a collection without a collection id", "arangodbclient/collectionhandler.zep", 174);
		return;
	}
	ZEPHIR_INIT_VAR(&params);
	zephir_create_array(&params, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&params, SL("name"), &name, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArray43179846deff2277830599a700ed8fac);
	zephir_create_array(&tmpArray43179846deff2277830599a700ed8fac, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&tmpArray43179846deff2277830599a700ed8fac, &collectionId);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "rename");
	zephir_array_fast_append(&tmpArray43179846deff2277830599a700ed8fac, &_1);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&_3, arangodbclient_urlhelper_ce, "buildurl", &_4, 0, &_1, &tmpArray43179846deff2277830599a700ed8fac);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "json_encode_wrapper", NULL, 0, &params);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_2, "put", NULL, 0, &_3, &_5);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, load) {

	zephir_fcall_cache_entry *_4 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, collectionId, result, tmpArray14253296867cd8c1f8a013d426e7b311, _0, _1, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&tmpArray14253296867cd8c1f8a013d426e7b311);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);



	ZEPHIR_CALL_METHOD(&collectionId, this_ptr, "getcollectionid", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "isvalidcollectionid", NULL, 0, &collectionId);
	zephir_check_call_status();
	if (zephir_is_true(&_0)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Cannot alter a collection without a collection id", "arangodbclient/collectionhandler.zep", 188);
		return;
	}
	ZEPHIR_INIT_VAR(&tmpArray14253296867cd8c1f8a013d426e7b311);
	zephir_create_array(&tmpArray14253296867cd8c1f8a013d426e7b311, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&tmpArray14253296867cd8c1f8a013d426e7b311, &collectionId);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "load");
	zephir_array_fast_append(&tmpArray14253296867cd8c1f8a013d426e7b311, &_1);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&_3, arangodbclient_urlhelper_ce, "buildurl", &_4, 0, &_1, &tmpArray14253296867cd8c1f8a013d426e7b311);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "");
	ZEPHIR_CALL_METHOD(&result, &_2, "put", NULL, 0, &_3, &_1);
	zephir_check_call_status();
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, unload) {

	zephir_fcall_cache_entry *_4 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, collectionId, result, tmpArray21dfb8e8de351ab07ebf5d7b873c5220, _0, _1, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&tmpArray21dfb8e8de351ab07ebf5d7b873c5220);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);



	ZEPHIR_CALL_METHOD(&collectionId, this_ptr, "getcollectionid", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "isvalidcollectionid", NULL, 0, &collectionId);
	zephir_check_call_status();
	if (zephir_is_true(&_0)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Cannot alter a collection without a collection id", "arangodbclient/collectionhandler.zep", 201);
		return;
	}
	ZEPHIR_INIT_VAR(&tmpArray21dfb8e8de351ab07ebf5d7b873c5220);
	zephir_create_array(&tmpArray21dfb8e8de351ab07ebf5d7b873c5220, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&tmpArray21dfb8e8de351ab07ebf5d7b873c5220, &collectionId);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "unload");
	zephir_array_fast_append(&tmpArray21dfb8e8de351ab07ebf5d7b873c5220, &_1);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&_3, arangodbclient_urlhelper_ce, "buildurl", &_4, 0, &_1, &tmpArray21dfb8e8de351ab07ebf5d7b873c5220);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "");
	ZEPHIR_CALL_METHOD(&result, &_2, "put", NULL, 0, &_3, &_1);
	zephir_check_call_status();
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, truncate) {

	zephir_fcall_cache_entry *_4 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, collectionId, tmpArrayff4d346d4ce975cfb334cfe708806433, _0, _1, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&tmpArrayff4d346d4ce975cfb334cfe708806433);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);



	ZEPHIR_CALL_METHOD(&collectionId, this_ptr, "getcollectionid", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "isvalidcollectionid", NULL, 0, &collectionId);
	zephir_check_call_status();
	if (zephir_is_true(&_0)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Cannot alter a collection without a collection id", "arangodbclient/collectionhandler.zep", 214);
		return;
	}
	ZEPHIR_INIT_VAR(&tmpArrayff4d346d4ce975cfb334cfe708806433);
	zephir_create_array(&tmpArrayff4d346d4ce975cfb334cfe708806433, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&tmpArrayff4d346d4ce975cfb334cfe708806433, &collectionId);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "truncate");
	zephir_array_fast_append(&tmpArrayff4d346d4ce975cfb334cfe708806433, &_1);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&_3, arangodbclient_urlhelper_ce, "buildurl", &_4, 0, &_1, &tmpArrayff4d346d4ce975cfb334cfe708806433);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "");
	ZEPHIR_CALL_METHOD(NULL, &_2, "put", NULL, 0, &_3, &_1);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, drop) {

	zend_bool _1;
	zephir_fcall_cache_entry *_3 = NULL, *_7 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection, collection_sub, *options_param = NULL, collectionName, appendix, tmpArray681ed9b5283111f0bc03157259baf9d2, _0, _5, _6, _8, _9, _2$$4, _4$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&collectionName);
	ZVAL_UNDEF(&appendix);
	ZVAL_UNDEF(&tmpArray681ed9b5283111f0bc03157259baf9d2);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &collection, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&collectionName, this_ptr, "getcollectionname", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "isvalidcollectionid", NULL, 0, &collectionName);
	zephir_check_call_status();
	if (zephir_is_true(&_0)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Cannot alter a collection without a collection id", "arangodbclient/collectionhandler.zep", 227);
		return;
	}
	ZEPHIR_INIT_VAR(&appendix);
	ZVAL_STRING(&appendix, "");
	_1 = Z_TYPE_P(&options) == IS_ARRAY;
	if (_1) {
		_1 = zephir_array_isset_string(&options, SL("isSystem"));
	}
	if (_1) {
		zephir_array_fetch_string(&_4$$4, &options, SL("isSystem"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 231 TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_2$$4, arangodbclient_urlhelper_ce, "getboolstring", &_3, 0, &_4$$4);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&appendix);
		ZEPHIR_CONCAT_SV(&appendix, "?isSystem=", &_2$$4);
	}
	ZEPHIR_INIT_VAR(&tmpArray681ed9b5283111f0bc03157259baf9d2);
	zephir_create_array(&tmpArray681ed9b5283111f0bc03157259baf9d2, 1, 0 TSRMLS_CC);
	zephir_array_fast_append(&tmpArray681ed9b5283111f0bc03157259baf9d2, &collectionName);
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_8);
	ZVAL_STRING(&_8, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&_6, arangodbclient_urlhelper_ce, "buildurl", &_7, 0, &_8, &tmpArray681ed9b5283111f0bc03157259baf9d2);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_9);
	ZEPHIR_CONCAT_VV(&_9, &_6, &appendix);
	ZEPHIR_CALL_METHOD(NULL, &_5, "delete", NULL, 0, &_9);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, isValidCollectionId) {

	zend_bool _0, _1, _3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collectionId, collectionId_sub, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collectionId);



	_0 = !zephir_is_true(collectionId);
	if (!(_0)) {
		_1 = Z_TYPE_P(collectionId) == IS_STRING;
		if (!(_1)) {
			ZEPHIR_CALL_FUNCTION(&_2, "is_float", NULL, 8, collectionId);
			zephir_check_call_status();
			_1 = zephir_is_true(&_2);
		}
		_3 = _1;
		if (!(_3)) {
			_3 = Z_TYPE_P(collectionId) == IS_LONG;
		}
		_0 = !(_3);
	}
	RETURN_MM_BOOL(_0);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getAllCollections) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_2 = NULL, *_6 = NULL;
	zval *options_param = NULL, __$false, __$true, tmpArray68048367413a03086dedf7530dc66684, params, url, response, tmpArray40cd750bba9870f18aada2478b24840a, result, collection, _0, _1, _3, _4, _5, _7, _8, _9$$4, _10$$4, *_11$$4, _12$$5;
	zval options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&options);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&tmpArray68048367413a03086dedf7530dc66684);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray40cd750bba9870f18aada2478b24840a);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9$$4);
	ZVAL_UNDEF(&_10$$4);
	ZVAL_UNDEF(&_12$$5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&tmpArray68048367413a03086dedf7530dc66684);
	zephir_create_array(&tmpArray68048367413a03086dedf7530dc66684, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArray68048367413a03086dedf7530dc66684, SL("excludeSystem"), &__$false, PH_COPY | PH_SEPARATE);
	add_assoc_stringl_ex(&tmpArray68048367413a03086dedf7530dc66684, SL("keys"), SL("result"));
	ZEPHIR_INIT_VAR(&_0);
	zephir_fast_array_merge(&_0, &tmpArray68048367413a03086dedf7530dc66684, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_0);
	ZEPHIR_INIT_VAR(&params);
	array_init(&params);
	zephir_array_fetch_string(&_1, &options, SL("excludeSystem"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 250 TSRMLS_CC);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_1)) {
		zephir_array_update_string(&params, SL("excludeSystem"), &__$true, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/collection");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "appendparamsurl", &_2, 0, &_3, &params);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray40cd750bba9870f18aada2478b24840a);
	array_init(&tmpArray40cd750bba9870f18aada2478b24840a);
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_CE_STATIC(&_5, arangodbclient_urlhelper_ce, "buildurl", &_6, 0, &url, &tmpArray40cd750bba9870f18aada2478b24840a);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_4, "get", NULL, 0, &_5);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_7, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&response, &_7);
	zephir_array_fetch_string(&_8, &options, SL("keys"), PH_READONLY, "arangodbclient/collectionhandler.zep", 257 TSRMLS_CC);
	if (zephir_array_isset(&response, &_8)) {
		ZEPHIR_INIT_VAR(&result);
		array_init(&result);
		ZEPHIR_OBS_VAR(&_10$$4);
		zephir_array_fetch_string(&_10$$4, &options, SL("keys"), PH_NOISY, "arangodbclient/collectionhandler.zep", 259 TSRMLS_CC);
		zephir_array_fetch(&_9$$4, &response, &_10$$4, PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 259 TSRMLS_CC);
		zephir_is_iterable(&_9$$4, 0, "arangodbclient/collectionhandler.zep", 262);
		ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_9$$4), _11$$4)
		{
			ZEPHIR_INIT_NVAR(&collection);
			ZVAL_COPY(&collection, _11$$4);
			ZEPHIR_OBS_NVAR(&_12$$5);
			zephir_array_fetch_string(&_12$$5, &collection, SL("name"), PH_NOISY, "arangodbclient/collectionhandler.zep", 260 TSRMLS_CC);
			zephir_array_update_zval(&result, &_12$$5, &collection, PH_COPY | PH_SEPARATE);
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&collection);
		RETURN_CCTOR(&result);
	}
	RETURN_CCTOR(&response);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getCollectionId) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, collectionId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&collectionId);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);



	if (zephir_instance_of_ev(collection, arangodbclient_collection_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&collectionId, collection, "getid", NULL, 0);
		zephir_check_call_status();
		RETURN_CCTOR(&collectionId);
	} else {
		ZEPHIR_CPY_WRT(&collectionId, collection);
		RETURN_CCTOR(&collectionId);
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getCollectionName) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, collectionId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&collectionId);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);



	if (zephir_instance_of_ev(collection, arangodbclient_collection_ce TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(&collectionId, collection, "getname", NULL, 0);
		zephir_check_call_status();
		RETURN_CCTOR(&collectionId);
	} else {
		ZEPHIR_CPY_WRT(&collectionId, collection);
		RETURN_CCTOR(&collectionId);
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, importFromFile) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collectionId, collectionId_sub, *importFileName, importFileName_sub, *options_param = NULL, contents, _0$$3, _1$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&importFileName_sub);
	ZVAL_UNDEF(&contents);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collectionId, &importFileName, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&contents);
	zephir_file_get_contents(&contents, importFileName TSRMLS_CC);
	if (ZEPHIR_IS_FALSE_IDENTICAL(&contents)) {
		ZEPHIR_INIT_VAR(&_0$$3);
		object_init_ex(&_0$$3, arangodbclient_clientexception_ce);
		ZEPHIR_INIT_VAR(&_1$$3);
		ZEPHIR_CONCAT_SVS(&_1$$3, "Input file \"", importFileName, "\" could not be found.");
		ZEPHIR_CALL_METHOD(NULL, &_0$$3, "__construct", NULL, 37, &_1$$3);
		zephir_check_call_status();
		zephir_throw_exception_debug(&_0$$3, "arangodbclient/collectionhandler.zep", 299 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "import", NULL, 0, collectionId, &contents, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, import) {

	zephir_fcall_cache_entry *_9 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection = NULL, collection_sub, *importData = NULL, importData_sub, *options_param = NULL, tmpContent, document, params, tmpArray88edebd3ca81765a540165038fc5be82, url, response, _0, _5, _10, *_1$$3, _4$$3, _2$$4, _3$$4, _6$$5, _7$$6, _8$$7;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&importData_sub);
	ZVAL_UNDEF(&tmpContent);
	ZVAL_UNDEF(&document);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&tmpArray88edebd3ca81765a540165038fc5be82);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_10);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_7$$6);
	ZVAL_UNDEF(&_8$$7);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collection, &importData, &options_param);

	ZEPHIR_SEPARATE_PARAM(collection);
	ZEPHIR_SEPARATE_PARAM(importData);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(collection, &_0);
	ZEPHIR_INIT_VAR(&tmpContent);
	ZVAL_STRING(&tmpContent, "");
	if (Z_TYPE_P(importData) == IS_ARRAY) {
		zephir_is_iterable(importData, 0, "arangodbclient/collectionhandler.zep", 314);
		ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(importData), _1$$3)
		{
			ZEPHIR_INIT_NVAR(&document);
			ZVAL_COPY(&document, _1$$3);
			ZEPHIR_CALL_METHOD(&_2$$4, &document, "tojson", NULL, 0);
			zephir_check_call_status();
			ZEPHIR_INIT_LNVAR(_3$$4);
			ZEPHIR_CONCAT_VS(&_3$$4, &_2$$4, "\r\n");
			zephir_concat_self(&tmpContent, &_3$$4 TSRMLS_CC);
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&document);
		ZEPHIR_CPY_WRT(importData, &tmpContent);
		ZEPHIR_INIT_NVAR(&tmpContent);
		ZVAL_STRING(&tmpContent, "");
		ZEPHIR_INIT_VAR(&_4$$3);
		ZVAL_STRING(&_4$$3, "documents");
		zephir_array_update_string(&options, SL("type"), &_4$$3, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "createcollectionifoptions", NULL, 0, collection, &options);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray88edebd3ca81765a540165038fc5be82);
	zephir_create_array(&tmpArray88edebd3ca81765a540165038fc5be82, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArray88edebd3ca81765a540165038fc5be82, SL("collection"), collection, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&params);
	zephir_fast_array_merge(&params, &tmpArray88edebd3ca81765a540165038fc5be82, &options TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_5);
	ZVAL_STRING(&_5, "type");
	if (zephir_array_key_exists(&options, &_5 TSRMLS_CC)) {
		zephir_array_fetch_string(&_6$$5, &options, SL("type"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 323 TSRMLS_CC);
		do {
			if (ZEPHIR_IS_STRING(&_6$$5, "documents")) {
				ZEPHIR_INIT_VAR(&_7$$6);
				ZVAL_STRING(&_7$$6, "documents");
				zephir_array_update_string(&params, SL("type"), &_7$$6, PH_COPY | PH_SEPARATE);
				break;
			}
			if (ZEPHIR_IS_STRING(&_6$$5, "array")) {
				ZEPHIR_INIT_VAR(&_8$$7);
				ZVAL_STRING(&_8$$7, "array");
				zephir_array_update_string(&params, SL("type"), &_8$$7, PH_COPY | PH_SEPARATE);
				break;
			}
		} while(0);

	}
	ZEPHIR_INIT_VAR(&_10);
	ZVAL_STRING(&_10, "/_api/import");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "appendparamsurl", &_9, 0, &_10, &params);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_0, "post", NULL, 0, &url, importData);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, createHashIndex) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool unique, sparse;
	zval fields;
	zval *collectionId_param = NULL, *fields_param = NULL, *unique_param = NULL, *sparse_param = NULL, indexOptions, _2, _3, _0$$3, _1$$4;
	zval collectionId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&indexOptions);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&fields);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &collectionId_param, &fields_param, &unique_param, &sparse_param);

	zephir_get_strval(&collectionId, collectionId_param);
	zephir_get_arrval(&fields, fields_param);
	if (!unique_param) {
		unique = 0;
	} else {
		unique = zephir_get_boolval(unique_param);
	}
	if (!sparse_param) {
		sparse = 0;
	} else {
		sparse = zephir_get_boolval(sparse_param);
	}


	ZEPHIR_INIT_VAR(&indexOptions);
	array_init(&indexOptions);
	if (unique) {
		ZEPHIR_INIT_VAR(&_0$$3);
		ZVAL_BOOL(&_0$$3, unique);
		zephir_array_update_string(&indexOptions, SL("unique"), &_0$$3, PH_COPY | PH_SEPARATE);
	}
	if (sparse) {
		ZEPHIR_INIT_VAR(&_1$$4);
		ZVAL_BOOL(&_1$$4, sparse);
		zephir_array_update_string(&indexOptions, SL("sparse"), &_1$$4, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "hash");
	ZVAL_NULL(&_3);
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "index", NULL, 0, &collectionId, &_2, &fields, &_3, &indexOptions);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, createFulltextIndex) {

	zend_long minLength, ZEPHIR_LAST_CALL_STATUS;
	zval fields;
	zval *collectionId_param = NULL, *fields_param = NULL, *minLength_param = NULL, indexOptions, _1, _2, _0$$3;
	zval collectionId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&indexOptions);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&fields);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collectionId_param, &fields_param, &minLength_param);

	zephir_get_strval(&collectionId, collectionId_param);
	zephir_get_arrval(&fields, fields_param);
	if (!minLength_param) {
		minLength = 0;
	} else {
		minLength = zephir_get_intval(minLength_param);
	}


	ZEPHIR_INIT_VAR(&indexOptions);
	array_init(&indexOptions);
	if (minLength) {
		ZEPHIR_INIT_VAR(&_0$$3);
		ZVAL_LONG(&_0$$3, minLength);
		zephir_array_update_string(&indexOptions, SL("minLength"), &_0$$3, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "fulltext");
	ZVAL_NULL(&_2);
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "index", NULL, 0, &collectionId, &_1, &fields, &_2, &indexOptions);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, createSkipListIndex) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool unique, sparse;
	zval fields;
	zval *collectionId_param = NULL, *fields_param = NULL, *unique_param = NULL, *sparse_param = NULL, indexOptions, _2, _3, _0$$3, _1$$4;
	zval collectionId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&indexOptions);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&fields);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &collectionId_param, &fields_param, &unique_param, &sparse_param);

	zephir_get_strval(&collectionId, collectionId_param);
	zephir_get_arrval(&fields, fields_param);
	if (!unique_param) {
		unique = 0;
	} else {
		unique = zephir_get_boolval(unique_param);
	}
	if (!sparse_param) {
		sparse = 0;
	} else {
		sparse = zephir_get_boolval(sparse_param);
	}


	ZEPHIR_INIT_VAR(&indexOptions);
	array_init(&indexOptions);
	if (unique) {
		ZEPHIR_INIT_VAR(&_0$$3);
		ZVAL_BOOL(&_0$$3, unique);
		zephir_array_update_string(&indexOptions, SL("unique"), &_0$$3, PH_COPY | PH_SEPARATE);
	}
	if (sparse) {
		ZEPHIR_INIT_VAR(&_1$$4);
		ZVAL_BOOL(&_1$$4, sparse);
		zephir_array_update_string(&indexOptions, SL("sparse"), &_1$$4, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "skiplist");
	ZVAL_NULL(&_3);
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "index", NULL, 0, &collectionId, &_2, &fields, &_3, &indexOptions);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, createPersistentIndex) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool unique, sparse;
	zval fields;
	zval *collectionId_param = NULL, *fields_param = NULL, *unique_param = NULL, *sparse_param = NULL, indexOptions, _2, _3, _0$$3, _1$$4;
	zval collectionId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&indexOptions);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&fields);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &collectionId_param, &fields_param, &unique_param, &sparse_param);

	zephir_get_strval(&collectionId, collectionId_param);
	zephir_get_arrval(&fields, fields_param);
	if (!unique_param) {
		unique = 0;
	} else {
		unique = zephir_get_boolval(unique_param);
	}
	if (!sparse_param) {
		sparse = 0;
	} else {
		sparse = zephir_get_boolval(sparse_param);
	}


	ZEPHIR_INIT_VAR(&indexOptions);
	array_init(&indexOptions);
	if (unique) {
		ZEPHIR_INIT_VAR(&_0$$3);
		ZVAL_BOOL(&_0$$3, unique);
		zephir_array_update_string(&indexOptions, SL("unique"), &_0$$3, PH_COPY | PH_SEPARATE);
	}
	if (sparse) {
		ZEPHIR_INIT_VAR(&_1$$4);
		ZVAL_BOOL(&_1$$4, sparse);
		zephir_array_update_string(&indexOptions, SL("sparse"), &_1$$4, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "persistent");
	ZVAL_NULL(&_3);
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "index", NULL, 0, &collectionId, &_2, &fields, &_3, &indexOptions);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, createGeoIndex) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zend_bool geoJson, constraint, ignoreNull;
	zval fields;
	zval *collectionId_param = NULL, *fields_param = NULL, *geoJson_param = NULL, *constraint_param = NULL, *ignoreNull_param = NULL, indexOptions, _3, _4, _0$$3, _1$$4, _2$$5;
	zval collectionId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId);
	ZVAL_UNDEF(&indexOptions);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_1$$4);
	ZVAL_UNDEF(&_2$$5);
	ZVAL_UNDEF(&fields);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 3, &collectionId_param, &fields_param, &geoJson_param, &constraint_param, &ignoreNull_param);

	zephir_get_strval(&collectionId, collectionId_param);
	zephir_get_arrval(&fields, fields_param);
	if (!geoJson_param) {
		geoJson = 0;
	} else {
		geoJson = zephir_get_boolval(geoJson_param);
	}
	if (!constraint_param) {
		constraint = 0;
	} else {
		constraint = zephir_get_boolval(constraint_param);
	}
	if (!ignoreNull_param) {
		ignoreNull = 0;
	} else {
		ignoreNull = zephir_get_boolval(ignoreNull_param);
	}


	ZEPHIR_INIT_VAR(&indexOptions);
	array_init(&indexOptions);
	if (geoJson) {
		ZEPHIR_INIT_VAR(&_0$$3);
		ZVAL_BOOL(&_0$$3, geoJson);
		zephir_array_update_string(&indexOptions, SL("geoJson"), &_0$$3, PH_COPY | PH_SEPARATE);
	}
	if (constraint) {
		ZEPHIR_INIT_VAR(&_1$$4);
		ZVAL_BOOL(&_1$$4, constraint);
		zephir_array_update_string(&indexOptions, SL("constraint"), &_1$$4, PH_COPY | PH_SEPARATE);
	}
	if (ignoreNull) {
		ZEPHIR_INIT_VAR(&_2$$5);
		ZVAL_BOOL(&_2$$5, ignoreNull);
		zephir_array_update_string(&indexOptions, SL("ignoreNull"), &_2$$5, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "geo");
	ZVAL_NULL(&_4);
	ZEPHIR_RETURN_CALL_METHOD(this_ptr, "index", NULL, 0, &collectionId, &_3, &fields, &_4, &indexOptions);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, index) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_2 = NULL;
	zend_bool unique;
	zval attributes, indexOptions;
	zval type;
	zval *collectionId, collectionId_sub, *type_param = NULL, *attributes_param = NULL, *unique_param = NULL, *indexOptions_param = NULL, urlParams, bodyParams, url, response, httpCode, _1, _3, _4, _0$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&urlParams);
	ZVAL_UNDEF(&bodyParams);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&httpCode);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&type);
	ZVAL_UNDEF(&attributes);
	ZVAL_UNDEF(&indexOptions);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 4, &collectionId, &type_param, &attributes_param, &unique_param, &indexOptions_param);

	if (!type_param) {
		ZEPHIR_INIT_VAR(&type);
		ZVAL_STRING(&type, "");
	} else {
		zephir_get_strval(&type, type_param);
	}
	if (!attributes_param) {
		ZEPHIR_INIT_VAR(&attributes);
		array_init(&attributes);
	} else {
		zephir_get_arrval(&attributes, attributes_param);
	}
	if (!unique_param) {
		unique = 0;
	} else {
		unique = zephir_get_boolval(unique_param);
	}
	if (!indexOptions_param) {
		ZEPHIR_INIT_VAR(&indexOptions);
		array_init(&indexOptions);
	} else {
		zephir_get_arrval(&indexOptions, indexOptions_param);
	}


	ZEPHIR_INIT_VAR(&urlParams);
	zephir_create_array(&urlParams, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&urlParams, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&bodyParams);
	zephir_create_array(&bodyParams, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&bodyParams, SL("type"), &type, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&bodyParams, SL("fields"), &attributes, PH_COPY | PH_SEPARATE);
	if (unique != 0) {
		ZEPHIR_INIT_VAR(&_0$$3);
		ZVAL_BOOL(&_0$$3, unique);
		zephir_array_update_string(&bodyParams, SL("unique"), &_0$$3, PH_COPY | PH_SEPARATE);
	}
	ZEPHIR_INIT_VAR(&_1);
	zephir_fast_array_merge(&_1, &bodyParams, &indexOptions TSRMLS_CC);
	ZEPHIR_CPY_WRT(&bodyParams, &_1);
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "/_api/index");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "appendparamsurl", &_2, 0, &_1, &urlParams);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &bodyParams);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_3, "post", NULL, 0, &url, &_4);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&httpCode, &response, "gethttpcode", NULL, 0);
	zephir_check_call_status();
	if (ZEPHIR_IS_LONG(&httpCode, 404)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Collection-identifier is unknown", "arangodbclient/collectionhandler.zep", 421);
		return;
	} else {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "cannot create unique index due to documents violating uniqueness", "arangodbclient/collectionhandler.zep", 423);
		return;
	}
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getIndex) {

	zval _1;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *collection_param = NULL, *indexId_param = NULL, url, response, _2, _3;
	zval collection, indexId;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection);
	ZVAL_UNDEF(&indexId);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &collection_param, &indexId_param);

	zephir_get_strval(&collection, collection_param);
	zephir_get_strval(&indexId, indexId_param);


	ZEPHIR_INIT_VAR(&_1);
	zephir_create_array(&_1, 2, 0 TSRMLS_CC);
	zephir_array_fast_append(&_1, &collection);
	zephir_array_fast_append(&_1, &indexId);
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/index");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "buildurl", &_0, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_3, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getIndexes) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *collectionId, collectionId_sub, urlParams, url, response, _1, _2;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&urlParams);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collectionId);



	ZEPHIR_INIT_VAR(&urlParams);
	zephir_create_array(&urlParams, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&urlParams, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "/_api/index");
	ZEPHIR_CALL_CE_STATIC(&url, arangodbclient_urlhelper_ce, "appendparamsurl", &_0, 0, &_1, &urlParams);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&response, &_2, "get", NULL, 0, &url);
	zephir_check_call_status();
	ZEPHIR_RETURN_CALL_METHOD(&response, "getjson", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, dropIndex) {

	zephir_fcall_cache_entry *_3 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *indexHandle, indexHandle_sub, handle, tmpArrayb5e9333e175ea0b890a4202762ac95d9, _0, _1, _2, _4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&indexHandle_sub);
	ZVAL_UNDEF(&handle);
	ZVAL_UNDEF(&tmpArrayb5e9333e175ea0b890a4202762ac95d9);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &indexHandle);



	ZEPHIR_INIT_VAR(&handle);
	zephir_fast_explode_str(&handle, SL("/"), indexHandle, LONG_MAX TSRMLS_CC);
	ZEPHIR_INIT_VAR(&tmpArrayb5e9333e175ea0b890a4202762ac95d9);
	zephir_create_array(&tmpArrayb5e9333e175ea0b890a4202762ac95d9, 2, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_0);
	zephir_array_fetch_long(&_0, &handle, 0, PH_NOISY, "arangodbclient/collectionhandler.zep", 452 TSRMLS_CC);
	zephir_array_fast_append(&tmpArrayb5e9333e175ea0b890a4202762ac95d9, &_0);
	ZEPHIR_OBS_NVAR(&_0);
	zephir_array_fetch_long(&_0, &handle, 1, PH_NOISY, "arangodbclient/collectionhandler.zep", 452 TSRMLS_CC);
	zephir_array_fast_append(&tmpArrayb5e9333e175ea0b890a4202762ac95d9, &_0);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "/_api/index");
	ZEPHIR_CALL_CE_STATIC(&_2, arangodbclient_urlhelper_ce, "buildurl", &_3, 0, &_4, &tmpArrayb5e9333e175ea0b890a4202762ac95d9);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, &_1, "delete", NULL, 0, &_2);
	zephir_check_call_status();
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, any) {

	zend_class_entry *_6$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collectionId, collectionId_sub, _documentClass, data, response, _0, _1, _2, _3, _4, _5$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collectionId);



	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&data, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/simple/any");
	ZEPHIR_CALL_METHOD(&response, &_1, "put", NULL, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_4, &data, SL("document"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 465 TSRMLS_CC);
	if (zephir_is_true(&_4)) {
		zephir_array_fetch_string(&_5$$3, &data, SL("document"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 466 TSRMLS_CC);
		_6$$3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_RETURN_CALL_CE_STATIC(_6$$3, "createfromarray", NULL, 0, &_5$$3);
		zephir_check_call_status();
		RETURN_MM();
	} else {
		RETURN_MM_NULL();
	}

}

PHP_METHOD(ArangoDBClient_CollectionHandler, all) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collectionId, collectionId_sub, *options_param = NULL, __$null, body, tmpArrayb4309705023daa108a265ed0bd056f70, response, batchPart, tmpArray898d932f0f861707bf077f61cd989874, _0, _1, _2, _3, _4, _5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArrayb4309705023daa108a265ed0bd056f70);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&tmpArray898d932f0f861707bf077f61cd989874);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &collectionId, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 1, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArrayb4309705023daa108a265ed0bd056f70);
	zephir_create_array(&tmpArrayb4309705023daa108a265ed0bd056f70, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArrayb4309705023daa108a265ed0bd056f70, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArrayb4309705023daa108a265ed0bd056f70, SL("skip"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArrayb4309705023daa108a265ed0bd056f70);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_0);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/simple/all");
	ZEPHIR_CALL_METHOD(&response, &_0, "put", NULL, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&batchPart, &response, "getbatchpart", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&batchPart)) {
		RETURN_CCTOR(&batchPart);
	}
	ZEPHIR_INIT_VAR(&tmpArray898d932f0f861707bf077f61cd989874);
	zephir_create_array(&tmpArray898d932f0f861707bf077f61cd989874, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_3);
	zephir_read_property(&_3, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&tmpArray898d932f0f861707bf077f61cd989874, SL("_documentClass"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_2);
	zephir_fast_array_merge(&_2, &tmpArray898d932f0f861707bf077f61cd989874, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_2);
	object_init_ex(return_value, arangodbclient_cursor_ce);
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_5, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 19, &_4, &_5, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, getAllIds) {

	zval _5;
	zephir_fcall_cache_entry *_10 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, params, response, data, cursor, ids, location, _0, _1, _2, _3, _4, _6, _7, *_8, _9$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&params);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&cursor);
	ZVAL_UNDEF(&ids);
	ZVAL_UNDEF(&location);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_9$$4);
	ZVAL_UNDEF(&_5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &collection);



	ZEPHIR_INIT_VAR(&params);
	zephir_create_array(&params, 1, 0 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "makecollection", NULL, 0, collection);
	zephir_check_call_status();
	zephir_array_update_string(&params, SL("collection"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "json_encode_wrapper", NULL, 0, &params);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_2);
	ZVAL_STRING(&_2, "/_api/simple/all-keys");
	ZEPHIR_CALL_METHOD(&response, &_0, "put", NULL, 0, &_2, &_1);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	if (!(zephir_array_isset_string(&data, SL("result")))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Got an invalid document list from the server", "arangodbclient/collectionhandler.zep", 497);
		return;
	}
	ZEPHIR_INIT_VAR(&cursor);
	object_init_ex(&cursor, arangodbclient_cursor_ce);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_5);
	zephir_create_array(&_5, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_6);
	zephir_read_property(&_6, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&_5, SL("_documentClass"), &_6, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(NULL, &cursor, "__construct", NULL, 19, &_3, &_4, &_5);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&ids);
	array_init(&ids);
	ZEPHIR_CALL_METHOD(&_7, &cursor, "getall", NULL, 38);
	zephir_check_call_status();
	zephir_is_iterable(&_7, 0, "arangodbclient/collectionhandler.zep", 504);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_7), _8)
	{
		ZEPHIR_INIT_NVAR(&location);
		ZVAL_COPY(&location, _8);
		ZEPHIR_CALL_CE_STATIC(&_9$$4, arangodbclient_urlhelper_ce, "getdocumentidfromlocation", &_10, 0, &location);
		zephir_check_call_status();
		zephir_array_append(&ids, &_9$$4, PH_SEPARATE, "arangodbclient/collectionhandler.zep", 502);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&location);
	RETURN_CCTOR(&ids);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, byExample) {

	zend_class_entry *_2$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options, _6;
	zval *collectionId, collectionId_sub, *document = NULL, document_sub, *options_param = NULL, __$null, __$false, _documentClass, body, tmpArray501c87e4e9953e248cd2fef6f085d22a, tmpArray77d855f102ad46854dec832b413f9ba6, response, batchPart, _0, _3, _4, _5, _7, _8, _9, _1$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_NULL(&__$null);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArray501c87e4e9953e248cd2fef6f085d22a);
	ZVAL_UNDEF(&tmpArray77d855f102ad46854dec832b413f9ba6);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_6);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collectionId, &document, &options_param);

	ZEPHIR_SEPARATE_PARAM(document);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	if (Z_TYPE_P(document) == IS_ARRAY) {
		_2$$3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_1$$3, _2$$3, "createfromarray", NULL, 0, document, &options);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(document, &_1$$3);
	}
	if (!(zephir_instance_of_ev(document, arangodbclient_document_ce TSRMLS_CC))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid example document specification", "arangodbclient/collectionhandler.zep", 516);
		return;
	}
	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_3, document, "getallasobject", NULL, 0, &tmpArray501c87e4e9953e248cd2fef6f085d22a);
	zephir_check_call_status();
	zephir_array_update_string(&body, SL("example"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArray77d855f102ad46854dec832b413f9ba6);
	zephir_create_array(&tmpArray77d855f102ad46854dec832b413f9ba6, 3, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "batchSize");
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnectionoption", NULL, 0, &_4);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray77d855f102ad46854dec832b413f9ba6, SL("batchSize"), &_3, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray77d855f102ad46854dec832b413f9ba6, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray77d855f102ad46854dec832b413f9ba6, SL("skip"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArray77d855f102ad46854dec832b413f9ba6);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_3);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_4);
	ZVAL_STRING(&_4, "/_api/simple/by-example");
	ZEPHIR_CALL_METHOD(&response, &_3, "put", NULL, 0, &_4, &_5);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&batchPart, &response, "getbatchpart", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&batchPart)) {
		RETURN_CCTOR(&batchPart);
	}
	zephir_array_update_string(&options, SL("isNew"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_4);
	ZEPHIR_INIT_VAR(&_6);
	zephir_create_array(&_6, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_7);
	zephir_read_property(&_7, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&_6, SL("_documentClass"), &_7, PH_COPY | PH_SEPARATE);
	zephir_fast_array_merge(&_4, &_6, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_4);
	object_init_ex(return_value, arangodbclient_cursor_ce);
	ZEPHIR_CALL_METHOD(&_8, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_9, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 19, &_8, &_9, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, firstExample) {

	zend_class_entry *_7, *_2$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collectionId, collectionId_sub, *document = NULL, document_sub, *options_param = NULL, __$false, _documentClass, data, response, batchPart, _0, _3, _4, _5, _6, _1$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&data);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collectionId, &document, &options_param);

	ZEPHIR_SEPARATE_PARAM(document);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	if (Z_TYPE_P(document) == IS_ARRAY) {
		_2$$3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_1$$3, _2$$3, "createfromarray", NULL, 0, document, &options);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(document, &_1$$3);
	}
	if (!(zephir_instance_of_ev(document, arangodbclient_document_ce TSRMLS_CC))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid example document specification", "arangodbclient/collectionhandler.zep", 540);
		return;
	}
	ZEPHIR_INIT_VAR(&data);
	zephir_create_array(&data, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&data, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_3, document, "getall", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&data, SL("example"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &data);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_5);
	ZVAL_STRING(&_5, "/_api/simple/first-example");
	ZEPHIR_CALL_METHOD(&response, &_3, "put", NULL, 0, &_5, &_4);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&batchPart, &response, "getbatchpart", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&batchPart)) {
		RETURN_CCTOR(&batchPart);
	}
	ZEPHIR_CALL_METHOD(&data, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	zephir_array_fetch_string(&_6, &data, SL("document"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 550 TSRMLS_CC);
	_7 = zephir_fetch_class(&_documentClass TSRMLS_CC);
	ZEPHIR_RETURN_CALL_CE_STATIC(_7, "createfromarray", NULL, 0, &_6, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, fulltext) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collection, collection_sub, *attribute, attribute_sub, *query, query_sub, *options_param = NULL, __$null, __$false, body, tmpArray79f34018cea2cd616a55369568538921, response, tmpArray22eb4126d6e611e73ecbc3d346eb6c09, _0, _1, _2, _3, _4, _5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&attribute_sub);
	ZVAL_UNDEF(&query_sub);
	ZVAL_NULL(&__$null);
	ZVAL_BOOL(&__$false, 0);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArray79f34018cea2cd616a55369568538921);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray22eb4126d6e611e73ecbc3d346eb6c09);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &collection, &attribute, &query, &options_param);

	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 3, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collection, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&body, SL("attribute"), attribute, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&body, SL("query"), query, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArray79f34018cea2cd616a55369568538921);
	zephir_create_array(&tmpArray79f34018cea2cd616a55369568538921, 4, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "batchSize");
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnectionoption", NULL, 0, &_1);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray79f34018cea2cd616a55369568538921, SL("batchSize"), &_0, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray79f34018cea2cd616a55369568538921, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray79f34018cea2cd616a55369568538921, SL("skip"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray79f34018cea2cd616a55369568538921, SL("index"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArray79f34018cea2cd616a55369568538921);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_0);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "/_api/simple/fulltext");
	ZEPHIR_CALL_METHOD(&response, &_0, "put", NULL, 0, &_1, &_2);
	zephir_check_call_status();
	zephir_array_update_string(&options, SL("_isNew"), &__$false, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArray22eb4126d6e611e73ecbc3d346eb6c09);
	zephir_create_array(&tmpArray22eb4126d6e611e73ecbc3d346eb6c09, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_3);
	zephir_read_property(&_3, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&tmpArray22eb4126d6e611e73ecbc3d346eb6c09, SL("_documentClass"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_1);
	zephir_fast_array_merge(&_1, &tmpArray22eb4126d6e611e73ecbc3d346eb6c09, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_1);
	object_init_ex(return_value, arangodbclient_cursor_ce);
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_5, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 19, &_4, &_5, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, updateByExample) {

	zend_class_entry *_2$$3, *_4$$4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collectionId, collectionId_sub, *example = NULL, example_sub, *newValue = NULL, newValue_sub, *options_param = NULL, __$true, __$null, _documentClass, body, tmpArraye0bef1d6763f840058cf3777a2691831, tmpArraye26cb364cfba8279efc8486e9f87ed72, tmpArraye0df7821e5993e68d3d962cd02191652, response, responseArray, _0, _5, _6, _7, _8, _9, _1$$3, _3$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&example_sub);
	ZVAL_UNDEF(&newValue_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArraye0bef1d6763f840058cf3777a2691831);
	ZVAL_UNDEF(&tmpArraye26cb364cfba8279efc8486e9f87ed72);
	ZVAL_UNDEF(&tmpArraye0df7821e5993e68d3d962cd02191652);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&responseArray);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &collectionId, &example, &newValue, &options_param);

	ZEPHIR_SEPARATE_PARAM(example);
	ZEPHIR_SEPARATE_PARAM(newValue);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	if (Z_TYPE_P(example) == IS_ARRAY) {
		_2$$3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_1$$3, _2$$3, "createfromarray", NULL, 0, example);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(example, &_1$$3);
	}
	if (Z_TYPE_P(newValue) == IS_ARRAY) {
		_4$$4 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_3$$4, _4$$4, "createfromarray", NULL, 0, newValue);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(newValue, &_3$$4);
	}
	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 3, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_5, example, "getallasobject", NULL, 0, &tmpArraye0bef1d6763f840058cf3777a2691831);
	zephir_check_call_status();
	zephir_array_update_string(&body, SL("example"), &_5, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_5, newValue, "getallasobject", NULL, 0, &tmpArraye26cb364cfba8279efc8486e9f87ed72);
	zephir_check_call_status();
	zephir_array_update_string(&body, SL("newValue"), &_5, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArraye0df7821e5993e68d3d962cd02191652);
	zephir_create_array(&tmpArraye0df7821e5993e68d3d962cd02191652, 3, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_6);
	ZVAL_STRING(&_6, "waitForSync");
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "getconnectionoption", NULL, 0, &_6);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArraye0df7821e5993e68d3d962cd02191652, SL("waitForSync"), &_5, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArraye0df7821e5993e68d3d962cd02191652, SL("keepNull"), &__$true, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArraye0df7821e5993e68d3d962cd02191652, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArraye0df7821e5993e68d3d962cd02191652);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_5);
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_7, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_6);
	ZVAL_STRING(&_6, "/_api/simple/update-by-example");
	ZEPHIR_CALL_METHOD(&response, &_5, "put", NULL, 0, &_6, &_7);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&responseArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_8, &responseArray, SL("error"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 583 TSRMLS_CC);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_8)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid example document specification", "arangodbclient/collectionhandler.zep", 584);
		return;
	}
	zephir_array_fetch_string(&_9, &responseArray, SL("updated"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 586 TSRMLS_CC);
	RETURN_CTOR(&_9);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, replaceByExample) {

	zend_class_entry *_2$$3, *_4$$4;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collectionId, collectionId_sub, *example = NULL, example_sub, *newValue = NULL, newValue_sub, *options_param = NULL, __$true, __$null, _documentClass, body, tmpArray2a732f433113f0f0e82b77c8d9b8be2e, tmpArray1443a62ccb6b0bf7da8b3401ab10de94, tmpArray28780215d6fbd9be30c483270b45216d, response, responseArray, _0, _5, _6, _7, _8, _9, _1$$3, _3$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&example_sub);
	ZVAL_UNDEF(&newValue_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArray2a732f433113f0f0e82b77c8d9b8be2e);
	ZVAL_UNDEF(&tmpArray1443a62ccb6b0bf7da8b3401ab10de94);
	ZVAL_UNDEF(&tmpArray28780215d6fbd9be30c483270b45216d);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&responseArray);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_9);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &collectionId, &example, &newValue, &options_param);

	ZEPHIR_SEPARATE_PARAM(example);
	ZEPHIR_SEPARATE_PARAM(newValue);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	if (Z_TYPE_P(example) == IS_ARRAY) {
		_2$$3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_1$$3, _2$$3, "createfromarray", NULL, 0, example);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(example, &_1$$3);
	}
	if (Z_TYPE_P(newValue) == IS_ARRAY) {
		_4$$4 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_3$$4, _4$$4, "createfromarray", NULL, 0, newValue);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(newValue, &_3$$4);
	}
	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 3, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_5, example, "getallasobject", NULL, 0, &tmpArray2a732f433113f0f0e82b77c8d9b8be2e);
	zephir_check_call_status();
	zephir_array_update_string(&body, SL("example"), &_5, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_5, newValue, "getallasobject", NULL, 0, &tmpArray1443a62ccb6b0bf7da8b3401ab10de94);
	zephir_check_call_status();
	zephir_array_update_string(&body, SL("newValue"), &_5, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArray28780215d6fbd9be30c483270b45216d);
	zephir_create_array(&tmpArray28780215d6fbd9be30c483270b45216d, 3, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_6);
	ZVAL_STRING(&_6, "waitForSync");
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "getconnectionoption", NULL, 0, &_6);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray28780215d6fbd9be30c483270b45216d, SL("waitForSync"), &_5, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray28780215d6fbd9be30c483270b45216d, SL("keepNull"), &__$true, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray28780215d6fbd9be30c483270b45216d, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArray28780215d6fbd9be30c483270b45216d);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_5);
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_7, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_6);
	ZVAL_STRING(&_6, "/_api/simple/replace-by-example");
	ZEPHIR_CALL_METHOD(&response, &_5, "put", NULL, 0, &_6, &_7);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&responseArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_8, &responseArray, SL("error"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 605 TSRMLS_CC);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_8)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid example document specification", "arangodbclient/collectionhandler.zep", 606);
		return;
	}
	zephir_array_fetch_string(&_9, &responseArray, SL("replaced"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 608 TSRMLS_CC);
	RETURN_CTOR(&_9);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, removeByExample) {

	zend_class_entry *_2$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval *collectionId, collectionId_sub, *document = NULL, document_sub, *options_param = NULL, __$null, _documentClass, body, tmpArray7417a5d82017aee74cff0f99e50cce34, tmpArray3c1dffbfced281231f0d6051af9b9de7, response, responseArray, _0, _3, _4, _5, _6, _7, _1$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&document_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArray7417a5d82017aee74cff0f99e50cce34);
	ZVAL_UNDEF(&tmpArray3c1dffbfced281231f0d6051af9b9de7);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&responseArray);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collectionId, &document, &options_param);

	ZEPHIR_SEPARATE_PARAM(document);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	if (Z_TYPE_P(document) == IS_ARRAY) {
		_2$$3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_1$$3, _2$$3, "createfromarray", NULL, 0, document, &options);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(document, &_1$$3);
	}
	if (!(zephir_instance_of_ev(document, arangodbclient_document_ce TSRMLS_CC))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid example document specification", "arangodbclient/collectionhandler.zep", 620);
		return;
	}
	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_3, document, "getallasobject", NULL, 0, &tmpArray7417a5d82017aee74cff0f99e50cce34);
	zephir_check_call_status();
	zephir_array_update_string(&body, SL("example"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArray3c1dffbfced281231f0d6051af9b9de7);
	zephir_create_array(&tmpArray3c1dffbfced281231f0d6051af9b9de7, 2, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_4);
	ZVAL_STRING(&_4, "waitForSync");
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnectionoption", NULL, 0, &_4);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray3c1dffbfced281231f0d6051af9b9de7, SL("waitForSync"), &_3, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray3c1dffbfced281231f0d6051af9b9de7, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArray3c1dffbfced281231f0d6051af9b9de7);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_3);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_5, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_4);
	ZVAL_STRING(&_4, "/_api/simple/remove-by-example");
	ZEPHIR_CALL_METHOD(&response, &_3, "put", NULL, 0, &_4, &_5);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&responseArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	zephir_array_fetch_string(&_6, &responseArray, SL("error"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 627 TSRMLS_CC);
	if (ZEPHIR_IS_TRUE_IDENTICAL(&_6)) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid example document specification", "arangodbclient/collectionhandler.zep", 628);
		return;
	}
	zephir_array_fetch_string(&_7, &responseArray, SL("deleted"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 630 TSRMLS_CC);
	RETURN_CTOR(&_7);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, removeByKeys) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval keys, options;
	zval *collectionId, collectionId_sub, *keys_param = NULL, *options_param = NULL, body, tmpArray28ebddc3d08cf60d9fce4b602c3913c3, response, batchPart, responseArray, tmpArray745db7ab214f663ad33a2e900f8dadcd, _0, _1, _2, _3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArray28ebddc3d08cf60d9fce4b602c3913c3);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&batchPart);
	ZVAL_UNDEF(&responseArray);
	ZVAL_UNDEF(&tmpArray745db7ab214f663ad33a2e900f8dadcd);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&keys);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collectionId, &keys_param, &options_param);

	zephir_get_arrval(&keys, keys_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&body, SL("keys"), &keys, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArray28ebddc3d08cf60d9fce4b602c3913c3);
	zephir_create_array(&tmpArray28ebddc3d08cf60d9fce4b602c3913c3, 1, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "waitForSync");
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnectionoption", NULL, 0, &_1);
	zephir_check_call_status();
	zephir_array_update_string(&tmpArray28ebddc3d08cf60d9fce4b602c3913c3, SL("waitForSync"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArray28ebddc3d08cf60d9fce4b602c3913c3);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_0);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_1);
	ZVAL_STRING(&_1, "/_api/simple/remove-by-keys");
	ZEPHIR_CALL_METHOD(&response, &_0, "put", NULL, 0, &_1, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&batchPart, &response, "getbatchpart", NULL, 0);
	zephir_check_call_status();
	if (zephir_is_true(&batchPart)) {
		RETURN_CCTOR(&batchPart);
	}
	ZEPHIR_CALL_METHOD(&responseArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray745db7ab214f663ad33a2e900f8dadcd);
	zephir_create_array(&tmpArray745db7ab214f663ad33a2e900f8dadcd, 2, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_3);
	zephir_array_fetch_string(&_3, &responseArray, SL("removed"), PH_NOISY, "arangodbclient/collectionhandler.zep", 646 TSRMLS_CC);
	zephir_array_update_string(&tmpArray745db7ab214f663ad33a2e900f8dadcd, SL("removed"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_OBS_NVAR(&_3);
	zephir_array_fetch_string(&_3, &responseArray, SL("ignored"), PH_NOISY, "arangodbclient/collectionhandler.zep", 646 TSRMLS_CC);
	zephir_array_update_string(&tmpArray745db7ab214f663ad33a2e900f8dadcd, SL("ignored"), &_3, PH_COPY | PH_SEPARATE);
	RETURN_CCTOR(&tmpArray745db7ab214f663ad33a2e900f8dadcd);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, lookupByKeys) {

	zend_class_entry *_7$$3;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval keys, options;
	zval *collectionId, collectionId_sub, *keys_param = NULL, *options_param = NULL, _documentClass, body, response, responseArray, result, document, _0, _1, _2, _3, _4, *_5, _6$$3;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&_documentClass);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&responseArray);
	ZVAL_UNDEF(&result);
	ZVAL_UNDEF(&document);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_6$$3);
	ZVAL_UNDEF(&keys);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 1, &collectionId, &keys_param, &options_param);

	zephir_get_arrval(&keys, keys_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	zephir_read_property(&_0, this_ptr, SL("_documentClass"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CPY_WRT(&_documentClass, &_0);
	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 2, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&body, SL("keys"), &keys, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_3);
	ZVAL_STRING(&_3, "/_api/simple/lookup-by-keys");
	ZEPHIR_CALL_METHOD(&response, &_1, "put", NULL, 0, &_3, &_2);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&responseArray, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&result);
	array_init(&result);
	zephir_array_fetch_string(&_4, &responseArray, SL("documents"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 659 TSRMLS_CC);
	zephir_is_iterable(&_4, 0, "arangodbclient/collectionhandler.zep", 662);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_4), _5)
	{
		ZEPHIR_INIT_NVAR(&document);
		ZVAL_COPY(&document, _5);
		_7$$3 = zephir_fetch_class(&_documentClass TSRMLS_CC);
		ZEPHIR_CALL_CE_STATIC(&_6$$3, _7$$3, "createfromarray", NULL, 0, &document, &options);
		zephir_check_call_status();
		zephir_array_append(&result, &_6$$3, PH_SEPARATE, "arangodbclient/collectionhandler.zep", 660);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&document);
	RETURN_CCTOR(&result);

}

PHP_METHOD(ArangoDBClient_CollectionHandler, range) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	zval attribute;
	zval *collectionId, collectionId_sub, *attribute_param = NULL, *left, left_sub, *right, right_sub, *options_param = NULL, __$null, body, tmpArray53bb88ffd15501369e105b576a3ae2ff, response, tmpArray640825e4fc8449ec8902fd848e62896b, _0, _1, _3, _4, _5, _6, _7, _8, _2$$4;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_UNDEF(&left_sub);
	ZVAL_UNDEF(&right_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArray53bb88ffd15501369e105b576a3ae2ff);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray640825e4fc8449ec8902fd848e62896b);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8);
	ZVAL_UNDEF(&_2$$4);
	ZVAL_UNDEF(&attribute);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 1, &collectionId, &attribute_param, &left, &right, &options_param);

	zephir_get_strval(&attribute, attribute_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	if (ZEPHIR_IS_STRING_IDENTICAL(&attribute, "")) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "Invalid attribute specification", "arangodbclient/collectionhandler.zep", 670);
		return;
	}
	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, ".");
	ZEPHIR_INIT_VAR(&_1);
	zephir_fast_strpos(&_1, &attribute, &_0, 0 );
	if (!ZEPHIR_IS_FALSE_IDENTICAL(&_1)) {
		ZEPHIR_INIT_VAR(&_2$$4);
		zephir_fast_explode_str(&_2$$4, SL("."), &attribute, LONG_MAX TSRMLS_CC);
		zephir_get_strval(&attribute, &_2$$4);
	}
	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 4, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&body, SL("attribute"), &attribute, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&body, SL("left"), left, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&body, SL("right"), right, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArray53bb88ffd15501369e105b576a3ae2ff);
	zephir_create_array(&tmpArray53bb88ffd15501369e105b576a3ae2ff, 3, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArray53bb88ffd15501369e105b576a3ae2ff, SL("closed"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray53bb88ffd15501369e105b576a3ae2ff, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArray53bb88ffd15501369e105b576a3ae2ff, SL("skip"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArray53bb88ffd15501369e105b576a3ae2ff);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_3);
	ZEPHIR_CALL_METHOD(&_3, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_5);
	ZVAL_STRING(&_5, "/_api/simple/range");
	ZEPHIR_CALL_METHOD(&response, &_3, "put", NULL, 0, &_5, &_4);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray640825e4fc8449ec8902fd848e62896b);
	zephir_create_array(&tmpArray640825e4fc8449ec8902fd848e62896b, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_6);
	zephir_read_property(&_6, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&tmpArray640825e4fc8449ec8902fd848e62896b, SL("_documentClass"), &_6, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_5);
	zephir_fast_array_merge(&_5, &tmpArray640825e4fc8449ec8902fd848e62896b, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_5);
	object_init_ex(return_value, arangodbclient_cursor_ce);
	ZEPHIR_CALL_METHOD(&_7, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_8, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 19, &_7, &_8, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, near) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval options;
	double latitude, longitude;
	zval *collectionId, collectionId_sub, *latitude_param = NULL, *longitude_param = NULL, *options_param = NULL, __$null, body, tmpArrayfcb63ce10477b922f657fdc50b5076fc, response, tmpArray56d8a63cf21801084714a2cbe3bf2781, _0, _1, _2, _3, _4, _5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArrayfcb63ce10477b922f657fdc50b5076fc);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray56d8a63cf21801084714a2cbe3bf2781);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 1, &collectionId, &latitude_param, &longitude_param, &options_param);

	latitude = zephir_get_doubleval(latitude_param);
	longitude = zephir_get_doubleval(longitude_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 3, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_0);
	ZVAL_DOUBLE(&_0, latitude);
	zephir_array_update_string(&body, SL("latitude"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_DOUBLE(&_0, longitude);
	zephir_array_update_string(&body, SL("longitude"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArrayfcb63ce10477b922f657fdc50b5076fc);
	zephir_create_array(&tmpArrayfcb63ce10477b922f657fdc50b5076fc, 3, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArrayfcb63ce10477b922f657fdc50b5076fc, SL("distance"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArrayfcb63ce10477b922f657fdc50b5076fc, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArrayfcb63ce10477b922f657fdc50b5076fc, SL("skip"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArrayfcb63ce10477b922f657fdc50b5076fc);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_1);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_STRING(&_0, "/_api/simple/near");
	ZEPHIR_CALL_METHOD(&response, &_1, "put", NULL, 0, &_0, &_2);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray56d8a63cf21801084714a2cbe3bf2781);
	zephir_create_array(&tmpArray56d8a63cf21801084714a2cbe3bf2781, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_3);
	zephir_read_property(&_3, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&tmpArray56d8a63cf21801084714a2cbe3bf2781, SL("_documentClass"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_0);
	zephir_fast_array_merge(&_0, &tmpArray56d8a63cf21801084714a2cbe3bf2781, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_0);
	object_init_ex(return_value, arangodbclient_cursor_ce);
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_5, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 19, &_4, &_5, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, within) {

	zval options;
	zend_long radius, ZEPHIR_LAST_CALL_STATUS;
	double latitude, longitude;
	zval *collectionId, collectionId_sub, *latitude_param = NULL, *longitude_param = NULL, *radius_param = NULL, *options_param = NULL, __$null, body, tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266, response, tmpArray7e61752741f10588704b6c2e576861ae, _0, _1, _2, _3, _4, _5;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collectionId_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&body);
	ZVAL_UNDEF(&tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&tmpArray7e61752741f10588704b6c2e576861ae);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_5);
	ZVAL_UNDEF(&options);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 1, &collectionId, &latitude_param, &longitude_param, &radius_param, &options_param);

	latitude = zephir_get_doubleval(latitude_param);
	longitude = zephir_get_doubleval(longitude_param);
	radius = zephir_get_intval(radius_param);
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	ZEPHIR_INIT_VAR(&body);
	zephir_create_array(&body, 4, 0 TSRMLS_CC);
	zephir_array_update_string(&body, SL("collection"), collectionId, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&_0);
	ZVAL_DOUBLE(&_0, latitude);
	zephir_array_update_string(&body, SL("latitude"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_DOUBLE(&_0, longitude);
	zephir_array_update_string(&body, SL("longitude"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_LONG(&_0, radius);
	zephir_array_update_string(&body, SL("radius"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_VAR(&tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266);
	zephir_create_array(&tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266, 3, 0 TSRMLS_CC);
	zephir_array_update_string(&tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266, SL("distance"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266, SL("limit"), &__$null, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266, SL("skip"), &__$null, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "includeoptionsinbody", NULL, 0, &options, &body, &tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(&body, &_1);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "json_encode_wrapper", NULL, 0, &body);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(&_0);
	ZVAL_STRING(&_0, "/_api/simple/within");
	ZEPHIR_CALL_METHOD(&response, &_1, "put", NULL, 0, &_0, &_2);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&tmpArray7e61752741f10588704b6c2e576861ae);
	zephir_create_array(&tmpArray7e61752741f10588704b6c2e576861ae, 1, 0 TSRMLS_CC);
	ZEPHIR_OBS_VAR(&_3);
	zephir_read_property(&_3, this_ptr, SL("_documentClass"), PH_NOISY_CC);
	zephir_array_update_string(&tmpArray7e61752741f10588704b6c2e576861ae, SL("_documentClass"), &_3, PH_COPY | PH_SEPARATE);
	ZEPHIR_INIT_NVAR(&_0);
	zephir_fast_array_merge(&_0, &tmpArray7e61752741f10588704b6c2e576861ae, &options TSRMLS_CC);
	ZEPHIR_CPY_WRT(&options, &_0);
	object_init_ex(return_value, arangodbclient_cursor_ce);
	ZEPHIR_CALL_METHOD(&_4, this_ptr, "getconnection", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_5, &response, "getjson", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 19, &_4, &_5, &options);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_CollectionHandler, createCollectionIfOptions) {

	zend_bool value = 0, _3$$5;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *collection, collection_sub, *options, options_sub, collectionOptions, e, _0, _1, _7, _2$$5, _4$$5, _5$$6, _6$$7;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&collection_sub);
	ZVAL_UNDEF(&options_sub);
	ZVAL_UNDEF(&collectionOptions);
	ZVAL_UNDEF(&e);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_2$$5);
	ZVAL_UNDEF(&_4$$5);
	ZVAL_UNDEF(&_5$$6);
	ZVAL_UNDEF(&_6$$7);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &collection, &options);



	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "createCollection");
	if (!(zephir_array_key_exists(options, &_0 TSRMLS_CC))) {
		RETURN_MM_NULL();
	}
	ZEPHIR_OBS_VAR(&_1);
	zephir_array_fetch_string(&_1, options, SL("createCollection"), PH_NOISY, "arangodbclient/collectionhandler.zep", 717 TSRMLS_CC);
	value = zephir_get_boolval(&_1);
	if (!(value)) {
		RETURN_MM_NULL();
	}
	ZEPHIR_INIT_VAR(&collectionOptions);
	array_init(&collectionOptions);
	if (zephir_array_isset_string(options, SL("createCollectionType"))) {
		zephir_array_fetch_string(&_2$$5, options, SL("createCollectionType"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 723 TSRMLS_CC);
		_3$$5 = ZEPHIR_IS_STRING_IDENTICAL(&_2$$5, "edge");
		if (!(_3$$5)) {
			zephir_array_fetch_string(&_4$$5, options, SL("createCollectionType"), PH_NOISY | PH_READONLY, "arangodbclient/collectionhandler.zep", 723 TSRMLS_CC);
			_3$$5 = ZEPHIR_IS_LONG_IDENTICAL(&_4$$5, 3);
		}
		if (_3$$5) {
			ZEPHIR_INIT_VAR(&_5$$6);
			ZVAL_LONG(&_5$$6, 3);
			zephir_array_update_string(&collectionOptions, SL("type"), &_5$$6, PH_COPY | PH_SEPARATE);
		} else {
			ZEPHIR_INIT_VAR(&_6$$7);
			ZVAL_LONG(&_6$$7, 2);
			zephir_array_update_string(&collectionOptions, SL("type"), &_6$$7, PH_COPY | PH_SEPARATE);
		}
	}

	/* try_start_1: */

		ZEPHIR_CALL_METHOD(NULL, this_ptr, "create", NULL, 0, collection, &collectionOptions);
		zephir_check_call_status_or_jump(try_end_1);

	try_end_1:

	if (EG(exception)) {
		ZEPHIR_INIT_VAR(&_7);
		ZVAL_OBJ(&_7, EG(exception));
		Z_ADDREF_P(&_7);
		if (zephir_instance_of_ev(&_7, arangodbclient_exception_ce TSRMLS_CC)) {
			zend_clear_exception(TSRMLS_C);
			ZEPHIR_CPY_WRT(&e, &_7);
			zephir_throw_exception_debug(&e, "arangodbclient/collectionhandler.zep", 732 TSRMLS_CC);
			ZEPHIR_MM_RESTORE();
			return;
		}
	}
	ZEPHIR_MM_RESTORE();

}

