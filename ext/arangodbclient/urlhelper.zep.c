
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
#include "kernel/string.h"
#include "kernel/operators.h"
#include "kernel/array.h"
#include "kernel/fcall.h"
#include "kernel/concat.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_UrlHelper) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, UrlHelper, arangodbclient, urlhelper, arangodbclient_urlhelper_method_entry, ZEND_ACC_EXPLICIT_ABSTRACT_CLASS);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_UrlHelper, getDocumentIdFromLocation) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *location_param = NULL, collectionName, id, tmpListCollectionNameId, _0, _1, _2$$6;
	zval location;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&location);
	ZVAL_UNDEF(&collectionName);
	ZVAL_UNDEF(&id);
	ZVAL_UNDEF(&tmpListCollectionNameId);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2$$6);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &location_param);

	zephir_get_strval(&location, location_param);


	if (!(Z_TYPE_P(&location) == IS_STRING)) {
		RETURN_MM_NULL();
	}
	ZEPHIR_INIT_VAR(&_0);
	ZVAL_STRING(&_0, "/_db/");
	ZEPHIR_INIT_VAR(&_1);
	zephir_fast_strpos(&_1, &location, &_0, 0 );
	if (ZEPHIR_IS_LONG_IDENTICAL(&_1, 0)) {
		ZEPHIR_INIT_VAR(&tmpListCollectionNameId);
		zephir_fast_explode_str(&tmpListCollectionNameId, SL("/"), &location, LONG_MAX TSRMLS_CC);
		ZEPHIR_OBS_VAR(&collectionName);
		zephir_array_fetch_long(&collectionName, &tmpListCollectionNameId, 5, PH_NOISY, "arangodbclient/urlhelper.zep", 14 TSRMLS_CC);
		ZEPHIR_OBS_VAR(&id);
		zephir_array_fetch_long(&id, &tmpListCollectionNameId, 6, PH_NOISY, "arangodbclient/urlhelper.zep", 15 TSRMLS_CC);
	} else {
		ZEPHIR_INIT_NVAR(&tmpListCollectionNameId);
		zephir_fast_explode_str(&tmpListCollectionNameId, SL("/"), &location, LONG_MAX TSRMLS_CC);
		ZEPHIR_OBS_NVAR(&collectionName);
		zephir_array_fetch_long(&collectionName, &tmpListCollectionNameId, 3, PH_NOISY, "arangodbclient/urlhelper.zep", 18 TSRMLS_CC);
		ZEPHIR_OBS_NVAR(&id);
		zephir_array_fetch_long(&id, &tmpListCollectionNameId, 4, PH_NOISY, "arangodbclient/urlhelper.zep", 19 TSRMLS_CC);
	}
	if (Z_TYPE_P(&id) == IS_STRING) {
		ZEPHIR_CALL_FUNCTION(&_2$$6, "urldecode", NULL, 62, &id);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(&id, &_2$$6);
	}
	ZEPHIR_CONCAT_VSV(return_value, &collectionName, "/", &id);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_UrlHelper, buildUrl) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_4 = NULL;
	zval parts;
	zval *baseUrl_param = NULL, *parts_param = NULL, url, part, tmpListPart, *_0, _1$$3, _2$$3, _3$$3, _5$$3;
	zval baseUrl;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&baseUrl);
	ZVAL_UNDEF(&url);
	ZVAL_UNDEF(&part);
	ZVAL_UNDEF(&tmpListPart);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_5$$3);
	ZVAL_UNDEF(&parts);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &baseUrl_param, &parts_param);

	zephir_get_strval(&baseUrl, baseUrl_param);
	if (!parts_param) {
		ZEPHIR_INIT_VAR(&parts);
		array_init(&parts);
	} else {
		zephir_get_arrval(&parts, parts_param);
	}


	ZEPHIR_CPY_WRT(&url, &baseUrl);
	zephir_is_iterable(&parts, 0, "arangodbclient/urlhelper.zep", 39);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&parts), _0)
	{
		ZEPHIR_INIT_NVAR(&part);
		ZVAL_COPY(&part, _0);
		ZEPHIR_INIT_NVAR(&_1$$3);
		ZVAL_STRING(&_1$$3, "/");
		ZEPHIR_INIT_NVAR(&_2$$3);
		zephir_fast_strpos(&_2$$3, &part, &_1$$3, 0 );
		if (!ZEPHIR_IS_FALSE_IDENTICAL(&_2$$3)) {
			ZEPHIR_INIT_NVAR(&tmpListPart);
			zephir_fast_explode_str(&tmpListPart, SL("/"), &part, LONG_MAX TSRMLS_CC);
			ZEPHIR_OBS_NVAR(&part);
			zephir_array_fetch_long(&part, &tmpListPart, 1, PH_NOISY, "arangodbclient/urlhelper.zep", 35 TSRMLS_CC);
		}
		ZEPHIR_CALL_FUNCTION(&_3$$3, "urlencode", &_4, 43, &part);
		zephir_check_call_status();
		ZEPHIR_INIT_LNVAR(_5$$3);
		ZEPHIR_CONCAT_SV(&_5$$3, "/", &_3$$3);
		zephir_concat_self(&url, &_5$$3 TSRMLS_CC);
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&part);
	RETURN_CCTOR(&url);

}

PHP_METHOD(ArangoDBClient_UrlHelper, appendParamsUrl) {

	zend_string *_3;
	zend_ulong _2;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_5 = NULL;
	zval params;
	zval *baseUrl_param = NULL, *params_param = NULL, value, _0, *_1, _6, _4$$4;
	zval baseUrl;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&baseUrl);
	ZVAL_UNDEF(&value);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&params);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &baseUrl_param, &params_param);

	zephir_get_strval(&baseUrl, baseUrl_param);
	zephir_get_arrval(&params, params_param);


	ZEPHIR_INIT_VAR(&_0);
	zephir_is_iterable(&params, 0, "arangodbclient/urlhelper.zep", 51);
	ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&params), _2, _3, _1)
	{
		ZEPHIR_INIT_NVAR(&_0);
		if (_3 != NULL) { 
			ZVAL_STR_COPY(&_0, _3);
		} else {
			ZVAL_LONG(&_0, _2);
		}
		ZEPHIR_INIT_NVAR(&value);
		ZVAL_COPY(&value, _1);
		if ((Z_TYPE_P(&value) == IS_TRUE || Z_TYPE_P(&value) == IS_FALSE)) {
			ZEPHIR_CALL_SELF(&_4$$4, "getboolstring", &_5, 0, &value);
			zephir_check_call_status();
			ZEPHIR_CPY_WRT(&value, &_4$$4);
		}
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&value);
	ZEPHIR_INIT_NVAR(&_0);
	ZEPHIR_CALL_FUNCTION(&_6, "http_build_query", NULL, 63, &params);
	zephir_check_call_status();
	ZEPHIR_CONCAT_VSV(return_value, &baseUrl, "?", &_6);
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_UrlHelper, getBoolString) {

	zval *value, value_sub, _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&value_sub);
	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value);



	ZEPHIR_INIT_VAR(&_0);
	if (zephir_is_true(value)) {
		ZVAL_STRING(&_0, "true");
	} else {
		ZVAL_STRING(&_0, "false");
	}
	RETURN_CCTOR(&_0);

}

